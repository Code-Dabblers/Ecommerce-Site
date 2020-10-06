var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/JavaScript/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/svgs/app-logo.svg",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
};
