const paletteColor = document.getElementById('section-color-Palette');
const tools = document.getElementById('tools');
const pixelBoard = document.getElementById('section-pixel-Board');
const pixelBoardSize = document.getElementById('section-board-Size');
let row = document.getElementById('button-board-Row');
let collum = document.getElementById('button-board-Collum');

const pattern = {
    colorsPalette: ['rgb(0,0,0)', 'rgb(144,052,052)', 'rgb(240,128,032)', 'rgb(182,058,111)', 'rgb(55,52,52)', 'rgb(144,144,001)', 'rgb(20,052,152)'],
    selectedColor: 'rgb(0,0,0)',
    row: '5',
    collum: '7',
    pixelSize: '25px'
}



const defineClicks = () => {

    paletteColor.onclick = (event) => {
        const element = event.target;

        const selectColor = () => {
            pattern.selectedColor = element.style.backgroundColor;
            console.log('Cor selecionada: ', pattern.selectedColor)
        }


        switch (element.tagName) {
            case 'DIV': selectColor(); break;
        }
    }

    tools.onclick = (event) => {
        const element = event.target;

        const getAleatoryCollor = () => {
            let a = generateColor();
            return a;
        }


        const getAleatoryCollors = (size) => {
            const aleatoryCollors = [pattern.colorsPalette[0]];
            for (let i = 0; i < size; i += 1) {
                aleatoryCollors.push(getAleatoryCollor())
            }
            return aleatoryCollors;
        }
        ///////////////////////////////////////////////////
        //defineColorsAtThePalette foi para escopo global//
        ///////////////////////////////////////////////////

        const defineAleatoryColorsAtThePalette = () => {
            let aleatoryCollors = getAleatoryCollors(pattern.colorsPalette.length - 1);
            defineColorsAtThePalette(aleatoryCollors)
        }
        const definePatternColorsAtThePalette = () => {
            defineColorsAtThePalette(pattern.colorsPalette)
        }

        switch (element.id) {
            case 'button-random-Color': defineAleatoryColorsAtThePalette(); break;
            case 'button-pattern-Color': definePatternColorsAtThePalette(); break;
        }
    }

    pixelBoard.onclick = (event) => {
        const element = event.target;
        element.style.backgroundColor = pattern.selectedColor;

        const paintPixel = () => {
            if (pattern.selectedColor == 'rgb(0,0,0)') {
                //alert('ehzero');
                element.onmousemove = function (event) {
                    event.target.style.cursor = 'url(img/white.png) 0 25, default';
                }
            }
        }

        const paintBackground = () => {
            if (pattern.selectedColor == 'rgb(0,0,0)') {
                //alert('ehzero');
                element.onmousemove = function (event) {
                    event.target.style.cursor = 'url(img/balde_branco.png) 25 25, default';
                }
            }
        }

        switch (element.tagName) {
            case 'DIV': paintPixel(); break;
            case 'SECTION': paintBackground(); break;
        }
    }

    pixelBoardSize.onclick = (event) => {
        const element = event.target;



        switch (element.id) {
            case 'button-add-Board': definePixelBoard(row.value, collum.value, []); break;
        }
    }

}

const defineColorsAtThePalette = (colors) => {
    let colorElements = paletteColor.children;

    colors.forEach((color, i) => {
        colorElements[i].style.backgroundColor = color;
    });
}

const definePixelBoard = (row, collum, matrizColor) => {
    pixelRowAdd(row, collum, matrizColor);
}

const definePattern = () => {
    defineColorsAtThePalette(pattern.colorsPalette);
    definePixelBoard(pattern.row, pattern.collum, []);
}

window.onload = () => {

    pattern.colorsPalette.forEach((backgroundColor) => {
        const color = document.createElement('div');
        color.classList.add('clickable', 'color');
        paletteColor.append(color);
    });

    definePattern();
    defineClicks();

}

///////////////////////original//////////////////////////////////////////////

function generateColor() {//String - Retorna uma cor hexadecimal.
    const letters = '0123456789ABCDEF';
    let color;

    do {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 15)];
        }
    } while (color === '#0000000' || color === '#FFFFFF');

    return color;
}

function pixelAdd(qtdPixel, htmlRow, matrizColor, orderPixel) {//Int - Adiciona (qtdPixel*)Pixel à htmlRow --------
    for (let i = 0; i < qtdPixel; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = Array.isArray(matrizColor) ? matrizColor[orderPixel] : corFundo;
        //pixel.textContent = orderPixel - 1;
        htmlRow.append(pixel);
        orderPixel++;
    }
    return orderPixel;
}

function pixelRowAdd(qtdRows, qtdCollums, matrizColor) {//Null - Adiciona (qtdRows*)Row  ao #pixel-board
    let pixelBoard = document.getElementById('section-pixel-Board');
    let orderPixel = 2;
    for (let i = 0; i < qtdRows; i += 1) {
        let row = document.createElement('div');
        row.className = 'row';
        pixelBoard.append(row);
        orderPixel = pixelAdd(qtdCollums, row, matrizColor, orderPixel);
    }
}