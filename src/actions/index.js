export const fakeAction = () => ({ type: 'FAKE'})

export const pokeTypes = (pokeData) => {
   return {
        type: 'ADD_POKETYPES',
        pokeData
   }   
}