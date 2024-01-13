import { FC } from 'react';
import { Pokemon } from '@/core/interfaces';
import { BotonFavorito } from '.';
import { agrandarTexto } from '@/utils';

interface Props {
    pokemon: Pokemon;
}

/**
 * Componente que representa una tarjeta para mostrar detalles de un Pokémon favorito.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon a mostrar en la tarjeta.
 * @returns {ReactElement} - El componente TarjetaFavoritoPokemon.
 */
export const TarjetaFavoritoPokemon: FC<Props> = ({ pokemon }) => {
    return (
        <div className="sm:col-span-12 md:col-span-5 lg:col-span-4 relative">
            <div className="p-8 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-semibold mb-4 sm:mb-0">{agrandarTexto(pokemon.name)}</h1>
                <div className="absolute top-4 right-4 bg-white text-purple-800 p-2 rounded-full">
                    <span className="text-lg font-semibold">{pokemon.id}</span>
                </div>
                {/* Imagen del Pokémon */}
                <img
                    src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                    alt={pokemon.name}
                    className="w-full h-48 object-contain rounded-md mt-4 mx-auto"
                />
                {/* Botón para agregar/quitar de favoritos */}
                <BotonFavorito pokemon={pokemon} />
            </div>
        </div>
    );
};
