
// ---- CAROUSEL BUTTONS ----
// create svg carousel buttons
const createCarouselButtons = () => {

    const arrowLeft = 'M8.07664 15.923L1.15357 8.9999L8.07664 2.07682';
    const arrowRight = 'M1.92336 2.0769L8.84644 8.99998L1.92336 15.9231';

    const createArrow = (arrowType, divClass) => {
        const divBtn = document.querySelectorAll(divClass);
        divBtn.forEach((btn) => {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            const path = document.createElementNS(svg.namespaceURI, "path");
            path.setAttribute("d", arrowType);
            svg.appendChild(path);
            btn.appendChild(svg);
        })
    }
    createArrow(arrowRight, '.arrow-right');
    createArrow(arrowLeft, '.arrow-left');
}

export default createCarouselButtons;