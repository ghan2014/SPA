/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: NoticeByEmailServiceClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor(httpNg, resourceNg) {
		var that = this;
		that.httpNg = httpNg;
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
			that.MainResource = that._bgetMainResource(); 
			that.ReportResource = that._bgetReportResource();
		}
		
		p._bgetMainResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.MainResource ) { 
				
				that.MainResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype',
					{
						modelType:'emails',
						modelSubtype:'@modelSubtype'
					},
					{
						shareIt: { 
							stationId: '@stationId',
							playlistId: '@playlistId',
							resourceId: '@resourceId',
							type: "@type",
							recipients: '@recipients',
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelSubtype: 'sharing'}
						}
					}
				);
			}

			return that.MainResource;
		}

		p._bgetReportResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.ReportResource ) { 
				
				that.ReportResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype/:modelSubtype2/:modelSubtype3',
					{
						modelType:'emails',
						modelSubtype:'@modelSubtype',
						modelSubtype2:'@modelSubtype2',
						modelSubtype3:'@modelSubtype3'
					},
					{
						reportIt: { 
							stationId: '@stationId',
							trackId: '@trackId',
							comments: '@comments',
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelSubtype: 'report', modelSubtype2: 'track', modelSubtype3: 'issues'}
						}
					}
				);
			}

			return that.ReportResource;
		}
		
	//}

	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{
		
		p.shareItem = async function(recipients, stationId, playlistId, resourceId) {

			var that = this;
			var vv = {}

			vv.recipients = recipients;
			vv.stationId = stationId;
			vv.playlistId = playlistId || '';
			vv.resourceId = resourceId || '';

			if (resourceId && playlistId && stationId) {
				vv.type = 'PlaylistTrack';
			} 
			else if (playlistId && stationId) {
				vv.type = 'Playlist';
			}
			else if (stationId) {
				vv.type = 'Station';
			}

			vv.data = await that.MainResource.shareIt({type: vv.type, recipients: vv.recipients, stationId: vv.stationId, playlistId: vv.playlistId, resourceId: vv.resourceId});

			return vv.data.$promise
		}


		p.reportItem = async function(stationId, trackId, comments) {

			var that = this;
			var vv = {}

			vv.stationId = stationId;
			vv.trackId = trackId;
			vv.comments = comments;

			vv.data = await that.ReportResource.reportIt({stationId: vv.stationId, trackId: vv.trackId, comments: vv.comments});

			return vv.data.$promise
		}
		

	//}

	return ClassConstructor;
})();

