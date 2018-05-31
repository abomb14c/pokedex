export const fetchPokemon = async () => {
    const url = 'http://localhost:3001/types'

    const response = await fetch(url)
    const data =  await response.json()
    return data
}

export const getPokemonData = async (pokemon) => {
   const pokePromises = pokemon.map (async id => {
        const url = `http://localhost:3001/pokemon/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    })
    return Promise.all(pokePromises)
}