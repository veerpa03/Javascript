function viraj(){
    console.log("My name is Viraj");
}
viraj();

//Arrow function
let a=5;
let b=5;
const arr  =( a,b) =>{
    console.log(a+b);
}
//forEach method in array

let array=[1,2,3,4,5];
// array.forEach(function printf(val){   //val is the value at each index
//     console.log(val);
// })

array.forEach((val)=>{
    console.log(val);
})


//Map

let num=[1,2,34,5];
let newa = num.map((val) => {
    return val;
    
})
console.log(newa);

//Filter

let no=[1,2,3,4];
let evenarr=no.filter((val) => {
    return val%2===0;
})
console.log(evenarr);


//reduce

const output = no.reduce((res,curr) =>{
    return res+curr;
})

console.log(output);