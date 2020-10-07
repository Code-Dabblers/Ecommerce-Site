const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/JavaScript/index.js",
  output: {
    filename: "[name].[contentHash]].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, //4. Extract css into files
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          }, //3. Turns css into commonjs
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", "cssnano"],
              },
            },
          }, //2. autofixer used and remove the unused css
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
