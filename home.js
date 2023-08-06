function focusMe(i) {
    var element = document.getElementById("picked-bg");
    var currentLeft = element.offsetLeft;
    var newLeft = (i) * (screen.width * 0.34);

    var cards = document.getElementsByClassName("content");
    Array.from(cards).forEach(card => {
        var idstr = card.id;
        var id = parseInt(idstr.charAt(idstr.length - 1));
        card.style.transition = `left 0.33s ease`;
        if(i == id){
            card.style.left = '0px';
        }
        if( i < id) {
            card.style.left = `-${screen.width*1.5}px`;
        }
        if( i > id) {
            card.style.left = `${screen.width*1.5}px`;
        }

    });
  
    element.style.transition = `left 0.33s ease`;
    element.style.left = `${newLeft}px`;


}