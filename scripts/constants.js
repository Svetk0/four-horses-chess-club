// Screen Sizes
export const MOBILE_SIZE = 375;
export const TABLET_SIZE = 700;
export const DESKTOP_SIZE = 1262;

// Participants Block
export const DATA_PERSONS = [
    {
        name: "Хозе-Рауль Капабланка",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
        link:"#slider-participants",
    },
    {
        name: "Эммануил Ласкер",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
        link:"#slider-participants",
    },
    {
        name: "Александр Алехин",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
        link:"#slider-participants",
    },
    {
        name: "Арон Нимцович",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
        link:"#slider-participants",
    },
    {
        name: "Рихард Рети",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
        link:"#slider-participants",
    },
    {
        name: "Остап Бендер",
        rating: "Гроссмейстер",
        img: "person-bg.png",
        link:"#slider-participants",
    },
];
export const SET_PAGINATION_PARTICIPANTS = false;
export const SET_COUNTER_PARTICIPANTS = true;

// Stages Block
export const DATA_STAGES = [
    [
        {
            content: "Хозе-Строительство железнодорожной магистрали Москва-Васюки Капабланка",
            order: "1",
            combine: true,
            [Symbol.isConcatSpreadable]: true,
        },
        {
            content: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
            order: "2",
            combine: true,
        }
    ],
    [
        {
        content: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
        order: "3",
        combine: false,
        }
    ],

    [
        {
            content: "Строительство дворца для турнира",
            order: "4",
            combine: true,
        },
        {
            content: "Размещение гаражей для гостевого автотранспорта",
            order: "5",
            combine: true,
        }
    ],
    [
        {
        content: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
        order: "6",
        combine: false,
        }
    ],
    [
        {
        content: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
        order: "7",
        combine: false,
        }
    ],
];
export const SET_PAGINATION_STAGES = true;
export const SET_COUNTER_STAGES = false;


