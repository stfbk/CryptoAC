let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/js/packages/CryptoAC/kotlin-dce-dev/CryptoAC.js"]
};

config.output = {
    path: "/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "CryptoAC.js"
            : "CryptoAC-[name].js";
    },
    library: "CryptoAC",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/js/packages/CryptoAC/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// scssSupport.js
config.module.rules.push({
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        },
    ],
});


// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/sberlato/Documents/gitlab/coercive/CryptoAC/CryptoAC/build/reports/webpack/CryptoAC/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
