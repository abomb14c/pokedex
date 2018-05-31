import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
// import { fetchPokemon } from '../../apiCall/apiCall'
import { pokeTypes } from '../../actions/index'
import icon from '../../assets/pikachu.gif'
class App extends Component {
  constructor(props){
    super(props)
  }



  componentDidMount () {
    const url = 'http://localhost:3001/types'
    const pokeData =
      fetch(url)
        .then(response => response.json())
        .then(data => this.props.pokeDataDispatch(data))
        .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <div>
          {!this.props.pokeData &&
          <img src={icon}></img>
          }
        </div>
        <FakeContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  pokeData: state.pokeData
})

export const mapDispatchToProps = (dispatch) => ({
  pokeDataDispatch: (pokeData) => dispatch(pokeTypes(pokeData))
})

export default connect(null, mapDispatchToProps)(App);
