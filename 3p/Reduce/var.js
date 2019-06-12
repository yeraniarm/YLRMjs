const myArray = [5,5,8,12,15,18];
let prom;
let resta;
let result;
let suma;
let sumatoria;
let nuevoArray = [];

const sum = (x,y) => x+y;

prom = myArray.reduce(sum,0)/myArray.length;

for(let i = 0; i < myArray.length; i++){
    resta = myArray[i]-prom;
    result = resta*resta;
    nuevoArray.push(result);
}

sumatoria = nuevoArray.reduce(sum,0)/myArray.length; 
console.log(Math.sqrt(sumatoria));
console.log(sumatoria);
