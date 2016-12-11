/**
 * Created by dartuchiwa on 09/12/16.
 */
import webpackMerge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import commonConfig from './webpack.common.babel'
import * as helpers from './helpers'

const config = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath:'/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        port: '8080',
        host: '0.0.0.0',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 200
        },
        outputPath: helpers.root('dist')
    }
})

export default config