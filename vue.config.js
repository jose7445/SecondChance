const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  /* ....shortened for brevity */

  // Compress option VI (with vue cli plugin, generator bug when invoked)
  // pluginOptions: {
  //   compression: {
  //     brotli: {
  //       filename: '[file].br[query]',
  //       algorithm: 'brotliCompress',
  //       include: /\.(js|css|html|svg|json)(\?.*)?$/i,
  //       minRatio: 0.8,
  //     },
  //     gzip: {
  //       filename: '[file].gz[query]',
  //       algorithm: 'gzip',
  //       include: /\.(js|css|html|svg|json)(\?.*)?$/i,
  //       minRatio: 0.8
  //     }
  //   }
  // },

  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));

    config.plugins.delete("prefetch");

    config.optimization.splitChunks();

    config.output.chunkFilename("[id].js");

    // The below configurations are recommeneded only in prod.
    // config.when(process.env.NODE_ENV === 'production', config => { config... })

    // Compress option VII
    // config
    // .plugin('gzip')
    // .use(CompressionWebpackPlugin, [{
    //   algorithm: 'gzip',
    //   test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
    //   threshold: 8192, // Assets larger than 8192 bytes are not processed
    //   minRatio: 0.8, // Assets compressing worse that this ratio are not processed
    // }])

    // Compress option VIII
    // config
    // .plugin('CompressionPlugin')
    // .use(CompressionWebpackPlugin)

    config.plugin("brotliCompress").use(CompressionWebpackPlugin, [
      {
        exclude: /.map$/,
        // deleteOriginalAssets: true,
        cache: true,
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      },
    ]);
  },
};
