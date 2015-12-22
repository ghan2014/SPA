/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: ClickToMediatorAdcLinkFncClass.js
 * *********************************************************************
 * *********************************************************************
 */
module.exports = (function() {
 
	function LinkFncClass(scopeNg, elm, attr, mediatorService) {
		var that = this;
		that.scopeNg = scopeNg;
		that.elm = elm;
		that.attr = attr;
		that.mediatorService = mediatorService;
		that._setup();
		console.dog("boooooo3: ");
	};
		
	var p = LinkFncClass.prototype;
	
	p._setup = function _setup() {
		var that = this;
		that._setClickHandler();
	};
	
	
	p._setClickHandler = function _setClickHandler() {
		var that = this;
		
		that.elm.on( 
			{ 
				'click': function handleClick_fnc(evnt) {
					var vv = {};
					vv.param = angular.fromJson(that.attr.drctClickToMediatorAdc);
					vv.doBubble = vv.param.doBubble;

					if (vv.param.pkgTags) {
						vv.pkgTags = vv.param.pkgTags;
						vv.mode = 'getPkg'
						// Ideally order of tags, when nested, is inner to outer.
						
						
						for (let pkgTagIdfier of vv.pkgTags) {
							
							//{	Check if target tag is - or has an ancestor - idfied by pkgTagIdfier
								vv.pkgTagToUse = $(evnt.target).closest(pkgTagIdfier) 
							//}
							
							//{	IF pkgTagToUse is had, then get its pkg (it should have one, but don't assume)
								if ( vv.pkgTagToUse ) {
									vv.maybePkg = vv.pkgTagToUse.data('pkg')
									if ( vv.maybePkg ) {
										// Got pkg for mediator, so break.
										vv.pkgForMediator = vv.maybePkg
										break
										
									}
								}
							//}
						}				
					}
					else {
						vv.mode = 'sendPkg'
						vv.pkgForMediator = vv.param
					}
					
					
					if ( vv.pkgForMediator ) {
						vv.pkgForMediator.evnt = evnt;
						
						if (vv.doBubble === 'true') {
							//	Do nothing.  Let event propogate.
						}
						else {
							evnt.stopPropagation();
						}
					
					}
					
					
					//	Send package to mediator
					//{	
						console.dog(">>> handleClick_fnc - vv.pkgForMediator: ", vv.pkgForMediator, that);
						that.mediatorService.receiveNotice("", vv.pkgForMediator);
					//}
				}
			}
		)
	};

	return LinkFncClass;
	
})();

