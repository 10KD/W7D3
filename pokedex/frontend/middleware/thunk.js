const thunkMiddleware = ( { getState, dispatch } ) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  } else {
    return next(action);
  }
};

export default thunkMiddleware;