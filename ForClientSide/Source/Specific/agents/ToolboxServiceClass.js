/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ToolboxServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(timeoutNg) {
		var that = this;
		that._setup();
	}

	var p = ClassConstructor.prototype;


	//	================================================================
	//	PUBLIC /PRIVATE METHODS:
	//{	
		/* work in progress
		p.sleep = async function ( timeDelay ) {
			var that = this;
			var vv = {}

			///alert('delay closing');
			vv.p = new PromiseThingy();
			    setTimeout(function() {
			        p.resolve();
			    }, 3000);

			    return vv.p.promise; 
		}
		*/

		p.getHolderVcNamesPerUiStates = function( currentState, doStartFromBase ) {
			var that = this;
			var vv = {}
			
			vv.propName = 'holderVcNames'
			vv.parentObjKeyName = 'parent'
			vv.doConcatLists = true
			vv.doStartFromBase = doStartFromBase || true;
			
			vv.propVals = that._getLineagePropVals( vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists, vv.doStartFromBase ) 
			
			return vv.propVals
		}
		
		p.getUsedSlotsPerUiStates = function( currentState, doStartFromBase ) {
			var that = this;
			var vv = {}
			
			vv.propName = 'usedSlots'
			vv.parentObjKeyName = 'parent'
			vv.doConcatLists = true
			vv.doStartFromBase = doStartFromBase || true;
			
			vv.propVals = that._getLineagePropVals( vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists,vv.doStartFromBase ) 
			
			return vv.propVals
		}
		
		p.getCssNamespacePerUiStates = function( currentState, doStartFromBase ) {
			var that = this;
			var vv = {}
			
			vv.propName = 'name'
			vv.propName2 = 'addedCssNames'
			vv.parentObjKeyName = 'parent'
			vv.doConcatLists = false
			vv.doConcatLists2 = true
			vv.doStartFromBase = doStartFromBase || true;
			vv.doReversePropVal2 = true;

			
			vv.propVals = that._getLineagePropVals( vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists, vv.doStartFromBase ) 
			
			vv.propVals2 = that._getLineagePropVals( vv.propName2, currentState, vv.parentObjKeyName, vv.doConcatLists2, vv.doStartFromBase, vv.doReversePropVal2 ) 
			
			vv.namespaceArr = vv.propVals2.concat( vv.propVals )
			
			vv.namespace = vv.namespaceArr.toString().replace(/,/g, " ");
			
			return vv.namespace
		}
		
		p.cloneMap = function(map1) {
			var that = this;
			var map2 = that._cloneMap(map1)
			return map2;
		}
		

		p.bgetStndUrl4rStation = p._bgetStndUrl4rStation = function (stationId, stationTitle, stationSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {}
			vv.stationSyn = stationSyn || that.stationSyn || 'station'

			vv.partialUrl = vv.stationSyn + '/' + stationTitle + '/' + stationId
			vv.fullUrl = "http://"+document.domain+aaGlobalee.baseHref+vv.partialUrl

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl

			return vv.returnUrl;

		}

		p.bgetStndUrl4rPlaylist = p._bgetStndUrl4rPlaylist  = function (stationId, stationTitle,  stationSyn, playlistId, playlistTitle,  playlistSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {}
			vv.stationSyn = stationSyn ||  that.stationSyn || 'station'
			vv.playlistSyn = playlistSyn || that.playlistSyn || 'playlist'

			vv.partialUrl = vv.stationSyn + '/' + stationTitle + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistTitle + '/' + playlistId
			vv.fullUrl = "http://"+document.domain+aaGlobalee.baseHref+vv.partialUrl

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl

			return vv.returnUrl;
		}


		p.bgetShortUrl4rStation = p._bgetShortUrl4rStation = function (stationId, stationSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {}
			vv.stationSyn = stationSyn || that.stationSyn || 'station'

			vv.partialUrl = vv.stationSyn + '/' + stationId
			vv.fullUrl = "http://"+document.domain+aaGlobalee.baseHref+vv.partialUrl

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl

			return vv.returnUrl;

		}

		p.bgetShortUrl4rPlaylist = p._bgetShortUrl4rPlaylist  = function (stationId,  stationSyn, playlistId,  playlistSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {}
			vv.stationSyn = stationSyn ||  that.stationSyn || 'station'
			vv.playlistSyn = playlistSyn || that.playlistSyn || 'playlist'

			vv.partialUrl = vv.stationSyn + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistId
			vv.fullUrl = "http://"+document.domain+aaGlobalee.baseHref+vv.partialUrl

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl

			return vv.returnUrl;
		}

		p.bgetShortUrl4rTrack = p._bgetShortUrl4rPlTrack  = function (stationId,  stationSyn, playlistId,  playlistSyn, trackId,  trackSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {}
			vv.stationSyn = stationSyn ||  that.stationSyn || 'station'
			vv.playlistSyn = playlistSyn ||  that.playlistSyn || 'playlist'
			vv.trackSyn = trackSyn || that.trackSyn || 'track'

			vv.partialUrl = vv.stationSyn + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistId + '/' + vv.trackSyn + '/' + trackId
			vv.fullUrl = "http://"+document.domain+aaGlobalee.baseHref+vv.partialUrl

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl

			return vv.returnUrl;
		}
		
		
		p.msToHhMmSs = p._msToHhMmSs = function(duration) {
			var milliseconds = parseInt((duration%1000)/100)
				, seconds = parseInt((duration/1000)%60)
				, minutes = parseInt((duration/(1000*60))%60)
				, hours = parseInt((duration/(1000*60*60))%24)
				, HhMmSs = undefined;

			hours = (hours < 10) ? "0" + hours : hours;
			minutes = (minutes < 10) ? "0" + minutes : minutes;
			seconds = (seconds < 10) ? "0" + seconds : seconds;

			HhMmSs = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
			
			return HhMmSs
		}

		p.isSafari = p._isSafari = function()  {
			var isSafari = false
			if (navigator.userAgent.indexOf('Safari') > -1  &&   ( navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('CriOS') == -1 )  )
			{
				///alert(" >>> Saying it's safari(?) - " + navigator.userAgent)
				var isSafari = true        
			}
			return isSafari
		}
		
		p.isIOS = p._isIOS = function()  {
			var isTested4rCase = /iPad|iPhone|iPod/.test(navigator.platform);
			return isTested4rCase
		}
		
		p.isAndroid = p._isAndroid = function()  {
			var isTested4rCase = /Android/i.test(navigator.userAgent);
			return isTested4rCase
		}

		p.getIndexOfFirstMatchingObject = p._getIndexOfFirstMatchingObject  = function(array, objPropName, objPropVal) {

			for  (var i = 0; i < array.length; i += 1)  {
				if  ( array[i][objPropName] === objPropVal )  {
					return i;
				}
			}
			return -1;
		}

		p.bsetBirthYear =  function()  {
			var that = this;
			var vv = {}

			vv.y;
			
			vv.startYear = 1915;

			vv.r = [];

			// must be 13 years old
			vv.thisYear = new Date().getFullYear() - 12

			vv.mid = Math.floor( ( vv.thisYear - vv.startYear ) / 2 ) + vv.startYear;

			for ( vv.y = vv.startYear; vv.y < vv.thisYear; vv.y++ ) {
				if ( vv.y === vv.mid ) {
					vv.r.push( {"value" : "", "text": "Year Of Birth"} );
				}
				vv.r.push( {"value": vv.y, "text": vv.y} );
			}

			return vv.r;
		}
		
		
		p.pause = p._pause = async function(pauseInMillis) {
			var that = this
			var vv = {}
			
			vv.myPromise = new Promise(function(resolve,reject){
				var timeoutRef = setTimeout( function() { resolve("done") }, pauseInMillis )
			})
			
			return vv.myPromise
		}



	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function() {
			var that = this;
			that.stationSyn = 'school';
			that.playlistSyn = 'project';
			that.trackSyn = 'episode';
			
		}
	
		p._getLineagePropVals = function( propName, currentObj, ParentObjKeyName, doConcatLists, doStartFromBase, doReversePropVal) {
			var that = this;
			var vv = {}
			
			vv.propVals = []
			vv.loopCnt = 0
		
			while ( currentObj && vv.loopCnt < 100 ) {
				vv.loopCnt = vv.loopCnt + 1;
				if ( currentObj[propName] ) {
					vv.propVal = currentObj[propName]
					if ( doConcatLists ) {
						if (doReversePropVal) {
							vv.propVal.reverse();
						}
						vv.propVals = vv.propVals.concat( vv.propVal )
					}
					else {
						vv.propVals.push( vv.propVal )
					}
				}
				currentObj = currentObj[ParentObjKeyName]
			}
			if  ( doStartFromBase ) {
				vv.propVals = vv.propVals.reverse();
			}
			
			return vv.propVals
		}
		
		p._cloneMap = function(map1) {
			var map2 = {}
			for (var prop in map1) {
				if (map1.hasOwnProperty(prop)) {
					map2[prop] = map1[prop];
				}
			}
			return map2;
		}

	
		p._getUiStateLineage = function(currentState, doStartFromBase, lineage) {
			var that = this;
			var lineage = lineage || []
			var stateName = currentState.name || undefined;
			lineage.push(stateName);
			if ( currentState.parent ) {
				that._getUiStateLineage(currentState.parent, doStartFromBase, lineage) 
			}
			if (doStartFromBase) {
				lineage = lineage.reverse();
			}
			return lineage;
		}
	
	//}
	


	return ClassConstructor;
})();
