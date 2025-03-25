// console.log("Hello");
// window.console.log("Hello2");
// alert("Viraj");

// let hea=document.getElementById("heading");//h1
// console.dir(hea);
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

//Query Selector
// let element=document.querySelector("p");
// console.dir(element);
// let eal=document.querySelectorAll("p");
// console.dir(eal);


//TagName
//By .tagName

//innertext

// let div=document.querySelector("div");
// console.dir(div);

// let h2=document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText+" From Viraj Parmar";
// console.dir(h2.innerText);


let divs=document.querySelectorAll(".box");
let ind=1;
for(div of divs){
    div.innerText= `Unique ${ind}`;
    ind++;
}
