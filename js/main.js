const urlParams = new URLSearchParams(window.location.search);
const THE_OWNER = urlParams.get('owner');
const MAP_NAME = urlParams.get('map');

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">Евгений Фрадкин</a> | Спорт. карты <a href="https://t.me/orient_spb" target="_blank">СПб и области</a> на <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

const ZERO_LATLNG = new L.LatLng(0, 0);
const centerX = 59.944179;
const centerY = 30.320337;

const multiX = 1e-5;
const multiY = 2e-5;

let map;
let opacitySlider;
let marker1, marker2, marker3;
let loaded = false;

let maxZindex = 1;
let enablePopup = false;

let editMode = false;
let mapOpacity = 1;
let selectedOverlay, selectedMap;

let mapOverlays = [];

let osmMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});
let openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: ATTRIBUTION
});

let specialGroup = L.layerGroup([]);
let winterGroup = L.layerGroup([]);
let veloGroup = L.layerGroup([]);
let reliefGroup = L.layerGroup([]);
let forestGroup = L.layerGroup([]);
let parkGroup = L.layerGroup([]);
let cityGroup = L.layerGroup([]);

let rogaineGroup = L.layerGroup([]);
let rogaineKkmGroup = L.layerGroup([]);
let rogaineBeketovGroup = L.layerGroup([]);
let rogaineNewGroup = L.layerGroup([]);
let rogaineOldGroup = L.layerGroup([]);

let groupRetro = L.layerGroup([]);
let group90th = L.layerGroup([]);
let group2000th = L.layerGroup([]);
let group2010th = L.layerGroup([]);
let group2020th = L.layerGroup([]);
let groupUnknownYear = L.layerGroup([]);

let groupAllOrient = L.layerGroup([]);

let oMaps = [
    ...specialMaps,
    ...rogaineKkmMaps,
    ...rogaineBeketovMaps,
    ...rogaineMaps,
    ...reliefMaps,
    ...winterMaps,
    ...veloMaps,
    ...forestMaps,
    ...vsevolozhskMaps,
    ...southMaps,
    ...priozerskMaps,
    ...zelikMaps,
    ...vyborgMaps,
    ...sosnovoMaps,
    ...michuraMaps,
    ...vaskelovoMaps,
    ...toksovoMaps,
    ...parkMaps,
    ...cityMaps,
];

const TOTAL_MAPS = oMaps.length;

