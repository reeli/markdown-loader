import { Configuration } from "webpack";
import * as path from "path";

const webpackConfig: Configuration = {
  entry: path.join(__dirname, "./src/app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: path.resolve(__dirname, "./src/txt-loader.js"),
            options: {
              alias: "Tony",
            },
          },
        ],
      },
    ],
  },
  mode: "development",
};

export = webpackConfig;
