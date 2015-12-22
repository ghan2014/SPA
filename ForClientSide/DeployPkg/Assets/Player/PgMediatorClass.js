/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PgMediatorClass.js
 * *********************************************************************
 * *********************************************************************
 */
 
var aa = {}
aa.refNameSelf = "PgMediatorClass__for_Player_Pg"
	 
aaGlobalee = (typeof aaGlobalee === 'object')  ? aaGlobalee : {}

aaGlobalee.returnPgMediatorClass = function() {

	function PgMediatorClass() {
		var that = this;
		that._setup();
		var breakpoint = 'a';
	}

	var p = PgMediatorClass.prototype;


	//	================================================================
	//	PUBLIC METHODS:
	//{	
		p.receiveNotice = function(pkg) {
			var that = this;
			var vv = {};
			console.log(">>> " + aa.refNameSelf + " - ***receiveNotice***: ", pkg);
			
			vv.handleNoticeReturn = that._handleNotice(pkg);
			return vv.handleNoticeReturn;
		}
	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{

		p._setup = function(myName, cfg) {
			var that = this;
			console.log(">>> " + aa.refNameSelf + " - _setup. ");
			that._config();
		}
		
		p._config = function() {
			var that = this
			console.log(">>> " + aa.refNameSelf + " - _config. ");
			
			that.myTraceName = "PLAYER-PG-MEDIATOR"
			that.cfg = {}
			that.cfg.getRef_ParentPgMediator_receiveNotice = function() {
				return parent.aaGlobalee.pgMediator;
			}
		}

		p._handleNotice = function(pkg) {
			var that = this;
			var vv = {};
			console.log(">>> " + aa.refNameSelf + " -  _handleNotice: ", pkg.notice.noticeName, pkg);
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

		p._executeTarget = function(targetMethod, methodArgs) {
			var that = this;
			var vv = {};	
			console.log(">>> " + aa.refNameSelf + " - EXECUTE TARGET: ", targetMethod, methodArgs);
			if ( targetMethod ) {
				vv.method = targetMethod
				vv.methodReturn = vv.method(methodArgs);
			}
			else {
				console.log(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE TARGET.");
			}
			return vv.methodReturn;
		}
		
		
		p._executeNg = function(targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};	
			console.log(">>> " + aa.refNameSelf + " - EXECUTE NG: ", targetSelector, targetMethodName, methodArgs);
			if ( angular.element( document.querySelector( targetSelector ) ).scope() ) {
				vv.thisc = angular.element( document.querySelector( targetSelector ) ).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.methodReturn = vv.method.apply(vv.thisc, methodArgs);
			}
			else {
				console.log(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE NG.");
			}
			return vv.methodReturn;
		}
		
		p._genUniqueToken = function() {
			var that = this;
			var vv = {};	
			console.log(">>> " + aa.refNameSelf + " - _genUniqueToken. ");

			
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

		p._run__SPA_wantsPlayAnStation__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			console.log(">>> " + aa.refNameSelf + " -  - START: _run__SPA_wantsPlayAnStation__Xnt", vv, pkg);
			
			//{	Params: 
				vv.stationId = pkg.notice.stationId;
				vv.autoplay = pkg.notice.autoplay;
				vv.transId = pkg.notice.transId || that._genUniqueToken();
			//}
			
			return vv.rtnReturn;
		}

		p._run__SPA_wantsNoPlayAnStation__Xnt = function(pkg) {
			var that = this;
			console.log(">>> " + aa.refNameSelf + " -  - START: _run__SPA_wantsNoPlayAnStation__Xnt", vv, pkg);
			
			var vv = {}
			//{	Params: 
				vv.transId = pkg.transId || that._genUniqueToken();
			//}
			return vv.rtnReturn;
		}
		
		p._run__SPA_wantTrackPaused__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			console.log(">>> " + aa.refNameSelf + " -  - START: _run__SPA_wantTrackPaused__Xnt", vv, pkg);
			
			//{	Params: 
				vv.transId = pkg.transId || that._genUniqueToken();
			//}
			return vv.rtnReturn;
		}
		
		p._run__SPA_wantsTrackStopped__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			console.log(">>> " + aa.refNameSelf + " -  - START: _run__SPA_wantsTrackStopped__Xnt", vv, pkg);
			
			//{	Params: 
				vv.transId = pkg.transId || that._genUniqueToken();
			//}

			return vv.rtnReturn;
		}
		
		p._run__SPA_wantsTrackSkipped__Xnt = function(pkg) {
			var that = this;
			var vv = {}
			console.log(">>> " + aa.refNameSelf + " -  - START: _run__SPA_wantsTrackSkipped__Xnt", vv, pkg);
			
			//{	Params: 
				vv.transId = pkg.transId || that._genUniqueToken();
			//}
			return vv.rtnReturn;
		}
	
	//}
	

	//	================================================================
	//	I(N)TERNAL Notice Transactions: (Nnt)  
	//	...These are for notices that originate *inside* of mediator.
	//{
		p._run__Noun_verbPrepostionalObj__Nnt = function(pkg) {
		}
	//}
	
	
	
	//	================================================================
	//	ROUTINES: (Rtn)   
	//	...These are basically "partial transactions", and/or 
	//	...simple transactions around executing just one method.
	//{
		
		
		p._verbName__Rtn = function() {
			var that = this
			var vv = {};

			vv.exeReturn = that._executeNg.apply(that, 
				[ '.SomeVcc', 'someMethodInVcc', [ arg1, arg2, argN ]]
			);
		}
	//}

	return PgMediatorClass;
};
