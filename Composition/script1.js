//Q1
// function compose (fn1, fn2){
//     return function (x){
//         return fn1(fn2(x));    //old format
//     }
// }

// const result = (fn1, fn2) => (x) => fn1(fn2(x)); // es6 format

//Q2

// const increment  = (x) => x+1;

// const double = (x) => x*2;

// const answer = (increment, double) => (x) => increment(double(x));
// const answer2 = answer(increment, double);

// console.log(answer2(10));


//Q3 

// const add1 = (x) => x+1;
// const times2 = (x) => x*2;
// const minus3 = (x) => x-3;

// const result = (add1, times2, minus3) => (x) => add1(times2(minus3(x)));

// const result2 = result(add1, times2, minus3);
// console.log(result2(5));


//Q4

const trim = (str) => str.trim();
const shout = (str) => str.toUpperCase() + '!';

const result = (trim, shout) =>(str) => trim(shout(str));

const result2= result(shout, trim);

console.log(result2(" hello "));