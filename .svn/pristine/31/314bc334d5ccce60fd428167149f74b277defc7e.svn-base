/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: BodyContentHolderVccCtrlClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function CtrlClass(scopeNg, stateNg, stateParamsNg) {
		scopeNg.thisc = this;
		var that = this;
		that.scopeNg = scopeNg;
		that.stateNg = stateNg;
		that.stateParamsNg = stateParamsNg;
		console.dog(">>> BodyContentHolderVccCtrlClass - stateParamsNg: ", that.stateNg)
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
					myname: 'BodyContentHolderVcc',
					time: Date.now()
				}
			}
		};
	};

	return CtrlClass;
	
})();



