import { useEffect, useState } from "react"

import localFavorites from "@/utils/PokemonLocalFavoritos";
import { Layout } from "@/core/components/layouts";
import FavoritosNo from "@/core/components/ui/FavoritosNo";
import FavoritosPokemon from "@/core/components/pokemon/FavoritosPokemon";

/**
 * Página que muestra la lista de Pokémon marcados como favoritos.
 *
 * @component
 * @returns {JSX.Element} - La página FavoritesPage.
 */
const FavoritesPage = () => {
    // Estado para almacenar la lista de IDs de Pokémon favoritos.
    const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([]);

    // Efecto para cargar la lista de Pokémon favoritos al montar la página.
    useEffect(() => {
        // Obtiene la lista de IDs de Pokémon favoritos desde el almacenamiento local.
        setFavoritesPokemons(localFavorites.pokemons());
    }, [])

    return (
        // Utiliza el componente de diseño Layout y proporciona un título.
        <Layout title="Pokemons - Favorites">

            {/* Condicionalmente renderiza FavoritosNo o FavoritosPokemon según la existencia de favoritos. */}
            {favoritePokemons.length === 0
                ? (<FavoritosNo />)
                : (<FavoritosPokemon pokemons={favoritePokemons} />)
            }

        </Layout>
    )
}

export default FavoritesPage;
