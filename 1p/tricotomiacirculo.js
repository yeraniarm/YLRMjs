print('Ingresa x: ');
var x = Number(readline());

print('Ingresa y: ');
var y = Number(readline());

print('Valor del radio: ');
var r = Number(readline());

var op = (x * x) + (y * y);
var h = Math.sqrt(op);

if (r > h) {
	print('Dentro');
}
else if (r < h) {
	print('Fuera');
}
else {
	print('Sobre');
}
