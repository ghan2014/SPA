/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: LastPlayedPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./LastPlayedPanelVccLinkStyle.css");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./LastPlayedPanelVccLinkTmplt.html");
		aa.LinkFncClass = require("./LastPlayedPanelVccLinkFncClass.js");
		aa.CtrlClass = require("./LastPlayedPanelVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'LastPlayedPanelVcc';
		aa.thisMod = aa.LastPlayedPanelVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctLastPlayedPanelVcc';
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
			scope: {},
			restrict: 'E',
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};	
//}	

