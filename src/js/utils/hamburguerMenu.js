const nav = document.querySelector('.header__nav')
const hamburguerMenuHTML = document.querySelector('.hamburguer-menu')
const body = document.querySelector('body')
let contadorClick = 0

const links = []
for(let i = 0; i < 3; i++) {
    const link = document.createElement('A')
    link.className = 'header__link'
    links.push(link)
}
links[0].textContent = 'Line Up'
links[0].href ='#line-up'
links[1].textContent = 'Galería'
links[1].href ='#galeria'
links[2].textContent = 'Precios'
links[2].href ='#precios'

class hamburguerMenu {
    constructor(){}

    menuOnResize() {
        if(window.innerWidth <= 1024) {
            //Remove hidden class
            hamburguerMenuHTML.classList.remove('hidden')
            //If the menu already exists on the navegation, do not create another one.
            if(nav.firstElementChild.className === 'hamburguer-menu') {
                return
            }else {
                nav.appendChild(hamburguerMenuHTML)
            }

            if((nav.lastElementChild.className === 'header__link')||(nav.firstElementChild.className === 'header__link')) {
                const links = document.querySelectorAll('.header__link')
                const arrayLinks = [...links]
                for(let i = 0; i<arrayLinks.length; i++) {
                    arrayLinks[i].remove()
                }
            }
            //create event listener
            hamburguerMenuHTML.addEventListener('click', this.displayMenu)
        }else if(window.innerWidth >= 1025) {
           //remove hamburguer menu if it exists
           if(nav.firstElementChild.className === 'hamburguer-menu') {
               nav.firstElementChild.remove()
           }
           //Show links
           for(let i = 0; i<links.length; i++) {
               nav.appendChild(links[i])
           }
        }
    }
    menuOnSize() {
        if(window.innerWidth <= 1024) {
            //Remove hidden class
            hamburguerMenuHTML.classList.remove('hidden')
            //create event listener
            hamburguerMenuHTML.addEventListener('click', this.displayMenu)
        } else if(window.innerWidth > 1024) {
            //Delete hamburguer menu
            hamburguerMenuHTML.remove()
            //Show the links
            for(let i = 0; i<links.length; i++) {
                nav.appendChild(links[i])
            }
        }
    }
    displayMenu() {
        contadorClick++
        //If module´s number is odd, show it. If not, hide it.
        if(contadorClick%2 !== 0) {
            const aside = document.createElement('DIV')
            aside.className = ('aside')
            for(let i = 0; i < 3; i++ ) {
                aside.appendChild(links[i])
            }
            nav.appendChild(aside)

            setTimeout(() => {
                aside.classList.add('active')
                hamburguerMenuHTML.classList.add('active')
                body.classList.add('active')
                for(let i = 0; i < 3; i++ ) {
                    links[i].classList.add('active')
                }
            }, 500)
            aside.addEventListener('click', (evento) => {
                if(evento.target.nodeName === 'A') {
                    const aside = document.querySelector('.aside')
                    for(let i = 0; i < 3; i++ ) {
                        links[i].classList.remove('active')
                        links[i].remove()
                    }
                    aside.classList.remove('active')
                    hamburguerMenuHTML.classList.remove('active')
                    body.classList.remove('active')
                    setTimeout(() => {
                        aside.remove()
                    }, 1000)
                    contadorClick++
                }
            })
        }else {
            if(document.querySelector('.aside')) {
                const aside = document.querySelector('.aside')
                for(let i = 0; i < 3; i++ ) {
                    links[i].classList.remove('active')
                    links[i].remove()
                }
                aside.classList.remove('active')
                hamburguerMenuHTML.classList.remove('active')
                body.classList.remove('active')
                setTimeout(() => {
                    aside.remove()
                }, 1000)
            }
        }
    }
    fixedNavegation() {
        const header = document.querySelector('.header')
        //Intersection observer
        const observer = new IntersectionObserver( function(entries) {
            if(entries[0].isIntersecting) {
                header.classList.remove('headerFixed')
            }else {
                header.classList.add('headerFixed')
            }
        })

        //Elemento a observar
        observer.observe(document.querySelector('.video-container'))
    }
}
const menu = new hamburguerMenu()
window.onresize = menu.menuOnResize
const startHamburguerMenu = () => {
    menu.menuOnSize()
    menu.fixedNavegation()
    document.addEventListener('resize', menu.menuOnResize)
}
document.addEventListener('DOMContentLoaded', startHamburguerMenu)
export default startHamburguerMenu