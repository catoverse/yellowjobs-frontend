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
      <link rel="icon" type="image/svg+xml" href={favicon} />

      {/* meta content */}
      <meta name="google" value="notranslate" />
      <meta name="title" content={title} />
      {/* <meta name="description" content={desc} /> */}

      {/* <!-- open graph --> */}
      {/* <meta property="og:site_name" content="YellowJobs" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={seoImage} /> */}

      {/* <!-- twitter --> */}
      {/* <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={seoImage}></meta> */}

      <meta
        name="description"
        content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
      />

      <meta property="og:url" content="https://www.yellowjobs.org/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="YellowJobs-Helping you find your dream remote gig #remotejob"
      />
      <meta
        property="og:description"
        content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
      />
      <meta
        property="og:image"
        content="https://www.yellowjobs.org/preview.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="yellowjobs.org" />
      <meta property="twitter:url" content="https://www.yellowjobs.org/" />
      <meta
        name="twitter:title"
        content="YellowJobs-Helping you find your dream remote gig #remotejob"
      />
      <meta
        name="twitter:description"
        content="Curated remote job posts updated every minutes. Across tech, design, sales, content and a lot more!"
      />
      <meta
        name="twitter:image"
        content="https://www.yellowjobs.org/preview.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    </Head>
  )
}
