/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: StringFiltersClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	function ClassConstructor() {
		var that = this;
	}

	var p = ClassConstructor.prototype;


	//	================================================================
	//	PUBLIC /PRIVATE METHODS:
	//{	

		
		//{	Date-Time format filters.
			p.millisToHhMmSs = p._msToHhMmSs = function(duration) {
				var milliseconds = parseInt((duration%1000)/100)
					, seconds = parseInt((duration/1000)%60)
					, minutes = parseInt((duration/(1000*60))%60)
					, hours = parseInt((duration/(1000*60*60))%24)
					, HhMmSs = undefined;

				hours = (hours < 10) ? "0" + hours : hours;
				minutes = (minutes < 10) ? "0" + minutes : minutes;
				seconds = (seconds < 10) ? "0" + seconds : seconds;

				HhMmSs = hours + ":" + minutes + ":" + seconds;
				
				return HhMmSs
			}
		//}
		
		//{	String Filters.
			p.spacesToDashes = p._spacesToDashes = function(stringg) {
				stringg = stringg.replace(/\s+/g, "-");
				return stringg
			}
		//}
		

	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		
	
	//}

	return ClassConstructor;
})();
