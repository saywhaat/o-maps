// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let rogaineKkmMaps = [
    // --- рогейн ---
    {
        name: 'М "Владимирская" - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/spb_center_KKM_2024_03.webp',
        link: 'https://kkmstart.ru/marshrut-№3-2/',
        bounds: [[59.956084587086806, 30.337028503417972], [59.95638539185255, 30.40002822875977], [59.91312744037747, 30.33711433410645]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Васильевский остров - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/vasiljevsky_2024_10.webp',
        link: 'https://kkmstart.ru/marshrut-№10-2/',
        bounds: [[59.95896360641199, 30.220642089843754], [59.959006574955104, 30.308446884155277], [59.92792577181406, 30.21995544433594]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петроградская сторона - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/petrogradka_2024_02.webp',
        link: 'https://kkmstart.ru/marshrut-№2-2024/',
        bounds: [[59.97885208310792, 30.23420333862305], [59.97902385377091, 30.33831596374512], [59.947489011645466, 30.235061645507816]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сенная, площадь - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/spb_center_KKM_2024_04.webp',
        link: 'https://kkmstart.ru/marshrut-№4-2024/',
        bounds: [[59.94929426740136, 30.265102386474613], [59.949681095129826, 30.348186492919925], [59.908652227033265, 30.264587402343754]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Крестовский остров - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/krestovsky_KKM_2024_04.webp',
        link: 'https://kkmstart.ru/marshrut-№6-2024/',
        bounds: [[59.986065683681495, 30.188369750976566], [59.986237416917476, 30.273771286010746], [59.964377204056234, 30.188970565795902]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сосновка - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/sosnovka_KKM_2021_10.webp',
        link: 'https://kkmstart.ru/marshrut-№-10-2/',
        bounds: [[60.03441629255553, 30.32106399536133], [60.03197257300201, 30.370244979858402], [60.012158911595996, 30.315999984741214]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Екатерингоф - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/ekateringof_KKM_2021_11.webp',
        link: 'https://kkmstart.ru/marshrut-№11/',
        bounds: [[59.91041656586618, 30.25566101074219], [59.90843705734661, 30.280551910400394], [59.892166191012564, 30.249309539794925]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергофское ш. - ККМ',
        year: 2022,
        url: './maps/rogaine/kkm/peterhof_road_KKM_2022.jpg',
        link: 'https://kkmstart.ru/marshrut-№10/',
        bounds: [[59.847531089179114, 30.123653411865238], [59.847487976156614, 30.208883285522464], [59.8233574820502, 30.123610496521]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергоф - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/peterhof_KKM_2023_03.webp',
        link: 'https://kkmstart.ru/marshrut-№3-2023/',
        bounds: [[59.891305076568734, 29.884271621704105], [59.891132851001714, 29.97653961181641], [59.85714389849079, 29.88461494445801]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Гатчина - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/gatchina_KKM_2023_05.webp',
        link: 'https://kkmstart.ru/marshrut-№5-2023/',
        bounds: [[59.59449320676533, 30.072841644287113], [59.59414568223871, 30.14511108398438], [59.54336854286804, 30.073013305664066]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сестрорецк - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/sestroretsk_KKM_2024_05.webp',
        link: 'https://kkmstart.ru/marshrut-№5-2024/',
        bounds: [[60.130820091007536, 29.91731643676758], [60.13124754338759, 30.013790130615238], [60.05935761134086, 29.91731643676758]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сиверский, р.Оредеж - ККМ',
        year: 2023,
        url: './maps/rogaine/kkm/oredezh_KKM_2021_06.jpg',
        link: 'https://kkmstart.ru/marshrut-№6/',
        bounds: [[59.370030083826, 30.057048797607425], [59.36989889353371, 30.190429687500004], [59.335947296651405, 30.06065368652344]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сиверский',
        year: 2023,
        url: './maps/rogaine/siversky_2021.webp',
        link: './original_maps/rogaine/siversky_2021_full.jpg',
        bounds: [[59.34763292781556, 29.9403190612793], [59.34710781719707, 30.060310363769535], [59.29429276788343, 29.940490722656254]],
        owner: ['SHBN','KKM'],
        types: ['ROGAINE'],
    },
/*
    {
        name: 'Зеркальный - ККМ-лето',
        year: 2011,
        url: './maps/rogaine/kkm/zerkalny_KKM_2011.webp',
        link: './original_maps/rogaine/kkm/zerkalny_KKM_2011_full.jpg',
        bounds: [[60.318448539117334, 28.91189575195313], [60.31351798708459, 29.250755310058594], [60.17003708320592, 28.90159606933594]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
*/
    {
        name: 'Дибуны - ККМ',
        year: 2012,
        url: './maps/rogaine/kkm/dibuny_KKM_2012_02.webp',
        link: './original_maps/rogaine/kkm/dibuny_KKM_2012_02_full.jpg',
        bounds: [[60.13167499021484, 30.057735443115238], [60.13107656310189, 30.153694152832035], [60.083852031773, 30.06013870239258]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шевелево - ККМ',
        year: 2017,
        url: './maps/rogaine/kkm/shevelevo_KKM_2017_03.webp',
        link: './original_maps/rogaine/kkm/shevelevo_KKM_2017_03_full.jpg',
        bounds: [[60.33833320798648, 29.29040908813477], [60.338588061002966, 29.44318771362305], [60.285876119662845, 29.289207458496097]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Солнечное - ККМ',
        year: 2013,
        url: './maps/rogaine/kkm/solnechnoe_KKM_2013_07.webp',
        link: './original_maps/rogaine/kkm/solnechnoe_KKM_2013_07_full.jpg',
        bounds: [[60.24509362207604, 29.76951599121094], [60.24475284442206, 29.962120056152347], [60.157397062225606, 29.768142700195316]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Рощино - ККМ',
        year: 2016,
        url: './maps/rogaine/kkm/roschino_KKM_2016_03.webp',
        link: './original_maps/rogaine/kkm/roschino_KKM_2016_03_full.jpg',
        bounds: [[60.27234434911475, 29.493484497070316], [60.272259225923726, 29.59253311157227], [60.19316938717165, 29.49434280395508]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеленогорск - ККМ',
        year: 2021,
        url: './maps/rogaine/kkm/zelenogorsk_KKM_2021_03.webp',
        link: 'https://kkmstart.ru/marshrut-№-3-2/',
        bounds: [[60.23137452062541, 29.727201461791996], [60.22195529077001, 29.836034774780277], [60.19500390924258, 29.71484184265137]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Васкелово - ККМ',
        year: 2016,
        url: './maps/rogaine/kkm/vaskelovo_KKM_2016_08.webp',
        link: './original_maps/rogaine/kkm/vaskelovo_KKM_2016_08_full.jpg',
        bounds: [[60.40995340282287, 30.365867614746097], [60.41037722411491, 30.495815277099613], [60.3359544838447, 30.36552429199219]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки - ККМ',
        year: 2020,
        url: './maps/rogaine/kkm/shapki_KKM_2020.jpg',
        link: './original_maps/rogaine/kkm/shapki_KKM_2020_full.jpg',
        bounds: [[59.628663378277295, 31.12838745117188], [59.625712307963056, 31.18280410766602], [59.59401535961515, 31.12040519714356]],
        types: ['ROGAINE'],
    },
/*
    {
        name: 'Токсово - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_09.webp',
        link: 'https://kkmstart.ru/marshrut-№9-2024/',
        bounds: [[60.193937339120886, 30.399684906005863], [60.18856129813442, 30.501823425292972], [60.130820091007536, 30.383377075195316]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_08.webp',
        link: 'https://kkmstart.ru/marshrut-№8-2024/',
        bounds: [[60.2157737824211, 30.425090789794925], [60.217564408179925, 30.509548187255863], [60.160813763561954, 30.429897308349613]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово, оз Хепоярви - ККМ',
        year: 2017,
        url: './maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04.webp',
        link: './original_maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04_full.jpg',
        bounds: [[60.19248674813239, 30.55280685424805], [60.184507351685134, 30.661983489990238], [60.15380914355222, 30.540018081665043]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
*/
];
