let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerX, PlayerY
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;

        checkWinner();
    });
});


const disableBoxes = () => {
    for(let box of boxes ){
        box.disabled =true;
    }
}
const enableBoxes = () => {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner =(winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){

            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgcont.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
