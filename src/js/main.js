const nav = document.querySelector('.header__nav')
const hamburguerMenu = document.querySelector('.hamburguer-menu')
const links = document.querySelectorAll('.header__nav a')

const arrayLinks = [...links]
let contadorClick = 0

function displayMenuHamburguer_Onresize() {
    if(window.innerWidth <= 550) {

        //If the menu already exists on the navegation, do not create another one.
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            return
        }else {
            nav.appendChild(hamburguerMenu)
        }

        //create event listener
        hamburguerMenu.addEventListener('click', displayMenu)

        for(link of arrayLinks) {
            link.remove()
        }

    }else if(window.innerWidth > 551) {
        //remove hamburguer menu if it exists
        if(nav.firstElementChild.className === 'hamburguer-menu') {
            nav.firstElementChild.remove()
        }
        //Show links
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

        //create event listener
        hamburguerMenu.addEventListener('click', displayMenu)

        for(link of arrayLinks) {
            link.remove()
        }

    } else if(window.innerWidth > 551) {
        //Eliminar hamburguer menu
        hamburguerMenu.remove()

        //Muestra los links
        for(link of arrayLinks) {
            nav.appendChild(link)
        }
    }
}

displayMenuHamburguer()

function showPhotos() {
    const photosDiv = document.querySelector('.photos')
    for(let i = 1; i<13; i++) {
        const picture = document.createElement('PICTURE')
        const source = document.createElement('SOURCE')

        picture.className = 'photo'
        source.srcset = `./biuld/img/thumb/${i}.webp`

        const image = document.createElement('IMG')
        image.src = `./biuld/img/thumb/${i}.jpg`
        picture.appendChild(source)
        picture.appendChild(image)
        console.log(picture)

        photosDiv.appendChild(picture)
    }
}

showPhotos()
document.addEventListener('resize', displayMenuHamburguer_Onresize)