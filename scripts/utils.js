export const createDOMElem = (tagName, className) => {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}

