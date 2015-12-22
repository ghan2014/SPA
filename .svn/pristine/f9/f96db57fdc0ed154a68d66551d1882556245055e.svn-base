/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MdDialogMngr.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {

	var aa = {};

	
	//	Class properties.
	// {
		aa.myName = "MdDialogMngr";
		aa.myClassName = "MdDialogMngrClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;
		
		aa.myConstructor = function (mdDialogNg) {
			console.dog(">>> MdDialogMngr_CtrlClass held as MyClass");
			if ( typeof mdDialogNg === 'object' ) {  /* OO-scaffolder will not pass mdDialogNg */
				var that = this;
				that.mdDialogNg = mdDialogNg;
				///that.mediator = mediator
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
	//	PUBLIC METHODS:
	//{
	//}
	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{
		
		p.bgetExtendedConfig = p._bgetExtendedConfig = function( config, extensions ) {
			/* Used extensions props  (^ = optional) :
			 * 
			 * .template^  (Name or spec of template to use.  Defaults to "stndTemplate" case)
			 * .target^  (The tag object that the modal related to - tweens from and back to.  Defaults to e.target case )
			 * 
			 * Note. Templates may use other extensions.  Check their bget methods for used extension params.
			 */
			 
			var that = this;
			var vv = {};

			//{ Extend for template.
				if ( extensions.template === 'stndTemplate' ) {
					vv.template = that._bgetTemplate4rStnd(extensions)
				}
				else {
					vv.template = that._bgetTemplate4rStnd(extensions)
				}
				config._options.template = vv.template
			//}
			
			//{ Extend for target.
				if ( extensions.target ) {
					config._options.targetEvent.target = $(extensions.target)
				}
			
			return config;
		}
		

	//}
	
	//	================================================================
	//	PRIVATE METHODS:
	//{	
	
		p._setup = function() {
			var that = this;
			console.dog(">>> " + aa.myName + " ---  - _setup. ");
		}
		
		p._bgetTemplate4rStnd = function(params) {
			/* Used params props  (^ = optional) :
			 * .furtherContent^  ( "drct-name" if any to put in the content area in the tmplt)
			 */
			 
			var that = this;
			var vv = {}

			vv.tmplt = '"<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}"><md-dialog-content role="document" tabIndex="-1"> <h2 class="md-title">{{ dialog.title }}</h2><p>{{ dialog.content }}</p> [[-furtherContent-]] </md-dialog-content><div class="md-actions"><md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()" class="md-primary">{{ dialog.cancel }}</md-button><md-button ng-click="dialog.hide()" class="md-primary">{{ dialog.ok }}</md-button></div></md-dialog>"'
			
			if ( params.furtherContent )  {
				if  ( params.furtherContent.search("drct") === 0 ) {
					vv.replacement = "<"+params.furtherContent+"></"+params.furtherContent+">"
					vv.tmplt = vv.tmplt.replace('[[-furtherContent-]]', vv.replacement);
				}
				else {
					vv.replacement = params.furtherContent
					vv.tmplt = vv.tmplt.replace('[[-furtherContent-]]', vv.replacement);
				}
			}
			else {
				vv.replacement = "";
				vv.tmplt = vv.tmplt.replace('[[-furtherContent-]]', vv.replacement);		
			}
			
			return vv.tmplt;
		}
	//}

	return aa.MyClass;
	
})();



