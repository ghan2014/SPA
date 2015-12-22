/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rEmailValidationVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/Page4rEmailValidationVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./Page4rEmailValidationVcc_tmplt.html");
        aa.LinkFncClass = require("./Page4rEmailValidationVcc_LinkFncClass.js");
        aa.CtrlClass = require("./Page4rEmailValidationVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'Page4rEmailValidationVcc';
        aa.thisMod = aa.Page4rEmailValidationVcc = angular.module(aa.thisModsName, []);   
             
        aa.drctName = 'drctPage4rEmailValidationVcc';
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
        vv.controller = ['$scope', '$location', '$state', '$stateParams', '$timeout', 'mediatorService', aa.CtrlClass];
        
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

