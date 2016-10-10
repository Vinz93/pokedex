import React from 'react';
import pokeNumber from '../helper'
import Pokemon from './pokemon'

const POKE_API = "http://pokeapi.co";
const POKE_ASSETS = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokedex extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemon: null,
      image: "",
      id: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findPokemon = this.findPokemon.bind(this);
  }

  findPokemon(id) {
    fetch( `${POKE_API}/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((pokemon) => {
         this.setState({
           pokemon: pokemon,
           image:`${POKE_ASSETS}${pokeNumber(pokemon.id)}.png`
         })
      })
  }

  handleChange(e){
    this.setState({ id: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.findPokemon(this.state.id);
  }

  componentWillMount() {
    this.findPokemon(1);
  }

  render() {
    if(this.state.pokemon !== null){
      return(
        <div className="pokedex-container">
          <header>
            <p className="brand">Pokedex</p>
          </header>
          <div className="pokedex-case">
            <div className="case-screen">
              <Pokemon
                name={ this.state.pokemon.name}
                id= {this.state.pokemon.id}
                stats= {this.state.pokemon.stats}
                height={this.state.pokemon.height}
                weight={this.state.pokemon.weight}
                main_image={this.state.image}
                back_image= { this.state.pokemon.sprites.back_default}
                front_image = {this.state.pokemon.sprites.front_default} />
            </div>
            <div className="case-controls">
              <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange}/>
                <button>Find</button>
              </form>
            </div>
            </div>
        </div>
      );
    } else{
      return(
        <div className="pokeball-wrapper">
          <div className="pokeball"/>
        </div>
      );
    }
  }
}


export default Pokedex
