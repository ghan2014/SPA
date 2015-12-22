/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AccessServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(sessionService, usersService) {
		var that = this;
		that.sessionService = sessionService;
		that.usersService = usersService;
		that._setup();
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = function() {
			var that = this;
		}

	//}
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
	

		
		p.connectWithToken = async function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			console.dog('>>> FROM connectWithToken - START / RUNNING');
			try {
				vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType)
				vv.result = await vv.promise1;
				console.dog('>>> FROM connectWithToken - PNT-A - result: ', vv.result);
				vv.sessionId = that.sessionService.getSessionIdForRemote();
				console.dog('>>> FROM connectWithToken - PNT-A2 - vv.sessionId : ', vv.sessionId );
				return vv.sessionId
			} 
			catch(e) {
				try {
					console.dog('>>> FROM connectWithToken - PNT-B-0 - usersService | error: ', that.usersService, e);
					vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType)
					vv.result = await vv.promise1;
					
					console.dog('>>> FROM connectWithToken - PNT-B - result: ', vv.result);
					
					try {
						vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType)
						vv.result = await vv.promise1;
						console.dog('>>> FROM connectWithToken - PNT-C - result: ', vv.result);
						vv.sessionId = that.sessionService.getSessionIdForRemote();
						console.dog('>>> FROM connectWithToken - PNT-C2 - vv.sessionId : ', vv.sessionId );
						return vv.sessionId
					} 
					catch(e) {
						console.dog('>>> FROM connectWithToken - Pnt 2nd auth fail - error:', e);
						return e;
					}
				} 
				catch(e) {
					console.dog('>>> FROM connectWithToken - Pnt register fail - error:', e);
					return e;
				}
			}

		}
		
		
		
		p.connectWithToken__ = async function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			console.dog('>>> FROM connectWithToken - RUNNING');

			vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType)
			vv.result = await vv.promise1;
			console.dog('>>> FROM connectWithToken - PNT-A - result: ', result);
			vv.sessionId = that.sessionService.getSessionIdForRemote();

/*
			if ( ! vv.sessionId ) {
				console.dog('>>> FROM connectWithToken - PNT-B-0 - usersService: ', that.usersService);
				vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType)
				vv.result = await vv.promise1;
				
				console.dog('>>> FROM connectWithToken - PNT-B - result: ', vv.result);
				

				console.dog('>>> FROM connectWithToken - PNT-C-0');
				vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType)
				vv.voidd = await vv.promise1;
				
				console.dog('>>> FROM connectWithToken - PNT-C');
				
				vv.sessionId = that.sessionService.getSessionIdForRemote();
			}
*/

		}
		

		
	//}

	return ClassConstructor;
})();

