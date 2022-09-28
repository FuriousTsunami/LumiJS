const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

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
      minify: TerserPlugin.uglifyJsMinify,
      include: /\.min\.js$/,
    })]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "lumijs",
    umdNamedDefine: true,
    clean: true
  },
};
