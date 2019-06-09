function generaRandom(){
   var myArray = [];
   for(var i=0; i < 10; i++){
       var a = Math.floor(Math.random()*10);
       myArray.push(a);
   }
   document.getElementById("myText").innerHTML = myArray.join();
}