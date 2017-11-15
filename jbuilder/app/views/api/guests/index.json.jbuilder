json.array! @guests do |guest|
  next if !(40...50).to_a.include?(guest.age)
   json.name guest.name
   json.age guest.age
   json.favorite_color guest.favorite_color
end