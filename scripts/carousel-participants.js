import { createDOMElem, determineMediaScreen} from "./utils.js";
// ---- CAROUSEL PARTICIPANTS ----

const pathImg = './images/participants/';
const dataPersons = [
    {
        name: "Хозе-Рауль Капабланка",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
    },
    {
        name: "Эммануил Ласкер",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
    },
    {
        name: "Александр Алехин",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
    },
    {
        name: "Арон Нимцович",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
    },
    {
        name: "Рихард Рети",
        rating: "Чемпион мира по шахматам",
        img: "person-bg.png",
    },
    {
        name: "Остап Бендер",
        rating: "Гроссмейстер",
        img: "person-bg.png",
    },
];


//Создаем карточку участника
const createPersonCard = (i) => {
    const divPerson = createDOMElem('div', 'person');
    const imgPerson = createDOMElem('img', 'person__img');
    const namePerson = createDOMElem('div', 'person__name');
    const ratingPerson = createDOMElem('div', 'person__rating');
    const button = createDOMElem('button', 'button-info');

    //values
    imgPerson.src = pathImg + dataPersons[i].img;
    namePerson.innerHTML = dataPersons[i].name;
    ratingPerson.innerHTML = dataPersons[i].rating;
    button.innerHTML = 'Подробнее';

    //order
    divPerson.appendChild(imgPerson);
    divPerson.appendChild(namePerson);
    divPerson.appendChild(ratingPerson);
    divPerson.appendChild(button);

    return divPerson;
}

//Вставляем созданные карточки в DOM
const insertPersonCards = (num) => {
    let numShowedSlides = determineMediaScreen();
    const targetWrapper = document.querySelector('.participants__content');
    let i = 0;
    let cards = [];
    while (i < num) {
        cards[i] = createPersonCard(i);
        cards.push(cards[i]);
        i++;
    }
    let attempt = num / numShowedSlides;
    let k = 0;
    let arrShowedSlides = [];

    while (k < attempt) {
        const divInner = createDOMElem('div', 'showed-person-wrapper');
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
    // CREATE SLIDER PARTICIPANTS
export const createSliderParticipants = () => {
    insertPersonCards(dataPersons.length);
        const slider = document.getElementById("slider");
        const arrowLeft = document.querySelector(".arrow-left");
        const arrowRight = document.querySelector(".arrow-right");
        const slides = document.querySelectorAll(".showed-person-wrapper");
        const pagination = document.getElementById("pagination");
        const counter = document.querySelector("#counter");
        const counterIndex = createDOMElem('div', 'counter__index');
        const counterLength = createDOMElem('div', 'counter__length');
        createCounter();
        let currentSlideIndex = 0;
       
        const paginationCircles = [];
        slides[currentSlideIndex].classList.add("showed-person-wrapper--active");
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
            paginationCircles[0].classList.add("pagination--active");
            paginationCircles.forEach((circle, index) => {
                circle.addEventListener("click", () => changeSlide(index));
            });
        }

        function addActiveClass() {
            paginationCircles[currentSlideIndex].classList.add("pagination--active");
            slides[currentSlideIndex].classList.add("showed-person-wrapper--active");
        }

        function removeActiveClass() {
            paginationCircles[currentSlideIndex].classList.remove("pagination--active");
            slides[currentSlideIndex].classList.remove("showed-person-wrapper--active");
        }

        function changeSlide(slideIndex) {
            removeActiveClass();
            currentSlideIndex = slideIndex;
            addActiveClass();
            indicateCurrentSlide();
        }

        function nextSlide() {
            let newSlideIndex = currentSlideIndex + 1;
            if (newSlideIndex > slides.length - 1) {
                newSlideIndex = 0;
            }
            changeSlide(newSlideIndex);
        }

        function previousSlide() {
            let newSlideIndex = currentSlideIndex - 1;
            if (newSlideIndex < 0) {
                newSlideIndex = slides.length - 1;
            }
            changeSlide(newSlideIndex);
        }

        addPagination();
        arrowLeft.addEventListener("click", previousSlide);
        arrowRight.addEventListener("click", nextSlide);
        setInterval(nextSlide, 4000);
    }