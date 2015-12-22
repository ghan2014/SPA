/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: TracksPanelVcc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	var aa = {};
	
	//	Class properties.
	// {
		aa.myVcName = "TracksPanelVcc";
		aa.myClassName = "TracksPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, elm, attr)  {
			console.dog(">>> TracksPanelVcc_LinkFncClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				///that._setupOnGo();
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
	//	SETUP METHODS
	//{
		p._setupOnGo = async function() {
			var that = this;
			var vv = {}
			
			that.scopeNg.$watch('goDude', 
				function() {
					if ( that.scopeNg.goDude === 'truee' ) {
						var dc = that._setup();
					}
				}
			);
			return 'done';
		};


		p._setup = async function _setup() {
			var that = this;
			await that._thiscifyMethods()
			that.scopeNg.thisc.thislf = that;
		};
		
		p._thiscifyMethods = async function() {
			/*
			 * Aliasing method into the thisc scope makes them available to ctrl and outside.
			 */
			var that = this;
			that.scopeNg.thisc.zzdecorateLoadedTrackListing = that.decorateLoadedTrackListing;
		}

	//}
	
	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{	
		p.zzdecorateLoadedTrackListing = async function(trackUid) {
			console.dog(">>> highlightPlayingListing  - trackUid: ", trackUid);
			var that = this;
			var vv = {}
			var thatlf = that.scopeNg.thisc.thislf   // Call  that.methods with this scope.

			vv.voidd = that._undecoratePriorLoadedTrackListing.call('thatlf')
		}

	//}
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
		p._undecoratePriorLoadedTrackListing = async function() {
			var that = this;
			var vv = {}
			//  Just fell swoop remove loadedTrackListing class.
			that.elm.find('.listingContent').removeClass('loadedTrackListing')
		}
		
	//}

	return aa.MyClass;
	
})();
