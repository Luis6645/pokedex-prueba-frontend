import axios from 'axios';

// Crea una instancia de Axios para interactuar con la API de PokeAPI.
const pokedexApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokedexApi;