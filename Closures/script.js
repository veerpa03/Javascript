const myName = document.getElementById('my-name');
const btn = document.getElementById('my-button');
// function makeTextsizer(size){
//     function changeSize(){
//         myName.style.fontSize = `${size}px`;
//     }

//     return changeSize;
// }

// const size12 = makeTextsizer(12);
// const size20 = makeTextsizer(20);
// const size52 = makeTextsizer(52);
// const size5 = makeTextsizer(5);
// const size70 = makeTextsizer(70);

// btn.addEventListener("click", size70 )

function makecounter(){
    let count =1;
    function increment(){
        console.log(count++);
    }

    return increment;
}


const counter1= makecounter();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();