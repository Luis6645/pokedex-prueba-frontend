import { Pokemon } from "@/core/interfaces";
import pokedexApi from "@/pages/api/pokedexApi";

/**
 * Función asincrónica que obtiene información detallada de un Pokémon mediante su nombre o ID.
 *
 * @param {string} nameOrId - Nombre o ID del Pokémon a buscar.
 * @returns {Promise<Pokemon | null>} - Objeto con la información del Pokémon o null si no se encuentra.
 */
export const obtenerInformacionPokemon = async (nameOrId: string) => {
    try {
        // Obtiene los datos principales del Pokémon.
        const { data } = await pokedexApi.get<Pokemon>(`/pokemon/${nameOrId.toLowerCase()}`);

        // Obtiene información adicional de la especie del Pokémon para obtener la descripción en español.
        const speciesResponse = await pokedexApi.get<any>(data.species.url);
        const description = speciesResponse.data.flavor_text_entries.find(
            (entry: any) => entry.language.name === 'es' // Ajusta el idioma según tus necesidades
        )?.flavor_text;

        // Construye y retorna el objeto de información del Pokémon.
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            types: data.types,
            abilities: data.abilities,
            stats: data.stats,
            description: description || 'No hay descripción disponible.',
        }
    } catch (err) {
        return null;
    }
}
