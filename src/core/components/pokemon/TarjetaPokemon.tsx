import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { PokemonTarjeta } from '@/core/interfaces';

interface Props {
  pokemon: PokemonTarjeta
}

/**
 * Componente que representa una tarjeta para mostrar detalles básicos de un Pokémon.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {PokemonTarjeta} props.pokemon - Información del Pokémon a mostrar en la tarjeta.
 * @returns {ReactElement} - El componente TarjetaPokemon.
 */
export const TarjetaPokemon: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  /**
   * Maneja el evento de hacer clic en la tarjeta para redirigir a la página de detalles del Pokémon.
   *
   * @returns {void}
   */
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4" key={pokemon.id}>
      <div
        onClick={onClick}
        className="cursor-pointer border rounded overflow-hidden shadow-md transition duration-300 transform hover:scale-105"
      >
        {/* Imagen del Pokémon */}
        <a className="block w-full h-48 relative">
          <Image
            src={pokemon.img}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            className="w-full h-full object-cover object-center"
          />
        </a>
        {/* Detalles del Pokémon */}
        <div className="p-4">
          <a className="flex justify-between items-center">
            <p className="text-lg font-medium mb-2">{pokemon.name}</p>
            <p className="text-lg">#{pokemon.id}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
