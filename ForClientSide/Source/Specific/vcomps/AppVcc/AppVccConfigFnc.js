/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVccConfigFnc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
	function configFnc(LocationProvider, ResourceProvider, SceDelegateProvider, StateProvider, UrlRouterProvider, RouterProvider) {
		var cc = {};
		
		LocationProvider
			.html5Mode(false)
			.hashPrefix('!');
			
		// use the HTML5 History API
        LocationProvider.html5Mode(true);

		cc.Router = RouterProvider.getRouter(StateProvider, UrlRouterProvider);
		
		// Don't strip trailing slashes from calculated URLs
		ResourceProvider.defaults.stripTrailingSlashes = false;	
		
		// Execute settting of routes.
		cc.Router.setRoutes();
		
		//	Whitelist/permit access to certain sites.
		SceDelegateProvider.resourceUrlWhitelist([
		   'self',
		   "http://pi-web01.nanocosm.com**",
		   "http://lm-www.nanocosm.com**"
		]);
		

	}
	
	return configFnc;
})();

