
json.extract! @pokemon, :id, :name, :attack, :defense
json.image_url asset_path(@pokemon.image_url)
json.moves @pokemon.moves
json.poke_type @pokemon.poke_type

json.item_ids do
  json.array! @pokemon.items do |item|
    json.id item.id
  end
end
