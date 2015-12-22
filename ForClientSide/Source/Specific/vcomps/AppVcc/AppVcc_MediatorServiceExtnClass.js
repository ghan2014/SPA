/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVcc_MediatorServiceExtnClass.js
 * *********************************************************************
 * *********************************************************************
 */


module.exports = (function() {
	var aa = {}
	
	//	Equated dependencies.
	//{
		aa.routines = require("./AppVcc_MediatorService_routines.js"); 
	//}
	
	//	Class properties.
	// {
		aa.myVcName = "AppVcc"
		aa.refNameSelf = "AppVcc_MediatorServiceExtnClass"
		aa.refNameParent = "MediatorServiceClass"
		aa.ParentClass = require("../../agents/MediatorServiceClass.js");
		
		function AppVcc_MediatorServiceExtnClass(cacheFactoryNg, locationNg, stateNg, stateParamsNg, timeoutNg, membersService, sessionService, stationsService,  toolbox) {
			var that = this;
			that.cacheFactoryNg = cacheFactoryNg
			that.locationNg = locationNg;
			that.stateNg = stateNg;
			that.stateParamsNg = stateParamsNg
			that.timeoutNg = timeoutNg;
			that.membersService = membersService;
			that.sessionService = sessionService;
			that.stationsService = stationsService;
			that.toolbox = toolbox;			
            that._setup();
		var breakpoint = 'a';
	}
	//}

	//	Scaffold class.
	// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(
			aa.refNameSelf, AppVcc_MediatorServiceExtnClass, aa.ParentClass
		)
	//}


	var p = aa.MyClass.prototype;
	var pp = aa.ParentClass.prototype


	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = _setup;
		function _setup() {
			var that = this;
			
			that._config();
		}
		
		p._config = function() {
			var that = this
			var vv = {}
			
			vv.cfg = pp._config();
			vv.cfg.refNameSelf = aa.refNameSelf;
			
			vv.cfg.return_playerPgMediator = function() {
				var vvv = {}
				try {
					vvv.playerPgMediator = document.getElementsByClassName('PlayerIframe')[0].contentWindow.LIVE365PLAYER.pgMediator
					
					return vvv.playerPgMediator
				}
				catch(errorr) {
					console.dog(">>> ERROR return_playerPgMediator can't return player app - errorr: ", errorr);
					return 'failed'
				}
			}
			
			vv.cfg.return_playerPgMediator_receiveNotice = function() {
				var vvv = {}
				try {
					vvv.playerPgMediator_receiveNoticeMethod = document.getElementsByClassName('PlayerIframe')[0].contentWindow.LIVE365PLAYER.pgMediator.receiveNotice;
					
					return vvv.playerPgMediator_receiveNoticeMethod
				}
				catch(errorr) {
					console.dog(">>> ERROR return_playerPgMediator_receiveNotice can't return player-app's receiveNotice method - errorr: ", errorr);
					return 'failed'
				}
			}
			
			that.cfg = vv.cfg;
			
			return vv.cfg
		}
		
		
		p._notifyPlayerPg = async function (pkg) {
			var that = this;
			var vv = {};
	
			try {
				//	Try to get player's mediator.
				console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - First try to get player's mediator: ", pkg);
				vv.mediator = that.cfg.return_playerPgMediator()
				if ( vv.mediator === 'failed' ) {
					//	Try again in 1 sec.
					vv.dontCare = await that.toolbox.pause(1000)
					console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Second try to get player's mediator: ", pkg);
					vv.mediator = that.cfg.return_playerPgMediator()
					if ( vv.mediator === 'failed' ) {
						//	Try again in 1.5 secs.  
						vv.dontCare = await that.toolbox.pause(1500)
						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator()
						if ( vv.mediator === 'failed' ) {
							//	Try again in 1.5 secs.  
							vv.dontCare = await that.toolbox.pause(1500)
							console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
							vv.mediator = that.cfg.return_playerPgMediator()
							if ( vv.mediator === 'failed' ) {
								//	Try again one last time in 1.5 secs.  
								vv.dontCare = await that.toolbox.pause(1500)
								console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
								vv.mediator = that.cfg.return_playerPgMediator()
								if ( vv.mediator === 'failed' ) {
									// Create an error - a hack way to throw an error.
									vv.couldNotGetPlayerMediator_VAR = vv.noObject.vv.couldNotGetPlayerMediator_VAR
								}
							}
						}
					}
				}

				vv.mediator_receiveNotice = that.cfg.return_playerPgMediator_receiveNotice()	
				console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - MSSG TO PLAYER PAGE: ", pkg);
				///alert(">>>> about to notify player")
				vv.methodReturn = vv.mediator_receiveNotice.call(vv.mediator, pkg);
			}
			catch(err) {
				console.dog(">>> !!! ERROR " + aa.refNameSelf + " / " + that.cfg.refNameSelf + ": ", err);
				vv.methodReturn = err
			}
			
			///vv.methodReturn = vv['mediator'].receiveNotice(pkg);

			return vv.methodReturn;
		}
		
		
	//	================================================================
	//	ROUTINES: (Rtn)   
	//	...These are basically "partial transactions", and/or 
	//	...simple transactions around executing just one method.
	//{
		
		p = aaGlobalee.ooUtils.mergeObjects(p, aa.routines) 
	//}
	
		

	//	================================================================
	//	E(X)TERNAL Notice Transactions: (Xnt)  
	//	...These are for notices that originate *outide* of mediator.
	//{
	

		
		
		p._run__Changed_PageState__Xnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Changed_PageState__Xnt");
			
			vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
			
			//{	Needed params: 
				vv.pageStateName = pkg.notice.pageStateName;
			//}
			
			//	Set display on Hierarchy nav strip.
			that._setDisplayOfHierarchyNavStrip__Rtn();
			
			//	Notify what page changed to in order to delegate to
			//	... the transaction per that specific page type.
			pkg.notice.noticeName = "ChangedTo_" + pkg.notice.pageStateName;
			vv.handleNoticeReturn = await that.receiveNotice(senderScope, pkg);
			
			//	Manager Footer Spacing
			that._autoManagePlayerAndFooterDisplay__Rtn();
			
			if  (that.locationNg.search().doResume) {
				// Set in EmailValidationRoutine_requested, and true only if coming from there.
				vv.doResume = true
			}
			
			if ( that.stateNg.current.name !== 'Page4rEmailValidationUSC' ) {
				//{ Resume action if one is pending and user is logged in.
					//{ Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === 'string' ? true : false;
					//}
					if (localStorage.resumeUponReturnPkgJSON && vv.isUserLoggedIn) {
						vv.resumeUponReturnPkgJSON = localStorage.resumeUponReturnPkgJSON
						vv.resumeUponReturnPkg = JSON.parse(vv.resumeUponReturnPkgJSON)
						localStorage.removeItem('resumeUponReturnPkgJSON')
						that.receiveNotice("", vv.resumeUponReturnPkg);
					}
				//}
			}

			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Changed_PageState__Xnt");
			return vv.rtnReturn;
		}
		
		
		p._run__Entering_PageState__Xnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Entering_PageState__Xnt");
			
			vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
			
			//{	Needed params: 
				vv.pageStateName = pkg.notice.pageStateName;
			//}
			
			//	Build layout in holders.
			that._buildLayoutInHolders_Rtn();
			
			//	Apply Css Namespacing to holders.
			that._applyCssNamespacingToHolders__Rtn();


			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Entering_PageState__Xnt");
			return vv.rtnReturn;
		}
		
		


		p._run__FacebookShareButton_clicked__Xnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__FacebookShareButton_clicked__Xnt");
			
			vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
			
			//{	Needed params: 
			//}

			vv.isSafari = that.toolbox.isSafari()  
			///alert( ">>> vv.isSafari: " + vv.isSafari )

			if  ( ! vv.isSafari ) {
				///alert(">>> _run__FacebookShareButton_clicked__Xnt - Non Safari case.")
				vv.voidd = await that._executeNgAsync.apply(that, 
					[ '.Button4rFacebookShareVcc', 'shareIt', [] ]
				);
			}
			else {
				vv.doRunShare = false;
				///alert(">>> _run__FacebookShareButton_clicked__Xnt - Safari case.")

				/*
				vv.loginStatus = await that._executeNgAsync.apply(that, 
					[ '.FacebookAuthMachineVcc', 'getFacebookLoginStatus', [] ]
				);

				console.dog(">>> _run__FacebookShareButton_clicked__Xnt - loginStatus: ", vv.loginStatus)

				///alert(">>> _run__FacebookShareButton_clicked__Xnt - vv.loginStatus.isLoggedIn: " + vv.loginStatus.isLoggedIn)
				vv.isLoggedIn = vv.loginStatus.isLoggedIn  //  Generalize scope for easier tinkering.
				*/

				vv.isLoggedIn = null
				if  ( vv.isLoggedIn  === true ) {
					vv.doRunShare = true;
				}
				else { 
					vv.result = await that._executeNgAsync.apply(that, 
						[ '.FacebookAuthMachineVcc', 'loginToFacebook', [] ]
					);

					console.dog(">>> _run__FacebookShareButton_clicked__Xnt - vv.result.status (and vv.result): ", vv.result.status, vv.result)
					///alert(">>> _run__FacebookShareButton_clicked__Xnt - vv.result.status: " + vv.result.status)

					if  ( vv.result.status === 'succeeded' ) {
						vv.doRunShare = true;
					}
				}

				console.dog(">>> _run__FacebookShareButton_clicked__Xnt - vv.doRunShare  ", vv.doRunShare )
				///alert(">>> _run__FacebookShareButton_clicked__Xnt -vv.doRunShare s: " + vv.doRunShare )


				if ( vv.doRunShare === true) {
					vv.voidd = await that._executeNgAsync.apply(that, 
						[ '.Button4rFacebookShareVcc', 'shareIt', [] ]
					);
				}
				
			}

			// Expediency - Manually clear the backdrop.
			$(".md-menu-backdrop").click()

			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__FacebookShareButton_clicked__Xnt");
			return vv.rtnReturn;
		}

		
		p._run__FacebookAuthButton_clicked__Xnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__FacebookAuthButton_clicked__Xnt: ", pkg);


			

			if (pkg.notice.noticeName === 'FacebookAuthButton_clicked')  {
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuthButton");

				vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId)
				pkg.callerHandoffSpecId = pkg.notice.handoffSpecId
			
				vv.voidd = await that._executeNgAsync.apply(that, 
					[ '.FacebookAuthMachineVcc', 'handleFacebookButtonClick', [vv.handoffSpecId] ]
				);
			}
			else if (pkg.notice.noticeName === 'FacebookBasedAuth_succeeded')  {
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuth_succeeded");
				vv.voidd = await that._executeNgAsync.apply(that, 
					[ '.MdDialogMngrVcc', 'hideDialog', [] ]);

				vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
				
				// add step to uncheck checkbox programtically to close menu
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
				);
				
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.Header4StndUseVcc', 'refresh', [ ] ]
				);
				
				vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
				vv.exeReturn = await that._executeNgAsync.apply(that, 
					[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
				);
				
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB1 - near done - pkg   ", pkg )
				vv.callerPkg = that._getHandoffPkg(pkg.handedToMePkg.pkg.callerHandoffSpecId).pkg
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB2 - vv.callerPkg   ", vv.callerPkg )
				
				that.receiveNotice(undefined, vv.callerPkg)
				
			}
			else if (pkg.notice.noticeName === 'FacebookBasedAuth_failed')  {
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuth_failed");
				vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)
			
				vv.confirmQuestion = 'Do you agree to the Terms of Service?';
				vv.startEndTarget = '.navChoiceLogout';
				vv.mainContent = '<a href="TermsOfService.pdf" target="_blank">(View Terms of Service)</a>'
				
				vv.handoffSpecId = vv.handoffSpecId;
				vv.doHandoffFirst = true;
				
				
				vv.voidd = await that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openStndConfirmDialog', [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget, vv.mainContent ] ]
				);
			}
			else if (pkg.notice.noticeName === 'ProceedButtonOfStndConfirmInDialog_clicked')  {
				console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is ProceedButtonOfStndConfirmInDialog_clicked. ",  pkg);
				vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)
			
				vv.resultObj = await that._executeNgAsync.apply(that, 
					[ '.FacebookAuthMachineVcc', 'tryRegisterAndAuth', [vv.handoffSpecId] ]
				);

				if (vv.resultObj.status === 'succeeded')  {
					vv.promise2 = that._executeNgAsync.apply(that, 
						[ '.MdDialogMngrVcc', 'hideDialog', [] ]);

					vv.result = await vv.promise2;
					
					vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
					
					// add step to uncheck checkbox programtically to close menu
					vv.exeReturn = that._executeNg.apply(that, 
						[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
					);
					
					vv.exeReturn = that._executeNg.apply(that, 
						[ '.Header4StndUseVcc', 'refresh', [ ] ]
					);
					
					vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
					vv.exeReturn = await that._executeNgAsync.apply(that, 
						[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
					);


					console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB3 - near done - pkg   ", pkg )
					vv.callerPkg = that._getHandoffPkg(pkg.handedToMePkg.pkg.callerHandoffSpecId).pkg
					console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB4 - vv.callerPkg   ", vv.callerPkg )

					that.receiveNotice(undefined, vv.callerPkg);

				}
			}
			
			else if (pkg.notice.noticeName === 'CancelButtonOfStndConfirmInDialog_clicked') {
				
				vv.voidd = that.sessionService.logOutOfRemoteSession();
				vv.promise2 = that._executeNgAsync.apply(that, 
					[ '.MdDialogMngrVcc', 'hideDialog', [] ]
				);
				vv.result = await vv.promise2
				
				vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
				
				// add step to uncheck checkbox programtically to close menu
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
				);
				
				console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-1");
				
				vv.exeReturn = that._executeNg.apply(that, 
					[ '.Header4StndUseVcc', 'refresh', [ ] ]
				);
				
				console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-2");
				
				that._removePlayer__Rtn()
				
				console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-3");

				if ( that.stateNg.current.logoutGotoState ) {
					that.stateNg.go(that.stateNg.current.logoutGotoState);
				}
				else {
					vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
					vv.exeReturn = await that._executeNgAsync.apply(that, 
						[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
					);
				}			
				
			}
			
			
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__FacebookAuthButton_clicked__Xnt");
			return vv.rtnReturn;
		}
		
		
		
		

		//{ RE: Button/link clicked for goal to start player, but may need to present login form first.
			p._run__PlayButtonVcc_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				///alert("_run__PlayButtonVcc_clicked__Xnt - mk-1");
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__PlayButtonVcc_clicked__Xnt  - that: ", that);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)
				
				if ( that.toolbox.isIOS() ) {
					vv.promise1 = that._executeNg.apply(that, 
						[ '.MdDialogMngrVcc', 'openIOSPlayDialog', [vv.handoffSpecId] ]
					);
					
					vv.promise1 = ''
					
					return 'done'
				}
				
				else if ( that.toolbox.isAndroid() ) {
					vv.promise1 = that._executeNg.apply(that, 
						[ '.MdDialogMngrVcc', 'openAndroidPlayDialog', [vv.handoffSpecId] ]
					);
					
					vv.promise1 = ''
					
					return 'done'
				}
				
				///alert("_run__PlayButtonVcc_clicked__Xnt - mk-2");
				//{	Needed params: 
					vv.stationId = pkg.notice.stationId || ''
					vv.playlistId = pkg.notice.playlistId || ''
					vv.trackId = pkg.notice.trackId || ''
					vv.trackUid = pkg.notice.trackUid || ''
					vv.doPlayFlag = pkg.notice.doPlayFlag || 1;  //  Values are 1 & 0.
					vv.transId = pkg.transId || that._genUniqueToken()
				//}
				
				
				//{	========================================================
					/*
					END GOAL -
						Inform player page of desire to have select station played.
					
					PATH WAYS -
					
						IF user logged in {
							1. 	Transaction process to inform player
						}
						IF user NOT logged in {
							1. 	Bring up UI for user to log-in OR sign-up
							IF user selects log-in {
								1. 	User enters log-in info and clicks submit.
								2.	Log-in transaction proceeds.
								3.  At end of log-in transaction success, the log-in transaction.
									handsoff (back) to this transaction in logged in state.
							}
							IF user selects create account {
								1. User enters create account info and clicks submit.
								2. Create account transaction proceeds.
								3. At end transaction success, view present new account receipt,
									and a 'continue to ...' link, which in this scenario is setup 
									with hand-off info so user comes back to this transaction.
								4. The users click on 'continue to ...' link.
								5. App takes user back to this transaction.
								
						}
					}
					*/
				//}
				///alert("_run__PlayButtonVcc_clicked__Xnt - mk-3");
				//{	Determine if user is logged in.
					vv.sessionId = that._getSessionId__Rtn();
					vv.isUserLoggedIn = typeof vv.sessionId === 'string' ? true : false;
				//}
				///alert("_run__PlayButtonVcc_clicked__Xnt - mk-4");
				console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-4 - vv.isUserLoggedIn:  ", vv.isUserLoggedIn)
				//{	Pathway 4r logged in user.
					if (vv.isUserLoggedIn) {
						///alert("BOOOO PLAY LOGGED IN");
						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-4b - b4 ready player")
						//{	Set station on player per station for this page.
							vv.promise1 = that._readyPanelForPlay__RtnAsyc(vv.stationId)
						//}
						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-5a");
						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-5a - after call (b4 await) ready player")
						//{	Upon resolution of promise, try to notify Player page.
							vv.exeReturn = await vv.promise1;
							console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-5b - after call (b4 await) ready player")
							///alert("_run__PlayButtonVcc_clicked__Xnt - mk-5b");
							try {

								if ( vv.stationId && vv.playlistId && vv.trackUid ) {
									vv.noticeName = 'TrackPlay_requested'
								}
								else if ( vv.stationId && vv.playlistId ) {
									vv.noticeName = 'PlaylistPlay_requested'
								}							
								else if ( vv.stationId ) {
									vv.noticeName = 'StationPlay_requested'
								}		
															
								vv.newPkg = {
									notice: {
										noticeName: vv.noticeName,
										stationId: vv.stationId,
										playlistId: vv.playlistId,
										trackId: vv.trackId,
										trackUid: vv.trackUid,
										autoplay: vv.doPlayFlag,
										transId: vv.transId,
										sessionId: vv.sessionId
									}
								}
								
								console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-6 - newPkg: ", vv.newPkg);
								///alert("_run__PlayButtonVcc_clicked__Xnt - mk-6");
								vv.dontCare = await that._notifyPlayerPg(vv.newPkg)
								
								console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - SUCCESS - result: ", vv.exeReturn);
								///	return vv.exeReturn 	//	No return.  The end of an async XNT is the end of the asyn path.
							}
							catch(e) {
								console.dog('>>> _run__PlayButtonVcc_clicked__Xnt - FAILED - e:', e);
								///return e;   //	No return.  The end of an async XNT is the end of the asyn path.
							}
						}
					//}
				//}
				//{	Pathway 4r non-logged in user.
					else if (! vv.isUserLoggedIn) {
						///alert("booooo");
						///alert("BOOOO PLAY NOT LOGGED IN");
						//{	Set station on player per station for this page.
							vv.promise1 = that._executeNg.apply(that, 
								[ '.MdDialogMngrVcc', 'openLoginDialog', [vv.handoffSpecId] ]
							);	
						//}
						
						//{	Upon resolution of promise, try to notify Player page.
							try {
								vv.exeReturn = await vv.promise1;
								//	Do nothing.  New view to handoff transactions.
							}
							catch(e) {
								console.dog('>>> _run__PlayButtonVcc_clicked__Xnt - FAILED - e:', e);
								///return e;   //	No return.  The end of an async XNT is the end of the asyn path.
							}
						//}
					}
				//}
				
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__PlayButtonVcc_clicked__Xnt");
				return vv.rtnReturn;
			}
			p._run__TrackPlay_requested__Xnt = p._run__PlayButtonVcc_clicked__Xnt
			p._run__PlayTriggerZone_clicked__Xnt = p._run__PlayButtonVcc_clicked__Xnt
			
		//}
		
		
		//{ RE: Player changed state.
			p._run__Player_changeState__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}

				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Player_changeState_Xnt  - pkg: ", pkg);

				vv.playerState = pkg.notice.state;
				
				if ( vv.playerState === 'play' ) {
					console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Player_changeState_Xnt  - state is 'play': ");
				}

				return 'done'	
			}

		//}
		
		
		//{ RE: Current track's play started.
			p._run__CurrentTrack_playStarted__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}

				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__CurrentTrack_playStarted__Xnt  - pkg: ", pkg);
				
				vv.result = await that._executeNgAsync.apply(that, 
					[ '.TracksPanelVcc', 'decorateLoadedTrackListing', [pkg.notice.uID] ]);

				return 'done'	
			}

		//}
		
		

		
		//{ RE: Share view request from player (basically bring up the options menu)
			p._run__ShareView_requestedFromPlayer__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
	
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ShareView_requestedFromPlayer__Xnt  - pkg: ", pkg);
			
				
				//{	Params: 
					vv.purposing = {
						role: 'PlayerOptionsMenu'

					}
					/*
					vv.purposingForShare = {
						type: 'Track',
						stationId: pkg.notice.stationId || '829',
						playlistId: pkg.notice.playlistId || '878',
						trackId: pkg.notice.trackId || '2180'
						trackUid: pkg.notice.uID || 'erdf-2180'
					}
					*/
					vv.purposingForShare = {
						itemType: 'Track',
						stationId: pkg.notice.stationID,
						playlistId: pkg.notice.playlistID,
						trackId: pkg.notice.trackID || "",   /* Need trackID to be in pkg sent from player. */
						trackUid: pkg.notice.uID
					}
				//}
				

				///alert(">>> _run__ShareView_requestedFromPlayer__Xnt before showMenu");

				vv.result = await that._executeNgAsync.apply(that, 
					[ '.FloatingOptionsMenuVcc', 'showMenu', [vv.purposing, vv.purposingForShare] ]);

				///alert(">>> _run__ShareView_requestedFromPlayer__Xnt after showMenu");

				return vv.result 
			}

		//}	

		p._run__TracksView_requestedFromPlayer__Xnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}			
			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__TracksView_requestedFromPlayer__Xnt - pkg",  pkg);

			/* Example notice:
				noticeName: "TracksView_requestedFromPlayer"
				playlistID: 1352
				state: true
				stationID: "1070"
			*/

			// { Go to playlist page (state), if notice's stationId and playlistId are 
			//   ...different than the respective current page's params, or if either don't exist.
				vv.currentPageStationId = that.stateParamsNg.stationId
				vv.currentPagePlaylistId = that.stateParamsNg.playlistId

				vv.tracksviewStationId = pkg.notice.stationID
				vv.tracksviewPlaylistId = pkg.notice.playlistID


				if ( 	!(  	(vv.tracksviewStationId === vv.currentPageStationId)  
						&&  (vv.tracksviewPlaylistId === vv.currentPagePlaylistId) 
				       	)  
				 ) {

					vv.stationInfoPromise = that.stationsService.getStation(vv.tracksviewStationId)
					vv.playlistInfoPromise = that.stationsService.getPlaylist(vv.tracksviewStationId, vv.tracksviewPlaylistId )

					vv.stationInfo = await vv.stationInfoPromise;
					vv.playlistInfo = await vv.playlistInfoPromise;

					that.stateNg.go(
						'Page4rProjectDtlUSC', 
						{stationId: vv.tracksviewStationId,  stationName: vv.stationInfo.title,  playlistId: vv.tracksviewPlaylistId,  playlistName: vv.playlistInfo.name}
					)
				}







			return 'done'
		}

		
		
		//{ RE: Button/link clicked on to present LOGIN form.
			p._run__LoginButton_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined

				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openLoginDialog', [vv.handoffSpecId] ]
				);		
			}
			p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt


		//}
		
		
		//{ RE: Login form's submit button clicked on (from within modal)
			p._run__LoginSubmitButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LoginSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				//{	
				
					try {
						vv.promise1 = that._executeNgAsync.apply(that, 
							[ '.LoginCorePanelVcc', 'handleEmailLoginFormSubmitAsync', [vv.handoffSpecId] ]);

						vv.result = await vv.promise1;
						// {Check if result has valid sessionId, if so, then good.}
							if ( vv.result.status === 'succeeded' ) {
								
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);

								vv.result = await vv.promise2;
								
								vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
								
								// add step to uncheck checkbox programtically to close menu
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
								);
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'refresh', [ ] ]
								);
								
								vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
								vv.exeReturn = await that._executeNgAsync.apply(that, 
									[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
								);
								
								
								vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, 'success');
								console.dog(">>> Login succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
								if (vv.handoffPkg) {
									vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
								}
							}
							else {
								vv.promiseDontCare = that._executeNgAsync.apply(that, 
								[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'error'] ]);
							}
						//}
					}
					catch(err) {
						
					}

				//}			
			}
		//}
		
		//{ RE: Login form's cancel button clicked on (from within modal)
			p._run__LoginCancelButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				vv.promise2 = that._executeNgAsync.apply(that, 
					[ '.MdDialogMngrVcc', 'hideDialog', [] ]
				);
				vv.result = await vv.promise2;
				
				//{ add step to uncheck checkbox programtically to close menu
					vv.exeReturn = that._executeNg.apply(that, 
						[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
					);
					
					vv.exeReturn = that._executeNg.apply(that, 
						[ '.Header4StndUseVcc', 'refresh', [ ] ]
					);


					if ( that.stateNg.current.isAuthRequired === true  &&  that.stateNg.current.logoutGotoState ) {
						that.stateNg.go(that.stateNg.current.logoutGotoState);
					}
					else {
					}
				
				//}			
			}
		//}
		
		//{ RE: Signup form's cancel button clicked on (from within modal)
			p._run__SignupCancelButtonInDialog_clicked__Xnt = p._run__LoginCancelButtonInDialog_clicked__Xnt
		//}

		//{ RE: Email Share form's cancel button clicked on (from within modal)
			p._run__StndDialogCancelButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {

				var that = this;
				var vv = {}
			
				vv.promise2 = that._executeNgAsync.apply(that, 
					[ '.MdDialogMngrVcc', 'hideDialog', [] ]
				);
			}
			
		//{ RE: Button/link clicked on to present SIGNUP form.
			p._run__SignupRequestButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupRequestButtonInDialog_clicked__Xnt  - that: ", that);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openSignupDialog', [vv.handoffSpecId] ]
				);		
			}

			p._run__SignupButton_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupButton_clicked__Xnt  - that: ", that);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openSignupDialog', [vv.handoffSpecId] ]
				);			
			}
		//}

		//{ RE: Button/link clicked on to present FORGOTPASSWORD form.
			p._run__LoginForgotPasswordButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LoginForgotPasswordButtonInDialog_clicked__Xnt  - that: ", that);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openForgotPasswordDialog', [vv.handoffSpecId] ]
				);		
			}

			p._run__ForgotPasswordSubmitButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_ForgotPasswordSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				//{	
				
					try {
						vv.result = await that._executeNgAsync.apply(that, 
							[ '.ForgotPasswordPanelVcc', 'handleForgotPasswordFormSubmitAsync', [vv.handoffSpecId] ]);

						// {Check if result has valid sessionId, if so, then good.}
							if ( vv.result.status === 'succeeded' ) {
					
								/* may not needed
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);
								

								vv.result = await vv.promise2;
								
								vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
								
								// add step to uncheck checkbox programtically to close menu
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
								);
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'refresh', [ ] ]
								);
								
								vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
								vv.exeReturn = await that._executeNgAsync.apply(that, 
									[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
								);
								*/
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'success'] ]);

								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);
								
								vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, 'success');
								console.dog(">>> ForgotPassword succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
								if (vv.handoffPkg) {
									vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
								}
							}
							else {
								//crearte method to md_dialog to display to messag area
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'error'] ]);
							}
					}
					catch(err) {
						
					}

				//}	


			}
		//}
		
		
		//{ RE: Signup form's submit button clicked on (from within modal)
			p._run__SignupSubmitButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				//{	
				
					try {
						vv.promise1 = that._executeNgAsync.apply(that, 
							[ '.SignupCorePanelVcc', 'handleEmailSignupFormSubmitAsync', [] ]);

						vv.result = await vv.promise1;
						// {Check if result has valid sessionId, if so, then good.}
							if ( vv.result.status === 'succeeded' ) {

					
								vv.result = await that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);

								vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
	
								vv.resumeUponReturnUrl = that.locationNg.url()
								if ( vv.handoffSpecId ) {
									vv.handOffNotice = that._getHandoffPkg(vv.handoffSpecId).notice
									vv.resumeUponReturnPkg = { notice: vv.handOffNotice }
									vv.resumeUponReturnPkgJSON = JSON.stringify(vv.resumeUponReturnPkg)
								}
								else {
									vv.resumeUponReturnPkgJSON = ""
								}
								localStorage.resumeUponReturnUrl = vv.resumeUponReturnUrl
								localStorage.resumeUponReturnPkgJSON = vv.resumeUponReturnPkgJSON
														
								
								vv.noticeTitle = 'Next...';
								vv.noticeCopy = 'Please check your email and click the link to activate your account.';
								vv.startEndTarget = '.navChoiceSignup';
								

								
								vv.dontCarePromise = that._executeNg.apply(that, 
									[ '.MdDialogMngrVcc', 'openDoNothingNoticeDialog', [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget ] ]
								);
								

								
								
								/*

								// add step to uncheck checkbox programtically to close menu
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
								);
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'refresh', [ ] ]
								);
								
								vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
								vv.exeReturn = await that._executeNgAsync.apply(that, 
									[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
								);
								
								vv.handoffPkg = that._getHandoffPkg(vv.handoffSpecId , 'success');
								console.dog(">>> Signup succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
								
								if (vv.handoffPkg) {
									///alert("boooo2");
									vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
								}
								*/
							}
							else {
								vv.promiseDontCare = that._executeNgAsync.apply(that, 
								[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'error'] ]);
							}			
					}
					catch(err) {
						
					}

				//}			
			}
		//}
		
		//{ RE: Shared Email Button clicked from Shared Menu.
			p._run__EmailShareButton_clicked__Xnt = function(senderScope, pkg) {
				var that = this;
				var vv = {}
				//vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				vv.purposing = pkg.notice.purposing;
				///alert(typeof vv.purposing);

				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openEmailShareDialog', [vv.purposing] ]
				);		
			}
			///p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt

		//}

		//{ RE: Email Share form's submit button clicked on (from within modal)
			p._run__EmailShareSubmitButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_EmailShareSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				//{	
				
					try {
						vv.result = await that._executeNgAsync.apply(that, 
							[ '.EmailSharePanelVcc', 'handleEmailShareFormSubmitAsync', [vv.handoffSpecId] ]);

						// {Check if result has valid sessionId, if so, then good.}
							if ( vv.result.status === 'succeeded' ) {
					
								/* may not needed
								vv.result = await vv.promise2;
								
								vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
								
								// add step to uncheck checkbox programtically to close menu
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
								);
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'refresh', [ ] ]
								);
								
								vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
								vv.exeReturn = await that._executeNgAsync.apply(that, 
									[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
								);
								*/

								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'success'] ]);

								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);
								

								vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, 'success');
								console.dog(">>> EmailShare succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
								if (vv.handoffPkg) {
									vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
								}
							}
							else {
								//crearte method to md_dialog to display to messag area
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'error'] ]);
							}
					}
					catch(err) {
						
					}

				//}			
			}
		//}


		//{ RE: Report Email Button clicked from Shared Menu.
			p._run__EmailReportButton_clicked__Xnt = function(senderScope, pkg) {
				var that = this;
				var vv = {}
				//vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				vv.purposing = pkg.notice.purposing;

				vv.promise1 = that._executeNg.apply(that, 
					[ '.MdDialogMngrVcc', 'openEmailReportDialog', [vv.purposing] ]
				);		
			}
			///p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt

		//}

