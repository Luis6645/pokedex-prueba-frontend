import React from 'react';

/**
 * Componente que se muestra cuando no hay Pokémon marcados como favoritos.
 *
 * @component
 * @returns {ReactElement} - El componente FavoritosNo.
 */
const FavoritosNo = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">No hay favoritos</h1>
            {/* Imagen de un Pokémon predeterminado cuando no hay favoritos */}
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/120.svg"
                alt="No Favorites"
                className="w-64 h-64 opacity-10"
            />
        </div>
    );
};

export default FavoritosNo;