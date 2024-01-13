import { FC } from 'react';

import { Pokemon } from '@/core/interfaces';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que muestra los tipos de un Pokémon en forma de etiquetas.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon cuyos tipos se mostrarán.
 * @returns {ReactElement} - El componente TipoPokemon.
 */
export const TipoPokemon: FC<Props> = ({ pokemon }) => {

    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Tipo:</h2>
            <div className="flex gap-2">
                {pokemon.types.map((type, index) => (
                    <span
                        key={index}
                        className={`px-2 py-1 rounded-md ${type.slot === 1 ? 'bg-red-500' : 'bg-blue-500'
                            } text-white`}
                    >
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
