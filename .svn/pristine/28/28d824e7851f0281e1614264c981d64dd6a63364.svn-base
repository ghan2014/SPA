/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Header4StndUseVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//	INLINE: 
//{
	var aa = {};
	
	//	Non-equated dependencies.
	//{
		aa.style = require("./styles/Header4StndUseVcc_style.styl");
	//}
	
	//	Equated dependencies.
	//{
		aa.tmplt = require("./Header4StndUseVccLinkTmplt.html");
		aa.LinkFncClass = require("./Header4StndUseVccLinkFncClass.js");
		aa.CtrlClass = require("./Header4StndUseVccCtrlClass.js");
	//}
	
	
    //    Create module and its directive:
    //{
        aa.thisModsName = 'Header4StndUseVcc';
        aa.thisMod = aa.SlideDownVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctHeader4StndUseVcc';
        aa.thisMod.directive(aa.drctName, ['$compile', createDrct]);    
    //}
//}


//    HELPERS TO BUILD MODULE'S DIRECTIVE:
//{
    
    function createDrct($compile) {
        var vv = {}
        
        //    Setup the linkFnc.
        vv.linkFnc = function(scopeNgg, elm, attr) { 
            new aa.LinkFncClass(scopeNgg, elm, attr);
        }
        //    Define injection into the Ctrl class.
        vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}  
