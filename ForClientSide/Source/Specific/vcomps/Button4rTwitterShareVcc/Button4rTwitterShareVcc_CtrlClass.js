/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Button4rTwitterShareVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Button4rTwitterShareVcc";
		aa.myClassName = "Button4rTwitterShareVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rTwitterShareVcc_CtrlClass held as MyClass");
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
			await that._setScopeWatchers();
			console.dog('>>> Button4rTwitterShareVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
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
			console.dog(">>> Button4rTwitterShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			
			that.scopeNg.loc.FB = FB;
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

			vv.purposing = angular.fromJson(that.scopeNg.loc.purposing);

			if  ( ! vv.purposing.doManually ) { 

				vv.delegateMethodName = '_share'+vv.purposing.itemType;
				vv.voidd = await that[vv.delegateMethodName](vv.purposing);
			}


			vv.url
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


			vv.tweetUrl = that.toolbox.bgetStndUrl4rStation(vv.itemInfo.id, vv.itemInfo.title, '', true) 
			vv.tweetText = "Visit our Station: " + vv.itemInfo.title + ".   vv.itemInfo.description"

			console.dog(">>> Button4rTwitterShareVcc_CtrlClass._shareStation - vv, stateNg: ", vv, that.stateNg)

			that.openWindow(vv.tweetText, vv.tweetUrl);
		}




		p._sharePlaylist = async function(purposing) {
			var that = this;
			var vv = {}
			vv.purposing = purposing

			vv.stationInfoPromise = await that.stationsService.getStation(purposing.stationId)
			vv.playlistInfoPromise = await that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId)


			vv.stationInfo = await vv.stationInfoPromise;
			vv.itemInfo = await vv.playlistInfoPromise;


			vv.tweetUrl = that.toolbox.bgetStndUrl4rPlaylist(vv.stationInfo.id, vv.stationInfo.title, '',  vv.itemInfo.id, vv.itemInfo.name, '', true) 

			vv.tweetText = "Listen to our Playlist: " + vv.itemInfo.name; + ".   vv.itemInfo.description"

			console.dog(">>> Button4rTwitterShareVcc_CtrlClass._sharePlaylist - vv, stateNg: ", vv, that.stateNg)

			that.openWindow(vv.tweetText, vv.tweetUrl);
		}




		p.openWindow = function(tweetText, tweetUrl, tweetVia) {
			var that = this;
			var vv = {}

			tweetVia = tweetVia || 'LiuMei';

			vv.encodedTweetVia =  encodeURIComponent(tweetVia)
			vv.encodedTweetText =  encodeURIComponent(tweetText + " | Listen now at: " + tweetUrl)
			vv.encodedTweetUrl =  encodeURIComponent(tweetUrl)

			vv.tweetString = "?text=" + vv.encodedTweetText + "&original_referrer=" + vv.encodedTweetUrl + "&via=" + vv.encodedTweetVia ;


			vv.apiUrl = "http://twitter.com/intent/tweet" + vv.tweetString;

			window.open(vv.apiUrl, "_blank");

		}

			
	//}


	return aa.MyClass;
	
})();