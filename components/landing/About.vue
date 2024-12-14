<script setup lang="ts">
    import { ref } from 'vue';

    const showAll = ref(false);

    function showAllItems() {
        showAll.value = true;
    }

    const dowload_images = [
        { id: 1, src: 'src/assets/about_page/stay-in-touch.png' },
        { id: 2, src: 'src/assets/about_page/apple-dl.png' },
        { id: 3, src: 'src/assets/about_page/google-play-dl.png' },
        { id: 4, src: 'src/assets/about_page/huawei-dl.png' },
    ];
    console.log(dowload_images)

    const dowload_links = [        
        { id: 1, url: "https://almaty.hh.kz/mobile?from=main_page_mobpromo_almaty.hh.kz" },
        { id: 2, url: "https://redirect.appmetrica.yandex.com/serve/672819448956069558?main_page=almaty.hh.kz" },
        { id: 3, url: "https://redirect.appmetrica.yandex.com/serve/1033107423658825167?main_page=almaty.hh.kz" },
        { id: 4, url: "https://redirect.appmetrica.yandex.com/serve/819411740142879951?main_page=almaty.hh.kz" },
    ]; 

    const images = [
        { id: 1, src: "https://hhcdn.ru/file/17737589.png"},
        { id: 2, src: "https://hhcdn.ru/file/17737591.png"},
        { id: 3, src: "https://hhcdn.ru/file/17737592.png"},
        { id: 4, src: "https://hhcdn.ru/file/17737593.jpg"},
        { id: 5, src: "https://hhcdn.ru/file/17737611.png"},
        { id: 6, src: "https://hhcdn.ru/file/17737613.png"},
        { id: 7, src: "https://hhcdn.ru/file/17737615.png"},
        { id: 8, src: "https://hhcdn.ru/file/17737618.png"},
    ];

    const newsList = [
        { id: 1, title: "Что команда hh.kz сделала в 2023 году для своих пользователей" },
        { id: 2, title: "Авторазбор откликов с чат-ботом: разберёт, задаст вопросы и ответит кандидатам за 15 минут" },
        { id: 3, title: "Соискатели на HeadHunter смогут подтвердить свои знания английского" },
        { id: 4, title: "Исследования заработных плат в Казахстане" },
        { id: 5, title: "Разрыв шаблонов: пара кликов до интересной, хорошей, новой работы" },
        { id: 6, title: "Самые частые ошибки джунов при поиске работы" },
        { id: 7, title: "Не белые воротнички: как успешно пройти собеседование тем, кто не хочет трудиться в офисе" },
        { id: 8, title: "Работа с огоньком: как справляться со стрессом на работе" }
    ];

    const professionList = [
        { id: 1, title: "Для программистов" },
        { id: 2, title: "Для бухгалтеров" },
        { id: 3, title: "Для инженеров" },
        { id: 4, title: "Для менеджеров по продажам" },
        { id: 5, title: "Для директоров" },
        { id: 6, title: "Для администраторов" },
        { id: 7, title: "Для маркетологов" },
        { id: 8, title: "Для дизайнеров" },
        { id: 9, title: "Для юристов" },
        { id: 10, title: "Для секретарей" }
    ];

    const locationList = [
        { id: 1, title: "Работа в Караганде" },
        { id: 2, title: "Работа в Усть-Каменогорске" },
        { id: 3, title: "Работа в Павлодаре" },
        { id: 4, title: "Работа в Актау" },
        { id: 5, title: "Работа в Атырау" },
        { id: 6, title: "Работа в Актобе" },
        { id: 7, title: "Работа в Костанае" },
        { id: 8, title: "Работа в Шымкенте" },
        { id: 9, title: "Работа в Астане" }
    ];

    const sectorList = [
        { id: 1, title: "Автомобильный бизнес" },
        { id: 2, title: "Административный персонал" },
        { id: 3, title: "Безопасность" },
        { id: 4, title: "Высший и средний менеджмент" },
        { id: 5, title: "Добыча сырья" },
        { id: 6, title: "Домашний, обслуживающий персонал" },
        { id: 7, title: "Закупки" },
        { id: 8, title: "Информационные технологии" },
        { id: 9, title: "Искусство, развлечения, массмедиа" },
        { id: 10, title: "Маркетинг, реклама, PR" },
        { id: 11, title: "Медицина, фармацевтика" },
        { id: 12, title: "Наука, образование" },
        { id: 13, title: "Продажи, обслуживание клиентов" },
        { id: 14, title: "Производство, сервисное обслуживание" },
        { id: 15, title: "Рабочий персонал" },
        { id: 16, title: "Розничная торговля" },
        { id: 17, title: "Сельское хозяйство" },
        { id: 18, title: "Спортивные клубы, фитнес, салоны красоты" },
        { id: 19, title: "Стратегия, инвестиции, консалтинг" },
        { id: 20, title: "Страхование" },
        { id: 21, title: "Строительство, недвижимость" },
        { id: 22, title: "Транспорт, логистика, перевозки" },
        { id: 23, title: "Туризм, гостиницы, рестораны" },
        { id: 24, title: "Управление персоналом, тренинги" },
        { id: 25, title: "Финансы, бухгалтерия" },
        { id: 26, title: "Юристы" },
        { id: 27, title: "Другое" }
    ];
</script>

