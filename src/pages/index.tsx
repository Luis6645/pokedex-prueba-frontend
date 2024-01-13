import { GetStaticProps, NextPage } from 'next';

import pokedexApi from './api/pokedexApi';
import FavoritePokemons from '@/core/components/pokemon/ListaPokemons';
import { PokemonLista, PokemonTarjeta } from '@/core/interfaces';
import { Layout } from '@/core/components/layouts';

interface Props {
  pokemons: PokemonTarjeta[];
}

/**
 * Página de inicio que muestra el listado de Pokémon favoritos.
 *
 * @component
 * @param {Props} props - Propiedades de la página de inicio.
 * @param {PokemonTarjeta[]} props.pokemons - Listado de Pokémon en formato de tarjeta.
 * @returns {JSX.Element} - La página de inicio.
 */
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    // Utiliza el componente de diseño Layout y proporciona un título para la página de inicio.
    <Layout title="Listado de Pokémons">
      {/* Utiliza el componente FavoritePokemons para mostrar el listado de Pokémon. */}
      <FavoritePokemons pokemons={pokemons} />
    </Layout>
  );
};

/**
 * Función que obtiene los datos estáticos para la página de inicio.
 *
 * @returns {object} - Propiedades para la página de inicio.
 */
export const getStaticProps: GetStaticProps<Props> = async () => {
  // Obtiene la lista completa de Pokémon desde la API.
  const { data } = await pokedexApi.get<PokemonLista>('/pokemon?limit=-1');

  // Mapea los resultados para crear un listado de Pokémon en formato de tarjeta.
  const pokemons: PokemonTarjeta[] = data.results?.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  })) || [];

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
