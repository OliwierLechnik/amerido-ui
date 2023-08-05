var counter = 0;
function toggleDarkMode(){
    counter+=1;
    var toSet = "light";
    if(counter%2==1){
        toSet = "dark";
    }
    let htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', toSet);
}