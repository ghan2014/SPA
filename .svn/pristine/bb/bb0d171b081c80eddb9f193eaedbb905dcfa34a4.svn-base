/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FacebookSdkVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "FacebookSdkVcc";
		aa.myClassName = "FacebookSdkVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> FacebookSdkVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				that._setup();
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
	//	PUBLIC METHODS:
	//{
	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> FacebookSdkVcc - boooooo");
			that._setupStndDatas()
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};
		
		p._setupStndDatas = function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
		};
		
		p._setupSpcfDatas = function() {
			/* Stub */
		};
		
		p._setScopeWatchers = function() {
			/* Stub */
		};
		
	//}

	return aa.MyClass;
	
})();



