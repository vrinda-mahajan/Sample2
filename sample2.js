var text = document.querySelector(".input");
var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");
var output = document.querySelector(".output")
function increaseFont(){
    output.innerText=text.value;
    style=window.getComputedStyle(output,null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    output.style.fontSize=(currentSize+2)+"px";
}
function decreaseFont(){
    output.innerText=text.value;
    style=window.getComputedStyle(output,null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    output.style.fontSize=(currentSize-2)+"px";
}
inc.addEventListener("click",increaseFont);
dec.addEventListener("click",decreaseFont);