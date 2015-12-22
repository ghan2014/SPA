/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: TracksPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "TracksPanelVcc";
		aa.myClassName = "TracksPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> TracksPanelVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.stationsService = stationsService
				
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
	//	APPISH PUBLIC/PRIVATE METHODS:
	//{
		p.decorateLoadedTrackListing = async function(trackUid) {
			console.dog(">>> highlightPlayingListing  - trackUid: ", trackUid);
			var that = this;
			var vv = {}
			
			that.scopeNg.loc.loadedTrackUid = trackUid
			that.scopeNg.$apply();
			console.dog(">>> highlightPlayingListing end  - that.scopeNg.loc.loadedTrackUid: ", that.scopeNg.loc.loadedTrackUid);
		}

	//}	
	
	
	//	================================================================
	//	APPISH PRIVATE METHODS:
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
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setSyns();
			await that._setScopeWatchers();
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			that.scopeNg.$apply();
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
		///that.scopeNg.loc.loadedTrackUid = '0286d0a5-1f25-4fce-992c-617a0466944b'
			console.dog(">>> TracksPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;

			that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
			that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
			that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
			that.scopeNg.loc.stationId = that.scopeNg.stationId;
			that.scopeNg.loc.stationName = that.scopeNg.stationName;
			that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;
			
			//{ Pipe in listing from remote source.	
				that.scopeNg.loc.listings = await that._getListingsForView()
			//}
			
			return 'done'
		};

		p._setSyns = async function() {
			var that = this;
			that.scopeNg.loc.stationSyn = 'school';
			that.scopeNg.loc.playlistSyn = 'project';
			that.scopeNg.loc.trackSyn = 'episode';
			return 'done'
		}
		
		p._setScopeWatchers = async function() {
			var that = this;
			
			//{ Watch attributes.
				that.scopeNg.$watch("displayedPanelTitle", 
					function() {that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;}
				)

				that.scopeNg.$watch("playlistId", 
					function() {that.scopeNg.loc.playlistId = that.scopeNg.playlistId;}
				)
				that.scopeNg.$watch("playlistName", 
					function() {that.scopeNg.loc.playlistName = that.scopeNg.playlistName;}
				)
				that.scopeNg.$watch("stationId", 
					function() {that.scopeNg.loc.stationId = that.scopeNg.stationId;}
				)
				that.scopeNg.$watch("stationName", 
					function() {that.scopeNg.loc.stationName = that.scopeNg.stationName;}
				)
				that.scopeNg.$watch("tracksFilter", 
					function() {that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;}
				)
			//}
			
			return 'done'
		};
		
	//}
	
	
	//	================================================================
	//	LISTINGS PANEL TYPE PUBLIC/PRIVATE METHODS:
	//{
	
		p._getListingsForView = async function() {

			var that = this;
			var vv = {}
			vv.playlistsFilter = that.scopeNg.loc.playlistsFilter;
			vv.playlistId = that.scopeNg.loc.playlistId;
			vv.stationId = that.scopeNg.loc.stationId;
			
			vv.listings = await that.stationsService.getPlaylistTracks(vv.stationId, vv.playlistId)
			
			console.dog(">>> TracksPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.playlistId, vv.listings);
			
			return vv.listings
			
		}

	//}	
		
	//	================================================================
	//	LISTINGS PANEL TYPE PRIVATE METHODS:
	//{
	
		
	//}	

	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	
	
			
	//}

	return aa.MyClass;
	
})();



