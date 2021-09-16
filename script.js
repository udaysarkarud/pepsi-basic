const bigPepsi = document.getElementById('big-pepsi')
const heroArea = document.getElementById('hero-area')
const logo = document.getElementById('logo')

document.getElementById('pepsi-black').addEventListener('mouseover', () => { changePepsi('pepsi-black', '#000000', '360deg') })
document.getElementById('pepsi-blue').addEventListener('mouseover', () => { changePepsi('pepsi-blue', '#E74C3C', '0deg') })
document.getElementById('pepsi-gold').addEventListener('mouseover', () => { changePepsi('pepsi-gold', '#F39C12', '360deg') })
document.getElementById('pepsi-white').addEventListener('mouseover', () => { changePepsi('pepsi-white', '#5D6D7E', '0deg') })

const changePepsi = (pepsiCan, color, rotate) => {
    bigPepsi.src = `images/${pepsiCan}.png`
    heroArea.style.backgroundColor = color
    logo.style.transform = `rotate(${rotate})`
}