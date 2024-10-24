// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var rogaineMaps = [
    // --- рогейн ---
    {
        name: 'Крестовский остров - ККМ',
        year: 2024,
        url: './maps/rogaine/kkm/krestovsky_KKM_2024.jpg',
        link: 'https://kkmstart.ru/marshrut-№6-2024/',
        bounds: [[59.98645208220945, 30.187597274780277], [59.98585101588345, 30.273513793945316], [59.964592011112174, 30.188112258911136]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Екатерингоф - ККМ-ноябрь',
        year: 2021,
        url: './maps/rogaine/kkm/ekateringof_KKM_2021_11.webp',
        link: 'https://kkmstart.ru/marshrut-№11/',
        bounds: [[59.91041656586618, 30.25566101074219], [59.90843705734661, 30.280551910400394], [59.892166191012564, 30.249309539794925]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергофское ш. - ККМ-октябрь',
        year: 2022,
        url: './maps/rogaine/kkm/peterhof_road_KKM_2022.jpg',
        link: 'https://kkmstart.ru/marshrut-№10/',
        bounds: [[59.847531089179114, 30.123653411865238], [59.847487976156614, 30.208883285522464], [59.8233574820502, 30.123610496521]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Петергоф - ККМ-март',
        year: 2023,
        url: './maps/rogaine/kkm/peterhof_KKM_2023_03.jpg',
        link: 'https://kkmstart.ru/marshrut-№3-2023/',
        bounds: [[59.891305076568734, 29.884271621704105], [59.891132851001714, 29.97653961181641], [59.85714389849079, 29.88461494445801]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Гатчина - ККМ-май',
        year: 2023,
        url: './maps/rogaine/kkm/gatchina_KKM_2023_05.webp',
        link: 'https://kkmstart.ru/marshrut-№5-2023/',
        bounds: [[59.59449320676533, 30.072841644287113], [59.59414568223871, 30.14511108398438], [59.54336854286804, 30.073013305664066]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сиверский, р.Оредеж - ККМ-июнь',
        year: 2023,
        url: './maps/rogaine/kkm/oredezh_KKM_2021_06.jpg',
        link: 'https://kkmstart.ru/marshrut-№6/',
        bounds: [[59.370030083826, 30.057048797607425], [59.36989889353371, 30.190429687500004], [59.335947296651405, 30.06065368652344]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Сестрорецк - ККМ-май',
        year: 2024,
        url: './maps/rogaine/kkm/sestroretsk_KKM_2024_05.jpg',
        link: 'https://kkmstart.ru/marshrut-№5-2024/',
        bounds: [[60.130820091007536, 29.91731643676758], [60.13124754338759, 30.013790130615238], [60.05935761134086, 29.91731643676758]],
        owner: 'KKM',
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
        name: 'Дибуны - ККМ-февраль',
        year: 2012,
        url: './maps/rogaine/kkm/dibuny_KKM_2012_02.webp',
        link: './original_maps/rogaine/kkm/dibuny_KKM_2012_02_full.jpg',
        bounds: [[60.13167499021484, 30.057735443115238], [60.13107656310189, 30.153694152832035], [60.083852031773, 30.06013870239258]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Шевелево - ККМ-март',
        year: 2017,
        url: './maps/rogaine/kkm/shevelevo_KKM_2017_03.webp',
        link: './original_maps/rogaine/kkm/shevelevo_KKM_2017_03_full.jpg',
        bounds: [[60.33833320798648, 29.29040908813477], [60.338588061002966, 29.44318771362305], [60.285876119662845, 29.289207458496097]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Зеленогорск - ККМ-март',
        year: 2021,
        url: './maps/rogaine/kkm/zelenogorsk_KKM_2021_03.webp',
        link: 'https://kkmstart.ru/marshrut-№-3-2/',
        bounds: [[60.23137452062541, 29.727201461791996], [60.22195529077001, 29.836034774780277], [60.19500390924258, 29.71484184265137]],
        owner: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Ржевский лесопарк',
        year: 2023,
        url: './maps/rogaine/rzhevsky_rogaine_2023.jpg',
        bounds: [[59.97722021736102, 30.491437911987305], [59.97520174583225, 30.55727005004883], [59.95157218793088, 30.48568725585938]],
        types: ['ROGAINE'],
        owner: 'RDNV_I',
    },
    {
        name: 'Шуваловский лесопарк',
        year: 2024,
        url: './maps/rogaine/shuvalovsky_rogaine_2024.jpg',
        bounds: [[60.08453692889112, 30.291752815246586], [60.08190427782784, 30.32033443450928], [60.06931601663244, 30.28668880462647]],
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки - Финал КЛО',
        year: 2019,
        url: './maps/rogaine/shapki_KLO_2019.jpg',
        bounds: [[59.62766525116755, 31.11662864685059], [59.63643039704262, 31.209068298339847], [59.55989691029292, 31.14486694335938]],
        types: ['ROGAINE'],
    },
    {
        name: 'Шапки - ККМ-апрель',
        year: 2020,
        url: './maps/rogaine/kkm/shapki_KKM_2020.jpg',
        link: './original_maps/rogaine/kkm/shapki_KKM_2020_full.jpg',
        bounds: [[59.628663378277295, 31.12838745117188], [59.625712307963056, 31.18280410766602], [59.59401535961515, 31.12040519714356]],
        types: ['ROGAINE'],
    },
/*
    {
        name: 'Токсово - ККМ-сентябрь',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_09.webp',
        link: 'https://kkmstart.ru/marshrut-№9-2024/',
        bounds: [[60.193937339120886, 30.399684906005863], [60.18856129813442, 30.501823425292972], [60.130820091007536, 30.383377075195316]],
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово - ККМ-август',
        year: 2024,
        url: './maps/rogaine/kkm/toksovo_KKM_2024_08.webp',
        link: 'https://kkmstart.ru/marshrut-№8-2024/',
        bounds: [[60.2157737824211, 30.425090789794925], [60.217564408179925, 30.509548187255863], [60.160813763561954, 30.429897308349613]],
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово, оз Хепоярви - ККМ-апрель',
        year: 2017,
        url: './maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04.webp',
        link: './original_maps/rogaine/kkm/toksovo_hepojarvy_KKM_2017_04_full.jpg',
        bounds: [[60.19248674813239, 30.55280685424805], [60.184507351685134, 30.661983489990238], [60.15380914355222, 30.540018081665043]],
        types: ['ROGAINE'],
    },
*/
    {
        name: '78 км',
        url: './maps/rogaine/beketov/78km.webp',
        link: './original_maps/rogaine/beketov/78km.jpg',
        bounds: [[60.68007223452519, 30.020828247070316], [60.69015786886322, 30.436592102050785], [60.540060727006335, 30.037651062011722]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Токсово - BikeAdventure Light',
        year: 2018,
        url: './maps/rogaine/beketov/toksovo_bal_2018.webp',
        link: './original_maps/rogaine/beketov/BAL18_distance.All.jpg',
        bounds: [[60.26536351191468, 30.36827087402344], [60.2365731170135, 30.713310241699222], [60.107472761261164, 30.31333923339844]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Мичуринское',
        url: './maps/rogaine/beketov/michurinskoe.webp',
        link: './original_maps/rogaine/beketov/center.jpg',
        bounds: [[60.634479381884795, 29.75234985351563], [60.63414266332332, 30.251541137695316], [60.373144671593685, 29.753723144531254]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Грузино',
        url: './maps/rogaine/beketov/gruzino.webp',
        link: './original_maps/rogaine/beketov/gruzino.jpg',
        bounds: [[60.33306579997825, 30.229568481445316], [60.331876267596044, 30.443115234375004], [60.26212798478831, 30.228881835937504]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Каннельярви',
        url: './maps/rogaine/beketov/kanneljarvy.webp',
        link: './original_maps/rogaine/beketov/k-jarvi.jpg',
        bounds: [[60.45163096876463, 29.152908325195316], [60.45078439568225, 29.617424011230472], [60.16713372475682, 29.149131774902347]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Кузнечное',
        url: './maps/rogaine/beketov/kuznechnoe.webp',
        link: './original_maps/rogaine/beketov/kuznechnoe.jpg',
        bounds: [[61.25389075952261, 29.516487121582035], [61.26132000895963, 29.839210510253906], [61.116961670809445, 29.530391693115238]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Оять',
        url: './maps/rogaine/beketov/ojat.webp',
        link: './original_maps/rogaine/beketov/ojat.jpg',
        bounds: [[60.4903803750114, 33.1344223022461], [60.48801274327637, 33.73695373535157], [60.3750115533182, 33.13339233398438]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Орехово',
        url: './maps/rogaine/beketov/orekhovo.webp',
        link: './original_maps/rogaine/beketov/Orehovo_new.jpg',
        bounds: [[60.565209785065306, 30.21926879882813], [60.57246393181694, 30.620613098144535], [60.39706660026772, 30.232315063476566]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Гора-Валдай',
        url: './maps/rogaine/beketov/gora_valday.webp',
        link: './original_maps/rogaine/beketov/sosnobyl.gif',
        bounds: [[59.997011895357794, 29.093685150146488], [59.99229044420948, 29.348258972167972], [59.92181795802118, 29.08939361572266]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Каменногорск - BikeAdventure',
        year: 2023,
        url: './maps/rogaine/beketov/kamennogorsk_2023.webp',
        link: './original_maps/rogaine/beketov/svetBA2023.jpg',
        bounds: [[61.069082670716135, 28.70452880859375], [61.030028872681896, 29.312810897827152], [60.661237256330466, 28.583679199218754]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Мельниково - ВМБ',
        year: 2020,
        url: './maps/rogaine/beketov/melnikovo_2020.webp',
        link: './original_maps/rogaine/beketov/VMB20.jpg',
        bounds: [[61.0508081601232, 29.285774230957035], [61.06160800863787, 29.712524414062504], [60.84825556578081, 29.309463500976566]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Первомайское',
        url: './maps/rogaine/beketov/pervomayskoe.webp',
        link: './original_maps/rogaine/beketov/volochaevka_new.jpg',
        bounds: [[60.48209290767693, 29.67269897460938], [60.4107162771735, 29.8359489440918], [60.43012117400133, 29.579143524169925]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Воробьёво оз',
        url: './maps/rogaine/beketov/vorobjevo.webp',
        link: './original_maps/rogaine/beketov/vorob_1.jpg',
        bounds: [[61.049478693582785, 29.973106384277347], [61.05595931625313, 30.48568725585938], [60.65585380965987, 30.00846862792969]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Выборг - ВМБ',
        year: 2019,
        url: './maps/rogaine/beketov/vyborg_2019.webp',
        link: './original_maps/rogaine/beketov/zavyborgVMB19.jpg',
        bounds: [[60.84758659536134, 28.363952636718754], [60.92759629574196, 28.561019897460938], [60.70931186508957, 28.601875305175785]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Яппиля',
        url: './maps/rogaine/beketov/jappilya.webp',
        link: './original_maps/rogaine/beketov/jappila.jpg',
        bounds: [[60.3493750131044, 28.941421508789066], [60.3451286072627, 29.252128601074222], [60.169353963123186, 28.930435180664066]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
    {
        name: 'Балтиец, RFAR',
        year: 2021,
        url: './maps/rogaine/vjisotsk_rfar_2021.webp',
        bounds: [[60.89571668586482, 28.146972656250004], [60.89705259731161, 28.71414184570313], [60.524184817591255, 28.12362670898438]],
        types: ['ROGAINE'],
    },
/*
    {
        //  Бобочинский полигон
        name: 'Гаврилово',
        url: './maps/rogaine/beketov/gavrilovo.webp',
        link: './original_maps/rogaine/beketov/zona.jpg',
        bounds: [[60.59489087388518, 28.941421508789066], [60.59168797815975, 29.249382019042972], [60.50035635259788, 28.93833160400391]],
        owner: 'BKTV',
        types: ['ROGAINE'],
    },
*/
];
