const container = document.querySelector('.container');

for(let i = 0; i < 16*16; i++) {
    let div = document.createElement('div')
    let text = document.createTextNode(i + 1)
    div.setAttribute('class', 'box');
    div.appendChild(text);
    container.appendChild(div);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (e)=>{
        box.classList.add('active');
    })
});

