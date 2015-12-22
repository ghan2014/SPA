/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ForgotPasswordPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/ForgotPasswordPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./ForgotPasswordPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./ForgotPasswordPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./ForgotPasswordPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'ForgotPasswordPanelVcc';
        aa.thisMod = aa.ForgotPasswordPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctForgotPasswordPanelVcc';
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
        vv.controller = ['$scope', 'mediatorService', 'membersService', 'sessionService', aa.CtrlClass];
        
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

