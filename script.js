const container = document.querySelector('.container');
const customizeBtn = document.querySelector('.customize');
const colorCtrlBtn = document.querySelectorAll('.colrCtrl');
let colorType = 'normal';
let darkcount = 0;

customizeBtn.addEventListener('click', ()=>{
    let numbOfSquare = parseInt(prompt("Warning!!! don't exceed 100"));
    newSketchPad(numbOfSquare);
})

colorCtrlBtn.forEach(item => {
    item.addEventListener('click', ()=>{
        colorType = item.getAttribute('data-col');
    })
})

function newSketchPad(numbOfSquares = 16) {

    numbOfSquares = (numbOfSquares > 100) ? 99 : numbOfSquares;

    removeLayout();

    createLayout(numbOfSquares);

}

function createLayout(numbOfSquares) {

    const sketchpadWidth = 640;
    const sizeOfaBox = sketchpadWidth / numbOfSquares;
    let squareValue = numbOfSquares ** 2;

    for(let i = 0; i < squareValue; i++) {
        let div = document.createElement('div')
        div.style.cssText = `width: ${sizeOfaBox}px; height: ${sizeOfaBox}px;`
        div.setAttribute('class', 'box');

        div.addEventListener('mouseover', ()=>{
            div.style['background-color'] = getColor();
        })

        container.appendChild(div);
    }
}

function removeLayout() {
    const boxes = document.querySelectorAll('.container > *');
    boxes.forEach((box)=>{
        box.parentNode.removeChild(box);
    })
}

function reset() {
    newSketchPad();
    colorType = 'normal';
}

function getColor() {
    let color = (colorType == 'rainbow') ? rainbowColor() :
                (colorType == 'greyshade') ? greyShade() : '#2f4858' ;
    return color;
}

function rainbowColor() {
    let red = randomNumber(255);
    let blue = randomNumber(255);
    let green = randomNumber(255);
    return `rgb(${red}, ${green}, ${blue})`
}

function randomNumber(a) {
    return Math.floor(Math.random()*a);
}

function greyShade(){
    let color = `rgb(${darkness(darkcount)}, ${darkness(darkcount)}, ${darkness(darkcount)})`;
    if(darkcount >= 100) {
        darkcount = 0;
    }
    darkcount++;
    return color;
}

function darkness(count) {
    let remainder = count % 10;
    remainder++;

    let num = 100 - (remainder * 10);

    let result = num * 2.55;
    result = Math.floor(result);
    return result;
}

newSketchPad();
