var aPoint = {
    x: 3,
    y: 4
}

var bPoint = {
    x: -3,
    y: -4
}

function distanciaAB(p1,p2){
    var d1 = p2.x - p1.x;
    var d2 = p2.y - p1.y;
    d1 = d1 ** 2;
    d2 = d2 ** 2;
    return Math.sqrt(d1+d2);
}
distanciaAB(aPoint, bPoint) //=10

