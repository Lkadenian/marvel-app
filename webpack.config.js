const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			filename: 'index.html',
		}),
		new Dotenv(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[name]',
							},
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	devServer: {
		port: 9000,
	},
};
