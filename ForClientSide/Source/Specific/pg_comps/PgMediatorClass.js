/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PgMediatorClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
	
	var aa = {}
	aa.refNameSelf = "PgMediatorClass__for_SPA_Pg"

	function ClassConstructor() {
		var that = this;
		that._setup();
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;


	//	================================================================
	//	PUBLIC METHODS:
	//{	
		p.receiveNotice = function(pkg) {
			var that = this;
			var vv = {};
			console.dog(">>> !!! >>> !!! >>> -- THIS IS " + aa.refNameSelf + " - ***receiveNotice START *** with pkg: ", pkg);
			
			vv.handleNoticeReturn = that._handleNotice(pkg);
			
			console.dog(">>> !!! >>> !!! >>> -- THIS IS " + aa.refNameSelf + " - ***receiveNotice END *** with pkg: ", pkg);
			
			return vv.handleNoticeReturn;
		}
	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{

		p._setup = function(myName, cfg) {
			var that = this;
			console.dog(">>> " + aa.refNameSelf + " - _setup. ");
			
			that._config();
		}
		
		p._config = function() {
			var that = this
			console.dog(">>> " + aa.refNameSelf + " - _config. ")
			
			that.cfg = {}
			that.cfg.return_PlayerPgMediator_receiveNotice = function() {
				return document.getElementsByClassName('PlayerIframe')[0].contentWindow.aaGlobalee.pgMediator;
			}
		}

		p._handleNotice = function(pkg) {
			var that = this;
			var vv = {};
			try {
				console.dog(">>> " + aa.refNameSelf + " -  _handleNotice: ", pkg.notice.noticeName, pkg);
				vv.noticeName = pkg.notice.noticeName;	
				if (that["_run__" + vv.noticeName + "__Xnt"] ) {
					vv.noticeTransactionName = "_run__" + vv.noticeName + "__Xnt";
				}
				else if (that["_run__" + vv.noticeName + "__Nnt"] ) {
					vv.noticeTransactionName = "_run__" + vv.noticeName + "__Nnt";
				}
				
				vv.transReturn = that[vv.noticeTransactionName](pkg);
				
				return vv.transReturn
			}
			catch(errorr) {
				console.dog(">>> " + aa.refNameSelf + " -  _handleNotice - ERRORR: ", errorr, pkg.notice.noticeName, pkg);
				
				return 'Failed'
			}
		}

		p._executeTarget = function(targetMethod, methodArgs) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " - EXECUTE TARGET: ", targetMethod, methodArgs);
			if ( targetMethod ) {
				vv.method = targetMethod
				vv.methodReturn = vv.method(methodArgs);
			}
			else {
				console.dog(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE TARGET.");
			}
			return vv.methodReturn;
		}
		
		
		p._executeNg = function(targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " - EXECUTE NG: ", targetSelector, targetMethodName, methodArgs);
			if ( angular.element( document.querySelector( targetSelector ) ).scope() ) {
				vv.thisc = angular.element( document.querySelector( targetSelector ) ).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.methodReturn = vv.method.apply(vv.thisc, methodArgs);
			}
			else {
				console.dog(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE NG.");
			}
			return vv.methodReturn;
		}
		
		p._executeNgAsync = async function (targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG: ", targetSelector, targetMethodName, methodArgs);
			
			if ( angular.element( document.querySelector( targetSelector ) ).scope() ) {
				vv.thisc = angular.element( document.querySelector( targetSelector ) ).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.promise1 = vv.method.apply(vv.thisc, methodArgs);
				vv.methodReturn = await vv.promise1;
				try {
					console.dog(">>> " + aa.refNameSelf + " _executeNgAsync - SUCCESS - methodReturn: ", vv.methodReturn);
					return vv.methodReturn
				}
				catch(e) {
					console.dog(">>> " + aa.refNameSelf + " - FAILED - e:", e);
					return e;
				}
			}
			else {
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG.");
				return undefined;
			}
		}
		
		p._genUniqueToken = function() {
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " -  _genUniqueToken.");
			/***Temporal ordinal prefix part */
			vv.milliesSince1970 = Date.now || function() { return +new Date; }; 
			vv.milliPart = vv.milliesSince1970();
			
			/***Random suffix part */
			vv.minNum = 100000000;
			vv.maxNum = 999999999
			vv.randomPart = Math.round( vv.minNum + ( Math.random() * (vv.maxNum - vv.minNum) ) );
			
			/***Combine the prefix parts and suffix parts into the final string */
			vv.uTkn = "_" + vv.milliPart + "_" + vv.randomPart;

			/***Return the unique token */
			return vv.uTkn;
		}
	//}
	
	
	//	================================================================
	//	E(X)TERNAL Notice Transactions: (Xnt)  
	//	...These are for notices that originate *outide* of mediator.
	//{
		p._run__Player_changeState__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			
			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__Player_changeState__Xnt - pkg",  pkg);
			
			vv.exeReturn = that._executeNgAsync.apply(that, 
				[ '.AppVcc', 'handoffToMediator', [ pkg ] ]
			);
			return vv.rtnReturn;
		}
		
		
		p._run__CurrentTrack_playStarted__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			
			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__CurrentTrack_playStarted__Xnt - pkg",  pkg);
			
			vv.exeReturn = that._executeNgAsync.apply(that, 
				[ '.AppVcc', 'handoffToMediator', [ pkg ] ]
			);
			return vv.rtnReturn;
		}
		
		
		p._run__ShareView_requestedFromPlayer__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			
			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__ShareView_requestedFromPlayer__Xnt - pkg",  pkg);
			
			vv.exeReturn = that._executeNgAsync.apply(that, 
				[ '.AppVcc', 'handoffToMediator', [ pkg ] ]
			);
			return vv.rtnReturn;
		}

		p._run__TracksView_requestedFromPlayer__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			
			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__TracksView_requestedFromPlayer__Xnt - pkg",  pkg);
			
			vv.exeReturn = that._executeNgAsync.apply(that, 
				[ '.AppVcc', 'handoffToMediator', [ pkg ] ]
			);
			return vv.rtnReturn;
		}
	//}
	

	//	================================================================
	//	I(N)TERNAL Notice Transactions: (Nnt)  
	//	...These are for notices that originate *inside* of mediator.
	//{
		p._run__zClicked_PsuedoPlayStationBtn__Nnt = function(pkg) {
		}
	//}
	
	
	
	//	================================================================
	//	ROUTINES: (Rtn)   
	//	...These are basically "partial transactions", and/or 
	//	...simple transactions around executing just one method.
	//{
		
		
		p._applyCssNamespacingToHolders__Rtn = function() {
			var that = this;
			var vv = {};

			vv.exeReturn = that._executeNg.apply(that, 
				[ '.StateContainerVcc', 'setAbstractStatesCssNamesVar', [ vv.cssNamespacePerUiStates ]]
			);
		}
	//}

	return ClassConstructor;
})();
