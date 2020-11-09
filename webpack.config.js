
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // clean the /dist folder before each build
const HtmlWebpackPlugin = require("html-webpack-plugin"); // simplifies creation of HTML files to serve your webpack bundles names
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // to minify CSS for smaller bundle size

const devMode = process.env.NODE_ENV !== "production"

module.exports = env => {

    // Use env.<YOUR VARIABLE> here:
    console.log("Production: ", env.production); // true

    const isProduction = env.production === true;

    const commonWebpackSettings = {
        devServer: {
            contentBase: __dirname,
            historyApiFallback: true
        },
        devtool: "inline-source-map",
        entry: {
            app: "./src/index.tsx",
            // print: "./src/print.js",
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    include: path.resolve(__dirname, "src"),
                    exclude: /node_modules/,
                    // loader: "babel-loader",
                    use: {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: ["@babel/env", "@babel/preset-typescript", "@babel/react"],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-syntax-dynamic-import",
                                ["@babel/plugin-proposal-class-properties", {loose: true}]
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    ctx: {
                                        "postcss-preset-env": {},
                                        cssnano: {},
                                    }
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    loaders: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loaders: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    },
                },
                {
                    test: /\.(csv|tsv)$/,
                    use: [
                    "csv-loader",
                    ],
                },
                {
                    test: /\.xml$/,
                    use: [
                    "xml-loader",
                    ],
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    use: "source-map-loader"
                },
                {
                    enforce: "pre",
                    test: /\.ts$/,
                    use: "source-map-loader"
                }
            ],
        },
        optimization: {
            moduleIds: "hashed",
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                        vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new HtmlWebpackPlugin({
                title: "Lucy Xiao",
                template: "src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? "[name].css" : "[name].[hash].css"
            })
        ],
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
    };

    if (!isProduction) {
        commonWebpackSettings.mode = "development";
        commonWebpackSettings.output.filename = "[name].bundle.js",
        commonWebpackSettings.output.chunkFilename = "[name].bundle.js",
        commonWebpackSettings.output.path = path.resolve(__dirname, "dist"),

        commonWebpackSettings.devtool = "cheap-module-eval-source-map";

    } else {
        commonWebpackSettings.mode = "production";
        commonWebpackSettings.output.filename = "[name].[contenthash].bundle.js",
        commonWebpackSettings.output.chunkFilename = "[name].[contenthash].bundle.js",
        // commonWebpackSettings.output.path = path.resolve(__dirname, "dist"),
        commonWebpackSettings.output.path = path.resolve(__dirname, "build"),

        commonWebpackSettings.devtool = "cheap-module-eval-source-map";

    }

    return commonWebpackSettings;

}