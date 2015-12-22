/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: TestItVccCtrlClass.js
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
		alert("testit setup");
		that.setupDatas();
	};
	
	p.setupDatas = function setupDatas() {
		var that = this;
		that.scopeNg.datas = {
			control: {},
			external: {},
			view: {
				mech: {
					pleaseWaitDisplayStyle: 'none',
					atrbListingsType: that.scopeNg.atrbListingsType
				},
				info: {
					myname: 'TestItVcc',
					listingsTitle: that.scopeNg.atrbListingsType
				}
			}
		};
	};

	return CtrlClass;
	
})();



