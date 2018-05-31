import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
// import { fetchPokemon } from '../../apiCall/apiCall'
import { pokeTypes } from '../../actions/index'

class App extends Component {
  constructor(props){
    super(props)
  }



  componentDidMount () {
    const url = 'http://localhost:3001/types'

    const pokeData =
      fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error)
    this.props.pokeDataDispatch(pokeData)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  pokeDataDispatch: (pokeData) => dispatch(pokeTypes(pokeData))
})

export default connect(null, mapDispatchToProps)(App);
