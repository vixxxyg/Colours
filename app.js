const columns = document.querySelectorAll('.column');

function generateRandomColor () {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

function setRandomColors() {
    columns.forEach((column)=> {
        const text =  column.querySelector('h2');
        const color = generateRandomColor();
        text.textContent = color;
        column.style.background = color;
    })
}

setRandomColors();