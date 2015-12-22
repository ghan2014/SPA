/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Button4rFacebookShareVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Button4rFacebookShareVcc";
		aa.myClassName = "Button4rFacebookShareVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rFacebookShareVcc_CtrlClass held as MyClass");
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
			await that._setupStndDatas()
			await that._setSyns()
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			console.dog('>>> Button4rFacebookShareVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
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
			console.dog(">>> Button4rFacebookShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setSyns = async function() {
			var that = this;
			that.scopeNg.loc.stationSyn = 'school';
			that.scopeNg.loc.playlistSyn = 'project';
			that.scopeNg.loc.trackSyn = 'episode';
			
			that.scopeNg.loc.stationSynUpCase = 'SCHOOL';
			that.scopeNg.loc.playlistSynUpCase = 'PROJECT';
			that.scopeNg.loc.trackSynUpCase = 'EPISODE';
			return 'done'
		}
		
		p._setupSpcfDatas = async function() {
			var that = this;
			that.scopeNg.loc.purposing = that.scopeNg.purposing;
			

			return 'done'
		};

		
		p._setScopeWatchers = async function() {
			var that = this;
			
			//{ Watch attributes.
				that.scopeNg.$watch("purposing", 
					function() {that.scopeNg.loc.purposing = that.scopeNg.purposing;}
				)
			//}
			return 'done';
			
		};
		
	//}

	//	================================================================
	//	TYPE PUBLIC/PRIVATE METHODS:
	//{
	//}	
		
	//	================================================================
	//	ITYPE PRIVATE METHODS:
	//{	
	//}	

	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
		p.shareIt = p._shareIt =  async function()  {
			var that = this;
			var vv = {}
			
			if ( typeof that.scopeNg.loc.FB === 'undefined' ) {
				that.scopeNg.loc.FB = FB;
			}

			vv.purposing = angular.fromJson(that.scopeNg.loc.purposing);
			vv.purposing.itemType = vv.purposing.itemType ||  vv.purposing.type
			

			if  ( ! vv.purposing.doManually ) { 

				vv.delegateMethodName = '_share'+vv.purposing.itemType;
				vv.voidd = await that[vv.delegateMethodName](vv.purposing);
			}
		}

		p.directlyHandleClick = p._directlyHandleClick = function() {
			/* Using this instead of click-to-mediator directive because ng-click is needed to close mask */
			var that = this;
			var vv = {}

			vv.pkg = {
				notice: {
					noticeName: "FacebookShareButton_clicked",
					purposing: "",
					triggerTagToUse: ""
				}

			}
			that.mediatorService.receiveNotice("", vv.pkg)

		}

		p.doNothing = p._doNothing =  async function()  {
		}
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	
		p._shareStation = async function(purposing) {
			var that = this;
			var vv = {}
			vv.purposing = purposing

			vv.itemInfo = await that.stationsService.getStation(purposing.stationId)

console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareStation - itemInfo, stateNg: ", vv.itemInfo, that.stateNg)

			vv.feedObj  = {}
			vv.feedObj.method = "feed";
			vv.feedObj.link = that.toolbox.bgetShortUrl4rStation(vv.itemInfo.id,  '', true) 
			vv.feedObj.picture = vv.itemInfo.stationLogoUrl;
			vv.feedObj.name = that.scopeNg.loc.stationSynUpCase + ": " + vv.itemInfo.title;
			vv.feedObj.caption = "Visit our " + that.scopeNg.loc.stationSyn +".";
			vv.feedObj.description = vv.itemInfo.description
			vv.feedObj.properties = undefined
			vv.feedObj.actions = undefined

console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareStation - feedObj: ", vv.feedObj)

			that.scopeNg.loc.FB.ui(vv.feedObj)
		}





		p._sharePlaylist = async function(purposing) {
			var that = this;
			var vv = {}

			vv.stationInfoPromise =that.stationsService.getStation(purposing.stationId)
			vv.playlistInfoPromise = that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId)


			vv.stationInfo = await vv.stationInfoPromise;
			vv.itemInfo = await vv.playlistInfoPromise;


console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - itemInfo, stationInfo, stateNg: ", vv.itemInfo, vv.stationInfo, that.stateNg)

			vv.feedObj  = {}
			vv.feedObj.method = "feed";
			vv.feedObj.link = that.toolbox.bgetShortUrl4rPlaylist(vv.stationInfo.id,  '',  vv.itemInfo.id,  '', true) 
			vv.feedObj.picture = vv.itemInfo.coverArtUrl;
			vv.feedObj.name = that.scopeNg.loc.playlistSynUpCase + ": " + vv.itemInfo.name;
			vv.feedObj.caption = "Listen to our " + that.scopeNg.loc.playlistSyn +".";
			vv.feedObj.description = vv.itemInfo.description
			vv.feedObj.properties = undefined
			vv.feedObj.actions = undefined

console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - feedObj: ", vv.feedObj)

			that.scopeNg.loc.FB.ui(vv.feedObj)
		}




		p._shareTrack = async function(purposing) {
			var that = this;
			var vv = {}

			vv.stationInfoPromise = that.stationsService.getStation(purposing.stationId)
			vv.playlistInfoPromise = that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId)
			vv.tracknfoPromise = that.stationsService.getTrack(purposing.stationId, purposing.trackId)

			vv.stationInfo = await vv.stationInfoPromise;
			vv.playlistInfo = await vv.playlistInfoPromise;
			vv.itemInfo = await vv.tracknfoPromise;

			vv.trackUid = purposing.trackUid


console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareTrack- itemInfo, playlistInfo, stationInfo, stateNg: ", vv.itemInfo, vv.playlistInfo, vv.stationInfo, that.stateNg)

			vv.feedObj  = {}
			vv.feedObj.method = "feed";
			vv.feedObj.link = that.toolbox.bgetShortUrl4rTrack(vv.stationInfo.id,  '',  vv.playlistInfo.id, '',vv.trackUid,  '', true) 
			vv.feedObj.picture = vv.itemInfo.imageURL;
			vv.feedObj.name = that.scopeNg.loc.trackSynUpCase + ": " + vv.itemInfo.title;
			vv.feedObj.caption = "Listen to our " + that.scopeNg.loc.trackSyn +".";
			vv.feedObj.description = vv.itemInfo.description
			vv.feedObj.properties = undefined
			vv.feedObj.actions = undefined

console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - feedObj: ", vv.feedObj)

			that.scopeNg.loc.FB.ui(vv.feedObj)
		}



			
	//}


	return aa.MyClass;
	
})();
