/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: BannerServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(resourceNg) {
		var that = this;
		that.resourceNg = resourceNg;
		that._setup();
		var breakpoint = 'a';
	}

	var p = ClassConstructor.prototype;

	//	================================================================
	//	PRIVATE METHODS:
	//{
	
		p._setup = function() {
			var that = this;
			that.StationBannerResource = that._bgetStationBannerResource(); 
		}
		
		p._bgetStationBannerResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.StationBannerResource ) { 
				
				that.StationBannerResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/adapis/:modelType/:stationId/banners/active?device=web',
					{
						modelType:'stations'
                                          
					},
					{
						getBanners: { 
							stationId: '@stationId',
							cache: true, 
							method: 'get', 
							isArray: false
						}
					}
				);
			}

			return that.StationBannerResource;
		}
		
	//}

	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{
		
		p.getStationBanners = async function(stationId) {

			var that = this;
			var vv = {}

			vv.stationId = stationId;

			vv.data = await that.StationBannerResource.getBanners({stationId: vv.stationId});

			return vv.data.$promise
		}
		

	//}

	return ClassConstructor;
})();
