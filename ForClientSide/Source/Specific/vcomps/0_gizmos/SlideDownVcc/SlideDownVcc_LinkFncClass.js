/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SlideDownVcc_LinkFncClass.js
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
	//	THISC PUBLIC METHODS:
	//{
		p.loadAndOpenPanel = async function(drctName, handoffSpecId) {
			console.dog(">>> loadAndOpenPanel - handoffSpecId: ", handoffSpecId);
			var that = this;
			var vv = {}
			var thatlf = that.scopeNg.thisc.thislf
			
			try {
				//{ Open panel (async wait)
					vv.promiseA1 = that._loadAndOpenPanel.call(thatlf, drctName, handoffSpecId);
					vv.panelState = await vv.promiseA1;
					return vv.panelState;
				//}	
			}
			catch(err) {
				err.panelState = undefined;
				err.panelState = vv.panelState;
				err.returnPoint = "loadAndOpenPanel-A";
				return err
			}		
		}
		
		p.unloadAndClosePanel = async function() {
			console.dog(">>> unloadAndClosePanel");
			var that = this;
			var vv = {}
			var thatlf = that.scopeNg.thisc.thislf
			
			try {
				//{ Open panel (async wait)
					vv.promiseA1 = that._unloadAndClosePanel.call(thatlf);
					vv.panelState = await vv.promiseA1;
					return vv.panelState;
				//}	
			}
			catch(err) {
				err.panelState = undefined;
				err.panelState = vv.panelState;
				err.returnPoint = "unloadAndClosePanel-A";
				return err
			}		
		}
	//}
	

	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function _setup() {
			var that = this;
			that._thiscifyMethods()
			that._setClickHandler();
			that._setTransitionendHandlers();
			that.scopeNg.thisc.thislf = that;
			///that._setScopeWatchers();
		};
		
		p._thiscifyMethods = function() {
			/*
			 * Aliasing method into the thisc scope makes them available to ctrl and outside.
			 */
			var that = this;
			that.scopeNg.thisc.loadAndOpenPanel = that.loadAndOpenPanel;
			that.scopeNg.thisc._loadAndOpenPanel = that._loadAndOpenPanel;
			
			that.scopeNg.thisc.unloadAndClosePanel = that.unloadAndClosePanel;
			that.scopeNg.thisc._unloadAndClosePanel = that._unloadAndClosePanel;
			
			///that.scopeNg.thisc._closePanelAsync = that._closePanelAsync;
			///that.scopeNg.thisc._closePanelAsync = that._closePanelAsync;
		}
		

		p._setClickHandler = function _setClickHandler() {
			var that = this;
			that.elmo.on( 
				{ 
					'click': function handleClick_fnc(ev) {
						///console.dog(">>> SlideDownVcc_LF -");
					}
				}
			)
		};
		
		p._setTransitionendHandlers = function() {
			var that = this;
			var vv = {};
			
			vv.callbackWrap = function(ev) { 
				that.handle_Transition_end.call(that, ev);
			}
			
			that.elmo.on( 
				{ 
					'transitionend': vv.callbackWrap
				}
			)
		};
		
			p.handle_Transition_end = function (ev) {
				/* NOTE: Might be useful in future to test for property transiton occurred against. */
				
				var that = this;
				var vv = {};
				
				vv.isPanelOpen = that._testIsPanelOpen()
				
				console.dog(">>> SlideDownVcc_LF - handle_Transition_end - Pt-A1 - vv.isPanelOpen, ev: ", vv.isPanelOpen, ev);
				
				if ( vv.isPanelOpen ) {
					that.scopeNg.inLf.isPanelOpen = true;
				}
				else {
					that.scopeNg.inLf.isPanelOpen = false;
				}
				console.dog(">>> SlideDownVcc_LF - handle_Transition_end - Pt-A2 - that.scopeNg.inLf.isPanelOpen, ev: ", that.scopeNg.inLf.isPanelOpen, ev);
				
				that.scopeNg.$apply();
			}
		
		
		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;

			//{	Watch toLf.panelParams.action.
				that.scopeNg.$watch( 
					'toLf.panelParams.action', 
					
					function(newVal, oldVal) { 
						if ( newVal === 'open' ) {
							that._loadAndOpenPanel(that.scopeNg.toLf.panelParams.drct);
						}
						if ( newVal === 'close' ) {
							that._fullyClosePanelAsync(that.scopeNg.toLf.panelParams.drct);
						}
					},
					
					true
				);
			//}
		}
		
		p._unloadAndClosePanel = async function () {
			var that = this;
			var vv = {}
			///alert(">>> SlideDownVcc_LF - _loadAndOpenPanel");
			console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-A - that: ", that);
			//	-- STEPS --
			//	1. Close panel  (async wait).
			//	2. Empty contents of panel.

			try {
				//{	Close panel  (async wait).
					vv.promiseA1 = that._closePanelAsync();
					console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-B - vv.promiseA1: ",  vv.promiseA1);
					vv.panelState = await vv.promiseA1;
					console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-C - vv.panelState: ", vv.panelState);
				//}
				if ( vv.panelState === "closed" ) {
					//{ Empty contents of panel.
						that._emptyContentFromPanel();
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-D - vv: ", vv);
						return vv.panelState;
					//}
				}
				else {
					vv.err = {
						errorType: "UnexpectedPanelState",
						panelState: vv.panelState,
						returnPoint: "_unloadAndClosePanel_Pt-B"
					}
					console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-I - vv, err: ", vv, err);
					return vv.err
				}
			}
			catch(err) {
				vv.panelState = undefined;
				err.panelState = vv.panelState;
				err.returnPoint = "unloadAndClosePanel-A";
				console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-J - vv, err: ", vv, err);
				return err
			}
		}
		
		
		p._loadAndOpenPanel = async function (drctName, handoffSpecId) {
			var that = this;
			var vv = {}
			///alert(">>> SlideDownVcc_LF - _loadAndOpenPanel");
			console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-A - that: ", that);
			//	-- STEPS --
			//	1. Close panel  (async wait).
			//	2. Empty contents of panel.
			//	3. Add contents to panel.
			//	4. Open panel (async wait)
			//	5. Notify done through scope: fromLf.isPanelFullyOpened = true
			//	6. Run $apply to push scope.
			
			
			try {
				//{	Close panel  (async wait).
					vv.promiseA1 = that._closePanelAsync();
					console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-B - vv.promiseA1: ",  vv.promiseA1);
					vv.panelState = await vv.promiseA1;
					console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-C - vv.panelState: ", vv.panelState);
				//}
				if ( vv.panelState === "closed" ) {
					//{ Empty contents of panel.
						that._emptyContentFromPanel();
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-D - vv: ", vv);
					//}
					//{ Add contents (directive) to panel.
						that._addDrctToPanel(drctName, handoffSpecId);
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-E - vv: ", vv);
						
					//}	
					try {
						//{ Open panel (async wait)
							vv.promiseB1 = that._openPanelAsync();
							console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-F - vv.promiseB1: ", vv.promiseB1);
							vv.panelState = await vv.promiseB1;
							console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-G - vv.panelState: ", vv.panelState);
							return vv.panelState;
						//}	
					}
					catch(err) {
						err.panelState = undefined;
						err.panelState = vv.panelState;
						err.returnPoint = "_loadAndOpenPanel_Pt-C";
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-H - vv, err: ", vv, err);
						return err
					}
				}
				else {
					vv.err = {
						errorType: "UnexpectedPanelState",
						panelState: vv.panelState,
						returnPoint: "_loadAndOpenPanel_Pt-B"
					}
					console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-I - vv, err: ", vv, err);
					return vv.err
				}
			}
			catch(err) {
				vv.panelState = undefined;
				err.panelState = vv.panelState;
				err.returnPoint = "_loadAndOpenPanel_Pt-A";
				console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-J - vv, err: ", vv, err);
				return err
			}
		}
		
		
		
		p._testIsPanelOpen = function() {
			var that = this;
			var vv = {};
			vv.isOpen = that.elmo.find('.SlideDownPanel').hasClass('PanelOpen');
			console.dog(">>> SlideDownVcc_LF - _testIsPanelOpen - vv.isOpen: ", vv.isOpen);
			return vv.isOpen;
		}
		
		p._closePanelAsync = function() {
			var that = this;
			var vv = {}
			///alert(">>> SlideDownVcc_LF - _closePanelAsync");
			
			//{ Setup promise that informs that panel is not opened.
				vv.myPromise = new Promise(function(resolve,reject){
				
					//	IF *true*: Path to promise resolution is based on $watching inLf.isPanelOpen.
					if ( that._testIsPanelOpen() ) {  /* Panel is open */
						vv.unregisterWatchFnc = that.scopeNg.$watch(
							'inLf.isPanelOpen', 
							
							function(newVal, oldVal) {	
								console.dog(">>> SlideDownVcc_LF - _closePanelAsync - Pt-B1 - newVal, oldVal, vv: ", newVal, oldVal, vv);
								
								///alert("boooooo " + newVal)
								
								if ( newVal === false ) {
									vv.unregisterWatchFnc();
									resolve("closed")
								}
							}, 
							
							true
						); // End $watch args.
					}
					// ELSE: resolve promise manually
					else { /* Panel is NOT open */
						resolve("closed")
					}
				})
			//}	
			
			if ( that._testIsPanelOpen() ) {  // Panel is open so close it.
				//	--
				//	Set class name var for template.
				//	This should eventually trigger handle_Transition_end(),
				//	which will then set $watched scope prop inLf.isPanelOpen.
				//{
					that.scopeNg.loc.panelActionClassName = "PanelClose";
				//}
				
				//{ Now apply scope so template picks-up css class name.
					that.scopeNg.$apply();
				//}
			}
			
			//	Return the promise.
				return vv.myPromise
			//}		
		}
		
		
		p._openPanelAsync = function() {
			var that = this;
			var vv = {};
			
			//{ Setup promise that informs that panel is not opened.
				vv.myPromise = new Promise(function(resolve,reject){
				
					//	IF *! true*: Path to promise resolution is based on $watching inLf.isPanelOpen.
					if ( ! that._testIsPanelOpen() ) {  /* Panel is NOT open */
						console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-A - vv: ", vv);
						vv.unregisterWatchFnc = that.scopeNg.$watch(
							'inLf.isPanelOpen', 
							
							function(newVal, oldVal) {	
								
								console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-B1 - that.scopeNg.inLf.isPanelOpen, newVal, oldVal, vv: ", that.scopeNg.inLf.isPanelOpen, newVal, oldVal, vv);
								
								if ( newVal === true ) {
									vv.unregisterWatchFnc();
									console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-B2 - vv: ", vv);
									resolve("opened")
								}
							}, 
							
							true
						); // End $watch args.
					}
					// ELSE: resolve promise manually
					else { /* Panel is open */
						resolve("opened")
					}
				})
			//}	
			
			if ( ! that._testIsPanelOpen() ) { // Panel is NOT open so open it.
				//	--
				//	Set class name var for template.
				//	This should eventually trigger handle_Transition_end(),
				//	which will then set $watched scope prop inLf.isPanelOpen.
				//{
					that.scopeNg.loc.panelActionClassName = "PanelOpen";
				//}
				//{ Now apply scope so template picks-up css class name.
					that.scopeNg.$apply();
				//}
			}
			
			//	Return the promise.
				return vv.myPromise
			//}		
		}
		
		
		p._emptyContentFromPanel = function() {
			var that = this;
			var vv = {};
			
			///that.elmo.find('.SlideDownContents').empty();
			
			that.scopeNg.loc.drctName = "";
			that.scopeNg.$apply();
		}
		
		p._addDrctToPanel = function(drctName, handoffSpecId) {
			console.dog(">>> _addDrctToPanel - handoffSpecId: ", handoffSpecId);
			var that = this;
			var vv = {};
			
			///vv.newDrct = that.compileNg( "<"+drctName+"></"+drctName+">" );
			///that.elmo.find('.SlideDownContents').append( vv.newDrct );
			
			that.scopeNg.loc.drctName = drctName;
			that.scopeNg.loc.handoffSpecId = handoffSpecId
			that.scopeNg.$apply();
			
		}
	
	//}

	return LinkFncClass;
	
})();

