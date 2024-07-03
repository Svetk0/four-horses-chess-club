import {
    SET_PAGINATION_PARTICIPANTS, SET_COUNTER_PARTICIPANTS,
    SET_PAGINATION_STAGES,
    SET_COUNTER_STAGES
} from './constants.js';

export const createDOMElem = (tagName, className) => {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}

export const carouselSettings = () => {
    const types = ['stages', 'participants'];
    types.forEach((type) => { 
        const pagination = document.querySelector(`#pagination-${type}`);
        const counter = document.querySelector(`#counter-${type}`);
    
        switch (type) {
            case 'stages':
                SET_PAGINATION_STAGES
                ? pagination.style.display = 'flex'
                : pagination.style.display = 'none'
    
                SET_COUNTER_STAGES
                    ? counter.style.display = 'flex'
                    : counter.style.display = 'none'
                break;
            
                case 'participants':
                SET_PAGINATION_PARTICIPANTS
                ? pagination.style.display = 'flex'
                : pagination.style.display = 'none'
    
                SET_COUNTER_PARTICIPANTS
                    ? counter.style.display = 'flex'
                    : counter.style.display = 'none'
                break;
        }
    })
}
