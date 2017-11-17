export const fetchAllPokemon = () => (
  $.ajax({
    type: 'GET',
    url: '/api/pokemon',
    dataType: 'json'
  })
);
export const fetchPokemon = (id) => (
  $.ajax({
    type: 'GET',
    url: `/api/pokemon/${id}`,
    dataType: 'json'
  })
);

export const fetchAllItems = () => (
  $.ajax({
    type: 'GET',
    url: '/api/items',
    dataType: 'json'
  })
);
