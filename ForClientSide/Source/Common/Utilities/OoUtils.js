 /**
 * @module OoUtils
 * # Utils - constructor class
 * Scaffold class for prototypal inheritance or just build a child class
 * # example 
 *		MyClass = ooUtils.scaffoldClass(
 *			myClassName, myConstructor, ParentClass
 *		)
 */
 module.exports = (function() {

 	//GLOBAL SETS from index.html
	aaGlobalee = (typeof aaGlobalee === 'object')  ? aaGlobalee : {};
	 
	function MyClass() {
		var that = this;
	}
		
	var p = MyClass.prototype;
	
	p.mergeObjects = function(targetObj, sourceObj) {
		var vv = {};
		$.extend.apply(null, arguments );
		return targetObj;
	}
	
	p.scaffoldClass = function( refNameChild, Child, Parent ){ 
		var vv = {};
		
			function buildByParent(Parent) {	
				vv.parentObj = new Parent;
				vv.parentConstStr = Parent.toString();

				//deep copy by this way, otherwise shallow copy
				vv.fullChildConstStr = "vv.Child = " + vv.parentConstStr;
				vv.voidd = eval(vv.fullChildConstStr);

				//Normal Inheritance
				vv.Child.prototype =  vv.parentObj;
				vv.Child.prototype.constructor = vv.ChildConst;
				vv.Child.prototype.ParentProto = Parent.prototype;
				
				return vv.Child;
			}

		
		if ( typeof Child === 'undefined') {
			if ( Parent.constructor === Function ) 
			{ 
				Child = buildByParent(Parent);
			} 			
		}
		else if ( typeof Child === 'string') {
			if ( Parent.constructor === Function ) 
			{ 
				vv.childName = Child;
				Child = buildByParent(Parent);
				Child.name = vv.childName;
			} 	
			else 
			{ 
				vv.childName = Child;
				Child = function() {};
				Child.name = vv.childName;
			} 		
		}
		else if ( Child.constructor  ===  Function  ) {
			if ( typeof Parent === 'undefined') {
				// Do Nothing - let Child constructor pass through as present def of Child.			
			}
			else if ( Parent.constructor === Function ) 
			{ 
				vv.parentObj = new Parent;
				//Normal Inheritance
				Child.prototype =  vv.parentObj;
				//Child.prototype =  Object.create(Parent.prototype);
				Child.prototype.constructor = Child;
				Child.prototype.ParentProto = Parent.prototype;
			} 
			else 
			{ 
				//Pure Virtual Inheritance (objet inheritance)
				Child.prototype = Parent;
				Child.prototype.constructor = Child;
				Child.prototype.parentObject = Parent;
			} 
		}

		if (Parent) {
			vv.refNameParent = Parent.prototype.refNameSelf || "parentNameNotDefined";
		}
		else {
			vv.refNameParent = "noParent";
		}
		
		Child.prototype.refNameSelf = refNameChild;
		Child.prototype.refNameParent = vv.refNameParent;
			
		if  ( !aaGlobalee.inheritanceSet ) {
			aaGlobalee.inheritanceSet = {};
		}
		
		if  ( !aaGlobalee.classesSet ) {
			aaGlobalee.classesSet = {};
		}
		
		aaGlobalee.classesSet[refNameChild] = {
			myOwnName: refNameChild,
			myOwnClass: Child,
			myOwnPrototype: Child.prototype,
			myParentName: vv.refNameParent
		}
		if ( Parent ) {
			aaGlobalee.classesSet[refNameChild].myParentClass = Parent,
			aaGlobalee.classesSet[refNameChild].myParentPrototype = Parent.prototype || "none"
		}		
				
		return Child;
	}
    
    return MyClass;
	
})();

