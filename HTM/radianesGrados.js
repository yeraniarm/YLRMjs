function convert() {
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let d = (t * 180)/Math.PI;
    document.getElementById("out").innerHTML = d.toFixed(4) + " grados"
}
 function convert2(){
    let t = document.getElementById("valor").value
    t = parseFloat(t);
    let e = (t * Math.PI)/180;
    document.getElementById("out1").innerHTML = e.toFixed(4) + " radianes"
 }