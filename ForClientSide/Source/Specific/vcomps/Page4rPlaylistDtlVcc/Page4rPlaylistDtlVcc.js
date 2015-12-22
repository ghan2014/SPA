/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rPlaylistDtlVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/Page4rPlaylistDtlVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./Page4rPlaylistDtlVcc_tmplt.html");
        aa.LinkFncClass = require("./Page4rPlaylistDtlVcc_LinkFncClass.js");
        aa.CtrlClass = require("./Page4rPlaylistDtlVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'Page4rPlaylistDtlVcc';
        aa.thisMod = aa.Page4rPlaylistDtlVcc = angular.module(aa.thisModsName, []);   
             
        aa.drctName = 'drctPage4rPlaylistDtlVcc';
        aa.thisMod.directive(aa.drctName, ['$compile', createDrct]);    
    //}
//}


//    HELPERS TO BUILD MODULE'S DIRECTIVE:
//{
    
    function createDrct($compile) {
        var vv = {}
        
        //    Setup the linkFnc.
        vv.linkFnc = function(scopeNgg, elm, attr) { 
            new aa.LinkFncClass(scopeNgg, elm, attr, $compile);
        }
        //    Define injection into the Ctrl class.
        vv.controller = ['$scope', '$state', '$stateParams',  '$timeout', 'mediatorService', 'sessionService', 'stationsService', aa.CtrlClass];
        
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

