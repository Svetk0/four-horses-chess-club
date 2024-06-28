const joinText = () => { 
    const windowInnerWidth = document.documentElement.clientWidth;
    if (windowInnerWidth > 1261) {
        const h3 = document.querySelectorAll('.overall-info__h3');
    console.log('h3', h3);
    h3[0].innerHTML = h3[0].innerHTML + h3[1].innerHTML;
        h3[1].innerHTML = '';
    }
    else return
   
}

export default joinText;