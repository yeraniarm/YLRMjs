var i = 3;
var n = 1;
var isNumber = function (i) {
	if (typeof i === 'number')
		for (; i <= 9; i++) {
			if (i % 2 == 0) {
				n = n * i;
			}
		}
    else {
		return 'no es numero';
}
}

print(isNumber(i));
print(n);