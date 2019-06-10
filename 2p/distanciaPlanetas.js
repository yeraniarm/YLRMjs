var Mercurio = {
    y: 36
}

var Venus = {
    y: 67
}

var Tierra = {
	y: 93
}

var Marte = {
	y: 141
}

var Jupiter = {
	y: 483
}

var Saturno = {
	y: 886
}

var Urano = {
	y: 1782
}

var Neptuno = {
	y: 2793
}

var Pluton = {
	y: 3670
}

function distanciaAB(p1, p2) {
		var r = Math.abs(p2.y - p1.y);
		return (r + " millones de millas");
}
distanciaAB (Mercurio, Venus)
