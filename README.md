# todoApp-vue-webpack
##vue + webpack
##开发与生产环境区分
##vue css webpack分开打包
```
if(isDev) {//开发环境
  config.module.rules.push(
    {
      test: /\.styl/,
      use: [
        'style-loader',
        'css-loader',
        { //传递sourceMap
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ]
  })
  config.devtool = '#cheap-module-eval-source-map'//调试代码
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push(
    {
      test: /\.styl/,
      use: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }  
          },
          'stylus-loader'
        ]
      })
  }
  )
  config.plugins.push(
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),//vendor必须在runtime前面否则无效
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}
```

