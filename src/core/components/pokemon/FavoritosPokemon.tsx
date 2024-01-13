import React from "react";
import ImageFavoritoPokemon from "./ImageFavoritoPokemon";

interface Props {
  pokemons: number[];
}

/**
 * Componente que muestra una lista de imágenes de Pokémon favoritos.
 *
 * @component
 * @param {Props} props - Propiedades del componente.
 * @param {number[]} props.pokemons - Lista de IDs de Pokémon favoritos.
 * @returns {ReactElement} - El componente FavoritosPokemon.
 */
const FavoritosPokemon: React.FC<Props> = ({ pokemons }) => {

  return (
    <div className="flex flex-wrap gap-2 sm:justify-start justify-center">
      {/* Mapea la lista de IDs de Pokémon favoritos y renderiza las imágenes correspondientes */}
      {
        pokemons.map(id => (
          <ImageFavoritoPokemon key={id} pokemonId={id} />
        ))
      }
    </div>
  );
};

export default FavoritosPokemon;