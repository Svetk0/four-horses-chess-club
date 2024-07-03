import { createDOMElem } from "./utils.js";
import {
    DATA_PERSONS,
    TABLET_SIZE,
    DESKTOP_SIZE
}
    from "./constants.js";

// ---- CAROUSEL PARTICIPANTS ----
const pathImg = './images/participants/';

// Определяем сколько карточек показывать в зависимости от ширины экрана
const determineMediaScreen = () => {
    let numActiveSlides = 1;
    let windowInnerWidth = document.documentElement.clientWidth;

    if (windowInnerWidth < (TABLET_SIZE + 1)) {
        numActiveSlides = 1;
    }
    if (windowInnerWidth > TABLET_SIZE) {
        numActiveSlides = 2;
    }
    if (windowInnerWidth > DESKTOP_SIZE) {
        numActiveSlides = 3;
    }
    return numActiveSlides;
}
//Создаем карточку участника
const createPersonCard = (dataPersons, i) => {
    const divPerson = createDOMElem('div', 'person');
    const imgPerson = createDOMElem('img', 'person__img');
    const namePerson = createDOMElem('div', 'person__name');
    const ratingPerson = createDOMElem('div', 'person__rating');
    const button = createDOMElem('button', 'button-info');
    const link = createDOMElem('a', 'person__link');

    //values
    imgPerson.src = pathImg + dataPersons[i].img;
    namePerson.innerHTML = dataPersons[i].name;
    ratingPerson.innerHTML = dataPersons[i].rating;
    link.setAttribute('href', dataPersons[i].link);
    link.innerHTML = 'Подробнее';

    //order
    divPerson.appendChild(imgPerson);
    divPerson.appendChild(namePerson);
    divPerson.appendChild(ratingPerson);
    button.appendChild(link);
    divPerson.appendChild(button);

    return divPerson;
}

//Вставляем созданные карточки в DOM
const insertPersonCards = (num) => {
    const targetWrapper = document.querySelector('.participants__content');
    let i = 0;
    let cards = [];
    while (i < num) {
        cards[i] = createPersonCard(DATA_PERSONS, i);
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
const numShowedSlides = determineMediaScreen();
export const createSliderParticipants = () => {

    // START PROGRAM
    insertPersonCards(DATA_PERSONS.length);

    const arrowLeft = document.querySelector("#participants-btn-left");
    const arrowRight = document.querySelector("#participants-btn-right");
    const slides = document.querySelectorAll(".showed-person-wrapper");
    const pagination = document.querySelector("#pagination-participants");
    const counter = document.querySelector("#counter-participants");

    const counterIndex = createDOMElem('div', 'counter__index');
    const counterLength = createDOMElem('div', 'counter__length');

    let currentSlideIndex = 0;
    const paginationCircles = [];
    slides[currentSlideIndex].classList.add("showed-person-wrapper--active");

    createCounter();
    indicateCurrentSlide();
    addPagination();
    arrowLeft.addEventListener("click", previousSlide);
    arrowRight.addEventListener("click", nextSlide);
    setInterval(nextSlide, 4000);

    //------------------------- COUNTER --------------------
    function createCounter() {
        counter.appendChild(counterIndex);
        counter.appendChild(counterLength);
    }

    function indicateCurrentSlide() {
        counterIndex.textContent = ((currentSlideIndex + 1) * numShowedSlides);
        counterLength.textContent = '/' + (numShowedSlides * slides.length);
    }

//------------------------- PAGINATION --------------------
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

 //------------------------- SLIDER --------------------
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
}