if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script')
              ;(n.src = e), document.head.appendChild(n), (n.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`)
          return n[e]
        })
      )
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e))
    },
    n = { require: Promise.resolve(s) }
  self.define = (s, a, r) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {}
        const c = { uri: location.origin + s.slice(1) }
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case 'exports':
                return n
              case 'module':
                return c
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = r(...e)
          return n.default || (n.default = s), n
        })
      }))
  }
}
define('./sw.js', ['./workbox-e604aefe'], function (e) {
  'use strict'
  importScripts('fallback-69hvnYcDCMxo0E0t4hQGc.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/69hvnYcDCMxo0E0t4hQGc/_buildManifest.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/69hvnYcDCMxo0E0t4hQGc/_ssgManifest.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/0c428ae2-7a42212ca9628707dfe2.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/153-d7f2a583bc2218bab32d.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/1bfc9850-a0e293185e10e0363fd9.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/267-7aa4673110522da850cd.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/341-cc521c5feb750f4026e5.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/402-d1543a8a6eea048cb4e9.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/575-d7ca2386dd4f48774de7.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/d7eeaac4-852e9ea9529631e5133c.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/framework-2191d16384373197bc0a.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/main-6a8ca7ae20700a66db28.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/_app-b2f51592a77dbbf258ca.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/_offline-169e330acedc50be62a5.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/about-91d42b6792e16efaec54.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/disclaimer-f8235b14e4dc44d5a50e.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/index-0bb8143f1e756af010ad.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/search-bd8b12b99dab7f7a0d70.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/pages/verify-98fa3975db61a421e1de.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/css/34235fef1d2f93bac5e3.css',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/media/darker-grotesque-all-500-normal.606417e7cd902afeb8f631ebdad7a8b5.woff',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/media/darker-grotesque-latin-500-normal.8f1fad64da06bdfa96129f24ea038d57.woff2',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/media/darker-grotesque-latin-ext-500-normal.b968c38a6771adb849e4808f04009791.woff2',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        {
          url: '/_next/static/media/darker-grotesque-vietnamese-500-normal.59d7f850101b71550b6d1a1f631a62e7.woff2',
          revision: '69hvnYcDCMxo0E0t4hQGc',
        },
        { url: '/_offline', revision: '69hvnYcDCMxo0E0t4hQGc' },
        {
          url: '/collaborators/anshul-img.jpg',
          revision: '618e812b60174b4f1639474f26d20f3e',
        },
        {
          url: '/collaborators/apoorv-img.jpg',
          revision: '9189cda866137982b18db9b60c7d5ed4',
        },
        {
          url: '/collaborators/dev.png',
          revision: 'a132256cd9e9dfd5b2e6e60ce3b2c960',
        },
        {
          url: '/collaborators/jay-img.jpg',
          revision: '7adf3a492d178ccf0787b1d1dbf47502',
        },
        {
          url: '/collaborators/kush-img.jpg',
          revision: 'baf47f6b4ee7da6e8e63749d1f07eb00',
        },
        {
          url: '/collaborators/mohit-img.jpg',
          revision: '828d923f77202659f84c36c85e3affcf',
        },
        {
          url: '/collaborators/rahul-img.jpg',
          revision: '1de49cd753d1444b59f331ca4d7a192c',
        },
        { url: '/favicon.ico', revision: '4ec1992aa88a1bc1d7e4a9d01c9874d0' },
        { url: '/favicon.svg', revision: 'dc65bca31b4e335254929397f1621a4f' },
        { url: '/logo-192.png', revision: 'fad620c85d13efbb95fc8302c989a9cd' },
        { url: '/logo-512.png', revision: 'a8924ce713cd565b842f318ef14d6544' },
        { url: '/manifest.json', revision: '4beb172e128267a03cafc58b14452bc8' },
        {
          url: '/partners/navgurukul.png',
          revision: '549204a8eac7ffd33505299d32cc8a21',
        },
        {
          url: '/partners/pfolk.png',
          revision: 'db46f8e6105f05565d5d2203a38a50db',
        },
        {
          url: '/partners/pfolk.svg',
          revision: 'a18a63dcf165501c5cffa2cd87201c62',
        },
        {
          url: '/partners/pfolk1.png',
          revision: '806841344ed284f2a390c8fd308e4b4d',
        },
        { url: '/preview.png', revision: '3a33d5ee93fcc511c4526125995fc187' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    )
})
