const nav = document.querySelector('.header__nav')
const hamburguerMenu = document.querySelector('.hamburguer-menu')
const links = document.querySelectorAll('.header__nav a')
const arrayLinks = [...links]
let contadorClick = 0

function displayMenuHamburguer_Onresize() {
    if(window.innerWidth <= 550) {
        //Remove hidden class
        hamburguerMenu.classList.remove('hidden')
        //If the menu already exists on the navegation, do not create another one.
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            return
        }else {
            nav.appendChild(hamburguerMenu)
        }

        //create event listener
        hamburguerMenu.addEventListener('click', displayMenu)

        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].remove()
        }

    }else if(window.innerWidth >= 551) {
        //remove hamburguer menu if it exists
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            nav.firstElementChild.remove()
        }
        //Show links
        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].classList.remove('hidden')
            nav.appendChild(arrayLinks[i])
        }
    }
}
window.onresize = displayMenuHamburguer_Onresize

function displayMenuHamburguer() {
    if(window.innerWidth <= 550) {
        //Remove hidden class
        hamburguerMenu.classList.remove('hidden')

        //create event listener
        hamburguerMenu.addEventListener('click', displayMenu)

        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].remove()
        }

    } else if(window.innerWidth > 551) {
        //Eliminar hamburguer menu
        hamburguerMenu.remove()

        //Muestra los links
        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].classList.remove('hidden')
            nav.appendChild(arrayLinks[i])
        }
    }
}

const startHamburguerMenu = () => {
    displayMenuHamburguer()
    document.addEventListener('resize', displayMenuHamburguer_Onresize)
}

function displayMenu() {
    contadorClick++
    //Si el modulo con numero impar, muestra. Sino, esconde
    if(contadorClick%2 !== 0) {
        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].classList.remove('hidden')
            nav.appendChild(arrayLinks[i])
        }
    }else {
        for(let i = 0; i<arrayLinks.length; i++) {
            arrayLinks[i].remove()
        }
    }
}

document.addEventListener('DOMContentLoaded', startHamburguerMenu)

export default startHamburguerMenu