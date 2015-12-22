/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MdDialogMngrVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "MdDialogMngrVcc";
		aa.myClassName = "MdDialogMngrVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mdDialogNg, mediator) {
			console.dog(">>> MdDialogMngrVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.mdDialogNg = mdDialogNg;
				
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
	
	
	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS METHODS:
	//{
		p.displayNotice = p._displayNotice = function(msg, type) {
			var that = this
			var vv = {}

			vv.noticeCopy = msg
			vv.noticeType = type // accepted type: success, error


			vv.dialogScopeNg = angular.element( document.querySelector( '.mdDialog4rStnd' ) ).scope()

			vv.dialogScopeNg.noticeCopy = vv.noticeCopy 
			vv.dialogScopeNg.noticeType = vv.noticeType 

			vv.dialogScopeNg .$apply()

			return 'done'
		}	

		p.hideDialog = p._hideDialog = function() {
			var that = this;
			var vv = {};
			
			vv.promise1 = that.mdDialogNg.hide();

			return vv.promise1
		}	

		p.openLoginDialog = function(handoffSpecId, infoCopy) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = 'Login';
			
			vv.paramsOut.customs.target = '.navChoiceLogin'
			vv.paramsOut.customs.myCssNamespace = 'LoginDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rLogin'
			
			if ( infoCopy ) {
				vv.paramsOut.customs.myMainContent = '<p class="InfoCopy">'+infoCopy+'</p><drct-login-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"></drct-login-panel-vcc>';
			}
			else {
				vv.paramsOut.customs.myMainContent = '<drct-login-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"></drct-login-panel-vcc>';	
			}
			
			
			
			vv.paramsOut.customs.myAlt01ButtonText = 'New? SIGN UP NOW.'
			vv.paramsOut.customs.myAlt01ExtraClassNames = 'DialogButtonLink'
			vv.paramsOut.customs.myAlt01NoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "SignupRequestButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '
				+ '					}  ';
				
			vv.paramsOut.cancelButtonText = 'CANCEL'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "LoginCancelButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';

			vv.paramsOut.proceedButtonText = 'LOG IN'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "LoginSubmitButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}

		p.openForgotPasswordDialog = function(handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = 'FORGOT PASSWORD';
			
			vv.paramsOut.customs.target = '.navChoiceSignup'
			vv.paramsOut.customs.myCssNamespace = 'ForgotPasswordDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rForgotPassword'
			vv.paramsOut.customs.myMainContent = '<drct-forgot-password-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"></drct-forgot-password-panel-vcc>';
			
				
			vv.paramsOut.cancelButtonText = 'CANCEL'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "StndDialogCancelButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
			
			vv.paramsOut.proceedButtonText = 'SUBMIT'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "ForgotPasswordSubmitButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '
				+ '					}  ';
	
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openForgotPasswordDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
		
		
		p.openSignupDialog = function(handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = 'Free sign up!';
			
			vv.paramsOut.customs.target = '.navChoiceSignup'
			vv.paramsOut.customs.myCssNamespace = 'SignupDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rSignup'
			vv.paramsOut.customs.myMainContent = '<drct-signup-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"></drct-signup-panel-vcc>';
			
			
			vv.paramsOut.customs.myAlt01ButtonText = 'Already have an account? LOG IN.'
			vv.paramsOut.customs.myAlt01ExtraClassNames = 'DialogButtonLink'
			vv.paramsOut.customs.myAlt01NoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "LoginRequestButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '
				+ '					}  ';
				
			vv.paramsOut.cancelButtonText = 'CANCEL'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "SignupCancelButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
			
			vv.paramsOut.proceedButtonText = 'SIGNUP'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "SignupSubmitButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '
				+ '					}  ';
	
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
		
		
		p.openStndConfirmDialog = function(handoffSpecId, doHandoffFirst, confirmQuestion, startEndTarget, mainContent) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = confirmQuestion;
			
			
			vv.paramsOut.customs.target = startEndTarget;
			vv.paramsOut.customs.myCssNamespace = 'StndConfirmDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rConfirm'
			vv.paramsOut.customs.myMainContent = mainContent || ''
			
			vv.paramsOut.customs.myAlt01ButtonText = ''
			vv.paramsOut.customs.myAlt01NoticeJSON = ''
			
			vv.paramsOut.cancelButtonText = 'NO'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "CancelButtonOfStndConfirmInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'",  '
				+ '						"doHandoffFirst": "'+doHandoffFirst+'",  '
				+ '						"action": "cancel" '
				+ '					}  ';
			
			vv.paramsOut.proceedButtonText = 'YES'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "ProceedButtonOfStndConfirmInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '
				+ '						"handoffSpecId": "'+handoffSpecId+'",  '
				+ '						"doHandoffFirst": "'+doHandoffFirst+'",  '
				+ '						"action": "proceed" '
				+ '					}  ';
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
		
		
		p.openDoNothingNoticeDialog = function(noticeTitle, noticeCopy, proceedButtonText, startEndTarget, mainContent) {
			var that = this;
			var vv = {}

			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = noticeTitle || '';
			
			
			vv.paramsOut.customs.target = startEndTarget;
			vv.paramsOut.customs.myCssNamespace = 'StndConfirmDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rConfirm'
			vv.paramsOut.customs.myMainContent = noticeCopy || ''

			vv.paramsOut.proceedButtonText = proceedButtonText || 'OK'

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - openStndNoticeDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
		



		p.openEmailShareDialog = function(purposing, handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);

			vv.purposingString = JSON.stringify(purposing);
			///console.dog('===> vv.purposingString: ', vv.purposingString, purposing)
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = 'Share by Email';
			
			vv.paramsOut.customs.target = '.navChoiceLogin'
			vv.paramsOut.customs.myCssNamespace = 'EmailShareDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailShare'
			vv.paramsOut.customs.myMainContent = '<drct-email-share-panel-vcc atrb-purposing=\''+vv.purposingString+'\' data-go_dude="truee"></drct-email-share-panel-vcc>';
			

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = 'CANCEL'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "StndDialogCancelButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
			
			vv.paramsOut.proceedButtonText = 'SEND'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "EmailShareSubmitButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}


		p.openEmailReportDialog = function(purposing, handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			//purposing = 'mytest'

			///alert(handoffSpecId);

			vv.purposingString = JSON.stringify(purposing);
			///console.dog('===> vv.purposingString: ', vv.purposingString, purposing)
			
			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = 'Report';
			
			vv.paramsOut.customs.target = '.navChoiceLogin'
			vv.paramsOut.customs.myCssNamespace = 'EmailReportDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport'
			vv.paramsOut.customs.myMainContent = '<drct-email-report-panel-vcc purposing=\''+vv.purposingString+'\' data-go_dude="truee"></drct-email-report-panel-vcc>';
			

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = 'CANCEL'
			vv.paramsOut.customs.myCancelNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "StndDialogCancelButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
			
			vv.paramsOut.proceedButtonText = 'SEND'
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				+ '					"notice": {  '
				+ '						"noticeName": "EmailReportSubmitButtonInDialog_clicked",  '
				+ '						"vc": "MdDialogMngrVcc",  '
				+ '						"context": "",  '	
				+ '						"handoffSpecId": "'+handoffSpecId+'"  '			
				+ '					}  ';
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}



		p.openIOSPlayDialog = function(handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);


			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = '';
			
			vv.paramsOut.customs.target = '.navChoiceLogin'
			vv.paramsOut.customs.myCssNamespace = 'IOSPlayDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport'
			
			vv.paramsOut.customs.myMainContent = 'To play, <a id="OutLinkInDiaglog" href="http://itunes.com/apps/appname" target="_blank" onclick="angular.element( document.querySelector( \'.MdDialogMngrVcc\' ) ).scope().thisc.hideDialog();" title="Link to App Store.">please install our app from the App Store</a>.';
			
			
			///document.getElementById("myBtn").addEventListener("click", displayDate);

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = ''
			vv.paramsOut.customs.myCancelNoticeJSON = ''

			vv.paramsOut.proceedButtonText = ''
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
		
		p.openAndroidPlayDialog = function(handoffSpecId) {
			var that = this;
			var vv = {}
			handoffSpecId = handoffSpecId || ''
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);


			vv.paramsOut = {}
			vv.paramsOut.customs = {}

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = '';
			
			vv.paramsOut.customs.target = '.navChoiceLogin'
			vv.paramsOut.customs.myCssNamespace = 'AndroidPlayDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport'
			
			vv.paramsOut.customs.myMainContent = 'Our apologies.  We are currently working on play for Android.';
			
			
			///document.getElementById("myBtn").addEventListener("click", displayDate);

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = ''
			vv.paramsOut.customs.myCancelNoticeJSON = ''

			vv.paramsOut.proceedButtonText = ''
			vv.paramsOut.customs.myProceedNoticeJSON = ''
				
			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);
			
			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);
			
			return vv.promise1
		}
	
	
	//}
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		//{ TYPICAL
			p._setup = function setup() {
				var that = this;
				///alert(">>> MdDialogMngrVcc - boooooo");
				that._setupStndDatas()
				that._setupSpcfDatas();
			};
			
			
			p._setupStndDatas = function() {
				var that = this;
				that.scopeNg.loc = {};
				that.scopeNg.loc.myVcName = aa.myVcName;				
			};
			
			p._setupSpcfDatas = function() {
				var that = this;
				// STUB.				
			};
		//}



		//--------------------------------------------------------------
		//{ RE DIALOG IN GENERAL.
				
			p._getCoreObj = function(  ) {
				var that = this;
				return that.coreObj
			}
		
			p._bgetExtendedConfig = function( config, extensions ) {
				var that = this;
				var vv = {};
				
						
				//{ Additions to config._options.
					config._options.myCssNamespace = extensions.myCssNamespace;
					config._options.myAlt01ButtonText = extensions.myAlt01ButtonText;	
					config._options.targetEvent.target = $(extensions.target);			
				//}

				//{ Extend template.
					if ( extensions.template === 'stndTemplate' ) {
						vv.template = that._bgetTemplate4rStnd(extensions)
					}
					else {
						vv.template = that._bgetTemplate4rStnd(extensions)
					}
					config._options.template = vv.template
				//}

				
				return config;
			}
			
			p._showDialog = function(config) {
				var that = this;
				var vv = {};
				console.dog(">>> mdDialogNg2: ", that.mdDialogNg);
				vv.promise1 = that.mdDialogNg.show(config);

				return vv.promise1
			}
			


		//}
		
		
		//--------------------------------------------------------------
		//{ RE STANDARD DIALOG SETUP FLOW.
		
			p._setupAndShowStndDialog = function( params ) {

				var that = this;
				var vv = {};
				vv.paramsOut = params

				//{ Bget configuration.
					vv.paramsOut = params
					vv.config = that._bgetConfig4rStnd(vv.paramsOut) 
				//}
				
				//{ Now show the dialog box.
					vv.promise1 = that._showDialog(vv.config);
				//}	
				
				return vv.promise1
			}
		//}		
		
		
		//--------------------------------------------------------------
		//{ RE STANDARD DIALOG HELPERS.
		
		
			p._bgetConfig4rStnd = function(params) {
				
				var that = this;
				var vv = {};
				
				console.dog(">>> dialogMngr: ", that.mdDialogNg );
				  
				// 	Appending dialog to document.body to cover sidenav in docs app
				//	...Note, Chaining functions that define the config.
						vv.config = that.mdDialogNg.confirm()
					  .parent( angular.element(document.body) )
					  .title( params.title  )
					  .content( '' )
					  .ariaLabel( 'Lucky day' )
					  .ok( params.proceedButtonText )
					  ///.cancel( params.cancelButtonText )
					  .cancel( 'X' )
					  .targetEvent( params.eventt );
					  
					  
				console.dog(">>> _setupSpcfDatas - config1: ",vv.config._options);	

				vv.extension4rConfig = {
					template: 'stndTemplate',
					myCssNamespace: params.customs.myCssNamespace,
					target: params.customs.target,
					myAlt01ExtraClassNames: params.customs.myAlt01ExtraClassNames,
					myAlt01ButtonText: params.customs.myAlt01ButtonText,
					myAlt01NoticeJSON: params.customs.myAlt01NoticeJSON,
					myProceedNoticeJSON: params.customs.myProceedNoticeJSON,
					myCancelNoticeJSON: params.customs.myCancelNoticeJSON,
					myMainContent: params.customs.myMainContent
				}
				
				vv.config = that._bgetExtendedConfig( vv.config, vv.extension4rConfig)

				console.dog(">>> _setupSpcfDatas - config2: ",vv.config._options);	
				
				
				return vv.config
				
			}
			
		
			p._bgetTemplate4rStnd = function(extensions) {
				/* Used extensions props for SLOTs  (^ = optional) :
				 * .myMainContent  ( "drct-name" if any to put in the content area in the tmplt)
				 */
				 
				var that = this;
				var vv = {}

				//{ Define template.
					vv.tmplt = ''
						+ ' <md-dialog  '
						+ '     class="{{ dialog.myCssNamespace }}"  '
						+ '		md-theme="{{ dialog.theme }}"  '
						+ '		aria-label="{{ dialog.ariaLabel }}"  '
						+ '	>  '
						+ '     <ng-form class="mdDialogForm" name="mdDialogForm">  '
						+ '			<md-button  '
						+ '				ng-if="dialog.$type == \'confirm\'"  '
						+ '				class="md-secondary"  '
						+ '				[[-SLOT-myCancelAction-]]  '
						+ '			>  '
						+ '				{{ dialog.cancel }}  '
						+ '			</md-button>  '
						+ '		<md-dialog-content  '
						+ '			role="document"  '
						+ '			tabIndex="-1"  '
						+ '		>  '
						+ '			<h2 class="md-title">  '
						+ '				{{ dialog.title }} '
						+ '			</h2>  '
						+ '			<section ng-if="noticeType" class="noticeInDialog noticeType_{{noticeType}}"> '
						+ '				{{ noticeCopy }} '
						+ '			</section>  '
						+ '			[[-SLOT-myMainContent-]]  '
						+ '		</md-dialog-content>  '
						+ '		<div class="md-actions">  '
						+ '			<md-button  '
						+ '				ng-if="dialog.myAlt01ButtonText"  '
						+ '				class="md-alternative [[-SLOT-myAlt01ExtraClassNames-]]"  '
						+ '				[[-SLOT-myAlt01Action-]]  '
						+ '			>  '
						+ '				{{ dialog.myAlt01ButtonText }}  '
						+ '			</md-button>  '
						+ '			<md-button  '
						+ '				ng-if="dialog.ok"  '	
						+ '				class="md-primary"  '
						+ '				ng-disabled="mdDialogForm.$invalid"  '
						+ '				[[-SLOT-myProceedAction-]] '
						+ '			>  '
						+ '				{{ dialog.ok }} '
						+ '			</md-button>  '
						+ '		</div>  '
						+ '     </ng-form>  '
						+ '	</md-dialog>  ';
				//}
			
				
				//{ Apply Main Content.
					if ( extensions.myMainContent )  {
						if  ( extensions.myMainContent.search("drct") === 0 ) {
							vv.replacement = "<"+extensions.myMainContent+"></"+extensions.myMainContent+">"
							vv.tmplt = vv.tmplt.replace('[[-SLOT-myMainContent-]]', vv.replacement);
						}
						else {
							vv.replacement = extensions.myMainContent
							vv.tmplt = vv.tmplt.replace('[[-SLOT-myMainContent-]]', vv.replacement);
						}
					}
					else {
						vv.replacement = "";
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myMainContent-]]', vv.replacement);
					
					}
				//}
				
				
				//{ Apply Alt01 Action. 
					if  ( extensions.myAlt01NoticeJSON ) {
						vv.subtmplt = ''
							+ '				onclick="return false;"  '
							+ "				data-drct_click_to_mediator_adc = '{  "
							+ '					[[-SLOT-noticeJSON-]]  '
							+ "				}'  ";
							
						vv.replacement = extensions.myAlt01NoticeJSON 
						vv.subtmplt = vv.subtmplt.replace('[[-SLOT-noticeJSON-]]', vv.replacement);
						
						vv.replacement = vv.subtmplt
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myAlt01Action-]]', vv.replacement);				
					}
					else {
						vv.replacement = 'ng-click="dialog.hide()"';
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myAlt01Action-]]', vv.replacement);	
					}		

				//}
				
				
				//{ Apply Cancel Action. 
					if  ( extensions.myCancelNoticeJSON ) {
						vv.subtmplt = ''
							+ '				onclick="return false;"  '
							+ "				data-drct_click_to_mediator_adc = '{  "
							+ '					[[-SLOT-noticeJSON-]]  '
							+ "				}'  ";
							
						vv.replacement = extensions.myCancelNoticeJSON 
						vv.subtmplt = vv.subtmplt.replace('[[-SLOT-noticeJSON-]]', vv.replacement);
						vv.replacement = vv.subtmplt
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myCancelAction-]]', vv.replacement);
						
						vv.replacement = extensions.myAlt01ExtraClassNames 
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myAlt01ExtraClassNames-]]', vv.replacement);	
					}
					else {
						vv.replacement = 'ng-click="dialog.abort()"';
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myCancelAction-]]', vv.replacement);	
					}

				//}
				
				
				//{ Apply Proceed (Go) Action. 
					if  ( extensions.myProceedNoticeJSON ) {
						vv.subtmplt = ''
							+ '				onclick="return false;"  '
							+ "				data-drct_click_to_mediator_adc = '{  "
							+ '					[[-SLOT-noticeJSON-]]  '
							+ "				}'  ";
							
						vv.replacement = extensions.myProceedNoticeJSON 
						vv.subtmplt = vv.subtmplt.replace('[[-SLOT-noticeJSON-]]', vv.replacement);
						
						vv.replacement = vv.subtmplt
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myProceedAction-]]', vv.replacement);				
					}
					else {
						vv.replacement = 'ng-click="dialog.hide()"';
						vv.tmplt = vv.tmplt.replace('[[-SLOT-myProceedAction-]]', vv.replacement);	
					}		

				//}

				return vv.tmplt;
			}
		//}
	//}

	return aa.MyClass;
	
})();



