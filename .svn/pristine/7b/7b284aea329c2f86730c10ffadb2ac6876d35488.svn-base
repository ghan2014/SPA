/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookLoginButtonVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "FacebookLoginButtonVcc";
		aa.myClassName = "FacebookLoginButtonVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, accessService, sessionService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				that.accessService = accessService
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
		p._handleFacebookButtonClick = function() {	
			var that = this;
			that._handleFacebookButtonClick()
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
			///alert(">>> FacebookLoginButtonVcc - boooooo");
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
			that.scopeNg.fromLf = {};
			that.scopeNg.toLf = {};
			that.scopeNg.inLf = {};
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> FacebookLoginButtonVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done';
		};
		
		p._setupSpcfDatas = function() {
			/* Stub */
		};
		

		
		
		p._setScopeWatchers = async function() {
			var that = this;
			
			//{ Watch attributes.
				that.scopeNg.$watch("atrbHandoffSpecId", 
					function() {that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;}
				)
			//}
			
			return 'done'
		};
		
		
		p._handleFacebookButtonClick = async function() {
			var that = this;
			var vv = {};
			
			vv.callbackForAuthSuccess = function(authResponse) {
				vv.voidd = that._handleFacebookAuthSuccessAync(authResponse);
			}

			console.dog('>>> FROM _handleFacebookButtonClick - RUNNING:  ')
			FB.login(
				function(clickResponse) {
					vv.clickResponse = clickResponse;
					console.dog(">>> _handleFacebookButtonClick - vv.clickResponse: ", vv.clickResponse)
					
					if (vv.clickResponse.authResponse) {
						
						console.dog(">>> _handleFacebookButtonClick - vv.clickResponse.authResponse: ", vv.clickResponse.authResponse)
						
						vv.callbackForAuthSuccess(vv.clickResponse.authResponse)
						

					}
					else {
						console.dog(">>> _handleFacebookButtonClick - User cancelled login or did not authorize.")
					}
				}, {scope: 'public_profile,email'}
			);
			
			return 'done'
		}


		p._handleFacebookAuthSuccessAync = async function(facebookAuthResponse) {
			var that = this;
			var vv = {};
			
			vv.fbAccessToken = facebookAuthResponse.accessToken;
///alert(">>> vv.fbAccessToken: " + that.scopeNg.loc.handoffSpecId );
			console.dog('>>> FROM _handleFacebookAuthSuccess - RUNNING - fbAccessToken:  ', vv.fbAccessToken)
			try {
				
				vv.promise1 = that.accessService.connectWithToken(vv.fbAccessToken, 'facebook')
				vv.sessionId = await vv.promise1;  // No need to retain returned result.

				console.dog('>>> FROM _handleFacebookAuthSuccess - SUCCESS ', vv.sessionId)
				that._notifyMediatorOfLoginSuccess(vv.sessionId);
				///return vv.result; // No Return. End of this async road.
				return 'done'
			} 
			catch(e) {
				console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - FAILED - e:', e);
				return e;
			}
		}
		
		
		
	//}

	return aa.MyClass;
	
})();



