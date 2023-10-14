const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3000, // port 3001 for ikun-header
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new ModuleFederationPlugin({
      name: "HomeApp",
      filename: "remoteEntry.js",
      remotes: {
        HeaderApp: "HeaderApp@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  target: "web",
};
