/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SessionServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(cookiesNg, httpNg, qNg, resourceNg) {
		var that = this;
		that.cookiesNg = cookiesNg;
		that.httpNg = httpNg;
		that.qNg = qNg;
		that.resourceNg = resourceNg;
		that._setup();
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = function() {
			var that = this;
			that.doSetOnClient = false;
			that._defineModel();
			that._startLocalSession(); 
		}
		
		p._defineModel = function() {
			var that = this;
			that.model = {
				app: {								//	Model aspect defined by app.
					localId: undefined,
					localStartedTs: undefined,
					remoteStatus: undefined,
					remoteStartedTs: undefined,
					remoteEndedTs: undefined,			
					remoteEndedReason: undefined,	//	[logout, timeout, close].
					sessionIdForRemote: undefined,		//	Pass this to our remote resources.
					authServiceUserId: undefined,	//	ie: user's facebook id.
					authServiceIdfier: undefined,	//	ie: facebook, twitter.
					currentRemoteSessionId: undefined
				},
				ext: undefined						//	Model aspect defined externally.
			}
		}
		
		
		p._bgetOurAx2Resource = function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}

			if (  true  ||  ! that.OurAx2Resource ) {   // Force the TRUE on purpose,!  The resource holding state is not desired!
				
				if  ( accessTokenType === 'facebook' ) {
					var accessTokenHeaderParamName = 'FacebookAccessToken'
					var headersObj = {}
					headersObj[accessTokenHeaderParamName] = accessToken
				}
				
				that.OurAx2Resource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype',
					{
						modelType:'@modelType',
						modelSubtype:'@modelSubtype'
					},
					{
						logInToRemoteSession: { 
							email:'@email',
							password:'@password',
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelType: 'auth', modelSubtype: ''}
						},
						startRemoteSessionWithAccessToken: { 
							headers: headersObj,
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelType: 'auth', modelSubtype: accessTokenType}
						}
					}
				);
			}

			return that.OurAx2Resource;
		}
		

		p._startLocalSession = function() {
			var that = this;
			var vv = {}
			vv.data = {}
			return vv.data
		}	

		
		p._logInToRemoteSession = function(loginIdfier, password) {
			var that = this;
			var vv = {}
			
			vv.Resource = that._bgetOurAx2Resource();
			vv.datas = vv.Resource.logInToRemoteSession( { email: loginIdfier, password: password } );
			///console.dog('>>> FROM _logInToRemoteSession - vv.datas: ', vv.datas);
			return vv.datas.$promise
		}
		
		p._logOutOfRemoteSession = function() {
			var that = this;
			var vv = {}
			
			that.model.app.sessionIdForRemote = undefined

			return that.model.app.sessionIdForRemote
		}
		
		p._startRemoteSessionWithAccessToken = function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			
			vv.Resource = that._bgetOurAx2Resource(accessToken, accessTokenType);
			vv.datas = vv.Resource.startRemoteSessionWithAccessToken( {FacebookAccessToken: accessToken}  );

			console.dog('>>> FROM _startRemoteSessionWithAccessToken - vv.datas: ', vv.datas);
			return vv.datas.$promise	
		}
		
		p._updateModelAfterLogin = function(loginData) {
			var that = this;
			var vv = {};
			
			that.model.ext = loginData;
			
			vv.sessionIdForRemote = loginData.sessionId;
			
			///console.dog(">>> _updateModelAfterLogin - sessionId: ", vv.sessionIdForRemote);
			
			that.model.app.sessionIdForRemote = vv.sessionIdForRemote;
		}
		
		p._setAuthHeader = function(doClear) {
			var that = this;
			var vv = {}
			vv.sessionId = that._getSessionIdForRemote();
			vv.headerValString =  doClear === true ? '' : 'Live365 ' +  vv.sessionId
			that.httpNg.defaults.headers.common.Authorization = vv.headerValString;
			///alert('_setAuthHeader')
		}
		
		p._getSessionIdForRemote = function() {
			var that = this;
			var vv = {}
			
			vv.loginDataFromCookie = that._getLoginDataFromCookie();
			
			if (typeof that.model.app.sessionIdForRemote === 'undefined'  
				&&  vv.loginDataFromCookie  
				&&  vv.loginDataFromCookie.sessionId 
			){
				that._updateModelAfterLogin(vv.loginDataFromCookie)
				that._setAuthHeader();
			}
			
			vv.sessionIdForRemote =  that.model.app.sessionIdForRemote;
			
			console.dog(">>> In getSessionIdForRemote - sessionIdForRemote: ", vv.sessionIdForRemote);
			
			return vv.sessionIdForRemote;
		}
		
		p._putLoginDataIntoCookie = function(loginData) {
			var that = this;
			var vv = {}
			
			
			vv.d1 = new Date ();
			vv.expireDateTime = new Date ( vv.d1 );
			vv.expireDateTime.setHours ( vv.d1.getHours() + 4 );
			console.dog(">>> _putLoginDataIntoCookie -  vv.expireDateTime: ", vv.expireDateTime )
			
			that.cookiesNg.putObject( 'loginData', loginData, {'expires': vv.expireDateTime} )
		}

		p._getLoginDataFromCookie = function() {
			var that = this;
			var vv = {}
			
			vv.loginData = that.cookiesNg.getObject('loginData')
			
			return vv.loginData;
		}		
		
		
	//}
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
	
		p.getSessionIdForRemote = function() {
			var that = this;
			return that._getSessionIdForRemote();
		};
		
		p.getModel = function() {
			var that = this;
			var vv = {};
			
			return that.model;
		}
		

		
		p.logInToRemoteSessionAsync = async function(loginIdfier, password){
			var that = this;
			var vv = {}
			///alert('logInToRemoteSessionAsync')
			console.dog('>>> FROM logInToRemoteSessionAsync - RUNNING');
			try {
				vv.promise1 = that._logInToRemoteSession(loginIdfier, password)
				vv.result = await vv.promise1;
				that._updateModelAfterLogin(vv.result);
				that._putLoginDataIntoCookie(vv.result);
				that._setAuthHeader();
				console.dog('>>> FROM logInToRemoteSessionAsync - SUCCESS ', vv.result, that.model)
				
				vv.sessionId = that._getSessionIdForRemote();
				return vv.sessionId;
			} 
			catch(e) {
				console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);
				return e;
			}
		}
		
		p.logOutOfRemoteSession = p._logOutOfRemoteSession = function() {
			var that = this;
			var vv = {}
			
			that.cookiesNg.remove('loginData');
			that._updateModelAfterLogin({})
			that._setAuthHeader(true)
			
			///that.model.app.sessionIdForRemote = undefined

			return that.model.app.sessionIdForRemote
		}
		
		p.startRemoteSessionWithAccessTokenAsync = async function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			try {
				///alert('startRemoteSessionWithAccessTokenAsync')
				console.dog('>>> FROM startRemoteSessionWithAccessTokenAsync - RUNNING: ', accessToken, accessTokenType);

				vv.promise1 = that._startRemoteSessionWithAccessToken(accessToken, accessTokenType)
				vv.result = await vv.promise1;
				that._updateModelAfterLogin(vv.result);
				that._putLoginDataIntoCookie(vv.result);
				that._setAuthHeader();

				vv.sessionId = that._getSessionIdForRemote();
				return vv.sessionId;
			}
			catch(e) {
				console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);
				return e;
			}
		}
		

		

		
	//}

	return ClassConstructor;
})();

