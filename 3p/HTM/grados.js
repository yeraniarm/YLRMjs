function convert() {
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let d = t - 273.15;
    document.getElementById("out").innerHTML = d.toFixed(2) + " °C"
}
 function convert2(){
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let e = t + 273.15;
    document.getElementById("out1").innerHTML = e + " °K"
 }