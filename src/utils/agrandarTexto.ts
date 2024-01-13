/**
 * Función que capitaliza la primera letra de una cadena de texto.
 *
 * @param {string} name - Cadena de texto a ser capitalizada.
 * @returns {string} - Cadena de texto con la primera letra en mayúscula.
 */
export const agrandarTexto = (name: string): string => {
    // Capitaliza la primera letra y concatena el resto de la cadena.
    return name[0].toUpperCase() + name.substring(1);
};