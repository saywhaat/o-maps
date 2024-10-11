// types can be ORIENT, ROGAINE, PARK, CITY, PARK, RELIEF
var parkMaps = [
    // --- городские парки ---
    {
        name: 'Парк Авиаторов',
        year: 2017,
        url: './maps/parks/aviatorov_2017.jpg',
        bounds: [[59.872257979453174, 30.29713869094849], [59.87136403749476, 30.307695865631107], [59.86442709281249, 30.29462814331055]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Победы',
        year: 2020,
        url: './maps/parks/pobedy_2020.jpg',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/parks/internatsionalistov_2021.jpg',
        bounds: [[59.86276804382595, 30.392925739288334], [59.86294041640396, 30.412087440490726], [59.855441383514496, 30.39324760437012]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/parks/ekateringof_1986.jpg',
        bounds: [[59.906952348502685, 30.255017280578617], [59.90583339361939, 30.27119636535645], [59.90037794856062, 30.253279209136966]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк - север',
        year: 2017,
        url: './maps/parks/polezhaevsky_north_2017.jpg',
        bounds: [[59.84853345120984, 30.17757654190064], [59.84579574590888, 30.212037563323978], [59.84222776838285, 30.173478126525882]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/parks/polezhaevsky_2015.jpg',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полюстровский парк',
        year: 2014,
        url: './maps/parks/polyustrovsky_2014.jpg',
        bounds: [[59.96850125617298, 30.418868064880375], [59.968458299943094, 30.431871414184574], [59.95922141683493, 30.419168472290043]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './maps/parks/pulkovsky_2024.jpg',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2019,
        url: './maps/parks/sosnovka_2019.jpg',
        bounds: [[60.03450203381863, 30.327758789062504], [60.03205832060785, 30.371103286743168], [60.01190151317921, 30.32200813293457]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Удельный парк',
        year: 2022,
        url: './maps/parks/udelny_2022.jpg',
        bounds: [[60.015376222736755, 30.294713973999027], [60.01172991312145, 30.33308029174805], [60.0032345970667, 30.288019180297855]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/parks/piskarevsky_2024.jpg',
        bounds: [[60.0064313230872, 30.39530754089356], [60.004586270603426, 30.422816276550297], [59.994350796655525, 30.390887260437015]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2012,
        url: './maps/parks/lesotekchnicheskaya_2012.jpg',
        bounds: [[59.99823507053651, 30.33007621765137], [59.99653978056108, 30.355482101440433], [59.99027289145817, 30.327501296997074]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парки Пионерский и им.акд. Сахарова',
        year: 2015,
        url: './maps/parks/sakharova_2015.jpg',
        bounds: [[59.98593688316973, 30.405349731445316], [59.98414435735637, 30.42476892471314], [59.976307625792515, 30.401959419250492]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Таврический сад',
        year: 2023,
        url: './maps/parks/tavrichesky_2023.jpg',
        bounds: [[59.94823046787108, 30.367712974548343], [59.947607215923064, 30.37899971008301], [59.943663263827155, 30.366854667663574]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'ЦПКиО - Елагин остров',
        year: 2017,
        url: './maps/parks/elagin_2017.jpg',
        bounds: [[59.98518553686155, 30.23699283599854], [59.9827167074759, 30.275316238403324], [59.97616805074679, 30.23497581481934]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино север',
        url: './maps/parks/aleksandrino_north.jpg',
        bounds: [[59.84785443506803, 30.217809677124027], [59.84677660322206, 30.238409042358402], [59.83603949282227, 30.214891433715824]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино юг',
        year: 2007,
        url: './maps/parks/aleksandrino_south_2007.jpg',
        bounds: [[59.838713313973486, 30.226092338562015], [59.83765674901652, 30.244331359863285], [59.82784418747832, 30.22325992584229]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александровский сад',
        year: 2020,
        url: './maps/parks/aleksandrovsky_sad_2020.jpg',
        bounds: [[59.93639742638281, 30.300679206848148], [59.94020251615056, 30.310270786285404], [59.933602449579325, 30.30462741851807]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сад 9 Января',
        year: 2018,
        url: './maps/parks/sad_9_janvarya_2018.jpg',
        link: './maps/parks/sad_9_janvarya_2018_full.jpg',
        bounds: [[59.89634227945784, 30.274221897125248], [59.89559966293086, 30.282289981842045], [59.88932442864754, 30.27171134948731]],
        owner: 'BVZ',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Луга - парк Зелёного Бора',
        year: 2019,
        url: './maps/parks/luga_zeleny_bor_park_2019.jpg',
        bounds: [[58.70221700150992, 29.821164608001713], [58.700723276668256, 29.83423233032227], [58.69201603857651, 29.817559719085697]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Воронцовский сквер',
        year: 2024,
        url: './maps/parks/vorontsovsky_skver_2024.jpg',
        bounds: [[59.85116316078165, 30.22746562957764], [59.851120052463955, 30.243279933929447], [59.84347822095314, 30.22772312164307]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новознаменка - запад',
        year: 2014,
        url: './maps/parks/novoznamenka_2014.jpg',
        bounds: [[59.85326462355383, 30.101037025451664], [59.85022554227052, 30.132408142089847], [59.84259428520911, 30.097217559814457]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новознаменка - восток',
        year: 2021,
        url: './maps/parks/novoznamenka_2021.jpg',
        bounds: [[59.84954656065081, 30.131399631500248], [59.84733708013794, 30.148158073425297], [59.845310695897346, 30.12912511825562]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф - Английский парк',
        year: 2010,
        url: './maps/parks/english_2010.jpg',
        bounds: [[59.88594413724038, 29.86993789672852], [59.884049301223534, 29.896545410156254], [59.87063163340102, 29.866118431091312]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф - Александрийский парк',
        url: './maps/parks/aleksandrijsky.jpg',
        bounds: [[59.87819185228175, 29.919676780700687], [59.87765343201456, 29.946413040161136], [59.86332825143852, 29.918217658996586]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновая поляна',
        year: 2015,
        url: './maps/parks/sosnovaya_poljana_2015.jpg',
        bounds: [[59.83845456647179, 30.125412940979007], [59.83720392519992, 30.14335155487061], [59.82556855423608, 30.122537612915043]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Южно-Приморский парк',
        year: 2021,
        url: './maps/parks/yuzhno_promorsky_2021.jpg',
        bounds: [[59.85716544875492, 30.1600456237793], [59.85613102033116, 30.174851417541507], [59.847466419624396, 30.157384872436523]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 2021,
        url: './maps/parks/gatchina_prioratsky_2021.jpg',
        bounds: [[59.56522340529709, 30.11159420013428], [59.562527651928654, 30.137000083923343], [59.544869479437935, 30.1030969619751]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Гатчина - парк Зверинец',
        year: 2005,
        url: './maps/parks/gatchina_zverinets_2005.jpg',
        bounds: [[59.586021273075325, 30.086317062377933], [59.583501004035575, 30.120906829833988], [59.5615275594932, 30.079236030578617]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2020,
        url: './maps/parks/nagorny_park_2020.jpg',
        bounds: [[59.7056032974501, 30.118718147277836], [59.70358994008143, 30.14111995697022], [59.691702169319946, 30.11365413665772]],
        info: 'Ковидный полигон от O-Time',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк 300-летя СПб',
        year: 2022,
        url: './maps/parks/300_let_spb_2022.jpg',
        bounds: [[59.987976165748115, 30.18676042556763], [59.9856148796975, 30.213110446929935], [59.97932445028676, 30.18249034881592]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Куракина дача',
        year: 2023,
        url: './maps/parks/kurakina_dacha_2023.jpg',
        bounds: [[59.877868801167914, 30.44790029525757], [59.87670579116358, 30.461847782135013], [59.86764799708028, 30.444016456604007]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Ладожский парк',
        year: 2024,
        url: './maps/parks/ladozhsky_park_2024.jpg',
        bounds: [[59.949541407859755, 30.453372001647953], [59.94815524843017, 30.46764135360718], [59.93939638951557, 30.448951721191406]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Политеха',
        year: 2022,
        url: './maps/parks/politekh_2022.jpg',
        bounds: [[60.009649191555134, 30.36827087402344], [60.00945612827708, 30.385394096374515], [60.00235490683813, 30.367970466613773]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Яблоновский сад',
        year: 2024,
        url: './maps/parks/yablonovsky_sad_2024.jpg',
        bounds: [[59.93024816649769, 30.452105998992923], [59.928850448435995, 30.473091602325443], [59.9221835982304, 30.449767112731937]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в',
        year: 2021,
        url: './maps/parks/krestovsky_south_2023.jpg',
        bounds: [[59.97251741755084, 30.24821519851685], [59.97133624417131, 30.26769876480103], [59.96627819811851, 30.244867801666263]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в - юг',
        year: 2023,
        url: './maps/parks/krestovsky_2021.jpg',
        bounds: [[59.97625394315225, 30.23162841796875], [59.974686371680654, 30.249352455139164], [59.969854348897655, 30.229310989379886]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - запад',
        year: 2019,
        url: './maps/parks/murinsky_north_2019.jpg',
        bounds: [[60.03347312397303, 30.373592376708988]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - восток',
        year: 2019,
        url: './maps/parks/murinsky_east_2019.jpg',
        bounds: [[60.02639850121701, 30.40899753570557], [60.02605545069949, 30.43169975280762], [60.01906502085821, 30.40895462036133]],
        types: ['ORIENT', 'PARK'],
        owner: 'KUZM',
    },
    {
        name: 'Новоорловский лесопарк',
        year: 2015,
        url: './maps/parks/novoorlovsky_2015.jpg',
        bounds: [[60.05858651266601, 30.269222259521488], [60.05674437067704, 30.294284820556644], [60.046953588726694, 30.266175270080566]],
        info: 'Ковидный полигон от O-Time',
        types: ['ORIENT', 'PARK'],
    },
];