<template>
    <div class='gridder centered'>
        <!-- First raw -->
        <div class="element element-1">
           <a href="/vacancies"><h2>Работа по профессиям в Алматы</h2></a>
           <ul class="business-sector-list link-column">
                <li v-for="sector in sectorList" :key="sector.id" class="sector-item ">
                <a href="/">{{ sector.title }}</a>
                </li>
            </ul>
        </div>
        <div class="element element-2">
            <a href="/"><h2>Оставайтесь на связи</h2></a>
            <div class="flex-1-3-column">
                <a :href="dowload_links[0].url">
                    <img :src="dowload_images[0].src" class="download-image"/>
                </a>
                <div class="download-images-container">
                    <div v-for="id in 3" :key="id">
                        <a :href="dowload_links[id].url">
                            <img :src="dowload_images[id].src" class="download-image"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Second raw -->
        <div class="element element-3">
            <div class="column_box">
                <a href="/"><h2>Новости</h2></a>
                <ul class="image-column">
                    <li v-for="id in 4" :key="id" class="image-item">
                        <img :src="images[(id-1)].src" />
                        <a href="/">{{newsList[(id-1)].title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="element element-4">
            <div class="column_box">
                <a href="/"><h2>Статьи</h2></a>
                <ul class="image-column">
                    <li v-for="id in 4" :key="id" class="image-item">
                        <img :src="images[(id+3)].src" />
                        <a href="/">{{newsList[(id+3)].title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="element element-5">
            <div class="column_box">
                <a href="/"><h2>Работа по профессиям</h2></a>
                <ul class="link-column">
                    <li v-for="link in professionList" :key="link.id">
                        <a href="/">{{link.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="element element-6">
            <div class="column_box">
                <a href="/"><h2>Работа в других городах</h2></a>
                <ul class="link-column">
                    <li v-for="link in locationList" :key="link.id">
                        <a href="/">{{link.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Last raw -->
        <div class="element element-7">
            <h2>Работа в Казахстане</h2>
            <p>HeadHunter (hh.kz) — место, где работа найдётся всегда!<br><br></p>
            <p>Работа — важная часть жизни каждого из нас. Однако в жизни каждого человека наступает момент, когда он задумывается о смене работы, а может быть, даже и сферы деятельности. Увы, перемены — это не всегда легко, поэтому сомнения неизбежны.<br><br></p>
            <button class="link-button" v-if="!showAll" @click="showAllItems"><p>Показать полностью</p></button>
            <div v-if="showAll">
                <p> С чего начать поиск работы? Какая работа мне подойдет? Есть ли такие вакансии на рынке труда? Как правильно составить резюме? Ответить на все эти вопросы поможет сайт hh.kz, где ежедневно тысячи людей ищут и находят работу, а работодатели размещают вакансии.<br><br>
                Как лучше искать работу на hh.kz? Вы можете просматривать вакансии и откликаться на понравившиеся предложения. К услугам кандидатов обширный каталог профессиональных областей, где можно выбрать специальность. Достаточно всего лишь пару раз кликнуть мышкой, чтобы получить список актуальных и качественных предложений в выбранном регионе. Расширенные настройки поиска гарантируют, что интересующая вас работа будет найдена. Если вы уже определились, вакансии каких специальностей вам подходят, вам остаётся только создать привлекательное резюме и начинать поиск работы мечты! Создание резюме способствует тому, что вас заметят и пригласят на собеседование — работа не заставит себя ждать! Поэтому мы рекомендуем сочетать оба этих метода, чтобы найти работу.<br><br>
                Лучшие работодатели приходят на наш сайт, чтобы опубликовать свои вакансии и подобрать персонал. Почему? Потому что к их услугам многомиллионная база резюме специалистов разного уровня, выгодные предложения, помощь персональных менеджеров и многое другое. Кроме того, на hh.kz каждый пользователь может узнать самые последние данные о рынке труда, изучить свежий обзор зарплат и ознакомиться с различными исследованиями. Соискателям это помогает оценить свой потенциал, чтобы скорректировать поиск работы, а работодателям — определить, чего стоит ждать от кандидатов. Поиск работы и сотрудников с hh.kz — это быстро и удобно. Убедитесь в этом сами!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
    /* make component centered */
    /* .centered {
        margin: 0 15% 0 15%;
    } */

    h2 {
        font-size: 20px;
        padding-bottom: 8px;
    }

    .gridder {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto auto auto;
        gap: 10px;
        background-color: 0;
        margin-bottom: 50px !important;
    }

    .element-1 {
        grid-column: span 3;
        height: 300px;
    }

    .element-2 {
        grid-column: span 1;
    }

    .element-3, .element-4, .element-5, .element-6 {
        grid-column: span 1;
    }

    .element-7 {
        grid-column: span 4;
    }

    .element {
        padding: 20px;
    }

    a {
        color: inherit; 
        text-decoration: none; 
        font-size: 14px;
    }

    p {
        font-size: 14px;
    }

    * {
        margin: 0;
        padding: 0;
        text-align: left;
        font-family: sans-serif;
    }

    .business-sector-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0;
        gap: 4px;
        height: 100%;
    }

    .sector_item {
        text-wrap: wrap;
    }

    .flex-1-3-column {
        display: flex;
        flex-direction: row;
        gap: 10px
    }

    .download-images-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .download-image {
        width: 90px;
        height: auto;
    }

    .image-column {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
    }

    .link-column {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
    }

    img {
        width: 3rem;
        height: 3rem;
    }

    .image-column li {
        padding: 15px 0;
    }
    .link-column li {
        padding: 4px 0;
    }

    li {
        display: flex;
        flex-direction: raw;
    }

    li img {
        padding-right: 15px;
    }

    .link-button {
        background: none;     
        border: none;          
        color: blue;          
        text-decoration: underline;
        cursor: pointer;   
        padding-top: 10px;        
        font: inherit;         
    }

</style>