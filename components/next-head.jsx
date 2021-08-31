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
              <!-- Facebook Pixel Code -->
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
       fbq('init', '388393992651714'); 
      fbq('track', 'PageView');
      </script>
      <noscript>
       <img height="1" width="1" 
      src="https://www.facebook.com/tr?id=388393992651714&ev=PageView
      &noscript=1"/>
      </noscript>
      <!-- End Facebook Pixel Code -->
    </Head>
  )
}
