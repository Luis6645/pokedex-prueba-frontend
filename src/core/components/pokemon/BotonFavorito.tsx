import { FC, useState } from 'react';
import Confetti from 'react-dom-confetti';

import { Pokemon } from '@/core/interfaces';
import { favoritosLocales } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

/**
 * Componente que representa un botón para agregar o quitar un Pokémon de favoritos.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {Pokemon} props.pokemon - Información del Pokémon asociado al botón.
 * @returns {ReactElement} - El componente BotonFavorito.
 */
export const BotonFavorito: FC<Props> = ({ pokemon }) => {
  // Estado para controlar si el Pokémon está en favoritos o no
  const [isInfavorites, setIsInfavorites] = useState(
    favoritosLocales.favoritosExisten(pokemon.id)
  );

  /**
   * Maneja el evento de hacer clic en el botón para agregar/quitar de favoritos.
   *
   * @returns {void}
   */
  const onTiggleFavorite = () => {
    favoritosLocales.favoritosLocales(pokemon.id);
    setIsInfavorites(!isInfavorites);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`${isInfavorites
          ? 'bg-gradient-to-r from-green-400 to-blue-500'
          : 'bg-purple-600 hover:bg-purple-700'
          } text-white py-2 px-6 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out`}
        onClick={onTiggleFavorite}
      >
        {isInfavorites ? '¡Ya en Favoritos!' : 'Agregar a Favoritos'}
      </button>
      <Confetti active={isInfavorites} />
    </div>
  );
};
