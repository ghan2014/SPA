/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rPasswordResetVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Page4rPasswordResetVcc";
		aa.myClassName = "Page4rPasswordResetVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, membersService) {
			console.dog(">>> Page4rPasswordResetVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.membersService = membersService;
				that.booo_greeting = "PasswordReset";
				that._runSetup();
				return 'done';
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
	//	================================================================
	//	PUBLIC/PRIVATE METHODS METHODS:
	//{
		p.submitPasswordResetForm = async function(notice) {
			var that = this;
			var vv = {};

			vv.password = that.scopeNg.loc.password;
			vv.confirnPassword = that.scopeNg.loc.confirmPassword;
			vv.vcode = that.stateParamsNg.vcode;
			
			try{
				vv.remotePasswordReset = await that.membersService.forgotPasswordResetItem(vv.password, vv.vcode);
				//vv.postProcessedPasswordReset = await that._postProcessPasswordReset(vv.remotePasswordReset);
	console.dog('-------------------call controllor when submit password reset----------------------------');
	console.dir(vv.remotePasswordReset);


				vv.results = vv.remotePasswordReset.results.invalidResults;
				
				if (vv.results.length > 0)  { //error
					vv.viewPasswordResetMsg = {status: "failed",  idfier: "pwr_e1",  errorr: vv.remotePasswordReset.results.invalidResults,  messageForDisplay: vv.remotePasswordReset.results.resultsMessage};
				}
				else{ //success
					vv.remotePasswordReset.results.resultsMessage = vv.remotePasswordReset.results.resultsMessage || "Password Successfully Reset"
					vv.viewPasswordResetMsg = {status: "succeeded",  idfier: "pwr_e2",  sessionId: vv.sessionId,  messageForDisplay: vv.remotePasswordReset.results.resultsMessage};
				}

				console.dog(">>> passwordReset - vv.viewPasswordResetMsg: ", vv.viewPasswordResetMsg);
				console.dog(">>> passwordReset - vv.remotePasswordReset: ", vv.remotePasswordReset);
			}
			catch(err){
				vv.viewPasswordResetMsg = {status: "failed",  idfier: "pwr_e3",  sessionId: vv.sessionId,  messageForDisplay: err.statusText};
				console.dog(">>> passwordReset - error: ", err);
				console.dog(">>> passwordReset - vv.viewPasswordResetMsg: ", vv.viewPasswordResetMsg);
			}
			finally{
				console.dog(">>>------------- passwordReset - finally00: ");
				vv.pkg = {
					notice: {
						noticeName: 'PasswordResetReturnAction',
						passwordResetAPIServerReturn: vv.viewPasswordResetMsg
					}
				}
				vv.processAPIReturn = await that.mediatorService.receiveNotice(that, vv.pkg);
				console.dog(">>>------------- passwordReset - finally111: ", vv.processAPIReturn );
				return vv.processAPIReturn;
		    }
			
            return 'done';
		}
		
		p.passwordResetReturnAction = async function(passwordResetReturn) {
			var that = this;
			var vv = {};
			
			vv.passwordResetReturn = passwordResetReturn;
			
console.dog(">>>------------------- passwordResetReturnAction ");
			that.scopeNg.loc.passwordResetReturn = passwordResetReturn.passwordResetAPIServerReturn.messageForDisplay  ||  "Your password was reset.  Please click on the logo above to go to the home page";
			that.scopeNg.$apply();
console.dog(">>>------------------- passwordResetReturnAction - vv.passwordResetReturnMsg: ", that.scopeNg.loc.passwordResetReturn);
			return vv.passwordResetReturn;
		}

	//}	

	//}	
	
	//	================================================================
	//	APPISH PRIVATE METHODS:
	//{	
	
		p._runSetup = function() {
			var that = this;
			that._setup();
		}
	
	
		p._setup = async function() {
			var that = this;
			///alert(">>> PasswordResetPanelVcc - boooooo");
			await that._notifyEnteringPageState(that.stateParamsNg);
			await that._setupStndDatas();
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			await that._notifyChangedPageState(that.stateParamsNg);
			that.scopeNg.loc.goDude = that.scopeNg.goDude || 'truee';
			return 'done';
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';

			console.dog(">>> Page4rPasswordResetVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			var vv = {};
			
			that.scopeNg.loc.password = '';
			that.scopeNg.loc.confirmPassword = '';
			that.scopeNg.loc.vcode = '';
			that.scopeNg.loc.passwordResetReturn = '';
			
			return 'done'
		};
		
		p._setScopeWatchers = async function() {
			var that = this;
			return 'done';
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
		
		
		p._notifyChangedPageState = async function _notifyChangedPageState() {
			var that = this;
			
			console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);
			
			var pkg = {
				notice: {
					noticeName: 'Changed_PageState',
					pageStateName: that.stateNg.current.name
				}
			}
			var asyncNotify = function() {
				
				console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);
				
				that.mediatorService.receiveNotice(that.scopeNg, pkg);
			}
			that.timeoutNg(asyncNotify);
			
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
		p._openMenu = function($mdOpenMenu, ev) {
			var that = this;
			var originatorEv = ev;
			$mdOpenMenu(ev);
		};
			
	//}

	return aa.MyClass;
	
})();



