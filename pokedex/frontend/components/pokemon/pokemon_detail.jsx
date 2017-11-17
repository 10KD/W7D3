import React from 'react';
import ItemDetail from '../items/item_detail';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    let { currentPokemon, items, pokeId } = this.props;
    if (currentPokemon === undefined || currentPokemon.item_ids === undefined) {
      return null;
    }

    return (
      <div key={pokeId}>
        <ul style={{listStyle: 'none'}}>
          {currentPokemon.name}
          <li>Type: {currentPokemon.poke_type}</li>
          <li>Attack: {currentPokemon.attack}</li>
          <li>Defense: {currentPokemon.defense}</li>
          <li>Moves: {currentPokemon.moves}</li>
          <ul>
            {currentPokemon.item_ids.map(obj =>
                <li style={{display: 'inline-block'}}><img style={{height: '200px', width: '200px'}} src={items[obj.id].image_url}/></li>
              )}

          </ul>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
