/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MastheadPanelVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function CtrlClass(scopeNg) {
		var that = this;
		that.scopeNg = scopeNg;
		that.setup()
	}
		
	var p = CtrlClass.prototype;
	
	p.setup = function setup() {
		var that = this;
		that.setupDatas();
	};
	
	p.setupDatas = function setupDatas() {
		var that = this;
		that.scopeNg.datas = {
			control: {},
			external: {},
			view: {
				mech: {
					pleaseWaitDisplayStyle: 'none'
				},
				info: {
					myname: 'MastheadPanelVcc'
				}
			}
		};
	};

	return CtrlClass;
	
})();