// Overlay the maps
for (const m of oMaps) {

    // if (m.info && m.info.startsWith('ККП')) continue;
    if (m.owner && m.owner === 'NW') {
        m.url = './maps/olive.png';
    }

    m.img = new Image();
    m.img.src = m.url;

    m.img.onload = function () {
        if (THE_OWNER) {
            if (Array.isArray(m.owner)) {
                let own = false;
                for (const o of m.owner) {
                    if (THE_OWNER === o) {
                        own = true; break;
                    }
                }
                if (!own) return;
            } else {
                if (THE_OWNER !== m.owner) return;
            }
        }

        let bounds;
        if (m.bounds.length === 3) {
            bounds = m.bounds;
        } else {
            bounds = [
                m.bounds[0],
                [m.bounds[0][0], m.bounds[0][1] + m.img.width * multiY],
                [m.bounds[0][0] - m.img.height * multiX, m.bounds[0][1]]
            ];
        }
        let latLngs = [
            L.latLng(bounds[0]),
            L.latLng(bounds[1]),
            L.latLng(bounds[2])
        ];
        let imgLayer = L.imageOverlay.rotated(
            m.url, latLngs[0], latLngs[1], latLngs[2],
            {
                opacity: 1,
                interactive: true,
                alt: m.name
            });

        // map popup
        let popup = buildPopupText(m, latLngs);
        imgLayer.bindPopup(popup);
        imgLayer.on('mouseover', function (e) {
            if (!editMode && enablePopup) {
                this.openPopup();
            }
        });

        imgLayer.on('click', function (e) {
            onMapSelect(imgLayer, m);
        });

        let added = false;
        if (m.types.includes('ROGAINE')) {
            added = true;
            imgLayer.addTo(rogaineGroup);
            let el = imgLayer.getElement();
            if (el) {
                el.style.zIndex = 0;
            }

            if (m.year && m.year >= 2010) {
                imgLayer.addTo(rogaineNewGroup);
            }
            if (m.year && m.year < 2010) {
                imgLayer.addTo(rogaineOldGroup);
            }
            if (m.owner && (m.owner === 'KKM' || (Array.isArray(m.owner) && m.owner.includes('KKM')))) {
                imgLayer.addTo(rogaineKkmGroup);
            }
            if (m.owner && (m.owner === 'BKTV' || (Array.isArray(m.owner) && m.owner.includes('BKTV')))) {
                imgLayer.addTo(rogaineBeketovGroup);
            }
        }
        if (m.types.includes('SPECIAL')) {
            added = true;
            imgLayer.addTo(specialGroup);
        }
        if (m.types.includes('RELIEF')) {
            added = true;
            imgLayer.addTo(reliefGroup);
        }
        if (m.types.includes('WINTER')) {
            added = true;
            imgLayer.addTo(winterGroup);
        }
        if (m.types.includes('VELO')) {
            added = true;
            imgLayer.addTo(veloGroup);
        }
        if (m.types.includes('CITY')) {
            added = true;
            imgLayer.addTo(cityGroup);
        }
        if (m.types.includes('PARK')) {
            added = true;
            imgLayer.addTo(parkGroup);
        }
        if (!added) {
            imgLayer.addTo(forestGroup);
        }

        if (m.zindex) {
            let el = imgLayer.getElement();
            if (el) {
                el.style.zIndex = m.zindex;
            }
        }

        if (!m.types.includes('ROGAINE') && !m.types.includes('SPECIAL')) {
            if (!m.year) {
                imgLayer.addTo(groupUnknownYear);
            } else if (m.year >= 2020) {
                imgLayer.addTo(group2020th);
            } else if (m.year >= 2010) {
                imgLayer.addTo(group2010th);
            } else if (m.year >= 2000) {
                imgLayer.addTo(group2000th);
            } else if (m.year >= 1990) {
                imgLayer.addTo(group90th);
            } else {
                imgLayer.addTo(groupRetro);
            }
            imgLayer.addTo(groupAllOrient);
        }
        mapOverlays.push(imgLayer);

        let el = imgLayer.getElement();
        if (el) {
            if (m.restricted) {
                el.classList.add('restricted');
            }
            else if (m.link) {
                el.classList.add('full-size');
            }
        }
    }
}

const defaultZoom = 11;

