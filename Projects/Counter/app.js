const Decrease = document.getElementById("decrease");
const Reset = document.getElementById("reset");
const Increase = document.getElementById("increase");
const Num = document.querySelector('.number');


Decrease.addEventListener('click', function(){
    Num.textContent = Number(Num.textContent) - 1;
    if(Number(Num.textContent) < 0){
        Num.style.color = 'red';
    }
    else if(Number(Num.textContent) > 0){
        Num.style.color = 'green';
    }
    else{
        Num.style.color = 'black';
    }
});

Reset.addEventListener('click', function(){
    Num.textContent = 0;
    Num.style.color = 'black';

});

Increase.addEventListener('click', function(){
    Num.textContent = Number(Num.textContent)  + 1;
    if(Number(Num.textContent) > 0){
        Num.style.color = 'green';
    }
    else if(Number(Num.textContent) < 0){
        Num.style.color = 'red';
    }
    else{
        Num.style.color = 'black';
    }
});