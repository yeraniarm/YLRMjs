class Vector{
    constructor(A){
	if (Array.isArray(A)){
        this.A = A;
	} else {
	    alert('No es vector');
	}
    };
    min(){
	    let t = this.A[0];
	    for (let x of this.A){
	    if (t>x)
		t = x;
	}
	return t;
    };
    max(){
        let t = this.A[0];
	    for (let x of this.A){
	    if (t<x)
		t = x;
	}
	    return t;
    };
    sum(){
        let s = 0;
        for (let x of this.A){
	    s = s + x;
        }
        return s;
    };
    avg(){
        let s = 0;
        let r = 0;
        for (let x of this.A){
	    s = (s + x);
        }
        r = s/this.A.length;
        return r;
    };
    initialize(v1,v2){
        for(let i = 0; i < v2; i++){
            this.A[i] = v1;
        }
        return this.A;
    };
    vectorize(v1,v2,v3){
        let op = v2 / v3;
        for (let i = v1; op == v2; i++){
                this.V[i] = i + op;
        }
        return this.V;
    };
    getData(){
        return this.A;
    };
}
/*
function vectorize(a,b,k){
    let pts = [];
    let a = 0;
    let b = 1;
    let n = 10;
    let i = (b-a)/n;
}
*/