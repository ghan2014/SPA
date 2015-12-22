/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: OuterHolderVccLinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr, compileNg) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;
		that.compileNg = compileNg;
		console.dog(">>> OuterHolderVccLinkFncClass. ");
		that.setup();
	};
		
	var p = LinkFncClass.prototype;
	
	p.setup = function setup() {
		var that = this;
		that._setScopeWatchers();
		
	};
	
	
	p._setClickHandler = function _setClickHandler() {
		var that = this;
		that.elm.on( 
			{ 
				'click': function handleClick_fnc(Event) {
					///console.dog(">>>");
				}
			}
		)
	};
	
	
	p._setScopeWatchers = function _setScopeWatchers() {
		var that = this;
		console.dog(">>> OuterHolderVccLinkFncClass watch 1. ");
		//--------------------------------------------------------------
		//	Watch datas.view.info.iframeSrc
		var handleScopeWatch__isOkayToShowPlayer__async = function(newVal, oldVal) {
			console.dog(">>> handleScopeWatch__isOkayToShowPlayer__async", newVal, oldVal);
			that._handleScopeWatch__isOkayToShowPlayer.call(that, newVal, oldVal)
		}
		
		that.scopeNg.$watch('sscc.ssvv.isOkayToShowPlayer', handleScopeWatch__isOkayToShowPlayer__async, true);
		console.dog(">>> OuterHolderVccLinkFncClass watch 2. ");
	}
	
	
	p._handleScopeWatch__isOkayToShowPlayer = function _handleScopeWatch__isOkayToShowPlayer(newVal, oldVal) {
		console.dog(">>> _handleScopeWatch__isOkayToShowPlayer 1. ");
		var that = this;
		that._showPlayerPanel();
	};
	
	
	p._showPlayerPanel = function _showPlayerPanel() {
		var that = this;
		console.dog(">>> _showPlayerPanel: ", that.elm[0]);
		that.compileMeElmo = $(that.elm[0].querySelector('.playerPanelWrap'));
		that.compileNg(that.compileMeElmo.contents())(that.scopeNg);
	};
	
	return LinkFncClass;
	
})();

