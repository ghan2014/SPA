/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StationsPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
   
    //    Non-equated dependencies.
    //{
        require("./styles/StationsPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./StationsPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./StationsPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./StationsPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'StationsPanelVcc';
        aa.thisMod = aa.StationsPanelVcc = angular.module(aa.thisModsName, []);
        
        aa.drctName = 'drctStationsPanelVcc';
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
        vv.controller = ['$scope', '$state', '$stateParams',  '$timeout', 'mediatorService', 'stationsService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
			scope: {
				stationsFilter: '@',
				displayedPanelTitle: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

