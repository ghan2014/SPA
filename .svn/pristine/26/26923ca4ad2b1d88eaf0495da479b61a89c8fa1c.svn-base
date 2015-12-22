/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: AppVcc.js
 * *********************************************************************
 * *********************************************************************
 */

module.exports

/*  NOT NEEDED
function op(){
	var success_message = {saying: ['Success ... YEE HAW!', 'AND - HOOO WEEE!']};
    var myPromise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Math.round(Math.random())){
                resolve(success_message)
            }else{
                reject(['Failure ... DAG NABBIT!'])
            }
        },2000)
    });
    return myPromise 
}

function foo(){
    console.dog('>>>>>>>> FROM FOO - RUNNING')
    var message = "Nothing to say";
    try {
        message = op();
        console.dog('>>>>>>>> FROM FOO - SUCCESS - message: ', message)
        return message;
    } catch(e) {
        console.dog('>>>>>>>> FROM FOO - FAILED - e:', e);
        return e;
    }
}

var theMessage = foo()
theMessage.then(function(mssg) { console.dog(">>>> >>> >> >the inner mssg :", mssg) });
console.dog(">>> >> >  >>> >> >  >>> >> > AppVcc - theMessage from foo():", theMessage);
*/

 
//	INLINE: 
//{
	if ( typeof aaGlobalee === 'undefined' ) {
		aaGlobalee = {};
	}

	aaGlobalee.vccToCommonPath = "../../../Common"
	var OoUtils = require("../../../Common/Utilities/OoUtils.js");
	aaGlobalee.ooUtils = new OoUtils();


	//	Scope for this script.
	var aa = {};

	//	Non-equated dependencies. 
	//{
		require("./AppVcc_style.styl");
		require("../FacebookSdkVcc/FacebookSdkVcc.js");
		require("../FacebookAuthMachineVcc/FacebookAuthMachineVcc.js");
		require("../StateContainerVcc/StateContainerVcc.js");
		require("../OuterHolderVcc/OuterHolderVcc.js");
		require("../FlexiHolderVcc/FlexiHolderVcc.js");
		require("../LoginCorePanelVcc/LoginCorePanelVcc.js");
		require("../LoginPanelVcc/LoginPanelVcc.js");
		require("../SignupCorePanelVcc/SignupCorePanelVcc.js");
		require("../SignupPanelVcc/SignupPanelVcc.js");
		require("../ForgotPasswordPanelVcc/ForgotPasswordPanelVcc.js");
		require("../EmailSharePanelVcc/EmailSharePanelVcc.js");
		require("../EmailReportPanelVcc/EmailReportPanelVcc.js");
		require("../Header4StndUseVcc/Header4StndUseVcc.js");
		
		require("../Button4rTwitterShareVcc/Button4rTwitterShareVcc.js");
		require("../Button4rFacebookShareVcc/Button4rFacebookShareVcc.js");
		require("../Button4rEmailShareVcc/Button4rEmailShareVcc.js");
		require("../Button4rEmailReportVcc/Button4rEmailReportVcc.js");
		require("../FacebookLoginButtonVcc/FacebookLoginButtonVcc.js");
		require("../MastheadPanelVcc/MastheadPanelVcc.js");
		require("../Footer4StndUseVcc/Footer4StndUseVcc.js");
		
		require("../MenuItemsHolderWithTriggerVcc/MenuItemsHolderWithTriggerVcc.js")
		require("../Page4rHomeVcc/Page4rHomeVcc.js");
		require("../Page4rEmailValidationVcc/Page4rEmailValidationVcc.js");
		require("../Page4rPasswordResetVcc/Page4rPasswordResetVcc.js");
		require("../Page4rStationDtlVcc/Page4rStationDtlVcc.js");
		require("../Page4rPlaylistDtlVcc/Page4rPlaylistDtlVcc.js");
		require("../PlayButtonVcc/PlayButtonVcc.js")
		require("../PurposedPage4rStandalonesVcc/PurposedPage4rStandalonesVcc.js");
		
		require("../StationInfoPanelVcc/StationInfoPanelVcc.js");
        require("../StationsPanelVcc/StationsPanelVcc.js");
        
        
        require("../PlaylistInfoPanelVcc/PlaylistInfoPanelVcc.js");
        require("../PlaylistsPanelVcc/PlaylistsPanelVcc.js");
        

        require("../TracksPanelVcc/TracksPanelVcc.js");

		require("../0_gizmos/SlideDownVcc/SlideDownVcc.js");
		require("../0_gizmos/FloatingOptionsMenuVcc/FloatingOptionsMenuVcc.js");
		require("../0_gizmos/MdDialogMngrVcc/MdDialogMngrVcc.js");
		require("../TestItVcc/TestItVcc.js");
		
		require("../../action_directives/ClickToMediatorAdc/ClickToMediatorAdc.js");
		require("../../action_directives/ValidatePasswordAdc/ValidatePasswordAdc.js");
		require("../../action_directives/ValidateConfirmPasswordAdc/ValidateConfirmPasswordAdc.js");	
	//}
	
	//	Equated dependencies.
	//{
		aa.configFnc = require("./AppVccConfigFnc.js"); 
		aa.CtrlClass = require("./AppVccCtrlClass.js");
		aa.RouterPrvdrClass = require("./AppVccRouterPrvdrClass.js"); 
		aa.ToolboxServiceClass = require("../../agents/ToolboxServiceClass.js"); 
		aa.MediatorServiceClass = require("./AppVcc_MediatorServiceExtnClass.js");
		aa.SessionServiceClass = require("../../agents/SessionServiceClass.js");
		aa.NoticesByEmailServiceClass = require("../../agents/NoticesByEmailServiceClass.js");
		aa.MembersServiceClass = require("../../agents/MembersServiceClass.js");
		aa.RemoteDatasServiceClass = require("../../agents/RemoteDatasServiceClass.js");
		aa.StationsServiceClass = require("../../agents/StationsServiceClass.js");
		aa.BannerServiceClass = require("../../agents/BannerServiceClass.js");
		aa.GenresServiceClass = require("../../agents/GenresServiceClass.js");
		aa.UsersServiceClass = require("../../agents/UsersServiceClass.js");
		aa.AccessServiceClass = require("../../agents/AccessServiceClass.js");
		aa.DateTimeFiltersClass = require("../../viewfilters/DateTimeFiltersClass.js");
		aa.MiscFiltersClass = require("../../viewfilters/MiscFiltersClass.js");
		aa.StringFiltersClass = require("../../viewfilters/StringFiltersClass.js");
		///aa.MdDialogMngrClass = require("../../agents/MdDialogMngrClass.js")
		
	//}

	//	Create module:
	//{
		aa.thisModName = 'AppVcc';
		aa.thisMod = aa.AppVcc = angular.module(aa.thisModName, [
			'ngResource', 
			'ui.router',
			'FacebookSdkVcc',
			'FacebookAuthMachineVcc',
			'StateContainerVcc',
			'OuterHolderVcc',
			'FlexiHolderVcc',
			'LoginCorePanelVcc',
			'LoginPanelVcc',
			'SignupCorePanelVcc',
			'SignupPanelVcc',
			'ForgotPasswordPanelVcc',
			'EmailSharePanelVcc',
			'EmailReportPanelVcc',
			'Button4rFacebookShareVcc',
			'Button4rTwitterShareVcc',
			'Button4rEmailShareVcc',
			'Button4rEmailReportVcc',
			'FacebookLoginButtonVcc',
			'MastheadPanelVcc',
			'Header4StndUseVcc',
			'Footer4StndUseVcc',
			'MenuItemsHolderWithTriggerVcc',
			'Page4rHomeVcc',
			'Page4rEmailValidationVcc',
			'Page4rStationDtlVcc',
			'Page4rPlaylistDtlVcc',
			'PlayButtonVcc',
			'PlaylistInfoPanelVcc',
			'PlaylistsPanelVcc',
			'PurposedPage4rStandalonesVcc',
			'SlideDownVcc',
			'StationInfoPanelVcc',
			'StationsPanelVcc',
			'TracksPanelVcc',
			'Page4rPasswordResetVcc',
			
			'FloatingOptionsMenuVcc',
			'MdDialogMngrVcc',
			'TestItVcc',
			
			'ngCookies',
			'ClickToMediatorAdc',
			'ValidatePasswordAdc',
			'ValidateConfirmPasswordAdc',
			'multi-transclude',
			'angularLazyImg',
			'slick',
			'ngMaterial'
		]);
	//}
	
	//	Set module's config:
	//{	
		aa.thisMod.config( [
			'$locationProvider',
			'$resourceProvider',
			'$sceDelegateProvider', 
			'$stateProvider', 
			'$urlRouterProvider',
			'AppVccRouterProvider',
			aa.configFnc
		] );
	//}
	
	//	Set modules (app's) services:
	//{	
		aa.thisMod.service('toolboxService', ['$timeout', aa.ToolboxServiceClass]);
		///aa.thisMod.service('mediatorService', ['$state', '$timeout', 'toolboxService', aa.MediatorServiceClass]);
		
		aa.thisMod.service('sessionService', ['$cookies', '$http', '$q', '$resource', aa.SessionServiceClass]);
		aa.thisMod.service('noticesByEmailService', ['$http', '$resource', aa.NoticesByEmailServiceClass]);
		aa.thisMod.service('membersService', ['$http', '$resource', aa.MembersServiceClass]);
				
		aa.thisMod.service('remoteDatasService', ['$resource', aa.RemoteDatasServiceClass]);
		aa.thisMod.service('stationsService', ['$q', '$resource', 'sessionService', 'toolboxService', aa.StationsServiceClass]);
		aa.thisMod.service('bannerService',['$resource',aa.BannerServiceClass]);
		aa.thisMod.service('genresService', ['$q', '$resource', aa.GenresServiceClass]);
		aa.thisMod.service('usersService', ['$q', '$resource', aa.UsersServiceClass]);
		aa.thisMod.service('accessService', ['sessionService', 'usersService',  aa.AccessServiceClass]);
		
		
		aa.thisMod.factory('mediatorService', ['$cacheFactory',  '$location', '$state', '$stateParams', '$timeout', 'membersService', 'sessionService', 'stationsService', 'toolboxService', 
			function(cacheFactory, locationNg, state, stateParams, timeout, membersService, sessionService, stationsService, toolbox) {
				var mediatorService = new aa.MediatorServiceClass(cacheFactory, locationNg, state, stateParams, timeout, membersService, sessionService, stationsService, toolbox);
				return mediatorService;
			}
		]);
		/*
		aa.thisMod.factory('mdDialogMngr', ['$mdDialog',  
			function(mdDialog, mediatorService) {
				var mdDialogMngr = new aa.MdDialogMngrClass(mdDialog, mediatorService);
				return mdDialogMngr;
			}
		]);
		*/
	//}
	
	//{	Set custom filters:


		//{	Date/Time Filters.
			aa.dateTimeFilters = new aa.DateTimeFiltersClass();
			
			aa.thisMod.filter('millisToHhMmSs',  function() { return aa.dateTimeFilters.millisToHhMmSs } );
		//}

		//{{	String Filters.
			aa.stringFilters = new aa.StringFiltersClass();
			
			aa.thisMod.filter('spacesToDashes',  function() { return aa.stringFilters.spacesToDashes } );
		//}
		
		//{	Misc Filters.
			aa.miscFilters = new aa.MiscFiltersClass();
			
			aa.thisMod.filter('ifThis',  function() { return aa.miscFilters.ifThis } );
		//}
		
		
	//}
		
	//	Set module's (only) controller:
	//{	
		aa.ctrlName = 'AppVccVwCtrl';
		createCtrl(aa.thisMod, aa.ctrlName) 
		function createCtrl(module, ctrlName) {
			var vv = {};
			vv.CtrlClass = aa.CtrlClass
			vv.ctrlInjects = ['$scope', '$location', '$state', '$stateParams', 'mediatorService'];
			vv.CtrlClass.$inject = vv.ctrlInjects;
			module.controller(ctrlName, vv.CtrlClass);
		}	
	//}

	
	//	Set provider of module router:
	//{	
		aa.thisMod.provider( 'AppVccRouter', aa.RouterPrvdrClass );
	//}
	
//}

