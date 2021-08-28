if(process.env.NEXT_PUBLIC_VERCEL_ENV==="production")
  process.env['NEXTAUTH_URL'] = 'https://yellowjobs.org' 
else if(process.env.NEXT_PUBLIC_VERCEL_URL) {
  process.env['NEXTAUTH_URL'] = 'http://' + process.env.NEXT_PUBLIC_VERCEL_URL
  console.log('NEXTAUTH_URL: ', process.env.NEXTAUTH_URL)
}

const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
    // register: false,
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: false,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
})
