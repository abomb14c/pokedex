import React, {Component} from 'react'
import { connect } from 'react-redux'
import './pokecard.css'
import { pokeInfo }  from '../../actions/index'
import { getPokemonData } from '../../apiCall/apiCall'

class PokeCard extends Component {


    getPokemon = async () => {
        const actualPokemon = await getPokemonData(this.props.pokeData[0].pokemon)
        this.props.storePokemon(actualPokemon, this.props.pokeData[0].name)
 
    }

    render() {
        const {name} = this.props
        return (
            <div className="poke-card" onClick={this.getPokemon()}>
    
                <h3>{name}</h3>
            </div>
        )
    }
}


export const mapStateToProps = (state) => ({
    pokeData: state.pokeData
  })

export const mapDispatchToProps = (dispatch) => ({
    storePokemon: (actualPokemon, poketype) => dispatch(pokeInfo(actualPokemon, poketype))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(PokeCard)