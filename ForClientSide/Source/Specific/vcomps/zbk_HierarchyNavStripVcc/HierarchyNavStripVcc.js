/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: HierarchyNavStripVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./HierarchyNavStripVccLinkStyle.css");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./HierarchyNavStripVccLinkTmplt.html");
		aa.LinkFncClass = require("./HierarchyNavStripVccLinkFncClass.js");
		aa.CtrlClass = require("./HierarchyNavStripVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'HierarchyNavStripVcc';
		aa.thisMod = aa.HierarchyNavStripVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctHierarchyNavStripVcc';
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
		vv.controller = ['$scope', '$state', '$stateParams', 'stationsService', 'toolboxService', vv.CtrlClass];
		
		//	Return the directive's definition.
		return  {
			scope: {
				goDude: '@'
			},
			restrict: 'E',
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};	
//}	

