import { createDOMElem, determineMediaScreen} from "./utils.js";
// ---- CAROUSEL STAGES ----

const pathImg = './images/participants/';
const dataStages= [
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
    let numShowedSlides = determineMediaScreen();
    const targetWrapper = document.querySelector('.stages__content');
    let i = 0;
    let cards = [];
    while (i < num) {
        cards[i] = createStageCard(i);
        cards.push(cards[i]);
        i++;
    }
    let attempt = num / numShowedSlides;
    let k = 0;
    let arrShowedSlides = [];

    while (k < attempt) {
        const divInner = createDOMElem('div', 'showed-stages-wrapper');
        let j = 0;
        while (j < numShowedSlides) {
            divInner.appendChild(cards[j]);
            j++;
        }
        arrShowedSlides.push(divInner);
        targetWrapper.appendChild(arrShowedSlides[k]);
        cards.splice(0, numShowedSlides);
        k++;
    }
}

  // CREATE SLIDER STAGES
export const createSliderStages = () => {
    insertStageCards(dataStages.length);
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
    slides[currentSlideIndex].classList.add("showed-stages-wrapper--active");
    arrowLeft.setAttribute('disabled', '');
        indicateCurrentSlide();

        function createCounter() {
            counter.appendChild(counterIndex);
            counter.appendChild(counterLength);
        }

        function indicateCurrentSlide() {
            counterIndex.textContent = (currentSlideIndex + 1);
            counterLength.textContent = '/' + slides.length;
        }

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

        function addActiveClass() {
            paginationCircles[currentSlideIndex].classList.add("stages__pagination--active");
            slides[currentSlideIndex].classList.add("showed-stages-wrapper--active");
        }

        function removeActiveClass() {
            paginationCircles[currentSlideIndex].classList.remove("stages__pagination--active");
            slides[currentSlideIndex].classList.remove("showed-stages-wrapper--active");
        }

        function changeSlide(slideIndex) {
            removeActiveClass();
            currentSlideIndex = slideIndex;
            addActiveClass();
            indicateCurrentSlide();
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

        addPagination();
        arrowLeft.addEventListener("click", previousSlide);
        arrowRight.addEventListener("click", nextSlide);
    }