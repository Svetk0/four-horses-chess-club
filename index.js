// ---- RUNNING LINE -----
const activateRunningBlock = () => {
    const text =  'Дело помощи утопающим — дело рук самих утопающих! &middot Шахматы двигают вперед не только культуру, но и экономику! &middot Лед тронулся, господа присяжные заседатели!';
    const runningBlock = document.querySelector('#running-text');
    runningBlock.innerHTML = text;
};

// ---- CAROUSEL BUTTONS ----
// create svg carousel buttons
const createCarouselButtons = () => { 
    
    const arrowLeft = 'M8.07664 15.923L1.15357 8.9999L8.07664 2.07682';
    const arrowRight = 'M1.92336 2.0769L8.84644 8.99998L1.92336 15.9231';

    const createArrow = (arrowType, divClass) => { 
        console.log('create svg '+divClass);
        const divBtn = document.querySelector(divClass);
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const path = document.createElementNS(svg.namespaceURI, "path");
        path.setAttribute("d", arrowType);
        svg.appendChild(path);
        divBtn.appendChild(svg);
    }
    createArrow(arrowRight, '.arrow-right');
    createArrow(arrowLeft,'.arrow-left');
}

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

const createDOMElem = (tagName, className) => { 
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}

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

const insertPersonCards = (num) => { 
    const targetWrapper = document.querySelector('.participants__content');
    let i = 0;
    let cards = [];
    while (i < num) { 
        cards[i] = createPersonCard(i);
        cards.push(cards[i]);
        targetWrapper.appendChild(cards[i]);
        i++;
      }
    // const card1 = createPersonCard(i);
    // targetWrapper.appendChild(card1);
}


// ------ START INITIALIZING ------
activateRunningBlock();
createCarouselButtons();
insertPersonCards(dataPersons.length);