let mapElement = document.getElementById('map');
if (mapElement) {
    let savedState;
    if (!MAP_NAME) {
        savedState = loadMapState();
    }
    map = L.map('map', {
        attributionControl: false,
        zoomControl: false,
        minZoom: 9,
        maxZoom: 16,
        center: savedState ? [savedState.lat, savedState.lng] : [centerX, centerY],
        zoom: savedState ? savedState.zoom : defaultZoom,
        layers: [
            osmMap, parkGroup, cityGroup, forestGroup, reliefGroup, winterGroup, veloGroup,
            group2020th, group2010th, group2000th, group90th, groupRetro, groupUnknownYear,
        ],
        contextmenu: true,
        contextmenuWidth: 160,
        contextmenuItems: [{
            text: 'О проекте',
            icon: 'images/information.png',
            callback: openWelcome
        }, '-', {
            text: 'Координаты',
            callback: showCoordinates
        }, {
            text: 'Центр сюда',
            callback: centerMap
        }, '-', {
            text: 'Увеличить',
            icon: 'images/zoom-in.png',
            callback: zoomIn
        }, {
            text: 'Уменьшить',
            icon: 'images/zoom-out.png',
            callback: zoomOut
        }, '-', {
            text: 'Всплыв.подсказки',
            icon: 'images/popup.png',
            callback: popupsSwitch
        }, {
            text: 'Редактирование',
            icon: 'images/edit.png',
            callback: editModeSwitch
        }]
    });

    map.on('click', onMapClick);
    map.on('overlayadd overlayremove zoomlevelschange resize zoomend moveend', function () { recalculateLayers();} );
    osmMap.on('load', function () {
        recalculateLayers();
        if (!loaded) {
            loaded = true;
            if (MAP_NAME) {
                locateMap(MAP_NAME);
            }
        }
    });

    // Save the map state whenever the map is moved or zoomed
    map.on('moveend', () => saveMapState(map));
    map.on('zoomend', () => saveMapState(map));

    L.control.scale().addTo(map);

    // Instantiate the ZoomBar control..
    new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

    let attributionControl = L.control.attribution().addTo(map);
    attributionControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

    let baseMaps = {
        "Open Street Map": osmMap,
        "Open Topo Map": openTopoMap
    };

    let overlayMaps = {
        "Город": cityGroup,
        "Парки": parkGroup,
        "Лес": forestGroup,
        "Гидро-рельефные": reliefGroup,
        "Зимние": winterGroup,
        "Вело": veloGroup,
        "Все": groupAllOrient,
        "<span class='layer-separator'>2020-е</span>": group2020th,
        "2010-е": group2010th,
        "2000-е": group2000th,
        "90-е": group90th,
        "Ретро": groupRetro,
        "???": groupUnknownYear,
        "<span class='layer-separator'>Необычные</span>": specialGroup,
        "<span class='layer-separator'>Рогейн</span>": rogaineGroup,
        "<span class='layer-separator'>Недавние</span>": rogaineNewGroup,
        "Давние": rogaineOldGroup,
        "<span class='layer-separator'>Бекетов</span>": rogaineBeketovGroup,
        "ККМ": rogaineKkmGroup,
    };

    let layerControlCollapsed = false;
    if (L.Browser.android || L.Browser.mobile) {  // || L.Browser.touch || L.Browser.retina
        layerControlCollapsed = true;
    }
    let layerControl = L.control.layers(
        baseMaps, overlayMaps,
        {collapsed: layerControlCollapsed, autoZIndex: false}).addTo(map);

    // Set bounds for the overlay
    //map.fitBounds(oMap.getBounds());

    marker1 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker2 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker3 = L.marker(ZERO_LATLNG, {draggable: true}).addTo(map);
    marker1.on('drag', onDrag);
    marker2.on('drag', onDrag);
    marker3.on('drag', onDrag);
    marker1.on('dragend', onDragEnd);
    marker2.on('dragend', onDragEnd);
    marker3.on('dragend', onDragEnd);

    // --- welcome dialog (https://github.com/NBTSolutions/Leaflet.Dialog) ---
    welcomeDialog = L.control.dialog(dialogOptions).setContent(welcomeDialogContent).addTo(map);
    if (localStorage.getItem('welcomeOpened') == null) {
        openWelcome();
        localStorage.setItem('welcomeOpened', true);
    }

    L.easyButton('button-icon welcome-icon', function(btn, map) {
        openWelcome();
    }, 'О проекте').addTo(map)

    // --- statistics ---
    L.easyButton('button-icon statistics-icon', function(btn, map) {
        openStats();
    }, 'Немного статистики').addTo(map)

    // --- statistics ---
    L.easyButton('button-icon papers-icon', function(btn, map) {
        downloadSheet();
    }, 'Сводная таблица карт').addTo(map)

    // --- ruler (https://github.com/gokertanrisever/leaflet-ruler) ---
    let rulerOptions = {
        position: 'topleft',
        lengthUnit: {
            display: 'км',
            decimal: 2,
            factor: null,
            label: 'Расстояние:'
        },
        angleUnit: {
            display: '&deg;',
            decimal: 2,
            factor: null,
            label: 'Азимут:'
        }
    };
    L.control.ruler(rulerOptions).addTo(map);

    // --- slider (https://github.com/Eclipse1979/leaflet-slider) ---
    let sliderOptions = {
        id: 'opacitySlider',
        orientation: 'vertical',
        title: 'Прозрачность карт',
        min: 0,
        max: 1,
        step: .1,
        size: '100px',
        position: 'topleft',
        value: mapOpacity,
        logo: '⛅',
        showValue: false,
        syncSlider: true
    };
    opacitySlider = L.control.slider(function(value) {setOverlayOpacity(value);}, sliderOptions).addTo(map);}

    //buildMapsCSV(oMaps);

