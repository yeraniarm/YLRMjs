class Text {
    constructor(cadena){
            this._cadena = cadena;
    }
    numCaracteres(){
        return this.cadena.length;
    }
    numPalabras(){
    let palabras = this._cadena.split(" ");
    return palabras.length;
    }
    numSentencias(){
    let sentencias = this._cadena.split(".");
    return sentencias.length;
    }
    numParrafos(){
        let parrafos = this._cadena.split("<br>" + "<br>");
        return parrafos.length;
    }
    get cadena (){ return this._cadena;}
    set cadena(cadena) {this._cadena = cadena;}
}

