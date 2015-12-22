/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Page4rEmailValidationVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Page4rEmailValidationVcc";
		aa.myClassName = "Page4rEmailValidationVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, locationNg, stateNg, stateParamsNg, timeoutNg, mediatorService) {
			console.dog(">>> Page4rEmailValidationVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.locationNg = locationNg
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.booo_greeting = "hola";
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
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = async function() {
			var that = this;
			return await that._refresh()
		}
		
		p.setTextCopy = p._setTextCopy = async function(p1Copy, p2Copy, p3Copy, p4Copy) {
			var that = this;

			that.scopeNg.loc.paragraph01Copy = p1Copy || ''
			that.scopeNg.loc.paragraph02Copy = p2Copy || ''
			that.scopeNg.loc.paragraph03Copy = p3Copy || ''
			that.scopeNg.loc.paragraph04Copy = p4Copy || ''
			
			that.scopeNg.$apply();
		}
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
			///alert(">>> Page4rEmailValidationVcc - boooooo");
			await that._notifyEnteringPageState(that.stateParamsNg);
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			await that._notifyChangedPageState(that.stateParamsNg);
			that.scopeNg.loc.goDude = that.scopeNg.goDude || 'truee';
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
			console.dog(">>> Page4rEmailValidationVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			
			that.scopeNg.loc.paragraph01Copy = 'Account Activation Page'
			
			that.scopeNg.loc.paragraph02Copy = 'If for some reason you get stuck on this page, please try reloading it, or click on the logo above to go to the home page.'
	
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
	
		p.handleMaybeReturnToState = function() {
			var that = this
			var vv = {}
			console.dog(">>> _handleMaybeReturnToState - that.stateNg: ", that.stateNg);
			///alert(">>> BOOOOOOOOOOOO");
			if (localStorage.resumeUponReturnUrl) {
				if ( 
					that.locationNg.url().indexOf("emailvalidation") > -1 
				) {
					vv.pkg = {
						notice: {
							noticeName: "EmailValidation_requested" 
						}
					}
					vv.DontCarePromise = that.mediator.receiveNotice("", vv.pkg)
				}
			}
		}
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	

			
	//}

	return aa.MyClass;
	
})();



