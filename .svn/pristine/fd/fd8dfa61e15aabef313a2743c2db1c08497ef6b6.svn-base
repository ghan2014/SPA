/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ForgotPasswordPanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "ForgotPasswordPanelVcc";
		aa.myClassName = "ForgotPasswordPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, membersService, sessionService) {
			
			console.dog(">>> ForgotPasswordPanelVcc_CtrlClass held as MyClass");
			
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				///that.toolbox = toolbox
				that.membersService = membersService;
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
		
		p.handleForgotPasswordFormSubmitAsync = async function() {

			var that = this;
			var vv = {};
			
			vv.email = that.scopeNg.loc.loginIdfier

			///alert(vv.email)

			//vv.type = that.scopeNg.loc.purposing.type

			console.dog('>>> FROM _handleForgotPasswordFormSubmitAsync - RUNNING:  '+ vv.email +"^")
			console.dog('>>> FROM _handleForgotPasswordFormSubmitAsync - that  ', that)
			
			try {				       
			            
			            vv.shareServiceResponse = await that._postToForgotPasswordService(vv.email) 
			            that.scopeNg.$apply()

			            return {status: "succeeded", messageForDisplay: "Thank you for your submission. You will be receiving an email"}

			}
			catch(e) {
				
				return {status: "failed", messageForDisplay: "Sorry, something went wrong."};
			}
				
		}

	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	

		 p._postToForgotPasswordService =  async function(email) {
		            var that = this;
		            var vv = {}

		            vv.postResponse = await that.membersService.forgotPasswordItem(email)
		            console.dog(">>> ForgotPasswordPanelVcc_CtrlClass._postToForgotPasswordService : ", vv.postResponse);
		            
		            return vv.postResponse    
		}
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> ForgotPasswordPanelVcc - boooooo");
			that._setupStndDatas()
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};
		
		p._setupStndDatas = function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = '';
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> ForgotPasswordPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = function() {
			var that = this;
			that.scopeNg.loc.userEmail = 'webdev+02@live365.com';
			that.scopeNg.loc.password = 'test'
		};
		
		p._getSession = function getStation(id) {	
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};
		
		
		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
		}


		
		
	//}

	return aa.MyClass;
	
})();



