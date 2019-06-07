function generaRandomDec(){
    var r = Math.random().toFixed(5);
    for(let i=1; i < 10; i++){
        var a = Math.random().toFixed(5);
        r = a + "\n" + r;
        document.getElementById("random").innerHTML = r;
    }
}