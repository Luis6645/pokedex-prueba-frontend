import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { agrandarTexto, obtenerInformacionPokemon } from '../../utils';
import { Layout } from '@/core/components/layouts';
import { Pokemon } from '@/core/interfaces';
import { TarjetaFavoritoPokemon, DetallesPokemon } from '@/core/components/pokemon';

interface Props {
    pokemon: Pokemon;
}

/**
 * Página que muestra detalles de un Pokémon basado en su nombre o ID.
 *
 * @component
 * @param {Props} props - Propiedades de la página.
 * @param {Pokemon} props.pokemon - Información del Pokémon a mostrar.
 * @returns {JSX.Element} - La página PokemonByNamePage.
 */
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    return (
        // Utiliza el componente de diseño Layout y proporciona un título basado en el nombre del Pokémon.
        <Layout title={agrandarTexto(pokemon.name)}>
            <div className="mt-8 grid gap-8 sm:grid-cols-12">
                {/* Muestra la tarjeta del Pokémon */}
                <TarjetaFavoritoPokemon pokemon={pokemon} />
                {/* Muestra los detalles del Pokémon */}
                <DetallesPokemon pokemon={pokemon} />
            </div>
        </Layout>
    );
};

/**
 * Función que genera las rutas estáticas para todos los Pokémon.
 *
 * @param {object} ctx - Contexto de generación de rutas estáticas.
 * @returns {object} - Rutas estáticas y configuración de fallback.
 */
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // Genera las rutas estáticas para los Pokémon del 1 al 151.
    const paths = [...Array(151)].map((_, index) => ({
        params: { id: `${index + 1}` },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}

/**
 * Función que obtiene los datos estáticos para una página dinámica de Pokémon.
 *
 * @param {object} params - Parámetros de la página dinámica.
 * @returns {object} - Propiedades para la página PokemonByNamePage.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Obtiene el ID del parámetro de la página dinámica.
    const { id } = params as { id: string };

    // Obtiene la información del Pokémon basado en el ID.

    const pokemon = await obtenerInformacionPokemon(id);

    // Si no se encuentra el Pokémon, redirige a la página principal.
    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}



export default PokemonByNamePage;