/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ValidateConfirmPasswordAdc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr, modelNg) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;
		that.modelNg = modelNg;
		console.dog(">>> ValidateConfirmPasswordAdc_LinkFncClass: ", that);
		that._setup();
		
	};
		
	var p = LinkFncClass.prototype;
	
	p._setup = function _setup() {
		var that = this;
		that.parentScopeNg = that.scopeNg.$parent
		that._bsetValidator();
	};
	

	p.__bsetValidator = function() {
		var that = this;
		var vv = {}
		vv.matchToTagId = that.attr.drctValidateConfirmPasswordAdc;
		///alert(vv.matchToTagId)
		console.dog(">>> Validate password - modelNg: ",  that.modelNg,MyPassword, that.parentScopeNg.loc)
		
		that.modelNg.$validators.doPasswordFieldsMatch = function(value) {
			var status = false;
			var passwordField = document.getElementById("MyPassword")
			///var field02 = document.getElementById("MyPasswordConfirm")
				angular.forEach(
					'a',
					function(dontCare) {
						status = passwordField.value === that.modelNg.$$rawModelValue
						console.dog(">>> field vals: ", status, passwordField.value, that.modelNg.$$rawModelValue)
						///console.dog(">>> MATCHING",  that.parentScopeNg, that.parentScopeNg.loc.confirmPassword, that.modelNg.$$rawModelValue, that.modelNg)
						///that.parentScopeNg.doPasswordsMatch = status
						///console.dog(">>> MATCHING", pattern, value, status)
					}
				);
			return status;
		}; 
		
	};
	
	p.___bsetValidator = function() {
		var that = this;
		var vv = {}
		
        that.modelNg.$validators.testForMatch = function(thisValue) {
			vv.isMatch = (thisValue == that.scopeNg.compareToValue) ? true : false
			console.dog(">>> _bsetValidator - vv.isMatch, thisValue, compareToValue: ", vv.isMatch, thisValue, that.scopeNg.compareToValue, that.scopeNg)
			return vv.isMatch
        };

        that.scopeNg.$watch("compareToValue", function() {
          that.modelNg.$validate();
        });
		
	};
	
	
	p._bsetValidator = function() {
		var that = this;
		var vv = {}
		
		var firstPassword = '#' + that.attr.drctValidateConfirmPasswordAdc;
		that.elm.add(firstPassword).on('keyup', function () {
			that.scopeNg.$apply(function () {
				var v = that.elm.val()===$(firstPassword).val();
				that.modelNg.$setValidity('doPasswordsMatch', v);
			});
		});
	};
	

	return LinkFncClass;
	
})();
