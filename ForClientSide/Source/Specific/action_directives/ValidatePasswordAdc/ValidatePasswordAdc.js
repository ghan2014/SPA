/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ValidatePasswordAdc.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports


//    INLINE: 
//{
    var aa = {};
    
    //    Non-equated dependencies.
    //{
    //}
    
    //    Equated dependencies.
    //{
        aa.LinkFncClass = require("./ValidatePasswordAdc_LinkFncClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'ValidatePasswordAdc';
        aa.thisMod = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctValidatePasswordAdc';
        aa.thisMod.directive(aa.drctName, ['$compile', 'mediatorService', createDrct]);    
    //}
//}


//    HELPERS TO BUILD MODULE'S DIRECTIVE:
//{
    
    function createDrct($compile, mediatorService) {
        var vv = {}
        //    Setup the linkFnc.
        vv.linkFnc = function(scopeNg, elm, attr, ngModel) { 
			console.dog(">>> ValidatePasswordAdc - ", mediatorService);
            new aa.LinkFncClass(scopeNg, elm, attr, mediatorService, ngModel);
        }
        //    Define injection into the Ctrl class.
        ///vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            restrict: 'A',
            ///template: aa.tmplt,
            require: 'ngModel',
            link: vv.linkFnc
            ///controller: vv.controller
        };
    };    
//} 
