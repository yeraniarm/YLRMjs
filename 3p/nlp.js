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

