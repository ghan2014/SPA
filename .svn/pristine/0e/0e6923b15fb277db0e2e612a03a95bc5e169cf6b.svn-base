/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PurposedPage4rStandalonesVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "PurposedPage4rStandalonesVcc";
		aa.myClassName = "PurposedPage4rStandalonesVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, mediatorService) {
			console.dog(">>> PurposedPage4rStandalonesVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.mediatorService = mediatorService
				that.stateParamsNg = stateParamsNg;
				that._runSetup();
				return 'done'
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
	
		p._runSetup = function() {
			var that = this;
			that._setup()
		}
	
	
		p._setup = async function() {
			var that = this;
			///alert(">>> PurposedPage4rStandalonesVcc - boooooo");
			await that._notifyEnteringPageState(that.stateParamsNg);
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			that.scopeNg.loc.goDude = that.scopeNg.goDude || 'truee';
			that.scopeNg.$apply();
			return 'done'
		};
		
		p._setupStndDatas = function() {
			var that = this;
			
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			console.dog(">>> PurposedPage4rStandalonesVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			///alert(">>> that.scopeNg.purposing: " + that.scopeNg.purposing)
			that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.purposing);
			return 'done'
		};
		
		p._setScopeWatchers = async function() {
			var that = this;
			return 'done'
		};
		
		p._refresh = async function() {
			var that = this;
			var vv = {};
			
			that.scopeNg.loc.okToShow = false;
			that.scopeNg.$apply();
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.$apply();		

			return 'done';
		}
	//}
	
	
	
	//	================================================================
	//	PAGE TYPE PUBLIC/PRIVATE METHODS:
	//{

	//}	
		
	//	================================================================
	//	PAGE TYPE PRIVATE METHODS:
	//{
		p._notifyEnteringPageState = async function() {
			var that = this;
			var pkg = {
				notice: {
					noticeName: 'Entering_PageState',
					pageStateName: that.stateNg.current.name
				}
			}
			console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);
			
			await that.mediatorService.receiveNotice(that.scopeNg, pkg);
			return 'done'
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



