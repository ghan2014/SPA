/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVccRouterPrvdrClass.js  mk002
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
	

	function RouterPrvdrClass() {
		return this;
	};
	//	Prototype its methods.
	//{	
		var p = RouterPrvdrClass.prototype;
		
		p.getRouter = function getRouterFnc(StateProvider, UrlRouterProvider) {	
			//	Inits: 
			//{
				//	Scope for this script.
				var vv = {};
				vv.methods = {};
			//}
			

			//	Define methods.
			//{	
				//{ ON-ENTER Methods: 
					vv.methods.onEnterAddTechParams  = function( stateParamsNg ) {
						/*
						//{ Supplement stateParams with tech named versions of biz named params.
							stateParamsNg.stationId = stateParamsNg.stationId
							stateParamsNg.playlistId = stateParamsNg.playlistId
							stateParamsNg.trackId = stateParamsNg.episodeId
							stateParamsNg.trackUid = stateParamsNg.trackUid
						//}
						*/
						console.dog(">>> vv.methods.onEnterAddTechParams - done - stateParamsNg: ", stateParamsNg)
					}
				//}
					
				vv.methods.setRoutes = function setRoutes_fnc() {
					var myParent = undefined;
					var myName = undefined;
					
					
					// For any unmatched url, redirect to /state1
					UrlRouterProvider.otherwise('/home');
					
					
					//==================================================
					//	ABSTRACT UI STATE DEFINITIONS: 
					//{
					
						//----------------------------------------------
						//	Add: OuterHolderVcc
						//----------------------------------------------
						myName = 'OuterHolderUSAI';	
						myParent = 'NONE';
						var OuterHolderUSAI = {
							name: myName,
							abstract : true,
							views: {
								'HtmlSlot': {
									template: ''
									+ '<drct-facebook-sdk-vcc></drct-facebook-sdk-vcc>'
									+ '<drct-facebook-auth-machine-vcc data-go_dude="truee"></drct-facebook-auth-machine-vcc>'
									+ '<drct-md-dialog-mngr-vcc></drct-md-dialog-mngr-vcc>'
									+ '<drct-outer-holder-vcc></drct-outer-holder-vcc>'
								}
							},
							usedSlots: ['HtmlSlot'],
							holderVcNames: ['OuterHolderVcc'],
							addedCssNames: ['outerHolderCss1', 'outerHolderCss2']
						};
						
						
						//----------------------------------------------
						//	Add: FlexiHolderVcc
						//----------------------------------------------
						myName = 'FlexiHolderUSAI';
						myParent = OuterHolderUSAI;
						var FlexiHolderUSAI = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'OuterHolder_DnN1Slot@OuterHolderUSAI': {
									template: '<drct-flexi-holder-vcc></drct-flexi-holder-vcc>'
								}
							},
							usedSlots: ['OuterHolder_DnN1Slot'],
							holderVcNames: ['FlexiHolderVcc'],
							addedCssNames: ['FlexiStndLayout']
						};
						require("../FlexiHolderVcc/styles/FlexiStndLayout/FlexiStndLayout.styl");				
						///require("../OuterHolderVcc/ui_states/FlexiHolderUSAI/FlexiHolderUSAI_baseStyle.styl");	



						//----------------------------------------------
						myName = 'StndStandAloneTypePgUSAM';
						myParent = FlexiHolderUSAI;
						var StndStandAloneTypePgUSAM = {
							///onEnter: [function(){ alert('Hellow from StndStandAloneTypePgUSAM'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'TheTopFixedPosArea_UpN2Slot@FlexiHolderUSAI': {
									template: ''
										+ '<drct-header-4-stnd-use-vcc></drct-header-4-stnd-use-vcc>'
								},

								'TheFooterArea_DnN2Slot@FlexiHolderUSAI': {
									template: '<drct-footer-4-stnd-use-vcc></drct-footer-4-stnd-use-vcc>'
								}

							},
							usedSlots: [ 
								'TheTopFixedPosArea_UpN2Slot',
								'TheFooterArea_DnN2Slot'
							]
						};
						///require("../FlexiHolderVcc/ui_states/StndChromeUSAM/StndChromeUSAM_baseStyle.styl");	
						
						
						//----------------------------------------------
						myName = 'ViewportWithPlayerUSAM';	
						myParent = FlexiHolderUSAI;	
						var ViewportWithPlayerUSAM = {
							///onEnter: [function(){ alert('Hellow from ViewportWithPlayerUSAM'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'OuterHolder_DnN2Slot@OuterHolderUSAI': {
									template: '<drct-player-panel-vcc></drct-player-panel-vcc>'
								}
							},
							usedSlots: ['OuterHolder_DnN2Slot']
						};		
						///require("../OuterHolderVcc/ui_states/ViewportWithPlayerUSAM/ViewportWithPlayerUSAM_baseStyle.styl");				
												
						//----------------------------------------------
						myName = 'StndChromeUSAM';
						myParent = ViewportWithPlayerUSAM;
						var StndChromeUSAM = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'TheTopFixedPosArea_UpN2Slot@FlexiHolderUSAI': {
									template: ''
										+ '<drct-header-4-stnd-use-vcc></drct-header-4-stnd-use-vcc>'
								},
								'TheTopFixedPosArea_UpN1Slot@FlexiHolderUSAI': {
									template: ''
										+ '<drct-slide-down-vcc></drct-slide-down-vcc>'
								},								
								
								'TheFooterArea_DnN2Slot@FlexiHolderUSAI': {
									template: '<drct-footer-4-stnd-use-vcc></drct-footer-4-stnd-use-vcc>'
								}

							},
							usedSlots: [ 
								'TheTopFixedPosArea_UpN2Slot',
								'TheTopFixedPosArea_UpN1Slot',
								'TheFooterArea_DnN2Slot'
							]
						};
						///require("../FlexiHolderVcc/ui_states/StndChromeUSAM/StndChromeUSAM_baseStyle.styl");	
						
						//----------------------------------------------
						myName = 'HomeTypePgUSAM';
						myParent = StndChromeUSAM;
						var HomeTypePgUSAM = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'FlexiArea_UpN2Slot@FlexiHolderUSAI': {
									template: '<drct-masthead-panel-vcc></drct-masthead-panel-vcc>'
								}
							},
							usedSlots: ['FlexiArea_UpN2Slot'],
							addedCssNames: ['FlexHomeTypePgSpacing']
						};
						///require("../FlexiHolderVcc/styles/FlexHomeTypePgSpacing/FlexHomeTypePgSpacing.styl");

						//----------------------------------------------
						myName = 'StndInsideTypePgUSAM';
						myParent = StndChromeUSAM;
						var StndInsideTypePgUSAM = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								/*
								'FlexiArea_UpN1Slot@FlexiHolderUSAI': {
									template: '<drct-hierarchy-nav-strip-vcc></drct-hierarchy-nav-strip-vcc>'
								},
								*/
							},
							usedSlots: [ 
								/*'FlexiArea_UpN1Slot'*/
							],
							addedCssNames: [/*'FlexInsidePgSpacing'*/]
						};
						///require("../FlexiHolderVcc/styles/FlexInsidePgSpacing/FlexInsidePgSpacing.styl");
						
						//----------------------------------------------
						myName = 'StndDetailTypePgUSAM';
						myParent = StndInsideTypePgUSAM;
						var StndDetailTypePgUSAM = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
							},
							usedSlots: [
							]		
						};
												
						//----------------------------------------------
						myName = 'StndDetailTypePgFlexiTestUSAM';
						myParent = StndInsideTypePgUSAM;
						var StndDetailTypePgFlexiTestUSAM = {
							///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
							parent: myParent,
							name: myName,
							abstract : true,
							views: {
								'WellPrmStrata_MainSpc_UpN2Slot@FlexiHolderUSAI': {
									template: '>> StndInside TypePgUSAM - WellPrmStrata_ MainSpc_ UpN2Slot <<'
								},
								'WellPrmStrata_MainSpc_UpN1Slot@FlexiHolderUSAI': {
									template: '>> StndInside TypePgUSAM - WellPrmStrata_ MainSpc_ UpN1Slot <<'
								},
								'FlexiArea_UpN1Slot@FlexiHolderUSAI': {
									template: '<drct-hierarchy-nav-strip-vcc></drct-hierarchy-nav-strip-vcc>'
								},
								'Well_UpN1Slot@FlexiHolderUSAI': {
									template: '>>> Well_UpN1Slot (P4sdft) <<<'
								},
								'FlexiAreaPrmStrata_LfN1Spc_DnN1Slot@FlexiHolderUSAI': {
									template: '>>> FlexiArea PrmStrata_ LfN1Spc_ DnN1Slot (P4sdft) <<<'
								},
								'FlexiAreaPrmStrata_RtN1Spc_DnN1Slot@FlexiHolderUSAI': {
									template: '>>> FlexiArea<br>PrmStrata_<br>RtN1Spc_<br>DnN1Slo<br>(P4sdft) <<<'
								},
								'WellPrmStrata_LfN1Spc_DnN1Slot@FlexiHolderUSAI': {
									template: '>>>WellPrm Strata_ LfN1Spc_ DnN1Slot (P4sdft) <<<'
								},
								'WellPrmStrata_RtN1Spc_DnN1Slot@FlexiHolderUSAI': {
									template: '>>>WellPrm Strata_RtN1Spc_ DnN1Slot (P4sdft) <<<'
								}
							},
							usedSlots: [
								'WellPrmStrata_MainSpc_UpN2Slot', 
								'WellPrmStrata_MainSpc_UpN1Slot',
								'Well_UpN1Slot',
								'FlexiAreaPrmStrata_LfN1Spc_DnN1Slot', 
								'FlexiAreaPrmStrata_RtN1Spc_DnN1Slot', 
								'WellPrmStrata_LfN1Spc_DnN1Slot',
								'WellPrmStrata_RtN1Spc_DnN1Slot'
							]
						};
					//} END: ABSTRACT UI STATE DEFINITIONS
					
					
					//==================================================
					//	CONCRETE UI STATE DEFINITIONS:
					//{
						//----------------------------------------------
						myName = 'HomeTypePgUSAM_emptyUSC';
						myParent = HomeTypePgUSAM;
						var HomeTypePgUSAM_emptyUSC = {
							///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
							parent: myParent,
							name: myName,
							url: '/HomeTypePgUSAM_emptyUSC',
							uscPageTitle: "",
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: ''
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: ''
						};
		
						
						//----------------------------------------------
						myName = 'Page4rHomeUSC';
						myParent = HomeTypePgUSAM;
						var Page4rHomeUSC = {
							///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
							parent: myParent,
							name: myName,
							uscPageTitle: "Home Page",
							url: '/home{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-home-vcc></drct-page-4r-home-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4HomeVcc'

						};
						
										
						//----------Page for Password Reset------------------------------------
						myName = 'Page4rPasswordResetUSC';
						myParent = StndStandAloneTypePgUSAM;
						var Page4rPasswordResetUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Password Reset",
							url: '/passwordreset?vcode',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-password-reset-vcc></drct-page-4r-password-reset-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rPasswordResetVcc'

						};
						
						
						//----------STATE for Email Validation ------------------------------------
						myName = 'Page4rEmailValidationUSC';
						myParent = StndStandAloneTypePgUSAM;
						var Page4rEmailValidationUSC = {
							///onEnter: [function(){ alert("yada") }],
							parent: myParent,
							name: myName,
							uscPageTitle: "Waystation Page for Email Address Validation",
							url: '/emailvalidation?vcode',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-email-validation-vcc></drct-page-4r-email-validation-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rEmailValidationVcc'
						};
						
		

						//----------------------------------------------
						myName = 'TOCPgUSC';
						myParent = StndStandAloneTypePgUSAM;
						var TOCPgUSC = {
							///onEnter: [function(){ alert('Hellow from TOCPgUSC'); }],
							parent: myParent,
							name: myName,
							uscPageTitle: "Terms and Conditions",
							url: '/TermsAndConditions{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-purposed-page-4r-standalones-vcc purposing=\'{"type":"TOC"}\'></drct-purposed-page-4r-standalones-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'standAlonePageVariantsVcc'

						};
										
						
						//----------------------------------------------
						myName = 'StndDetailTypePgUSAM_emptyUSC';
						myParent = HomeTypePgUSAM;
						var StndDetailTypePgUSAM_emptyUSC = {
							///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
							parent: myParent,
							name: myName,
							url: '/StndDetailTypePgUSAM_emptyUSC{zyEndslash:[\/]*}',
							uscPageTitle: "",
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: ''
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: ''
						};
						
						//----------------------------------------------
						myName = 'Page4rStationDtlUSC';						
						myParent = StndDetailTypePgUSAM;
						var Page4rStationDtlUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Station Detail",
							url: '/station/{stationName:[^\/]*}/{stationId:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rStationDtlVcc'
						};
						
						//----------------------------------------------
						myName = 'Page4rStationDtlShortUrlUSC';						
						myParent = StndDetailTypePgUSAM;
						var Page4rStationDtlShortUrlUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Station Detail",
							url: '/station/{stationId:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rStationDtlVcc'
						};
						
						//----------------------------------------------
						myName = 'Page4rStationDtlFlexiTestUSC';						
						myParent = StndDetailTypePgFlexiTestUSAM;
						var Page4rStationDtlFlexiTestUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Station Detail Flexi",
							url: '/stationflexi{slash1:[/]?}{stationName:[^\/]*}{slash2:[/]?}{stationId:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4-station-dtl-vcc></drct-page-4-station-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4StationDtlVcc'
						};
						
						//----------------------------------------------
						myName = 'Page4rPlaylistDtlUSC';						
						myParent = StndDetailTypePgUSAM;
						var Page4rPlaylistDtlUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Project Detail",
							url: '/station/{stationName:[^\/]*}/{stationId:[^\/]*}/playlist/{playlistName:[^\/]*}/{playlistId:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rPlaylistDtlVcc',
							isAuthRequired: true,
							logoutGotoState: 'Page4rHomeUSC'
						};
						
						//----------------------------------------------
						myName = 'Page4rPlaylistDtlShortUrlUSC';						
						myParent = StndDetailTypePgUSAM;
						var Page4rPlaylistDtlShortUrlUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Project Detail",
							url: '/station/{stationId:[^\/]*}/playlist/{playlistId:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rPlaylistDtlVcc',
							isAuthRequired: true,
							logoutGotoState: 'Page4rHomeUSC'
						};
						
						
						
						//----------------------------------------------
						myName = 'Page4rPlaylistDtlForTrackUSC';						
						myParent = StndDetailTypePgUSAM;
						var Page4rPlaylistDtlForTrackUSC = {
							parent: myParent,
							name: myName,
							uscPageTitle: "Project Detail for Track",
							url: '/station/{stationId:[^\/]*}/playlist/{playlistId:[^\/]*}/track/{trackUid:[^\/]*}{zyEndslash:[\/]*}',
							views: {
								'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
									template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
								}
							},
							usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
							pageVcc: 'Page4rPlaylistDtlVcc',
							isAuthRequired: true,
							logoutGotoState: 'Page4rHomeUSC'
						};
						
						
						//{ WITH BIZ SYNONYMS:
						
						//----------------------------------------------
							myName = 'Page4rSchoolDtlUSC';						
							myParent = StndDetailTypePgUSAM;
							var Page4rSchoolDtlUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "School Detail",
								url: '/school/{stationName:[^\/]*}/{stationId:[^\/]+}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rStationDtlVcc'
							};
							
							//----------------------------------------------
							myName = 'Page4rSchoolDtlShortUrlUSC';						
							myParent = StndDetailTypePgUSAM;
							var Page4rSchoolDtlShortUrlUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "School Detail",
								url: '/school/{stationId:[^\/]*}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rStationDtlVcc'
							};
							
							//----------------------------------------------
							myName = 'Page4rSchoolDtlFlexiTestUSC';						
							myParent = StndDetailTypePgFlexiTestUSAM;
							var Page4rSchoolDtlFlexiTestUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "School Detail Flexi",
								url: '/schoolflexi{slash1:[/]?}{stationName:[^\/]*}{slash2:[/]?}{stationId:[^\/]*}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4-station-dtl-vcc></drct-page-4-station-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rStationDtlVcc'
							};
							
							//----------------------------------------------
							myName = 'Page4rProjectDtlUSC';						
							myParent = StndDetailTypePgUSAM;
							var Page4rProjectDtlUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "Project Detail",
								url: '/school/{stationName:[^\/]*}/{stationId:[^\/]*}/project/{playlistName:[^\/]*}/{playlistId:[^\/]*}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rPlaylistDtlVcc',
								isAuthRequired: true,
								logoutGotoState: 'Page4rHomeUSC'
							};
							
							//----------------------------------------------
							myName = 'Page4rProjectDtlShortUrlUSC';						
							myParent = StndDetailTypePgUSAM;
							var Page4rProjectDtlShortUrlUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "Project Detail",
								url: '/school/{stationId:[^\/]*}/project/{playlistId:[^\/]*}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rPlaylistDtlVcc',
								isAuthRequired: true,
								logoutGotoState: 'Page4rHomeUSC'
							};
							
							
							
							//----------------------------------------------
							myName = 'Page4rProjectDtlForEpisodeUSC';						
							myParent = StndDetailTypePgUSAM;
							var Page4rProjectDtlForEpisodeUSC = {
								parent: myParent,
								name: myName,
								uscPageTitle: "Project Detail for Episode",
								url: '/school/{stationId:[^\/]*}/project/{playlistId:[^\/]*}/episode/{trackUid:[^\/]*}{zyEndslash:[\/]*}',
								views: {
									'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
										template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
									}
								},
								usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
								pageVcc: 'Page4rPlaylistDtlVcc',
								isAuthRequired: true,
								logoutGotoState: 'Page4rHomeUSC'
							};
						//}
					//} END: CONCRETE UI STATE DEFINITIONS
					
					

									


					//==================================================
					//	APPLY STATE DEFINITIONS (with nesting shown):
					//{
					StateProvider.state(OuterHolderUSAI);
						StateProvider.state(FlexiHolderUSAI);
							StateProvider.state(StndStandAloneTypePgUSAM);
								StateProvider.state(Page4rPasswordResetUSC);
								StateProvider.state(Page4rEmailValidationUSC);
								StateProvider.state(TOCPgUSC);
							StateProvider.state(ViewportWithPlayerUSAM);
								StateProvider.state(StndChromeUSAM);
									StateProvider.state(HomeTypePgUSAM);
										StateProvider.state(HomeTypePgUSAM_emptyUSC);
										StateProvider.state(Page4rHomeUSC);
									StateProvider.state(StndInsideTypePgUSAM);
										StateProvider.state(StndDetailTypePgUSAM);
											StateProvider.state(StndDetailTypePgUSAM_emptyUSC);
											StateProvider.state(Page4rStationDtlUSC);
											StateProvider.state(Page4rStationDtlShortUrlUSC);
											StateProvider.state(Page4rPlaylistDtlUSC);
											StateProvider.state(Page4rPlaylistDtlShortUrlUSC);
											StateProvider.state(Page4rPlaylistDtlForTrackUSC);
											
											StateProvider.state(Page4rSchoolDtlUSC);
											StateProvider.state(Page4rSchoolDtlShortUrlUSC);
											StateProvider.state(Page4rProjectDtlUSC);
											StateProvider.state(Page4rProjectDtlShortUrlUSC);
											StateProvider.state(Page4rProjectDtlForEpisodeUSC);
											
										StateProvider.state(StndDetailTypePgFlexiTestUSAM);
											StateProvider.state(Page4rStationDtlFlexiTestUSC);
											
											
					//} END: APPLY STATE DEFINITIONS
				};
				
/*
 					StateProvider.state(OuterHolderUSAI);
						StateProvider.state(FlexiViewUSAI);
						StateProvider.state(FlexiViewAndPlayerUSAM);
							StateProvider.state(StndChromeUSAM);
								StateProvider.state(HomeTypePgUSAM);
									StateProvider.state(Page4rHomeUSC);
								StateProvider.state(StndInsideTypePgUSAM);
									StateProvider.state(StndDetailTypePgUSAM);
										StateProvider.state(Page4rStationDtlUSC);
														
 
 
*/
				
			//}
			
			return vv.methods;
		};
			
		p.$get = ['mediatorService', function getFnc(mediatorService) {alert(mediatorService); this.mediatorService = mediatorService}];  // Not needed for usage, but needed by Angular.
	//}

	return RouterPrvdrClass;
})();

