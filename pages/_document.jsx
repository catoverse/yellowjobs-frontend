import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Curated remote job posts updated every 10 minutes. Across tech, design, sales, content and a lot more!"
          />

          <meta property="og:url" content="https://www.yellowjobs.org/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="YellowJobs-Helping you find your dream remote gig #remotejob"
          />
          <meta
            property="og:description"
            content="Curated remote job posts updated every 10 minutes. Across tech, design, sales, content and a lot more!"
          />
          <meta
            property="og:image"
            content="https://via.placeholder.com/300x200.png/09f/fff%20C/O%20https://placeholder.com/"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="yellowjobs.org" />
          <meta property="twitter:url" content="https://www.yellowjobs.org/" />
          <meta
            name="twitter:title"
            content="YellowJobs - Helping you find your dream remote gig #remotejob"
          />
          <meta
            name="twitter:description"
            content="Curated remote job posts updated every 10 minutes. Across tech, design, sales, content and a lot more!"
          />
          <meta
            name="twitter:image"
            content="https://via.placeholder.com/1200x630.png/09f/fff%20C/O%20https://placeholder.com/"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-N190RPEJJ1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N190RPEJJ1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
