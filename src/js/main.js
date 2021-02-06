
const nav = document.querySelector('.header__nav')
const links = document.querySelectorAll('.header__nav a')
const arrayLinks = [...links]
let contadorClick = 0

//crear el menu hamburguesa
//mostrarlo cuando cambie el tamaño de la pantalla

function displayMenuHamburguer_Onresize() {
    if(window.innerWidth <= 550) {

        //if hamburguer menu exists, do not create other hamburguer menu
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            for(link of arrayLinks) {
                link.remove()
            }
            return
        }

        //Create hamburguer Menu
        const divHamburguer = document.createElement('DIV')
        divHamburguer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        </svg>`
        divHamburguer.className = "hamburguer-menu"
        nav.appendChild(divHamburguer)

        //create event listener
        divHamburguer.addEventListener('click', displayMenu)

        for(link of arrayLinks) {
            link.remove()
        }

    }else if(window.innerWidth > 551) {
        //remove hamburguer menu if it exists
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            nav.firstElementChild.remove()
        }
        //Show links
        if(nav.firstElementChild)
        for(link of arrayLinks) {
            nav.appendChild(link)
        }
    }
}
window.onresize = displayMenuHamburguer_Onresize

function displayMenu() {
    contadorClick++
    //Si el modulo con numero impar, muestra. Sino, esconde
    if(contadorClick%2 !== 0) {
        for(link of arrayLinks) {
            nav.appendChild(link)
        }
    }else {
        for(link of arrayLinks) {
            link.remove()
        }
    }
}

function displayMenuHamburguer() {
    if(window.innerWidth <= 550) {
        const divHamburguer = document.createElement('DIV')
        divHamburguer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        </svg>`
        divHamburguer.className = "hamburguer-menu"
        nav.appendChild(divHamburguer)

        //create event listener
        divHamburguer.addEventListener('click', displayMenu)

        for(link of arrayLinks) {
            link.remove()
        }

    } else {
        //Muestra los links
        for(link of arrayLinks) {
            nav.appendChild(link)
        }
    }
}
displayMenuHamburguer()



document.addEventListener('resize', displayMenuHamburguer_Onresize)