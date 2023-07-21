const albumsContainer = document.querySelector('.albums-container')

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

const albumOne = new Album('album 1', 'artist 1', 200, true)
const albumTwo = new Album('album 2', 'artist 2', 111, false)

addalbumToLibrary(albumOne)
addalbumToLibrary(albumTwo)


for (const obj of myLibrary) {
    const albumCard = document.createElement('div')
    albumCard.textContent = obj.info();
    albumsContainer.appendChild(albumCard)
    console.log(obj.info())
}