import {
    Fraction
} from "./fraction.js";

function convert() {
let f1 = new Fraction(parseInt(document.getElementById("n1").value), parseInt(document.getElementById("d1").value));
let f2 = new Fraction(parseInt(document.getElementById("n2").value), parseInt(document.getElementById("d2").value));
let newF;
    switch (document.getElementById("select").value) {
        case "+":
            newF = f1.sum(f2);
            break;
        case "-":
            newF = f1.subt(f2);
            break;
        case "x":
            newF = f1.mul(f2);
            break;
        case "/":
            newF = f1.div(f2);
            break;

    }
    document.getElementById("out").value = newF.n;
    document.getElementById("out1").value = newF.d;
}
document.getElementById("igual").onclick = convert;