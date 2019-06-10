class Fraction {
    constructor (n,d){ 
		if ((typeof n != 'number')||(typeof d != 'number')){
			console.log('Error: no es un número');
		}
    	else if (n % 1 != 0 || d % 1 != 0) {
    		console.log('Error: no es entero');
    	} else {
    		this.n = n;
    		this.d = d;
    	}
    };
	euclides(n, d) {
		var op;
		var max = Math.max(n, d);
		var min = Math.min(n, d);
		do {
			op = min;
			min = max % min;
			max = op;
		} while (min !== 0);
		d = max;
		return d;
	};

    sum(f){
	if (f instanceof Fraction){
		if (this.d === f.d){
	    var n = this.n + f.n;
		var d = this.d;
		var r = this.euclides(n,d);
			d /= r;
			n /= r;
		return new Fraction(n,d);
		} else {
		var n = (this.n * f.d) + (this.d * f.n);
		var d = (this.d * f.d);
		var r = this.euclides(n,d);
			d /= r;
			n /= r;
		return new Fraction(n,d);
		}
	}
	};

    subt(f){
		if (f instanceof Fraction){
    	if (this.d === f.d) {
    		var n = this.n - f.n;
			var d = this.d;
			var r = this.euclides(n,d);
			d /= r;
			n /= r;
			return new Fraction(n, d);
    	} else {
			var n = (this.n * f.d) - (this.d * f.n);
			var d = (this.d * f.d);
			var r = this.euclides(n,d);
			d /= r;
			n /= r;
			return new Fraction(n,d);
    	}
	}
	};
	
    div(f){
		if (f instanceof Fraction){
		if (this.d === 0 || f.d === 0){
			alert('No se puede dividir sobre 0');
		} else {
			var n = this.n * f.d;
			var d = this.d * f.n;
			var r = this.euclides(n,d);
			d /= r;
			n /= r;
			return new Fraction (n,d);
		}
	}
	};
    mul(f){
	if (f instanceof Fraction){
	var n = this.n * f.n;
	var d = this.d * f.d;
	var r = this.euclides(n,d);
	d /= r;
	n /= r;
	return new Fraction(n,d);
	}
   };
};
/*
console.log(f1.mul(f2))
var f1 = new Fraction(4,2);
var f2 = new Fraction(5,4);
*/