import { FC } from 'react';

import { Pokemon } from '@/core/interfaces';
import { agrandarTexto } from '@/utils';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que muestra las estadísticas de un Pokémon, incluyendo el nombre de la estadística,
 * una barra de progreso visual y el valor numérico base.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon cuyas estadísticas se mostrarán.
 * @returns {ReactElement} - El componente EstadisticaPokemon.
 */
export const EstadisticaPokemon: FC<Props> = ({ pokemon }) => {

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Estadísticas:</h2>
            <div className="grid grid-cols-2 gap-4">
                {pokemon.stats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-24 text-right pr-2">
                            {agrandarTexto(stat.stat.name)}:
                        </div>
                        <div className="flex items-center">
                            <div className="w-full bg-gray-300 rounded-full overflow-hidden h-5">
                                <div
                                    className="bg-gradient-to-r from-green-400 to-blue-500 h-full"
                                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                                ></div>
                            </div>
                            <span className="ml-2">{stat.base_stat}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
