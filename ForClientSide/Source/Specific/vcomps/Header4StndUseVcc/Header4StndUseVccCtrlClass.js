
/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: Header4StndUseVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "Header4StndUseVcc";
		aa.myClassName = "Header4StndUseVccCtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> Header4StndUseVccCtrlClass held as MyClass - args: ", arguments);
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
	//	PUBLIC/PRIVATE METHODS:
	//{
		p.refresh = p._refresh = function() {
			var that = this;
			var vv = {};
			///alert(">>> Header4StndUseVccCtrlClass.refresh begin");
			that._setup();
			///alert(">>> Header4StndUseVccCtrlClass.refresh mid");
			that.scopeNg.$apply();
			///alert(">>> Header4StndUseVccCtrlClass.refresh done");
		}
		
		p.closeTheMenuIfOpen = p.closeTheMenuIfOpen = function() {
			// get elment and just uncheck
			$('.Header4StndUseVcc .navTrigger').attr('checked', false);
			
		}
		
		
	
	//}
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			that._setupStndDatas()
			that._setupSpcfDatas();
		};
		
		p._setupStndDatas = function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.fromLf = {};
			that.scopeNg.toLf = {};
			that.scopeNg.inLf = {};
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
			var vv = {};
			that.scopeNg.loc.menuCheckboxIsChecked = false;
			that._updateIsLoggedInUser();
		};
		
		
		p._updateIsLoggedInUser = function() {
			var that = this;
			that.scopeNg.loc.sessionId = that.sessionService.getSessionIdForRemote() 
			that.scopeNg.loc.isLoggedInUser = that.scopeNg.loc.sessionId ? true : false;
		}
		



	return aa.MyClass;
	
})();



