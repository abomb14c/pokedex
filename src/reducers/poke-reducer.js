
export const pokeData = (state=[], action) => {
    switch (action.type) {
        case 'ADD_POKETYPES':
            return action.pokeData
        default:
            return state;
    }
}

export const pokeInfo = (state={}, action) => {
    switch (action.type) {
        case 'ADD_POKEINFO':
            return { ...state, [action.poketype]: action.actualPokemon }
        default:
            return state;
    }
}
