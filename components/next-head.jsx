import Head from 'next/head'
import content from 'seo.config.json'
import { useRouter } from 'next/router'

export default function NextHead({
  url = content.url,
  favicon = content.favicon,
  title = content.title,
  desc = content.desc,
  seoImage = content.seoImage,
}) {
  const { query } = useRouter()

  // if (query.s) title = query.s.replaceAll(',', ' ')
  // if (query.roles) title = query.roles.replaceAll(',', ' ')
  // if (!query.types && (query.s || query.roles))
  //   title += ' Roles : YellowJobs.org'
  // else if (query.types && (query.s || query.roles)) {
  //   //convert first letter of the role to upper case
  //   //eg: 'fulltime,intership' --> 'Fulltime Internship'
  //   const temp = query.types
  //     .split(',')
  //     .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
  //     .toString()
  //     .replaceAll(',', ' ')
  //   title += ' ' + temp + ' Roles : YellowJobs.org'
  // } else if (query.types && !(query.s || query.roles)) {
  //   const temp = query.types
  //     .split(',')
  //     .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
  //     .toString()
  //     .replaceAll(',', ' ')
  //   title = 'Latest ' + temp + ' Roles : YellowJobs.org'
  // }
  var temp = ''
  if (query.roles) {
    temp = query.roles.substring(
      0,
      query.roles.indexOf(',') === -1
        ? query.roles.length
        : query.roles.indexOf(',')
    )
  } else if (query.s) {
    temp = query.s.substring(
      0,
      query.s.indexOf(',') === -1 ? query.s.length : query.s.indexOf(',')
    )
  }

  title = '  Best Remote ' + (temp || '') + ' Jobs, Gigs and Internships'
  desc =
    'YellowJobs is the best website to find your dream remote jobs, internships and freelance opportunities for ' +
    (temp || '')
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
