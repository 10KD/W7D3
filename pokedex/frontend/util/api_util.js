export const fetchAllPokemon = () => (
  $.ajax({
    type: 'GET',
    url: '/api/pokemon',
    dataType: 'json'
  })
);
