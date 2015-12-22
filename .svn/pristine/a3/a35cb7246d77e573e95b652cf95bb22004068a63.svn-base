/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlayButtonVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/PlayButtonVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./PlayButtonVcc_tmplt.html");
        aa.LinkFncClass = require("./PlayButtonVcc_LinkFncClass.js");
        aa.CtrlClass = require("./PlayButtonVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'PlayButtonVcc';
        aa.thisMod = aa.PlayButtonVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctPlayButtonVcc';
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
				ariaLabeling: '@',
                instanceIdfier: '@',
                playlistId: '@',
				stationId: '@',
				trackId: '@',
				trackUid: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

