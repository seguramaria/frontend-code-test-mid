import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://static.octopuscdn.com/fonts/Gotham/fonts.min.css"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://static.octopuscdn.com/favicons/favicon-32x32.png"
            sizes="32x32"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
