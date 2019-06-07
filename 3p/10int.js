function generaRandom(){
    var r = Math.round(Math.random());
    for(let i=1; i < 10; i++){
        var a = Math.floor(Math.random()*i);
        r = a + "\n" + r;
        document.getElementById("myText").innerHTML = r;
    }
}