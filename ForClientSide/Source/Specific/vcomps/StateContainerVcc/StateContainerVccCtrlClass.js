/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StateContainerVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */


module.exports = (function() {

	var aa = {}
	
	//	Class properties.
	// {
		aa.myVcName = "StateContainerVcc";
		aa.refNameSelf= "StateContainerVcc_CtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
	//}

	//	Scaffold class.
	//{
		function MyClass(sscc, httpNg, stateNg, ) {
			if ( typeof sscc === 'object' ) {  
				sscc.thisc = this;
				var sstt = this;
				sstt.sscc = sscc;
				sstt.httpNg = httpNg;
				sstt.stateNg = stateNg;
				sstt._setup();
			}
		}
		
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(
			aa.myVcName, MyClass, aa.ParentClass
		)
	//}
		
		
	console.dog(">>> StateContainerVcc_CtrlClass - aa.MyClass ", aa.MyClass );
	
	var p = aa.MyClass.prototype;
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
		p.setAbstractStatesCssNamesVar = function(stateNames) {
			var sstt = this;
			sstt._setAbstractStatesCssNamesVar(stateNames)
		}
		
	//}	
	
	
	//	================================================================
	//	STANDARD PRIVATE METHODS:
	//{	
		p._setup = function() {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssdd = {};
			sscc.ssvv = {};
			
			sstt._setMyNames();
			sstt._initMockData()
			sstt._initDatas();
			sstt._customSetup()
		};


		p._setMyNames = function() {
			var sstt = this;
			var sscc = this.sscc;
			
			sscc.ssdd.myVcName = aa.myVcName;
			sscc.ssvv.myCssName = aa.myVcName;
		};

		p._initMockData = function() {
			var sstt = this;
			var sscc = this.sscc;
			sstt.mockData = {}
		}
		
		p._initDatas = function() {
			var sstt = this;
			var sscc = this.sscc;
		}
		
		p._customSetup = function() {
			var sstt = this;
			var sscc = this.sscc;
			///sstt._hardSetAuthHeaderForTesting();
		}
	//}
		
		
	//	================================================================
	//	CUSTOM PRIVATE METHODS:
	//{	
		p._setAbstractStatesCssNamesVar = function(stateNames) {
			var sstt = this;
			var sscc = this.sscc;
			if (stateNames) {
				sscc.ssvv.abstractStatesCssNames = stateNames
			}
		}
		
		p._hardSetAuthHeaderForTesting = function() {
			var that = this; 
			var vv = {}
			vv.headerValString = 'Live365 D80AC95F7D6F4285986F1FD15FF8FB24'
			that.httpNg.defaults.headers.common.Authorization = vv.headerValString;
			///alert('_setAuthHeader')
		}
	//}
	
	return aa.MyClass;

})();


