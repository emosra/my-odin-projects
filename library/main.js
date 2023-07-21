const albumsContainer = document.querySelector('.albums-container')
const addAlbumForm = document.querySelector('.add-album')

let myLibrary = [];

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

    topText.textContent = artist
    middleText.textContent = album
    bottomText.textContent = runtime

    albumCard.appendChild(topText)
    albumCard.appendChild(middleText)
    albumCard.appendChild(bottomText)

    albumCard.classList.add('album')
    albumsContainer.appendChild(albumCard)
}

addAlbumForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let artist = e.target[0].value
    let album = e.target[1].value
    let runtime = e.target[2].value
    let isChecked = e.target[2].checked

    createCardElements(artist, album, runtime)
})