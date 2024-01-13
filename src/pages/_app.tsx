import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Componente principal de la aplicación que envuelve todas las páginas.
 *
 * @component
 * @param {AppProps} props - Propiedades del componente principal.
 * @param {React.ComponentType} props.Component - Página actual a renderizar.
 * @param {object} props.pageProps - Propiedades de la página actual.
 * @returns {JSX.Element} - La aplicación principal.
 */
export default function App({ Component, pageProps }: AppProps) {
  // Envuelve la aplicación en un contenedor con la clase 'dark' para aplicar estilos oscuros.
  return <div className="dark"><Component {...pageProps} /></div>;
}
