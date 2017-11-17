import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import {requestPokemon, requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokeId: state.ui.pokeDisplay,
  currentPokemon: state.entities.pokemon[state.ui.pokeDisplay],
  items: state.entities.items,
  pokemon: state.entities.pokemon
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
  requestAllPokemon: (id) => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
