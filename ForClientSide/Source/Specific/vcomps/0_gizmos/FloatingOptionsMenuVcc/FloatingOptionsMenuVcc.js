/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FloatingOptionsMenuVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
       require("./styles/FloatingOptionsMenuVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./FloatingOptionsMenuVcc_tmplt.html");
        aa.LinkFncClass = require("./FloatingOptionsMenuVcc_LinkFncClass.js");
        aa.CtrlClass = require("./FloatingOptionsMenuVcc_CtrlClass.js");
    //}
    ///alert(">>> aa.CtrlClass " + aa.CtrlClass )
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'FloatingOptionsMenuVcc';
        aa.thisMod = aa.FloatingOptionsMenuVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctFloatingOptionsMenuVcc';
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
        vv.controller = ['$scope', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
	transclude: true,
	scope: {
		purposing: '@',
                          purposingForShare: '@',
		goDude: '@'
	},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

