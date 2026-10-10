 document.addEventListener("DOMContentLoaded", function () {
const searchInput = document.getElementById("searchInput");
const searchBox = document.querySelector(".search-box");
if (!searchInput || !searchBox) {
    console.error("Не найдено поле поиска или поисковый блок.");
    return;
}

const articles = [
    // HTML — структура страницы
    ["div", "HTML", "Универсальный блочный контейнер для группировки элементов.", "<div>Мой блок</div>"],
    ["span", "HTML", "Строчный контейнер для оформления части текста.", '<span class="accent">Текст</span>'],
    ["h1", "HTML", "Главный заголовок страницы. Обычно используется один раз для основного заголовка.", "<h1>Заголовок сайта</h1>"],
    ["h2", "HTML", "Заголовок второго уровня для раздела страницы.", "<h2>О нас</h2>"],
    ["h3", "HTML", "Заголовок третьего уровня для подраздела.", "<h3>Подробнее</h3>"],
    ["p", "HTML", "Создаёт абзац текста.", "<p>Мой текст</p>"],
    ["br", "HTML", "Переносит текст на следующую строку.", "Первая строка<br>Вторая строка"],
    ["hr", "HTML", "Создаёт тематическое разделение между частями содержимого.", "<hr>"],
    ["strong", "HTML", "Обозначает важный текст, обычно отображается жирным.", "<strong>Важно!</strong>"],
    ["em", "HTML", "Выделяет текст смысловым ударением, обычно отображается курсивом.", "<em>Обрати внимание</em>"],
    ["b", "HTML", "Визуально выделяет текст жирным без дополнительного смысла важности.", "<b>Жирный текст</b>"],
    ["i", "HTML", "Выделяет текст курсивом без обязательного смыслового ударения.", "<i>Курсив</i>"],
    ["header", "HTML", "Шапка сайта или раздела. Может содержать логотип и заголовок.", "<header>Шапка сайта</header>"],
    ["nav", "HTML", "Блок навигации со ссылками по сайту.", '<nav><a href="#about">О нас</a></nav>'],
    ["main", "HTML", "Основное содержимое страницы.", "<main>Главный контент</main>"],
    ["footer", "HTML", "Нижняя часть сайта с контактами и дополнительной информацией.", "<footer>© 2026</footer>"],
    ["section", "HTML", "Объединяет связанные по смыслу элементы в раздел.", "<section><h2>О проекте</h2></section>"],
    ["article", "HTML", "Самостоятельный материал: статья, публикация или новость.", "<article><h2>Новость</h2></article>"],
    ["aside", "HTML", "Дополнительный контент, например боковая панель.", "<aside>Полезные ссылки</aside>"],
    ["a", "HTML", "Создаёт ссылку на страницу, файл или часть документа.", '<a href="https://example.com">Открыть сайт</a>'],
    ["img", "HTML", "Добавляет изображение. Атрибут alt содержит альтернативное описание.", '<img src="photo.jpg" alt="Описание изображения">'],
    ["ul", "HTML", "Создаёт маркированный список.", "<ul><li>Первый пункт</li><li>Второй пункт</li></ul>"],
    ["ol", "HTML", "Создаёт нумерованный список.", "<ol><li>Первый шаг</li><li>Второй шаг</li></ol>"],
    ["li", "HTML", "Элемент маркированного или нумерованного списка.", "<li>Пункт списка</li>"],
    ["figure", "HTML", "Группирует самостоятельный контент, например изображение с подписью.", "<figure><img src='photo.jpg' alt='Фото'><figcaption>Подпись</figcaption></figure>"],
    ["figcaption", "HTML", "Добавляет подпись к содержимому figure.", "<figcaption>Описание картинки</figcaption>"],
    ["video", "HTML", "Встраивает видео на страницу.", '<video controls src="video.mp4"></video>'],
    ["audio", "HTML", "Добавляет аудио с элементами управления.", '<audio controls src="music.mp3"></audio>'],
    ["iframe", "HTML", "Встраивает другую веб-страницу или внешний контент.", '<iframe src="https://example.com" title="Пример"></iframe>'],
    ["details", "HTML", "Создаёт раскрываемый блок с дополнительной информацией.", "<details><summary>Подробнее</summary>Текст внутри</details>"],
    ["summary", "HTML", "Заголовок раскрываемого блока details.", "<summary>Нажми, чтобы открыть</summary>"],
    ["div class", "HTML", "Атрибут class присваивает элементу класс для CSS и JavaScript.", '<div class="card">Карточка</div>'],
    ["id", "HTML", "Уникальный идентификатор элемента на странице.", '<section id="about">О нас</section>'],
    ["alt", "HTML", "Альтернативное описание изображения для доступности и случаев, когда картинка не загрузилась.", '<img src="cat.jpg" alt="Кот на диване">'],
    ["title", "HTML", "Добавляет элементу дополнительную подсказку.", '<button title="Сохранить">Сохранить</button>'],
    ["target", "HTML", "Указывает, где открыть ссылку. Значение _blank обычно открывает новую вкладку.", '<a href="https://example.com" target="_blank" rel="noopener">Сайт</a>'],
    ["form", "HTML", "Создаёт форму для ввода и отправки пользовательских данных.", '<form action="/send" method="post"><input name="username"></form>'],
    ["input", "HTML", "Создаёт поле ввода, переключатель, флажок и другие элементы формы.", '<input type="text" placeholder="Твоё имя">'],
    ["label", "HTML", "Добавляет понятную подпись к полю формы.", '<label for="email">Почта</label><input id="email" type="email">'],
    ["textarea", "HTML", "Поле для ввода многострочного текста.", '<textarea placeholder="Напиши сообщение"></textarea>'],
    ["button", "HTML", "Создаёт кнопку для действия.", "<button>Нажми меня</button>"],
    ["select", "HTML", "Создаёт выпадающий список вариантов.", "<select><option>HTML</option><option>CSS</option></select>"],
    ["option", "HTML", "Один из вариантов выпадающего списка.", '<option value="html">HTML</option>'],
    ["placeholder", "HTML", "Показывает подсказку внутри пустого поля ввода.", '<input placeholder="Введи имя">'],
    ["required", "HTML", "Делает заполнение поля обязательным при стандартной проверке формы.", '<input type="email" required>'],
    ["disabled", "HTML", "Отключает интерактивный элемент.", "<button disabled>Недоступно</button>"],
    ["checked", "HTML", "Устанавливает флажок или переключатель в отмеченное состояние.", '<input type="checkbox" checked>'],
    ["type", "HTML", "Определяет тип поля input, например text, password, email или number.", '<input type="password">'],
    ["DOCTYPE", "HTML", "Объявляет современный режим HTML-документа.", "<!DOCTYPE html>"],
    ["meta", "HTML", "Передаёт браузеру сведения о документе, например кодировку и настройки экрана.", '<meta charset="UTF-8">'],
    ["link", "HTML", "Подключает внешние ресурсы, часто CSS-файл.", '<link rel="stylesheet" href="style.css">'],
    ["script", "HTML", "Подключает или содержит JavaScript.", '<script src="script.js" defer></script>'],
    ["title tag", "HTML", "Задаёт название страницы во вкладке браузера.", "<title>Мой сайт</title>"],

    // CSS — оформление
    ["color", "CSS", "Меняет цвет текста.", "color: #8b5cf6;"],
    ["background", "CSS", "Задаёт фон элемента: цвет или изображение.", "background: #171923;"],
    ["background-color", "CSS", "Задаёт цвет фона.", "background-color: #171923;"],
    ["background-image", "CSS", "Устанавливает фоновое изображение или градиент.", 'background-image: url("background.jpg");'],
    ["background-size", "CSS", "Управляет размером фонового изображения. Значение cover заполняет область.", "background-size: cover;"],
    ["background-position", "CSS", "Определяет положение фонового изображения.", "background-position: center;"],
    ["linear-gradient", "CSS", "Создаёт плавный переход между цветами.", "background: linear-gradient(90deg, purple, blue);"],
    ["margin", "CSS", "Задаёт внешние отступы вокруг элемента.", "margin: 20px;"],
    ["margin-top", "CSS", "Задаёт внешний отступ сверху.", "margin-top: 16px;"],
    ["padding", "CSS", "Задаёт внутренние отступы между содержимым и границами элемента.", "padding: 20px;"],
    ["padding-left", "CSS", "Задаёт внутренний отступ слева.", "padding-left: 12px;"],
    ["width", "CSS", "Задаёт ширину элемента.", "width: 300px;"],
    ["height", "CSS", "Задаёт высоту элемента.", "height: 200px;"],
    ["min-width", "CSS", "Задаёт минимальную ширину элемента.", "min-width: 200px;"],
    ["max-width", "CSS", "Ограничивает максимальную ширину элемента.", "max-width: 1200px;"],
    ["min-height", "CSS", "Задаёт минимальную высоту элемента.", "min-height: 100vh;"],
    ["max-height", "CSS", "Ограничивает максимальную высоту элемента.", "max-height: 500px;"],
    ["box-sizing", "CSS", "Определяет, учитываются ли padding и border в заданных размерах.", "box-sizing: border-box;"],
    ["display", "CSS", "Определяет способ отображения элемента: block, inline, flex, grid и другие.", "display: flex;"],
    ["block", "CSS", "Блочный тип отображения обычно начинает новую строку и занимает доступную ширину.", "display: block;"],
    ["inline", "CSS", "Строчный тип отображения позволяет элементу располагаться внутри строки текста.", "display: inline;"],
    ["inline-block", "CSS", "Позволяет элементу оставаться в строке и задавать ширину и высоту.", "display: inline-block;"],
    ["flex", "CSS", "Включает гибкую раскладку для удобного размещения элементов.", "display: flex;"],
    ["flex-direction", "CSS", "Определяет направление элементов Flexbox: строка или колонка.", "flex-direction: column;"],
    ["flex-wrap", "CSS", "Разрешает элементам Flexbox переноситься на новую строку.", "flex-wrap: wrap;"],
    ["flex-grow", "CSS", "Определяет, насколько элемент может увеличиваться, занимая свободное место.", "flex-grow: 1;"],
    ["justify-content", "CSS", "Выравнивает и распределяет элементы по главной оси Flexbox.", "justify-content: center;"],
    ["align-items", "CSS", "Выравнивает элементы по поперечной оси.", "align-items: center;"],
    ["align-content", "CSS", "Управляет расположением нескольких строк или столбцов в доступном пространстве.", "align-content: center;"],
    ["gap", "CSS", "Задаёт промежутки между элементами Flexbox или Grid.", "gap: 16px;"],
    ["grid", "CSS", "Включает сеточную раскладку из строк и столбцов.", "display: grid;"],
    ["grid-template-columns", "CSS", "Задаёт количество и размеры столбцов CSS Grid.", "grid-template-columns: 1fr 1fr;"],
    ["grid-template-rows", "CSS", "Задаёт размеры строк CSS Grid.", "grid-template-rows: auto 1fr;"],
    ["grid-column", "CSS", "Определяет, какие столбцы занимает элемент сетки.", "grid-column: 1 / 3;"],
    ["place-items", "CSS", "Сокращённо задаёт выравнивание элементов Grid по двум осям.", "place-items: center;"],
    ["position", "CSS", "Определяет способ позиционирования: static, relative, absolute, fixed или sticky.", "position: relative;"],
    ["top", "CSS", "Задаёт верхнее смещение позиционируемого элемента.", "top: 20px;"],
    ["right", "CSS", "Задаёт смещение от правого края.", "right: 10px;"],
    ["bottom", "CSS", "Задаёт смещение от нижнего края.", "bottom: 0;"],
    ["left", "CSS", "Задаёт смещение от левого края.", "left: 10px;"],
    ["z-index", "CSS", "Управляет порядком перекрытия элементов в соответствующем контексте наложения.", "z-index: 10;"],
    ["overflow", "CSS", "Управляет содержимым, выходящим за границы элемента.", "overflow: auto;"],
    ["opacity", "CSS", "Устанавливает прозрачность от 0 до 1.", "opacity: 0.5;"],
    ["visibility", "CSS", "Управляет видимостью элемента, сохраняя его место при visibility: hidden.", "visibility: hidden;"],
    ["cursor", "CSS", "Меняет вид курсора при наведении.", "cursor: pointer;"],
    ["font-size", "CSS", "Задаёт размер текста.", "font-size: 20px;"],
    ["font-family", "CSS", "Задаёт семейство шрифтов.", "font-family: Arial, sans-serif;"],
    ["font-weight", "CSS", "Задаёт толщину начертания текста.", "font-weight: 700;"],
    ["font-style", "CSS", "Задаёт обычный или курсивный стиль текста.", "font-style: italic;"],
    ["line-height", "CSS", "Устанавливает высоту строки текста.", "line-height: 1.6;"],
    ["letter-spacing", "CSS", "Меняет расстояние между символами.", "letter-spacing: 2px;"],
    ["text-align", "CSS", "Выравнивает текст по левому краю, центру или правому краю.", "text-align: center;"],
    ["text-decoration", "CSS", "Добавляет или убирает подчёркивание и другие линии текста.", "text-decoration: none;"],
    ["text-transform", "CSS", "Меняет регистр текста, например делает все буквы заглавными.", "text-transform: uppercase;"],
    ["text-shadow", "CSS", "Добавляет тень тексту.", "text-shadow: 0 2px 8px #000;"],
    ["white-space", "CSS", "Управляет пробелами и переносами строк.", "white-space: nowrap;"],
    ["border", "CSS", "Задаёт рамку: толщину, стиль и цвет.", "border: 1px solid #555;"],
    ["border-radius", "CSS", "Закругляет углы элемента.", "border-radius: 12px;"],
    ["border-bottom", "CSS", "Задаёт нижнюю границу элемента.", "border-bottom: 1px solid #444;"],
    ["outline", "CSS", "Добавляет внешний контур, не занимающий место как border.", "outline: 2px solid blue;"],
    ["box-shadow", "CSS", "Добавляет тень вокруг элемента.", "box-shadow: 0 4px 12px #0005;"],
    ["text-overflow", "CSS", "Управляет отображением текста, который не помещается в строку.", "text-overflow: ellipsis;"],
    ["object-fit", "CSS", "Определяет, как изображение или видео заполняет заданную область.", "object-fit: cover;"],
    ["object-position", "CSS", "Определяет положение изображения внутри его области.", "object-position: center;"],
    ["aspect-ratio", "CSS", "Задаёт предпочтительное соотношение ширины и высоты.", "aspect-ratio: 16 / 9;"],
    ["filter", "CSS", "Применяет эффекты: размытие, яркость, оттенки серого и другие.", "filter: blur(2px);"],
    ["transform", "CSS", "Поворачивает, перемещает или масштабирует элемент.", "transform: scale(1.05);"],
    ["translate", "CSS", "Перемещает элемент по горизонтали или вертикали.", "translate: 10px 5px;"],
    ["transition", "CSS", "Делает изменения CSS-свойств плавными.", "transition: all 0.3s ease;"],
    ["transition-duration", "CSS", "Задаёт продолжительность перехода между состояниями.", "transition-duration: 0.3s;"],
    ["animation", "CSS", "Запускает CSS-анимацию, описанную через @keyframes.", "animation: appear 1s ease;"],
    ["animation-duration", "CSS", "Задаёт продолжительность одного цикла анимации.", "animation-duration: 2s;"],
    ["animation-delay", "CSS", "Задаёт задержку перед началом анимации.", "animation-delay: 0.5s;"],
    ["animation-iteration-count", "CSS", "Определяет количество повторений анимации.", "animation-iteration-count: infinite;"],
    ["@keyframes", "CSS", "Описывает этапы CSS-анимации.", "@keyframes appear { from { opacity: 0; } to { opacity: 1; } }"],
    [":hover", "CSS", "Применяет стили, когда указатель находится над элементом.", "button:hover { opacity: 0.8; }"],
    [":focus", "CSS", "Применяет стили, когда элемент получает фокус.", "input:focus { border-color: blue; }"],
    [":active", "CSS", "Применяет стили в момент активации элемента, например при нажатии.", "button:active { transform: scale(0.98); }"],
    [":first-child", "CSS", "Выбирает элемент, который является первым среди соседей.", "li:first-child { color: red; }"],
    [":last-child", "CSS", "Выбирает последний элемент среди соседей.", "li:last-child { color: blue; }"],
    [":nth-child", "CSS", "Выбирает элементы по порядковому номеру среди соседей.", "li:nth-child(2) { color: red; }"],
    ["::before", "CSS", "Создаёт декоративное содержимое перед содержимым элемента.", '.card::before { content: "★"; }'],
    ["::after", "CSS", "Создаёт декоративное содержимое после содержимого элемента.", '.card::after { content: "→"; }'],
    ["@media", "CSS", "Применяет стили при выполнении условий, например при определённой ширине экрана.", "@media (max-width: 600px) { .card { width: 100%; } }"],
    ["responsive design", "CSS", "Адаптивный дизайн позволяет сайту удобно выглядеть на телефонах, планшетах и компьютерах.", "@media (max-width: 600px) { .menu { display: none; } }"],
    ["CSS variables", "CSS", "Переменные CSS позволяют повторно использовать значения цветов, размеров и других свойств.", ":root { --accent: #8b5cf6; }"],
    ["var", "CSS", "Использует значение пользовательской CSS-переменной.", "color: var(--accent);"],
    ["calc", "CSS", "Вычисляет CSS-значение с помощью математических операций.", "width: calc(100% - 40px);"],
    ["rem", "CSS", "Единица измерения относительно размера шрифта корневого элемента.", "padding: 2rem;"],
    ["em", "CSS", "Единица измерения, обычно связанная с размером шрифта элемента.", "margin: 1em;"],
    ["px", "CSS", "Пиксель — фиксированная CSS-единица длины.", "width: 200px;"],
    ["percent", "CSS", "Проценты задают размер относительно соответствующей величины родителя.", "width: 50%;"],
    ["vh", "CSS", "Единица, связанная с высотой области просмотра браузера.", "min-height: 100vh;"],
    ["vw", "CSS", "Единица, связанная с шириной области просмотра браузера.", "width: 100vw;"],
    ["list-style", "CSS", "Управляет маркерами и оформлением списков.", "list-style: none;"],
    ["scroll-behavior", "CSS", "Определяет поведение прокрутки, например плавную прокрутку к якорю.", "scroll-behavior: smooth;"],
    ["pointer-events", "CSS", "Управляет тем, может ли элемент быть целью указателя мыши.", "pointer-events: none;"],
    ["user-select", "CSS", "Управляет возможностью выделять текст пользователем.", "user-select: none;"]
];

const results = document.createElement("div");
results.id = "searchResults";
results.className = "search-results";
results.hidden = true;
searchBox.insertAdjacentElement("afterend", results);

const sections = document.querySelectorAll(
    ".categories, .content-section, #html, #css, #examples"
);

function showOriginalSections(show) {
    sections.forEach(function (section) {
        section.hidden = !show;
    });
}

function searchArticles() {
    const query = searchInput.value.trim().toLowerCase();

    results.replaceChildren();

    if (!query) {
        results.hidden = true;
        showOriginalSections(true);
        return;
    }

    showOriginalSections(false);
    results.hidden = false;

    const matches = articles.filter(function (article) {
        return article.join(" ").toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent = "Ничего не найдено. Попробуй другое слово.";
        results.appendChild(message);
        return;
    }

    const count = document.createElement("p");
    count.className = "search-count";
    count.textContent = "Найдено результатов: " + matches.length;
    results.appendChild(count);

    matches.forEach(function (article) {
        const card = document.createElement("article");
        card.className = "result-card";

        const heading = document.createElement("h3");
        heading.className = "result-heading";
        heading.textContent = article[0];

        const category = document.createElement("span");
        category.className = "result-category";
        category.textContent = article[1];

        const description = document.createElement("p");
        description.textContent = article[2];

        const code = document.createElement("code");
        code.textContent = article[3];

        card.append(heading, category, description, code);
        results.appendChild(card);
    });
}

searchInput.addEventListener("input", searchArticles);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchArticles();
    }

    if (event.key === "Escape") {
        searchInput.value = "";
        searchArticles();
    }
});

console.log("HTML & CSS: библиотека загружена. Терминов: " + articles.length);

});