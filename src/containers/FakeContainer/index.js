import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import {PokeCard} from '../../components/PokeCard/PokeCard'

class FakeContainer extends Component {

  displayPokemon = () => {
    const displayCards = this.props.pokeData.map(pokemon => {
      console.log(pokemon)
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

// const mapDispatchToProps = dispatch => ({ fakeAction:
//   () => dispatch(fakeAction())
// });
export default connect(mapStateToProps)(FakeContainer);
