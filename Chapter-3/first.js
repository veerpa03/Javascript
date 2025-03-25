// for (let index = 0; index < 4; index++) {
//     console.log("Viraj");
// }

//for of loop
// let str="Viraj";

// let lenght=0;
// for(let i of str){
//     lenght++;
// }
// console.log(lenght);

//for in loop

// let student = {
//     name: "Viraj",
//     age: 20,
//     gpa: 3.5,
//     ispass: true
// };

// for( let i in student){
//     console.log(student[i]);
// }

//STRINGS

let str="Viraj";
console.log(str);

//Template Literals (this is a special string)

let sentence=`This is a template`;

console.log(sentence);
console.log(typeof sentence);

//Why template literlas are imp
let obj ={
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


let str2 = "Viraj\nParmar";
console.log(str2.length)

let str3="    Viraj Parmar     ";
str3.toUpperCase();
console.log(str3.trim());//this remove form start and last 