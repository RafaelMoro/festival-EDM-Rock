const nav = document.querySelector('.header__nav')
const hamburguerMenuHTML = document.querySelector('.hamburguer-menu')
const links = document.querySelectorAll('.header__nav a')
const arrayLinks = [...links]
let contadorClick = 0

class hamburguerMenu {
    constructor(){}

    menuOnResize() {
        if(window.innerWidth <= 550) {
            //Remove hidden class
            hamburguerMenuHTML.classList.remove('hidden')
            //If the menu already exists on the navegation, do not create another one.
            if(nav.firstElementChild.className === 'hamburguer-menu') {
                return
            }else {
                nav.appendChild(hamburguerMenuHTML)
            }
            //create event listener
            hamburguerMenuHTML.addEventListener('click', this.displayMenu)
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
    menuOnSize() {
        if(window.innerWidth <= 550) {
            //Remove hidden class
            hamburguerMenuHTML.classList.remove('hidden')
            //create event listener
            hamburguerMenuHTML.addEventListener('click', this.displayMenu)
            for(let i = 0; i<arrayLinks.length; i++) {
                arrayLinks[i].remove()
            }
        } else if(window.innerWidth > 551) {
            //Delete hamburguer menu
            hamburguerMenuHTML.remove()
            //Show the links
            for(let i = 0; i<arrayLinks.length; i++) {
                arrayLinks[i].classList.remove('hidden')
                nav.appendChild(arrayLinks[i])
            }
        }
    }
    displayMenu() {
        contadorClick++
        //If module´s number is odd, show it. If not, hide it.
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
}
const menu = new hamburguerMenu()
window.onresize = menu.menuOnResize

const startHamburguerMenu = () => {
    menu.menuOnSize()
    document.addEventListener('resize', menu.menuOnResize)
}

document.addEventListener('DOMContentLoaded', startHamburguerMenu)

export default startHamburguerMenu