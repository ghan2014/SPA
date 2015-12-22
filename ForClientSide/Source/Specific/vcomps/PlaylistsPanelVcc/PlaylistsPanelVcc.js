/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlaylistsPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
   
    //    Non-equated dependencies.
    //{
        require("./styles/PlaylistsPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./PlaylistsPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./PlaylistsPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./PlaylistsPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'PlaylistsPanelVcc';
        aa.thisMod = aa.PlaylistsPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctPlaylistsPanelVcc';
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

