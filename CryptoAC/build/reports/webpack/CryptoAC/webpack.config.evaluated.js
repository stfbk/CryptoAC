{
  mode: 'production',
  resolve: {
    modules: [
      '/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/js/packages/CryptoAC/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/js/packages/CryptoAC/kotlin-dce/CryptoAC.js'
    ]
  },
  output: {
    path: '/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/distributions',
    filename: [Function: filename],
    library: 'CryptoAC',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}