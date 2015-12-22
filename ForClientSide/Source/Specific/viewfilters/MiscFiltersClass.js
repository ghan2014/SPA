/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MiscFiltersClass.js
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

		
		// Output if equal method
			p.ifThis = p._msToHhMmSs = function(ifTrueReturnThis, val1, test, val2, elseReturnThis) {
				elseReturnThis = elseReturnThis || ''
				if  (test === 'eq') {
					return val1 === val2 ? ifTrueReturnThis : elseReturnThis
				}
				else if  (test === 'gt') {
					return val1 > val2 ? ifTrueReturnThis : elseReturnThis
				}
				else if  (test === 'gte') {
					return val1 >= val2 ? ifTrueReturnThis : elseReturnThis
				}
				else if  (test === 'lt') {
					return val1 < val2 ? ifTrueReturnThis : elseReturnThis
				}
				else if  (test === 'lte') {
					return val1 <= val2 ? ifTrueReturnThis : elseReturnThis
				}
				else {
					return elseReturnThis
				}
			}

	//}
	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		
	
	//}

	return ClassConstructor;
})();
