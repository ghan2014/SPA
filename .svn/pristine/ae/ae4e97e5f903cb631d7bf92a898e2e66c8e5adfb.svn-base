/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: TestItVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.s
	//{
		require("./TestItVccLinkStyle.css");
		///require("../StationListings4rTopVcc/StationListings4rTopVcc.js");
		///require("../StationListings4rRecentVcc/StationListings4rRecentVcc.js");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./TestItVccLinkTmplt.html");
		aa.LinkFncClass = require("./TestItVccLinkFncClass.js");
		aa.CtrlClass = require("./TestItVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'TestItVcc';
		aa.thisMod = aa.TestItVcc = angular.module(aa.thisModsName, [
			///'StationListings4rTopVcc',
			///'StationListings4rRecentVcc'
		]);
		
		aa.drctName = 'drctTestItVcc';
		createDrct(aa.thisMod, aa.drctName);
	//}
//}


//	HELPERS TO BUILD MODULE'S DIRECTIVE:
//{

	function createDrct(module, drctName) {
		module.directive(drctName, ['$compile', drctFunction]);	
	}
	
	function drctFunction($compile) {
		var vv = {}
		
		// Get parts.
		//{
			vv.tmplt = aa.tmplt; 
			vv.LinkFncClass = aa.LinkFncClass;
			vv.CtrlClass = aa.CtrlClass;
		//}
		
		//	Setup the linkFnc.
		vv.linkFnc = function(scopeNgg, elm, attr) { 
			new vv.LinkFncClass(scopeNgg, elm, attr);
		}
		//	Define injection into the Ctrl class.
		vv.controller = ['$scope', vv.CtrlClass];
		
		//	Return the directive's definition.
		return  {
			scope: {
				atrbPanelDisplayedTitle: '@',
				atrbUse: '@'
			},
			restrict: 'EC',
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};	
//}	

