const paletteColor = document.getElementById('section-color-Palette');
const tools = document.getElementById('tools');

const pattern = {
    colorsPalette: ['rgb(0,0,0)', 'rgb(144,052,052)', 'rgb(240,128,032)', 'rgb(182,058,111)', 'rgb(144,052,052)', 'rgb(144,052,052)', 'rgb(144,052,052)'],
    selectedColor: 'rgb(0,0,0)'
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

        switch (element.id) {
            case 'button-random-Color': defineAleatoryColorsAtThePalette(); break;
        }
    }


}

const defineColorsAtThePalette = (colors) => {
    let colorElements = paletteColor.children;

    colors.forEach((color, i) => {
        colorElements[i].style.backgroundColor = color;
    });
}

const definePattern = () => {

    defineColorsAtThePalette(pattern.colorsPalette);

    /*
        pattern.colorsPalette.forEach((backgroundColor) => {
        const color = document.createElement('div');
        color.classList.add('clickable', 'color');
        color.style.backgroundColor = backgroundColor;

        paletteColor.append(color);
     });
    */


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