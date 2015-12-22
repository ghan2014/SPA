/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ValidatePasswordAdc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr, mediatorService, ngModel) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;
		that.ngModel = ngModel;
		that.mediatorService = mediatorService;
		console.dog(">>> ValidatePasswordAdc_LinkFncClass: ", that);
		that._setup();
		
	};
		
	var p = LinkFncClass.prototype;
	
	p._setup = function _setup() {
		var that = this;
		that._bsetRequiredPattern();
		that._bsetValidator();
	};
	
	
	p._bsetRequiredPattern = function() {
		var that = this;
		
		    
		that.REQUIRED_PATTERNS = [
			/\d+/,    	//	numeric values.
			/[a-z]+/, 	//	lowercase values.
			/[A-Z]+/, 	//	uppercase values.
			/[\W_]+/,   //	special characters including underscore.
			/^\S+/   	//	no whitespace allowed.
		];
		that.test_REQUIRED_PATTERNS = [
			/^test$/,    	//	pw should be 'test'
		];
	};
	
	p._bsetValidator = function() {
		var that = this;
		
		that.ngModel.$validators.passwordChars = function(value) {
			var status = true;
				angular.forEach(
					that.REQUIRED_PATTERNS, 
					function(pattern) {
						console.dog(">>> MATCHING", pattern, value)
						status = status && pattern.test(value);
						console.dog(">>> MATCHING", pattern, value, status)
					}
				);
			return status;
		}; 
	};
	

	return LinkFncClass;
	
})();
