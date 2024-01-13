import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  pokemonId: number;
}

/**
 * Componente que muestra la imagen de un Pokémon favorito y redirige a la página de detalles
 * del Pokémon al hacer clic en la imagen.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {number} props.pokemonId - ID del Pokémon cuya imagen se mostrará.
 * @returns {ReactElement} - El componente ImageFavoritoPokemon.
 */
const ImageFavoritoPokemon: React.FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  /**
   * Maneja el evento de hacer clic en la imagen para redirigir a la página de detalles del Pokémon.
   *
   * @returns {void}
   */
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <div className="w-1/2 sm:w-1/4 md:w-1/6 p-2" onClick={onFavoriteClicked}>
      <div className="cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <a className="block w-full h-48 relative">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            alt={`Pokemon ${pokemonId}`}
            layout="fill"
            objectFit="contain"
            className="w-full h-full object-cover object-center"
          />
        </a>
      </div>
    </div>
  );
}

export default ImageFavoritoPokemon;