/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookLoginButtonVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/FacebookLoginButtonVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./FacebookLoginButtonVcc_tmplt.html");
        aa.LinkFncClass = require("./FacebookLoginButtonVcc_LinkFncClass.js");
        aa.CtrlClass = require("./FacebookLoginButtonVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'FacebookLoginButtonVcc';
        aa.thisMod = aa.FacebookLoginButtonVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctFacebookLoginButtonVcc';
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
        vv.controller = ['$scope', 'mediatorService', 'accessService', 'sessionService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
			scope: {
				atrbHandoffSpecId: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

