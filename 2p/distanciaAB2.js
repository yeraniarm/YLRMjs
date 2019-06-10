var aPoint = {
    x: 3,
    y: 4
}

var bPoint = {
    x: -3,
    y: -4,
    distanciaAB: function(aPoint){
	var d1 = this.x - aPoint.x;
	var d2 = this.y - aPoint.y;
	d1 = d1 ** 2;
	d2 = d2 ** 2;
	r = Math.sqrt(d1+d2);
	return r;
    }
};

bPoint.distanciaAB (aPoint)
