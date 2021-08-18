const withPWA = require('next-pwa')
if (process.env.NEXT_PUBLIC_VERCEL_URL)
  process.env['NEXTAUTH_URL'] = 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
console.log('NEXTAUTH_URL: ', process.env.NEXTAUTH_URL)
module.exports = withPWA({
  pwa: {
    dest: 'public',
    // register: false,
    skipWaiting: false,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
})
