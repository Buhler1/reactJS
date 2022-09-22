const apiKey = 'cf106b14'
const getMoviesByName = async (inputString) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${inputString}`);
    const jsonResponse = await response.json()
    console.log(jsonResponse)
}
getMoviesByName('Titanic')

const getMovieDetailsById = async (movieNameId) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieNameId}`);
    const jsonResponse = await response.json()
    console.log(jsonResponse)
}
getMovieDetailsById('tt0120338')