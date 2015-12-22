/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ChatPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./ChatPanelVccLinkStyle.css");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./ChatPanelVccLinkTmplt.html");
		aa.LinkFncClass = require("./ChatPanelVccLinkFncClass.js");
		aa.CtrlClass = require("./ChatPanelVccCtrlClass.js");
	//}
	
	
	//	Create module and its directive:
	//{
		aa.thisModsName = 'ChatPanelVcc';
		aa.thisMod = aa.ChatPanelVcc = angular.module(aa.thisModsName, [
		]);
		
		aa.drctName = 'drctChatPanelVcc';
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
		vv.controller = ['$scope', '$state', '$stateParams', vv.CtrlClass];
		
		//	Return the directive's definition.
		return  {
			scope: {
				atrbChannelId: '@',
				atrbUserDisplayName: '@'	
			},
			restrict: 'E',
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};	
//}	
