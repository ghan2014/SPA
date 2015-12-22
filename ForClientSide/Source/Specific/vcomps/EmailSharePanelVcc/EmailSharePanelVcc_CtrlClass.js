/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: EmailShareVcc_CtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myVcName = "EmailSharePanelVcc";
		aa.myClassName = "EmailSharePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox, noticesByEmailService) {
			console.dog(">>> EmailShareVcc_CtrlClass held as MyClass");
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

	p.handleEmailShareFormSubmitAsync = async function() {

			var that = this;
			var vv = {};
			
			//vv.EmailSender = that.scopeNg.loc.EmailSender
			//vv.EmailMessage = that.scopeNg.loc.EmailMessage
			vv.stationId = that.scopeNg.loc.purposing.stationId
			vv.playlistId = that.scopeNg.loc.purposing.playlistId
			vv.resourceId = that.scopeNg.loc.purposing.trackUid
			vv.EmailRecipientArray = [that.scopeNg.loc.EmailRecipient]
			//vv.type = that.scopeNg.loc.purposing.type

			console.dog('>>> FROM _handleEmailShareFormSubmitAsync - RUNNING:  '+ vv.EmailSender + " " + vv.EmailRecipient+"^")
			console.dog('>>> FROM _handleEmailShareFormSubmitAsync - that  ', that)
			
			try {				       
			            //that.scopeNg.loc.responseMssgForTmplt = "ok"
			            //alert(that.scopeNg.loc.responseMssgForTmplt);
			            vv.shareServiceResponse = await that._postToEmailShareService(vv.EmailRecipientArray, vv.stationId, vv.playlistId, vv.resourceId) 
			            that.scopeNg.$apply()

			            return {status: "succeeded", messageForDisplay: "Thank you for your submission."}

			}
			catch(e) {
				//that.scopeNg.loc.responseMssgForTmplt = "not ok"
				///console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);
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
			await that._setSyns();
			await that._setupSpcfDatas();
			await that._setScopeWatchers();
			console.dog('>>> EmailShareVcc_CtrlClass._setup - scopeNg ', that.scopeNg);
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
			console.dog(">>> EmailShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
			
			return 'done'
		};
		
		p._setupSpcfDatas = async function() {
			var that = this;
			var vv = {};

			that.scopeNg.loc.EmailSender = '';
			that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.atrbPurposing);

			///vv.voidd = await that._bsetShareData4rStation();
			vv.voidd = await that._bsetShareData();

			return 'done'
		};
		
		p._setSyns = async function() {
			var that = this;
			that.scopeNg.loc.stationSyn = 'school';
			that.scopeNg.loc.playlistSyn = 'project';
			that.scopeNg.loc.trackSyn = 'episode';
			return 'done'
		}

		
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
		
		
		p._bsetShareData =  async function()  {
			var that = this;
			var vv = {}

			vv.purposing = that.scopeNg.loc.purposing;

			vv.delegateMethodName = '_bsetShareData4r'+vv.purposing.itemType;

			///alert(vv.delegateMethodName);
			vv.voidd = await that[vv.delegateMethodName](vv.purposing);


		}
		
	//}	
	
	
	//	================================================================
	//	SPECIFIC PRIVATE METHODS:
	//{	

		 p._postToEmailShareService =  async function(toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny) {
		            var that = this;
		            var vv = {}

		            //console.dog('myCat =>', toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny)
		            vv.postResponse = await that.noticesByEmailService.shareItem(toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny)
		            console.dog(">>> EmailSharePanelVcc_CtrlClass._postToEmailShareService : ", vv.postResponse);
		            
		            return vv.postResponse    
		}



		p._bsetShareData4rStation = async function(purposing) {
			var that = this;
			var vv = {}
			vv.purposing = purposing || that.scopeNg.loc.purposing

			vv.itemInfo = await that.stationsService.getStation(vv.purposing.stationId)

console.dog(">>> EmailShareVcc_CtrlClass._shareStation - itemInfo, stateNg: ", vv.itemInfo, that.stateNg)

			that.scopeNg.loc.method = "feed";
			///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true) 
			that.scopeNg.loc.picture = vv.itemInfo.stationLogoUrl;
			that.scopeNg.loc.nameLabel = that.scopeNg.loc.stationSyn;
			that.scopeNg.loc.name = vv.itemInfo.title;
			that.scopeNg.loc.caption = "Visit our Station.";
			that.scopeNg.loc.description = vv.itemInfo.description
			that.scopeNg.loc.properties = undefined
			that.scopeNg.loc.actions = undefined

console.dog(">>> EmailShareVcc_CtrlClass._shareStation - that: ", that.scopeNg.loc)

		}


		p._bsetShareData4rPlaylist = async function(purposing) {
			
			var that = this;
			var vv = {}
			vv.purposing = purposing || that.scopeNg.loc.purposing

			vv.stationInfo = await that.stationsService.getStation(vv.purposing.stationId)
			vv.itemInfo = await that.stationsService.getPlaylist(vv.purposing.stationId, vv.purposing.playlistId)


console.dog(">>> EmailShareVcc_CtrlClass._sharePlaylist - itemInfo, stateNg: ", vv.itemInfo, that.stateNg)


			that.scopeNg.loc.method = "feed";
			///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true) 
			that.scopeNg.loc.picture = vv.itemInfo.coverArtUrl;
			that.scopeNg.loc.nameLabel = that.scopeNg.loc.playlistSyn;
			that.scopeNg.loc.name = vv.itemInfo.name;
			that.scopeNg.loc.caption = "Listen to our Playlist.";
			that.scopeNg.loc.description = vv.itemInfo.description
			that.scopeNg.loc.properties = undefined
			that.scopeNg.loc.actions = undefined

console.dog(">>> EmailShareVcc_CtrlClass._sharePlaylist - that: ", that.scopeNg.loc)

		}


		p._bsetShareData4rTrack = async function(purposing) {
			var that = this;
			var vv = {}
			vv.purposing = purposing || that.scopeNg.loc.purposing

			vv.stationInfo = await that.stationsService.getStation(vv.purposing.stationId)
			vv.playlistInfo = await that.stationsService.getPlaylist(vv.purposing.stationId, vv.purposing.playlistId)
			vv.itemInfo = await that.stationsService.getTrack(vv.purposing.stationId, vv.purposing.trackId)


console.dog(">>> EmailShareVcc_CtrlClass._shareTrack - itemInfo, stateNg: ", vv.itemInfo, that.stateNg)

			that.scopeNg.loc.method = "feed";
			///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true) 
			that.scopeNg.loc.picture = vv.itemInfo.imageURL;
			that.scopeNg.loc.nameLabel = that.scopeNg.loc.trackSyn;
			that.scopeNg.loc.name = vv.itemInfo.title;
			that.scopeNg.loc.caption = "Listen to our Track.";
			that.scopeNg.loc.description = vv.itemInfo.description
			that.scopeNg.loc.properties = undefined
			that.scopeNg.loc.actions = undefined

console.dog(">>> EmailShareVcc_CtrlClass._shareTrack - that: ", that.scopeNg.loc)


		}
			
	//}

	return aa.MyClass;
	
})();
