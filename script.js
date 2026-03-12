let index = 0;

function show(){

let slides = document.getElementById("slides");

slides.style.transform =
"translateX(" + (-900 * index) + "px)";

}

function next(){

index++;

if(index > 2) index = 0;

show();

}

function prev(){

index--;

if(index < 0) index = 2;

show();

}

function go(i){

index = i;

show();

}