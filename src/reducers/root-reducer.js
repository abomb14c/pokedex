import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import { pokeData } from './poke-reducer'

const rootReducer = combineReducers({
  pokeData
})

export default rootReducer
