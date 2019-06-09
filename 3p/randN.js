function generaRandom(){
    var n = document.getElementById("n").value;
    n = parseFloat(n);
    var myArray = [];
    for(var i=0; i < n; i++){
        var a = Math.floor(Math.random()*10);
        myArray.push(a);
    }
    const sum = (x,y) => x+y;
    const avg = myArray => myArray.reduce(sum,0) /myArray.length;
    document.getElementById("myText").innerHTML = myArray.join();
    document.getElementById("menor").innerHTML= ("Menor: " + Math.min(...myArray));
    document.getElementById("mayor").innerHTML= ("Mayor: " + Math.max(...myArray));
    document.getElementById("promedio").innerHTML= ("Promedio: " + avg(myArray));

}