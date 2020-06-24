const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: path.resolve("src"),
  mode: "development",
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.otf$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: "./static", to: "./static" }]),
    new VueLoaderPlugin(),
  ],
  entry: "./index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: "./index.html",
    port: 3000,
  },
};
