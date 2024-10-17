const columns = document.querySelectorAll('.column')

document.addEventListener('keydown', event => {
    if (event.code.toLocaleLowerCase() === 'space') {
        setRandomColors()
    }
})

document.addEventListener('click', event => {
    
    const type = event.target.dataset.type

    if (type === 'lock') {
        const node =  event.target.tagName.toLowerCase() === 'i' ? event.target : event.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }
        
})
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
    text.style.color = luminance >0.5 ? 'darkgrey' : 'white'
}

setRandomColors();