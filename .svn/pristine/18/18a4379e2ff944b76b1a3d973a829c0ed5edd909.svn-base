/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: GenresServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(qNg, resourceNg) {
		var that = this;
		that.qNg = qNg;
		that.resourceNg = resourceNg;
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
		p._bgetMainResource = _bgetMainResource;
		function _bgetMainResource() {
			var that = this;

			if ( ! that.MainResource ) { 
				that.MainResource = that.resourceNg(
					/// ALT: 'http://pi-node.nanocosm.com:3000/metadata/:modelType/:id',
					'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:modelType/:id', 
					{
						modelType:'genres',
						id:'@id'
					},
					{
						getListings: { 
							cache: true, 
							method: 'get', 
							isArray: true ,
						}
					}
				);
			}

			return that.MainResource;
		}
	//}
	
	//	================================================================
	//	PUBLIC METHODS:
	//{
		
		p.getListings = getListings;
		function getListings() {
			
			var that = this;
			var vv = {}
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getListings();

			return vv.datas
		}
	//}

	return ClassConstructor;
})();

