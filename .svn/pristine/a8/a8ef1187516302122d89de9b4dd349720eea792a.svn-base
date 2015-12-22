/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlaylistInfoPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "PlaylistInfoPanelVcc";
		aa.myClassName = "PlaylistInfoPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.stationsService = stationsService
				that.toolbox = toolbox
				
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
						///alert(that.scopeNg.stationsFilter);
						var dc = that._setup();
					}
				}
			);
			return 'done';
		};
	
		
		p._setup = async function(goDude) {
			var that = this;
			///alert(that.scopeNg.goDude);
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setSyns();
			await that._setScopeWatchers();
			console.dog('>>> PlaylistInfoPanelVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			that.scopeNg.$apply();
			
			return 'done'
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			var vv = {}
			
			that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
			that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
			that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
			that.scopeNg.loc.stationId = that.scopeNg.stationId;
			that.scopeNg.loc.stationName = that.scopeNg.stationName;
			that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;
			
			//{ Pipe in detail from remote source.	
				vv.detailsPromise = that._getViewDetails()
			//}
			
			//{ Pipe in listing from remote source.	
				vv.listingsPromise = that._getListingsForView()
			//}
			
			//{ Pipe in detail from remote source.
				vv.parentDetailsPromise = that._getParentDetails()
			//}
			
			that.scopeNg.loc.details = await vv.detailsPromise
			that.scopeNg.loc.listings = await vv.listingsPromise
			that.scopeNg.loc.parentDetails  = await vv.parentDetailsPromise
			
			if ( that.scopeNg.loc.stationName ) {
				that.scopeNg.loc.stationName = that.scopeNg.loc.parentDetails.title
			}
			
			that.scopeNg.loc.parentLinkData = that._bgetParentLinkData();

			
			that.scopeNg.loc.tracksCount = that.scopeNg.loc.listings.length;
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
			return 'done';
			
		};
		
	//}
	
	
	//	================================================================
	//	INFO PANEL TYPE PUBLIC/PRIVATE METHODS:
	//{
	//}	
		
	//	================================================================
	//	INFO PANEL TYPE PRIVATE METHODS:
	//{	
		p._getViewDetails = async function() {
			var that = this;
			var vv = {}
			vv.playlistId = that.scopeNg.loc.playlistId;
			vv.stationId = that.scopeNg.loc.stationId;

			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass - vv.stationId, vv.playlistId: ", vv.stationId, vv.playlistId);
		
			vv.remoteDetails = await that.stationsService.getPlaylist(vv.stationId, vv.playlistId)

			vv.viewDetails = {
				description: vv.remoteDetails.description,
				logoUrl: vv.remoteDetails.coverArtUrl,
				name: vv.remoteDetails.name,
				title: vv.remoteDetails.title,
				duration: vv.remoteDetails.length
			}
			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.playlistId, vv.remoteDetails, vv.viewDetails);
			
			
			return vv.viewDetails
			
		}
		
		p._getParentDetails = async function() {
			var that = this;
			var vv = {}
			vv.stationId = that.scopeNg.loc.stationId;
		
			vv.remoteDetails = await that.stationsService.getStation(vv.stationId )

			vv.viewDetails = {
				description: vv.remoteDetails.description,
				logoUrl: vv.remoteDetails.stationLogoUrl,
				name: vv.remoteDetails.name,
				title: vv.remoteDetails.title,
				address: vv.remoteDetails.address,
				city: vv.remoteDetails.city,
				state: vv.remoteDetails.state,
				websiteUrl: vv.remoteDetails.websiteUrl,
				enrollmentGender: vv.remoteDetails.extraData.enrollmentGender,
				enrollmentGrades: vv.remoteDetails.extraData.enrollmentGrades,
				enrollmentType: vv.remoteDetails.extraData.enrollmentType,
				enrollmentStudents: vv.remoteDetails.extraData.enrollmentStudents
			}
			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getParentDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);
			
			
			return vv.viewDetails
			
		}
	//}	

	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	
			p._getListingsForView = async function() {

				var that = this;
				var vv = {}
				vv.playlistsFilter = that.scopeNg.loc.tracksFilter;
				vv.playlistId = that.scopeNg.loc.playlistId;
				vv.stationId = that.scopeNg.loc.stationId;
				
				vv.listings = await that.stationsService.getPlaylistTracks(vv.stationId, vv.playlistId)

				console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.playlistId, vv.listings);
				
				return vv.listings
				
			}
			
			
			p._bgetParentLinkData = function() {
				var that = this;
				var vv = {}
							
				vv.url = that.toolbox._bgetStndUrl4rStation(that.scopeNg.loc.stationId, that.scopeNg.loc.stationName, '', false)
				
				vv.linksData = {
					linkHref: vv.url,
					linkCopy: that.scopeNg.loc.stationName
				}
				
				return vv.linksData
			}
			
	//}


	return aa.MyClass;
	
})();



