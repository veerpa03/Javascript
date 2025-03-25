// let a=5;
// let b=2;
// console.log(a%b);
//Unary operator
let a=5;
let b="5";
// console.log("a = ", a, " & b = ",b);

// console.log("a++ = ",a++);
// console.log("a = ",a);
// a**=4;
// console.log(a);


//console.log(a===b);

let age= 1;
if (age>=18)
{
    console.log("You can vote");
}
if (age<18)
{
    console.log("You can't vote");
}


let result=age>=18 ? "adult":"not adult";
console.log(result);
const expr = 'Papaya';
switch (expr){
    case 'Oranges':
        console.log('Oranges are $');
        break;
    case 'Mangoes':
        console.log('Mangoes are $');
        break;
    case 'Papaya':
        console.log('Papaya are $');
        break;
    Default:
        console.log("bYE");
}