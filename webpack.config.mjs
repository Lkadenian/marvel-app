import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, argv) => {
	const isDevelopment = argv.mode === 'development';
	return {
		entry: './src/main.tsx',
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
			!isDevelopment &&
				new MiniCssExtractPlugin({
					filename: '[name].[contenthash].css',
				}),
		].filter(Boolean),
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						isDevelopment
							? 'style-loader'
							: MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: isDevelopment
										? '[name]__[local]'
										: '[hash:base64]',
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
								name: isDevelopment
									? '[path][name].[ext]'
									: '[name].[hash].[ext]',
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
				'@domain': path.resolve(__dirname, 'src/domain/'),
				'@assets': path.resolve(__dirname, 'src/presentation/assets/'),
				'@components': path.resolve(
					__dirname,
					'src/presentation/components/',
				),
				'@layouts': path.resolve(
					__dirname,
					'src/presentation/layouts/',
				),
				'@globals': path.resolve(
					__dirname,
					'src/presentation/globals/',
				),
				'@pages': path.resolve(__dirname, 'src/presentation/pages/'),
				'@utils': path.resolve(__dirname, 'src/presentation/utils/'),
				'@context': path.resolve(__dirname, 'src/application/context/'),
				'@hooks': path.resolve(__dirname, 'src/application/hooks/'),
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
			minimize: !isDevelopment,
		},
		mode: argv.mode,
	};
};
