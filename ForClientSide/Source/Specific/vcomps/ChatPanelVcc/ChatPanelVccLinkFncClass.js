/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ChatPanelVccLinkFncClass.js
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
		that._setup();
	};
		
	var p = LinkFncClass.prototype;
	
	p._setup = function _setup() {
		var that = this;
		that._setClickHandler();
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
		//--------------------------------------------------------------
		//	Watch datas.view.info.iframeSrc
		var handleScopeWatch__iframeSrc__async = function(newVal, oldVal) {
			that._handleScopeWatch__iframeSrc.call(that, newVal, oldVal)
		}
		that.scopeNg.$watch('datas.view.info.iframeSrc', handleScopeWatch__iframeSrc__async, true);
	}
	
	
	p._handleScopeWatch__iframeSrc = function _handleScopeWatch__iframeSrc(newVal, oldVal) {
		var that = this;
		that._addViewportIframe();
	};
	
	p._addViewportIframe = function _addViewportIframe() {
		var that = this;
		that.iframeElmo = $(that.elm[0].querySelector('.viewportIframe'));
		if  ( that.iframeElmo ) {
			that.iframeElmo.remove();
		}
		
		var displaySwitchElmo = $(that.elm[0].querySelector('.displaySwitch'));
		
		$(displaySwitchElmo).append('<iframe class="viewportIframe chatIframe" ng-src="{{datas.view.info.iframeSrc}}" scrolling="no"></iframe>');
		
		that.compileNg($(displaySwitchElmo).contents())(that.scopeNg);
	};
	
	return LinkFncClass;
	
})();

