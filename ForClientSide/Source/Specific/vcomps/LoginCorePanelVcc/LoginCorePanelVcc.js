/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: LoginCorePanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/LoginCorePanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./LoginCorePanelVcc_tmplt.html");
        aa.LinkFncClass = require("./LoginCorePanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./LoginCorePanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'LoginCorePanelVcc';
        aa.thisMod = aa.LoginCorePanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctLoginCorePanelVcc';
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
			scope: {
				atrbHandoffSpecId: '@',
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

