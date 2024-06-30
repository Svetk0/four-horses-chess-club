export const createDOMElem = (tagName, className) => {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}

// export const determineMediaScreen = () => {
//     let numActiveSlides = 1;
//     let windowInnerWidth = document.documentElement.clientWidth;

//     console.log('windowInnerWidth', windowInnerWidth);
//     if (windowInnerWidth < 701) {
//         numActiveSlides = 1;
//     }
//     if (windowInnerWidth > 700) {
//         numActiveSlides = 2;
//     }
//     if (windowInnerWidth > 1200) {
//         numActiveSlides = 3;
//     }
//     return numActiveSlides;
// }

export const updateScreenWidth = () => { 
    console.log('currentWidth', document.documentElement.clientWidth);
    return document.documentElement.clientWidth;
}
