/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: HierarchyNavStripVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
 
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "HierarchyNavStripVcc";
		aa.myClassName = "HierarchyNavStripVccCtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, stationsService, toolbox) {
			console.dog(">>> TracksPanelVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
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
			await that._setupStndDatas();
			await that._setupSpcfDatas();
			await that._setupSpcfDatasForContext()
			await that._setSyns();
			await that._setScopeWatchers();
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			console.dog(">>> HierarchyNavStripVccCtrlClass - end of setup - scope / state: ", that.scopeNg, that.stateNg)
			that.scopeNg.$apply();
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;

			that.scopeNg.loc.linksDatas = []
	
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
		
		p._setupSpcfDatasForContext = async function() {
			var that = this
			var vv = {}
			
			
			// Identifies Project Page Context
			if ( that.stateNg.current.groupsMap && that.stateNg.current.groupsMap.Page4rPlaylist ) {
				that._bsetLinksInfo4rPage4rPlaylist();
			}
		}
		
	//}
	
	
	//	================================================================
	//	TYPE PUBLIC/PRIVATE METHODS:
	//{
		


	//}	
		
	//	================================================================
	//	TYPE PRIVATE METHODS:
	//{
			p._bsetLinksInfo4rPage4rPlaylist = async function() {
				var that = this;
				var vv = {}
							
				vv.stationInfo = await that.stationsService.getStation(that.stateParamsNg.stationId)

				vv.stationUrl = that.toolbox._bgetStndUrl4rStation(vv.stationInfo.id, vv.stationInfo.title, '', false)
				
				that.scopeNg.loc.linksDatas = [
					{	linkHref: vv.stationUrl,
						linkCopy: vv.stationInfo.title
					}
				]
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




