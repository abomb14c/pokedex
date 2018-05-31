export const fakeAction = () => ({ type: 'FAKE'})

export const pokeTypes = (pokeData) => {
   return {
        type: 'ADD_POKETYPES',
        pokeData
   }   
}

export const pokeInfo = (actualPokemon, poketype) => {
    return {
         type: 'ADD_POKEINFO',
         poketype,
         actualPokemon
    }   
 }