const path = require('path')

module.exports = {
    mode:"development",
    entry:path.join(__dirname, '../src/client/index.tsx'),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname, '../dist')
    },
    module:{
        rules: [
            {
                test: /\.ts(x)?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    resolve: {
        extensions: [".ts",".tsx",".js",".jsx",".json"]
    }
}