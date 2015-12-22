/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StationsPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "StationsPanelVcc";
		aa.myClassName = "StationsPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> StationsPanelVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				
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
			console.dog(">>> StationsPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			that.scopeNg.loc.stationsFilter = that.scopeNg.stationsFilter;
			that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
			
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
			return 'done'
		};
		

		
	//}
	
	
	//	================================================================
	//	LISTINGS PANEL TYPE PUBLIC/PRIVATE METHODS:
	//{

	//}	
		
	//	================================================================
	//	LISTINGS PANEL TYPE PRIVATE METHODS:
	//{
	
		p._getListingsForView = async function() {
			var that = this;
			var vv = {}
			vv.stationsFilter = that.scopeNg.loc.stationsFilter;
			
			vv.listings = await that.stationsService.getStations(vv.stationsFilter)
			console.dog(">>> StationsPanelVcc_CtrlClass._getListingsForView : ", vv.listings);
			
			
			
			return vv.listings
			
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