//{ RE: Email Report form's submit button clicked on (from within modal)
			p._run__EmailReportSubmitButtonInDialog_clicked__Xnt = async function(senderScope, pkg) {

				var that = this;
				var vv = {}
				
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_EmailReportSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
				
				//{	
				
					try {
						vv.result = await that._executeNgAsync.apply(that, 
							[ '.EmailReportPanelVcc', 'handleEmailReportFormSubmitAsync', [vv.handoffSpecId] ]);

						// {Check if result has valid sessionId, if so, then good.}
							if ( vv.result.status === 'succeeded' ) {

								/// vv.voidd = await that.toolbox.sleep(2000) 
					
								/* may not needed
								vv.result = await vv.promise2;
								
								vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
								
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
								);
								
								vv.exeReturn = that._executeNg.apply(that, 
									[ '.Header4StndUseVcc', 'refresh', [ ] ]
								);
								
								vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
								vv.exeReturn = await that._executeNgAsync.apply(that, 
									[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
								);
								*/

								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'success'] ]);

								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'hideDialog', [] ]);

								vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, 'success');
								console.dog(">>> EmailReport succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
								if (vv.handoffPkg) {
									vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
								}
							}
							else if ( vv.result.status === 'failed' ) {
								//crearte method to md_dialog to display to messag area
								
								vv.promise2 = that._executeNgAsync.apply(that, 
									[ '.MdDialogMngrVcc', 'displayNotice', [vv.result.messageForDisplay, 'error'] ]);
							}
					}
					catch(err) {
						
					}

				//}			
			}
		//}
		
		
		//{ RE: Password Reset from link in Email for forgot password. Handle button on password reset page clicked event
			p._run__PasswordResetButton_clicked__Xnt = function(senderScope, pkg) {
console.dog('-------------------call mediator when submit password reset----------------------------');
				var that = this;
				var vv = {};

				vv.notice = pkg.notice;

				// find angular element/directive, call function in the controller
				vv.promise1 = that._executeNg.apply(that, 
					[ '.Page4rPasswordResetVcc', 'submitPasswordResetForm', [vv.notice] ]
				);		
			};
		//}
		

		//{ RE: Password Reset from link in Email for forgot password. Handle button on password reset page clicked event
			p._run__PasswordResetReturnAction__Xnt = async function(senderScope, pkg) {
console.dog('-------------------call mediator deal with server API returns in password reset----------------------------');
				var that = this;
				var vv = {};

				vv.notice = pkg.notice;

				// find angular element/directive, call function in the controller
				vv.promise1 = that._executeNg.apply(that, 
					[ '.Page4rPasswordResetVcc', 'passwordResetReturnAction', [vv.notice] ]
				);		
				
				return 'done';
			};
		//}
		
		
		//{ RE: LOGOUT button clicked.
			p._run__LogoutButton_clicked__Xnt = async function(senderScope, pkg) {
				var that = this;
				var vv = {}
			
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LogoutButton_clicked__Xnt  - that, pkg: ", that, pkg);
				
				vv.isHandoff = ( pkg.notice.handoffSpecId && pkg.notice.doHandoffFirst ) ? true : false;

				
				if ( ! vv.isHandoff ) {
					vv.confirmQuestion = 'confirm logout?';
					vv.startEndTarget = '.navChoiceLogout';
					
					vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId);
					vv.doHandoffFirst = true;
					
					
					vv.promise1 = that._executeNg.apply(that, 
						[ '.MdDialogMngrVcc', 'openStndConfirmDialog', [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget ] ]
					);	
				}
				else {
					console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - pkg ", pkg);
					if ( pkg.notice.action === 'proceed' ) {
						vv.voidd = that.sessionService.logOutOfRemoteSession();
						vv.promise2 = that._executeNgAsync.apply(that, 
							[ '.MdDialogMngrVcc', 'hideDialog', [] ]
						);
						vv.result = await vv.promise2
						
						vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
						
						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, 
							[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
						);
						
						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-1");
						
						vv.exeReturn = that._executeNg.apply(that, 
							[ '.Header4StndUseVcc', 'refresh', [ ] ]
						);
						
						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-2");
						
						that._removePlayer__Rtn()
						
						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-3");

						if ( that.stateNg.current.logoutGotoState ) {
							that.stateNg.go(that.stateNg.current.logoutGotoState);
						}
						else {
							vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
							vv.exeReturn = await that._executeNgAsync.apply(that, 
								[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
							);
						}
					}
					else if ( pkg.notice.action === 'cancel' ) {
						vv.promise2 = that._executeNgAsync.apply(that, 
							[ '.MdDialogMngrVcc', 'hideDialog', [] ]
						);

						vv.result = await vv.promise2
						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, 
							[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
						);
						
						vv.exeReturn = that._executeNg.apply(that, 
							[ '.Header4StndUseVcc', 'refresh', [ ] ]
						);
					}
					
				}	
			}
		//}
		
		
		//{ RE: Page cannot setup
		
			//{ RE: Page cannot setup because user not authed.	
				p._run__Page_cannotSetupBecauseUserNotAuthed__Xnt = async function(senderScope, pkg) {
					
					var that = this;
					var vv = {}
					console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Page_cannotSetupBecauseUserNotAuthed__Xnt  - that: ", that);
					
					vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)

					
					//{	Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === 'string' ? true : false;
					//}
					
					//{	Pathway 4r logged in user.
						if (vv.isUserLoggedIn) {
							vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
							
							console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  USER IS LOGGED IN: vv, that: ", vv, that);

							vv.exeReturn = await that._executeNgAsync.apply(that, 
								[ vv.pageVccSelector, '_setup', [ ] ]
							);		
							///alert(">>> BOOOO3 ");
						}
					//}
					//{	Pathway 4r non-logged in user.
						else if (! vv.isUserLoggedIn) {
							///alert("booooo");
							console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  USER IS *NOT* LOGGED IN: vv, that: ", vv, that);
							//{	Set station on player per station for this page.
								vv.promise1 = that._executeNg.apply(that, 
									[ '.MdDialogMngrVcc', 'openLoginDialog', [vv.handoffSpecId] ]
								);	
							//}
							
							//{	Upon resolution of promise, try to notify Player page.
								try {
									vv.exeReturn = await vv.promise1;
									//	Do nothing.  New view to handoff transactions.
								}
								catch(e) {
									console.dog('>>> _run__Page_cannotSetupBecauseUserNotAuthed__Xnt - FAILED - e:', e);
									///return e;   //	No return.  The end of an async XNT is the end of the asyn path.
								}
							//}
							///alert(">>> BOOOO 4");
						}
					//}
					
					
					console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Page_cannotSetupBecauseUserNotAuthed__Xnt");
					return vv.rtnReturn;	
					
				}
				
			
			//}	


		//}
		
	//}
	

	//	================================================================
	//	I(N)TERNAL Notice Transactions: (Nnt)  
	//	...These are for notices that originate *inside* of mediator.
	//{
	
		p._run__EmailValidation_requested__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidation_requested__Nnt");
			
			
			vv.validationCode = that.locationNg.search().vcode
			vv.result = await that.membersService.verifyMemberWithCode(vv.validationCode)
			
			if (true ||  v.result.status === 'succeeded') {
				vv.resumeUponReturnUrl = localStorage.resumeUponReturnUrl
				///localStorage.removeItem('resumeUponReturnUrl')
				window.location.href = vv.resumeUponReturnUrl.substring(1)
				///that.locationNg.url(vv.resumeUponReturnUrl).replace();
			}

				
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidation_requested__Nnt");
			return vv.rtnReturn;
		}
		
		
		p._run__EmailValidationRoutine_requested__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidationRoutine_requested__Nnt");
			
			vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)
			vv.proceedTo = ""
			
			//{ Clear resume info helper function.
				vv.clearResumeInfo = function() {
					localStorage.removeItem('resumeUponReturnUrl')
					localStorage.removeItem('resumeUponReturnPkgJSON')
				}
			//}

			//{ Determine if user is logged in.
				vv.sessionId = that._getSessionId__Rtn();
				vv.isUserLoggedIn = typeof vv.sessionId === 'string' ? true : false;
			//}
			//{ Indentify steps to proceed to if user is logged in, or is not.
				if ( vv.isUserLoggedIn === true ) {
					vv.proceedTo = "mainStep02_redirectToResumePg"
				}
				else {
					vv.proceedTo = "mainStep01_validateConfirmation_thenAskForLogin"
				}
			//}	
			
			if ( vv.proceedTo === "mainStep01_validateConfirmation_thenAskForLogin") { 
				
				//{ Clear resume info in 5 minutes no matter what.  We're giving the user 5 minutes to complete validation/login/resume transaction.
					vv.clearResumeInfoTimeout = that.timeoutNg(vv.clearResumeInfo, 1000*60*5)
				//}
			
				//{ Parse out, and then submit validation code if hasn't already succuessfully been done.
					vv.validationCode = that.locationNg.search().vcode
					if ( localStorage['vcodeBeenValidated_'+vv.validationCode] === 'true' ) {
						vv.verificationResult = { 
							status: 'succeededPreviously'
						}
					}
					else {
						vv.verificationResult = await that.membersService.verifyMemberWithCode(vv.validationCode)
					}
				//}
				if (vv.verificationResult.status === 'failed') {
					// We likely have a user who is repeating validations after success, or waited too long.
					
					//{ Clear resume info immediately. 
						vv.clearResumeInfo() 
					//}
					
					//{	"Don't-care/OK" notify user that validation failed, and instruct what to do.
						vv.startEndTarget = ""
						vv.noticeTitle = "error"
						vv.noticeCopy = "Email address confirmation failed.  <br><br>Please ignore this message and click on the logo above to go to the home page if your account has already been activated.  <br><br>Else, please try again."
										
						vv.dontCarePromise = that._executeNg.apply(that, 
							[ '.MdDialogMngrVcc', 'openDoNothingNoticeDialog', [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget ] ]
						);
						
						vv.dontCare = await that.toolbox.pause(100)
						vv.p1Copy = "ERROR"
						vv.p2Copy = "Accout activation failed"
						vv.p3Copy = "Please ignore this message and click on the logo above to go to the home page if your account has already been activated."
						vv.p4Copy = "Else, please try again."
						
						vv.exeReturn = await that._executeNgAsync.apply(that, 
							[ '.Page4rEmailValidationVcc', 'setTextCopy', [vv.p1Copy, vv.p2Copy, vv.p3Copy, vv.p4Copy ] ]
						);

					//}
				}
				else if ( vv.verificationResult.status === 'succeeded' || vv.verificationResult.status === 'succeededPreviously' ) {
					//{ Record in localstorage fact of valiation of vcode.
						localStorage['vcodeBeenValidated_'+vv.validationCode] = true
					//}
					//{ Bring up login dialog.  If upon successful login (determined in other transaction), mediator should handoff backto this transaction - be logged in - and go to mainStep02_redirectToResumePg.
					
						vv.infoCopy = "<b>Your account has been activated</b>.  <br><br>If you are a <b>mobile app user</b>, you may return to the app.  <br><br>If you are <b>web browser user</b>, upon successful login from *this* form, you will be returned to where you left off or to the home page."
						
						vv.dontCarePromise = that._executeNg.apply(that, 
							[ '.MdDialogMngrVcc', 'openLoginDialog', [vv.handoffSpecId, vv.infoCopy] ]
						);
						
					vv.dontCare = await that.toolbox.pause(100)
					vv.p1Copy = "Your account has been activated"
					vv.p2Copy = "If you are a mobile app user, you may return to the app."
					vv.p3Copy = "If you are web browser user, please login."
					vv.p4Copy = ""
					
					vv.exeReturn = await that._executeNgAsync.apply(that, 
						[ '.Page4rEmailValidationVcc', 'setTextCopy', [vv.p1Copy, vv.p2Copy, vv.p3Copy, vv.p4Copy ] ]
					);	
					//}
				}
			}
			
			else if ( vv.proceedTo === "mainStep02_redirectToResumePg") { 
				////YO vv.isHandoff = ( pkg.notice.handoffSpecId && pkg.notice.doHandoffFirst ) ? true : false;
				if ( false && ! vv.isHandoff ) {
					// { (TODO - NOT RUNNING) Inform user about where they go next.  To proceed requires message acknowlegement. 
						vv.confirmQuestion = 'confirm logout?';
						vv.startEndTarget = '.navChoiceLogout';
						
						vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId);
						vv.doHandoffFirst = true;
						
						
						vv.promise1 = that._executeNg.apply(that, 
							[ '.MdDialogMngrVcc', 'openStndConfirmDialog', [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget ] ]
						);	
					//}
				}
				else {
					//{ Now Clear resume info in 40 seconds no matter what, since user doesn't have to do anything else to complete the validation/login/resume transaction.
						vv.clearResumeInfoTimeout = that.timeoutNg(vv.clearResumeInfo, 1000*40)
					//}
					// { Take user to resume page if there is one, else go to home page.
						vv.resumeUrlPath = localStorage.resumeUponReturnUrl || '/home';
						localStorage.removeItem('resumeUponReturnUrl')
						window.location.href = vv.resumeUrlPath.substring(1)
					//}
				}	
			}
						

			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidationRoutine_requested__Nnt");
		}
		
		p._run__EmailValidationRoutineDetermination_requested__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidationRoutineDetermination_requested__Xnt");
			
			vv.handoffSpecId = pkg.notice.handoffSpecId  || that._bsetHandoffSpec(pkg.entryId)
			
			//{	Determine if user is logged in.
				vv.sessionId = that._getSessionId__Rtn();
				vv.isUserLoggedIn = typeof vv.sessionId === 'string' ? true : false;
			//}
			
			if ( vv.isUserLoggedIn ) {
				//{	"Don't-care/OK" notify user he/she is already logged in, and instruct what to do.		
					vv.startEndTarget = ""
					vv.noticeTitle = "attention"
					vv.noticeCopy = "You are already logged into an existing account.  <br><br>In order to activate your new account, please log out and then reload this page."
									
					vv.dontCarePromise = that._executeNg.apply(that, 
						[ '.MdDialogMngrVcc', 'openDoNothingNoticeDialog', [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget ] ]
					);
					
					vv.dontCare = await that.toolbox.pause(100)
					vv.p1Copy = "ATTENTION"
					vv.p2Copy = "You are currently logged into an existing account."
					vv.p3Copy = "In order to activate your new account, please log out and then reload this page."
					vv.exeReturn = await that._executeNgAsync.apply(that, 
						[ '.Page4rEmailValidationVcc', 'setTextCopy', [vv.p1Copy, vv.p2Copy, vv.p3Copy ] ]
					);
					
					
					

				//}
			}
			else {
				//{ Proceed to email valiation routine.
					vv.pkg = {
						notice: {
							noticeName: 'EmailValidationRoutine_requested'
						}
					}
					that.receiveNotice("", vv.pkg)
				//}
			}

						
			//	LOGIC TBD.
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidationRoutineDetermination_requested__Nnt");
		}
		
		
		
		
		
		

		p._run__ChangedTo_SomeSimplePage__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_SomeSimplePage__Nnt");
			
			//	LOGIC TBD.
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_SomeSimplePage__Nnt");
		}
		p._run__ChangedTo_Page4rPasswordResetUSC__Nnt = p._run__ChangedTo_SomeSimplePage__Nnt

		
		p._run__ChangedTo_Page4rHomeUSC__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rHomeUSC__Nnt");
			
			//	LOGIC TBD.
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rHomeUSC__Nnt");
		}
		
		p._run__ChangedTo_Page4rStationDtlUSC__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rStationDtlUSC__Nnt");
			
			//{	Needed params: 
				vv.stationId = pkg.notice.stationId;
				vv.stationName = pkg.notice.stationName;
			//}
			
			//	Set station on player per station for this page.
			///vv.rtnReturn = that._readyPanelForPlay__Rtn(vv.stationId)
			
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rStationDtlUSC__Nnt");
			///return vv.rtnReturn;
		}
		p._run__ChangedTo_Page4rStationDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt
		p._run__ChangedTo_Page4rSchoolDtlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt
		p._run__ChangedTo_Page4rSchoolDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt
		p._run__ChangedTo_Page4rStationDtlFlexiTestUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt
		
		
		p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rPlaylistDtlUSC__Nnt");
			
			//{	Needed params: 
			//}
			
			vv.newPkg = {
				notice: {
					noticeName: 'CurrentlyPlayingTrackInfo_wanted'
				}
			}
			console.dog(">>> !!! vv.newPkg ", vv.newPkg)
			vv.dontCare = await that._notifyPlayerPg(vv.newPkg)
			
			//	Set station on player per station for this page.
			///vv.rtnReturn = that._readyPanelForPlay__Rtn(vv.stationId)
			
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rPlaylistDtlUSC__Nnt");
			///return vv.rtnReturn;
		}
		p._run__ChangedTo_Page4rPlaylistDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt
		p._run__ChangedTo_Page4rProjectDtlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt
		p._run__ChangedTo_Page4rProjectDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt
		
		
		p._run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt");
			

			/*
			vv.asynchWrap = function() {
				vv.dontCarePromise = that._executeNg.apply(that, 
					[ '.TracksPanelVcc', 'decorateLoadedTrackListing', [ that.stateParamsNg.trackUid ] ]
				);	
			}
			vv.voidd = that.timeoutNg(vv.asynchWrap, 2500);
			*/
			
					
			vv.pkg = {
				notice: {
					noticeName: 'TrackPlay_requested',
					stationId: that.stateParamsNg.stationId,
					playlistId: that.stateParamsNg.playlistId,
					trackId: that.stateParamsNg.trackId,
					trackUid: that.stateParamsNg.trackUid
				}
			}
			
			///alert(">>> BOOOO 2 " + JSON.stringify(vv.pkg));
			vv.voidd = await that.receiveNotice('', vv.pkg);
			
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt");
			///return vv.rtnReturn;
		}
		p._run__ChangedTo_Page4rProjectDtlForEpisodeUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt
		
		
		p._run__ChangedTo_Page4rEmailValidationUSC__Nnt = async function(senderScope, pkg) {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rEmailValidationUSC__Nnt");
			
			vv.pkg = {
				notice: {
					noticeName: 'EmailValidationRoutineDetermination_requested'
				}
			}
			
			vv.dontCare = that.receiveNotice("", vv.pkg)

		
			//	LOGIC TBD.
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rEmailValidationUSC__Nnt");
		}

	//}
	
	
	


	return aa.MyClass;
	
})();


