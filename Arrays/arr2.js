const students = ["Viraj", "Dhruv", "Daksh", "Drishti"];

let newarr =[];
const numbers = [1,2,3,4,5,6,7];

numbers.forEach((num) => newarr.push(num*2));
console.log(newarr);


function double(n){
    return n*2;
}
let newa=numbers.map(double);
console.log(newa);


let answer = numbers.find((num) => num===4);
console.log(answer);
let ans = numbers.findIndex((num) => num===4);
console.log(ans);


// SLICE AND SPLICE ARE MORE FUNCTION OF ARRAYS.

