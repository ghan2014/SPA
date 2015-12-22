/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: LoginPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/LoginPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./LoginPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./LoginPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./LoginPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'LoginPanelVcc';
        aa.thisMod = aa.LoginPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctLoginPanelVcc';
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

