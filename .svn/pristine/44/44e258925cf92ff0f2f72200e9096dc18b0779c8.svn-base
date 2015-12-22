/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookAuthMachineVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./FacebookAuthMachineVcc_tmplt.html");
        aa.LinkFncClass = require("./FacebookAuthMachineVcc_LinkFncClass.js");
        aa.CtrlClass = require("./FacebookAuthMachineVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'FacebookAuthMachineVcc';
        aa.thisMod = aa.FacebookAuthMachineVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctFacebookAuthMachineVcc';
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
        vv.controller = ['$scope', 'mediatorService', 'sessionService', 'usersService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
			scope: {
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

