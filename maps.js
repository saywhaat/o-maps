// types can be ORIENT, ROGAINE, SPRINT, QUARTERS, RELIEF
var oMaps = [
    // --- городские парки ---
    {
        name: 'Парк Победы',
        year: 2020,
        url: 'http://www.northernwind.spb.ru/mapbase/online/loadjpg/o-maps/pobedy_2020.jpg',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: 'http://www.northernwind.spb.ru/mapbase/online/loadjpg/o-maps/polezhaevsky_2015.jpg',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT'],
    },
    {
        name: 'Полюстровский парк',
        year: 2014,
        url: 'http://www.northernwind.spb.ru/mapbase/online/loadjpg/o-maps/polyustrovsky_2014.jpg',
        bounds: [[59.96850125617298, 30.418868064880375], [59.968458299943094, 30.431871414184574], [59.95922141683493, 30.419168472290043]],
        types: ['ORIENT'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './loadjpg/o-maps/pulkovsky_2024.jpg',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'SPRINT'],
    },
    {
        name: 'Сосновка',
        year: 2019,
        url: './loadjpg/o-maps/sosnovka_2019.jpg',
        bounds: [[60.03450203381863, 30.327758789062504], [60.03205832060785, 30.371103286743168], [60.01190151317921, 30.32200813293457]],
        types: ['ORIENT'],
    },
    // --- городские кварталы ---
    {
        name: 'ЖК "Академ Парк"',
        year: 2022,
        url: './loadjpg/o-maps/akadem_park_2022.jpg',
        bounds: [[60.00842643842314, 30.398890972137455], [60.00738599006695, 30.40973782539368], [60.000461347882606, 30.396466255187992]],
        author: 'KUZ',
        types: ['ORIENT', 'SPRINT', 'QUARTERS'],
    },
    {
        name: 'Сад Олимпия',
        year: 2023,
        url: './loadjpg/o-maps/olimpia_2023.jpg',
        bounds: [[59.91895722202924, 30.317974090576175], [59.91908628309989, 30.330934524536136], [59.909932457837336, 30.318167209625248]],
        author: 'WN',
        types: ['ORIENT', 'SPRINT', 'QUARTERS'],
    },
    // --- рогейн ---
    {
        name: 'Крестовский остров',
        year: 2024,
        url: './loadjpg/o-maps/krestovsky_KKM_2024.jpg',
        bounds: [[59.98645208220945, 30.187597274780277], [59.98585101588345, 30.273513793945316], [59.964592011112174, 30.188112258911136]],
        author: 'KKM',
        types: ['ROGAINE'],
    },
    {
        name: 'Ржевский лесопарк',
        year: 2023,
        url: './loadjpg/o-maps/rzhevsky_rogaine_2023.jpg',
        bounds: [[59.97722021736102, 30.491437911987305], [59.97520174583225, 30.55727005004883], [59.95157218793088, 30.48568725585938]],
        types: ['ROGAINE'],
    },
];