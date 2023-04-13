import Script from 'next/script'

export default function Head() {
    return (
        <>
            <title>MetroquadroImmobili.it</title>
            <meta name="description" content="Agenzia immoboliare Metro Quadro" />
            <link rel="icon" href="/favicon.ico" />

            <Script src="https://www.googletagmanager.com/gtag/js?id=G-9GD5FXLWYF" strategy="afterInteractive" />
            <Script strategy="afterInteractive">
                {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9GD5FXLWYF');
  `}
            </Script>
        </>
    )
}
