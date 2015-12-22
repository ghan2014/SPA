/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ValidateConfirmPasswordAdc.js
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
        aa.LinkFncClass = require("./ValidateConfirmPasswordAdc_LinkFncClass.js");
    //}
    
    
    //    Create module and its directive:
    //{
        aa.thisModsName = 'ValidateConfirmPasswordAdc';
        aa.thisMod = angular.module(aa.thisModsName, [
        ]);
        
        aa.drctName = 'drctValidateConfirmPasswordAdc';
        aa.thisMod.directive(aa.drctName, ['$compile',  createDrct]);    
    //}
//}


//    HELPERS TO BUILD MODULE'S DIRECTIVE:
//{
    
    function createDrct($compile, mediatorService) {
        var vv = {}
        //    Setup the linkFnc.
        vv.linkFnc = function(scopeNg, elm, attr,  ngModel) { 
			console.dog(">>> ValidateConfirmPasswordAdc being built - ngModel: ", ngModel);
            new aa.LinkFncClass(scopeNg, elm, attr, ngModel);
        }
        //    Define injection into the Ctrl class.
        ///vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];
        
        //    Return the directive's definition.
        return  {
            restrict: 'A',
            scope: {
				compareToValue: "=compareTo"
			},
            require: 'ngModel',
            link: vv.linkFnc
            ///controller: vv.controller
        };
    };    
//} 
