/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: OuterHolderVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
 
module.exports = (function() {
	
	var aa = {}
	
	//	Class properties.
	// {
		aa.myVcName = "OuterHolderVcc";
		aa.refNameSelf= "OuterHolderVccCtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
	//}

	//	Scaffold class.
	//{
		function MyClass(sscc, stateNg, stateParamsNg, toolbox) {
			if ( typeof sscc === 'object' ) {  
				sscc.thisc = this;
				var sstt = this;
				sstt.sscc = sscc;
				sstt.stateNg = stateNg;
				sstt.stateParamsNg = stateParamsNg;
				sstt.toolbox = toolbox;
				sstt._setup();
			}
		}
		
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(
			aa.myVcName, MyClass, aa.ParentClass
		)
	//}
		
	var p = aa.MyClass.prototype;
	

	//	================================================================
	//	PUBLIC METHODS:
	//{
		p.buildLayout = function(usedSlotsList) {
			var sstt = this;
			sstt._buildLayout(usedSlotsList)
		}
		
		p.switchOnOffPlayer = function switchOnOffFooterOffset( doSwitchOn ) {
			var sstt = this;
			if ( doSwitchOn ) {
				sstt._buildLayout(sstt.usedSlotsListWithTopAndBottomOn)
			}
			else {
				sstt._buildLayout(sstt.usedSlotsListWithOnlyTopOn)
			}
			sstt.sscc.$apply();
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
			sscc.ssvv.domSwitches = {}
			sscc.ssvv.isOkayToShowPlayer = false
			sstt.usedSlotsListWithOnlyTopOn =  [ 
				'OuterHolder_DnN1Slot'
			]
			sstt.usedSlotsListWithTopAndBottomOn =  [ 
				'OuterHolder_DnN1Slot',
				'OuterHolder_DnN2Slot'
			]
			
		}

		
		p._customSetup = function() {
			var sstt = this;
			var sscc = this.sscc;

			sstt._buildLayout('INIT');
		}
	//}
		
		
	//	================================================================
	//	CUSTOM PRIVATE METHODS:
	//{	
	
		p._buildLayout = function(usedSlotsList) {
			var sstt = this;
			if (usedSlotsList === 'INIT') {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);	
			}
			else {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);
				sstt._setSlotsInOnMap(usedSlotsList);
				sstt._setSpacesInOnMap();
				sstt._setSwitchesMap(false);				
			}
			
			sstt.sscc.ssvv.domSwitches = sstt.toolbox.cloneMap(sstt.switchesMap);			
		}


		p._setSlotsInOnMap = function(usedSlotsList) {
			var sstt = this;
			var vv = {};
			
			//	For testing:
			//{
				vv.usedSlotsList = usedSlotsList || [ 
					'OuterHolder_DnN1Slot',
					'OuterHolder_DnN2Slot'
				]
			//}
			
			vv.usedSlotsListLen = vv.usedSlotsList.length;
			for (vv.idx=0; vv.idx < vv.usedSlotsListLen; vv.idx++)  {
				sstt.onMap[vv.usedSlotsList[vv.idx]] = true;
			}
		}
		
		p._setSpacesInOnMap = function() {
			var sstt = this;
			var vv = {};	
			
			// 	No spaces, just slots.
		}


		p._initOnMap = function() {
			var sstt = this;
			sstt.onMap = {};
		}

		p._setSwitchesMap = function(defaultt) {
			var sstt = this;
			sstt.switchesMap = {
				OuterHolder_DnN1Slot: sstt.onMap.OuterHolder_DnN1Slot || defaultt,
				OuterHolder_DnN2Slot: sstt.onMap.OuterHolder_DnN2Slot || defaultt
			}
		}

	return aa.MyClass;

})();
