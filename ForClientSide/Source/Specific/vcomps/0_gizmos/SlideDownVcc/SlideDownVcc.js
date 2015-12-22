/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SlideDownVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/SlideDownVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./SlideDownVcc_tmplt.html");
        aa.LinkFncClass = require("./SlideDownVcc_LinkFncClass.js");
        aa.CtrlClass = require("./SlideDownVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'SlideDownVcc';
        aa.thisMod = aa.SlideDownVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctSlideDownVcc';
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
        vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

