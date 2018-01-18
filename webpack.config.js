const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Webpack config
 */
module.exports = function() {
  return {
    entry: './src/index.js',
	  devServer: {
		  contentBase: [
			  './'
		  ],
		  historyApiFallback: true,
		  host: '0.0.0.0',
		  publicPath: '/dist/'
	  },
	  output: {
		  filename: 'main.js',
		  path: path.join(__dirname, 'dist'),
		  publicPath: '/dist/'
	  },
    module: {
	    loaders: [
		    {
			    test: /\.js$/,
			    exclude: /node_modules\/.*/,
			    use: ['babel-loader']
		    },
		    {
			    test: /\.svg/,
			    use: {
				    loader: 'svg-url-loader',
				    options: {}
			    }
		    },
		    {
			    test: /\.(jpg|png)$/,
			    use: 'url-loader'
		    },
		    {
			    test: /\.css$/,
			    use: [
				    'style-loader',
				    { loader: 'css-loader', options: { importLoaders: 1 } },
				    'postcss-loader'
			    ]
		    }
	    ]
    },
	  plugins: [
		  new ExtractTextPlugin("styles.css"),
	  ],
	  devtool: 'eval',
  };
};
