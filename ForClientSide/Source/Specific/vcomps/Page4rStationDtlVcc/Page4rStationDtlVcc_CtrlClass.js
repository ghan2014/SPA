/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rStationDtlVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Page4rStationDtlVcc";
		aa.myClassName = "Page4rStationDtlVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, sessionService, stationsService) {
			console.dog(">>> Page4rStationDtlVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.sessionService = sessionService
				that.stationsService = stationsService
				that._setup();
				return 'done'
			}
		}
	//}

	//	Scaffold class.
	// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(
			aa.myClassName, aa.myConstructor, aa.ParentClass
		)
	//}
		
	var p = aa.MyClass.prototype;
	
	
	//	================================================================
	//	APPISH PUBLIC/PRIVATE METHODS:
	//{
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = async function() {
			var that = this;
			return await that._refresh()
		}

	//}	
	
	
	//	================================================================
	//	APPISH PRIVATE METHODS:
	//{	
	
		p._setup = async function() {
			var that = this;
			var vv = {}

			vv.isOkToSetup = true;
			
			if ( typeof that._testIfOkToSetup === 'function' ) {
				vv.isOkToSetupObj = await that._testIfOkToSetup();
				vv.isOkToSetup = vv.isOkToSetupObj.isOk;
			}
			
			if ( vv.isOkToSetup ) {
				console.dog(">>> Page4rStationDtlVcc_CtrlClass - that.scopeNg / that.stateNg: ", that.scopeNg, that.stateNg);

				await that._notifyEnteringPageState(that.stateParamsNg);
				await that._setupStndDatas()
				await that._setupSpcfDatas();
				await that._setSyns()
				await that._setScopeWatchers();
				await that._notifyChangedPageState(that.stateParamsNg);
				that.scopeNg.loc.goDude = that.scopeNg.goDude || 'truee';
				console.dog(">>> Page4rStationDtlVcc setup - setup complete");
			}
			else {
				vv.voidd = await that._handleNotOkToSetup( vv.isOkToSetupObj  ) 
			}
			return 'done'
		};
		
		p._setupStndDatas = function() {
			var that = this;
			
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			console.dog(">>> Page4rStationDtlVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			var vv = {}
			
			that.scopeNg.loc.displayedInfoPanelTitle = "About " + that.stateParamsNg.stationName
			that.scopeNg.loc.displayedPlaylistsPanelTitle = "Projects for " + that.stateParamsNg.stationName;
			that.scopeNg.loc.playlistsFilter = 'active';
			that.scopeNg.loc.stationId = that.stateParamsNg.stationId;
			
			if ( that.stateParamsNg.stationName ) {
				that.scopeNg.loc.stationName = that.stateParamsNg.stationName
			}
			else {
				//{ Pipe in info from remote source.	
					vv.stationDetailsPromise = that._getStationDetails()
					that.scopeNg.loc.details = await vv.stationDetailsPromise;
				//}
				that.scopeNg.loc.stationName = that.scopeNg.loc.details.name;
			}
			return 'done'
		};
		
		p._setScopeWatchers = async function() {
			var that = this;
			return 'done'
		};
		
		p._refresh = async function() {
			var that = this;
			var vv = {};
			
			that._setup();

			that.scopeNg.loc.okToShow = false;
			that.scopeNg.$apply();
			that._setup();	

			return 'done';
		}

		p._setSyns = async function() {
			var that = this;
			that.scopeNg.loc.stationSyn = 'school';
			that.scopeNg.loc.playlistSyn = 'project';
			that.scopeNg.loc.trackSyn = 'episode';
			return 'done'
		}
		

	//}
	
	
	//	================================================================
	//	PAGE TYPE PUBLIC/PRIVATE METHODS:
	//{
	
		p.testIfOkToSetup = p._testIfOkToSetup = async function () {
			var that = this
			var vv = {}
			vv.isOkObj = {
				isOk: false,
				reason: undefined
			}

			//{ User not auth test
				vv.sessionId = that.sessionService.getSessionIdForRemote();
			
				if ( vv.sessionId ) {
					vv.isOkObj = {
						isOk: true,
						reason: undefined
					}
				}
				else {
					if ( ! that.stateNg.current.isAuthRequired === true ) {
						vv.isOkObj = {
							isOk: true,
							reason: undefined
						}
					}
					else {
						vv.isOkObj = {
							isOk: false,
							reason: 'UserNotAuthed'
						}
					}
				}
			//}
			
			return vv.isOkObj
		}

	//}	
		
	//	================================================================
	//	PAGE TYPE PRIVATE METHODS:
	//{
		p._notifyEnteringPageState = async function() {
			var that = this;
			var vv = {}
			var pkg = {
				notice: {
					noticeName: 'Entering_PageState',
					pageStateName: that.stateNg.current.name
				}
			}
			console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);
			
			vv.voidd = await that.mediatorService.receiveNotice(that.scopeNg, pkg);
			return 'done'
		}
		
		
		p._notifyChangedPageState = async function() {
			var that = this;
			
			console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);
			
			var pkg = {
				notice: {
					noticeName: 'Changed_PageState',
					pageStateName: that.stateNg.current.name
				}
			}
			var asyncNotify = function() {
				
				console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);
				
				that.mediatorService.receiveNotice(that.scopeNg, pkg);
			}
			that.timeoutNg(asyncNotify);
			
			return 'done'
		}	
		
		
		p._handleNotOkToSetup = async function(isOkToSetupObj) {
			var that = this;
			var vv = {}
			
			if ( isOkToSetupObj.reason  === 'UserNotAuthed' ) {
				that._setupStndDatas()
				//{ Notifiy mediator reason why can't setup.
					vv.pkg = {
						notice: {
							noticeName: "Page_cannotSetupBecauseUserNotAuthed",
							vcc: aa.myVcName
						}
					}
					that.mediatorService.receiveNotice('', vv.pkg);
				//}
			}
			
			return 'done'
		}
		
	//}	

	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	
	
		p._getStationDetails = async function() {
			var that = this;
			var vv = {}
			vv.stationId = that.scopeNg.loc.stationId;
		
			vv.remoteDetails = await that.stationsService.getStation(vv.stationId )

			vv.details = {
				description: vv.remoteDetails.description,
				logoUrl: vv.remoteDetails.stationLogoUrl,
				name: vv.remoteDetails.name,
				title: vv.remoteDetails.title	
			}
			console.dog(">>> Page4rStationDtlVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);
			
			
			return vv.details
			
		}
	
			
	//}

	return aa.MyClass;
	
})();



