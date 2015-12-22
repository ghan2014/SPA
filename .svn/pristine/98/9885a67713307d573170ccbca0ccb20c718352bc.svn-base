/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVcc_MediatorService_routines.js
 * *********************************************************************
 * *********************************************************************
 */


module.exports = (function() {
	var aa = {}
	var p = {}

	aa.refNameSelf = "AppVcc_MediatorService_routines"
	
	//	================================================================
	//	ROUTINES: (Rtn)   
	//	...These are basically "partial transactions", and/or 
	//	...simple transactions around executing just one method.
	//{
		
	
		p._applyCssNamespacingToHolders__Rtn = function() {
			var that = this
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _applyCssNamespacingToHolders__Rtn");	
	
			vv.cssNamespacePerUiStates = that.toolbox.getCssNamespacePerUiStates( that.stateNg.current );
			
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.StateContainerVcc', 'setAbstractStatesCssNamesVar', [ vv.cssNamespacePerUiStates ]]
			);
					
			return vv.exeReturn;
		}
		
		p._autoManagePlayerAndFooterDisplay__Rtn = function() {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _autoManagePlayerAndFooterDisplay__Rtn");

			//	Query player panel controller to see if display switch is on or off.
			vv.doesPlayerHaveStation = that._executeNg.apply(that, 
				[ '.PlayerPanelVcc', 'getStationId', [] ])	
			
			
			//	If player display switch is on, then instruct for gap under footer.
			//OuterHolderWithPlayerVcc
			if ( vv.doesPlayerHaveStation ) {
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.FlexiHolderVcc', 'positionFooterAbovePlayer', [  ] ]);		
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.OuterHolderVcc', 'switchOnOffPlayer', [ true ] ]);
			}
			//	Else no gap under footer (default state)
			else {
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.FlexiHolderVcc', 'positionFooterNormally', [  ] ]);		
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.OuterHolderVcc', 'switchOnOffPlayer', [ false ] ]);
			}
		}	
		
		p._buildLayoutInHolders_Rtn = function() { 
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _buildLayoutInHolders_Rtn");	
				
			vv.allHolderVcNames = that.toolbox.getHolderVcNamesPerUiStates( that.stateNg.current )
			vv.allUsedSlots = that.toolbox.getUsedSlotsPerUiStates( that.stateNg.current )
			
			// Aside: Put allHolderVcNames & allUsedSlots  in current state for later/tbd easy access
			//{
				that.stateNg.current.allHolderVcNames = vv.allHolderVcNames
				that.stateNg.current.allUsedSlots = vv.allUsedSlots
			//}
			
			vv.allHolderVcNamesLen = vv.allHolderVcNames.length
			for ( vv.idx=0; vv.idx < vv.allHolderVcNamesLen; vv.idx++ ) {
				vv.holderVcName = vv.allHolderVcNames[vv.idx]
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.'+vv.holderVcName, 'buildLayout', [ vv.allUsedSlots ] ]
				);
			}	
			return undefined;	
		}
		
		p._getSessionId__Rtn = function() {
			var that = this;
			return that.sessionService.getSessionIdForRemote();
		}
		
		
		p._readyPanelForPlay__RtnAsyc = async function(stationId, doPlayFlag) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _readyPanelForPlay__Rtn: ", stationId)	
			
			
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.OuterHolderVcc', 'switchOnOffPlayer', [ true ] ]);
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.FlexiHolderVcc', 'positionFooterAbovePlayer', [  ] ]);		
			vv.promise1 = that._executeNgAsync.apply(that, 
				[ '.PlayerPanelVcc', 'readyPanelForPlay', [stationId, doPlayFlag] ]);

			try {
				vv.exeReturn = await vv.promise1;
				console.dog(">>> _readyPanelForPlay__RtnAsyc - SUCCESS - result: ", vv.exeReturn);
				return vv.exeReturn
			}
			catch(e) {
				console.dog('>>> _readyPanelForPlay__RtnAsyc - FAILED - e:', e);
				return e;
			}
		}
		
		
		p._removePlayer__Rtn = async function() {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _removePlayer__RtnAsyc ")	
			
			
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.OuterHolderVcc', 'switchOnOffPlayer', [ false ] ]);
				
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.FlexiHolderVcc', 'positionFooterNormally', [  ] ]);	

		}
	
		
		p._setDisplayOfHierarchyNavStrip__Rtn = function() {
			var that = this;
			var vv = {}		
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _setDisplayOfHierarchyNavStrip__Rtn");
			
			vv.exeReturn = that._executeNg.apply(that, 
				[ '.HierarchyNavStripVcc', 'setDisplay', [] ])

			return vv.exeReturn;
		}

	//}
	
	return p;
	
})();




