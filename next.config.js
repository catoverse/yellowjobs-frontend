const withPWA = require('next-pwa')

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
// module.exports = {
//   images: {
//     domains: ['pbs.twimg.com'],
//   },
// }
