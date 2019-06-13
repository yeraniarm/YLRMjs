function iText(){
    document.getElementById("parrafo").innerHTML = "Insertar texto aqui";
}

function numCar(){
    let r = document.getElementById("parrafo").value;
    document.getElementById("resCaract").innerHTML = r.length;
}

function numPal(){
    let r = document.getElementById("parrafo").value;
    let palabras = r.split(" ");
   document.getElementById("resPal").innerHTML = palabras.length;
}
function numSen(){
    let r = document.getElementById("parrafo").value;
    let palabras = r.split(".");
    document.getElementById("resSen").innerHTML = palabras.length;
}
function numPar(){
    let r = document.getElementById("parrafo").value;
    let palabras = r.split("\n"+"\n");
   document.getElementById("resPar").innerHTML = palabras.length;
}
