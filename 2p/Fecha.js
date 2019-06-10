class Fecha{
    constructor(d,m,a){
        if ((typeof d!= 'number')||(typeof m != 'number')||(typeof a != 'number') ){
			alert('Error: no es un número');
        }else if (d === 0 || m === 0 || a === 0){
            alert('Error: Cero es valor invalido');
        } 
        else{
            this._d = d;
            this._m = m;
            this._a = a;
        }
    };
    aumentaUn(){
        if (this._d > 31 || this._m > 12){
            alert('Fecha no encontrada');
        } else if (this._d === 31 && this._m === 12){
            this._d = 1;
            this._m = 1;
            this._a++;
        } else if (this._d < 31 && this._m < 12){
            this._d++;
        } else if (this._d === 31 && this._m < 12){
            this._d = 1;
            this._m++;
        }
    };
    toString(){
        return "("+this._d+","+this._m+","+this._a+")";
    };
    get d() {return this._d;}
    get m() {return this._m;}
    get a() {return this._a;}
    set d(d){this._d = d;}
    set m(m){this._y = m;}
    set a(a){this._a = a;}
};