/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlayerPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./PlayerPanelVccLinkStyle.css");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./PlayerPanelVccLinkTmplt.html");
		aa.LinkFncClass = require("./PlayerPanelVccLinkFncClass.js");
		aa.CtrlClass = require("./PlayerPanelVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'PlayerPanelVcc';
		aa.thisMod = aa.PlayerPanelVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctPlayerPanelVcc';
		createDrct(aa.thisMod, aa.drctName);
	//}
//}


//	HELPERS TO BUILD MODULE'S DIRECTIVE:
//{

	function createDrct(module, drctName) {
		module.directive(drctName, ['$compile', drctFunction]);	
	}
	
	function drctFunction(compileNg) {
		var vv = {}
		
		// Get parts.
		//{
			vv.tmplt = aa.tmplt; 
			vv.LinkFncClass = aa.LinkFncClass;
			vv.CtrlClass = aa.CtrlClass;
		//}
		
		//	Setup the linkFnc.
		vv.linkFnc = function(scopeNg, elm, attr) { 
			new vv.LinkFncClass(scopeNg, elm, attr, compileNg);
		}
		
		//	Define injection into the Ctrl class.
		vv.controller = ['$scope', 'mediatorService', vv.CtrlClass];
		
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

