import { createDOMElem } from "./utils.js";
// ---- CAROUSEL STAGES ----

const dataStages = [
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

    {
        content: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
        order: "3",
        combine: false,
    },
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
    {
        content: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
        order: "6",
        combine: false,
    },
    {
        content: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
        order: "7",
        combine: false,
    },
];

let dataStagesDesktop = dataStages.reduce((card, current) =>
    card.concat(current), []
);

//Создаем карточку этапа
console.log('dataStages', dataStages, dataStagesDesktop);

const createStageCardDesktop = (i) => {
    const divInner = createDOMElem('div', 'showed-stages-wrapper');
    const divStage = createDOMElem('div', 'stage-card');
    const contentStage = createDOMElem('div', 'stage-card__content');
    const orderStage = createDOMElem('div', 'stage-card__order');

    //values
    contentStage.innerHTML = dataStagesDesktop[i].content;
    orderStage.innerHTML = dataStagesDesktop[i].order;

    //order
    divStage.appendChild(orderStage);
    divStage.appendChild(contentStage);
    divInner.appendChild(divStage);

    return divInner;
}

//Вставляем созданные карточки в DOM
const insertStageCards = (data, func) => {
    let i = 0;
    const targetWrapper = document.getElementById("slider-stages");
    while (i < data.length) {
        targetWrapper.appendChild(func(i));
        i++;
    }
}



// CREATE SLIDER STAGES
export const createSliderStages = () => {
    insertStageCards(dataStagesDesktop,createStageCardDesktop);

    const slider = document.getElementById("slider-stages");
    const arrowLeft = document.querySelector("#stages-btn-left");
    const arrowRight = document.querySelector("#stages-btn-right");
    const slides = document.querySelectorAll(".showed-stages-wrapper");
    const pagination = document.getElementById("pagination-stages");
    const counter = document.querySelector("#counter-stages");
    const counterIndex = createDOMElem('div', 'counter__index');
    const counterLength = createDOMElem('div', 'counter__length');
    createCounter();
    let currentSlideIndex = 0;

    const paginationCircles = [];
    const sliderWidth = slider.clientWidth;

    slides[currentSlideIndex].classList.add("showed-stages-wrapper--active");
    arrowLeft.setAttribute('disabled', '');
    indicateCurrentSlide();
    addPagination();
    arrowLeft.addEventListener("click", previousSlide);
    arrowRight.addEventListener("click", nextSlide);

    //------------------------- COUNTER --------------------
    function createCounter() {
        counter.appendChild(counterIndex);
        counter.appendChild(counterLength);
    }

    function indicateCurrentSlide() {
        counterIndex.textContent = (currentSlideIndex + 1);
        counterLength.textContent = '/' + slides.length;
    }

    //------------------------- PAGINATION --------------------
    function createPaginationCircle() {
        const div = createDOMElem('div', 'pagination__circle');
        pagination.appendChild(div);
        paginationCircles.push(div);
    }

    function addPagination() {
        slides.forEach(createPaginationCircle);
        paginationCircles[0].classList.add("stages__pagination--active");
        paginationCircles.forEach((circle, index) => {
            circle.addEventListener("click", () => changeSlide(index));
        });
    }

    //------------------------- SLIDER --------------------
    function addActiveClass() {
        paginationCircles[currentSlideIndex].classList.add("stages__pagination--active");
        slides[currentSlideIndex].classList.add("showed-stages-wrapper--active");
    }

    function removeActiveClass() {
        paginationCircles[currentSlideIndex].classList.remove("stages__pagination--active");
        slides[currentSlideIndex].classList.remove("showed-stages-wrapper--active");
    }

    function showSlide() {
        console.log('sliderWidth', sliderWidth);
        slider.style.transform = `translateX(-${currentSlideIndex * (sliderWidth + 20)}px)`;
    }

    function changeSlide(slideIndex) {
        removeActiveClass();
        currentSlideIndex = slideIndex;
        addActiveClass();
        indicateCurrentSlide();
        showSlide();
    }

    function nextSlide() {
        arrowLeft.removeAttribute('disabled');
        let newSlideIndex = currentSlideIndex + 1;
        if (newSlideIndex > slides.length - 2) {
            arrowRight.setAttribute('disabled', '');
        }
        if (newSlideIndex > slides.length - 1) {
            newSlideIndex = 0;
        }
        changeSlide(newSlideIndex);
    }

    function previousSlide() {
        arrowRight.removeAttribute('disabled');
        let newSlideIndex = currentSlideIndex - 1;
        if (newSlideIndex < 1) {
            arrowLeft.setAttribute('disabled', '');
        }
        if (newSlideIndex < 0) {
            newSlideIndex = slides.length - 1;
        }
        changeSlide(newSlideIndex);
    }
}