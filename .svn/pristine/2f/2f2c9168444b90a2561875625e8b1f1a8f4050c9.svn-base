/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FloatingOptionsMenuVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "FloatingOptionsMenuVcc";
		aa.myClassName = "FloatingOptionsMenuVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> FloatingOptionsMenuVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.stationsService = stationsService
				
				that._setupOnGo()
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
	
		p._setupOnGo = async function() {
			var that = this;
			var vv = {}
			
			that.scopeNg.$watch('goDude', 
				function() {
					if ( that.scopeNg.goDude === 'truee' ) {
						///alert(that.scopeNg.stationsFilter);
						var dc = that._setup();
					}
				}
			);
			return 'done';
		};
	
		
		p._setup = async function(goDude) {
			var that = this;
			///alert(that.scopeNg.goDude);
			await that._setupStndDatas()
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			console.dog('>>> FloatingOptionsMenuVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			that.scopeNg.$apply();
			
			return 'done'
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			console.dog(">>> FloatingOptionsMenuVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			
			that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
			that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
			return 'done'
		};

		p._setScopeWatchers = async function() {
			var that = this;
			
			//{ Watch attributes.
				that.scopeNg.$watch("purposing", 
					function() {that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;}
				)
				that.scopeNg.$watch("instanceIdfier", 
					function() {that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;}
				)

			//}
			return 'done';
			
		};
		
	//}
	
	
	//	================================================================
	//	OPTION MENU PUBLIC/PRIVATE METHODS:
	//{
		p.showMenu = p._showMenu = async function(purposing, purposingForShare) {
			var that = this
			var vv = {}
			///alert("booooooo1")
			that.scopeNg.loc.okToShow = false;
			that.scopeNg.$apply();
			vv.voidd = await that._utilizePurposing(purposing, purposingForShare)
			that.scopeNg.$apply();
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.$apply();
			///alert("booooooo1")
			$(".FloatingOptionsMenuVcc .md-icon-button ").click()	

			return 'done'
		}

		p.openMenu = function($mdOpenMenu, ev) {
			var that = this;
			var vv = {}
			var that = this;
			///vv.heightForMask = document.getElementsByClassName('StateContainerVcc')[0].offsetHeight;
			$mdOpenMenu(ev);

			vv.resizerFunction = function() {
				document.getElementsByClassName('md-menu-backdrop')[0].style.height = document.getElementsByClassName('StateContainerVcc')[0].offsetHeight + 'px';
				$(".md-open-menu-container").addClass(that.scopeNg.loc.purposing.role);
			}
			vv.voidd = setTimeout(vv.resizerFunction, 1)
			
		};
	//}	
		
	//	================================================================
	//	OPTION MENU TYPE PRIVATE METHODS:
	//{
		p._utilizePurposing = async function(purposing, purposingForShare) {
			var that = this
			var vv = {}
			///alert("booooooo2")
			that.scopeNg.loc.purposing = purposing	
			that.scopeNg.loc.purposingForShare = purposingForShare	

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



