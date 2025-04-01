//Higher order functions and callback

function add(a,b, cb) {
    let result = a+b;
    cb(result);

    return () => console.log(result);
}

let resultfun = add (2,4,() => {});
resultfun(); 

