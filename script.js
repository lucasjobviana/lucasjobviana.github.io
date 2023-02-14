
const config = {
    palleteColorPixelSize: '20px',
    paletteColorSize: 4,
    pixelSize: '20px',
    borderSize: '1px',
    colorSize: '15px',
    backgroundColor: '#FFFFFF'
}


class Pixel {
    constructor() {
        this.size = config.pixelSize;
        this.backgroundColor = config.backgroundColor,
        this.borderSize = config.borderSize,
        this.size = config.pixelSize,
        this.previousColor = '#FFFFFF';
    }
    paint(color) {
        this.backgroundColor = color;
    }
    clean() {
        this.backgroundColor = config.backgroundColor;
    }
}

class Color{ //extends HtmlElement
    constructor(hexaColor) {
        this.backgroundColor = (hexaColor) ? hexaColor : config.backgroundColor;
        this.size = config.colorSize;
        this.isSelected = false;
        this.htmlElement = '_undefined_';
    }


    select() {
        this.isSelected = true;
    }
    unSelect() {
        this.isSelected = false;
    }
}

class Palette {

    constructor(arrayColor) {
        this.colors = arrayColor;
        
    }
    add(newColorPalette){
        this.colors.push(newColorPalette);
    }
    rmv(colorPalette) {
        this.colors.remove(colorPalette);
    }
}

class PixelBoard {
    constructor(arrayPixel) {
        this.boardCollum = config.boardCollum;
        this.boardRow = config.boardRow;
        this.pixels = arrayPixel;
    }
}

let paletteHTML = document.getElementById('section-color-Palette');
console.log(paletteHTML);
let arrayColor = [new Color('#000000'),new Color('#14ABB0'),new Color('#00FF22'), new Color('#DD5444')];
let palette = new Palette(arrayColor);
let colorsElement = document.getElementsByClassName('color');

window.onload = function(){

    palette.colors[0].htmlElement = colorsElement[0];
    palette.colors[1].htmlElement = colorsElement[1];
    palette.colors[2].htmlElement = colorsElement[2];
    palette.colors[3].htmlElement = colorsElement[3]; 


    console.info(palette.colors[0].htmlElement)

    for (let i = 0; i < palette.colors.length ; i+=1) {
        palette.colors[i].htmlElement.style.backgroundColor = arrayColor[i].backgroundColor;
        console.info(i)
    }

}







