import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext, Head,
} from "next/document";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {
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
        <Html>
          <Head><title>gcinside</title></Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
    );
  }
}

export default MyDocument;