/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MenuItemsHolderWithTriggerVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "MenuItemsHolderWithTriggerVcc";
		aa.myClassName = "MenuItemsHolderWithTriggerVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> MenuItemsHolderWithTriggerVcc_CtrlClass held as MyClass");
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
						console.dog(">>> Ok to setup holder and trigger: ", that.scopeNg.instance_idfier, that.scopeNg);
						///alert(">>> Ok to setup holder and trigger: " +  that.scopeNg.instanceIdfier)
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
			console.dog('>>> MenuItemsHolderWithTriggerVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
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
			console.dog(">>> MenuItemsHolderWithTriggerVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
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
				that.scopeNg.$watch("ariaLabeling", 
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
	//	SIMILAR TYPE PUBLIC/PRIVATE METHODS:
	//{
		p.openMenu = function($mdOpenMenu, ev) {
			var that = this;
			var vv = {}
			$mdOpenMenu(ev);

			vv.resizerFunction = function() {
				document.getElementsByClassName('md-menu-backdrop')[0].style.height = document.getElementsByClassName('StateContainerVcc')[0].offsetHeight + 'px';
				$(".md-open-menu-container").addClass(that.scopeNg.loc.purposing.role);
			}
			vv.voidd = setTimeout(vv.resizerFunction, 1)
		};
	//}	
		
	//	================================================================
	//	SIMILAR TYPE PRIVATE METHODS:
	//{

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



