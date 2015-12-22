/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: HierarchyNavStripVccLinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;

	};
		
	var p = LinkFncClass.prototype;
	
	p.setup = function setup() {
		var that = this;
	};

	
	return LinkFncClass;
	
})();

