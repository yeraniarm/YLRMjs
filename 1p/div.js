var r = 0;
var isNumber = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		r = a / b;
		function isZero(r) {
			if (r == 0){
				throw new Error('arg cannot be null or undefined');
			}else{
				return r;
			}
		}
	}
	else
		return ('No son numeros');
}
print(isNumber(4, 2));
print(isZero(r));
