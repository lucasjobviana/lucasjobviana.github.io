const config = {
    palleteColorSize: '20px',
    pixelSize: '20px',
    borderSize: '1px'
}


const pixel = {
    size: config.pixelSize,
    borderSize: 1,
    backgroundColor: '#FFFFFF',
    previousColor: ''
}

const color = {
    backgroundColor: null,size: null,

    color(bgColor){
        this.backgroundColor = bgColor;
        this.size = config.palleteColorSize; 
        return this;
    }
}
const palette = {
    color: []
    
}

const pixelBoard = {
    boardCollum:null, boardRow:null, pixel, colorSelected:null, colorRubber:null

}

let minhacor = color.color('red');
console.info(minhacor)