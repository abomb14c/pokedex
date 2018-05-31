import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import PokeCard from '../../components/PokeCard/PokeCard'
import { getPokemonData } from '../../apiCall/apiCall'
import { pokeInfo }  from '../../actions/index'

class FakeContainer extends Component {

  // getPokemon = async (poketype) => {
  //   console.log(this.props)
  //   // const actualPokemon = await getPokemonData()
  //   // this.props.storePokemon(actualPokemon, poketype)
    
  // }

  displayPokemon = () => {
    return  this.props.pokeData.map(pokemon => {
        return (<PokeCard {...pokemon} />)
    })
  }

  render() {
    return (
      <div>
      {this.displayPokemon()}
      </div>
    );
  }
}

// FakeContainer.propTypes = {
//   fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

export const mapStateToProps = (state) => ({
  pokeData: state.pokeData
})

export const mapDispatchToProps = (dispatch) => ({
  storePokemon: (actualPokemon, poketype) => dispatch(pokeInfo(actualPokemon, poketype))
})

// const mapDispatchToProps = dispatch => ({ fakeAction:
//   () => dispatch(fakeAction())
// });
export default connect(mapStateToProps)(FakeContainer);
