/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlaylistInfoPanelVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/PlaylistInfoPanelVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./PlaylistInfoPanelVcc_tmplt.html");
        aa.LinkFncClass = require("./PlaylistInfoPanelVcc_LinkFncClass.js");
        aa.CtrlClass = require("./PlaylistInfoPanelVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'PlaylistInfoPanelVcc';
        aa.thisMod = aa.PlaylistInfoPanelVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctPlaylistInfoPanelVcc';
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
			scope: {
				displayedPanelTitle: '@',
				playlistId: '@',
				playlistName: '@',
				stationId: '@',
				stationName: '@',
				tracksFilter: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

