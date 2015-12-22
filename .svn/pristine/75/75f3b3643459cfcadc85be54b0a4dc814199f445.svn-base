/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ChatPanelVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function CtrlClass(scopeNg, stateNg, stateParamsNg ) {
		scopeNg.thisc = this;
		var that = this;
		that.scopeNg = scopeNg;
		that.stateNg = stateNg;
		that.stateParamsNg = stateParamsNg;
		that._setup();
	}
		
	var p = CtrlClass.prototype;
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
	//}
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
		p._setup = function setup() {
			var that = this;
			that._setupDatas();
		};
		
		p._setupDatas = function setupDatas() {
			var that = this;
			that.mech = {};
			that.scopeNg.datas = {
				control: {},
				external: {},

				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none',
						isOkayToShow: true

					},
					info: {
						myname: 'ChatPanelVcc',
						channelId: '',
						username: '',
						iframeSrc: ""
					}
				}
			};

			that.scopeNg.datas.view.info.iframeSrc  = that._bgetIframeSrc(that.scopeNg.atrbChannelId, that.scopeNg.atrbUserDisplayName);
		};
		
		p._bgetIframeSrc = function bgetIframeSrc(channelId, userDisplayName) {
			var that = this;
			var vv = {};

			vv.newSrcUrl = "Assets/Chatty/Chatty.html?channelId="+channelId+"&userDisplayName="+userDisplayName;

			return vv.newSrcUrl;

		};
	//}


	return CtrlClass;
	
})();
