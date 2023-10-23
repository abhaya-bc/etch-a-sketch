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

function newSketchPad(numbSquare = 16) {

    numbSquare = (numbSquare > 100) ? 100 : numbSquare;
    const sketchpadWidth = 640;
    const sizeOfaBox = sketchpadWidth / numbSquare;
    let squareOfNumb = numbSquare ** 2;

    let boxes = document.querySelectorAll('.container > *');
    boxes.forEach((box)=>{
        box.parentNode.removeChild(box);
    })
    
    for(let i = 0; i < squareOfNumb; i++) {
        let div = document.createElement('div')
        div.style.cssText = `width: ${sizeOfaBox}px; height: ${sizeOfaBox}px;`
        div.setAttribute('class', 'box');
        container.appendChild(div);
    }

    boxes = document.querySelectorAll('.container > *');
    console.log(boxes);
    boxes.forEach((box) => {
        box.addEventListener('mouseover', ()=>{
            box.style['background-color'] = getColor();
        })
    });
}

function reset() {
    newSketchPad();
    colorType = 'normal';
}

function getColor() {
    let color;
    switch (colorType) {
        case 'rainbow':
            colorType = 'rainbow';
            color = rainbowColor();
            break;
        case 'greyshade':
            colorType = 'greyshade'
            color = greyShade();
            break;
        default:
            colorType = 'normal'
            color = '#2F4858'
            break;
    }
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

newSketchPad();


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