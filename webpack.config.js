var path = require("path"),
	ROOT_PATH = path.resolve(__dirname),// 基本路径 build
		BUILD_APTH = path.resolve(ROOT_PATH, "build"),//"../../test-release/test-pc"  //test-release path ../../test-release/test-pc/mobile
	APP_PATH = path.resolve(ROOT_PATH, "app"),
	TEM_PATH = path.resolve(APP_PATH, "templates"),
	glob = require('glob');
console.log(APP_PATH);
//添加插件
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');//自动添加css3 前缀
// require('font-awesome-webpack');

var webpackConfig = {};

/**
 * [htmls html插件集]
 * @type {[type]}
 */
var htmls = require('./htmlPlugins');

/**
 * [files 入口文件路径集]
 * @type {Array}
 */
var files = require('./entrys.js');


/**
 * [getEntries 返回入口文件集]
 * @param  {[type]} files [文件路径集]
 * @return {[type]}       [对象]
 */
function getEntries( files ) {
	var entries = {};

	files.map( function( file ) {
		var path = glob.sync(file)[0],
		pathname = path.split('/'),
		name = pathname[pathname.length - 1],
		output = pathname.slice(pathname.indexOf('app') + 1, pathname.length - 1).join('/') + '/';
		entries[ output.length <= 1 ? name.substring(0, name.length - 3) : output + name.substring(0, name.length - 3) ] = file;
	} );

	// entries['mobile/js/components/vendors'] = ['jquery'];
	return entries;
}


/**
 * [getHtmls HTML插件集]
 * @param  {[type]} files [文件路径]
 * @return {[type]}       [array]
 */
function getHtmls( files ) {

	var plugins = [],
		name = '';

	plugins.push(new ExtractTextPlugin("[name].css") );
	//TODO 开发时要注释 压缩
	// plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
	// plugins.push(new webpack.optimize.UglifyJsPlugin());
	files.map( function( file ) {
		var filepath = file.filename.split('/'),
			filename = filepath[filepath.length - 1];

		plugins.push(
			new HtmlwebpackPlugin({
				inject: true,//true
				template: path.resolve(TEM_PATH, file.filename),
				filename: file.path ? file.path + '/' + filename : filename,
				hash: true,
				xhtml: true,
				chunks: file.chunks,
				// minify: {
				// 	removeComments: true,    //移除带html的注释
				// 	collapseWhitespace: true,    //移除空格
				// 	removeAttributeQuotes: true   //移除属性的引号
				// }
			})
		);
	} );

	return plugins;
}


// module.exports = {
// 	entry: getEntries(files),
// 	output: {
// 		path: BUILD_APTH,
// 		filename:"[name].js"
// 	},
// 	//测试环境中使用
//   devtool: "eval-source-map",
// 	module: {
// 		loaders: [{
// 	      //css模块
// 	      	test: /\.css$/,
// 	      	test: /\.less$/,
// 					loader: ExtractTextPlugin.extract(
// 					// {
// 					// 	fallback: "style-loader",
// 					// 	use: [{
// 					// 		loader: "css-loader",
// 					// 		options: {
// 					// 				modules: true
// 					// 		}
// 					// 	},{
// 					// 		loader: "postcss-loader"
//           //   }]
// 					// }
// 						'style-loader', 'css-loader!postcss-loader!less-loader', 'file-loader'
// 					)
// 	    },
// 	    {
// 	      //图片模块
// 	      test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
// 	      loader: 'url-loader?limit=8000&&name=images/[name].[ext]&publicPath=/lamian/build/&outputPath=build/images'
// 	    },
// 			{
// 	    	test: /\.js|jsx$/,
// 	    	loader: "babel",
// 	    	include: APP_PATH,
// 	    }]
// 	},
// 	plugins: getHtmls(htmls),
//
// 	/*全局引用JQUERY*/
// 	resolve: {
// 		root:[],
// 		alias: {
// 			'jquery': path.resolve(ROOT_PATH, './node_modules/jquery/jquery.js')
// 		}
// 	},
// 	devServer: {
// 	    historyApiFallback: true,
// 	    hot: true,
// 	    inline: true,
// 	    progress: true
// 	}
// };
module.exports = {
    // entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    // output: {
    //   path: __dirname + "/build",
    //   filename: "bundle.js"//-[hash]版本号
    // },
    entry: getEntries(files),
    output: {
       path: BUILD_APTH,
       filename:"[name].js"
    },
    devtool: 'eval-source-map',//'eval-source-map', 开发模式
    module: {
			rules: [
			{
				test: /(\.jsx|\.js)$/,
						use: {
								loader: "babel-loader",
								options: {
										presets: [
												"es2015"
										]
								}
						},
						include: APP_PATH,
						exclude: /node_modules/
				}, {
					test: /(\.css|\.less)$/,
					use: ExtractTextPlugin.extract({
							fallback: "style-loader",
							use: [{
									loader: "css-loader",
							}, {
									loader: "postcss-loader"
							}, {
									loader: "less-loader"
							}],
					})
			},
			{
				//图片模块
				test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8000&&name=images/[name].[ext]&publicPath=/webpack/build/&outputPath=build/images'
			},
			// {// font-awesome
			// 		test: /\.(eot|svg|ttf|woff|woff2)\w*/,
			// 		loader: 'file-loader?publicPath=./build/common/&outputPath=fonts/'
			// }
			]
    },
		plugins: getHtmls(htmls),
		// plugins: [
		// 	new webpack.LoaderOptionsPlugin({
		// 		options:{
		// 			alias:{
		// 				'jquery': path.resolve(__dirname, './node_modules/jquery/dist/jquery.js')
		// 			}
		// 		}
		// 	})
		// ],
		/*全局引用JQUERY*/
		// resolve: {
		// 	alias: {
		// 		// 'jquery': path.resolve(ROOT_PATH, './node_modules/jquery/dist/jquery.js')
		// 		jquery: 'jquery/dist/jquery.min.js',
		// 	},
		// },
    // plugins: [
    //     new webpack.BannerPlugin('版权所有，翻版必究'),
    //     // new HtmlWebpackPlugin({
    //     //     template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    //     // }),
    //     // new webpack.optimize.OccurrenceOrderPlugin(),
    //     // new webpack.optimize.UglifyJsPlugin(),
    //     // new ExtractTextPlugin("style.css")
    // ],
    devServer: {
      contentBase: "./build",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
      port:8080,
    }
};
