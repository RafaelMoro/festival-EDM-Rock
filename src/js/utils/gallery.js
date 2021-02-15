function showPhotos() {
    const photosDiv = document.querySelector('.photos')
    for(let i = 1; i<13; i++) {
        const picture = document.createElement('PICTURE')
        const source = document.createElement('SOURCE')

        picture.className = 'photo'
        source.srcset = `./biuld/img/thumb/${i}.webp`

        const image = document.createElement('IMG')
        image.dataset.src = `./biuld/img/thumb/${i}.jpg`
        image.alt = `Imagen ${i} de los artistas.`
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

export default showPhotos