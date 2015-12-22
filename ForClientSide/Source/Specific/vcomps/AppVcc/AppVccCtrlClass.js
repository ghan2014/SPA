/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {}
	aa.globalScope = aaGlobalee
	
	//	Class properties.
	// {
		aa.myVcName = "AppVcc";
		aa.refNameSelf= "AppVccCtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, locationNg, stateNg, stateParamsNg, mediator) {
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.locationNg = locationNg
				aa.globalScope.locationNg = locationNg			// Helpful for debugging.
				that.stateNg = stateNg;
				aa.globalScope.stateNg = stateNg				// Helpful for debugging.
				that.stateParamsNg = stateParamsNg
				aa.globalScope.stateParamsNg = stateParamsNg	// Helpful for debugging.
				that.mediator = mediator
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
	
		
		
	console.dog(">>> AppVccCtrlClass - aa.MyClass ", aa.MyClass );
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
		p.initiatePageRebuild = function() {
			var that = this;
			console.dog( ">>> Start AppVccCtrlClass.initiatePageRebuild()" )
			that._reloadCurrentUiState()
			console.dog( ">>> End AppVccCtrlClass.initiatePageRebuild()" )
		}
		
		p.handoffToMediator = async function(pkg) {
			var that = this;
			var scope = undefined
			console.dog(">>> AppVccCtrlClass.handoffToMediator(pkg) - start - pkg: ", pkg) 
			that.mediator.receiveNotice(scope, pkg);
			return 'done';
		}
	//}	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
		p._setup = function setup() {
			var that = this;
			that._setupDatas();
		};


		p._setupDatas = function setupDatas() {
			var that = this;
			var vv = {};
			that.scopeNg.loc = {}
			that.scopeNg.loc.pleaseWaitDisplayStyle = 'none'
			
			
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none'
					},
					info: {
						name: ''
					}
				}
			};
		};
		
		p._reloadCurrentUiState = async function() {
			var that = this;
			var vv = {};
			
			vv.stateParamsNg = that.stateParamsNg;
			vv.skipState = that.stateNg.current.parent.name+'_emptyUSC';
			vv.goToState = that.stateNg.current;
			
			vv.skippedState = await that.stateNg.go(vv.skipState, {}, 
					{	reload: false,
						inherit: false,
						notify: true
					}
			);
			vv.goneToState = await that.stateNg.go(vv.goToState, vv.stateParamsNg, 
					{	reload: false,
						inherit: true,
						notify: true
					}
			);
		}
	//}
	
	return aa.MyClass;
	
})();

