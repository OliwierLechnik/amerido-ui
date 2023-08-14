let prevId = 1;
function focusMe(i) {
    var element = document.getElementById("picked-bg");
    var currentLeft = element.offsetLeft;
    var newLeft = (i) * (screen.width * 0.34);

    var cards = document.getElementsByClassName("content");
    console.log(prevId);
    console.log(i);
    for(let j = 0; j<2; j++){
        if(j>i){
            cards[j].style.left = `-${screen.width}px`;
            cards[j].style.transition = `left 0s ease`;
        }
        if(j<i){
            cards[j].style.left = `${screen.width}px`;
            cards[j].style.transition = `left 0s ease`;
        }
    }
    if(prevId > i){
        cards[prevId].style.left = `-${screen.width}px`;
        cards[prevId].style.transition = `left 0.2s ease`;
        cards[i].style.left = 0;
        cards[i].style.transition = `left 0.2s ease`;
    }
    if(prevId < i){
        cards[prevId].style.left = `${screen.width}px`;
        cards[prevId].style.transition = `left 0.2s ease`;
        cards[i].style.left = 0;
        cards[i].style.transition = `left 0.2s ease`;
    }
;
  
    element.style.transition = `left 0.33s ease`;
    element.style.left = `${newLeft}px`;
    prevId = i;

}