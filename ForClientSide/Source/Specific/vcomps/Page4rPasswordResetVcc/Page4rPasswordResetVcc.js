/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rPasswordResetVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/Page4rPasswordResetVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./Page4rPasswordResetVcc_tmplt.html");
        aa.LinkFncClass = require("./Page4rPasswordResetVcc_LinkFncClass.js");
        aa.CtrlClass = require("./Page4rPasswordResetVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'Page4rPasswordResetVcc';
        aa.thisMod = aa.PasswordResetPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctPage4rPasswordResetVcc';
        aa.drctFunc = createDrct;
        aa.thisMod.directive(aa.drctName, ['$compile', aa.drctFunc]);    
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
        vv.controller = ['$scope', '$state', '$stateParams',  '$timeout', 'mediatorService', 'membersService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            scope: {
                atrbPurposing: '@',
                goDude: '@',
            },
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
    
//}  
