const bigPepsi = document.getElementById('big-pepsi')
const heroArea = document.getElementById('hero-area')

document.getElementById('pepsi-black').addEventListener('mouseover', () => { changePepsi('pepsi-black', '#000000') })
document.getElementById('pepsi-blue').addEventListener('mouseover', () => { changePepsi('pepsi-blue', '#7FB3D5') })
document.getElementById('pepsi-gold').addEventListener('mouseover', () => { changePepsi('pepsi-gold', '#F39C12') })
document.getElementById('pepsi-white').addEventListener('mouseover', () => { changePepsi('pepsi-white', '#95A5A6') })

const changePepsi = (pepsiCan, color) => {
    bigPepsi.src = `images/${pepsiCan}.png`
    heroArea.style.backgroundColor = color
}