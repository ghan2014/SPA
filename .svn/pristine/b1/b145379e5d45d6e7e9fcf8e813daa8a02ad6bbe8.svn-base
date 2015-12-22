/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: RemoteDatasServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(resourceNg) {
		var that = this;
		that.resourceNg = resourceNg;
	}

	var p = ClassConstructor.prototype;


	//	================================================================
	//	PRIVATE METHODS:
	//{

		p._bgetResourceClass = _bgetResourceClass;
		function _bgetResourceClass(resourceIdfier) {
			var that = this;
			var vv = {};
			vv.resourceIdfier = resourceIdfier || 'live365Default';
			if  (vv.resourceIdfier === 'live365' ||  vv.resourceIdfier === 'live365Default') {

				vv.endpointPattern = 'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:_modelType/:_id';
				
				vv.ResourceClass = that.resourceNg (
					vv.endpointPattern,
					{
						_modelType:'@_modelType',
						_id:'@_id'
					},	
					{ 
						getItemsJSONP: { 
							method: "JSONP", 
							callback: "JSON_CALLBACK",
							isArray: true
							/* 	^ The callback is auto added on to url like this
							 * 	...?callback=JSON_CALLBACK .
							 * 	...Could also do it like this: params{ callback: 'JSON_CALLBACK' } .
							 */
						} 
					} 
				);
			}
			return vv.ResourceClass; 		
		}

	//}

	//	====================================================================
	//	PUBLIC METHODS :
	//{

		p.bgetResourceClass = bgetResourceClass;
		function bgetResourceClass(resourceIdfier) {
			var that = this;
			var ResourceClass = that._bgetResourceClass(resourceIdfier);
			return ResourceClass;
		};
	//}


	return ClassConstructor;
	
})();
