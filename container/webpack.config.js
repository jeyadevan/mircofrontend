const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode:"development",
    devServer:{
        port:8082
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'container',
            filename: 'remoteEntry.js',
            remotes: {
                product:'product@http://localhost:8080/remoteEntry.js',
                cart:'cart@http://localhost:8081/remoteEntry.js'
            }
        })
    ]
}