import { createDOMElem } from "./utils.js";
// ---- CAROUSEL STAGES ----

const dataStages = [
    {
        content: "Хозе-Строительство железнодорожной магистрали Москва-Васюки Капабланка",
        order: "1",
    },
    {
        content: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
        order: "2",
    },
    {
        content: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
        order: "3",
    },
    {
        content: "Строительство дворца для турнира",
        order: "4",
    },
    {
        content: "Размещение гаражей для гостевого автотранспорта",
        order: "5",
    },
    {
        content: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
        order: "6",
    },
    {
        content: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
        order: "7",
    },
];
export const determineMediaScreen = () => {
    let numActiveSlides = 1;
    let windowInnerWidth = document.documentElement.clientWidth;

    console.log('windowInnerWidth', windowInnerWidth);
    if (windowInnerWidth < 701) {
        numActiveSlides = 2;
    }
    if (windowInnerWidth > 700) {
        numActiveSlides = 1;
    }

    return numActiveSlides;
}
const determineStagesNumInBlock = () => {
    const elem = document.querySelector('.stage');
    let numActiveSlides = 1;
    let heightBlock = elem.getAttribute('height');

    console.log('heightBlock', heightBlock);
    if (heightBlock < 701) {
        numActiveSlides = 1;
    }
    if (heightBlock > 700) {
        numActiveSlides = 2;
    }
    if (heightBlock > 1200) {
        numActiveSlides = 3;
    }
    return numActiveSlides;
}

//Создаем карточку этапа
const createStageCard = (i) => {
    const divStage = createDOMElem('div', 'stage');
    const contentStage = createDOMElem('div', 'stage__content');
    const orderStage = createDOMElem('div', 'stage__order');

    //values
    contentStage.innerHTML = dataStages[i].content;
    orderStage.innerHTML = dataStages[i].order;

    //order
    divStage.appendChild(orderStage);
    divStage.appendChild(contentStage);

    return divStage;
}

//Вставляем созданные карточки в DOM
const insertStageCards = (num) => {
    //let numShowedSlides = determineMediaScreen();
    let arrShowedSlides = [];
    const targetWrapper = document.querySelector('.stages__content');
    let i = 0;
    let cards = [];
    while (i < num) {
        cards[i] = createStageCard(i);
        const divInner = createDOMElem('div', 'showed-stages-wrapper');
        divInner.appendChild(cards[i]);
        cards.push(cards[i]);
        i++;
        //arrShowedSlides.push(divInner);
        targetWrapper.appendChild(divInner);
    }
}

const groupStages = () => { 
    window.addEventListener("load", () => {
        // Fully loaded!
        const element = document.querySelector('.stage');
    console.log('allCards', element.clientHeight);
    //const element = parseFloat( getComputedStyle( element ).height ); 
    const height = parseFloat( getComputedStyle( element ).height ); 
    
    console.log('height', height);
    });
    
}
// let attempt = num / numShowedSlides;
// let k = 0;
// let arrShowedSlides = [];

// while (k < attempt) {
//     const divInner = createDOMElem('div', 'showed-stages-wrapper');
//     let j = 0;
//     while (j < numShowedSlides) {
//         cards[j].getAttribute('height');
//         divInner.appendChild(cards[j]);
//         j++;
//     }
//     arrShowedSlides.push(divInner);
//     targetWrapper.appendChild(arrShowedSlides[k]);
//     cards.splice(0, numShowedSlides);
//     k++;
// }


// CREATE SLIDER STAGES
export const createSliderStages = () => {
    insertStageCards(dataStages.length);
    groupStages();
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
        slider.style.transform = `translateX(-${currentSlideIndex * (sliderWidth+20)}px)`;
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