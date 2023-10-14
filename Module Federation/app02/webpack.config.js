const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./main_[contenthash].js",
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "app02",
      filename: "remoteEntry.js",
      remotes: {
        app01: "app01@http://localhost:8081/remoteEntry.js",
        // utils: "utils@http://localhost:8081/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/Button",
      },
    }),
  ],
  devServer: {
    port: 8082,
  },
};
