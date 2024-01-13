import { FC } from 'react';

import { Pokemon } from '@/core/interfaces';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que muestra diferentes sprites de un Pokémon, incluyendo las vistas frontal y trasera,
 * así como las versiones shiny (brillantes).
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon cuyas imágenes se mostrarán.
 * @returns {ReactElement} - El componente ImagenesPokemon.
 */
export const ImagenesPokemon: FC<Props> = ({ pokemon }) => {

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Sprites:</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Imágenes de diferentes sprites del Pokémon */}
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-40 h-40 rounded-md mb-2 md:mb-0" />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} className="w-40 h-40 rounded-md mb-2 md:mb-0" />
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="w-40 h-40 rounded-md mb-2 md:mb-0" />
                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} className="w-40 h-40 rounded-md mb-2 md:mb-0" />
            </div>
        </div>
    );
};
