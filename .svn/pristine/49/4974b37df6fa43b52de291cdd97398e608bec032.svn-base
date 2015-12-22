/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: UsersServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(qNg, resourceNg) {
		var that = this;
		that.qNg = qNg;
		that.resourceNg = resourceNg;
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
		p._bgetMainResource = _bgetMainResource;
		function _bgetMainResource(accessToken, accessTokenType) {
			var that = this;

			if ( ! that.MainResource ) { 
				that.MainResource = that.resourceNg(
					/// ALT: 'http://pi-node.nanocosm.com:3000/metadata/:modelType/:id',
					'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:modelType/:id/?:q1Name:q1Val', 
					{
						modelType:'users',
						id:'@id',
						q1Name:'@q1Name',
						q1Val:'@q1Val'
					},
					{
						getListings: { 
							cache: true, 
							method: 'get', 
							isArray: true
						},
						getItem: { 
							cache: true, 
							method: 'get', 
							isArray: false
						},
						getFavoriteStations: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: {q1Name: 'filter=', q1Val: 'favoriteStations'}
						},
						getRecentStations: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: {q1Name: 'filter=', q1Val: 'recentStations'},
							headers: {'Authorization': 'Live365 123456789'}
						},
						startRemoteSessionWithAccessToken: { 
							headers: {'FacebookAccessToken': accessToken},
							cache: false, 
							method: 'post', 
							isArray: false,
							
						}
					}
				);
			}

			return that.MainResource;
		}
		
		p._bgetMemberResource = function(accessToken, accessTokenType) {
			var that = this;

			if ( ! that.MemberResource ) { 
				
				if  ( accessTokenType === 'facebook' ) {
					var accessTokenHeaderParamName = 'facebookaccesstoken'
					var headersObj = {}
					headersObj[accessTokenHeaderParamName] = accessToken
				}
				
				that.MemberResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype',
					{
						modelType:'members',
						modelSubtype:'@modelSubtype'
					},
					{
						registerWithToken: { 
							headers: headersObj,
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelSubtype: accessTokenType}
						},
						registerWithIdfier: { 
							email:'@email',
							password:'@password',
							firstName:'@firstName',
							lastName:'@lastName',
							yearOfBirth:'@yearOfBirth',
							gender:'@gender',
							name:'@name',
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelSubtype: ''}
						}
					}
				);
			}

			return that.MemberResource;
		}
		
		p._getRecentStations = function (id) {
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getRecentStations( { id: id } );
			console.dog('>>> FROM _getRecentStations - vv.datas: ', vv.datas);
			return vv.datas.$promise
		}
		
		p._registerWithToken = async function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			
			vv.Resource = that._bgetMemberResource(accessToken, accessTokenType);
			vv.datas = vv.Resource.registerWithToken( {foo: 'bar'} );

			console.dog('>>> FROM _registerWithToken - vv.datas: ', vv.datas);
			return vv.datas.$promise	
		}
		
		p._registerWithIdfier = async function(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that = this;
			var vv = {}
			vv.name = firstName + " " + lastName;
			
			console.dog('>>> FROM _registerWithIdfier - RUNNING');
			
			vv.Resource = that._bgetMemberResource();
			vv.datas = vv.Resource.registerWithIdfier( { email: loginIdfier,  password: password,  firstName: firstName,  lastName: lastName,  yearOfBirth: yearOfBirth,  gender: gender, name: vv.name} );

			console.dog('>>> FROM _registerWithIdfier - vv.datas: ', vv.datas);
			return vv.datas.$promise	
		}
	//}(loginIdfier, password, firstName)
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
		
		p.getListings = getListings;
		function getListings() {
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getListings();
			return vv.datas
		}
		
		p.getMainItem = getMainItem;
		function getMainItem(id) {
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getItem( { id: id } );
			return vv.datas
		}
		
		
		p.getFavoriteStations = getFavoriteStations;
		function getFavoriteStations(id) {
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getFavoriteStations( { id: id } );
			return vv.datas
		}
		

		p.zz_getRecentStations = function (id) {
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getRecentStations( { id: id } );
			return vv.datas
		}
		
		
		p.getMultiRecentStations = async function(id){
			var that = this;
			console.dog('>>> FROM getRecentStationsFnc - RUNNING');
			try {
				var promise1 = that._getRecentStations(id)
				var promise2 = that._getRecentStations(id)
				var result = await that.qNg.all([promise1, promise2]);
				console.dog('>>> FROM getRecentStationsFnc - SUCCESS ', result)
				return result;
			} 
			catch(e) {
				console.dog('>>> FROM getRecentStationsFnc - FAILED - e:', e);
				return e;
			}
		}
		
		p.getRecentStations = async function(id){
			var that = this;
			var vv = {}
			console.dog('>>> FROM getRecentStationsFnc - RUNNING');
			try {
				vv.promise1 = that._getRecentStations(id)
				vv.result = await vv.promise1;
				console.dog('>>> FROM getRecentStationsFnc - SUCCESS ', vv.result)
				return vv.result;
			} 
			catch(e) {
				console.dog('>>> FROM getRecentStationsFnc - FAILED - e:', e);
				return e;
			}
		}
		
		p.registerWithToken = async function(accessToken, accessTokenType) {
			var that = this;
			var vv = {}
			console.dog('>>> FROM registerWithToken - RUNNING');
			
			try {
				vv.result = await that._registerWithToken(accessToken, accessTokenType)

				return {status: 'succeeded'}		

			}
			catch(e) {
				///console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);
				return {status: 'failed', error: e}
			}
		}
		
		p.registerWithIdfierAsync = async function(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that = this;
			var vv = {}
			try {
				console.dog('>>> FROM registerWithIdfierAsync - RUNNING');
				
				vv.promise1 = that._registerWithIdfier(loginIdfier, password, firstName, lastName, yearOfBirth, gender)
				vv.result = await vv.promise1;
				
				console.dog('>>> FROM registerWithIdfierAsync - SUCCESS ', vv.result)
				vv.returnn  = {status: "succeeded", result: vv.result}
			}
			catch(errorr) {
				console.dog('>>> FROM registerWithIdfierAsync - FAILED - errorr:', errorr);
				vv.returnn  = {status: "failed", errorr: errorr}
			}

			return vv.returnn		
		}
		

	//}

	return ClassConstructor;
})();


