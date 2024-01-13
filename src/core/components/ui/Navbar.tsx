import NextLink from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente que representa la barra de navegación superior.
 *
 * @component
 * @returns {ReactElement} - El componente Navbar.
 */
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-start px-4 py-2 bg-gray-800 text-white">
      {/* Logo de Pokémon */}
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Logo de Pokémon"
        width={70}
        height={70}
        className="mr-4"
      />

      {/* Enlace al inicio */}
      <NextLink href="/" passHref>
        <div className="link-container">
          <a className="ml-2">
            <span className="text-white text-2xl">P</span>
            <span className="text-white text-xl">okemons</span>
          </a>
        </div>
      </NextLink>

      <span className="flex-grow"></span>

      <NextLink href="/favorites" passHref>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-3xl mr-2" />
          <span className="text-white text-lg">Favoritas</span>
        </div>
      </NextLink>
    </nav>
  );
};