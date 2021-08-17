import Head from 'next/head'
import content from 'seo.config.json'

export default function NextHead({
  url = content.url,
  favicon = content.favicon,
  title = content.title,
  desc = content.desc,
  seoImage = content.seoImage,
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* <!-- primary meta tags --> */}
      <link rel="icon" type="image/svg+xml" href={favicon} />
      <meta name="google" value="notranslate" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      {/*SEO meta content */}
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      {/* PWA Tags */}
      <link rel="manifest" href="manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="YellowJobs" />
      <meta name="apple-mobile-web-app-title" content="YellowJobs" />
      <meta name="theme-color" content="#FFDD00" />
      <link rel="apple-touch-icon" href="logo-192.png" />

      {/*OG meta Tags*/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={seoImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="yellowjobs.org" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={url} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={seoImage} />
    </Head>
  )
}
