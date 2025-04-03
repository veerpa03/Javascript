// function x(){
//     var i=1;
//     setTimeout(function (){
//         console.log(i);
//     },3000);
//     console.log("Namaste Javascript");
// }
// x();



// function print(){
//     var i=1;
//     setTimeout(console.log(i),1000);
//     setTimeout(console.log(i++),1000);
//     setTimeout(console.log(i++),1000);
// }
// print();

function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer();