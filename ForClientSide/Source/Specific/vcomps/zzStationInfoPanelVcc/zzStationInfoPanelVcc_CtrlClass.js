/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StationInfoPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "StationInfoPanelVcc";
		aa.myClassName = "StationInfoPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> StationInfoPanelVcc_CtrlClass held as MyClass");
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
			console.dog('>>> StationInfoPanelVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
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
			console.dog(">>> StationInfoPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			
			that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
			that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
			that.scopeNg.loc.stationId = that.scopeNg.stationId;
			that.scopeNg.loc.stationName = that.scopeNg.stationName;
			
			//{ Pipe in listing from remote source.	
				that.scopeNg.loc.details = await that._getViewDetails()
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
			console.dog(">>> StationInfoPanelVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);
			
			
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
	
			
	//}


	return aa.MyClass;
	
})();



