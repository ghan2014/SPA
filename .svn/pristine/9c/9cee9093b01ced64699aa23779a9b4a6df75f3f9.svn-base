/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MediatorServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
	
	var aa = {}
	aa.refNameSelf = "MediatorServiceClass"
	aa.global = aaGlobalee;
	aa.buildTs = Date.now()

	function ClassConstructor() {
		var that = this;
		that._setup();
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;


	//	================================================================
	//	PUBLIC METHODS:
	//{	
		p.receiveNotice = async function (senderScope, pkg) {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " - ****receiveNotice***: ", pkg);
			
			if ( pkg ) {
				vv.handleNoticeReturn = await that._handleNotice(senderScope,pkg);
				return vv.handleNoticeReturn;
			}
			else {
				return "ERROR: NO PKG";
			}
		}
		
		p.bsetHandoffSpec = function (currentTransPkgEntryId, handoffOnSuccess, handoffOnFailure, namedHandoffsMap) {
			var that = this;
			return that._bsetHandoffSpec(currentTransPkgEntryId, handoffOnSuccess, handoffOnFailure, namedHandoffsMap);
		}
	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = function() {
			var that = this;
			console.dog(">>> " + aa.refNameSelf + " ---  - _setup. ");
			
			that._config();
			that.pkgs = {}
			that.pkgEntriesMap = {}
			aa.global.pkgEntriesMap = that.pkgEntriesMap
			that.pkgEntriesList = [];
			aa.global.pkgEntriesList = that.pkgEntriesList;
			that.handoffSpecs = {};
			aa.global.handoffSpecs = that.handoffSpecs;
		}
		
		p._config = function() {
			var that = this
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " ---  - _config. ");
			
			vv.cfg = {}		
			vv.cfg.refNameSelf = aa.refNameSelf;	
			that.cfg = vv.cfg;
			
			return vv.cfg
		}


		p._handleNotice = async function (senderScope, pkg) {
			var that = this;
			var vv = {};
			
			console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - start: ", senderScope, pkg);
			
			///vv.pkg = that._bgetClonedObj(pkg)
			vv.pkg = pkg;
			that.createPkgEntry(vv.pkg)
			

			//{ If incoming pkg has handoffSpec, append handoff pkg to incoming pkg, else use incoming pkg ) 
				if ( pkg.notice.handoffSpecId  && pkg.notice.doHandoffFirst === "true" ) {
					vv.pkg.handedToMePkg = that._getHandoffPkg(pkg.notice.handoffSpecId, 'success');
					vv.pkg.handedToMePkg.pkgHandedTo = vv.pkg.entryId;
					vv.incomingPkgNoticeName = vv.pkg.notice.noticeName;
					vv.noticeNameToUse = vv.pkg.handedToMePkg.notice.noticeName; 
				}
				else {
					vv.incomingPkgNoticeName = vv.pkg.notice.noticeName;
					vv.noticeNameToUse = vv.pkg.notice.noticeName;
				}
			//}
			
			
			console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (senderScope): ", senderScope );

			console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (vv.noticeNameToUse): ", vv.noticeNameToUse);
			
			console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (vv.pkg): ", vv.pkg);
			

			if (that["_run__" + vv.noticeNameToUse + "__Xnt"] ) {
				vv.noticeTransactionName = "_run__" + vv.noticeNameToUse + "__Xnt";
			}
			else if (that["_run__" + vv.noticeNameToUse + "__Nnt"] ) {
				vv.noticeTransactionName = "_run__" + vv.noticeNameToUse + "__Nnt";
			}
			
			vv.transReturn = await that[vv.noticeTransactionName](senderScope, vv.pkg);
			
			return vv.transReturn
		}
		
		
		p._bsetHandoffSpec = function (handoffOnSuccess, handoffOnFailure, namedHandoffsMap, currentTransPkgEntryId) {
			var that = this;
			var vv = {}
			
			vv.handoffSpecId = "HSId"+that._genUniqueToken();
			that.handoffSpecs[vv.handoffSpecId] = {
				currentTransPkgEntryId: currentTransPkgEntryId,
				success: handoffOnSuccess, 
				failure: handoffOnFailure,
				namedHandoffsMap: namedHandoffsMap
			}
			//{ Also, stringify handoffSpecs then store in LocalStorage with handoffSpecId as key.
				//TODO...
			//}
			return vv.handoffSpecId;
		}
		
		p._getHandoffPkg = function(handoffSpecId, need) {
			var that = this;
			var vv = {}

			need = need || 'success'
			
			vv.handoffSpec = that.handoffSpecs[handoffSpecId];
			
			//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
				//TODO...
			//}
			
			if ( typeof vv.handoffSpec.success === 'object' ) {
				vv.handoffPkgOnSuccess = vv.handoffSpec.success;
				//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
					//TODO...
				//}
			}
			else if ( typeof vv.handoffSpec.success === 'string' ) { 
				vv.handoffPkgOnSuccess = that.pkgEntriesMap[vv.handoffSpec.success]
				//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
					//TODO...
				//}
			}
			
			if ( typeof vv.handoffSpec.failure === 'object' ) {
				vv.handoffPkgOnFailure = vv.handoffSpec.failure;
				//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
					//TODO...
				//}
			}
			else if ( typeof vv.handoffSpec.failure === 'string' ) { 
				vv.handoffPkgOnFailure = that.pkgEntriesMap[vv.handoffSpec.failure]
				//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
					//TODO...
				//}
			}
			
			if ( need === 'all' ) {
				vv.returnn = {
					success: vv.handoffPkgOnSuccess,
					failure: vv.handoffPkgOnFailure
				}
			}
			else if ( need === 'success' ) {
				vv.returnn = vv.handoffPkgOnSuccess
			} 
			else if ( need === 'failure' ) {
				vv.returnn = vv.handoffPkgOnSuccess
			}
			else {
				vv.namedFo = vv.handoffSpec[need];
				if ( typeof vv.namedFo === 'object' ) {
					vv.returnn = vv.namedFo
				}
				else if ( typeof vv.namedFo === 'string' ) { 
					vv.returnn = that.pkgEntriesMap[vv.namedFo]
					//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
						//TODO...
					//}
				}	
			} 
			
			return vv.returnn; 
			
		}
		
		
		
		p.createPkgEntry = function(pkg) {
			var that = this;
			var vv = {};
			vv.pkg = pkg

			vv.pkgEntryId = "PEId"+that._genUniqueToken();
			vv.notice = that._bgetClonedObj(vv.pkg.notice);
			
			vv.entryTs = Date.now() - aa.buildTs;
			
			vv.entryChainItem = vv.pkgEntryId + ' - ' + vv.notice.noticeName;
			
			if ( ! vv.pkg.entryCntForPkg ) {
				vv.pkg.entryCntForPkg = 1;
				vv.entryCntForPkg = vv.pkg.entryCntForPkg;
				vv.pkg.entryId_first = vv.pkgEntryId;
				vv.pkg.noticeName_first = vv.notice.noticeName;
				vv.pkg.entriesChain = [vv.entryChainItem];
			}
			else {
				vv.pkg.entryCntForPkg = vv.pkg.entryCntForPkg + 1;
				vv.entryCntForPkg = vv.pkg.entryCntForPkg;	
				vv.pkg.entriesChain.push(vv.entryChainItem);
			}
			
			vv.entriesChain = that._bgetClonedObj(vv.pkg.entriesChain);
			
			vv.pkgEntry = {
				noticeName: vv.notice.noticeName,
				noticeName_first: vv.pkg.noticeName_first,
				entryId: vv.pkgEntryId,
				entryIdInPkg_first: vv.pkg.entryId_first,
				entryCntForPkg: vv.entryCntForPkg,
				entriesChain: vv.entriesChain,
				ts: vv.entryTs,
				notice: vv.notice,
				pkg: vv.pkg
			};

			vv.pkg.entryId = vv.pkgEntryId;
			vv.pkg.noticeName = vv.notice.noticeName;
			vv.pkg.entriesChain = vv.entriesChain;
			that.pkgEntriesMap[vv.pkgEntryId] = vv.pkgEntry;
			
			//{ Also, stringify pkgEntriesMap then store in LocalStorage with pkgEntryId as key.
				//TODO...
			//}
			
			vv.entriesChain_string = '';
			if ( vv.pkgEntry.entryIdInPkg_first !== vv.pkgEntry.entryId ) {
				vv.entriesChain_string = ' | ' + JSON.stringify(vv.pkg.entriesChain);
			}
			
			that.pkgEntriesList.push(vv.pkgEntry.entryId + ' | ' +  vv.entryCntForPkg + ' | ' + vv.pkgEntry.noticeName  + ' | ' + vv.entryTs + vv.entriesChain_string  );
			
			//{ Also, stringify pkgEntriesList then store in LocalStorage with 'pkgEntriesList' as name.
				//TODO...
			//}
				
		}

		
		p._executeTarget = function(targetMethod, methodArgs, parentObj) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-TARGET: ", targetMethod, methodArgs);
			
			if ( targetMethod ) {
				if (parentObj) {
					vv.parentObj = parentObj;
					vv.method = targetMethod
					vv.methodReturn = vv.method.apply(vv.parentObj, methodArgs);
				}
				else {
					vv.method = targetMethod
					vv.methodReturn = vv.method(methodArgs);
				}
			}
			else {
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-TARGET.");
			}
			return vv.methodReturn;
		}


		p._executeNg = function (targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG: ", targetSelector, targetMethodName, methodArgs);
			
			if ( angular.element( document.querySelector( targetSelector ) ).scope() ) {
				vv.thisc = angular.element( document.querySelector( targetSelector ) ).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.methodReturn = vv.method.apply(vv.thisc, methodArgs);
			}
			else {
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG.");
			}
			return vv.methodReturn;
		}
		
		p._executeNgAsync = async function (targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};	
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG-ASYNC: ", targetSelector, targetMethodName, methodArgs);
			
			try {
				vv.thisc = angular.element( document.querySelector( targetSelector ) ).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.promise1 = vv.method.apply(vv.thisc, methodArgs);
				vv.methodReturn = await vv.promise1;
				try {
					console.dog(">>> _executeNgAsync - SUCCESS - methodReturn: ", vv.methodReturn);
					return vv.methodReturn
				}
				catch(errorr) {
					console.dog('>>> ERROR - _executeNgAsync - FAILED - errorr: ', errorr);
					return errorr;
				}
			}
			catch(errorr) {
				console.dog(">>> ERROR - " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG-ASYNC. - errorr: ", errorr);
				return undefined;
			}
		}
		

		
		p._genUniqueToken = function() {
			var that = this;
			var vv = {}
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - _genUniqueToken. ");
			
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
		
		p._bgetClonedObj = function(obj) {
			var vv = {}
			console.dog(">>> _bgetClonedObj - obj: ", obj);
			vv.objAsString = JSON.stringify(obj);
			vv.clonedObj = JSON.parse(vv.objAsString);
			return vv.clonedObj;
		}
		
		
	//}
	
	
	


	return ClassConstructor;
})();
