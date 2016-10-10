import React from 'react';
import pokeNumber from '../helper'
import Pokemon from './Pokemon'

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
    this.setState({pokemon: null});
    fetch(`${POKE_API}/api/v2/pokemon/${id}/`)
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
    const RenderItem = this.state.pokemon !== null ?
    <PokemonItem {...this.state.pokemon} image={this.state.image}/> : <Loader />
      return(
        <div className="pokedex-case">
          <div className="case-screen">
            {RenderItem}
          </div>
          <div className="case-controls">
            <form onSubmit={this.handleSubmit}>
              <input type="number" onChange={this.handleChange}/>
              <button>Find</button>
            </form>
          </div>
        </div>
      );

  }
}

const PokemonItem = (props) =>{
  return(
    <Pokemon
      name={ props.name}
      id= {props.id}
      stats= {props.stats}
      height={props.height}
      weight={props.weight}
      main_image={props.image}
      back_image= { props.sprites.back_default}
      front_image = {props.sprites.front_default}
    />
  );
}

const Loader = () =>{
  return(
    <div className="pokeball-wrapper">
      <div className="pokeball"/>
    </div>
  );
}


export default Pokedex
