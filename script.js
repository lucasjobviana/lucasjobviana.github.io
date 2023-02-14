
const config = {
    palleteColorSize: '20px',
    pixelSize: '20px',
    borderSize: '1px',
    selectedColor:'cor selecionada'
}


class Pixel {
    constructor() {
        this.size = config.pixelSize;
        this.backgroundColor = config.selectedColor,
        this.borderSize = config.borderSize,
        this.previousColor = '#FFFFFF';
    }
}

class Color {
    constructor() {
        this.backgroundColor = null;
        this.size = config.paletteSize;
        this.isSelected = false;
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
        this.colors.remove(newColorPalette);
    }
}

class PixelBoard {
    constructor(arrayPixel) {
        this.boardCollum = config.boardCollum;
        this.boardRow = config.boardRow;
        this.pixels = arrayPixel;
    }
}

let arrayPixel = [new Pixel(),new Pixel(),new Pixel()];
let pixelBoard = new PixelBoard(arrayPixel);
let corPixel1 = pixelBoard.pixels[0].backgroundColor;
console.log(corPixel1)



