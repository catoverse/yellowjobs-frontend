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
      {/* <!-- primary meta tags --> */}
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={favicon}></link>
      <link rel="alternate icon" href="/favicon.ico" />

      {/* meta content */}
      <meta name="google" value="notranslate" />
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      {/* <!-- open graph --> */}
      <meta property="og:site_name" content="YellowJobs" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={seoImage} />

      {/* <!-- twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={seoImage}></meta>
    </Head>
  )
}
