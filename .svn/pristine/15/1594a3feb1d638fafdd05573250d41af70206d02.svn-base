/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: LoginCorePanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "LoginCorePanelVcc";
		aa.myClassName = "LoginCorePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				that._setup();
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
	//	PUBLIC/PRIVATE METHODS:
	//{
		p.zz_handleEmailLoginFormSubmit = function() {	
			var that = this;
			that._handleEmailLoginFormSubmitAsync(that.scopeNg.loc.loginIdfier, that.scopeNg.loc.password)
			
		}
		
		p.handleEmailLoginFormSubmitAsync = async function(loginIdfier, password) {
			var that = this;
			var vv = {};
			
			vv.loginIdfier = that.scopeNg.loc.loginIdfier
			vv.password = that.scopeNg.loc.password

			console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - RUNNING:  '+ vv.loginIdfier + " " + vv.password+"^")
			
			console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - that  ', that)
			
			try {

				vv.promise1 = that.sessionService.logInToRemoteSessionAsync(vv.loginIdfier, vv.password)
				vv.result = await vv.promise1;  // No need to retain returned result.
				
				if  (  typeof vv.result  === 'string') {
					vv.sessionId = that.sessionService.getSessionIdForRemote();
					that.scopeNg.loc.remoteSessionId = vv.sessionId

					console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - Login succeeded.: ',  vv.result);
					vv.returnn  = {status: "succeeded",  sessionId: vv.sessionId,  messageForDisplay: "login succeeded."}
					
				}
				else {
					console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - Login failed.: ', vv.result);
					vv.returnn  = {status: "failed",  errorr: vv.result,  messageForDisplay: "login failed."}
				}

			} 
			catch(errorr) {
				console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - Something went wrong.: ' , errorr);
				vv.returnn = {status: "failed",  errorr: errorr,  messageForDisplay: "sorry, something went wrong."};
			}

			return vv.returnn
		}
		
	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> LoginCorePanelVcc - boooooo");
			that._setupStndDatas()
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};
		
		p._setupStndDatas = function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> LoginCorePanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
			/* FOR NON TESTING */
			that.scopeNg.loc.loginIdfier = '';
			that.scopeNg.loc.password = ''
			/* */
			
			/* FOR TESTING: *
			that.scopeNg.loc.loginIdfier = 'jsimonian+test_@live365.com';
			that.scopeNg.loc.password = 'Aaaa-111'
			* */
		};
		
		p._getSession = function getStation(id) {	
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};
		
		
		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
		}


		p.zz_handleEmailLoginFormSubmitAsync = async function(loginIdfier, password) {
			var that = this;
			var vv = {};

			console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - RUNNING:  '+ loginIdfier + " " + password+"^")
			try {
				vv.promise1 = that.sessionService.logInToRemoteSessionAsync(loginIdfier, password)
				vv.voidd = await vv.promise1;  // No need to retain returned result.
				
				vv.sessionId = that.sessionService.getSessionIdForRemote();
				that.scopeNg.loc.remoteSessionId = vv.sessionId
				
				console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - SUCCESS ', vv.sessionId)
				that._notifyMediatorOfLoginSuccess(vv.sessionId);
				/// return vv.result; // No Return. End of this async road.
			} 
			catch(e) {
				///console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - FAILED - e:', e);
				return e;
			}
		}
		
		p.zz_notifyMediatorOfLoginSuccess = function(sessionId) {
			var that = this;
			var vv = {}
			vv.pkgForMediator = {
				notice: {
					noticeName: "Login_succeeded",
					vc: aa.myVcName,
					context: "",
					sessionId: sessionId,
					handoffSpecId: that.scopeNg.loc.handoffSpecId
				}
			};
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId = undefined;
			that.mediator.receiveNotice("", vv.pkgForMediator);
		}
		
		
	//}

	return aa.MyClass;
	
})();



