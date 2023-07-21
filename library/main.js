const albumsContainer = document.querySelector('.albums-container')
const addAlbumForm = document.querySelector('.add-album')


let myLibrary = [];
createAlbumsIndex()

function Album(title, artist, runtime, haveHeard) {
    this.title = title;
    this.artist = artist;
    this.runtime = runtime;
    this.haveHeard = haveHeard;
}

Album.prototype.info = function() {
    return `${this.title} by ${this.artist}, ${this.runtime} runtime`
}

function addalbumToLibrary(album) {
    myLibrary.push(album);
}

function createCardElements(artist, album, runtime) {
    const albumCard = document.createElement('div')
    const topText = document.createElement('h2')
    const middleText = document.createElement('p')
    const bottomText = document.createElement('p')
    const deleteBtn = document.createElement('button')

    topText.textContent = artist
    middleText.textContent = album
    bottomText.textContent = runtime
    deleteBtn.textContent = 'Delete'

    albumCard.appendChild(topText)
    albumCard.appendChild(middleText)
    albumCard.appendChild(bottomText)
    albumCard.appendChild(deleteBtn)

    albumCard.classList.add('album')
    deleteBtn.classList.add('delete-btn')
    albumsContainer.appendChild(albumCard)

    deleteBtn.addEventListener('click', (e) => {
        console.log(albumCard.getAttribute('index'))
        let itemIndex = albumCard.getAttribute('index')

        myLibrary.splice(itemIndex, 1)
        albumCard.remove()
    })
}

function createAlbumsIndex() {
    const albums = document.querySelectorAll('.album')

    albums.forEach((album, index) => {
        album.setAttribute('index', index)
    })
}

addAlbumForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let artist = e.target[0].value
    let album = e.target[1].value
    let runtime = e.target[2].value
    let isChecked = e.target[2].checked

    const newAlbum = new Album(artist, album, runtime, isChecked);
    addalbumToLibrary(newAlbum)

    createCardElements(artist, album, runtime)
    createAlbumsIndex()
})

