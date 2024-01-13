import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { TarjetaPokemon } from '.';
import { PokemonTarjeta } from '@/core/interfaces';

interface Props {
    pokemons: PokemonTarjeta[];
}

/**
 * Componente que muestra una lista de Pokémon con funcionalidad de búsqueda y paginación.
 *
 * @component
 *
 * @param {Object} props - Propiedades del componente.
 * @param {PokemonTarjeta[]} props.pokemons - Lista de Pokémon a mostrar.
 * @returns {ReactElement} - El componente ListaPokemons.
 */
const ListaPokemons: React.FC<Props> = ({ pokemons }) => {
    // Obtiene la instancia del enrutador de Next.js
    const router = useRouter();
    const { query } = router;

    // Estado para el término de búsqueda y la lista de Pokémon visible
    const initialSearchTerm = Array.isArray(query.search) ? query.search[0] : query.search;
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
    const [visiblePokemons, setVisiblePokemons] = useState<PokemonTarjeta[]>([]);
    const [visiblePokemonCount, setVisiblePokemonCount] = useState(20);

    /**
     * Maneja la búsqueda de Pokémon basada en el término proporcionado.
     *
     * @param {string} term - Término de búsqueda.
     * @returns {void}
     */
    const handleSearch = (term: string) => {
        const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(term.toLowerCase())
        );
        setVisiblePokemons(filteredPokemons.slice(0, visiblePokemonCount));
    };

    // Actualiza la lista de Pokémon visible cuando cambia el término de búsqueda o la cantidad visible
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, visiblePokemonCount]);

    // Configura el efecto para manejar cambios en la ruta (query.search)
    useEffect(() => {
        // Función para actualizar el término de búsqueda desde la ruta
        const updateSearchTerm = () => {
            const newSearchTerm = Array.isArray(query.search) ? query.search[0] : query.search;
            setSearchTerm(newSearchTerm || '');
            setVisiblePokemonCount(20);
        };

        // Actualiza el término de búsqueda inicial cuando se monta el componente
        updateSearchTerm();

        // Maneja cambios en la ruta y actualiza el término de búsqueda en consecuencia
        const handleRouteChange = () => {
            updateSearchTerm();
        };

        // Suscribe el evento 'routeChangeComplete' para activar la función handleRouteChange
        router.events.on('routeChangeComplete', handleRouteChange);

        // Desuscribe el evento 'routeChangeComplete' cuando se desmonta el componente
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [query.search]);

    /**
     * Maneja el evento de carga de más Pokémon.
     *
     * @returns {void}
     */
    const handleLoadMore = () => {
        const nextVisibleCount = visiblePokemonCount + 20;
        setVisiblePokemonCount(nextVisibleCount);
    };

    // Determina si mostrar el botón "Ver más Pokémon" en función de la cantidad visible y el total de Pokémon
    const showLoadMoreButton = visiblePokemonCount < pokemons.length;

    /**
     * Maneja cambios en la entrada de búsqueda y actualiza la URL.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en la entrada.
     * @returns {void}
     */
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        setVisiblePokemonCount(20);

        // Actualizar la URL al cambiar el término de búsqueda
        router.push({ pathname: '/', query: { search: newSearchTerm } });
    };

    return (
        <>
            {/* Entrada de búsqueda */}
            <div className="flex sm:grid justify-center mt-6">
                <input
                    type="text"
                    placeholder="Buscar Pokémon"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    className="w-full p-3 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 text-black"
                />
            </div>

            {/* Cuadrícula de tarjetas de Pokémon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {visiblePokemons.map(pokemon => (
                    <TarjetaPokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>

            {/* Botón "Ver más Pokémon" */}
            {showLoadMoreButton && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-white font-bold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
                    >
                        Ver más Pokémon
                    </button>
                </div>
            )}
        </>
    );
};

export default ListaPokemons;
