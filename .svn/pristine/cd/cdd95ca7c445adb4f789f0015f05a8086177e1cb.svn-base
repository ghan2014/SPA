/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StationsServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(qNg, resourceNg, sessionService, toolbox) {
		var that = this;
		that.qNg = qNg;
		that.resourceNg = resourceNg;
		that.sessionService = sessionService;
		that.toolbox = toolbox;
		that._setup();
		var breakpoint = 'a';
	}
	

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = function() {
			var that = this;
			that.MainResource = that._bgetMainResource(); 
			that.MainResourceAlt = that._bgetMainResourceAlt();
			that.SubResource = that._bgetSubResource();
			that.Sub2Resource = that._bgetSub2Resource();
		}
		
		p._bgetMainResource = function() {
			var that = this;

			if ( ! that.MainResource ) { 
				that.MainResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype/:id?:q1Name:q1Val', 
					{
						modelType:'stations',
						modelSubtype:'@modelSubtype',
						id:'@id',
						q1Name:'@q1Name',
						q1Val:'@q1Val'
					},
					{
						getActiveStations: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: {modelSubtype: 'active'}
						},
						getStation: { 
							cache: true, 
							method: 'get', 
							isArray: false
						}
					}
				);
			}

			return that.MainResource;
		}
		
		p._bgetMainResourceAlt = function() {
			var that = this;

			if ( ! that.MainResourceAlt ) { 
				that.MainResourceAlt = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:id/:modelSubtype?:q1Name:q1Val', 
					{
						modelType:'stations',
						modelSubtype:'@modelSubtype',
						id:'@id',
						q1Name:'@q1Name',
						q1Val:'@q1Val'
					},
					{
						getActiveStations: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: {modelSubtype: 'active'}
						},
						getActiveStation: { 
							cache: true, 
							method: 'get', 
							isArray: false,
							params: {modelSubtype: 'active'}
						}
					}
				);
			}

			return that.MainResourceAlt;
		}
		
		p._bgetSubResource = function() {
			var that = this;

			if ( ! that.SubResource ) { 
				that.SubResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:id/:modelSubtype/:modelSubtype2/:subId?:q1Name:q1Val', 
					{
						modelType:'stations',
						modelSubtype:'@modelSubtype',
						modelSubtype2:'@modelSubtype2',
						id:'@id',
						subId:'@subId',
						q1Name:'@q1Name',
						q1Val:'@q1Val'
					},
					{
						getActivePlaylists: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: {modelSubtype: 'playlists', modelSubtype2: 'active'}
						},
						getPlaylist: { 
							cache: true, 
							method: 'get', 
							isArray: false,
							params: {modelSubtype: 'playlists'}
						},
						getTrack: { 
							cache: true, 
							method: 'get', 
							isArray: false,
							params: {modelSubtype: 'tracks'}
						}
					}
				);
			}

			return that.SubResource;
		}
		

		p._bgetSub2Resource = function() {
			var that = this;

			if ( ! that.Sub2Resource ) { 
				that.Sub2Resource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:id/:modelSubtype/:subId/:modelSubtype2/:modelSubtype3/:sub2Id?:q1Name:q1Val', 
					{
						modelType:'stations',
						modelSubtype:'@modelSubtype',
						modelSubtype2:'@modelSubtype2',
						modelSubtype3:'@modelSubtype3',
						id:'@id',
						subId:'@subId',
						sub2Id:'@sub2Id',
						q1Name:'@q1Name',
						q1Val:'@q1Val'
					},
					{
						getTracks: { 
							cache: true, 
							method: 'get', 
							isArray: true,
							params: { modelSubtype2: 'tracks'}
						}
					}
				);
			}

			return that.Sub2Resource;
		}
		
		p.capFirstLetter = function(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		p.orderPlaylistWithDefaultFirst = function (playlistArr) {
			var that = this;
			var vv = {}

			vv.arr = playlistArr
			vv.propName = 'status'
			vv.propVal = 'P'

			vv.ndx = that.toolbox.getIndexOfFirstMatchingObject(vv.arr, vv.propName, vv.propVal)

			if  (vv.ndx > 0) {
				vv.uprootedElm = vv.arr[vv.ndx]
				vv.voidd = vv.arr.splice(vv.ndx, 1)
				vv.voidd = vv.arr.splice(0, 0, vv.uprootedElm)
			}
			return vv.arr
		}
	//}
	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{
		
		p.getStations = async function(filter) {
			console.dog(">>> In StationsServiceClass.getStations");
			var that = this;
			var vv = {}
			vv.filter = that.capFirstLetter(filter);
			vv.method = 'get'+vv.filter+'Stations';
			vv.datas = await that.MainResource[vv.method]();

			return vv.datas.$promise
		}
		
		p.getStation = async function(id) {
			console.dog(">>> In StationsServiceClass.getStation");
			var that = this;
			var vv = {}
			vv.data = await that.MainResourceAlt.getActiveStation({id: id});

			return vv.data.$promise
		}
		
		p.getPlaylists = async function(id, filter) {
			console.dog(">>> In StationsServiceClass.getPlaylists");
			var that = this;
			var vv = {}
			vv.filter = that.capFirstLetter(filter);
			vv.method = 'get'+vv.filter+'Playlists'
			vv.datas = await that.SubResource[vv.method]({id: id});

			vv.playlist =  await vv.datas.$promise
			vv.playlist = that.orderPlaylistWithDefaultFirst(vv.playlist)

			return vv.playlist
		}
		
		p.getPlaylist = async function(id, subId) {
			console.dog(">>> In StationsServiceClass.getPlaylist - id, subId: ", id, subId);
			var that = this;
			var vv = {}
			vv.data = await that.SubResource.getPlaylist({id: id, subId: subId});

			return vv.data.$promise
		}
		
		p.getPlaylistTracks = async function(id, subId, filter) {
			console.dog(">>> In StationsServiceClass.getPlaylistTracks");
			var that = this;
			var vv = {}
			vv.filter = vv.filter ? that.capFirstLetter(filter) : '';
			vv.method = 'get'+vv.filter+'Tracks';
			vv.datas = await that.Sub2Resource[vv.method]({modelSubtype: 'playlists', id: id, subId: subId})

			return vv.datas.$promise;
		}
		
		p.getTrack = async function(id, subId ) {
			console.dog(">>> In StationsServiceClass.getPlaylistTracks - id (stationId) / subId (trackId): ", id, subId);
			
			var that = this;
			var vv = {}
			vv.method = 'getTrack';
			vv.datas = await that.SubResource[vv.method]({id: id, subId: subId})

			return vv.datas.$promise;
		}
		
	//}

	return ClassConstructor;
})();

