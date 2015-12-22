/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MenuItemsHolderWithTriggerVcc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports
 
 
//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
        require("./styles/MenuItemsHolderWithTriggerVcc_style.styl");
    //}
    
    //    Equated dependencies.
    //{
        aa.tmplt = require("./MenuItemsHolderWithTriggerVcc_tmplt.html");
        aa.LinkFncClass = require("./MenuItemsHolderWithTriggerVcc_LinkFncClass.js");
        aa.CtrlClass = require("./MenuItemsHolderWithTriggerVcc_CtrlClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'MenuItemsHolderWithTriggerVcc';
        aa.thisMod = aa.MenuItemsHolderWithTriggerVcc = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctMenuItemsHolderWithTriggerVcc';
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
        vv.controller = ['$scope', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
			transclude: true,
			scope: {
				ariaLabeling: '@',
                instanceIdfier: '@',
				goDude: '@'
			},
            restrict: 'E',
            template: aa.tmplt,
            link: vv.linkFnc,
            controller: vv.controller
        };
    };    
//}   

