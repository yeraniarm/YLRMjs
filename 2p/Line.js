class Line {
      constructor(p1,p2){
          if ((p1 instanceof Point) && (p2 instanceof Point)){
            this._p1 = p1;
            this._p2 = p2;
          } else {
            console.log('Un punto no es una instancia de Point');
          }
      };
      toString() {return ("Punto 1:("+this._p1.x+","+this._p1.y+")"+","+"Punto 2:("+this._p2.x+","+this._p2.y+")");};
      clone(){return new Line(this._p1, this._p2);};
      
      get p1 (){return this._p1;}
      set p1 (x){this._p1 = x;}
      get p2 (){return this._p2;}
      set p2 (x){this._p2 = x;}
}
