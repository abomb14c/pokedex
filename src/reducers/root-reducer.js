import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import { pokeData, pokeInfo } from './poke-reducer'

const rootReducer = combineReducers({
  pokeData,
  pokeInfo
})

export default rootReducer
