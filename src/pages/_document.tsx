import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {

  /**
 * Obtiene las propiedades iniciales del documento durante la renderización del servidor.
 *
 * @param {DocumentContext} ctx - Contexto del documento durante la renderización del servidor.
 * @returns {object} - Propiedades iniciales del documento.
 */
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
