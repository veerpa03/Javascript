let marks =[79, 67, 35, 76, 88];
console.log(marks);
console.log(marks.length);//length is property as it will give us the a value whille a method will do some function.

for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]);
    
}


for(let num of marks){
    console.log(num);
}

marks.push(1);
console.log(marks);
marks.pop();
console.log(marks);
marks.toString();
console.log(marks);