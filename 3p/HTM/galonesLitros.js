function convert() {
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let d = t * 3.785;
    document.getElementById("out").innerHTML = d.toFixed(2) + " litros"
}
 function convert2(){
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let e = t / 3.785;
    document.getElementById("out1").innerHTML = e.toFixed(2) + " galones"
 }