/* DRAWER
 
 
		p.ZZ_presentMainSignupForm_RtnAsync = async function(handoffSpecId) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _presentMainSignupForm_RtnAsync: ")	
			
			
			vv.promise1 = that._executeNgAsync.apply(that, 
				[ '.SlideDownVcc', 'loadAndOpenPanel', ["SignupPanelVcc", handoffSpecId] ]);

			try {
				vv.exeReturn = await vv.promise1;
				///vv.name = 'boooo'
				console.dog(">>> vv", vv);
				console.dog(">>> _presentMainSignupForm_RtnAsync - SUCCESS - result: ", vv);
				return vv.exeReturn
			}
			catch(e) {
				console.dog('>>> _presentMainSignupForm_RtnAsync - FAILED - e:', e);
				return e;
			}
			
		}
		
		
		
		p.ZZ_removeMainLogInForm_RtnAsync = async function() {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _removeMainLogInForm_RtnAsync: ")	
			
			
			vv.promise1 = that._executeNgAsync.apply(that, 
				[ '.SlideDownVcc', 'unloadAndClosePanel', [] ]);

			try {
				vv.exeReturn = await vv.promise1;
				///vv.name = 'boooo'
				console.dog(">>> vv", vv);
				console.dog(">>> _removeMainLogInForm_RtnAsync - SUCCESS - result: ", vv);
				return vv.exeReturn
			}
			catch(e) {
				console.dog('>>> _removeMainLogInForm_RtnAsync - FAILED - e:', e);
				return e;
			}
			
		}


		
		p._presentMainLogInFormOLD_RtnAsync = async function(handoffSpecId) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _presentMainLogInFormAsync_Rtn: ")	
			
			
			//{ Define helper.
				vv.showDialog = async function(config) {
					console.dog(">>> mdDialogMngr2: ", that.mdDialogMngr);
					vv.promise1 = that.mdDialogMngr.coreObj.show(config);

					try {
						vv.result = await vv.promise1;
						
						///that.scopeNg.loc.responseMssg = 'You decided to get rid of your debt.';
						///that.scopeNg.$apply();

					}
					catch(e) {
						///that.scopeNg.loc.responseMssg = 'You decided to keep your debt.';
						///that.scopeNg.$apply();
					}
				}	
			//}
			
			
			//{ Config modal.
				  
				///vv.eventt = {}   //  Note, this works.
				vv.eventt = {};
				
				console.dog(">>> dialogMngr: ", that.mdDialogMngr );
				  
				// 	Appending dialog to document.body to cover sidenav in docs app
				//	...Note, Chaining functions that define the config.
				var config = that.mdDialogMngr.coreObj.confirm()
					  .parent( angular.element(document.body) )
					  .title( 'Would you like to delete your debt?' )
					  .content( '' )
					  .ariaLabel( 'Lucky day' )
					  .ok( 'Please do it!' )
					  .cancel( 'Sounds like a scam' )
					  .targetEvent( vv.eventt );
					  

				that.mdDialogMngr.bgetExtendedConfig( config,
					{
						template: 'stndTemplate',
						target: '.navChoiceSignup',
						furtherContent: '<drct-login-core-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"><drct-login-core-panel-vcc>'
					}
				)
			//}

				console.dog(">>> mdDialogMngr1: ", that.mdDialogMngr);
				console.dog(">>> _setupSpcfDatas - config1: ",config._options);				

			//{ Now show the dialog box.
				vv.showDialog(config);
			//}
				
				

		};
		
 
 
*/
