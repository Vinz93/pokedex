import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon-container row'>
        <div className="col-sm-4 pokemon-preview">
          <p className="name">
            <span className="__capitalize">{this.props.name} </span>
            <span className="poke_id">#{this.props.id}</span>
          </p>
          <img src={this.props.main_image} />
        </div>
        <div className="col-sm-8 pokemon-info">
          <Stats stats={this.props.stats}
            height={this.props.height}
            weight={this.props.weight} />
          <div className="gameboy-img-wrapper">
            <img src={this.props.front_image} />
            <img src={this.props.back_image} />
          </div>
        </div>
      </div>
    );
  }
}

const Stats = (props) =>{
  return(
    <div className="poke-stats row">
      {props.stats.map((stat) =>{
        return <div className="col-sm-6" key={stat.stat.name}>  <p className="stat-title">{stat.stat.name} </p>{stat.base_stat}</div>
      })}
      <div className="col-sm-6"> <p className="stat-title">Height </p>{props.height}</div>
      <div className="col-sm-6"> <p className="stat-title">Weight </p>{props.weight}</div>
    </div>
  );
}

export default Pokemon
