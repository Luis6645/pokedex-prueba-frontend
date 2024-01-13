import { FC } from 'react';

import { Pokemon } from '@/core/interfaces';
import { EstadisticaPokemon, HabilidadesPokemon, ImagenesPokemon, TipoPokemon } from '.';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que muestra detalles específicos de un Pokémon, como descripción, tipo, habilidades,
 * imágenes y estadísticas.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon a mostrar.
 * @returns {ReactElement} - El componente DetallesPokemon.
 */
export const DetallesPokemon: FC<Props> = ({ pokemon }) => {

    return (
        <div className="sm:col-span-12 md:col-span-7 lg:col-span-8">
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-lg shadow-lg text-white">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Descripción:</h2>
                    <p>{pokemon.description}</p>
                </div>

                <div className="mb-6">
                    <div className="sm:flex inline-grid gap-2 sm:gap-[50%] ">
                        <TipoPokemon pokemon={pokemon} />
                        <HabilidadesPokemon pokemon={pokemon} />
                    </div>
                </div>

                <ImagenesPokemon pokemon={pokemon} />

                <EstadisticaPokemon pokemon={pokemon} />

            </div>
        </div>
    );
};