// --- functions ---

function buildPopupText(map, latLngs) {
    // имя
    let result = '<b>' + map.name;
    if (map.year) {
        result += '&nbsp;(' + map.year + ')';
    }

    // площадь
    let area = getArea(latLngs);
    result += '&nbsp;-&nbsp;' + area + '&nbsp;км<sup>2</sup>';
    result += '</b><hr />';

    // инфа о карте
    let info = map.info;
    let link = map.link;
    if (info) {
        result += info + '<br />';
    }

    // владелец
    if (map.owner) {
        if (Array.isArray(map.owner)) {
            result += 'Владельцы:<ol>'
            for (const o of map.owner) {
                if (owners[o]) {
                    result += '<li>' + owners[o] + '</li>';
                }
            }
            result += '</ol>'
        } else {
            if (owners[map.owner]) {
                result += owners[map.owner] + '<br />';
            }
        }
    }

    // закрытый район
    if (map.restricted) {
        result += '<span class="restricted-text">Район закрыт ' + map.restricted + '.</span><br />';
    }

    // ссылки на просмотр и скачивание
    if (link) {
        result += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
    } else {
        result += 'Посмотреть карту отдельно можно <a href="' + map.url + '" target="_blank">тут</a>.';
    }
    if (!map.url.includes('olive.png')) {
        let mapLinkUrl = mapLink(map.url);
        let onclick = 'onclick="copyToClipboard(\'' + mapLinkUrl + '\'); return false;"';
        result += '<br />Поделиться <a href="' + mapLinkUrl + '" target="_blank">ссылкой</a> на карту: <a href="#" ' + onclick + ' target="_blank"><img src="./images/copy.png" alt="Copy" title="Copy" style="margin-bottom: -3px;" /></a>';
    }
    return result;
}

function onMapSelect(ovrl, map) {
    selectedOverlay = ovrl;
    selectedMap = map;

    upZindex(ovrl);

    if (editMode) {
        marker1.setLatLng(ovrl.getTopLeft());
        marker2.setLatLng(ovrl.getTopRight());
        marker3.setLatLng(ovrl.getBottomLeft());
    }
}

function onMapClick(e) {
    let coordinate = e.latlng.lat + ", " + e.latlng.lng;
    copyToClipboard(coordinate);
    welcomeDialog.close();
}

function repositionImage(doLog) {
    let point1 = marker1.getLatLng();
    let point2 = marker2.getLatLng();
    let point3 = marker3.getLatLng();
    if (doLog) {
        let coordinates = "[[" + point1.lat + ", " + point1.lng + "], [" + point2.lat + ", " + point2.lng + "], [" + point3.lat + ", " + point3.lng + "]],";
        copyToClipboard(coordinates);
    }
    if (selectedOverlay) {
        selectedOverlay.reposition(point1, point2, point3);
    }
}

function onDrag() {
    repositionImage(false);
}

function onDragEnd() {
    repositionImage(true);
}

// --- context menu functions ---

function showCoordinates (e) {
    alert(e.latlng);
}

function centerMap (e) {
    map.panTo(e.latlng);
}

function zoomIn (e) {
    map.zoomIn();
}

function zoomOut (e) {
    map.zoomOut();
}

function editModeSwitch (e) {
    editMode = !editMode;
    if (!editMode) {
        marker1.setLatLng(ZERO_LATLNG);
        marker2.setLatLng(ZERO_LATLNG);
        marker3.setLatLng(ZERO_LATLNG);
        setOverlayOpacity(1);
    } else {
        setOverlayOpacity(.5);
    }
    opacitySlider.setValue(mapOpacity);
    // map.removeControl(opacitySlider);
}

function popupsSwitch (e) {
    enablePopup = !enablePopup;
}

function openStats() {
    location.href = './charts.html'
}

function downloadSheet() {
    location.href = './o-maps.xlsx'
}
