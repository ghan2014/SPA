/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: EmailReportVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "EmailReportPanelVcc";
		aa.myClassName = "EmailReportPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox, noticesByEmailService) {
			console.dog(">>> EmailReportVcc_CtrlClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService
				that.stationsService = stationsService
				that.toolbox = toolbox
				that.noticesByEmailService = noticesByEmailService
				
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

	p.handleEmailReportFormSubmitAsync = async function() {

			var that = this;
			var vv = {};
			
			//vv.EmailSender = that.scopeNg.loc.EmailSender
			//vv.EmailMessage = that.scopeNg.loc.EmailMessage
			vv.stationId = that.scopeNg.loc.purposing.stationId
			vv.trackId = that.scopeNg.loc.purposing.trackId
			vv.comments = that.scopeNg.loc.inputComment
			
			//vv.type = that.scopeNg.loc.purposing.type

			console.dog('>>> FROM _handleEmailReportFormSubmitAsync - RUNNING:  '+ vv.comments + " " + vv.trackId+"^")
			console.dog('>>> FROM _handleEmailReportFormSubmitAsync - that  ', that)
			
			try {				       
			            
			            vv.shareServiceResponse = await that._postToEmailReportService(vv.stationId, vv.trackId, vv.comments) 
			            that.scopeNg.$apply()

			            return {status: "succeeded", messageForDisplay: "Thank you for your submission"}

			}
			catch(e) {
				
				return {status: "failed", messageForDisplay: "Sorry, something went wrong."};
			}
				
		}

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
			console.dog('>>> EmailReportVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
			that.scopeNg.loc.goDude = that.scopeNg.goDude;
			that.scopeNg.$apply();
			
			return 'done'
		};
		
		p._setupStndDatas = async function() {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {}
			
			//that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			console.dog(">>> EmailReportVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			var vv = {};

			that.scopeNg.loc.EmailSender = '';
			that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.purposing);

			return 'done'
		};

		
		p._setScopeWatchers = async function() {
			var that = this;
			
			return 'done';
			
		};
		
	//}

	//	================================================================
	//	TYPE PUBLIC/PRIVATE METHODS:
	//{
	//}	
		
	//	================================================================
	//	ITYPE PRIVATE METHODS:
	//{	

	//}	

	//	================================================================
	//	SPECIFIC PUBLIC/PRIVATE METHODS:
	//{
		
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	

		 p._postToEmailReportService =  async function(stationId, trackId_ifAny, comments_ifAny) {
		            var that = this;
		            var vv = {}

		            vv.postResponse = await that.noticesByEmailService.reportItem(stationId, trackId_ifAny, comments_ifAny)
		            console.dog(">>> EmailReportPanelVcc_CtrlClass._postToEmailReportService : ", vv.postResponse);
		            
		            return vv.postResponse    
		}

			
	//}

	return aa.MyClass;
	
})();
