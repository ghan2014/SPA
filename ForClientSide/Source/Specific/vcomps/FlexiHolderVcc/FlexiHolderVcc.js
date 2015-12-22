/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FlexiHolderVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		require("./FlexiHolderVcc_style.css");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./FlexiHolderVcc_tmplt.html");
		aa.LinkFncClass = require("./FlexiHolderVcc_LinkFncClass.js");
		aa.CtrlClass = require("./FlexiHolderVcc_CtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'FlexiHolderVcc';
		aa.thisMod = aa.FlexiHolderVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctFlexiHolderVcc';
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

