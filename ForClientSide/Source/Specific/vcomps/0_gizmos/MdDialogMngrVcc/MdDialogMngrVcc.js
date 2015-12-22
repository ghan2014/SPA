/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MdDialogMngrVcc.js 
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/MdDialogMngrVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./MdDialogMngrVcc_tmplt.html");
        aa.LinkFncClass = require("./MdDialogMngrVcc_LinkFncClass.js");
        aa.CtrlClass = require("./MdDialogMngrVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'MdDialogMngrVcc';
        aa.thisMod = aa.MdDialogMngrVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctMdDialogMngrVcc';
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
        vv.controller = ['$scope', '$mdDialog', 'mediatorService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

