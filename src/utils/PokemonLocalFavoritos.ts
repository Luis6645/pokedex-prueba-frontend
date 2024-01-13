
/**
 * Agrega o quita un Pokémon de la lista de favoritos en el almacenamiento local.
 *
 * @param {number} id - ID del Pokémon a gestionar en la lista de favoritos.
 */
const favoritosLocales = (id: number) => {


    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        // Si el Pokémon ya está en favoritos, lo elimina.
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        // Si el Pokémon no está en favoritos, lo agrega.
        favorites.push(id);
    }


    // Guarda la lista actualizada en el almacenamiento local.
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/**
 * Verifica si un Pokémon específico existe en la lista de favoritos en el almacenamiento local.
 *
 * @param {number} id - ID del Pokémon a verificar en la lista de favoritos.
 * @returns {boolean} - Indica si el Pokémon está en la lista de favoritos.
 */
const favoritosExisten = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    // Obtiene la lista actual de favoritos desde el almacenamiento local.
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Verifica si el Pokémon específico está en la lista de favoritos.
    return favorites.includes(id);
}

/**
 * Obtiene la lista completa de ID de Pokémon almacenados como favoritos.
 *
 * @returns {number[]} - Lista de ID de Pokémon favoritos.
 */
const pokemons = (): number[] => {
    // Obtiene la lista completa de favoritos desde el almacenamiento local.
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// Exporta las funciones como un objeto para su fácil importación.
export default { favoritosExisten, favoritosLocales, pokemons };