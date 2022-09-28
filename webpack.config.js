const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

var coyprightInfo = 
`
/*!
  * LumiJS JavaScript Library
  * https://lumi.js.org
  *
  * Copyright (c) 2020 Sunay Komarla
  * Released under The MIT License (MIT)
  * https://opensource.org/licenses/MIT
  */
`;

module.exports = {
  entry: {
    "lumi": "./src/index.ts",
    "lumi.min": "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
      include: /\.min\.js$/,
    })]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: coyprightInfo,
      raw: true,
      entryOnly: true,
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "lumijs",
    umdNamedDefine: true,
    clean: true
  },
};
