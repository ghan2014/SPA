/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: PurposedPage4rStandalonesVcc_LinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	var aa = {};
	
	//	Class properties.
	// {
		aa.myVcName = "PurposedPage4rStandalonesVcc";
		aa.myClassName = "PurposedPage4rStandalonesVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (scopeNg, elm, attr)  {
			console.dog(">>> PurposedPage4rStandalonesVcc_LinkFncClass held as MyClass");
			if ( typeof scopeNg === 'object' ) {  /* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
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
	//	PUBLIC/PRIVATE METHODS:
	//{

	//}	
	
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function setup() {
			var that = this;
		};
		
		
	//}

	return aa.MyClass;
	
})();
