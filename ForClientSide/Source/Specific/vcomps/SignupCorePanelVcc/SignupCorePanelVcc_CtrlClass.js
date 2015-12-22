/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: SignupCorePanelVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "SignupCorePanelVcc";
		aa.myClassName = "SignupCorePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, mediator, sessionService, toolbox, usersService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator
				that.sessionService = sessionService;
				that.usersService = usersService;
				that.toolbox = toolbox
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
	//{

		p.handleSignupFormSubmit = function() {	
			var that = this;
			///alert(that.scopeNg.loc.loginIdfier)
			that._handleSignupFormSubmitAsync(that.scopeNg.loc.loginIdfier, that.scopeNg.loc.password, that.scopeNg.loc.firstName, that.scopeNg.loc.lastName, that.scopeNg.loc.yearOfBirth, that.scopeNg.loc.gender)
		}
		
		p.handleEmailSignupFormSubmitAsync = async function() {
			var that = this;
			var vv = {};

			vv.loginIdfier = that.scopeNg.loc.loginIdfier
			vv.password = that.scopeNg.loc.password
			vv.firstName = that.scopeNg.loc.firstName
			vv.lastName = that.scopeNg.loc.lastName
			vv.yearOfBirth = that.scopeNg.loc.yearOfBirth
			vv.gender = that.scopeNg.loc.gender

			console.dog('>>> FROM _handleSignupFormSubmitAsync - RUNNING:  '+ vv.loginIdfier + " " + vv.password + " " + vv.firstName+ "  " + vv.lastName +  " " + vv.yearOfBirth+ " " + vv.gender+"^")
			try {
				
				//{ 1.  Register user with submitted info: loginIdfier (email address), password, (user's full) name.
					vv.promise1 = that.usersService.registerWithIdfierAsync(vv.loginIdfier, vv.password, vv.firstName, vv.lastName, vv.yearOfBirth, vv.gender)
					vv.result = await vv.promise1;  // Note, result is not utilized.
					
				//}
				//{ 2.  Return info per success or failure.
					if (vv.result.status === 'succeeded')  {

						console.dog('>>> FROM handleEmailSignupFormSubmitAsync - Login succeeded.: ',  vv.result);
						vv.returnn  = {status: "succeeded",   idfier: "su_s1", sessionId: vv.sessionId,  messageForDisplay: "registration succeeded."}
					}
					else if (vv.result.status === 'failed')  {
						vv.returnn = {status: "failed",  idfier: "su_f1",  errorr: vv.result.errorr,  messageForDisplay: "sorry, something went wrong."};

					}
				//}

			} 
			catch(errorr) {
				vv.returnn = {status: "failed",  idfier: "su_f0",  errorr: errorr,  messageForDisplay: "sorry, something went wrong."};
				console.dog(">>> FROM: handleEmailSignupFormSubmitAsync - final error")
			}

			return vv.returnn;
		}
		
		
	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
			///alert(">>> SignupCorePanelVcc - boooooo");
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
			console.dog(">>> SignupCorePanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};
		
		p._setupSpcfDatas = function() {
			var that = this;


			that.scopeNg.loc.birthyears = that._getBirthYearForView();
			
			/* FOR NON TESTING */
			that.scopeNg.loc.firstName = '';
			that.scopeNg.loc.lastName = '';
			that.scopeNg.loc.loginIdfier = '';
			that.scopeNg.loc.password = '';
			/* */
			
			/* FOR TESTING *
			that.scopeNg.loc.firstName = 'Jerry';
			that.scopeNg.loc.lastName = 'Sim';
			that.scopeNg.loc.loginIdfier = 'jsimonian+test_@live365.com';
			that.scopeNg.loc.password = 'Aaaa-111';
			* */
		};
		
		p._getSession = function getStation(id) {	
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};
		
		
		p._setScopeWatchers = function _setScopeWatchers() {
			/* Stub */
		}


		p._handleSignupFormSubmitAsync = async function(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that = this;
			var vv = {};

			console.dog('>>> FROM _handleSignupFormSubmitAsync - RUNNING:  '+ loginIdfier + " " + password + " " + firstName + lastName + " "+yearOfBirth + " " + vv.gender+"^")
			try {
				
				//{ 1.  Register user with submitted info: loginIdfier (email address), password, (user's full) name.
					vv.promise1 = that.usersService.registerWithIdfierAsync(loginIdfier, password, firstName, lastName, yearOfBirth, gender)
					vv.result = await vv.promise1;  // Note, result is not utilized.
				//}
				
				//{ 2.  User should now be registerd, so automatically login user with loginIdfier and password.
					vv.promise1 = that.sessionService.logInToRemoteSessionAsync(loginIdfier, password)
					vv.sessionId = await vv.promise1;  // No need to retain returned result.
					that.scopeNg.loc.remoteSessionId = vv.sessionId
					console.dog('>>> FROM _handleSignupFormSubmitAsync - SUCCESS ', vv.sessionId)
				//}
				
				
				
				//{ 3. Return sessionId (in a wrapping object) to mediator.
					vv.returnn = { sessionId: vv.sessionId };
					return vv.returnn;
				//}
				/// return vv.result; // No Return. End of this async road.
			} 
			catch(e) {
				///console.dog('>>> FROM _handleSignupFormSubmitAsync - FAILED - e:', e);
				return e;
			}
		}
		

		p._getBirthYearForView = function() {

			var that = this;
			var vv = {}

			vv.birthyears = that.toolbox.bsetBirthYear()
			
			console.dog(">>> SignupCorePanelVcc_CtrlClass._getBirthYearForView : ", vv.birthyear);
			
			return vv.birthyears
		}
	//}

	return aa.MyClass;
	
})();



