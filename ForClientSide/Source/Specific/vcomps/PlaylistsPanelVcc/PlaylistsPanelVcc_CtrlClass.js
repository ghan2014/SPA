/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlaylistsPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "PlaylistsPanelVcc";
		aa.myClassName = "PlaylistsPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> PlaylistsPanelVcc_CtrlClass held as MyClass");
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
			console.dog(">>> PlaylistsPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;

			that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
			that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
			that.scopeNg.loc.stationId = that.scopeNg.stationId;
			that.scopeNg.loc.stationName = that.scopeNg.stationName;
			
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
				that.scopeNg.$watch("playlistsFilter", 
					function() {that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;}
				)
				that.scopeNg.$watch("stationId", 
					function() {that.scopeNg.loc.stationId = that.scopeNg.stationId;}
				)
				that.scopeNg.$watch("stationName", 
					function() {that.scopeNg.loc.stationName = that.scopeNg.stationName;}
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
			vv.stationId = that.scopeNg.loc.stationId;
			
			vv.listings = await that.stationsService.getPlaylists(vv.stationId, vv.playlistsFilter)
			
			console.dog(">>> PlaylistsPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.filter, vv.listings);
			
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



