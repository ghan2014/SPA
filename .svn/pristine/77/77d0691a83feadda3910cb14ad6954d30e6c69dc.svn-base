/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookAuthMachineVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "FacebookAuthMachineVcc";
		aa.myClassName = "FacebookAuthMachineVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService, usersService) {
			console.dog(">>> FacebookAuthMachine_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				that.usersService = usersService
				that._setupOnGo()
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
	//	PUBLIC METHODS:
	//{
		p.handleFacebookButtonClick = async function(handoffSpecId) {	
			var that = this;
			await that._startFacebookAppAuth(handoffSpecId)
			return 'done'
		}

		p.tryRegisterAndAuth = async function(handoffSpecId) {	
			var that = this;
			var vv = {}
			vv.returnObj = {}

			///alert(">>> tryRegisterAndAuth - START: " + handoffSpecId)

			vv.registerReportObj = await that._registerUser()
			if ( vv.registerReportObj.status = 'succeeded' ) {
				vv.authResultObj = await that._authUser()
				if ( vv.authResultObj.status = 'succeeded' ) {
					vv.returnObj.status = 'succeeded'
				}
				else {
					vv.returnObj.status = 'failed'
				}

			}
			else {
				vv.returnObj.status = 'failed'
			}
			return vv.returnObj
		}

		p.loginToFacebook = async function() {
			var that = this
			var vv = {}

			console.dog('>>> FROM loginToFacebook - started. ')
			///alert('>>> FROM loginToFacebook - started. ')

			vv.myPromise = that._startFacebookLoginOnly()

			return vv.myPromise;

		}

		p.getFacebookLoginStatus = async function() {
			var that = this;
			var vv = {};
			var resultObjj = {}

			console.dog('>>> FROM getFacebookLoginStatus - started. ')
			///alert('>>> FROM getFacebookLoginStatus - started. ')


			//{ Setup promise that informs about FB loginStatus .
				vv.myPromise = new Promise(function(resolve,reject){
				
	
					vv.callback = function(fromFBResponse) {

						if (	
							fromFBResponse
							&& fromFBResponse.status === 'connected'
						  	&& fromFBResponse.authResponse 
						  	&& fromFBResponse.authResponse.accessToken 
						  ) {					
							resultObjj.isLoggedIn = true
							resultObjj.loginStatus = fromFBResponse.status
							resultObjj.authResponse = fromFBResponse.authResponse 
							resultObjj.accessToken = fromFBResponse.authResponse.accessToken 
							
							console.dog(">>> getFacebookLoginStatus - logged in: " ,fromFBResponse)
							///alert(">>> resultObjj.status succeeded: " + resultObjj.status)
						}
						else {
							resultObjj.isLoggedIn = false
							resultObjj.loginStatus = undefined
							resultObjj.authResponse = undefined 
							console.dog(">>> getFacebookLoginStatus - not logged in ",  fromFBResponse)
							///alert(">>> resultObjj.status failed: " + resultObjj.status)
						}
						resolve(resultObjj)
					}

					FB.getLoginStatus( vv.callback );
				})
			//}		

			return  vv.myPromise

		}
	//}
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setupOnGo = async function() {
			var that = this;
			var vv = {}
			that.scopeNg.$watch('goDude', 
				function() {
					if ( that.scopeNg.goDude === 'truee' ) {
						var dc = that._setup();
					}
				}
			);
			return 'done';
		};
	
		p._setup = async function() {
			var that = this;
			///alert(">>> FacebookAuthMachineVcc - boooooo");
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			that.scopeNg.$apply();
			
			return 'done';
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};

			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> FacebookAuthMachineVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done';
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
			that.scopeNg.loc.accessTokenType = 'facebook'
		};
		

		
		
		p._setScopeWatchers = async function() {
			var that = this;
			return 'done'
		};


		p._startFacebookLoginOnly = async function(handoffSpecId) {
			var that = this;
			var vv = {};
			var resultObjj = {}

			console.dog('>>> FROM _startFacebookLoginOnly - started. ')
			///alert('>>> FROM _startFacebookLoginOnly - started. ')


			//{ Setup promise that informs about FB login state.
				vv.myPromise = new Promise( function(resolve,reject){
				
					console.dog(">>> _startFacebookLoginOnly - in promise function ")
					///alert(">>> _startFacebookLoginOnly - in promise function ")

					vv.callback = function(fromFBLoginResponse) {

						console.dog(">>> _startFacebookLoginOnly - in call back function for promise function")
						///alert(">>> _startFacebookLoginOnly - in call back function for promise function")

						if (	
							fromFBLoginResponse
						  	&& fromFBLoginResponse.authResponse 
						  	&& fromFBLoginResponse.authResponse.accessToken 
						  ) {					
							resultObjj.status = 'succeeded'
							resultObjj.authResponse = fromFBLoginResponse.authResponse 
							console.dog(">>> _startFacebookAppAuth - from FB login succeeded,: " ,fromFBLoginResponse)
							///alert(">>> resultObjj.status succeeded: " + resultObjj.status)
						}
						else {
							resultObjj.status = 'failed';
							resultObjj.authResponse = undefined 
							console.dog(">>> _startFacebookAppAuth - from FB login failed: ",  fromFBLoginResponse)
							///alert(">>> resultObjj.status failed: " + resultObjj.status)
						}
						resolve(resultObjj)
					}

					FB.login( vv.callback, {scope: 'public_profile,email'} );
				})
			//}		

			return  vv.myPromise
		}
		
		
		p._startFacebookAppAuth = async function(handoffSpecId) {
			var that = this;
			var vv = {};

			console.dog('>>> FROM _startFacebookAppAuth - RUNNING:  ')

			//{ Define a callback.
				vv._callbackForFBLogin = function(fromFBResponse) {

					vv.fromFBResponse = fromFBResponse;

					console.dog(">>> _callbackForFBLogin (facebook) - vv.fromFBResponse: ", vv.fromFBResponse)

					//{ Define an inner callback. 
						vv._callbackForFBAuthSuccess = function(authResponseFromFacebook) {
							vv.voidd = that._handleFromFacebookAuthSuccessAync(authResponseFromFacebook, handoffSpecId);
						}
					//}	
					
					if (	
						vv.fromFBResponse
					  	&& vv.fromFBResponse.authResponse 
					  	&& vv.fromFBResponse.authResponse.accessToken 
					  ) {					
						console.dog(">>> _startFacebookAppAuth - from FB login succeeded" )

						vv._callbackForFBAuthSuccess(vv.fromFBResponse.authResponse)
					}
					else {
						console.dog(">>> _startFacebookAppAuth - from FB login failed.")
					}
				}
			//}

/*
			FB.getLoginStatus(function(response) {
				console.dog(">>> response.status: ", response.response);
				alert(">>> response.status: ", response.status);
			})
*/

			///that._openFacebookLoginManually()
			FB.login( vv._callbackForFBLogin, {scope: 'public_profile,email'} );
			
			return 'done'
		}
		
		
		p._zz_openFacebookLoginManually = function() {
			/* NOT PRESENTLY USED.  STILL IN DEV STAGE.  TO BE USED IN iOS CHROME FB LOGIN FIX */
			
			var ABSOLUTE_URI = "http://devweb14.nanocosm.com/webjerryLive05/school/M4A_july22/1050";
			var FB_ID = "1056625957688762";
			function openFBLoginDialogManually(){
			///alert("boooooo");
			  // Open your auth window containing FB auth page 
			  // with forward URL to your Opened Window handler page (below)
			  
			  var redirect_uri = "&redirect_uri=" + ABSOLUTE_URI + "/AfterManualFBLogin";
			  var scope = "&scope=public_profile,email";
			  var url = "https://www.facebook.com/dialog/oauth?client_id=" + FB_ID + redirect_uri + scope;

			  // notice the lack of other params in window.open
			  // for some reason the opener is set to null
			  // and the opened window can NOT reference it
			  // if params are passed. #Chrome iOS Bug
			  window.open(url);

			}
			
			openFBLoginDialogManually()	
			
		}


		p._handleFromFacebookAuthSuccessAync = async function(authResponseFromFacebook, handoffSpecId) {
			var that = this;
			var vv = {};

			console.dog('>>> FROM _handleFromFacebookAuthSuccessAync - START')
			
			vv.accessToken = authResponseFromFacebook.accessToken;

			vv.authReportObj =  await that._authUser(vv.accessToken)

			that.scopeNg.loc.accessToken = vv.accessToken;

			if  ( vv.authReportObj.status === 'succeeded' ) {				
				vv.pkgForMediator = {
					notice: {
						noticeName: 'FacebookBasedAuth_succeeded',
						handoffSpecId: handoffSpecId,
						doHandoffFirst: 'true'
					}
				}
				that.mediator.receiveNotice("", vv.pkgForMediator);
			}
			else if  ( vv.authReportObj.status === 'failed' ) {
				vv.pkgForMediator = {
					notice: {
						noticeName: 'FacebookBasedAuth_failed',
						handoffSpecId: handoffSpecId,
						doHandoffFirst: 'true'
					}
				}
				that.mediator.receiveNotice("", vv.pkgForMediator);
			}

			return 'done'
		}
		

		p._authUser = async function(accessToken) {

			var that = this;
			var vv = {}
			vv.authReportObj = {}
			vv.accessToken = accessToken  ||  that.scopeNg.loc.accessToken
			vv.accessTokenType = that.scopeNg.loc.accessTokenType 

			vv.returnedSessionId = await that.sessionService.startRemoteSessionWithAccessTokenAsync(vv.accessToken, vv.accessTokenType)

			console.dog('>>> FROM (Facebook) _authUser - PNT-A - authResult: ', vv.authResult);


			if  (  vv.returnedSessionId  && typeof vv.returnedSessionId === 'string')  {
				vv.authReportObj.status = 'succeeded'
				vv.authReportObj.sessionId = vv.returnedSessionId
			}
			else {
				vv.authReportObj.status = 'failed'
			}


			console.dog('>>> FROM (Facebook) _authUser - PNT-A2 - authReportObj: ',  vv.authReportObj);
			return  vv.authReportObj
		}

		p._registerUser = async function(accessToken) {

			var that = this;
			var vv = {}
			vv.registerReportObj = {}
			vv.accessToken = accessToken  ||  that.scopeNg.loc.accessToken
			vv.accessTokenType = that.scopeNg.loc.accessTokenType 


			vv.registerResultObj = await that.usersService.registerWithToken(vv.accessToken, vv.accessTokenType)
			console.dog('>>> FROM (Facebook) _registerUser - PNT-A - registerResultObj: ', vv.registerResultObj);

			if  ( vv.registerResultObj.status === 'succeeded')  {
				vv.registerReportObj.status = 'succeeded'
				///alert('>>> Register succeeded')
			}
			else {
				vv.registerReportObj.status = 'failed'
				///alert('>>> Register failed')
			}

			return vv.registerReportObj
		}
		
		
	//}

	return aa.MyClass;
	
})();



