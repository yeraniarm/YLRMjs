function convert() {
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let d = t / 1.609;
    document.getElementById("out").innerHTML = d.toFixed(2) + " millas"
}
 function convert2(){
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let e = t * 1.609;
    document.getElementById("out1").innerHTML = e.toFixed(2) + " km"
 }