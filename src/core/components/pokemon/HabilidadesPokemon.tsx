import { FC } from 'react';

import { Pokemon } from '@/core/interfaces';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que muestra las habilidades de un Pokémon en forma de lista.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon cuyas habilidades se mostrarán.
 * @returns {ReactElement} - El componente HabilidadesPokemon.
 */
export const HabilidadesPokemon: FC<Props> = ({ pokemon }) => {

    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Habilidades:</h2>
            <ul>
                {/* Mapea la lista de habilidades del Pokémon y renderiza cada una como un elemento de lista */}
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
};
