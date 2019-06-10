var careful = 3.1
careful //3.1
careful = 1.3
careful //1.3
var careful = null
careful //null

let price = 120.25
price //120.25
let price = 20.125 //SyntaxError
price -
price = 20
price //20

const tax = 0.825
tax //0.825
const tax = 0.825 //SyntaxError
tax = 1.25 //SyntaxError

const sam = {first: "Sam", age: 2}
typeof sam //object
sam //{first: "Sam", age: 2}

const greet = 'dude'
typeof greet //string
greet [0] = 'r' //string are immutable

const pearl = Object.freeze({first: 'pearl', age: 1 })
const pearl = {} //SyntaxError
pearl.age = 3 //3 (no se queja pero no lo guarda)
pearl //{first: "pearl", age: 1}





