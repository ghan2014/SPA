/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: EmailSharePanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/EmailSharePanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./EmailSharePanelVcc_tmplt.html");
        aa.LinkFncClass = require("./EmailSharePanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./EmailSharePanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'EmailSharePanelVcc';
        aa.thisMod = aa.EmailSharePanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctEmailSharePanelVcc';
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
        /// vv.controller = ['$scope', aa.CtrlClass];
        vv.controller = ['$scope', '$state', '$stateParams',  '$timeout', 'mediatorService', 'stationsService', 'toolboxService', 'noticesByEmailService', aa.CtrlClass];
        
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
