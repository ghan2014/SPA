/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Button4rEmailShareVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/Button4rEmailShareVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./Button4rEmailShareVcc_tmplt.html");
        aa.LinkFncClass = require("./Button4rEmailShareVcc_LinkFncClass.js");
        aa.CtrlClass = require("./Button4rEmailShareVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'Button4rEmailShareVcc';
        aa.thisMod = aa.Button4rEmailShareVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctButton4rEmailShareVcc';
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
        vv.controller = ['$scope', '$state', '$stateParams',  '$timeout', 'mediatorService', 'stationsService', 'toolboxService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
			transclude: true,
			scope: {
				purposing: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

