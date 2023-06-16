import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
		<Head>
			<meta name="description" content="this is a description" />
			<link rel="icon" href="/favicon.ico" /> 
		</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
