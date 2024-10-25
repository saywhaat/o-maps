
let welcomeDialog;

const welcomeDialogContent = `
<h2>O-maps / Карты на карте</h2>
<p>
Добро пожаловать на сайт-каталог спортивных карт (ориентирование, рогейн, охота на лис, туризм итп) Санкт-Петербурга и области.
Тут представлены более 300 карт различных авторов, мест, типов и годов издания. Со временем их будет ещё больше. Всё это позволяет решать три основные задачи:<br/>
<ol>
<li><b>Карты для соревнований и тренировок</b> - достаточно свежие, актуальные, с доступными полноразмерами для печати или с указанием правообладателя, у которого карту можно купить.</li>
<li><b>Карты различных годов и авторов</b> в одних и тех же местах - от 50-летней давности до самых свежих. Позволяет наблюдать развитие картографии.</li>
<li><b>Архив</b> - старые карты или уже не актуальные из-за сильного изменения местности</li>
</ol>
</p>
<p>
Большинство карт выложены в виде изображений низкого качества, достаточного для просмотра, но недостаточного для печати.
В тех случаях, когда владельцы не возражают, карты сопровождаются ссылкой на скачивание полноразмерного изображения.
</p>
<h4>Отдельное обращение к правообладателям:</h4> 
<p>
Если Ваших карт тут ещё нет, и Вы хотели бы это исправить, напишите мне.<br/>
Если Вы по каким-то причинам категорически не хотите, чтобы Ваши карты тут появились (что, конечно, очень печально), напишите мне.<br/>
Если показ Ваших карт надо сопроводить Вашей контактной информацией, напишите мне.<br/>
Всё это для Вас бесплатно.
</p>
<p>
<b>PS:</b>
Исходный код сайта <a href="https://github.com/efradkin/o-maps" target="_blank">доступен свободно</a>, но при его использовании прошу указывать ссылку на <a href="https://github.com/efradkin/o-maps" target="_blank">мой проект на GitHub</a>. Для коммерческого использования кода проекта или любой его части прошу связываться со мной.<br/>
Буду благодарен за предложения, конструктивную критику и всяческую помощь.
Если Вам нравится то, что я делаю, Вы можете меня поддержать словесно или материально в любой форме.
</p>
<p><em>Евгений Фрадкин</em> 
<hr />
Найти меня можно по электронной почте eugene.fradkin(at)gmail.com или в <a href="https://t.me/o_maps" target="_blank">чате проекта в Telegram</a>.
</p>
`;


// --- welcome dialog (https://github.com/NBTSolutions/Leaflet.Dialog) ---
let dialogOptions = {
    size: [ 0, 0 ],
    minSize: [ 0, 0 ],
    maxSize: [ 999, 1999 ],
    anchor: [ 0, 0 ],
    position: "topleft",
    initOpen: false
};

function openWelcome() {
    const sw = window.innerWidth;
    const sh = window.innerHeight;

    let dw = sw - 400;
    if (dw < sw/2) dw = sw - 100;
    if (dw > 800) dw = 800;
    let dh = sh - 300;
    if (sh < 800) dh = sh - 100;

    let x = (sw - dw)/2;
    let y = 50;

    welcomeDialog.hideResize();
    welcomeDialog.setSize([dw, dh]);
    welcomeDialog.setLocation([y, x]);
    welcomeDialog.open();
}