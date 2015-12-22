/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PopupWindowMakerVcc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr, compileNg) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elmo = elm;
		that.attr = attr;
		that.compileNg = compileNg;
		that._setup();
	};
		
	var p = LinkFncClass.prototype;
	
	
	//	================================================================
	//	THISC PUBLIC/PRIVATE METHODS:
	//{

	//}
	

	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function _setup() {
			var that = this;
			///that._thiscifyMethods()
			///that.scopeNg.thisc.thislf = that;
		};
		
		p._thiscifyMethods = function() {
			/*
			 * Aliasing method into the thisc scope makes them available to ctrl and outside.
			 */
			var that = this;
			that.scopeNg.thisc.openWindow = that.openWindow;
		}
		

	
	//}

	return LinkFncClass;
	
})();