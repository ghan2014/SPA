/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: OuterHolderVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		require("./OuterHolderVccLinkStyle.css");
		require("./ui_states/ViewportWithPlayerUSAM/ViewportWithPlayerUSAM_baseStyle.styl");
		require("../PlayerPanelVcc/PlayerPanelVcc.js");
		
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./OuterHolderVccLinkTmplt.html");
		aa.LinkFncClass = require("./OuterHolderVccLinkFncClass.js");
		aa.CtrlClass = require("./OuterHolderVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'OuterHolderVcc';
		aa.thisMod = aa.OuterHolderVcc = angular.module(aa.thisModsName, [
			'PlayerPanelVcc'
		]);
		
		aa.drctName = 'drctOuterHolderVcc';
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
		vv.linkFnc = function(scopeNgg, elm, attr) { 
			new vv.LinkFncClass(scopeNgg, elm, attr, compileNg);
		}
		//	Define injection into the Ctrl class.
		vv.controller = ['$scope', '$state', '$stateParams', 'toolboxService', vv.CtrlClass];
		
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

