function convert() {
    let t = document.getElementById("valor").value
    let d = t * 1.1133;
    document.getElementById("out").innerHTML = d.toFixed(2) + " dolares"
}
 function convert2(){
    let t = document.getElementById("valor").value
    let e = t * 0.89815;
    document.getElementById("out1").innerHTML = e.toFixed(2) + " euros"
 }