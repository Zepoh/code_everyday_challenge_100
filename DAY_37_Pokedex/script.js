const container_carte_pokemon = document.querySelector(".carte_pokemon_container")

console.log(container_carte_pokemon);

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(result_query => console.log(result_query))


