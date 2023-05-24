class Figuras{
    constructor(color){
        this.color = color;
    };
};

class Rectangulo extends Figuras{
    constructor(color){
        super(color);
    }

    dibujarRectangulo(){
        var d = document.getElementById('Rectangulo');
        var lienzo = d.getContext('2d');

        function DibujarLineas(color,xinicial,yinicial,xfinal,yfinal){
            lienzo.beginPath();
            lienzo.strokeStyle = color;
            lienzo.moveTo(xinicial,yinicial);
            lienzo.lineTo(xfinal,yfinal);
            lienzo.stroke();
            lienzo.closePath();
        }

        DibujarLineas(this.color,10,20,120,20)
        DibujarLineas(this.color,120,20,120,110)
        DibujarLineas(this.color,120,110,10,110)
        DibujarLineas(this.color,10,110,10,20)
    }
};

class Hexagono extends Figuras{
    constructor(color){
        super(color);
    }

    dibujarHexagono(){
        var d = document.getElementById('Hexagono');
        var lienzo = d.getContext('2d');

        function DibujarLineas(color,xinicial,yinicial,xfinal,yfinal){
            lienzo.beginPath();
            lienzo.strokeStyle = color;
            lienzo.moveTo(xinicial,yinicial);
            lienzo.lineTo(xfinal,yfinal);
            lienzo.stroke();
            lienzo.closePath();
        }

        DibujarLineas(this.color,30,20,80,20)
        DibujarLineas(this.color,80,20,100,65)
        DibujarLineas(this.color,100,65,80,110)
        DibujarLineas(this.color,80,110,30,110)
        DibujarLineas(this.color,30,110,10,65)
        DibujarLineas(this.color,10,65,30,20)
    }
};

class Trapecio extends Figuras{
    constructor(color){
        super(color);
    }

    dibujarTrapecio(){
        var d = document.getElementById('Trapecio');
        var lienzo = d.getContext('2d');

        function DibujarLineas(color,xinicial,yinicial,xfinal,yfinal){
            lienzo.beginPath();
            lienzo.strokeStyle = color;
            lienzo.moveTo(xinicial,yinicial);
            lienzo.lineTo(xfinal,yfinal);
            lienzo.stroke();
            lienzo.closePath();
        }

        DibujarLineas(this.color,30,20,100,20)
        DibujarLineas(this.color,100,20,120,110)
        DibujarLineas(this.color,120,110,10,110)
        DibujarLineas(this.color,10,110,30,20)
    }
};

class Triangulo extends Figuras{
    constructor(color){
        super(color);
    }

    dibujarTriangulo(){
        var d = document.getElementById('Triangulo');
        var lienzo = d.getContext('2d');

        function DibujarLineas(color,xinicial,yinicial,xfinal,yfinal){
            lienzo.beginPath();
            lienzo.strokeStyle = color;
            lienzo.moveTo(xinicial,yinicial);
            lienzo.lineTo(xfinal,yfinal);
            lienzo.stroke();
            lienzo.closePath();
        }
        DibujarLineas(this.color,10,110,100,110)
        DibujarLineas(this.color,100,110,55,20)
        DibujarLineas(this.color,55,20,10,110)
    }
};

const color = document.getElementById('color');

function action(figura){
    let dato = document.getElementById('color').value;
    if (figura == 'rectangulo') {
        let miRectangulo = new Rectangulo(dato);
        miRectangulo.dibujarRectangulo()
    }else if(figura == 'hexagono'){
        let miHexagono = new Hexagono(dato);
        miHexagono.dibujarHexagono()
    }else if(figura == 'trapecio'){
        let miTrapecio = new Trapecio(dato);
        miTrapecio.dibujarTrapecio()
    }else if(figura == 'triangulo'){
        let miTriangulo = new Triangulo(dato);
        miTriangulo.dibujarTriangulo()
    } 
}



