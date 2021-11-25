// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const root = fs.realpathSync(process.cwd());

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const cssModuleHandler = {
  loader: "css-loader",
  options: {
    modules: true,
    importLoaders: 1,
  },
};

const config = {
  entry: path.resolve(root, "./index.tsx"),
  output: {
    path: path.resolve(root, "dist"),
  },
  devtool: "source-map",
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', "postcss-loader", "sass-loader"],
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [stylesHandler, cssModuleHandler, "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', "postcss-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [stylesHandler, cssModuleHandler, "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: "errors-only",
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.entry = {
      index: path.resolve(root, "./src/index.tsx"),
    };

    config.output = {
      path: path.resolve(root, "lib"),
      filename: "[name].umd.js",
      clean: true,
      library: {
        name: "RouterConfig",
        type: "umd",
      },
    };

    config.externals = {
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React",
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "ReactDOM",
      },
      "react-router-dom": {
        commonjs: "react-router-dom",
        commonjs2: "react-router-dom",
        amd: "react-router-dom",
        root: "ReactRouterDOM",
      },
      history: {
        commonjs: "history",
        commonjs2: "history",
        amd: "history",
        root: "HistoryLibrary",
      },
    };

    config.devtool = false;

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";

    config.plugins.push(
      new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/favicon.ico",
        title: "react-router-config",
      })
    );
  }
  return config;
};
