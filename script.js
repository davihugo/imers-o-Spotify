const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    const url = 'http://localhost:8000/artists?name_like=${searchTerm}'
    fetch(url)
        .then((response) => response.json())
        .the((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hiden');
    const artistName =document.getElementById('artist-name');
    const artistImage =document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultsArtist.classList.remove('hidden');

}

document.addEventListener('input', () => {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchInput === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})

