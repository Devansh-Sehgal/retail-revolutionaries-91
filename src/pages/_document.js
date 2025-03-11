
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Retail Revolutionaries - Inventory Management Solutions" />
        <meta name="author" content="Retail Revolutionaries" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
