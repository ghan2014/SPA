/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ClickToMediatorAdc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 console.dog("boooooo");
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
	//}
	
	//	Equated dependencies.
	//{
		aa.LinkFncClass = require("./ClickToMediatorAdcLinkFncClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'ClickToMediatorAdc';
		aa.thisMod = aa.ClickToMediatorAdc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctClickToMediatorAdc';
		createDrct(aa.thisMod, aa.drctName);
	//}
//}


//	HELPERS TO BUILD MODULE'S DIRECTIVE:
//{

	function createDrct(module, drctName) {
		module.directive(drctName, ['mediatorService', drctFunction]);	
	}
	
	function drctFunction(mediatorService) {
		console.dog("boooooo2");
		var vv = {}
		
		// Get parts.
		//{
			vv.tmplt = aa.tmplt; 
			vv.LinkFncClass = aa.LinkFncClass;
			vv.CtrlClass = aa.CtrlClass;
		//}
		
		//	Setup the linkFnc.
		vv.linkFnc = function(scopeNgg, elm, attr) { 
			new vv.LinkFncClass(scopeNgg, elm, attr, mediatorService);
		}
		//	Define injection into the Ctrl class.
		///vv.controller = ['$scope', 'mediatorService', vv.CtrlClass];
		
		//	Return the directive's definition.
		return  {
			scope: {},
			restrict: 'A',
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};	
//}	

