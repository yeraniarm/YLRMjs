const myArray = [22,9,60,12,4,56];
const div = (x,y) => x/y;
let myDiv = myArray.reduce(div,1);
console.log(myDiv);