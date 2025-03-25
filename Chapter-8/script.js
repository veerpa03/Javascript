// let btn1=document.querySelector("#btn1");
// // btn1.onclick = (evt) =>{
// //     console.log(evt);               
// //     console.log(evt.type);               
// //     console.log(evt.target);               
// //     console.log(evt.clientX, evt.clientY);               
// // }

// btn1.addEventListener("click", (evt)=>{
//     console.log("button 1 was clicked");
//     console.log(evt);

// })
// btn1.addEventListener("click", ()=>{
//     console.log("button 1 was clicked - handler 2");
// })

// let div=document.querySelector("div");
// // div.onmouseover = () => {
// //     console.log("This is div");
// // }

let modebtn=document.querySelector("#mode");
let currmode="light";
modebtn.addEventListener("click", (evt)=>{
    let body=document.querySelector("body");
    if(currmode==="light")
    {
        currmode="dark";
        body.style.backgroundColor="black";
    }
    else
    {
        currmode="light";
        body.style.backgroundColor="white";
    }
})