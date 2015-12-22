/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PurposedPage4rStandalonesVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/PurposedPage4rStandalonesVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./PurposedPage4rStandalonesVcc_tmplt.html");
        aa.LinkFncClass = require("./PurposedPage4rStandalonesVcc_LinkFncClass.js");
        aa.CtrlClass = require("./PurposedPage4rStandalonesVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'PurposedPage4rStandalonesVcc';
        aa.thisMod = aa.PurposedPage4rStandalonesVcc = angular.module(aa.thisModsName, []);   
             
        aa.drctName = 'drctPurposedPage4rStandalonesVcc';
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
        vv.controller = ['$scope', '$state', '$stateParams', 'mediatorService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
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

