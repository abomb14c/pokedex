export const fetchPokemon = () => {
    const url = 'http://localhost:3001/types'

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => error)
}

