/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SignupPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "SignupPanelVcc";
		aa.myClassName = "SignupPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

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
	//	PUBLIC/PRIVATE METHODS:
	//{

		
	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> SignupPanelVcc - boooooo");
			that._setupStndDatas()
			that._setupSpcfDatas();
			that.scopeNg.loc.goDude = 'truee';
		};
		
		p._setupStndDatas = function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			
			console.dog(">>> SignupPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
		};
		

		
	//}

	return aa.MyClass;
	
})();



