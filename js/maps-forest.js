// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var forestMaps = [
    // --- лесные карты ---
    {
        name: 'Гряда Вярямянселькя',
        url: './maps/white.png',
        bounds: [[60.63952973830604, 29.737243652343754], [60.63599457189152, 30.14030456542969], [60.57178919613921, 29.735183715820316]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Первомайское',
        url: './maps/white.png',
        bounds: [[60.4600954860945, 29.65621948242188], [60.414530380617315, 29.761962890625004], [60.43232361819982, 29.599571228027347]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Камни Карельского Перешейка (ККП)',
        url: './maps/white.png',
        bounds: [[60.901059995939775, 28.512268066406254], [61.10078883158897, 29.311523437500004], [60.788662338870736, 28.638610839843754]],
        owner: 'NW',
        types: ['ORIENT'],
    },
    {
        name: 'Колосково',
        year: 1997,
        url: './maps/forest/koloskovo_1987.webp',
        link: './original_maps/forest/koloskovo_1987_full.jpg',
        bounds: [[60.632964120663054, 30.16794204711914], [60.628249519190376, 30.268020629882816], [60.57566873393276, 30.15403747558594]],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, оз Уловное',
        year: 1991,
        url: './maps/forest/sosnovo_ulovnoe_oz_1981.webp',
        link: './original_maps/forest/sosnovo_ulovnoe_oz_1981_full.jpg',
        bounds: [[60.60871025400445, 30.213346481323246], [60.606477645123114, 30.2699089050293], [60.57706019379461, 30.204162597656254]],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1991,
        url: './maps/forest/snegirevka_1991.webp',
        link: './original_maps/forest/snegirevka_1991_full.jpg',
        bounds: [[60.5249872444697, 30.275230407714847], [60.52219978146546, 30.34844398498535], [60.494100589948296, 30.268621444702152]],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        url: './maps/forest/snegirevka_1988.webp',
        link: './original_maps/forest/snegirevka_1988_full.jpg',
        bounds: [[60.53799223316789, 30.27643203735352], [60.53723234508639, 30.339474678039554], [60.51476537376076, 30.273857116699222]],
        types: ['ORIENT'],
    },
    {
        name: 'Орловский парк',
        year: 1980,
        url: './maps/forest/orlovsky_park_1980.webp',
        link: './original_maps/forest/orlovsky_park_1980_full.jpg',
        bounds: [[60.06653224902049, 30.242314338684086], [60.05922909614627, 30.30561447143555], [60.04633219385438, 30.225920677185062]],
        types: ['ORIENT'],
    },
    {
        name: 'Юкки - север',
        year: 2020,
        url: './maps/forest/yukki_north_2020.webp',
        owner: 'SHEIN',
        bounds: [[60.12263330653698, 30.300292968750004], [60.119597479892256, 30.33187866210938], [60.11318284102055, 30.296258926391605]],
        types: ['ORIENT'],
    },
    {
        name: 'Юкки - юг',
        year: 2019,
        url: './maps/forest/yukki_south_2019.webp',
        bounds: [[60.111022964723404, 30.301430225372318], [60.108884333769765, 30.32962560653687], [60.1034836725298, 30.29909133911133]],
        types: ['ORIENT'],
    },
    {
        name: 'Симагино',
        url: './maps/white.png',
        bounds: [[60.33170633085948, 29.90135192871094], [60.28919437827956, 30.007095336914066], [60.29531950952105, 29.84573364257813]],
        owner: 'WN',
        types: ['ORIENT'],
    },
/*
    {
        name: 'оз. Воробьёво',
        url: './maps/white.png',
        bounds: [[60.924426453619176, 30.279006958007816], [60.92742946980941, 30.328445434570316], [60.900392131137274, 30.275573730468754]],
        owner: 'WN',
        types: ['ORIENT'],
    },
*/
    {
        name: 'Туутари',
        year: 1983,
        url: './maps/forest/tuutary_1983.webp',
        bounds: [[59.70584142848521, 30.1585865020752], [59.70486724535825, 30.186910629272464], [59.688215155652344, 30.15480995178223]],
        types: ['ORIENT'],
    },
    {
        name: 'Кузнечное - оз Волковское-Суури',
        year: 2019,
        url: './maps/forest/kuznechnoe_suuri_2019.webp',
        bounds: [[61.14435367217603, 29.88916397094727], [61.13689678153038, 29.96950149536133], [61.12479630189204, 29.879465103149418]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: Виталий Чегаровский',
    },
    {
        name: 'Кузнечное - запад',
        year: 2008,
        url: './maps/forest/kuznechnoe_west_2008.webp',
        link: './original_maps/forest/kuznechnoe_2008_full.pdf',
        bounds: [[61.15640525439849, 29.747714996337894], [61.143318098224135, 29.93705749511719], [61.08469071939212, 29.726257324218754]],
        types: ['ORIENT'],
        info: 'Спасибо Косте Токмакову!',
    },
    {
        name: 'Кузнечное - юго-восток',
        year: 2003,
        url: './maps/forest/kuznechnoe_se.webp',
        bounds: [[61.101535452429026, 29.940662384033207], [61.09734585191786, 30.00572204589844], [61.07340056041223, 29.932250976562504]],
        owner: 'TOKM',
        types: ['ORIENT'],
    },
    {
        name: 'Выборг - гора Величка',
        year: 1999,
        url: './maps/white.png',
        bounds: [[60.77320188037102, 28.53432655334473], [60.77081301434992, 28.55956077575684], [60.76754375132123, 28.532009124755863]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Возрождение',
        year: 2017,
        url: './maps/white.png',
        bounds: [[60.85369043136002, 28.86314392089844], [60.85218548420622, 28.903999328613285], [60.824163807202645, 28.85988235473633]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Луга - оз Омчино',
        year: 2021,
        url: './maps/forest/luga_omchino_2021.webp',
        bounds: [[58.7249159620653, 29.768228530883793], [58.720459798173344, 29.826335906982425], [58.704814146669335, 29.762735366821293]],
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков, С.Воробей',
    },
    {
        name: 'Луга - Штоле',
        year: 2022,
        url: './maps/forest/luga_shtole_2022.webp',
        bounds: [[58.7346506950973, 29.80603694915772], [58.732601503940764, 29.824790954589847], [58.723178126011526, 29.798913002014164]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Луга - Алёнка',
        year: 2022,
        url: './maps/forest/luga_alenka_2022.webp',
        bounds: [[58.82262957770419, 29.91113662719727], [58.81956352271544, 29.952249526977543], [58.80125042024749, 29.90461349487305]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: А. Столяров',
    },
    {
        name: 'Луга - Зелёный Бор',
        year: 2021,
        url: './maps/forest/luga_zeleny_bor_2021.webp',
        bounds: [[58.70978496598359, 29.80749607086182], [58.707422243479755, 29.835648536682132], [58.688313967069234, 29.80028629302979]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Каменка',
        year: 2015,
        url: './maps/forest/kamenka_2015.webp',
        link: './original_maps/forest/kamenka_2015_full.jpg',
        bounds: [[60.43067179904046, 28.998327255249027], [60.425758199767614, 29.044847488403324], [60.40122145583028, 28.985109329223636]],
        owner: 'KURD',
        types: ['ORIENT'],
        info: 'Авторы: Виктор Дьячков, Сергей Стулов',
    },
    {
        name: 'Коробицыно',
        year: 2018,
        url: './maps/forest/korobitsyno_2018.webp',
        link: './original_maps/forest/korobitsyno_2018_full.jpg',
        bounds: [[60.54723610930417, 29.801445007324222], [60.54394407261173, 29.87465858459473], [60.5113855334377, 29.794406890869144]],
        owner: 'KURD',
        types: ['ORIENT'],
        info: 'Авторы: Виктор Дьячков, Сергей Стулов, Дмитрий Попов',
    },
    {
        name: 'Сертолово',
        year: 2016,
        url: './maps/forest/sertolovo_2016.webp',
        bounds: [[60.158870558234405, 30.20523548126221], [60.15707672826544, 30.22875308990479], [60.14368397598858, 30.20021438598633]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Лупполово',
        year: 2022,
        url: './maps/forest/luppolovo_2022.webp',
        bounds: [[60.17394340330982, 30.242528915405277], [60.17061345472757, 30.277547836303714], [60.153488774626965, 30.233902931213382]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Вартемяги - север',
        year: 2017,
        url: './maps/forest/vartemjagi_north_2017.webp',
        bounds: [[60.18544620487518, 30.280766487121586], [60.18350445612343, 30.317974090576175], [60.17178751358586, 30.276517868041996]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Вартемяги - юг',
        year: 2018,
        url: './maps/forest/vartemjagi_south_2018.webp',
        bounds: [[60.16493468695678, 30.30784606933594], [60.161731941494104, 30.348143577575687], [60.148319724462795, 30.303683280944828]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2021,
        url: './maps/forest/krivko_2021.webp',
        bounds: [[60.628838882073644, 30.19051551818848], [60.62332370820346, 30.245618820190433], [60.59678717557373, 30.177726745605472]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2021,
        url: './maps/forest/snegirevka_2021.webp',
        bounds: [[60.55225793026478, 30.294713973999027], [60.54926181156153, 30.353164672851566], [60.52308672753701, 30.28913497924805]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, юг',
        year: 2021,
        url: './maps/forest/sosnovo_south_2012.webp',
        bounds: [[60.53915313884433, 30.23669242858887], [60.534931464055, 30.27965068817139], [60.52334013623886, 30.230298042297367]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, оз Ветренное',
        year: 2022,
        url: './maps/forest/orekhovo_vetrennoe_2022.webp',
        bounds: [[60.506948957921466, 30.276346206665043], [60.49739769638699, 30.365867614746097], [60.48162773195609, 30.26570320129395]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петровское, "Связист"',
        year: 2023,
        url: './maps/forest/petrovskoe_svjazist_2023.webp',
        bounds: [[60.66458042842836, 30.1730489730835], [60.65875593567393, 30.23197174072266], [60.64523148134875, 30.165109634399418]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - запад',
        year: 2019,
        url: './maps/forest/petyajarvi_west_2019.webp',
        bounds: [[60.632080185395296, 30.048379898071293], [60.630564811411745, 30.083227157592773], [60.61342771193733, 30.044517517089847]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - юг',
        year: 2019,
        url: './maps/forest/petyajarvi_south_2019.webp',
        bounds: [[60.61098482874486, 30.08786201477051], [60.609426341120916, 30.123052597045902], [60.59857802491448, 30.08563041687012]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        url: './maps/forest/petyajarvi.webp',
        bounds: [[60.635110719708734, 30.071811676025394], [60.62888097901027, 30.160732269287113], [60.61443850605954, 30.068721771240238]],
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - кентавр',
        url: './maps/forest/petjajarvy_kentavr.webp',
        bounds: [[60.635110719708734, 30.137214660644535], [60.632501109973745, 30.17905712127686], [60.619197236209565, 30.133953094482425]],
        types: ['ORIENT'],
    },
    {
        name: 'Ягодное',
        year: 2007,
        url: './maps/forest/yagodnoe_2007.webp',
        bounds: [[60.63142774143866, 29.87062454223633], [60.62281845428025, 29.97005939483643], [60.605277027435896, 29.86114025115967]],
        types: ['ORIENT'],
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 1993,
        url: './maps/forest/gatchina_prioratsky_1993.webp',
        bounds: [[59.56337553311358, 30.105199813842777], [59.563071167965695, 30.13584136962891], [59.54445618473496, 30.103740692138675]],
        types: ['ORIENT'],
    },
    {
        name: 'Шапки',
        year: 2020,
        url: './maps/forest/shapki_otime_2020.webp',
        bounds: [[59.59822886857503, 31.170444488525394], [59.59875009071161, 31.21267318725586], [59.5807197983505, 31.17130279541016]],
        info: 'Ковидный полигон от O-Time',
        types: ['ORIENT'],
    },
    {
        name: 'Сайменские дачи',
        year: 1981,
        url: './maps/forest/vyborg_saymenskie_dachi_1981.webp',
        bounds: [[60.793185940251945, 28.719549179077152], [60.79037970721021, 28.77748489379883], [60.76498678767908, 28.721437454223636]],
        types: ['ORIENT'],
    },
    {
        name: 'Гвардейское',
        url: './maps/forest/gvardeyskoe.webp',
        bounds: [[60.809787944367784, 28.922410011291507], [60.80717155428689, 28.949403762817386], [60.79211792531097, 28.91631603240967]],
        types: ['ORIENT'],
    },
    {
        name: 'Гвардейское',
        year: 2007,
        url: './maps/white.png',
        info: '<a href="https://vk.com/wall-128591100_2967" target="_blank">ВК "Яркий Мир"</a>',
        bounds: [[60.81713362443914, 28.91339778900147], [60.80298488532727, 28.941636085510257], [60.809725153510456, 28.897690773010257]],
        owner: 'KOSOR',
        types: ['ORIENT'],
    },
    {
        name: 'Комсомольское',
        url: './maps/forest/komsomolskoe.webp',
        bounds: [[60.87567129868857, 28.804950714111328], [60.87316473979831, 28.857822418212894], [60.84327976304758, 28.798427581787113]],
        types: ['ORIENT'],
    },
    {
        name: 'Заветное',
        year: 2018,
        url: './maps/forest/zavetnoe_2018.webp',
        bounds: [[61.011523851127386, 29.64340925216675], [61.01079590501046, 29.6566915512085], [61.00338030286407, 29.639654159545902]],
        info: 'Автор - Елизаров В.',
        owner: 'ELZRV',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, юг',
        year: 2021,
        url: './maps/forest/orekhovo_south_2021.webp',
        bounds: [[60.451207684981554, 30.22544860839844], [60.445238796388175, 30.297288894653324], [60.42563111407299, 30.21720886230469]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Орехово',
        year: 1991,
        url: './maps/forest/orekhovo_1991.webp',
        link: './original_maps/forest/orekhovo_1991_full.jpg',
        bounds: [[60.47739855580294, 30.23875236511231], [60.47380332259927, 30.28535842895508], [60.44604317864724, 30.230598449707035]],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово, р.Смородинка',
        year: 1999,
        url: './maps/forest/orekhovo_smorodinka_1999.webp',
        link: './original_maps/forest/orekhovo_smorodinka_1999_full.jpg',
        bounds: [[60.472026707381744, 30.183219909667972], [60.467161667943785, 30.251798629760746], [60.44701687789359, 30.177211761474613]],
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2019,
        url: './maps/forest/69_km_2019.webp',
        bounds: [[60.52724660281343, 30.230169296264652], [60.525789651465296, 30.25621891021729], [60.50844901094424, 30.225105285644535]],
        types: ['ORIENT'],
    },
    {
        name: 'Игора, север',
        year: 2019,
        url: './maps/forest/igora_north_2019.webp',
        bounds: [[60.54225571873845, 30.220599174499515], [60.540060727006335, 30.24167060852051], [60.528365665856704, 30.216135978698734]],
        types: ['ORIENT'],
    },
    {
        name: '69км, запад',
        url: './maps/forest/69_km_west.webp',
        link: './original_maps/forest/69_km_west_full.jpg',
        bounds: [[60.54103160709596, 30.186395645141605], [60.540229577809804, 30.236349105834964], [60.504624794985865, 30.1820182800293]],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, гора Каланчёвка',
        year: 2010,
        url: './maps/forest/sosnovo_kalanchevka_2010.webp',
        link: './original_maps/forest/sosnovo_kalanchevka_2010.jpg',
        bounds: [[60.59151939590076, 30.304927825927738], [60.58566061576298, 30.37058830261231], [60.56419744911603, 30.294799804687504]],
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецкие Дюны',
        year: 2022,
        url: './maps/forest/sestroretskie_djuny_2022.webp',
        bounds: [[60.12961250803307, 29.93980407714844], [60.127464396937015, 29.959931373596195], [60.122676062659345, 29.937036037445072]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Ласковый пляж',
        year: 2023,
        url: './maps/forest/sestroretsk_pljazh_laskovy_2023.webp',
        bounds: [[60.14590579873828, 29.92581367492676], [60.14403648673156, 29.94210004806519], [60.13880184782073, 29.922959804534912]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Лемболово-Орехово',
        year: 2023,
        url: './maps/forest/lembolovo_orekhovo_2023.webp',
        bounds: [[60.49050720754783, 30.263643264770508], [60.482684939856334, 30.385179519653324], [60.38871288792411, 30.23471832275391]],
        owner: 'TOKM',
        types: ['ORIENT'],
    },
    {
        name: 'оз Силанде',
        year: 1992,
        url: './maps/forest/silande_1992.webp',
        link: './original_maps/forest/Geolog92.pdf',
        bounds: [[60.42787622155024, 30.223689079284668], [60.4233434866285, 30.286216735839847], [60.37887226479014, 30.210857391357425]],
        types: ['ORIENT'],
    },
    {
        name: 'Лосево',
        year: 2005,
        url: './maps/forest/losevo_2005.webp',
        link: './original_maps/forest/losevo-2005.gif',
        bounds: [[60.695241510752176, 29.892425537109375], [60.68944357380662, 30.01078605651856], [60.67120266901343, 29.88813400268555]],
        types: ['ORIENT'],
    },
    {
        name: 'Тарховка',
        year: 1987,
        url: './maps/forest/tarkhovka_1987.webp',
        link: './original_maps/forest/tarkhovka_1987_full.jpg',
        bounds: [[60.073234306818485, 29.946198463439945], [60.07207813845158, 29.97581005096436], [60.05882212806155, 29.942722320556644]],
        types: ['ORIENT'],
    },
    {
        name: 'Коросары',
        year: 1993,
        url: './maps/forest/korosary_1993.webp',
        link: './original_maps/forest/korosary_1993_full.jpg',
        bounds: [[60.42711374960327, 30.4167652130127], [60.41792031939828, 30.487232208251957], [60.40130624327883, 30.402431488037113]],
        types: ['ORIENT'],
    },
    {
        name: 'Лемболовское',
        year: 1991,
        url: './maps/forest/lembolovsky_1991.webp',
        link: './original_maps/forest/lembolovsky_1991_full.jpg',
        bounds: [[60.378490456569175, 30.22699356079102], [60.37535097486695, 30.292739868164066], [60.3178110096362, 30.210342407226562]],
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово',
        year: 1991,
        url: './maps/forest/garbolovo_1991.webp',
        link: './original_maps/forest/garbolovo_1991_full.jpg',
        bounds: [[60.36440284798612, 30.50259590148926], [60.36198357968282, 30.556669235229496], [60.33718634477972, 30.49736022949219]],
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово',
        year: 1994,
        url: './maps/forest/garbolovo_1994.webp',
        link: './original_maps/forest/garbolovo_1994_full.jpg',
        bounds: [[60.38900975707087, 30.44723510742188], [60.38417469408329, 30.515556335449222], [60.34470393627307, 30.43418884277344]],
        types: ['ORIENT'],
    },
    {
        name: 'Васкелово, Банное оз',
        year: 1995,
        url: './maps/forest/vaskelovo_bannoe_oz.webp',
        link: './original_maps/forest/vaskelovo_bannoe_oz_full.jpg',
        bounds: [[60.40380737364446, 30.423889160156254], [60.400076803656404, 30.47916412353516], [60.364487731332744, 30.413331985473636]],
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово, оз Сирккаярви',
        url: './maps/forest/garbolovo_sirkkajarvi.webp',
        bounds: [[60.35374823320506, 30.551433563232425], [60.35043652818912, 30.583963394165043], [60.321423512137386, 30.541133880615238]],
        types: ['ORIENT'],
    },
    {
        name: 'Гарболово, Змеиное оз',
        url: './maps/forest/garbolovo_zmeinoe_2014.webp',
        bounds: [[60.34459776766185, 30.50036430358887], [60.34098782928523, 30.5390739440918], [60.33213117104195, 30.495214462280277]],
        types: ['ORIENT'],
    },
    {
        name: 'Лехтуси',
        year: 1990,
        url: './maps/forest/lehtusi_1990.webp',
        link: './original_maps/forest/lehtusi_1990_full.jpg',
        bounds: [[60.30514284398862, 30.501480102539066], [60.29948734537272, 30.56130409240723], [60.27736622539905, 30.491609573364258]],
        types: ['ORIENT'],
    },
    {
        name: 'Аньялово',
        year: 2023,
        url: './maps/forest/anyalovo_2023.webp',
        bounds: [[60.31766225096646, 30.4951286315918], [60.31126498711547, 30.5390739440918], [60.29853049128726, 30.489764213562015]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Лехтуси, оз Валкиярви',
        year: 2016,
        url: './maps/forest/lehtusi_valkijarvi_2016.webp',
        link: './original_maps/forest/lehtusi_valkijarvi_2016_full.jpg',
        bounds: [[60.27668533819831, 30.52705764770508], [60.27421700328666, 30.56207656860352], [60.25224913383907, 30.51864624023438]],
        types: ['ORIENT'],
    },
    {
        name: 'Всеволожск',
        year: 1987,
        url: './maps/forest/vsevolozhsk_1987.webp',
        link: './original_maps/forest/vsevolozhsk_1987_full.jpg',
        bounds: [[60.065697072929595, 30.62447547912598], [60.063598332002485, 30.68387031555176], [60.03475925627271, 30.62095642089844]],
        types: ['ORIENT'],
    },
    {
        name: 'Невская Дубровка',
        url: './maps/forest/nevskaya_dubrovka.webp',
        bounds: [[59.862466389665045, 30.91333866119385], [59.86143212605905, 30.930547714233402], [59.84972977927792, 30.909948348999027]],
        types: ['ORIENT'],
    },
    {
        name: 'Сестрорецк, Таможенная дорога',
        year: 2012,
        url: './maps/forest/sestroretsk_tamozhennaya_doroga_2012.webp',
        bounds: [[60.14058599180651, 29.95044708251953], [60.13898347169249, 29.967741966247562], [60.12789189290783, 29.946713447570804]],
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор, Калищенское оз',
        year: 2021,
        url: './maps/forest/kalischenskoe_oz_2021.webp',
        bounds: [[59.91607472734414, 29.105272293090824], [59.912202325545465, 29.146471023559574], [59.90314344395666, 29.100208282470707]],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Яппиля, оз Пистолет',
        year: 2024,
        url: './maps/forest/yappilya_2024.webp',
        bounds: [[60.23520963053894, 29.110679626464847], [60.22787991859254, 29.183120727539066], [60.18736650278566, 29.091625213623047]],
        owner: ['GLTV_YU', 'GLFSTRM'],
        types: ['ORIENT'],
    },
    {
        name: 'Яппиля - Тарасовское',
        year: 2024,
        url: './maps/forest/yappilya_tarasovskoe_2024.webp',
        bounds: [[60.28281281280947, 29.109477996826175], [60.27234434911475, 29.23118591308594], [60.22583412498815, 29.08767700195313]],
        owner: ['GLTV_YU', 'GLFSTRM'],
        types: ['ORIENT'],
    },
    {
        name: 'Яппиля',
        year: 1980,
        url: './maps/forest/yappilya_1980.webp',
        link: './original_maps/forest/yappilya_1980_full.jpg',
        bounds: [[60.2367222449044, 29.171104431152344], [60.233142988183936, 29.22646522521973], [60.221230622509864, 29.167156219482425]],
        types: ['ORIENT'],
    },
    {
        name: 'Каннельярви, карьер',
        year: 2023,
        url: './maps/forest/kanneljarvi_2023.webp',
        bounds: [[60.33833320798648, 29.336500167846683], [60.3309416045955, 29.407052993774418], [60.313135413137786, 29.326286315917972]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Каннельярви, оз Исток',
        year: 2006,
        url: './maps/forest/kanneljarvi_istok_2006.webp',
        link: './original_maps/forest/kanneljarvi_istok_2006_full.jpg',
        bounds: [[60.371702007906244, 29.335298538208008], [60.36873161683617, 29.372549057006836], [60.34623272596288, 29.326457977294925]],
        types: ['ORIENT'],
    },
    {
        name: 'Каннельярви, оз Исток',
        url: './maps/forest/kanneljarvi_istok.webp',
        bounds: [[60.371489846094434, 29.309291839599613], [60.3654638739312, 29.380359649658207], [60.34585053525739, 29.301223754882816]],
        types: ['ORIENT'],
    },
    {
        name: 'Семиозерье',
        year: 2022,
        url: './maps/forest/polyany_2022.webp',
        bounds: [[60.32252843308696, 29.2701530456543], [60.31449565570198, 29.337959289550785], [60.29808394979354, 29.2591667175293]],
        types: ['ORIENT'],
    },
    {
        name: 'Гладышевский заказник',
        year: 1974,
        url: './maps/forest/gladyshevsky_zakaznik_1974.webp',
        link: './original_maps/forest/gladyshevsky_zakaznik_1974_full.jpg',
        bounds: [[60.270216202896975, 29.37332153320313], [60.270131074169086, 29.43923950195313], [60.22856182141975, 29.370231628417972]],
        types: ['ORIENT'],
    },
    {
        name: 'Озерки',
        year: 1997,
        url: './maps/forest/ozerki_1997.webp',
        link: './original_maps/forest/ozerki_1997_full.jpg',
        bounds: [[60.25808312606245, 29.01497840881348], [60.255826303456416, 29.06046867370606], [60.232652940467396, 29.0105152130127]],
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2023,
        url: './maps/forest/igora_2023.webp',
        bounds: [[60.51935927881255, 30.20602941513062], [60.5171099308425, 30.22598505020142], [60.51230446242403, 30.20278930664063]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Золотая Долина',
        year: 2016,
        url: './maps/forest/gold_dolina_2016.webp',
        bounds: [[60.52945302025571, 29.753143787384037], [60.52875627309598, 29.764494895935062], [60.52086931681358, 29.751234054565433]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Бернгардовка',
        year: 2021,
        url: './maps/forest/berngardovka_2021.webp',
        bounds: [[60.005165542352074, 30.604562759399418], [60.00211888840598, 30.635848045349125], [59.99190411384305, 30.599327087402347]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Медное оз',
        url: './maps/forest/mednoe_oz.webp',
        bounds: [[60.23043698104455, 30.111551284790043], [60.22553576941925, 30.172491073608402], [60.20310870954749, 30.10185241699219]],
        types: ['ORIENT'],
    },
    {
        name: 'Белоостров - Удачное',
        year: 2007,
        url: './maps/forest/beloostrov_udachnoe_2007.webp',
        bounds: [[60.22319145259865, 29.95559692382813], [60.21833178928717, 30.032157897949222], [60.20357787352946, 29.947185516357425]],
        types: ['ORIENT'],
    },
    {
        name: 'Ульяновка, Саблино',
        year: 1992,
        url: './maps/forest/sablino_1992.webp',
        link: './original_maps/forest/sablino_1992_full.jpg',
        bounds: [[59.67703693873597, 30.761761665344242], [59.675130203892365, 30.801887512207035], [59.65568831941736, 30.7553243637085]],
        types: ['ORIENT'],
    },
    {
        name: 'Ломоносов, Красный пруд',
        year: 1997,
        url: './maps/forest/lomonosov_1997.webp',
        link: './original_maps/forest/lomonosov_1997_full.jpg',
        bounds: [[59.90426248948507, 29.730892181396488], [59.901766105385086, 29.76556777954102], [59.881917481564564, 29.72436904907227]],
        types: ['ORIENT'],
    },
    {
        name: 'Колтуши - Воейково',
        year: 1990,
        url: './maps/forest/koltushi_1990.webp',
        link: './original_maps/forest/koltushi_1990_full.jpg',
        bounds: [[59.9788091403029, 30.66172599792481], [59.97408509169904, 30.740690231323242], [59.92629139661258, 30.648250579833988]],
        types: ['ORIENT'],
    },
    {
        name: 'Всеволожск, Ждановские оз',
        year: 2023,
        url: './maps/forest/vsevolozhsk_zhdanovskie_oz_2023.webp',
        bounds: [[59.99598181802446, 30.684041976928714], [59.99411472111232, 30.707473754882816], [59.97953916041285, 30.678591728210453]],
        types: ['ORIENT'],
    },
    {
        name: 'Щеглово',
        year: 1986,
        url: './maps/forest/scheglovo_1986.webp',
        link: './original_maps/forest/scheglovo_1986_full.jpg',
        bounds: [[60.03548804234906, 30.756418704986576], [60.03489858426572, 30.77051639556885], [60.02720251191258, 30.755131244659427]],
        types: ['ORIENT'],
    },
    {
        name: 'Щеглово',
        year: 1987,
        url: './maps/forest/scheglovo_1987.webp',
        link: './original_maps/forest/scheglovo_1987_full.jpg',
        bounds: [[60.02028738059051, 30.726270675659183], [60.01906502085821, 30.755453109741214], [60.00548735560624, 30.723438262939457]],
        types: ['ORIENT'],
    },
    {
        name: 'им Морозова',
        year: 1992,
        url: './maps/forest/morozova_1992.webp',
        link: './original_maps/forest/morozova_1992_full.jpg',
        bounds: [[59.99332063646918, 31.04075431823731], [59.991303146530086, 31.077747344970707], [59.96656817067386, 31.034574508666996]],
        types: ['ORIENT'],
    },
    {
        name: 'им Морозова',
        year: 2013,
        url: './maps/forest/morozova_2013.webp',
        bounds: [[59.98602275023326, 31.040325164794925], [59.98361838824824, 31.072340011596683], [59.96656817067386, 31.03620529174805]],
        types: ['ORIENT'],
    },
    {
        name: 'Орехово-запад',
        url: './maps/forest/orekhovo_west.webp',
        bounds: [[60.47627773171624, 30.23849487304688], [60.475051125139565, 30.26269912719727], [60.46034938752854, 30.233774185180668]],
        types: ['ORIENT'],
    },
    {
        name: 'Рахья',
        url: './maps/forest/rakhja.webp',
        bounds: [[60.0987881207714, 30.846390724182132], [60.09572869968227, 30.89110851287842], [60.08776859518927, 30.843129158020023]],
        types: ['ORIENT'],
    },
    {
        name: 'Зелногорск, Комаровский берег',
        url: './maps/forest/zelenogorsk_komarovsky_bereg.webp',
        link: './original_maps/forest/zelenogorsk_komarovsky_bereg_full.jpg',
        bounds: [[60.20033623997278, 29.729690551757816], [60.18583027344266, 29.80496406555176], [60.18941469676139, 29.723253250122074]],
        types: ['ORIENT'],
    },
    {
        name: 'Красная Горка (Орово)',
        year: 2016,
        // url: './maps/forest/krasnaja_gorka_2016.jpg',
        url: './maps/white.png',
        bounds: [[59.98610861707403, 30.676574707031254], [59.97923856584645, 30.701293945312504], [59.962057199096314, 30.64773559570313]],
        owner: 'WN',
        types: ['ORIENT'],
    },
];
