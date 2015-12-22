/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PlayerPanelVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function CtrlClass(scopeNg, mediatorService ) {
		scopeNg.thisc = this;
		var that = this;
		that.scopeNg = scopeNg;
		that.mediator = mediatorService
		that._setup();
	}
		
	var p = CtrlClass.prototype;
	

	//	================================================================
	//	APPISH PRIVATE METHODS:
	//{	
		p._setup = function setup() {
			var that = this;
			that._setupDatas();
		};
		
		p._setupDatas = function setupDatas() {
			var that = this;
			that.mech = {};
			that.scopeNg.loc = {}
			that.scopeNg.loc.stationId = 'thestationId'
			that.scopeNg.loc.playlistId = 'theplaylistId'
			that.scopeNg.loc.trackId = 'thetrackId'
			console.dog(">>> Loc scope setup in Player Panel: ", that.scopeNg);
			///alert(">>> Loc scope setup in Player Panel: ");
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none',
						isOkayToShow: true, 
						isPlayerInFrame: false
					},
					info: {
						myname: 'PlayerPanelVcc',
						stationId: "",
						doPlayFlag: 0,		// Valid options are 0 or 1.
						playerPageUrl: aaGlobalee.playerPageUrl,
						iframeSrc: ""
					}
				}
			};
		};
	//}
		


	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
		p.readyPanelForPlay = p._readyPanelForPlay = function (stationId, doPlayFlag) {
			var that = this;
			var vv = {};
			
			vv.newIframeSrc = that.scopeNg.datas.view.info.playerPageUrl;
			
			that._setDoPlayFlag(doPlayFlag);
			that._setStationId(stationId);
			vv.doesNeedNewSrc = that._bgetDoesIframeNeedNewSrc(vv.newIframeSrc);
			that.scopeNg.$apply();
			vv.myPromise = new Promise(function(resolve,reject){
				if  (vv.doesNeedNewSrc) {
					that._setIframeSrc(vv.newIframeSrc);
					
					
					vv.unregisterWatchFnc = that.scopeNg.$watch(
						'isPlayerInFrame', 
						function(newVal, oldVal){	
							console.dog(">>> PlayerPanelVccCtrlClass - watch scopeNg.isPlayerInFrame : ", that.scopeNg.isPlayerInFrame, newVal, oldVal);
							if ( that.scopeNg.isPlayerInFrame === true ) {
								vv.unregisterWatchFnc();
								resolve(">>> Player frame added")
							}
						}, 
						true
					);
					
					that.scopeNg.$apply();
				}
				else {
					resolve(">>> Player frame not added. Already there.")
					/// that._announcePlayerPanelWantsPlay("PlayerPanelVccCtrlClass._readyPanelForPlay");
				}
			})
			return vv.myPromise;
		}
		
		p.getStationId = p._getStationId = function (stationId) {
			var that = this;
			return that.scopeNg.datas.view.info.stationId;
		}
		
		p.getIframeSrc = p._getIframeSrc = function () {
			var that = this;
			return that.scopeNg.datas.view.info.iframeSrc;
		};
		
		p.getIsPlayerInFrame = p._getIsPlayerInFrame = function () {
			var that = this;
			return that.scopeNg.datas.view.mech.isPlayerInFrame;
		}
		
		p.openOptionsMenu = p._openOptionsMenu = function(stationId, playlistId, trackId) {
			var that = this
			var vv = {}
			
			///that.scopeNg.loc.stationId = stationId
			///that.scopeNg.loc.playlistId = playlistId
			///that.scopeNg.loc.trackId = trackId
			
			///that.scopeNg.$apply();
			
			$(".OuterHolderVcc .md-icon-button ").click()
			
		}
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	
		p._setStationId = function (stationId) {
			var that = this;
			var vv = {};
			
			if ( that.scopeNg.datas.view.info.stationId !== stationId ) {
				that.scopeNg.datas.view.info.stationId = stationId
			}
		};
		
		p._setDoPlayFlag = function (doPlayFlag) {
			var that = this;
			
			if (doPlayFlag === 'false') {
				that.scopeNg.datas.view.info.doPlayFlag = false
			}
			else {
				that.scopeNg.datas.view.info.doPlayFlag = true	
			}
		};
		
		p._bgetDoesIframeNeedNewSrc = function(newSrcUrl) {
			var that = this;
			var doesIframeNeedNewSrc = false
			
			if ( that.scopeNg.datas.view.info.iframeSrc !== newSrcUrl ) {
				doesIframeNeedNewSrc = true
			}
			
			return doesIframeNeedNewSrc;
		}
		
		p._setIframeSrc = function (newSrcUrl) {
			var that = this;
			var vv = {};

			vv.srcUrl = newSrcUrl || that.scopeNg.datas.view.info.playerPageUrl;
			that.scopeNg.datas.view.info.iframeSrc = vv.srcUrl

		};

		
		p._announcePlayerPanelWantsPlay = function(caller) {
			var that = this;
			var vv = {};

			vv.pkgForMediator = {
				notice: {
					noticeName: "PlayerPanel_wantsPlay",
					stationId: that.scopeNg.datas.view.info.stationId,
					doPlayFlag: that.scopeNg.datas.view.info.doPlayFlag,
					caller: caller
				}
			}
			that.mediator.receiveNotice("", vv.pkgForMediator)
		}
		
		p._announcePlayerPanelWantsNoPlay = function() {
			var that = this;
			var vv = {};

			vv.pkgForMediator = {
				notice: {
					noticeName: "PlayerPanel_wantsNotPlay",
				}
			}
			that.mediator.receiveNotice("", vv.pkgForMediator)
		}
		 
		
		p._bgetIframeSrc = function getIframeSrc() {
			var that = this;
			var vv = {};
			
			///return "http://devweb14.nanocosm.com/webjerryLive05/Assets/Player/?station_id=7448"
			console.dog(">>> that.scopeNg.datas.view.info.stationId: ", that.scopeNg.datas.view.info.stationId);
			
			if ( that.scopeNg.datas.view.info.stationId ) {
				vv.newSrcUrl = that.scopeNg.data.view.info.playerPageUrl + "/?station_id__="+that.scopeNg.datas.view.info.stationId;
			}
			else {
				vv.newSrcUrl = that.mech.currentStationId || that.scopeNg.data.view.info.playerPageUrl + "/?station_id__=7448";
			}
			
			if (that.scopeNg.datas.view.info.doPlayFlag === 1) {
				vv.newSrcUrl = vv.newSrcUrl + "&autoplay__=" + 1;
			}
			
			
			console.dog(">>> In that.scopeNg.methods.getIframeSrc - vv.newSrcUrl: ", vv.newSrcUrl) 
			
			that.mech.currentStationId = vv.newSrcUrl;
			return vv.newSrcUrl;

		};

	//}


	return CtrlClass;
	
})();
