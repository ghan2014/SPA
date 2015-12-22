/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: FlexiHolderVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
 
module.exports = (function() {
	
	var aa = {}
	aa.global = aaGlobalee;
	
	//	Class properties.
	// {
		aa.myVcName = "FlexiHolderVcc";
		aa.refNameSelf= "FlexiHolderVcc_CtrlClass";
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
				sstt.toolbox = toolbox
				sstt._setup();
			}
		}
		
		aa.MyClass = aa.global.ooUtils.scaffoldClass(
			aa.myVcName, MyClass, aa.ParentClass
		)
	//}
		
	var p = aa.MyClass.prototype;
	

	//	================================================================
	//	PUBLIC METHODS:
	//{
		p.positionFooterAbovePlayer = function() {
			var sstt = this;
			sstt._positionFooterAbovePlayer()
		}
		
		p.positionFooterNormally = function() {
			var sstt = this;
			sstt._positionFooterNormally()
		}
		
		p.buildLayout = function(usedSlotsList) {
			var sstt = this;
			sstt._buildLayout(usedSlotsList)
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
	
		p._positionFooterAbovePlayer = function() {
			var sstt = this;
			sstt.sscc.ssvv.footerOffsetCssName = 'OffsetFooterAbovePlayer'
		}
		
		p._positionFooterNormally = function() {
			var sstt = this;
			sstt.sscc.ssvv.footerOffsetCssName = ''
		}
	
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
					'WellPrmStrata_MainSpc_MainSlot',
					'WellPrmStrata_MainSpc_UpN3Slot',
					'WellPrmStrata_MainSpc_UpN2Slot',
					'WellPrmStrata_MainSpc_UpN1Slot'
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

			//----------------------------------------------------------
			//	"Outdenting" inorder to show child to parent dependency:
			
							sstt.onMap.WellPrmStrata_MainSpc = ( 
								sstt.onMap.WellPrmStrata_MainSpc_MainSlot || 
								sstt.onMap.WellPrmStrata_MainSpc_UpN3Slot || 
								sstt.onMap.WellPrmStrata_MainSpc_UpN2Slot || 
								sstt.onMap.WellPrmStrata_MainSpc_UpN1Slot || 
								sstt.onMap.WellPrmStrata_MainSpc_DnN1Slot || 
								sstt.onMap.WellPrmStrata_MainSpc_DnN2Slot || 
								sstt.onMap.WellPrmStrata_MainSpc_DnN3Slot 
							)
							sstt.onMap.WellPrmStrata_LfN2Spc = ( 
								sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || 
								sstt.onMap.WellPrmStrata_LfN2Spc_DnN2Slot || 
								sstt.onMap.WellPrmStrata_LfN2Spc_DnN3Slot
							)
							sstt.onMap.WellPrmStrata_LfN1Spc = ( 
								sstt.onMap.WellPrmStrata_LfN1Spc_DnN1Slot || 
								sstt.onMap.WellPrmStrata_LfN1Spc_DnN2Slot || 
								sstt.onMap.WellPrmStrata_LfN1Spc_DnN3Slot 
							)
							sstt.onMap.WellPrmStrata_RtN1Spc = ( 
								sstt.onMap.WellPrmStrata_RtN1Spc_DnN1Slot || 
								sstt.onMap.WellPrmStrata_RtN1Spc_DnN2Slot || 
								sstt.onMap.WellPrmStrata_RtN1Spc_DnN3Slot 
							)
							sstt.onMap.WellPrmStrata_RtN2Spc = ( 
								sstt.onMap.WellPrmStrata_RtN2Spc_DnN1Slot || 
								sstt.onMap.WellPrmStrata_RtN2Spc_DnN2Slot || 
								sstt.onMap.WellPrmStrata_RtN2Spc_DnN3Slot
							)
						
						sstt.onMap.WellPrmStrata = ( 
							sstt.onMap.WellPrmStrata_MainSpc || 
							sstt.onMap.WellPrmStrata_LfN2Spc || 
							sstt.onMap.WellPrmStrata_LfN1Spc || 
							sstt.onMap.WellPrmStrata_RtN1Spc || 
							sstt.onMap.WellPrmStrata_RtN2Spc
						)
						
					sstt.onMap.Well = ( 
						sstt.onMap.WellPrmStrata || 
						sstt.onMap.Well_UpN3Slot || 
						sstt.onMap.Well_UpN2Slot || 
						sstt.onMap.Well_UpN1Slot || 
						sstt.onMap.Well_DnN1Slot || 
						sstt.onMap.Well_DnN2Slot || 
						sstt.onMap.Well_DnN3Slot
					)
					
					sstt.onMap.FlexiAreaPrmStrata_LfN1Spc = ( 
						sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN1Slot || 
						sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN2Slot || 
						sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN3Slot 
					)
					sstt.onMap.FlexiAreaPrmStrata_RtN1Spc = ( 
						sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN1Slot || 
						sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN2Slot || 
						sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN3Slot 
					)
				
				sstt.onMap.FlexiAreaPrmStrata = ( 
					sstt.onMap.Well ||
					sstt.onMap.FlexiAreaPrmStrata_LfN1Spc ||
					sstt.onMap.FlexiAreaPrmStrata_RtN1Spc 
				)
				
			sstt.onMap.FlexiArea = (
				sstt.onMap.FlexiAreaPrmStrata || 
				sstt.onMap.FlexiArea_UpN3Slot || 
				sstt.onMap.FlexiArea_UpN2Slot || 
				sstt.onMap.FlexiArea_UpN1Slot ||
				sstt.onMap.FlexiArea_DnN1Slot || 
				sstt.onMap.FlexiArea_DnN2Slot || 
				sstt.onMap.FlexiArea_DnN3Slot
			)
			
			
			sstt.onMap.TheFooterArea = ( 
				sstt.onMap.TheFooterArea_DnN1Slot || 
				sstt.onMap.TheFooterArea_DnN2Slot || 
				sstt.onMap.TheFooterArea_DnN3Slot
			)
			
			sstt.onMap.TheTopFixedPosArea = ( 
				sstt.onMap.TheTopFixedPosArea_UpN3Slot ||
				sstt.onMap.TheTopFixedPosArea_UpN2Slot ||
				sstt.onMap.TheTopFixedPosArea_UpN1Slot
			)
		}


		p._initOnMap = function() {
			var sstt = this;
			sstt.onMap = {};
		}

		p._setSwitchesMap = function(defaultt) {
			var sstt = this;
			sstt.switchesMap = {
				FlexiArea: sstt.onMap.FlexiArea || defaultt,
				
					FlexiAreaPrmStrata: sstt.onMap.FlexiAreaPrmStrata || defaultt,
					
						Well: sstt.onMap.Well || defaultt,
						
							WellPrmStrata: sstt.onMap.WellPrmStrata || defaultt,
							
								WellPrmStrata_MainSpc: sstt.onMap.WellPrmStrata_MainSpc || defaultt, /* Typically Wells main col */
								
									WellPrmStrata_MainSpc_MainSlot: sstt.onMap.WellPrmStrata_MainSpc_MainSlot || defaultt,
									WellPrmStrata_MainSpc_UpN3Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN3Slot || defaultt,
									WellPrmStrata_MainSpc_UpN2Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN2Slot || defaultt,
									WellPrmStrata_MainSpc_UpN1Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN1Slot || defaultt,
									WellPrmStrata_MainSpc_DnN1Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN1Slot || defaultt,
									WellPrmStrata_MainSpc_DnN2Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN2Slot || defaultt,
									WellPrmStrata_MainSpc_DnN3Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN3Slot || defaultt,
									
								WellPrmStrata_LfN2Spc: sstt.onMap.WellPrmStrata_LfN2Spc || defaultt,	/* Typically Wells outer left col */
								
									WellPrmStrata_LfN2Spc_DnN1Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || defaultt,
									WellPrmStrata_LfN2Spc_DnN2Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || defaultt,
									WellPrmStrata_LfN2Spc_DnN3Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN3Slot || defaultt,
									
								WellPrmStrata_LfN1Spc: sstt.onMap.WellPrmStrata_LfN1Spc || defaultt, 	/* Typically Wells inner left col */
								
									WellPrmStrata_LfN1Spc_DnN1Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN1Slot || defaultt,
									WellPrmStrata_LfN1Spc_DnN2Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN2Slot || defaultt,
									WellPrmStrata_LfN1Spc_DnN3Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN3Slot || defaultt,
									
								WellPrmStrata_RtN1Spc: sstt.onMap.WellPrmStrata_RtN1Spc || defaultt,	/* Typically Wells inner right col */
								
									WellPrmStrata_RtN1Spc_DnN1Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN1Slot || defaultt,
									WellPrmStrata_RtN1Spc_DnN2Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN2Slot || defaultt,
									WellPrmStrata_RtN1Spc_DnN3Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN3Slot || defaultt,
									
								WellPrmStrata_RtN2Spc: sstt.onMap.WellPrmStrata_RtN2Spc || defaultt,	/* Typically Wells outer right col */
								
									WellPrmStrata_RtN2Spc_DnN1Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN1Slot || defaultt,
									WellPrmStrata_RtN2Spc_DnN2Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN2Slot || defaultt,
									WellPrmStrata_RtN2Spc_DnN3Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN3Slot || defaultt,
									
							Well_UpN3Slot: sstt.onMap.Well_UpN3Slot || defaultt,
							Well_UpN2Slot: sstt.onMap.Well_UpN2Slot || defaultt,
							Well_UpN1Slot: sstt.onMap.Well_UpN1Slot || defaultt,
							
							Well_DnN1Slot: sstt.onMap.Well_DnN1Slot || defaultt,
							Well_DnN2Slot: sstt.onMap.Well_DnN2Slot || defaultt,
							Well_DnN3Slot: sstt.onMap.Well_DnN3Slot || defaultt,
							
						FlexiAreaPrmStrata_LfN1Spc: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc || defaultt, 	/* Typically (innermost) col left of well */
						
							FlexiAreaPrmStrata_LfN1Spc_DnN1Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN1Slot || defaultt,
							FlexiAreaPrmStrata_LfN1Spc_DnN2Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN2Slot || defaultt,
							FlexiAreaPrmStrata_LfN1Spc_DnN3Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN3Slot || defaultt,
							
						FlexiAreaPrmStrata_RtN1Spc: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc || defaultt,	/* Typically (innermost) col right of well */
						
							FlexiAreaPrmStrata_RtN1Spc_DnN1Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN1Slot || defaultt,
							FlexiAreaPrmStrata_RtN1Spc_DnN2Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN2Slot || defaultt,
							FlexiAreaPrmStrata_RtN1Spc_DnN3Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN3Slot || defaultt,
					
					FlexiArea_UpN3Slot: sstt.onMap.FlexiArea_UpN3Slot || defaultt,
					FlexiArea_UpN2Slot: sstt.onMap.FlexiArea_UpN2Slot || defaultt,
					FlexiArea_UpN1Slot: sstt.onMap.FlexiArea_UpN1Slot || defaultt,
					
					FlexiArea_DnN1Slot: sstt.onMap.FlexiArea_DnN1Slot || defaultt,
					FlexiArea_DnN2Slot: sstt.onMap.FlexiArea_DnN2Slot || defaultt,
					FlexiArea_DnN3Slot: sstt.onMap.FlexiArea_DnN3Slot || defaultt,
						
				TheTopFixedPosArea: sstt.onMap.TheTopFixedPosArea || defaultt,
				
					TheTopFixedPosArea_UpN3Slot: sstt.onMap.TheTopFixedPosArea_UpN3Slot || defaultt,
					TheTopFixedPosArea_UpN2Slot: sstt.onMap.TheTopFixedPosArea_UpN2Slot || defaultt,
					TheTopFixedPosArea_UpN1Slot: sstt.onMap.TheTopFixedPosArea_UpN1Slot || defaultt,
					
					
				TheFooterArea: sstt.onMap.TheFooterArea || defaultt,
				
					TheFooterArea_DnN1Slot: sstt.onMap.TheFooterArea_DnN1Slot || defaultt,
					TheFooterArea_DnN2Slot: sstt.onMap.TheFooterArea_DnN2Slot || defaultt,
					TheFooterArea_DnN3Slot: sstt.onMap.TheFooterArea_DnN3Slot || defaultt
			}
			aa.global.flexiHolderSwitchesMap = sstt.switchesMap;
		}

	

	return aa.MyClass;
	
})();
