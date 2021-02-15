function showPhotos() {
    const photosDiv = document.querySelector('.photos')
    for(let i = 1; i<13; i++) {
        const picture = document.createElement('PICTURE')
        const source = document.createElement('SOURCE')

        picture.className = 'photo'
        source.srcset = `./biuld/img/thumb/${i}.webp`

        const image = document.createElement('IMG')
        image.dataset.src = `./biuld/img/thumb/${i}.jpg`
        image.dataset.id = i
        image.alt = `Imagen ${i} de los artistas.`
        if(window.innerWidth >= 768) {
            image.onclick = showBigImage
         }
        registerImage(image)
        picture.appendChild(source)
        picture.appendChild(image)

        photosDiv.appendChild(picture)
    }
}

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const image = entry.target
    const url = image.dataset.src
    image.src = url
    observer.unobserve(image)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})

const registerImage = (image) => {
    observer.observe(image)
}

function showBigImage(evento) {
    let id = evento.target.dataset.id
    id = parseInt(id)

    //Crear imagen
    const picture = document.createElement('PICTURE')
    const source = document.createElement('SOURCE')
    source.srcset = `./biuld/img/grande/${id}.webp`
    const image = document.createElement('img')
    image.src = `biuld/img/grande/${id}.jpg`
    picture.appendChild(source)
    picture.appendChild(image)

    //Boton cerrar imagen
    const closeImage = document.createElement('p')
    closeImage.textContent = 'X'
    closeImage.className = 'btn-cerrar'

    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    overlay.appendChild(picture)
    overlay.appendChild(closeImage)

    setTimeout(() => {
        overlay.classList.add('active')
        image.classList.add('active')
        closeImage.classList.add('active')
    }, 500)

    //Evento de cerrar overlay
    closeImage.onclick = () => {
        overlay.remove()
        body.classList.remove('active')
    }
    overlay.onclick = function() {
        overlay.remove()
        body.classList.remove('active')
    }

    //Mostrar HTML
    const body = document.querySelector('body')
    body.appendChild(overlay)
    //Añadir clase de fijar body
    body.classList.add('active')
}

export default showPhotos