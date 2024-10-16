const columns = document.querySelectorAll('.column')

// function generateRandomColor () {
    // const hexCodes = '0123456789ABCDEF'
    // let color = ''
    // for (let i = 0; i < 6; i++) {
    //     color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    // }
    // return '#' + color
// }

function setRandomColors() {
    columns.forEach((column)=> {
        const text = column.querySelector('h2')
        const button = column.querySelector('button')
        const color = chroma.random()
        // const color = generateRandomColor()
        
        
        text.textContent = color
        column.style.background = color

        setColor(text, color)
        setColor(button, color)
    })
}

function setColor(text, color) {
    const  luminance = chroma(color).luminance()
    text.style.color = luminance >0.5 ? 'black' : 'white'
}

setRandomColors();