import { DESKTOP_SIZE } from "./constants.js";
const joinText = () => {
    const windowInnerWidth = document.documentElement.clientWidth;
    if (windowInnerWidth > (DESKTOP_SIZE-1)) {
        const h3 = document.querySelectorAll('.overall-info__h3');
        h3[0].innerHTML = h3[0].innerHTML + h3[1].innerHTML;
        h3[1].innerHTML = '';
    }
    else return
}

export default joinText;