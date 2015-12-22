/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlayerPanelVccLinkFncClass.js
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
		var vv = {}
		
		if ( ! that.scopeNg.thisc._getIsPlayerInFrame() ) {
			that.iframeElmo = $(that.elm[0].querySelector('.viewportIframe'));
			if  ( that.iframeElmo ) {
				that.iframeElmo.remove();
			}
			
			vv.displaySwitchElmo = $(that.elm[0].querySelector('.displaySwitch'));
			
			vv.displaySwitchElmo.append('<iframe class="PlayerIframe viewportIframe" ng-src="{{datas.view.info.iframeSrc}}" scrolling="no"></iframe>');
			
			vv.iframeElmo = $(that.elm[0].querySelector('.PlayerIframe'));
			
			vv.onloadHandler = function() {
				that.scopeNg.isPlayerInFrame = true;
				that.scopeNg.$apply();
				///that.scopeNg.thisc._announcePlayerPanelWantsPlay("PlayerPanelVccLinkFncClass._addViewportIframe");
			};
			
			vv.iframeElmo.on("load",  vv.onloadHandler);
		
			that.compileNg(vv.displaySwitchElmo.contents())(that.scopeNg);
		}
	};
	
	return LinkFncClass;
	
})();

