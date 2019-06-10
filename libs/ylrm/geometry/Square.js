class Square{
    constructor(p1, l){
        if(p1 instanceof Point){
            this._p1 = p1;
            this._l = l;
        } else {
            console.log('Error: un punto no es instancia de Point');
        }
    };
    toString(){return ("Punto:("+this._p1.x+","+this._p1.y+") Medida de cada lado: " + l);};
    clone(){return new Square(this._p1, this._l);};

    get p1(){return this._p1;}
    set p1(x){this._p1 = x;}
    get l(){return this._l;}
    set l(x){this._l = x;}
}