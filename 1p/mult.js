var isNumber = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number')
		return (a * b);
	else
		return ('No son numeros');
}
print(isNumber(4, 2));