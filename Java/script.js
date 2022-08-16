const pokemonName = document.querySelector('.poke-nome');
const pokemonNumber = document.querySelector('.poke-num');
const pokemonImage = document.querySelector('.pokemon-imagem');
const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const btnprox = document.querySelector('.button');
const btnant = document.querySelector('.button-2');

let searchPokemon = 1;

//api//
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

//img nome num//
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id

}
//pesquisa//
form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});

//buttons//
btnprox.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon)
});

btnant.addEventListener('click', () => {
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
});
renderPokemon(searchPokemon)




