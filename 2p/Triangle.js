class Triangle {
    constructor(p1,p2,p3){
        if ((p1 instanceof Point) && (p2 instanceof Point) && (p3 instanceof Point)){
            this._p1 = p1;
            this._p2 = p2;
            this._p3 = p3;
        } else {
            console.log('Error: un punto no es instancia de Point');
        }
    };
    toString(){return ("Punto 1:("+this._p1.x+","+this._p1.y+") Punto 2:("+this._p2.x+","+this._p2.y+") Punto 3:("+this._p3.x+","+this._p3.y+")");};
    clone(){return new Triangle (this._p1, this._p2, this._p3);};

    get p1(){return this._p1;}
    set p1(x){this._p1 = x;}
    get p2(){return this._p2;}
    set p2(x){this._p2 = x;}
    get p3(){return this._p3;}
    set p3(x){this._p3 = x;}
}