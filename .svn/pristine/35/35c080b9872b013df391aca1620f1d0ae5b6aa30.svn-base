/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SlideDownVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "SlideDownVcc";
		aa.myClassName = "SlideDownVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
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
	//{}
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> SlideDownVcc - boooooo");
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
			that.scopeNg.loc.remoteSessionId = ''
			
			that.scopeNg.loc.panelActionClassName = "PanelClose"
			
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
			/* STUB */
		};
		

		
		p._openPanelWithDrct = function _openPanelWithDrct(drctName) {
			var that = this;
			var vv = {};
			//	-- DELEGATE TO LINK FUNCTION (Lf) --
	
			//{ Setup promise that informs that panel is fully (w/drct) opened.
				vv.myPromise = new Promise(function(resolve,reject){
				
					vv.unregisterWatchFnc = that.scopeNg.$watch(
						'fromLf.isPanelFullyOpened', 
						
						function(newVal, oldVal){	
							
							if ( newVal === true ) {
								vv.unregisterWatchFnc();
								resolve("opened")
							}
						}, 
						
						true
					);
				})
			//}	
			//{ Inform Lf, via scope var, of the params for displaying the panel
				that.scope.toLf.panelParams = {
					action: open,
					drctName: drctName,
				}
			//}
			//{ Now inform by applying changes to scope .
				that.scope.$apply();
			//}
			
			//	Return the promise.
				return vv.myPromise
			//}
		}
			


		
	//}

	return aa.MyClass;
	
})();



