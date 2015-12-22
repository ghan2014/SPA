/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SignupCorePanelVcc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;
		that.setup();
	};
		
	var p = LinkFncClass.prototype;
	
	p.setup = function setup() {
		var that = this;
		that.setClickHandler();
	};
	
	p.setClickHandler = function setClickHandler() {
		var that = this;
		that.elm.on( 
			{ 
				'click': function handleClick_fnc(Event) {
					///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);
				}
			}
		)
	};
	
	return LinkFncClass;
	
})();

