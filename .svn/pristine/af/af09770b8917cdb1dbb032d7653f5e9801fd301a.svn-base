/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookSdkVcc.js
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
        aa.tmplt = require("./FacebookSdkVcc_tmplt.html");
        aa.LinkFncClass = require("./FacebookSdkVcc_LinkFncClass.js");
        aa.CtrlClass = require("./FacebookSdkVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'FacebookSdkVcc';
        aa.thisMod = aa.FacebookSdkVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctFacebookSdkVcc';
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
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

