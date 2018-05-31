import { pokeTypes } from '../actions/index'

export const pokeData = (state=[], action) => {
    switch (action.type) {
        case 'ADD_POKETYPES':
            return(action.pokeData)
        default:
            return state;
    }
}