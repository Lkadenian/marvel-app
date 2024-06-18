const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development';
	return {
		entry: './src/index.tsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/',
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
						{
							loader: 'style-loader',
							options: {
								esModule: false,
							},
						},
						{
							loader: 'css-loader',
							options: {
								esModule: false,
								modules: {},
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
			alias: {
				'@assets': path.resolve(__dirname, 'src/presentation/assets/'),
				'@components': path.resolve(
					__dirname,
					'src/presentation/components/',
				),
				'@layouts': path.resolve(
					__dirname,
					'src/presentation/layouts/',
				),
				'@hooks': path.resolve(__dirname, 'src/presentation/hooks/'),
				'@globals': path.resolve(
					__dirname,
					'src/presentation/globals/',
				),
				'@pages': path.resolve(__dirname, 'src/presentation/pages/'),
				'@utils': path.resolve(__dirname, 'src/presentation/utils/'),
				'@context': path.resolve(__dirname, 'src/context/'),
				'@mappers': path.resolve(
					__dirname,
					'src/infrastructure/mappers/',
				),
				'@infrastructure': path.resolve(
					__dirname,
					'src/infrastructure/',
				),
			},
		},
		devServer: {
			port: 9000,
			historyApiFallback: true,
		},
		optimization: {
			minimize: !isDevelopment, // disable minification in development mode
		},
	};
};
