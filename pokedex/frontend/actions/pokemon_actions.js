export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
import { fetchAllPokemon, fetchPokemon, fetchAllItems } from '../util/api_util';

export const receiveAllPokemon = (pokemon) => (
  {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
);
export const receivePokemon = (obj) => (
  {
    type: RECEIVE_POKEMON,
    payload: obj.payload,
    id: obj.id
  }
);

export const receiveAllItems = (items) => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
export const requestPokemon = (id) => (dispatch) => (
  fetchPokemon(id).then(payload => dispatch(receivePokemon({payload, id})))
);
export const requestAllItems = () => (dispatch) => (
  fetchAllItems().then(payload => dispatch(receiveAllItems(payload)))
);
