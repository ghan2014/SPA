/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PopupWindowMakerVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/PopupWindowMakerVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./PopupWindowMakerVcc_tmplt.html");
        aa.LinkFncClass = require("./PopupWindowMakerVcc_LinkFncClass.js");
        aa.CtrlClass = require("./PopupWindowMakerVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'PopupWindowMakerVcc';
        aa.thisMod = aa.PopupWindowMakerVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctPopupWindowMakerVcc';
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
			transclude: true,
			scope: {
				displayedPanelTitle: '@',
				playlistsFilter: '@',
				stationId: '@',
				stationName: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

