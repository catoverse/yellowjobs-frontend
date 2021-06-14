const webpackConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
}

module.exports = webpackConfig
