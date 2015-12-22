/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Footer4StndUseVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./styles/Footer4StndUseVcc_style.styl");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./Footer4StndUseVccLinkTmplt.html");
		aa.LinkFncClass = require("./Footer4StndUseVccLinkFncClass.js");
		aa.CtrlClass = require("./Footer4StndUseVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'Footer4StndUseVcc';
		aa.thisMod = aa.Footer4StndUseVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctFooter4StndUseVcc';
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

