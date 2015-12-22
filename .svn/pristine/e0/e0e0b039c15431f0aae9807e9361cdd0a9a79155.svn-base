/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: EmailReportPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/EmailReportPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./EmailReportPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./EmailReportPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./EmailReportPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'EmailReportPanelVcc';
        aa.thisMod = aa.EmailReportPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctEmailReportPanelVcc';
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
                purposing: '@',
                goDude: '@',
            },
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
    
//}  
