import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) => (
<Link to={`/pokemon/${pokemon.id}`}>
  <li> {pokemon.name}
    <img src={pokemon.image_url}/>
  </li>
</Link>
);
