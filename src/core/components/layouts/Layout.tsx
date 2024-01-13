import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Navbar } from "../ui";


interface Props {
    title?: string;
}

/**
 * Componente de diseño que establece la estructura general de la página.
 *
 * @component
 * @param {PropsWithChildren<Props>} props - Propiedades del componente, puede contener un título opcional y elementos secundarios.
 * @param {string} props.title - Título de la página, opcional.
 * @returns {ReactElement} - El componente Layout que estructura la página.
 */
export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    return (
        <>
            {/* Configuración de la cabeza de la página con metadatos y título */}
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Luis Vásconez" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            </Head>

            {/* Barra de navegación */}
            <Navbar />

            {/* Contenido principal */}
            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
