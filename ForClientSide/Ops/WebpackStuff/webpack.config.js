var nib = require('../NodeModules/node_modules/nib');
var path = require('path');
console.log(path);
module.exports = {
    entry: "./EntryForLive05.js",
    output: {
        path: __dirname,
        filename: "../../DeployPkg/Assets/Bundles/bundle_app.js"
    },
	resolve: {
        root: "/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules"
    },
	resolveLoader: {
        root: "/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules"
    },
    module: {
        loaders: [
            { test: /\.css$/i, loader: "style-loader" },
            { test: /\.css$/i, loader: "css-loader" },
            
            { test: /\.styl$/i, loader: "style-loader" },
            { test: /\.styl$/i, loader: "css-loader" },
            { test: /\.styl$/i, loader: "stylus-loader" },
            
            { test: /\.html$/i, loader: "html-loader" },
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					loose: "all",
					optional: ['runtime' /*, 'asyncToGenerator'*/],
					stage: 0
				}
			}
        ]
    },
	stylus: {
	  sourcemap: true,
	  use: [nib()],
	  import: ['nib']
	}
};


/*
module.exports = {
    entry: {
        app: "./specific_REPO/env_angular/vcomp_sys_extended/implementation/vcomps/vcomps_concrete_by_page/AppVcc/AppVcc.js",
        home: "./specific_REPO/env_angular/vcomp_sys_extended/implementation/vcomps/vcomps_concrete_by_page/Page4HomeVcc/Page4HomeVcc.js",
        station: "./specific_REPO/env_angular/vcomp_sys_extended/implementation/vcomps/vcomps_concrete_by_page/Page4StationDtlVcc/Page4StationDtlVcc.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    },
    module: {
        loaders: [
            { test: /\.css$/i, loader: "style!css" },
            { test: /\.html$/i, loader: "html" }
        ]
    }
};
*/
