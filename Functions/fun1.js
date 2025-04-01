function sayHello () {
    console.log("sayHello");
}
sayHello()

function add(a,b) {
    console.log(a+b);
}

add(1,2 )

function mul(a,b) {
    // console.log(a*b); this is bad practice as we might need the value in future to use it.
    return a*b
}

let a = mul(1,2 )

console.log(a)

 //unlimited arguments accept

function addNum() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i];
    }
    return ans;
}

let result = addNum(1, 2, 3, 4, 5);
console.log(result); 


//spread opeator

function addNumv2(...viraj) {
    let ans = 0;
    for (let i = 0; i < viraj.length; i++) {
        ans = ans + viraj[i];
    }
    return ans;
}

let resultv2 = addNum(1, 2, 3, 4, 55);
console.log(resultv2); // Expected output: 15