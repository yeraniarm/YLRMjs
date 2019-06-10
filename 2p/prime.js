function init() {
	for (n = 3; n < 1000; n++) {
		noFactorSoFar = true;
		for (f = 2; f < n; f++) {
			r = n % f;
			if (r == 0) {
				noFactorSoFar = false;
				break;
			}
		}
		if (noFactorSoFar) {
			document.write(n)
			document.write("<br/>");
		}
	}
}

init();