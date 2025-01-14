// types can be ORIENT, ROGAINE, PARK, CITY, PARK, RELIEF, VELO, WINTER
let winterMaps = [
    // --- зимние ---
    {
        name: 'Лемболово',
        year: 2019,
        url: './maps/winter/lembolovo_winter_2019.webp',
        bounds: [[60.42351294603261, 30.3063440322876], [60.420420172898, 30.34084796905518], [60.40628711821687, 30.30089378356934]],
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Орехово',
        year: 2010,
        url: './maps/winter/orekhovo_winter_2010.webp',
        bounds: [[60.460666761529005, 30.279736518859867], [60.45687922940639, 30.326771736145023], [60.44310073619961, 30.274243354797367]],
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Рощино',
        year: 2013,
        url: './maps/winter/roschino_winter_2013.webp',
        bounds: [[60.27208897887721, 29.576182365417484], [60.27204641697717, 29.60000038146973], [60.26370321558072, 29.576439857482914]],
        types: ['ORIENT', 'WINTER'],
        zindex: 2
    },
    {
        name: 'Токсово - СКА, Марафонский круг',
        year: 2022,
        url: './maps/winter/toksovo_ska_marathon_2022.webp',
        bounds: [[60.176141838203385, 30.56044578552246], [60.171061736697986, 30.618896484375], [60.138684325957556, 30.548429489135746]],
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Токсово - ВИФК',
        year: 2023,
        url: './maps/winter/toksovo_vifk_winter_2023.webp',
        bounds: [[60.193233383853695, 30.560145378112797], [60.18962804295176, 30.59679508209229], [60.18021815816931, 30.554866790771488]],
        types: ['ORIENT', 'WINTER'],
        zindex: 2
    },
    {
        name: 'Зеленогорск - Чёрные озёра',
        url: './maps/winter/zelenogorsk_chernye_winter.webp',
        bounds: [[60.25463395700811, 29.77681159973145], [60.25224913383907, 29.816293716430668], [60.22557839180962, 29.768142700195316]],
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Будогощь, оз Светлое',
        year: 2024,
        url: './maps/winter/budogosch_svetloe_winter_2024.webp',
        bounds: [[59.28447396887775, 32.348299026489265], [59.28138309112493, 32.381472587585456], [59.273665632447134, 32.34443664550782]],
        owner: 'EGRV_SRG',
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Кириши, лыжная трасса',
        year: 2024,
        url: './maps/winter/kirishi_ski_track_2024.webp',
        bounds: [[59.44023146251266, 31.985664367675785], [59.43905317578189, 32.00201511383057], [59.42154860449208, 31.97957038879395]],
        owner: 'EGRV_SRG',
        types: ['ORIENT', 'WINTER'],
    },
    {
        name: 'Сосновка, лыжный полигон',
        year: 2023,
        url: './maps/winter/sosnovka_winter_2023.webp',
        link: 'https://o-site.spb.ru/race.php?id=poligon2024',
        bounds: [[60.02691307031582, 30.330419540405277], [60.02258186362895, 30.369000434875492], [60.01312413781251, 30.324454307556152]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'WINTER', 'PARK'],
    },
    {
        name: 'Шуваловский парк',
        year: 2023,
        url: './maps/winter/shuvalovsky_park_winter_2023.webp',
        link: './original_maps/winter/shuvalovsky_park_winter_2023_full.jpg',
        bounds: [[60.085243214141705, 30.291752815246586], [60.08293167886438, 30.32106399536133], [60.069273191217576, 30.287203788757324]],
        owner: 'EFRMV',
        types: ['ORIENT', 'WINTER', 'PARK'],
    },
];
