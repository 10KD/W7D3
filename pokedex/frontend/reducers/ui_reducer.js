import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const uiReducer = (state={pokeDisplay: 1, errors: {}, loading: {}}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON:
    let nextState = merge({}, state);
    nextState.pokeDisplay = action.id;
      return nextState;
    default:
      return state;
  }
};
