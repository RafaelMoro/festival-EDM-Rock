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

        photosDiv.appendChild(picture)
    }
}

export default showPhotos