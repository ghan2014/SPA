/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//	INLINE:
	//{
	"use strict";

	if (typeof aaGlobalee === "undefined") {
		aaGlobalee = {};
	}

	var aa = {};

	//	Non-equated dependencies.
	//{
	__webpack_require__(1);
	//}

	//	Equated dependencies.
	//{
	aaGlobalee.PgMediatorClass = __webpack_require__(303);
	//}

	//}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	module.exports;

	/*  NOT NEEDED
	function op(){
		var success_message = {saying: ['Success ... YEE HAW!', 'AND - HOOO WEEE!']};
	    var myPromise = new Promise(function(resolve,reject){
	        setTimeout(function(){
	            if(Math.round(Math.random())){
	                resolve(success_message)
	            }else{
	                reject(['Failure ... DAG NABBIT!'])
	            }
	        },2000)
	    });
	    return myPromise 
	}

	function foo(){
	    console.dog('>>>>>>>> FROM FOO - RUNNING')
	    var message = "Nothing to say";
	    try {
	        message = op();
	        console.dog('>>>>>>>> FROM FOO - SUCCESS - message: ', message)
	        return message;
	    } catch(e) {
	        console.dog('>>>>>>>> FROM FOO - FAILED - e:', e);
	        return e;
	    }
	}

	var theMessage = foo()
	theMessage.then(function(mssg) { console.dog(">>>> >>> >> >the inner mssg :", mssg) });
	console.dog(">>> >> >  >>> >> >  >>> >> > AppVcc - theMessage from foo():", theMessage);
	*/

	//	INLINE:
	//{
	if (typeof aaGlobalee === "undefined") {
		aaGlobalee = {};
	}

	aaGlobalee.vccToCommonPath = "../../../Common";
	var OoUtils = __webpack_require__(2);
	aaGlobalee.ooUtils = new OoUtils();

	//	Scope for this script.
	var aa = {};

	//	Non-equated dependencies.
	//{
	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(11);
	__webpack_require__(59);
	__webpack_require__(63);
	__webpack_require__(75);
	__webpack_require__(81);
	__webpack_require__(87);
	__webpack_require__(93);
	__webpack_require__(99);
	__webpack_require__(105);
	__webpack_require__(111);
	__webpack_require__(117);
	__webpack_require__(123);

	__webpack_require__(129);
	__webpack_require__(135);
	__webpack_require__(141);
	__webpack_require__(147);
	__webpack_require__(153);
	__webpack_require__(159);
	__webpack_require__(165);

	__webpack_require__(171);
	__webpack_require__(177);
	__webpack_require__(183);
	__webpack_require__(189);
	__webpack_require__(195);
	__webpack_require__(201);
	__webpack_require__(207);
	__webpack_require__(213);

	__webpack_require__(219);
	__webpack_require__(225);

	__webpack_require__(231);
	__webpack_require__(237);

	__webpack_require__(243);

	__webpack_require__(249);
	__webpack_require__(255);
	__webpack_require__(261);
	__webpack_require__(267);

	__webpack_require__(273);
	__webpack_require__(278);
	__webpack_require__(280);
	//}

	//	Equated dependencies.
	//{
	aa.configFnc = __webpack_require__(282);
	aa.CtrlClass = __webpack_require__(283);
	aa.RouterPrvdrClass = __webpack_require__(284);
	aa.ToolboxServiceClass = __webpack_require__(287);
	aa.MediatorServiceClass = __webpack_require__(288);
	aa.SessionServiceClass = __webpack_require__(291);
	aa.NoticesByEmailServiceClass = __webpack_require__(292);
	aa.MembersServiceClass = __webpack_require__(293);
	aa.RemoteDatasServiceClass = __webpack_require__(294);
	aa.StationsServiceClass = __webpack_require__(295);
	aa.BannerServiceClass = __webpack_require__(296);
	aa.GenresServiceClass = __webpack_require__(297);
	aa.UsersServiceClass = __webpack_require__(298);
	aa.AccessServiceClass = __webpack_require__(299);
	aa.DateTimeFiltersClass = __webpack_require__(300);
	aa.MiscFiltersClass = __webpack_require__(301);
	aa.StringFiltersClass = __webpack_require__(302);
	///aa.MdDialogMngrClass = require("../../agents/MdDialogMngrClass.js")

	//}

	//	Create module:
	//{
	aa.thisModName = "AppVcc";
	aa.thisMod = aa.AppVcc = angular.module(aa.thisModName, ["ngResource", "ui.router", "FacebookSdkVcc", "FacebookAuthMachineVcc", "StateContainerVcc", "OuterHolderVcc", "FlexiHolderVcc", "LoginCorePanelVcc", "LoginPanelVcc", "SignupCorePanelVcc", "SignupPanelVcc", "ForgotPasswordPanelVcc", "EmailSharePanelVcc", "EmailReportPanelVcc", "Button4rFacebookShareVcc", "Button4rTwitterShareVcc", "Button4rEmailShareVcc", "Button4rEmailReportVcc", "FacebookLoginButtonVcc", "MastheadPanelVcc", "Header4StndUseVcc", "Footer4StndUseVcc", "MenuItemsHolderWithTriggerVcc", "Page4rHomeVcc", "Page4rEmailValidationVcc", "Page4rStationDtlVcc", "Page4rPlaylistDtlVcc", "PlayButtonVcc", "PlaylistInfoPanelVcc", "PlaylistsPanelVcc", "PurposedPage4rStandalonesVcc", "SlideDownVcc", "StationInfoPanelVcc", "StationsPanelVcc", "TracksPanelVcc", "Page4rPasswordResetVcc", "FloatingOptionsMenuVcc", "MdDialogMngrVcc", "TestItVcc", "ngCookies", "ClickToMediatorAdc", "ValidatePasswordAdc", "ValidateConfirmPasswordAdc", "multi-transclude", "angularLazyImg", "slick", "ngMaterial"]);
	//}

	//	Set module's config:
	//{	
	aa.thisMod.config(["$locationProvider", "$resourceProvider", "$sceDelegateProvider", "$stateProvider", "$urlRouterProvider", "AppVccRouterProvider", aa.configFnc]);
	//}

	//	Set modules (app's) services:
	//{	
	aa.thisMod.service("toolboxService", ["$timeout", aa.ToolboxServiceClass]);
	///aa.thisMod.service('mediatorService', ['$state', '$timeout', 'toolboxService', aa.MediatorServiceClass]);

	aa.thisMod.service("sessionService", ["$cookies", "$http", "$q", "$resource", aa.SessionServiceClass]);
	aa.thisMod.service("noticesByEmailService", ["$http", "$resource", aa.NoticesByEmailServiceClass]);
	aa.thisMod.service("membersService", ["$http", "$resource", aa.MembersServiceClass]);

	aa.thisMod.service("remoteDatasService", ["$resource", aa.RemoteDatasServiceClass]);
	aa.thisMod.service("stationsService", ["$q", "$resource", "sessionService", "toolboxService", aa.StationsServiceClass]);
	aa.thisMod.service("bannerService", ["$resource", aa.BannerServiceClass]);
	aa.thisMod.service("genresService", ["$q", "$resource", aa.GenresServiceClass]);
	aa.thisMod.service("usersService", ["$q", "$resource", aa.UsersServiceClass]);
	aa.thisMod.service("accessService", ["sessionService", "usersService", aa.AccessServiceClass]);

	aa.thisMod.factory("mediatorService", ["$cacheFactory", "$location", "$state", "$stateParams", "$timeout", "membersService", "sessionService", "stationsService", "toolboxService", function (cacheFactory, locationNg, state, stateParams, timeout, membersService, sessionService, stationsService, toolbox) {
		var mediatorService = new aa.MediatorServiceClass(cacheFactory, locationNg, state, stateParams, timeout, membersService, sessionService, stationsService, toolbox);
		return mediatorService;
	}]);
	/*
	aa.thisMod.factory('mdDialogMngr', ['$mdDialog',  
		function(mdDialog, mediatorService) {
			var mdDialogMngr = new aa.MdDialogMngrClass(mdDialog, mediatorService);
			return mdDialogMngr;
		}
	]);
	*/
	//}

	//{	Set custom filters:

	//{	Date/Time Filters.
	aa.dateTimeFilters = new aa.DateTimeFiltersClass();

	aa.thisMod.filter("millisToHhMmSs", function () {
		return aa.dateTimeFilters.millisToHhMmSs;
	});
	//}

	//{{	String Filters.
	aa.stringFilters = new aa.StringFiltersClass();

	aa.thisMod.filter("spacesToDashes", function () {
		return aa.stringFilters.spacesToDashes;
	});
	//}

	//{	Misc Filters.
	aa.miscFilters = new aa.MiscFiltersClass();

	aa.thisMod.filter("ifThis", function () {
		return aa.miscFilters.ifThis;
	});
	//}

	//}

	//	Set module's (only) controller:
	//{	
	aa.ctrlName = "AppVccVwCtrl";
	createCtrl(aa.thisMod, aa.ctrlName);
	function createCtrl(module, ctrlName) {
		var vv = {};
		vv.CtrlClass = aa.CtrlClass;
		vv.ctrlInjects = ["$scope", "$location", "$state", "$stateParams", "mediatorService"];
		vv.CtrlClass.$inject = vv.ctrlInjects;
		module.controller(ctrlName, vv.CtrlClass);
	}
	//}

	//	Set provider of module router:
	//{	
	aa.thisMod.provider("AppVccRouter", aa.RouterPrvdrClass);
	//}

	//}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: OoUtils.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function MyClass() {
			var that = this;
		}

		var p = MyClass.prototype;

		p.mergeObjects = function (targetObj, sourceObj) {
			var vv = {};
			$.extend.apply(null, arguments);
			return targetObj;
		};

		p.scaffoldClass = function (refNameChild, Child, Parent) {
			console.dog(">>> Inherit");
			var vv = {};

			//	============================================================
			//{
			function buildWithoutChild(Parent) {
				vv.parentObj = new Parent();
				vv.parentConstStr = Parent.toString();

				vv.fullChildConstStr = "vv.Child = " + vv.parentConstStr;
				vv.voidd = eval(vv.fullChildConstStr);

				//Normal Inheritance
				vv.Child.prototype = vv.parentObj;
				vv.Child.prototype.constructor = vv.ChildConst;
				vv.Child.prototype.ParentProto = Parent.prototype;

				return vv.Child;
			}

			if (typeof Child === "undefined") {
				console.dog(">>> Inherit - Child undefined case");
				if (Parent.constructor === Function) {
					Child = buildWithoutChild(Parent);
					var lineForBreakpoint = "yada";
				}
			} else if (typeof Child === "string") {
				console.dog(">>> Inherit - Name for Child passed.");
				if (Parent.constructor === Function) {
					vv.childName = Child;
					Child = buildWithoutChild(Parent);
					Child.name = vv.childName;
					var lineForBreakpoint = "yada";
				} else {
					vv.childName = Child;
					Child = function () {};
					Child.name = vv.childName;
					var lineForBreakpoint = "yada";
				}
			} else if (Child.constructor === Function) {
				console.dog(">>> Inherit - Child passed as Function.");
				if (typeof Parent === "undefined") {
					console.dog(">>> No Parent Case");
					// Do Nothing - let Child constructor pass through as present def of Child.			
				} else if (Parent.constructor === Function) {
					vv.parentObj = new Parent();
					//Normal Inheritance
					Child.prototype = vv.parentObj;
					Child.prototype.constructor = Child;
					Child.prototype.ParentProto = Parent.prototype;
					var lineForBreakpoint = "yada";
				} else {
					//Pure Virtual Inheritance
					Child.prototype = Parent;
					Child.prototype.constructor = Child;
					Child.prototype.parentObjlit = Parent;
					var lineForBreakpoint = "yada";
				}
			}

			if (Parent) {
				vv.refNameParent = Parent.prototype.refNameSelf || "parentNameNotDefined";
			} else {
				vv.refNameParent = "noParent";
			}

			Child.prototype.refNameSelf = refNameChild;
			Child.prototype.refNameParent = vv.refNameParent;

			if (!aaGlobalee.inheritanceSet) {
				aaGlobalee.inheritanceSet = {};
			}
			aaGlobalee.inheritanceSet[refNameChild + "__INHERITS__" + vv.refNameParent] = "_";

			if (!aaGlobalee.classesSet) {
				aaGlobalee.classesSet = {};
			}

			aaGlobalee.classesSet[refNameChild] = {
				myOwnName: refNameChild,
				myOwnClass: Child,
				myOwnPrototype: Child.prototype,
				myParentName: vv.refNameParent
			};
			if (Parent) {
				aaGlobalee.classesSet[refNameChild].myParentClass = Parent, aaGlobalee.classesSet[refNameChild].myParentPrototype = Parent.prototype || "none";
			}

			return Child;
		};

		return MyClass;
	})();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/AppVcc/AppVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/AppVcc/AppVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: AppVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\n/**********************************************************************/\n/**********************************************************************/\n* {\n/** Layout **/\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nsection,\nmain,\narticle,\nnav,\nheader,\nfooter,\nfieldset,\nlegend {\n/** Layout **/\n  display: block;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n/** Layout **/\n/** Style **/\n  font-weight: normal;\n}\nul {\n/** Style **/\n  list-style-type: none;\n}\nbody {\n/** Style **/\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\na {\n/** Style **/\n  color: #00d;\n  text-decoration: none;\n}\n.whoAmI {\n/** Layout **/\n  display: none;\n}\nfieldset {\n/* Style */\n  border: none;\n}\ninput[type=text] {\n/* Layout */\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  line-height: 1.2;\n  background-color: #fff;\n  border: solid 1px #ddd;\n/* Style */\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\ninput[type=password] {\n/* Layout */\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  line-height: 1.2;\n  background-color: #fff;\n  border: solid 1px #ddd;\n/* Style */\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\ninput[type=email] {\n/* Layout */\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  line-height: 1.2;\n  background-color: #fff;\n  border: solid 1px #ddd;\n/* Style */\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\ninput[type=checkbox] {\n/* Style */\n  cursor: pointer;\n}\ninput[type=radio] {\n/* Style */\n  cursor: pointer;\n}\nselect {\n/* Layout */\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  line-height: 1.2;\n  background-color: #fff;\n  border: solid 1px #ddd;\n/* Style */\n  cursor: pointer;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\noption {\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  color: #444;\n}\n/* DOESN'T SEEM TO WORK:\noption:checked {\n\t{$AppVcc_formishFieldValuePlaceHolder}\n}\n*/\n.form-hr {\n/* Layout */\n  margin: 15px 0 15px;\n}\n.form-hr-2 {\n/* Layout */\n  margin: 15px 0 15px;\n}\n.form-info-text {\n/* Layout */\n  margin-bottom: 15px;\n/* Style */\n}\n.form-textarea {\n/* Layout */\n  width: 100%;\n  height: 100px;\n  padding: 3px;\n/* Style */\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\n.form-active-checkbox-label:hover {\n/* Style */\n  color: #000;\n  cursor: pointer;\n}\n.form_error {\n/* Layout */\n  margin-top: 3px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #c00;\n}\n.form_error_item {\n/* Style */\n  margin-bottom: 5px;\n}\n.form_error .form_error_item:last-child {\n/* Style */\n  margin-bottom: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.InnerFieldset {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.FieldSetItem {\n/* Layout */\n  margin: 15px 0 0 0;\n}\n.FieldSetItem:first-child {\n/* Layout */\n  margin-top: 0;\n}\n/**********************************************************************/\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookSdkVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(8);
	aa.LinkFncClass = __webpack_require__(9);
	aa.CtrlClass = __webpack_require__(10);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "FacebookSdkVcc";
	aa.thisMod = aa.FacebookSdkVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFacebookSdkVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: FacebookSdkVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t<script>\n\t\t\n\t\taaGlobalee.fbSdkSetup = function() {\n\t\t\t  window.fbAsyncInit = function() {\n\t\t\t\tFB.init({\n\t\t\t\t  appId      : aaGlobalee.fbAppId,\n\t\t\t\t  xfbml      : true,\n\t\t\t\t  version    : aaGlobalee.fbAppVer\n\t\t\t\t});\n\t\t\t  };\n\n\t\t\t  (function(d, s, id){\n\t\t\t\t var js, fjs = d.getElementsByTagName(s)[0];\n\t\t\t\t if (d.getElementById(id)) {return;}\n\t\t\t\t js = d.createElement(s); js.id = id;\n\t\t\t\t js.src = \"//connect.facebook.net/en_US/sdk.js\";\n\t\t\t\t fjs.parentNode.insertBefore(js, fjs);\n\t\t\t   }(document, 'script', 'facebook-jssdk'));\n\t\t}\n\t\t\n\t\tsetTimeout( aaGlobalee.fbSdkSetup, 4000 )\n\n\t</script>\n</div>\n\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookSdkVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

	  function LinkFncClass(scopeNg, elm, attr) {
	    var that = this;
	    that.scopeNg = scopeNg;
	    that.elm = elm;
	    that.attr = attr;
	  };

	  return LinkFncClass;
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookSdkVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "FacebookSdkVcc";
		aa.myClassName = "FacebookSdkVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> FacebookSdkVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		//}	

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function setup() {
			var that = this;
			///alert(">>> FacebookSdkVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
		};

		p._setupSpcfDatas = function () {};

		p._setScopeWatchers = function () {};

		//}

		return aa.MyClass;
	})();

	/* Stub */

	/* Stub */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookAuthMachineVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(12);
	aa.LinkFncClass = __webpack_require__(13);
	aa.CtrlClass = __webpack_require__(14);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "FacebookAuthMachineVcc";
	aa.thisMod = aa.FacebookAuthMachineVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFacebookAuthMachineVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "sessionService", "usersService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: FacebookAuthMachineVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t<!--- JUST A MACHINE --->\n</div>\n\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookAuthMachineVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
		};

		return LinkFncClass;
	})();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookAuthMachineVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	var _Promise = __webpack_require__(44)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "FacebookAuthMachineVcc";
		aa.myClassName = "FacebookAuthMachineVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService, usersService) {
			console.dog(">>> FacebookAuthMachine_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that.usersService = usersService;
				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p.handleFacebookButtonClick = function callee$1$0(handoffSpecId) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._startFacebookAppAuth(handoffSpecId));

					case 3:
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.tryRegisterAndAuth = function callee$1$0(handoffSpecId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.returnObj = {};

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._registerUser());

					case 5:
						vv.registerReportObj = context$2$0.sent;

						if (!(vv.registerReportObj.status = "succeeded")) {
							context$2$0.next = 13;
							break;
						}

						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._authUser());

					case 9:
						vv.authResultObj = context$2$0.sent;

						if (vv.authResultObj.status = "succeeded") {
							vv.returnObj.status = "succeeded";
						} else {
							vv.returnObj.status = "failed";
						}

						context$2$0.next = 14;
						break;

					case 13:
						vv.returnObj.status = "failed";

					case 14:
						return context$2$0.abrupt("return", vv.returnObj);

					case 15:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.loginToFacebook = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> FROM loginToFacebook - started. ");
						///alert('>>> FROM loginToFacebook - started. ')

						vv.myPromise = that._startFacebookLoginOnly();

						return context$2$0.abrupt("return", vv.myPromise);

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getFacebookLoginStatus = function callee$1$0() {
			var that, vv, resultObjj;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						resultObjj = {};

						console.dog(">>> FROM getFacebookLoginStatus - started. ");
						///alert('>>> FROM getFacebookLoginStatus - started. ')

						//{ Setup promise that informs about FB loginStatus .
						vv.myPromise = new _Promise(function (resolve, reject) {

							vv.callback = function (fromFBResponse) {

								if (fromFBResponse && fromFBResponse.status === "connected" && fromFBResponse.authResponse && fromFBResponse.authResponse.accessToken) {
									resultObjj.isLoggedIn = true;
									resultObjj.loginStatus = fromFBResponse.status;
									resultObjj.authResponse = fromFBResponse.authResponse;
									resultObjj.accessToken = fromFBResponse.authResponse.accessToken;

									console.dog(">>> getFacebookLoginStatus - logged in: ", fromFBResponse);
								} else {
									resultObjj.isLoggedIn = false;
									resultObjj.loginStatus = undefined;
									resultObjj.authResponse = undefined;
									console.dog(">>> getFacebookLoginStatus - not logged in ", fromFBResponse);
								}
								resolve(resultObjj);
							};

							FB.getLoginStatus(vv.callback);
						});
						return context$2$0.abrupt("return", vv.myPromise);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.loc.remoteSessionId = "";
						that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
						console.dog(">>> FacebookAuthMachineVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function () {
			var that = this;
			that.scopeNg.loc.accessTokenType = "facebook";
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._startFacebookLoginOnly = function callee$1$0(handoffSpecId) {
			var that, vv, resultObjj;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						resultObjj = {};

						console.dog(">>> FROM _startFacebookLoginOnly - started. ");
						///alert('>>> FROM _startFacebookLoginOnly - started. ')

						//{ Setup promise that informs about FB login state.
						vv.myPromise = new _Promise(function (resolve, reject) {

							console.dog(">>> _startFacebookLoginOnly - in promise function ");
							///alert(">>> _startFacebookLoginOnly - in promise function ")

							vv.callback = function (fromFBLoginResponse) {

								console.dog(">>> _startFacebookLoginOnly - in call back function for promise function");
								///alert(">>> _startFacebookLoginOnly - in call back function for promise function")

								if (fromFBLoginResponse && fromFBLoginResponse.authResponse && fromFBLoginResponse.authResponse.accessToken) {
									resultObjj.status = "succeeded";
									resultObjj.authResponse = fromFBLoginResponse.authResponse;
									console.dog(">>> _startFacebookAppAuth - from FB login succeeded,: ", fromFBLoginResponse);
								} else {
									resultObjj.status = "failed";
									resultObjj.authResponse = undefined;
									console.dog(">>> _startFacebookAppAuth - from FB login failed: ", fromFBLoginResponse);
								}
								resolve(resultObjj);
							};

							FB.login(vv.callback, { scope: "public_profile,email" });
						});
						return context$2$0.abrupt("return", vv.myPromise);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._startFacebookAppAuth = function callee$1$0(handoffSpecId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> FROM _startFacebookAppAuth - RUNNING:  ");

						//{ Define a callback.
						vv._callbackForFBLogin = function (fromFBResponse) {

							vv.fromFBResponse = fromFBResponse;

							console.dog(">>> _callbackForFBLogin (facebook) - vv.fromFBResponse: ", vv.fromFBResponse);

							//{ Define an inner callback.
							vv._callbackForFBAuthSuccess = function (authResponseFromFacebook) {
								vv.voidd = that._handleFromFacebookAuthSuccessAync(authResponseFromFacebook, handoffSpecId);
							};
							//}	

							if (vv.fromFBResponse && vv.fromFBResponse.authResponse && vv.fromFBResponse.authResponse.accessToken) {
								console.dog(">>> _startFacebookAppAuth - from FB login succeeded");

								vv._callbackForFBAuthSuccess(vv.fromFBResponse.authResponse);
							} else {
								console.dog(">>> _startFacebookAppAuth - from FB login failed.");
							}
						};
						//}

						/*
	     			FB.getLoginStatus(function(response) {
	     				console.dog(">>> response.status: ", response.response);
	     				alert(">>> response.status: ", response.status);
	     			})
	     */

						///that._openFacebookLoginManually()
						FB.login(vv._callbackForFBLogin, { scope: "public_profile,email" });

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._zz_openFacebookLoginManually = function () {
			/* NOT PRESENTLY USED.  STILL IN DEV STAGE.  TO BE USED IN iOS CHROME FB LOGIN FIX */

			var ABSOLUTE_URI = "http://devweb14.nanocosm.com/webjerryLive05/school/M4A_july22/1050";
			var FB_ID = "1056625957688762";
			function openFBLoginDialogManually() {
				///alert("boooooo");
				// Open your auth window containing FB auth page
				// with forward URL to your Opened Window handler page (below)

				var redirect_uri = "&redirect_uri=" + ABSOLUTE_URI + "/AfterManualFBLogin";
				var scope = "&scope=public_profile,email";
				var url = "https://www.facebook.com/dialog/oauth?client_id=" + FB_ID + redirect_uri + scope;

				// notice the lack of other params in window.open
				// for some reason the opener is set to null
				// and the opened window can NOT reference it
				// if params are passed. #Chrome iOS Bug
				window.open(url);
			}

			openFBLoginDialogManually();
		};

		p._handleFromFacebookAuthSuccessAync = function callee$1$0(authResponseFromFacebook, handoffSpecId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> FROM _handleFromFacebookAuthSuccessAync - START");

						vv.accessToken = authResponseFromFacebook.accessToken;

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._authUser(vv.accessToken));

					case 6:
						vv.authReportObj = context$2$0.sent;

						that.scopeNg.loc.accessToken = vv.accessToken;

						if (vv.authReportObj.status === "succeeded") {
							vv.pkgForMediator = {
								notice: {
									noticeName: "FacebookBasedAuth_succeeded",
									handoffSpecId: handoffSpecId,
									doHandoffFirst: "true"
								}
							};
							that.mediator.receiveNotice("", vv.pkgForMediator);
						} else if (vv.authReportObj.status === "failed") {
							vv.pkgForMediator = {
								notice: {
									noticeName: "FacebookBasedAuth_failed",
									handoffSpecId: handoffSpecId,
									doHandoffFirst: "true"
								}
							};
							that.mediator.receiveNotice("", vv.pkgForMediator);
						}

						return context$2$0.abrupt("return", "done");

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._authUser = function callee$1$0(accessToken) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.authReportObj = {};
						vv.accessToken = accessToken || that.scopeNg.loc.accessToken;
						vv.accessTokenType = that.scopeNg.loc.accessTokenType;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.sessionService.startRemoteSessionWithAccessTokenAsync(vv.accessToken, vv.accessTokenType));

					case 7:
						vv.returnedSessionId = context$2$0.sent;

						console.dog(">>> FROM (Facebook) _authUser - PNT-A - authResult: ", vv.authResult);

						if (vv.returnedSessionId && typeof vv.returnedSessionId === "string") {
							vv.authReportObj.status = "succeeded";
							vv.authReportObj.sessionId = vv.returnedSessionId;
						} else {
							vv.authReportObj.status = "failed";
						}

						console.dog(">>> FROM (Facebook) _authUser - PNT-A2 - authReportObj: ", vv.authReportObj);
						return context$2$0.abrupt("return", vv.authReportObj);

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._registerUser = function callee$1$0(accessToken) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.registerReportObj = {};
						vv.accessToken = accessToken || that.scopeNg.loc.accessToken;
						vv.accessTokenType = that.scopeNg.loc.accessTokenType;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.usersService.registerWithToken(vv.accessToken, vv.accessTokenType));

					case 7:
						vv.registerResultObj = context$2$0.sent;

						console.dog(">>> FROM (Facebook) _registerUser - PNT-A - registerResultObj: ", vv.registerResultObj);

						if (vv.registerResultObj.status === "succeeded") {
							vv.registerReportObj.status = "succeeded"
							///alert('>>> Register succeeded')
							;
						} else {
							vv.registerReportObj.status = "failed"
							///alert('>>> Register failed')
							;
						}

						return context$2$0.abrupt("return", vv.registerReportObj);

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();
	///alert(">>> tryRegisterAndAuth - START: " + handoffSpecId)

	///alert(">>> resultObjj.status succeeded: " + resultObjj.status)
	///alert(">>> resultObjj.status failed: " + resultObjj.status)
	//}		

	///alert(">>> FacebookAuthMachineVcc - boooooo");
	///alert(">>> resultObjj.status succeeded: " + resultObjj.status)
	///alert(">>> resultObjj.status failed: " + resultObjj.status)
	//}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(16);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  delete g.regeneratorRuntime;
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(18)["default"];

	var _Symbol$iterator = __webpack_require__(33)["default"];

	var _Object$create = __webpack_require__(42)["default"];

	var _Promise = __webpack_require__(44)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : result;
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator, and call generator.return() to
	      // allow the generator a chance to clean up.
	      previousPromise = enqueueResult["catch"](invokeReturn);

	      return enqueueResult;
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset();
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
	        this[tempName] = null;
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(17)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);
	module.exports = __webpack_require__(21).core.Symbol;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $        = __webpack_require__(21)
	  , setTag   = __webpack_require__(23).set
	  , uid      = __webpack_require__(26)
	  , shared   = __webpack_require__(25)
	  , $def     = __webpack_require__(27)
	  , $redef   = __webpack_require__(28)
	  , keyOf    = __webpack_require__(29)
	  , enumKeys = __webpack_require__(30)
	  , assertObject = __webpack_require__(31).obj
	  , ObjectProto = Object.prototype
	  , DESC     = $.DESC
	  , has      = $.has
	  , $create  = $.create
	  , getDesc  = $.getDesc
	  , setDesc  = $.setDesc
	  , desc     = $.desc
	  , $names   = __webpack_require__(32)
	  , getNames = $names.get
	  , toObject = $.toObject
	  , $Symbol  = $.g.Symbol
	  , setter   = false
	  , TAG      = uid('tag')
	  , HIDDEN   = uid('hidden')
	  , _propertyIsEnumerable = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols = shared('symbols')
	  , useNative = $.isFunction($Symbol);

	var setSymbolDesc = DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;

	function wrap(tag){
	  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
	  DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, desc(1, value));
	    }
	  });
	  return sym;
	}

	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: desc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  assertObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = _propertyIsEnumerable.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this[TAG];
	  });

	  $.create     = create;
	  $.setDesc    = defineProperty;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;

	  if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = __webpack_require__(24)(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag($.g.JSON, 'JSON', true);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}

	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}

	var $ = module.exports = __webpack_require__(22)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(21)
	  , TAG      = __webpack_require__(24)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21).g
	  , store  = __webpack_require__(25)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(26).safe('Symbol.' + name));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || ($.g[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(21).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(21)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21).hide;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	module.exports = function(object, el){
	  var O      = $.toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(21)
	  , toString = {}.toString
	  , getNames = $.getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	__webpack_require__(39);
	module.exports = __webpack_require__(24)('iterator');

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(21).set
	  , $at   = __webpack_require__(36)(true)
	  , ITER  = __webpack_require__(26).safe('iter')
	  , $iter = __webpack_require__(37)
	  , step  = $iter.step;

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(38)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(21);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(21)
	  , cof               = __webpack_require__(23)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(31)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(24)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(25)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}

	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(27)
	  , $redef          = __webpack_require__(28)
	  , $               = __webpack_require__(21)
	  , cof             = __webpack_require__(23)
	  , $iter           = __webpack_require__(37)
	  , SYMBOL_ITERATOR = __webpack_require__(24)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW || FORCE)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	var $           = __webpack_require__(21)
	  , Iterators   = __webpack_require__(37).Iterators
	  , ITERATOR    = __webpack_require__(24)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(21)
	  , setUnscope = __webpack_require__(41)
	  , ITER       = __webpack_require__(26).safe('iter')
	  , $iter      = __webpack_require__(37)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(38)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	__webpack_require__(35);
	__webpack_require__(39);
	__webpack_require__(47);
	module.exports = __webpack_require__(21).core.Promise;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(23)
	  , tmp = {};
	tmp[__webpack_require__(24)('toStringTag')] = 'z';
	if(__webpack_require__(21).FW && cof(tmp) != 'z'){
	  __webpack_require__(28)(Object.prototype, 'toString', function toString(){
	    return '[object ' + cof.classof(this) + ']';
	  }, true);
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(21)
	  , ctx      = __webpack_require__(49)
	  , cof      = __webpack_require__(23)
	  , $def     = __webpack_require__(27)
	  , assert   = __webpack_require__(31)
	  , forOf    = __webpack_require__(50)
	  , setProto = __webpack_require__(52).set
	  , same     = __webpack_require__(48)
	  , species  = __webpack_require__(53)
	  , SPECIES  = __webpack_require__(24)('species')
	  , RECORD   = __webpack_require__(26).safe('record')
	  , PROMISE  = 'Promise'
	  , global   = $.g
	  , process  = global.process
	  , isNode   = cof(process) == 'process'
	  , asap     = process && process.nextTick || __webpack_require__(54).set
	  , P        = global[PROMISE]
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , Wrapper;

	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = isFunction(P) && isFunction(P.resolve) && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && $.DESC){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(!$.FW && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function notify(record){
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  if(chain.length)asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this
	    , promise;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  setTimeout(function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    asap.call(global, function(){
	      if(isUnhandled(promise = record.p)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(global.console && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      }
	      record.a = undefined;
	    });
	  }, 1);
	  notify(record);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(57)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	cof.set(P, PROMISE);
	species(P);
	species(Wrapper = $.core[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(58)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(31).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var ctx  = __webpack_require__(49)
	  , get  = __webpack_require__(37).get
	  , call = __webpack_require__(51);
	module.exports = function(iterable, entries, fn, that){
	  var iterator = get(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done){
	    if(call(iterator, f, step.value, entries) === false){
	      return call.close(iterator);
	    }
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var assertObject = __webpack_require__(31).obj;
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function call(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	}
	call.close = close;
	module.exports = call;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var $      = __webpack_require__(21)
	  , assert = __webpack_require__(31);
	function check(O, proto){
	  assert.obj(O);
	  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(49)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(21)
	  , SPECIES = __webpack_require__(24)('species');
	module.exports = function(C){
	  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(21)
	  , ctx    = __webpack_require__(49)
	  , cof    = __webpack_require__(23)
	  , invoke = __webpack_require__(55)
	  , cel    = __webpack_require__(56)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(21)
	  , document = $.g.document
	  , isObject = $.isObject
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(28);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(24)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StateContainerVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(60);
	aa.LinkFncClass = __webpack_require__(61);
	aa.CtrlClass = __webpack_require__(62);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "StateContainerVcc";
	aa.thisMod = aa.StateContainerVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctStateContainerVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction($compile) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", "$http", "$state", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: StateContainerVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"{{ssvv.myCssName}} vcBox\">\n\t<div class=\"whoAmI\">This is the {{datas.view.info.myname}} Tmplt.  Time: {{datas.view.info.time}}.</div>\n\t\n\t<div class=\"{{ssvv.abstractStatesCssNames}} _holder\"\n\t\tdata-ui-view='HtmlSlot' \n\t></div>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StateContainerVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
		};

		return LinkFncClass;
	})();

/***/ },
/* 62 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StateContainerVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "StateContainerVcc";
		aa.refNameSelf = "StateContainerVcc_CtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
		//}

		//	Scaffold class.
		//{
		function MyClass(sscc, httpNg, stateNg) {
			if (typeof sscc === "object") {
				sscc.thisc = this;
				var sstt = this;
				sstt.sscc = sscc;
				sstt.httpNg = httpNg;
				sstt.stateNg = stateNg;
				sstt._setup();
			}
		}

		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myVcName, MyClass, aa.ParentClass);
		//}

		console.dog(">>> StateContainerVcc_CtrlClass - aa.MyClass ", aa.MyClass);

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p.setAbstractStatesCssNamesVar = function (stateNames) {
			var sstt = this;
			sstt._setAbstractStatesCssNamesVar(stateNames);
		};

		//}	

		//	================================================================
		//	STANDARD PRIVATE METHODS:
		//{	
		p._setup = function () {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssdd = {};
			sscc.ssvv = {};

			sstt._setMyNames();
			sstt._initMockData();
			sstt._initDatas();
			sstt._customSetup();
		};

		p._setMyNames = function () {
			var sstt = this;
			var sscc = this.sscc;

			sscc.ssdd.myVcName = aa.myVcName;
			sscc.ssvv.myCssName = aa.myVcName;
		};

		p._initMockData = function () {
			var sstt = this;
			var sscc = this.sscc;
			sstt.mockData = {};
		};

		p._initDatas = function () {
			var sstt = this;
			var sscc = this.sscc;
		};

		p._customSetup = function () {
			var sstt = this;
			var sscc = this.sscc;
			///sstt._hardSetAuthHeaderForTesting();
		};
		//}

		//	================================================================
		//	CUSTOM PRIVATE METHODS:
		//{	
		p._setAbstractStatesCssNamesVar = function (stateNames) {
			var sstt = this;
			var sscc = this.sscc;
			if (stateNames) {
				sscc.ssvv.abstractStatesCssNames = stateNames;
			}
		};

		p._hardSetAuthHeaderForTesting = function () {
			var that = this;
			var vv = {};
			vv.headerValString = "Live365 D80AC95F7D6F4285986F1FD15FF8FB24";
			that.httpNg.defaults.headers.common.Authorization = vv.headerValString;
			///alert('_setAuthHeader')
		};
		//}

		return aa.MyClass;
	})();

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: OuterHolderVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	__webpack_require__(64);
	__webpack_require__(304);
	__webpack_require__(66);

	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(72);
	aa.LinkFncClass = __webpack_require__(73);
	aa.CtrlClass = __webpack_require__(74);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "OuterHolderVcc";
	aa.thisMod = aa.OuterHolderVcc = angular.module(aa.thisModsName, ["PlayerPanelVcc"]);

	aa.drctName = "drctOuterHolderVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction(compileNg) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr, compileNg);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", "$state", "$stateParams", "toolboxService", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/OuterHolderVcc/OuterHolderVccLinkStyle.css", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/OuterHolderVcc/OuterHolderVccLinkStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: OuterHolderVccLinkStyle.css\n * *********************************************************************\n * *********************************************************************\n */\n \ndrct-outer-holder-vcc,\n.drctOuterHolderVcc {\n\t/** Layout **/\n\tdisplay: block;\n}\n\n/* Set to default state of everything to switched off. \n * Then have ui state switch on and configure as needed for them.\n */\n.OuterHolderVcc\n\t.OuterHolder_DnN1Slot {\n\t\tdisplay: block;\n\t}\n\n.OuterHolderVcc\n\t.OuterHolder_DnN2Slot {\n\t\tdisplay: block;\n\t\tposition: fixed;\n\t\tbottom: 0px;\n\t\twidth: 100%\n\t}\n\n\n\n\n", ""]);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayerPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	aa.style = __webpack_require__(67);
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(69);
	aa.LinkFncClass = __webpack_require__(70);
	aa.CtrlClass = __webpack_require__(71);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "PlayerPanelVcc";
	aa.thisMod = aa.PlayerPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPlayerPanelVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction(compileNg) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNg, elm, attr) {
			new vv.LinkFncClass(scopeNg, elm, attr, compileNg);
		};

		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", "mediatorService", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlayerPanelVcc/PlayerPanelVccLinkStyle.css", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlayerPanelVcc/PlayerPanelVccLinkStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: PlayerPanelVccLinkStyle.css\n * *********************************************************************\n * *********************************************************************\n */\n\n\ndrct-player-panel-vcc {\n\t/** Layout **/\n\tdisplay: block;\n\twidth: calc( 100% );\n\tmin-width: 425px;\n\theight: 80px;\n\t\n\t/** Style **/\n\tbackground-color: transparent;\n}\n\ndrct-player-panel-vcc .requestedInfo {\n\t/** Layout **/\n\tmargin__: 5px;\n\t/** Style **/\n\tcolor: #ddf;\n    text-decoration: none;\n    font-family: Verdana, Geneva, sans-serif;\n    font-size: 9px;\n}\n\n\ndrct-player-panel-vcc .viewportIframe {\n\t/** Layout **/\n\twidth: calc(100% - (0px + 0px) );\n\tmin-width: 425px;\n\theight: 80px;\n\tpadding: 0;\n\tmargin__: 5px;\n\toverflow: hidden;\n\t\n\t/** Style **/\n\tborder: none;\n}\n\ndrct-player-panel-vcc drct-floating-options-menu-vcc  {\n\t/** Layout **/\n\tdisplay: block;\n\tposition: absolute;\n\tmargin-left: 26vw;\n\tmargin-top: -160px;\n\twidth: 1px;\n\n\n}\n\n", ""]);

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: PlayerPanelVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"PlayerPanelVcc vcBox\">\n\t\n\t<div class=\"displaySwitch\"\n\t\tng-if=\"datas.view.mech.isOkayToShow\"\n\t>\n\t\t<div class=\"whoAmI\">This is the inside of {{datas.view.info.myname}}.</div>\n\t\t<drct-floating-options-menu-vcc  data-go_dude=\"truee\"></drct-floating-options-menu-vcc>\n\t</div>\n</div>\n\n\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayerPanelVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, compileNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.compileNg = compileNg;
			that._setup();
		};

		var p = LinkFncClass.prototype;

		p._setup = function _setup() {
			var that = this;
			that._setClickHandler();
			that._setScopeWatchers();
		};

		p._setClickHandler = function _setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
			//--------------------------------------------------------------
			//	Watch datas.view.info.iframeSrc
			var handleScopeWatch__iframeSrc__async = function handleScopeWatch__iframeSrc__async(newVal, oldVal) {
				that._handleScopeWatch__iframeSrc.call(that, newVal, oldVal);
			};
			that.scopeNg.$watch('datas.view.info.iframeSrc', handleScopeWatch__iframeSrc__async, true);
		};

		p._handleScopeWatch__iframeSrc = function _handleScopeWatch__iframeSrc(newVal, oldVal) {
			var that = this;
			that._addViewportIframe();
		};

		p._addViewportIframe = function _addViewportIframe() {
			var that = this;
			var vv = {};

			if (!that.scopeNg.thisc._getIsPlayerInFrame()) {
				that.iframeElmo = $(that.elm[0].querySelector('.viewportIframe'));
				if (that.iframeElmo) {
					that.iframeElmo.remove();
				}

				vv.displaySwitchElmo = $(that.elm[0].querySelector('.displaySwitch'));

				vv.displaySwitchElmo.append('<iframe class="PlayerIframe viewportIframe" ng-src="{{datas.view.info.iframeSrc}}" scrolling="no"></iframe>');

				vv.iframeElmo = $(that.elm[0].querySelector('.PlayerIframe'));

				vv.onloadHandler = function () {
					that.scopeNg.isPlayerInFrame = true;
					that.scopeNg.$apply();
					///that.scopeNg.thisc._announcePlayerPanelWantsPlay("PlayerPanelVccLinkFncClass._addViewportIframe");
				};

				vv.iframeElmo.on('load', vv.onloadHandler);

				that.compileNg(vv.displaySwitchElmo.contents())(that.scopeNg);
			}
		};

		return LinkFncClass;
	})();

	///console.dog(">>>");

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayerPanelVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _Promise = __webpack_require__(44)['default'];

	module.exports = (function () {

		function CtrlClass(scopeNg, mediatorService) {
			scopeNg.thisc = this;
			var that = this;
			that.scopeNg = scopeNg;
			that.mediator = mediatorService;
			that._setup();
		}

		var p = CtrlClass.prototype;

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	
		p._setup = function setup() {
			var that = this;
			that._setupDatas();
		};

		p._setupDatas = function setupDatas() {
			var that = this;
			that.mech = {};
			that.scopeNg.loc = {};
			that.scopeNg.loc.stationId = 'thestationId';
			that.scopeNg.loc.playlistId = 'theplaylistId';
			that.scopeNg.loc.trackId = 'thetrackId';
			console.dog('>>> Loc scope setup in Player Panel: ', that.scopeNg);
			///alert(">>> Loc scope setup in Player Panel: ");
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none',
						isOkayToShow: true,
						isPlayerInFrame: false
					},
					info: {
						myname: 'PlayerPanelVcc',
						stationId: '',
						doPlayFlag: 0, // Valid options are 0 or 1.
						playerPageUrl: aaGlobalee.playerPageUrl,
						iframeSrc: ''
					}
				}
			};
		};
		//}

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		p.readyPanelForPlay = p._readyPanelForPlay = function (stationId, doPlayFlag) {
			var that = this;
			var vv = {};

			vv.newIframeSrc = that.scopeNg.datas.view.info.playerPageUrl;

			that._setDoPlayFlag(doPlayFlag);
			that._setStationId(stationId);
			vv.doesNeedNewSrc = that._bgetDoesIframeNeedNewSrc(vv.newIframeSrc);
			that.scopeNg.$apply();
			vv.myPromise = new _Promise(function (resolve, reject) {
				if (vv.doesNeedNewSrc) {
					that._setIframeSrc(vv.newIframeSrc);

					vv.unregisterWatchFnc = that.scopeNg.$watch('isPlayerInFrame', function (newVal, oldVal) {
						console.dog('>>> PlayerPanelVccCtrlClass - watch scopeNg.isPlayerInFrame : ', that.scopeNg.isPlayerInFrame, newVal, oldVal);
						if (that.scopeNg.isPlayerInFrame === true) {
							vv.unregisterWatchFnc();
							resolve('>>> Player frame added');
						}
					}, true);

					that.scopeNg.$apply();
				} else {
					resolve('>>> Player frame not added. Already there.');
				}
			});
			return vv.myPromise;
		};

		p.getStationId = p._getStationId = function (stationId) {
			var that = this;
			return that.scopeNg.datas.view.info.stationId;
		};

		p.getIframeSrc = p._getIframeSrc = function () {
			var that = this;
			return that.scopeNg.datas.view.info.iframeSrc;
		};

		p.getIsPlayerInFrame = p._getIsPlayerInFrame = function () {
			var that = this;
			return that.scopeNg.datas.view.mech.isPlayerInFrame;
		};

		p.openOptionsMenu = p._openOptionsMenu = function (stationId, playlistId, trackId) {
			var that = this;
			var vv = {};

			///that.scopeNg.loc.stationId = stationId
			///that.scopeNg.loc.playlistId = playlistId
			///that.scopeNg.loc.trackId = trackId

			///that.scopeNg.$apply();

			$('.OuterHolderVcc .md-icon-button ').click();
		};
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._setStationId = function (stationId) {
			var that = this;
			var vv = {};

			if (that.scopeNg.datas.view.info.stationId !== stationId) {
				that.scopeNg.datas.view.info.stationId = stationId;
			}
		};

		p._setDoPlayFlag = function (doPlayFlag) {
			var that = this;

			if (doPlayFlag === 'false') {
				that.scopeNg.datas.view.info.doPlayFlag = false;
			} else {
				that.scopeNg.datas.view.info.doPlayFlag = true;
			}
		};

		p._bgetDoesIframeNeedNewSrc = function (newSrcUrl) {
			var that = this;
			var doesIframeNeedNewSrc = false;

			if (that.scopeNg.datas.view.info.iframeSrc !== newSrcUrl) {
				doesIframeNeedNewSrc = true;
			}

			return doesIframeNeedNewSrc;
		};

		p._setIframeSrc = function (newSrcUrl) {
			var that = this;
			var vv = {};

			vv.srcUrl = newSrcUrl || that.scopeNg.datas.view.info.playerPageUrl;
			that.scopeNg.datas.view.info.iframeSrc = vv.srcUrl;
		};

		p._announcePlayerPanelWantsPlay = function (caller) {
			var that = this;
			var vv = {};

			vv.pkgForMediator = {
				notice: {
					noticeName: 'PlayerPanel_wantsPlay',
					stationId: that.scopeNg.datas.view.info.stationId,
					doPlayFlag: that.scopeNg.datas.view.info.doPlayFlag,
					caller: caller
				}
			};
			that.mediator.receiveNotice('', vv.pkgForMediator);
		};

		p._announcePlayerPanelWantsNoPlay = function () {
			var that = this;
			var vv = {};

			vv.pkgForMediator = {
				notice: {
					noticeName: 'PlayerPanel_wantsNotPlay'
				}
			};
			that.mediator.receiveNotice('', vv.pkgForMediator);
		};

		p._bgetIframeSrc = function getIframeSrc() {
			var that = this;
			var vv = {};

			///return "http://devweb14.nanocosm.com/webjerryLive05/Assets/Player/?station_id=7448"
			console.dog('>>> that.scopeNg.datas.view.info.stationId: ', that.scopeNg.datas.view.info.stationId);

			if (that.scopeNg.datas.view.info.stationId) {
				vv.newSrcUrl = that.scopeNg.data.view.info.playerPageUrl + '/?station_id__=' + that.scopeNg.datas.view.info.stationId;
			} else {
				vv.newSrcUrl = that.mech.currentStationId || that.scopeNg.data.view.info.playerPageUrl + '/?station_id__=7448';
			}

			if (that.scopeNg.datas.view.info.doPlayFlag === 1) {
				vv.newSrcUrl = vv.newSrcUrl + '&autoplay__=' + 1;
			}

			console.dog('>>> In that.scopeNg.methods.getIframeSrc - vv.newSrcUrl: ', vv.newSrcUrl);

			that.mech.currentStationId = vv.newSrcUrl;
			return vv.newSrcUrl;
		};

		//}

		return CtrlClass;
	})();
	/// that._announcePlayerPanelWantsPlay("PlayerPanelVccCtrlClass._readyPanelForPlay");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: OuterHolderVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n\n<div class=\"{{ssvv.myCssName}} vcBox\">\n\n\t<div class=\"OuterHolder_DnN1Slot VwSlot\"\n\t\tng-if=\"ssvv.domSwitches.OuterHolder_DnN1Slot\"\n\t\tdata-ui-view='OuterHolder_DnN1Slot'\n\t></div><!-- END: OuterHolder_DnN1Slot -->\n\n\t<div class=\"OuterHolder_DnN2Slot VwSlot\"\n\t\tng-if=\"ssvv.domSwitches.OuterHolder_DnN2Slot\"\n\t\tdata-ui-view='OuterHolder_DnN2Slot'\n\t></div>\n\n\t\t\t\n</div>\n\n\n\n\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: OuterHolderVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, compileNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.compileNg = compileNg;
			console.dog(">>> OuterHolderVccLinkFncClass. ");
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that._setScopeWatchers();
		};

		p._setClickHandler = function _setClickHandler() {
			var that = this;
			that.elm.on({
				"click": function handleClick_fnc(Event) {}
			});
		};

		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
			console.dog(">>> OuterHolderVccLinkFncClass watch 1. ");
			//--------------------------------------------------------------
			//	Watch datas.view.info.iframeSrc
			var handleScopeWatch__isOkayToShowPlayer__async = function handleScopeWatch__isOkayToShowPlayer__async(newVal, oldVal) {
				console.dog(">>> handleScopeWatch__isOkayToShowPlayer__async", newVal, oldVal);
				that._handleScopeWatch__isOkayToShowPlayer.call(that, newVal, oldVal);
			};

			that.scopeNg.$watch("sscc.ssvv.isOkayToShowPlayer", handleScopeWatch__isOkayToShowPlayer__async, true);
			console.dog(">>> OuterHolderVccLinkFncClass watch 2. ");
		};

		p._handleScopeWatch__isOkayToShowPlayer = function _handleScopeWatch__isOkayToShowPlayer(newVal, oldVal) {
			console.dog(">>> _handleScopeWatch__isOkayToShowPlayer 1. ");
			var that = this;
			that._showPlayerPanel();
		};

		p._showPlayerPanel = function _showPlayerPanel() {
			var that = this;
			console.dog(">>> _showPlayerPanel: ", that.elm[0]);
			that.compileMeElmo = $(that.elm[0].querySelector(".playerPanelWrap"));
			that.compileNg(that.compileMeElmo.contents())(that.scopeNg);
		};

		return LinkFncClass;
	})();

	///console.dog(">>>");

/***/ },
/* 74 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: OuterHolderVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "OuterHolderVcc";
		aa.refNameSelf = "OuterHolderVccCtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
		//}

		//	Scaffold class.
		//{
		function MyClass(sscc, stateNg, stateParamsNg, toolbox) {
			if (typeof sscc === "object") {
				sscc.thisc = this;
				var sstt = this;
				sstt.sscc = sscc;
				sstt.stateNg = stateNg;
				sstt.stateParamsNg = stateParamsNg;
				sstt.toolbox = toolbox;
				sstt._setup();
			}
		}

		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myVcName, MyClass, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p.buildLayout = function (usedSlotsList) {
			var sstt = this;
			sstt._buildLayout(usedSlotsList);
		};

		p.switchOnOffPlayer = function switchOnOffFooterOffset(doSwitchOn) {
			var sstt = this;
			if (doSwitchOn) {
				sstt._buildLayout(sstt.usedSlotsListWithTopAndBottomOn);
			} else {
				sstt._buildLayout(sstt.usedSlotsListWithOnlyTopOn);
			}
			sstt.sscc.$apply();
		};

		//}	

		//	================================================================
		//	STANDARD PRIVATE METHODS:
		//{	
		p._setup = function () {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssdd = {};
			sscc.ssvv = {};

			sstt._setMyNames();
			sstt._initMockData();
			sstt._initDatas();
			sstt._customSetup();
		};

		p._setMyNames = function () {
			var sstt = this;
			var sscc = this.sscc;

			sscc.ssdd.myVcName = aa.myVcName;
			sscc.ssvv.myCssName = aa.myVcName;
		};

		p._initMockData = function () {
			var sstt = this;
			var sscc = this.sscc;
			sstt.mockData = {};
		};

		p._initDatas = function () {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssvv.domSwitches = {};
			sscc.ssvv.isOkayToShowPlayer = false;
			sstt.usedSlotsListWithOnlyTopOn = ["OuterHolder_DnN1Slot"];
			sstt.usedSlotsListWithTopAndBottomOn = ["OuterHolder_DnN1Slot", "OuterHolder_DnN2Slot"];
		};

		p._customSetup = function () {
			var sstt = this;
			var sscc = this.sscc;

			sstt._buildLayout("INIT");
		};
		//}

		//	================================================================
		//	CUSTOM PRIVATE METHODS:
		//{	

		p._buildLayout = function (usedSlotsList) {
			var sstt = this;
			if (usedSlotsList === "INIT") {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);
			} else {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);
				sstt._setSlotsInOnMap(usedSlotsList);
				sstt._setSpacesInOnMap();
				sstt._setSwitchesMap(false);
			}

			sstt.sscc.ssvv.domSwitches = sstt.toolbox.cloneMap(sstt.switchesMap);
		};

		p._setSlotsInOnMap = function (usedSlotsList) {
			var sstt = this;
			var vv = {};

			//	For testing:
			//{
			vv.usedSlotsList = usedSlotsList || ["OuterHolder_DnN1Slot", "OuterHolder_DnN2Slot"];
			//}

			vv.usedSlotsListLen = vv.usedSlotsList.length;
			for (vv.idx = 0; vv.idx < vv.usedSlotsListLen; vv.idx++) {
				sstt.onMap[vv.usedSlotsList[vv.idx]] = true;
			}
		};

		p._setSpacesInOnMap = function () {
			var sstt = this;
			var vv = {};

			// 	No spaces, just slots.
		};

		p._initOnMap = function () {
			var sstt = this;
			sstt.onMap = {};
		};

		p._setSwitchesMap = function (defaultt) {
			var sstt = this;
			sstt.switchesMap = {
				OuterHolder_DnN1Slot: sstt.onMap.OuterHolder_DnN1Slot || defaultt,
				OuterHolder_DnN2Slot: sstt.onMap.OuterHolder_DnN2Slot || defaultt
			};
		};

		return aa.MyClass;
	})();

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FlexiHolderVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	__webpack_require__(76);
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(78);
	aa.LinkFncClass = __webpack_require__(79);
	aa.CtrlClass = __webpack_require__(80);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "FlexiHolderVcc";
	aa.thisMod = aa.FlexiHolderVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFlexiHolderVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction($compile) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", "$state", "$stateParams", "toolboxService", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FlexiHolderVcc/FlexiHolderVcc_style.css", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FlexiHolderVcc/FlexiHolderVcc_style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: FlexiHolderVcc_style.css\n * *********************************************************************\n * *********************************************************************\n */\n \n\n\n\ndrct-flexi-holder-vcc,\n.drctFlexiHolderVcc {\n\t/** Layout **/\n\tdisplay: block;\n\n\t\n\t/* Test */\n\t\n}\n\n\n.TheFooterArea.OffsetFooterAbovePlayer {\n\tmargin-bottom: 80px\n}\n\n", ""]);

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: FlexiHolderVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<!-- This is the {{datas.view.info.myname}} Tmplt.  Time: {{datas.view.info.time}} . -->\n<div class=\"{{ssvv.myCssName}} vcBox {{datas.view.mech.string_footerOffset_yesOrNo}}\"> \n\n\t<div class=\"FlexiArea\"\n\t\tng-if=\"ssvv.domSwitches.FlexiArea\"\n\t>\n\t\t<!--- NOT PRESENTLY USED, BUT KEEP FOR POSSIBLE FUTURE USE/REF\n\t\t\t  ... NOTE, Inputs, labels and Well should be sibling, and in that order.\n\t\t\t  \n\t\t\t<br><br>\n\t\n\t\t\t<input class=\"MainSideMenuN3\" id=\"MainSideMenuN3\"  type=\"checkbox\">\n\t\t\t<label class=\"MainSideMenuN3Label\" for=\"MainSideMenuN3\">Menu 3</label>\n\t\t\t\n\t\t\t\n\t\t\t<input class=\"MainSideMenuN2\" id=\"MainSideMenuN2\"  type=\"checkbox\">\t\t\n\t\t\t<label class=\"MainSideMenuN2Label\" for=\"MainSideMenuN2\">Menu 2</label>\n\t\t\t\n\t\t\t<div class=\"MenuButtonBlocker\"></div>\n\t\t--->\n\t\t\n\t\t<div class=\"FlexiAreaPrmStrata\"\n\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata\"\n\t\t>\n\t\t\n\t\t\t<div class=\"Well\"\n\t\t\t\tng-if=\"ssvv.domSwitches.Well\"\n\t\t\t>\n\t\t\t\t<div class=\"WellPrmStrata\"\n\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata\"\n\t\t\t\t>\n\t\t\t\t\t<!-- Well's main column -->\n\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc\"\n\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<!--( Slots in WellPrmStrata_MainSpc... -->\n\t\t\t\t\t\t<main class=\"WellPrmStrata_MainSpc_MainSlot VwSlot\"\n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_MainSlot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_MainSlot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</main>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!--( Slots above main tag... -->\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_UpN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_UpN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_UpN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_UpN2Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_UpN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_UpN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_UpN1Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_UpN1Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_UpN1Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--) ...Slots above main tag -->\n\n\t\t\t\t\t\t<!--( Slots below main tag... -->\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_DnN1Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_DnN1Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_DnN1Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_DnN2Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_DnN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_DnN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_MainSpc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_MainSpc_DnN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_MainSpc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--) ...Slots below main tag -->\n\t\t\t\t\t\t<!--) ...Slots in WellPrmStrata_MainSpc -->\n\t\t\t\t\t</div><!-- END: WellPrmStrata_MainSpc -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<!-- WellPrmStrata_LfN2Spc - WellPrmStrata_'s column, two left of center -->\n\t\t\t\t\t<div class=\"WellPrmStrata_LfN2Spc\"\n\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN2Spc\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN2Spc_DnN1Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN2Spc_DnN1Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN2Spc_DnN1Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN2Spc_DnN2Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN2Spc_DnN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN2Spc_DnN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN2Spc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN2Spc_DnN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN2Spc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- END: WellPrmStrata_LfN2Spc - WellPrmStrata_'s column, two left of center -->\n\t\t\t\t\t\n\t\t\t\t\t<!-- WellPrmStrata_LfN1Spc - WellPrmStrata_'s column, one left of center  -->\n\t\t\t\t\t<div class=\"WellPrmStrata_LfN1Spc\"\n\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN1Spc\"\n\t\t\t\t\t>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN1Spc_DnN1Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN1Spc_DnN1Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN1Spc_DnN1Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN1Spc_DnN2Slot VwSlot\"\n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN1Spc_DnN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN1Spc_DnN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_LfN1Spc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_LfN1Spc_DnN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_LfN1Spc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div><!-- END: WellPrmStrata_LfN1Spc - WellPrmStrata_'s column, one left of center  -->\n\n\t\t\t\t\t<!-- WellPrmStrata_RtN1Spc - WellPrmStrata_'s column, one right of center -->\n\t\t\t\t\t<div class=\"WellPrmStrata_RtN1Spc\"\n\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN1Spc\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN1Spc_DnN1Slot VwSlot\"\n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN1Spc_DnN1Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN1Spc_DnN1Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN1Spc_DnN2Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN1Spc_DnN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN1Spc_DnN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN1Spc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN1Spc_DnN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN1Spc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div><!-- END: WellPrmStrata_RtN1Spc - WellPrmStrata_'s column, one right of center -->\n\t\t\t\t\t\n\t\t\t\t\t<!-- WellPrmStrata_RtN2Spc - WellPrmStrata_'s column, one right of center -->\n\t\t\t\t\t<div class=\"WellPrmStrata_RtN2Spc\"\n\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN2Spc\"\n\t\t\t\t\t>\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN2Spc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN2Spc\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN2Spc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN2Spc_DnN2Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN2Spc_DnN2Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN2Spc_DnN2Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"WellPrmStrata_RtN2Spc_DnN3Slot VwSlot\" \n\t\t\t\t\t\t\tng-if=\"ssvv.domSwitches.WellPrmStrata_RtN2Spc_DnN3Slot\"\n\t\t\t\t\t\t\tdata-ui-view=\"WellPrmStrata_RtN2Spc_DnN3Slot\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div><!-- END: WellPrmStrata_RtN2Spc - WellPrmStrata_'s column, one right of center -->\n\n\t\t\t\t</div><!-- END: WellPrmStrata -->\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<!--( Slots above WellPrmStrata... -->\n\t\t\t\t<div class=\"Well_UpN3Slot  VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_UpN3Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_UpN3Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Well_UpN2Slot  VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_UpN2Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_UpN2Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Well_UpN1Slot  VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_UpN1Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_UpN1Slot\"\n\t\t\t\t>\t\n\t\t\t\t</div>\n\t\t\t\t<!--) ...Slots above WellPrmStrata... -->\n\t\t\t\t<!--( Slots below WellPrmStrata... -->\n\t\t\t\t<div class=\"Well_DnN1Slot  VwSlot\"\n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_DnN1Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_DnN1Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Well_DnN2Slot  VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_DnN2Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_DnN2Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Well_DnN3Slot  VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.Well_DnN3Slot\"\n\t\t\t\t\tdata-ui-view=\"Well_DnN3Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<!--) ...Slots below WellPrmStrata... -->\n\t\t\t</div><!-- END: Well -->\n\t\t\t\n\t\t\t<!-- FlexiAreaPrmStrata_LfN1Spc - FlexiAreaPrmStrata_'s column, one left of center (well).  -->\n\t\t\t<div class=\"FlexiAreaPrmStrata_LfN1Spc\"\n\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_LfN1Spc\"\n\t\t\t>\n\t\t\t\t\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_LfN1Spc_DnN1Slot VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_LfN1Spc_DnN1Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_LfN1Spc_DnN1Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_LfN1Spc_DnN2Slot VwSlot\"\n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_LfN1Spc_DnN2Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_LfN1Spc_DnN2Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_LfN1Spc_DnN3Slot VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_LfN1Spc_DnN3Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_LfN1Spc_DnN3Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t</div><!-- END: FlexiAreaPrmStrata_LfN1Spc - FlexiAreaPrmStrata_'s column, one left of center (well).  -->\n\n\t\t\t<!-- FlexiAreaPrmStrata_RtN1Spc - FlexiAreaPrmStrata_'s column, one right of center  (well). -->\n\t\t\t<div class=\"FlexiAreaPrmStrata_RtN1Spc\"\n\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_RtN1Spc\"\n\t\t\t>\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_RtN1Spc_DnN1Slot VwSlot\"\n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_RtN1Spc_DnN1Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_RtN1Spc_DnN1Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_RtN1Spc_DnN2Slot VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_RtN1Spc_DnN2Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_RtN1Spc_DnN2Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"FlexiAreaPrmStrata_RtN1Spc_DnN3Slot VwSlot\" \n\t\t\t\t\tng-if=\"ssvv.domSwitches.FlexiAreaPrmStrata_RtN1Spc_DnN3Slot\"\n\t\t\t\t\tdata-ui-view=\"FlexiAreaPrmStrata_RtN1Spc_DnN3Slot\"\n\t\t\t\t>\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</div><!-- END: FlexiAreaPrmStrata_RtN1Spc - FlexiAreaPrmStrata_'s column, one right of center (well). -->\n\t\t\t\t\t\n\t\t</div><!-- END: FlexiAreaPrmStrata -->\n\t\t\n\t\t<!-- TopStrata -->\n\t\t<div class=\"FlexiArea_UpN3Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_UpN3Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_UpN3Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"FlexiArea_UpN2Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_UpN2Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_UpN2Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"FlexiArea_UpN1Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_UpN1Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_UpN1Slot\"\n\t\t>\n\t\t</div>\n\t\t<!-- END: TopStrata -->\n\t\t\n\n\t\t<!-- BtmStrata -->\n\t\t<div class=\"FlexiArea_DnN1Slot VwSlot\"\n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_DnN1Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_DnN1Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"FlexiArea_DnN2Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_DnN2Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_DnN2Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"FlexiArea_DnN3Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.FlexiArea_DnN3Slot\"\n\t\t\tdata-ui-view=\"FlexiArea_DnN3Slot\"\n\t\t>\n\t\t</div>\n\n\t\t<!-- END: BtmStrata -->\n\t</div><!-- END: AbovePageFooter -->\n\t\n\t\n\t<!-- TheTopFixedPosArea -->\n\t<div class=\"TheTopFixedPosArea\"\n\t\tng-if=\"ssvv.domSwitches.TheTopFixedPosArea\"\n\t>\n\t\n\t\t<div class=\"TheTopFixedPosArea_UpN3Slot VwSlot\"\n\t\t\tng-if=\"ssvv.domSwitches.TheTopFixedPosArea_UpN3Slot\"\n\t\t\tdata-ui-view=\"TheTopFixedPosArea_UpN3Slot\"\n\t\t>\n\t\t</div>\n\t\t<div class=\"TheTopFixedPosArea_UpN2Slot VwSlot\"\n\t\t\tng-if=\"ssvv.domSwitches.TheTopFixedPosArea_UpN2Slot\"\n\t\t\tdata-ui-view=\"TheTopFixedPosArea_UpN2Slot\"\n\t\t>\n\t\t</div>\n\t\t<div class=\"TheTopFixedPosArea_UpN1Slot VwSlot\"\n\t\t\tng-if=\"ssvv.domSwitches.TheTopFixedPosArea_UpN1Slot\"\n\t\t\tdata-ui-view=\"TheTopFixedPosArea_UpN1Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t</div><!-- END: TheTopFixedPosArea -->\n\t\n\t\n\t<!-- TheFooterArea -->\n\t<div class=\"TheFooterArea  {{ssvv.footerOffsetCssName}}\"\n\t\tng-if=\"ssvv.domSwitches.TheFooterArea\"\n\t>\n\t\n\t\t<div class=\"TheFooterArea_DnN1Slot VwSlot\"\n\t\t\tng-if=\"ssvv.domSwitches.TheFooterArea_DnN1Slot\"\n\t\t\tdata-ui-view=\"TheFooterArea_DnN1Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"TheFooterArea_DnN2Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.TheFooterArea_DnN2Slot\"\n\t\t\tdata-ui-view=\"TheFooterArea_DnN2Slot\"\n\t\t>\n\t\t</div>\n\t\t\n\t\t<div class=\"TheFooterArea_DnN3Slot VwSlot\" \n\t\t\tng-if=\"ssvv.domSwitches.TheFooterArea_DnN3Slot\"\n\t\t\tdata-ui-view=\"TheFooterArea_DnN3Slot\"\n\t\t>\n\t\t</div>\t\n\t</div><!-- END: TheFooterArea -->\n</div>\n";

/***/ },
/* 79 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FlexiHolderVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 80 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FlexiHolderVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	module.exports = (function () {

		var aa = {};
		aa.global = aaGlobalee;

		//	Class properties.
		// {
		aa.myVcName = "FlexiHolderVcc";
		aa.refNameSelf = "FlexiHolderVcc_CtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;
		//}

		//	Scaffold class.
		//{
		function MyClass(sscc, stateNg, stateParamsNg, toolbox) {
			if (typeof sscc === "object") {
				sscc.thisc = this;
				var sstt = this;
				sstt.sscc = sscc;
				sstt.stateNg = stateNg;
				sstt.stateParamsNg = stateParamsNg;
				sstt.toolbox = toolbox;
				sstt._setup();
			}
		}

		aa.MyClass = aa.global.ooUtils.scaffoldClass(aa.myVcName, MyClass, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p.positionFooterAbovePlayer = function () {
			var sstt = this;
			sstt._positionFooterAbovePlayer();
		};

		p.positionFooterNormally = function () {
			var sstt = this;
			sstt._positionFooterNormally();
		};

		p.buildLayout = function (usedSlotsList) {
			var sstt = this;
			sstt._buildLayout(usedSlotsList);
		};

		//}	

		//	================================================================
		//	STANDARD PRIVATE METHODS:
		//{	
		p._setup = function () {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssdd = {};
			sscc.ssvv = {};

			sstt._setMyNames();
			sstt._initMockData();
			sstt._initDatas();
			sstt._customSetup();
		};

		p._setMyNames = function () {
			var sstt = this;
			var sscc = this.sscc;

			sscc.ssdd.myVcName = aa.myVcName;
			sscc.ssvv.myCssName = aa.myVcName;
		};

		p._initMockData = function () {
			var sstt = this;
			var sscc = this.sscc;
			sstt.mockData = {};
		};

		p._initDatas = function () {
			var sstt = this;
			var sscc = this.sscc;
			sscc.ssvv.domSwitches = {};
		};

		p._customSetup = function () {
			var sstt = this;
			var sscc = this.sscc;

			sstt._buildLayout("INIT");
		};
		//}

		//	================================================================
		//	CUSTOM PRIVATE METHODS:
		//{	

		p._positionFooterAbovePlayer = function () {
			var sstt = this;
			sstt.sscc.ssvv.footerOffsetCssName = "OffsetFooterAbovePlayer";
		};

		p._positionFooterNormally = function () {
			var sstt = this;
			sstt.sscc.ssvv.footerOffsetCssName = "";
		};

		p._buildLayout = function (usedSlotsList) {
			var sstt = this;
			if (usedSlotsList === "INIT") {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);
			} else {
				sstt._initOnMap();
				sstt._setSwitchesMap(true);
				sstt._setSlotsInOnMap(usedSlotsList);
				sstt._setSpacesInOnMap();
				sstt._setSwitchesMap(false);
			}

			sstt.sscc.ssvv.domSwitches = sstt.toolbox.cloneMap(sstt.switchesMap);
		};

		p._setSlotsInOnMap = function (usedSlotsList) {
			var sstt = this;
			var vv = {};

			//	For testing:
			//{
			vv.usedSlotsList = usedSlotsList || ["WellPrmStrata_MainSpc_MainSlot", "WellPrmStrata_MainSpc_UpN3Slot", "WellPrmStrata_MainSpc_UpN2Slot", "WellPrmStrata_MainSpc_UpN1Slot"];
			//}

			vv.usedSlotsListLen = vv.usedSlotsList.length;
			for (vv.idx = 0; vv.idx < vv.usedSlotsListLen; vv.idx++) {
				sstt.onMap[vv.usedSlotsList[vv.idx]] = true;
			}
		};

		p._setSpacesInOnMap = function () {
			var sstt = this;
			var vv = {};

			//----------------------------------------------------------
			//	"Outdenting" inorder to show child to parent dependency:

			sstt.onMap.WellPrmStrata_MainSpc = sstt.onMap.WellPrmStrata_MainSpc_MainSlot || sstt.onMap.WellPrmStrata_MainSpc_UpN3Slot || sstt.onMap.WellPrmStrata_MainSpc_UpN2Slot || sstt.onMap.WellPrmStrata_MainSpc_UpN1Slot || sstt.onMap.WellPrmStrata_MainSpc_DnN1Slot || sstt.onMap.WellPrmStrata_MainSpc_DnN2Slot || sstt.onMap.WellPrmStrata_MainSpc_DnN3Slot;
			sstt.onMap.WellPrmStrata_LfN2Spc = sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || sstt.onMap.WellPrmStrata_LfN2Spc_DnN2Slot || sstt.onMap.WellPrmStrata_LfN2Spc_DnN3Slot;
			sstt.onMap.WellPrmStrata_LfN1Spc = sstt.onMap.WellPrmStrata_LfN1Spc_DnN1Slot || sstt.onMap.WellPrmStrata_LfN1Spc_DnN2Slot || sstt.onMap.WellPrmStrata_LfN1Spc_DnN3Slot;
			sstt.onMap.WellPrmStrata_RtN1Spc = sstt.onMap.WellPrmStrata_RtN1Spc_DnN1Slot || sstt.onMap.WellPrmStrata_RtN1Spc_DnN2Slot || sstt.onMap.WellPrmStrata_RtN1Spc_DnN3Slot;
			sstt.onMap.WellPrmStrata_RtN2Spc = sstt.onMap.WellPrmStrata_RtN2Spc_DnN1Slot || sstt.onMap.WellPrmStrata_RtN2Spc_DnN2Slot || sstt.onMap.WellPrmStrata_RtN2Spc_DnN3Slot;

			sstt.onMap.WellPrmStrata = sstt.onMap.WellPrmStrata_MainSpc || sstt.onMap.WellPrmStrata_LfN2Spc || sstt.onMap.WellPrmStrata_LfN1Spc || sstt.onMap.WellPrmStrata_RtN1Spc || sstt.onMap.WellPrmStrata_RtN2Spc;

			sstt.onMap.Well = sstt.onMap.WellPrmStrata || sstt.onMap.Well_UpN3Slot || sstt.onMap.Well_UpN2Slot || sstt.onMap.Well_UpN1Slot || sstt.onMap.Well_DnN1Slot || sstt.onMap.Well_DnN2Slot || sstt.onMap.Well_DnN3Slot;

			sstt.onMap.FlexiAreaPrmStrata_LfN1Spc = sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN1Slot || sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN2Slot || sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN3Slot;
			sstt.onMap.FlexiAreaPrmStrata_RtN1Spc = sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN1Slot || sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN2Slot || sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN3Slot;

			sstt.onMap.FlexiAreaPrmStrata = sstt.onMap.Well || sstt.onMap.FlexiAreaPrmStrata_LfN1Spc || sstt.onMap.FlexiAreaPrmStrata_RtN1Spc;

			sstt.onMap.FlexiArea = sstt.onMap.FlexiAreaPrmStrata || sstt.onMap.FlexiArea_UpN3Slot || sstt.onMap.FlexiArea_UpN2Slot || sstt.onMap.FlexiArea_UpN1Slot || sstt.onMap.FlexiArea_DnN1Slot || sstt.onMap.FlexiArea_DnN2Slot || sstt.onMap.FlexiArea_DnN3Slot;

			sstt.onMap.TheFooterArea = sstt.onMap.TheFooterArea_DnN1Slot || sstt.onMap.TheFooterArea_DnN2Slot || sstt.onMap.TheFooterArea_DnN3Slot;

			sstt.onMap.TheTopFixedPosArea = sstt.onMap.TheTopFixedPosArea_UpN3Slot || sstt.onMap.TheTopFixedPosArea_UpN2Slot || sstt.onMap.TheTopFixedPosArea_UpN1Slot;
		};

		p._initOnMap = function () {
			var sstt = this;
			sstt.onMap = {};
		};

		p._setSwitchesMap = function (defaultt) {
			var sstt = this;
			sstt.switchesMap = {
				FlexiArea: sstt.onMap.FlexiArea || defaultt,

				FlexiAreaPrmStrata: sstt.onMap.FlexiAreaPrmStrata || defaultt,

				Well: sstt.onMap.Well || defaultt,

				WellPrmStrata: sstt.onMap.WellPrmStrata || defaultt,

				WellPrmStrata_MainSpc: sstt.onMap.WellPrmStrata_MainSpc || defaultt, /* Typically Wells main col */

				WellPrmStrata_MainSpc_MainSlot: sstt.onMap.WellPrmStrata_MainSpc_MainSlot || defaultt,
				WellPrmStrata_MainSpc_UpN3Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN3Slot || defaultt,
				WellPrmStrata_MainSpc_UpN2Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN2Slot || defaultt,
				WellPrmStrata_MainSpc_UpN1Slot: sstt.onMap.WellPrmStrata_MainSpc_UpN1Slot || defaultt,
				WellPrmStrata_MainSpc_DnN1Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN1Slot || defaultt,
				WellPrmStrata_MainSpc_DnN2Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN2Slot || defaultt,
				WellPrmStrata_MainSpc_DnN3Slot: sstt.onMap.WellPrmStrata_MainSpc_DnN3Slot || defaultt,

				WellPrmStrata_LfN2Spc: sstt.onMap.WellPrmStrata_LfN2Spc || defaultt, /* Typically Wells outer left col */

				WellPrmStrata_LfN2Spc_DnN1Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || defaultt,
				WellPrmStrata_LfN2Spc_DnN2Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN1Slot || defaultt,
				WellPrmStrata_LfN2Spc_DnN3Slot: sstt.onMap.WellPrmStrata_LfN2Spc_DnN3Slot || defaultt,

				WellPrmStrata_LfN1Spc: sstt.onMap.WellPrmStrata_LfN1Spc || defaultt, /* Typically Wells inner left col */

				WellPrmStrata_LfN1Spc_DnN1Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN1Slot || defaultt,
				WellPrmStrata_LfN1Spc_DnN2Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN2Slot || defaultt,
				WellPrmStrata_LfN1Spc_DnN3Slot: sstt.onMap.WellPrmStrata_LfN1Spc_DnN3Slot || defaultt,

				WellPrmStrata_RtN1Spc: sstt.onMap.WellPrmStrata_RtN1Spc || defaultt, /* Typically Wells inner right col */

				WellPrmStrata_RtN1Spc_DnN1Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN1Slot || defaultt,
				WellPrmStrata_RtN1Spc_DnN2Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN2Slot || defaultt,
				WellPrmStrata_RtN1Spc_DnN3Slot: sstt.onMap.WellPrmStrata_RtN1Spc_DnN3Slot || defaultt,

				WellPrmStrata_RtN2Spc: sstt.onMap.WellPrmStrata_RtN2Spc || defaultt, /* Typically Wells outer right col */

				WellPrmStrata_RtN2Spc_DnN1Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN1Slot || defaultt,
				WellPrmStrata_RtN2Spc_DnN2Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN2Slot || defaultt,
				WellPrmStrata_RtN2Spc_DnN3Slot: sstt.onMap.WellPrmStrata_RtN2Spc_DnN3Slot || defaultt,

				Well_UpN3Slot: sstt.onMap.Well_UpN3Slot || defaultt,
				Well_UpN2Slot: sstt.onMap.Well_UpN2Slot || defaultt,
				Well_UpN1Slot: sstt.onMap.Well_UpN1Slot || defaultt,

				Well_DnN1Slot: sstt.onMap.Well_DnN1Slot || defaultt,
				Well_DnN2Slot: sstt.onMap.Well_DnN2Slot || defaultt,
				Well_DnN3Slot: sstt.onMap.Well_DnN3Slot || defaultt,

				FlexiAreaPrmStrata_LfN1Spc: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc || defaultt, /* Typically (innermost) col left of well */

				FlexiAreaPrmStrata_LfN1Spc_DnN1Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN1Slot || defaultt,
				FlexiAreaPrmStrata_LfN1Spc_DnN2Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN2Slot || defaultt,
				FlexiAreaPrmStrata_LfN1Spc_DnN3Slot: sstt.onMap.FlexiAreaPrmStrata_LfN1Spc_DnN3Slot || defaultt,

				FlexiAreaPrmStrata_RtN1Spc: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc || defaultt, /* Typically (innermost) col right of well */

				FlexiAreaPrmStrata_RtN1Spc_DnN1Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN1Slot || defaultt,
				FlexiAreaPrmStrata_RtN1Spc_DnN2Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN2Slot || defaultt,
				FlexiAreaPrmStrata_RtN1Spc_DnN3Slot: sstt.onMap.FlexiAreaPrmStrata_RtN1Spc_DnN3Slot || defaultt,

				FlexiArea_UpN3Slot: sstt.onMap.FlexiArea_UpN3Slot || defaultt,
				FlexiArea_UpN2Slot: sstt.onMap.FlexiArea_UpN2Slot || defaultt,
				FlexiArea_UpN1Slot: sstt.onMap.FlexiArea_UpN1Slot || defaultt,

				FlexiArea_DnN1Slot: sstt.onMap.FlexiArea_DnN1Slot || defaultt,
				FlexiArea_DnN2Slot: sstt.onMap.FlexiArea_DnN2Slot || defaultt,
				FlexiArea_DnN3Slot: sstt.onMap.FlexiArea_DnN3Slot || defaultt,

				TheTopFixedPosArea: sstt.onMap.TheTopFixedPosArea || defaultt,

				TheTopFixedPosArea_UpN3Slot: sstt.onMap.TheTopFixedPosArea_UpN3Slot || defaultt,
				TheTopFixedPosArea_UpN2Slot: sstt.onMap.TheTopFixedPosArea_UpN2Slot || defaultt,
				TheTopFixedPosArea_UpN1Slot: sstt.onMap.TheTopFixedPosArea_UpN1Slot || defaultt,

				TheFooterArea: sstt.onMap.TheFooterArea || defaultt,

				TheFooterArea_DnN1Slot: sstt.onMap.TheFooterArea_DnN1Slot || defaultt,
				TheFooterArea_DnN2Slot: sstt.onMap.TheFooterArea_DnN2Slot || defaultt,
				TheFooterArea_DnN3Slot: sstt.onMap.TheFooterArea_DnN3Slot || defaultt
			};
			aa.global.flexiHolderSwitchesMap = sstt.switchesMap;
		};

		return aa.MyClass;
	})();

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginCorePanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(82);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(84);
	aa.LinkFncClass = __webpack_require__(85);
	aa.CtrlClass = __webpack_require__(86);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "LoginCorePanelVcc";
	aa.thisMod = aa.LoginCorePanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctLoginCorePanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "sessionService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/LoginCorePanelVcc/styles/LoginCorePanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/LoginCorePanelVcc/styles/LoginCorePanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: LoginCorePanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-login-core-panel-vcc {\n  display: block;\n}\n.LoginCorePanelVcc .forgotPassword {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #00d;\n/* Layout */\n  margin-top: 6px;\n/* Style */\n  background-color: transparent;\n  border: none;\n}\n", ""]);

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: LoginCorePanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\n\t<ng-form class=\"StndLoginForm\"\n\t\t\tname=\"StndLoginForm\"\n\t\t\tnovalidate\t\t\n\t>\n\t\t\n\t\t<fieldset>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"InnerFieldset\">\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"LoginIdfier\" class=\"sr-only\">\n\t\t\t\t\t\tEmail Address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"email\" \n\t\t\t\t\t\t\tid=\"LoginIdfier\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"LoginIdfier\" \n\t\t\t\t\t\t\tminlength=\"6\"\n\t\t\t\t\t\t\tmaxlength=\"100\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Email Address\"\n\t\t\t\t\t\t\tng-model=\"loc.loginIdfier\" \n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.email\">Invalid email address.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"MyPassword\" class=\"sr-only\">\n\t\t\t\t\t\tPassword\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"password\" \n\t\t\t\t\t\t\tid=\"MyPassword\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"MyPassword\" \n\t\t\t\t\t\t\tzz-minlength=\"8\"\n\t\t\t\t\t\t\tmaxlength=\"30\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t\t\t\tzz-data-drct_validate_password_adc\n\t\t\t\t\t\t\tng-model=\"loc.password\" zz-validate-password-characters \n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.MyPassword.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.MyPassword.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t\t <!---\n\t\t\t\t\t\t <div style=\"max-width: 320px;\" zz-ng-if=\"StndLoginForm.MyPassword.$error.passwordChars\"></div>\n\t\t\t\t\t\t --->\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<input type=\"hidden\" name=\"handoffSpecId\" value=\"{{loc.handoffSpecId}}\">\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t</fieldset>\n\n\t\t\n\n\t</ng-form>\n\n\t<button class=\"forgotPassword\"\n\t\tng-if=\"!loc.isLoggedInUser\"\n\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\"notice\": {\n\t\t\t\t\"noticeName\": \"LoginForgotPasswordButtonInDialog_clicked\",\n\t\t\t\t\"vc\": \"Header4StndUseVcc\",\n\t\t\t\t\"context\": \"\"\n\t\t\t}\n\t\t}'\n\t>\n\t\tForgot Password\n\t</button>\t\n\n</div>\n</div>\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginCorePanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginCorePanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "LoginCorePanelVcc";
		aa.myClassName = "LoginCorePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService) {

			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");

			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{
		p.zz_handleEmailLoginFormSubmit = function () {
			var that = this;
			that._handleEmailLoginFormSubmitAsync(that.scopeNg.loc.loginIdfier, that.scopeNg.loc.password);
		};

		p.handleEmailLoginFormSubmitAsync = function callee$1$0(loginIdfier, password) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.loginIdfier = that.scopeNg.loc.loginIdfier;
						vv.password = that.scopeNg.loc.password;

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - RUNNING:  " + vv.loginIdfier + " " + vv.password + "^");

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - that  ", that);

						context$2$0.prev = 6;

						vv.promise1 = that.sessionService.logInToRemoteSessionAsync(vv.loginIdfier, vv.password);
						context$2$0.next = 10;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 10:
						vv.result = context$2$0.sent;
						// No need to retain returned result.

						if (typeof vv.result === "string") {
							vv.sessionId = that.sessionService.getSessionIdForRemote();
							that.scopeNg.loc.remoteSessionId = vv.sessionId;

							console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - Login succeeded.: ", vv.result);
							vv.returnn = { status: "succeeded", sessionId: vv.sessionId, messageForDisplay: "login succeeded." };
						} else {
							console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - Login failed.: ", vv.result);
							vv.returnn = { status: "failed", errorr: vv.result, messageForDisplay: "login failed." };
						}

						context$2$0.next = 18;
						break;

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0["catch"](6);

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - Something went wrong.: ", context$2$0.t0);
						vv.returnn = { status: "failed", errorr: context$2$0.t0, messageForDisplay: "sorry, something went wrong." };

					case 18:
						return context$2$0.abrupt("return", vv.returnn);

					case 19:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[6, 14]]);
		};

		//}	

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function setup() {
			var that = this;
			///alert(">>> LoginCorePanelVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> LoginCorePanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function () {
			var that = this;
			/* FOR NON TESTING */
			that.scopeNg.loc.loginIdfier = "";
			that.scopeNg.loc.password = ""
			/* */

			/* FOR TESTING: *
	  that.scopeNg.loc.loginIdfier = 'jsimonian+test_@live365.com';
	  that.scopeNg.loc.password = 'Aaaa-111'
	  * */
			;
		};

		p._getSession = function getStation(id) {
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};

		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
		};

		p.zz_handleEmailLoginFormSubmitAsync = function callee$1$0(loginIdfier, password) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - RUNNING:  " + loginIdfier + " " + password + "^");
						context$2$0.prev = 3;

						vv.promise1 = that.sessionService.logInToRemoteSessionAsync(loginIdfier, password);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.voidd = context$2$0.sent;
						// No need to retain returned result.

						vv.sessionId = that.sessionService.getSessionIdForRemote();
						that.scopeNg.loc.remoteSessionId = vv.sessionId;

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - SUCCESS ", vv.sessionId);
						that._notifyMediatorOfLoginSuccess(vv.sessionId);
						/// return vv.result; // No Return. End of this async road.
						context$2$0.next = 17;
						break;

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0["catch"](3);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 17:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[3, 14]]);
		};

		p.zz_notifyMediatorOfLoginSuccess = function (sessionId) {
			var that = this;
			var vv = {};
			vv.pkgForMediator = {
				notice: {
					noticeName: "Login_succeeded",
					vc: aa.myVcName,
					context: "",
					sessionId: sessionId,
					handoffSpecId: that.scopeNg.loc.handoffSpecId
				}
			};
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId = undefined;
			that.mediator.receiveNotice("", vv.pkgForMediator);
		};

		//}

		return aa.MyClass;
	})();

	///console.dog('>>> FROM _handleEmailLoginFormSubmitAsync - FAILED - e:', e);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(88);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(90);
	aa.LinkFncClass = __webpack_require__(91);
	aa.CtrlClass = __webpack_require__(92);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "LoginPanelVcc";
	aa.thisMod = aa.LoginPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctLoginPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/LoginPanelVcc/styles/LoginPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/LoginPanelVcc/styles/LoginPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: LoginPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-login-panel-vcc {\n  display: block;\n}\n.MdDialogMngrVc_ .LoginPanelVcc {\n/* Layout */\n  width: 100%;\n}\n", ""]);

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: LoginPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\n\t<drct-facebook-login-button-vcc\n\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\tdata-go_dude = '{{loc.goDude}}'\n\t></drct-facebook-login-button-vcc>\n\t\n\t<hr class=\"form-hr\">\n\t\n\t<drct-login-core-panel-vcc \n\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t>\n\t</drct-login-core-panel-vcc>\n\n</div>\n</div>\n";

/***/ },
/* 91 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
		};

		return LinkFncClass;
	})();

/***/ },
/* 92 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: LoginPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "LoginPanelVcc";
		aa.myClassName = "LoginPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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
			///alert(">>> LoginPanelVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			that.scopeNg.loc.goDude = "truee";
			console.dog(">>> LoginPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function () {
			var that = this;
		};

		//}

		return aa.MyClass;
	})();

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupCorePanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(94);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(96);
	aa.LinkFncClass = __webpack_require__(97);
	aa.CtrlClass = __webpack_require__(98);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "SignupCorePanelVcc";
	aa.thisMod = aa.SignupCorePanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctSignupCorePanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "sessionService", "toolboxService", "usersService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/SignupCorePanelVcc/styles/SignupCorePanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/SignupCorePanelVcc/styles/SignupCorePanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: SignupCorePanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-signup-core-panel-vcc {\n  display: block;\n}\n.SignupCorePanelVcc .forgotPassword {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #00d;\n/* Layout */\n  margin-top: 6px;\n/* Style */\n  background-color: transparent;\n  border: none;\n}\n.SignupCorePanelVcc .GenderGroup {\n/* Layout */\n  z-index: 1000;\n}\n.SignupCorePanelVcc .Label_for_genderGroup {\n/* Layout */\n  padding: 5px 8px 5px 2px;\n/* Style */\n  border_: solid 1px #f00;\n}\n.SignupCorePanelVcc .TOSCheckOffZone {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n.SignupCorePanelVcc .TOSCheckOffInput {\n/* Layout */\n  min-width: 15px;\n  margin-right: 3px;\n  z-index: 10;\n}\n", ""]);

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: SignupCorePanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\n\t<form class=\"StndLoginForm\"\n\t\t\tname=\"StndLoginForm\"\n\t>\n\t\t\n\t\t<fieldset>\n\t\t\n\t\t\t<div class=\"InnerFieldset\">\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"FirstName\" class=\"sr-only\">\n\t\t\t\t\t\tFirst name\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"text\" \n\t\t\t\t\t\t\tid=\"FirstName\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"FirstName\" \n\t\t\t\t\t\t\tminlength=\"2\"\n\t\t\t\t\t\t\tmaxlength=\"100\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"First Name\"\n\t\t\t\t\t\t\tng-model=\"loc.firstName\"\n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.FirstName.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.FirstName.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"LastName\" class=\"sr-only\">\n\t\t\t\t\t\tLast name\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"text\" \n\t\t\t\t\t\t\tid=\"LastName\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"LastName\" \n\t\t\t\t\t\t\tminlength=\"2\"\n\t\t\t\t\t\t\tmaxlength=\"60\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Last Name\"\n\t\t\t\t\t\t\tng-model=\"loc.lastName\"\n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.LastName.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.LastName.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"LoginIdfier\" class=\"sr-only\">\n\t\t\t\t\t\tEmail Address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"email\" \n\t\t\t\t\t\t\tid=\"LoginIdfier\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"LoginIdfier\" \n\t\t\t\t\t\t\tminlength=\"6\"\n\t\t\t\t\t\t\tmaxlength=\"60\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Email Address\"\n\t\t\t\t\t\t\tng-model=\"loc.loginIdfier\" \n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.email\">Invalid email address.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.LoginIdfier.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"MyPassword\" class=\"sr-only\">\n\t\t\t\t\t\tPassword\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"password\" \n\t\t\t\t\t\t\tid=\"MyPassword\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"MyPassword\" \n\t\t\t\t\t\t\tminlength=\"8\"\n\t\t\t\t\t\t\tmaxlength=\"30\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t\t\t\tdata-drct_validate_password_adc\n\t\t\t\t\t\t\tng-model=\"loc.password\" validate-password-characters \t\t\n\t\t\t\t\t>\n\t\t\t\t\t<!--data-drct_validate_password_adc-->\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.MyPassword.$error.passwordChars\">Your 8+ characters password must contain uppercase, lowercase, numeric and special characters.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.MyPassword.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndLoginForm.MyPassword.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t </div>\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"MyYearOfBirth\">\n\t\t\t\t\t</label>\n\n\t\t\t\t\t<select name=\"MyYearOfBirth\" id=\"MyYearOfBirth\" class=\"form-select\" ng-model=\"loc.yearOfBirth\" required>\n\t\t\t\t\t\t<option ng-selected=\"{{ birthyear.text == 'Year Of Birth' }}\" ng-repeat=\"birthyear in loc.birthyears\" value=\"{{birthyear.value}}\">{{birthyear.text}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"FieldSetItem GenderGroup\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"radio\" ng-model=\"loc.gender\" id=\"genderMale\" class=\"Choice_for_genderGroup\" name=\"MyGender\" value=\"M\" required><label  class=\"form-active-checkbox-label Label_for_genderGroup\" for=\"genderMale\">Male</label>\t\n\t\t\t\t\t<input type=\"radio\" ng-model=\"loc.gender\" id=\"genderFemale\" class=\"Choice_for_genderGroup\" name=\"MyGender\" value=\"F\"><label class=\"form-active-checkbox-label Label_for_genderGroup\" for=\"genderFemale\">Female</label>\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem TOSCheckOffZone\">\t\n\t\t\t\t\t<input type=\"checkbox\" \n\t\t\t\t\t\tclass=\"TOSCheckOffInput\"\n\t\t\t\t\t\tid=\"TOSCheckoff\" \n\t\t\t\t\t\tname=\"TOSCheckoff\" \n\t\t\t\t\t\tng-model=\"loc.isTosChecked\"\t\n\t\t\t\t\t\trequired\n\t\t\t\t\t/>\t\t\t\n\t\t\t\t\t<label  class=\"form-active-checkbox-label TOSCheckoffLabel\" for=\"TOSCheckoff\">I've read and accept the <a href=\"TermsOfService.pdf\" target=\"_blank\">Terms of Service</a></label>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<input type=\"hidden\" name=\"handoffSpecId\" value=\"{{loc.handoffSpecId}}\">\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t</fieldset>\n\t\t<!-- Invalid? {{StndLoginForm.$invalid}} -->\n\t\t\n\n\t</form>\n</div>\n\n";

/***/ },
/* 97 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupCorePanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupCorePanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "SignupCorePanelVcc";
		aa.myClassName = "SignupCorePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService, toolbox, usersService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that.usersService = usersService;
				that.toolbox = toolbox;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{

		p.handleSignupFormSubmit = function () {
			var that = this;
			///alert(that.scopeNg.loc.loginIdfier)
			that._handleSignupFormSubmitAsync(that.scopeNg.loc.loginIdfier, that.scopeNg.loc.password, that.scopeNg.loc.firstName, that.scopeNg.loc.lastName, that.scopeNg.loc.yearOfBirth, that.scopeNg.loc.gender);
		};

		p.handleEmailSignupFormSubmitAsync = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.loginIdfier = that.scopeNg.loc.loginIdfier;
						vv.password = that.scopeNg.loc.password;
						vv.firstName = that.scopeNg.loc.firstName;
						vv.lastName = that.scopeNg.loc.lastName;
						vv.yearOfBirth = that.scopeNg.loc.yearOfBirth;
						vv.gender = that.scopeNg.loc.gender;

						console.dog(">>> FROM _handleSignupFormSubmitAsync - RUNNING:  " + vv.loginIdfier + " " + vv.password + " " + vv.firstName + "  " + vv.lastName + " " + vv.yearOfBirth + " " + vv.gender + "^");
						context$2$0.prev = 9;

						//{ 1.  Register user with submitted info: loginIdfier (email address), password, (user's full) name.
						vv.promise1 = that.usersService.registerWithIdfierAsync(vv.loginIdfier, vv.password, vv.firstName, vv.lastName, vv.yearOfBirth, vv.gender);
						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 13:
						vv.result = context$2$0.sent;
						// Note, result is not utilized.

						//}
						//{ 2.  Return info per success or failure.
						if (vv.result.status === "succeeded") {

							console.dog(">>> FROM handleEmailSignupFormSubmitAsync - Login succeeded.: ", vv.result);
							vv.returnn = { status: "succeeded", idfier: "su_s1", sessionId: vv.sessionId, messageForDisplay: "registration succeeded." };
						} else if (vv.result.status === "failed") {
							vv.returnn = { status: "failed", idfier: "su_f1", errorr: vv.result.errorr, messageForDisplay: "sorry, something went wrong." };
						}
						//}

						context$2$0.next = 21;
						break;

					case 17:
						context$2$0.prev = 17;
						context$2$0.t0 = context$2$0["catch"](9);

						vv.returnn = { status: "failed", idfier: "su_f0", errorr: context$2$0.t0, messageForDisplay: "sorry, something went wrong." };
						console.dog(">>> FROM: handleEmailSignupFormSubmitAsync - final error");

					case 21:
						return context$2$0.abrupt("return", vv.returnn);

					case 22:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[9, 17]]);
		};

		//}	

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function setup() {
			var that = this;
			///alert(">>> SignupCorePanelVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> SignupCorePanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function () {
			var that = this;

			that.scopeNg.loc.birthyears = that._getBirthYearForView();

			/* FOR NON TESTING */
			that.scopeNg.loc.firstName = "";
			that.scopeNg.loc.lastName = "";
			that.scopeNg.loc.loginIdfier = "";
			that.scopeNg.loc.password = "";
			/* */

			/* FOR TESTING *
	  that.scopeNg.loc.firstName = 'Jerry';
	  that.scopeNg.loc.lastName = 'Sim';
	  that.scopeNg.loc.loginIdfier = 'jsimonian+test_@live365.com';
	  that.scopeNg.loc.password = 'Aaaa-111';
	  * */
		};

		p._getSession = function getStation(id) {
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};

		p._setScopeWatchers = function _setScopeWatchers() {};

		p._handleSignupFormSubmitAsync = function callee$1$0(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> FROM _handleSignupFormSubmitAsync - RUNNING:  " + loginIdfier + " " + password + " " + firstName + lastName + " " + yearOfBirth + " " + vv.gender + "^");
						context$2$0.prev = 3;

						//{ 1.  Register user with submitted info: loginIdfier (email address), password, (user's full) name.
						vv.promise1 = that.usersService.registerWithIdfierAsync(loginIdfier, password, firstName, lastName, yearOfBirth, gender);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;
						// Note, result is not utilized.
						//}

						//{ 2.  User should now be registerd, so automatically login user with loginIdfier and password.
						vv.promise1 = that.sessionService.logInToRemoteSessionAsync(loginIdfier, password);
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 11:
						vv.sessionId = context$2$0.sent;
						// No need to retain returned result.
						that.scopeNg.loc.remoteSessionId = vv.sessionId;
						console.dog(">>> FROM _handleSignupFormSubmitAsync - SUCCESS ", vv.sessionId);
						//}

						//{ 3. Return sessionId (in a wrapping object) to mediator.
						vv.returnn = { sessionId: vv.sessionId };
						return context$2$0.abrupt("return", vv.returnn);

					case 18:
						context$2$0.prev = 18;
						context$2$0.t0 = context$2$0["catch"](3);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 21:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[3, 18]]);
		};

		p._getBirthYearForView = function () {

			var that = this;
			var vv = {};

			vv.birthyears = that.toolbox.bsetBirthYear();

			console.dog(">>> SignupCorePanelVcc_CtrlClass._getBirthYearForView : ", vv.birthyear);

			return vv.birthyears;
		};
		//}

		return aa.MyClass;
	})();

	/* Stub */

	//}
	/// return vv.result; // No Return. End of this async road.

	///console.dog('>>> FROM _handleSignupFormSubmitAsync - FAILED - e:', e);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(100);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(102);
	aa.LinkFncClass = __webpack_require__(103);
	aa.CtrlClass = __webpack_require__(104);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "SignupPanelVcc";
	aa.thisMod = aa.SignupPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctSignupPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/SignupPanelVcc/styles/SignupPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/SignupPanelVcc/styles/SignupPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: SignupPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-signup-panel-vcc {\n  display: block;\n}\n.MdDialogMngrVc_ .SignupPanelVcc {\n/* Layout */\n  width: 100%;\n  min-height: 300px;\n}\n", ""]);

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: SignupPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\t<div class=\"form-info-text\">Anyone can easily listen to your school's station and discover your school's unique programs and learning environment.</div>\n\n\t<drct-facebook-login-button-vcc\n\t\tclass=\"SignupMode\"\n\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\tdata-go_dude = '{{loc.goDude}}'\n\t></drct-facebook-login-button-vcc>\n\t\n\t<hr class=\"form-hr\">\n\t\n\t<drct-signup-core-panel-vcc \n\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\tdata-go_dude = '{{loc.goDude}}'\n\t>\n\t</drct-signup-core-panel-vcc>\n\n</div>\n</div>\n";

/***/ },
/* 103 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
		};

		return LinkFncClass;
	})();

/***/ },
/* 104 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SignupPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "SignupPanelVcc";
		aa.myClassName = "SignupPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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
			///alert(">>> SignupPanelVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
			that.scopeNg.loc.goDude = "truee";
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;

			console.dog(">>> SignupPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function () {
			var that = this;
		};

		//}

		return aa.MyClass;
	})();

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ForgotPasswordPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(106);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(108);
	aa.LinkFncClass = __webpack_require__(109);
	aa.CtrlClass = __webpack_require__(110);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "ForgotPasswordPanelVcc";
	aa.thisMod = aa.ForgotPasswordPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctForgotPasswordPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "membersService", "sessionService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/ForgotPasswordPanelVcc/styles/ForgotPasswordPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/ForgotPasswordPanelVcc/styles/ForgotPasswordPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: ForgotPasswordPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-login-core-panel-vcc {\n  display: block;\n}\n.Header4StndUseVcc .ForgotPasswordPanelVcc {\n/* Style */\n  color: #fff;\n}\n", ""]);

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: ForgotPasswordPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\n\t\n\t<div class=\"form-info-text\">We will need your email address in order to send you the password {{loc.remoteSessionId}}</div>\n\n\n\t<ng-form class=\"StndLoginForm\"\n\t\t\tname=\"StndLoginForm\"\n\t\t\tnovalidate\t\t\n\t>\n\t\t\n\t\t<fieldset>\n\n\t\t\t\n\t\t\t<div class=\"InnerFieldset\">\n\t\t\t\t\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"LoginIdfier\" class=\"sr-only\">\n\t\t\t\t\t\tEmail Address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"email\" \n\t\t\t\t\t\t\tid=\"LoginIdfier\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"LoginIdfier\" \n\t\t\t\t\t\t\tminlength=\"4\"\n\t\t\t\t\t\t\tmaxlength=\"100\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"Your Email Address\"\n\t\t\t\t\t\t\tng-model=\"loc.loginIdfier\" \n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.LoginIdfier.$error.email\">Invalid email address.</div>\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.LoginIdfier.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div ng-if=\"StndLoginForm.LoginIdfier.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<input type=\"hidden\" name=\"handoffSpecId\" value=\"{{loc.handoffSpecId}}\">\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t</fieldset>\n\n\t\t\n\n\t</ng-form>\n</div>\n</div>\n";

/***/ },
/* 109 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ForgotPasswordPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ForgotPasswordPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "ForgotPasswordPanelVcc";
		aa.myClassName = "ForgotPasswordPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, membersService, sessionService) {

			console.dog(">>> ForgotPasswordPanelVcc_CtrlClass held as MyClass");

			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				///that.toolbox = toolbox
				that.membersService = membersService;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{

		p.handleForgotPasswordFormSubmitAsync = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.email = that.scopeNg.loc.loginIdfier;

						///alert(vv.email)

						//vv.type = that.scopeNg.loc.purposing.type

						console.dog(">>> FROM _handleForgotPasswordFormSubmitAsync - RUNNING:  " + vv.email + "^");
						console.dog(">>> FROM _handleForgotPasswordFormSubmitAsync - that  ", that);

						context$2$0.prev = 5;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that._postToForgotPasswordService(vv.email));

					case 8:
						vv.shareServiceResponse = context$2$0.sent;

						that.scopeNg.$apply();

						return context$2$0.abrupt("return", { status: "succeeded", messageForDisplay: "Thank you for your submission. You will be receiving an email" });

					case 13:
						context$2$0.prev = 13;
						context$2$0.t0 = context$2$0["catch"](5);
						return context$2$0.abrupt("return", { status: "failed", messageForDisplay: "Sorry, something went wrong." });

					case 16:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[5, 13]]);
		};

		//}	

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._postToForgotPasswordService = function callee$1$0(email) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.next = 4;
						return _regeneratorRuntime.awrap(that.membersService.forgotPasswordItem(email));

					case 4:
						vv.postResponse = context$2$0.sent;

						console.dog(">>> ForgotPasswordPanelVcc_CtrlClass._postToForgotPasswordService : ", vv.postResponse);

						return context$2$0.abrupt("return", vv.postResponse);

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function setup() {
			var that = this;
			///alert(">>> ForgotPasswordPanelVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
			that._setScopeWatchers();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
			console.dog(">>> ForgotPasswordPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function () {
			var that = this;
			that.scopeNg.loc.userEmail = "webdev+02@live365.com";
			that.scopeNg.loc.password = "test";
		};

		p._getSession = function getStation(id) {
			var that = this;
			var vv = {};
			vv.data = that.stationsService.getStation(id);

			return vv.data;
		};

		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;
		};

		//}

		return aa.MyClass;
	})();

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailSharePanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(112);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(114);
	aa.LinkFncClass = __webpack_require__(115);
	aa.CtrlClass = __webpack_require__(116);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "EmailSharePanelVcc";
	aa.thisMod = aa.EmailSharePanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctEmailSharePanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    /// vv.controller = ['$scope', aa.CtrlClass];
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", "noticesByEmailService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbPurposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};

	//}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/EmailSharePanelVcc/styles/EmailSharePanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/EmailSharePanelVcc/styles/EmailSharePanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: EmailSharePanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-email-shared-panel-vcc {\n  display: block;\n}\n.EmailSharePanelVcc .ItemName_in_EmailShare {\n/* Layout */\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.EmailSharePanelVcc .ItemNameLabel_in_EmailShare {\n/* Style */\n  text-transform: uppercase;\n}\n.EmailSharePanelVcc .ItemLogoImgHolder_in_EmailShare {\n/* Layout */\n  display: inline-block;\n  width: 150px;\n  margin: 0 10px 10px 0;\n}\n.EmailSharePanelVcc .ItemLogoImg_in_EmailShare {\n/* Layout */\n  width: 150px;\n}\n.EmailSharePanelVcc .ItemDescription_in_EmailShare {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.Header4StndUseVcc .EmailSharePanelVcc {\n/* Style */\n  color: #fff;\n}\n", ""]);

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: EmailSharePanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\n\t<ng-form class=\"StndEmailForm\"\n\t\t\tname=\"StndEmailForm\"\n\t\t\tnovalidate\t\t\n\t>\n\t\t<fieldset>\n\t\t\t<div class=\"InnerFieldset\">\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"EmailRecipient\" class=\"sr-only\">\n\t\t\t\t\t\tRecipient's Email Address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\ttype=\"email\" \n\t\t\t\t\t\t\tid=\"EmailRecipient\" \n\t\t\t\t\t\t\tname=\"EmailRecipient\" \n\t\t\t\t\t\t\tminlength=\"4\"\n\t\t\t\t\t\t\tmaxlength=\"30\"\n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tng-model=\"loc.EmailRecipient\"\n\t\t\t\t\t\t\tplaceholder=\"To Email Address\"\n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div ng-if=\"StndEmailForm.EmailRecipient.$error.email\">Invalid email address.</div>\n\t\t\t\t\t\t <div ng-if=\"StndEmailForm.EmailRecipient.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div ng-if=\"StndEmailForm.EmailRecipient.$error.maxlength\">Input too long.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- No API for this field\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"EmailMessage\" class=\"form-label\">\n\t\t\t\t\t\tMESSAGE\n\t\t\t\t\t</label>\n\n\t\t\t\t\t<textarea ng-model=\"messageArea\" ng-trim=\"false\" minlength=\"2\" maxlength=\"200\" class=\"form-textarea\" required name=\"EmailMessage\" id=\"EmailMessage\" placeholder=\"MESSAGE\"></textarea>\n\t\t\t\t\t<div>{{200 - messageArea.length}} characters left</div>\n\t\t\t\t\t<div ng-if=\"StndEmailForm.EmailMessage.$error.minlength\">Input too short.</div>\n\t\t\t\t\t \n\t\t\t\t</div>\n\t\t\t\t-->\n\n\t\t\t\t<hr class=\"form-hr-2\">\n\n\t\t\t\t<div class=\"form-info\">\n\t\t\t\t\t<div class=\"ItemLogoImgHolder_in_EmailShare\">\n\t\t\t\t\t\t<img src=\"{{loc.picture}}\" alt=\"Logo for project named {{loc.name}}\" class=\"ItemLogoImg_in_EmailShare\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ItemName_in_EmailShare\">\n\t\t\t\t\t\t<span class=\"ItemNameLabel_in_EmailShare\">{{loc.nameLabel}}</span>:  {{loc.name}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ItemDescription_in_EmailShare\">\n\t\t\t\t\t{{loc.description}}\n\t\t\t\t</div>\n\n\t\t\t\t<input type=\"hidden\" name=\"handoffSpecId\" value=\"{{loc.handoffSpecId}}\">\n\t\t\t</div>\n\t\t</fieldset>\n\n\t</ng-form>\n</div>\n</div>\n";

/***/ },
/* 115 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailSharePanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailShareVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "EmailSharePanelVcc";
		aa.myClassName = "EmailSharePanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox, noticesByEmailService) {
			console.dog(">>> EmailShareVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;
				that.noticesByEmailService = noticesByEmailService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		p.handleEmailShareFormSubmitAsync = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						//vv.EmailSender = that.scopeNg.loc.EmailSender
						//vv.EmailMessage = that.scopeNg.loc.EmailMessage
						vv.stationId = that.scopeNg.loc.purposing.stationId;
						vv.playlistId = that.scopeNg.loc.purposing.playlistId;
						vv.resourceId = that.scopeNg.loc.purposing.trackUid;
						vv.EmailRecipientArray = [that.scopeNg.loc.EmailRecipient];
						//vv.type = that.scopeNg.loc.purposing.type

						console.dog(">>> FROM _handleEmailShareFormSubmitAsync - RUNNING:  " + vv.EmailSender + " " + vv.EmailRecipient + "^");
						console.dog(">>> FROM _handleEmailShareFormSubmitAsync - that  ", that);

						context$2$0.prev = 8;
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that._postToEmailShareService(vv.EmailRecipientArray, vv.stationId, vv.playlistId, vv.resourceId));

					case 11:
						vv.shareServiceResponse = context$2$0.sent;

						that.scopeNg.$apply();

						return context$2$0.abrupt("return", { status: "succeeded", messageForDisplay: "Thank you for your submission." });

					case 16:
						context$2$0.prev = 16;
						context$2$0.t0 = context$2$0["catch"](8);
						return context$2$0.abrupt("return", { status: "failed", messageForDisplay: "Sorry, something went wrong." });

					case 19:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[8, 16]]);
		};

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						console.dog(">>> EmailShareVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						//that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> EmailShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.EmailSender = "";
						that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.atrbPurposing);

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._bsetShareData());

					case 6:
						vv.voidd = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{

		p._bsetShareData = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = that.scopeNg.loc.purposing;

						vv.delegateMethodName = "_bsetShareData4r" + vv.purposing.itemType;

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that[vv.delegateMethodName](vv.purposing));

					case 6:
						vv.voidd = context$2$0.sent;

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		p._postToEmailShareService = function callee$1$0(toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.next = 4;
						return _regeneratorRuntime.awrap(that.noticesByEmailService.shareItem(toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny));

					case 4:
						vv.postResponse = context$2$0.sent;

						console.dog(">>> EmailSharePanelVcc_CtrlClass._postToEmailShareService : ", vv.postResponse);

						return context$2$0.abrupt("return", vv.postResponse);

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._bsetShareData4rStation = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing || that.scopeNg.loc.purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.purposing.stationId));

					case 5:
						vv.itemInfo = context$2$0.sent;

						console.dog(">>> EmailShareVcc_CtrlClass._shareStation - itemInfo, stateNg: ", vv.itemInfo, that.stateNg);

						that.scopeNg.loc.method = "feed";
						///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true)
						that.scopeNg.loc.picture = vv.itemInfo.stationLogoUrl;
						that.scopeNg.loc.nameLabel = that.scopeNg.loc.stationSyn;
						that.scopeNg.loc.name = vv.itemInfo.title;
						that.scopeNg.loc.caption = "Visit our Station.";
						that.scopeNg.loc.description = vv.itemInfo.description;
						that.scopeNg.loc.properties = undefined;
						that.scopeNg.loc.actions = undefined;

						console.dog(">>> EmailShareVcc_CtrlClass._shareStation - that: ", that.scopeNg.loc);

					case 16:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._bsetShareData4rPlaylist = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing || that.scopeNg.loc.purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.purposing.stationId));

					case 5:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylist(vv.purposing.stationId, vv.purposing.playlistId));

					case 8:
						vv.itemInfo = context$2$0.sent;

						console.dog(">>> EmailShareVcc_CtrlClass._sharePlaylist - itemInfo, stateNg: ", vv.itemInfo, that.stateNg);

						that.scopeNg.loc.method = "feed";
						///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true)
						that.scopeNg.loc.picture = vv.itemInfo.coverArtUrl;
						that.scopeNg.loc.nameLabel = that.scopeNg.loc.playlistSyn;
						that.scopeNg.loc.name = vv.itemInfo.name;
						that.scopeNg.loc.caption = "Listen to our Playlist.";
						that.scopeNg.loc.description = vv.itemInfo.description;
						that.scopeNg.loc.properties = undefined;
						that.scopeNg.loc.actions = undefined;

						console.dog(">>> EmailShareVcc_CtrlClass._sharePlaylist - that: ", that.scopeNg.loc);

					case 19:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._bsetShareData4rTrack = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing || that.scopeNg.loc.purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.purposing.stationId));

					case 5:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylist(vv.purposing.stationId, vv.purposing.playlistId));

					case 8:
						vv.playlistInfo = context$2$0.sent;
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that.stationsService.getTrack(vv.purposing.stationId, vv.purposing.trackId));

					case 11:
						vv.itemInfo = context$2$0.sent;

						console.dog(">>> EmailShareVcc_CtrlClass._shareTrack - itemInfo, stateNg: ", vv.itemInfo, that.stateNg);

						that.scopeNg.loc.method = "feed";
						///that.scopeNg.loc.link = that.toolbox.bsetShortUrl4rStation(vv.itemInfo.id,  '', true)
						that.scopeNg.loc.picture = vv.itemInfo.imageURL;
						that.scopeNg.loc.nameLabel = that.scopeNg.loc.trackSyn;
						that.scopeNg.loc.name = vv.itemInfo.title;
						that.scopeNg.loc.caption = "Listen to our Track.";
						that.scopeNg.loc.description = vv.itemInfo.description;
						that.scopeNg.loc.properties = undefined;
						that.scopeNg.loc.actions = undefined;

						console.dog(">>> EmailShareVcc_CtrlClass._shareTrack - that: ", that.scopeNg.loc);

					case 22:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();

	//that.scopeNg.loc.responseMssgForTmplt = "ok"
	//alert(that.scopeNg.loc.responseMssgForTmplt);

	//that.scopeNg.loc.responseMssgForTmplt = "not ok"
	///console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);

	///alert(that.scopeNg.goDude);
	///vv.voidd = await that._bsetShareData4rStation();
	///alert(vv.delegateMethodName);

	//console.dog('myCat =>', toEmailAddresses, stationId, playlistId_ifAny, trackUID_ifAny)

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailReportPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(118);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(120);
	aa.LinkFncClass = __webpack_require__(121);
	aa.CtrlClass = __webpack_require__(122);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "EmailReportPanelVcc";
	aa.thisMod = aa.EmailReportPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctEmailReportPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    /// vv.controller = ['$scope', aa.CtrlClass];
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", "noticesByEmailService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};

	//}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/EmailReportPanelVcc/styles/EmailReportPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/EmailReportPanelVcc/styles/EmailReportPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: EmailReportPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-email-shared-panel-vcc {\n  display: block;\n}\n.EmailReportPanelVcc .CharactersLeft {\n/* Layout */\n  margin-top: 3px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n}\n.Header4StndUseVcc .EmailReportPanelVcc {\n/* Style */\n  color: #fff;\n}\n", ""]);

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<div>\n<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: EmailReportPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\t<div class=\"form-info-text\">Please tell us why you are flagging this {{loc.type}} for review. Be as specific as possible.</div>\n\n\t<ng-form class=\"StndEmailForm\"\n\t\t\tname=\"StndEmailForm\"\n\t\t\tnovalidate\t\t\n\t>\n\t\t\n\t\t<fieldset>\n\t\t\t\n\t\t\t<div class=\"InnerFieldset\">\n\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"EmailMessage\" class=\"sr-only\">\n\t\t\t\t\t\tSend Report\n\t\t\t\t\t</label>\n\n\t\t\t\t\t<textarea ng-model=\"loc.inputComment\" ng-trim=\"false\" minlength=\"4\" maxlength=\"200\" required  class=\"form-textarea\" name=\"EmailMessage\" id=\"EmailMessage\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t<div class=\"CharactersLeft\">{{200 - loc.inputComment.length}} characters left</div>\n\t\t\t\t\t<div class=\"form_error\" ng-if=\"StndEmailForm.EmailMessage.$error.minlength\">Input too short.</div>\n\t\t\t\t\t \n\t\t\t\t</div>\n\n\t\t\t\t<input type=\"hidden\" name=\"handoffSpecId\" value=\"{{loc.handoffSpecId}}\">\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t</fieldset>\n\n\t\t\n\n\t</ng-form>\n</div>\n</div>\n";

/***/ },
/* 121 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailReportPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: EmailReportVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "EmailReportPanelVcc";
		aa.myClassName = "EmailReportPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox, noticesByEmailService) {
			console.dog(">>> EmailReportVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;
				that.noticesByEmailService = noticesByEmailService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		p.handleEmailReportFormSubmitAsync = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						//vv.EmailSender = that.scopeNg.loc.EmailSender
						//vv.EmailMessage = that.scopeNg.loc.EmailMessage
						vv.stationId = that.scopeNg.loc.purposing.stationId;
						vv.trackId = that.scopeNg.loc.purposing.trackId;
						vv.comments = that.scopeNg.loc.inputComment;

						//vv.type = that.scopeNg.loc.purposing.type

						console.dog(">>> FROM _handleEmailReportFormSubmitAsync - RUNNING:  " + vv.comments + " " + vv.trackId + "^");
						console.dog(">>> FROM _handleEmailReportFormSubmitAsync - that  ", that);

						context$2$0.prev = 7;
						context$2$0.next = 10;
						return _regeneratorRuntime.awrap(that._postToEmailReportService(vv.stationId, vv.trackId, vv.comments));

					case 10:
						vv.shareServiceResponse = context$2$0.sent;

						that.scopeNg.$apply();

						return context$2$0.abrupt("return", { status: "succeeded", messageForDisplay: "Thank you for your submission" });

					case 15:
						context$2$0.prev = 15;
						context$2$0.t0 = context$2$0["catch"](7);
						return context$2$0.abrupt("return", { status: "failed", messageForDisplay: "Sorry, something went wrong." });

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[7, 15]]);
		};

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> EmailReportVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						//that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> EmailReportVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.EmailSender = "";
						that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.purposing);

						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		p._postToEmailReportService = function callee$1$0(stationId, trackId_ifAny, comments_ifAny) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.next = 4;
						return _regeneratorRuntime.awrap(that.noticesByEmailService.reportItem(stationId, trackId_ifAny, comments_ifAny));

					case 4:
						vv.postResponse = context$2$0.sent;

						console.dog(">>> EmailReportPanelVcc_CtrlClass._postToEmailReportService : ", vv.postResponse);

						return context$2$0.abrupt("return", vv.postResponse);

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Header4StndUseVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	aa.style = __webpack_require__(124);
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(126);
	aa.LinkFncClass = __webpack_require__(127);
	aa.CtrlClass = __webpack_require__(128);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Header4StndUseVcc";
	aa.thisMod = aa.SlideDownVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctHeader4StndUseVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "sessionService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Header4StndUseVcc/styles/Header4StndUseVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Header4StndUseVcc/styles/Header4StndUseVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Header4StndUseVccLinkStyle.css\n * *********************************************************************\n * *********************************************************************\n */\ndrct-header-4-stnd-use-vcc {\n  display: block;\n}\n.Header4StndUseVcc {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  width: 100%;\n  min-height: calc(64px - 4px);\n  z-index: 1;\n/* Style */\n  color: #fff;\n}\n.Header4StndUseVcc .navTrigger,\n.Header4StndUseVcc .navTrigger + label {\n  display: none;\n}\n.Header4StndUseVcc .homePageLinkOnLogoImgWrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n.Header4StndUseVcc .homePageLinkOnLogoImg {\n/* Flex-child spcf */\n  -webkit-align-self: left;\n  align-self: left;\n  -ms-flex-item-align: left;\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 165px;\n  height: 50px;\n  background-position: -85px -5px;\n}\n.Header4StndUseVcc .logoImg {\n/* Style */\n/* border: solid 1px #755; */\n  margin: auto;\n}\n.Header4StndUseVcc .navChoiceWrapper {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n.Header4StndUseVcc .navChoices {\n/* Flex-child spcf */\n  -webkit-align-self: center;\n  align-self: center;\n  -ms-flex-item-align: center;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  padding: 5px 10px;\n/* Style */\n  width: 100%;\n  background-color: #1c75bc;\n  -webkit-box-shadow: 0 3px 6px #444;\n  box-shadow: 0 3px 6px #444;\n  line-height: 30px;\n}\n.Header4StndUseVcc .navChoice {\n/* Flex-child spcf */\n  -webkit-align-self: center;\n  align-self: center;\n  -ms-flex-item-align: center;\n/* Layout */\n  display: block;\n  margin-left: 15px;\n  padding-right: 15px;\n/* Style */\n  color: #fff;\n  border: none;\n  text-transform: uppercase;\n/* border-right: solid 1px #aaa; */\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n}\n.Header4StndUseVcc .navChoice:hover {\n/* Style */\n  text-decoration: underline;\n}\n.Header4StndUseVcc .navChoice:last-child {\n/* Layout */\n  display: block;\n  padding-right: 0;\n/* Style */\n  border-right: none;\n}\n.Header4StndUseVcc .navChoiceLink:last-of-type {\n/* Layout */\n  padding-right: 30px;\n  margin-right: 15px;\n/* Style */\n  border-right: solid 1px rgba(255,255,255,0.3);\n}\n.Header4StndUseVcc .navChoiceMemberStuff {\n/* Style */\n  font-weight: 200;\n}\n.Header4StndUseVcc #navTrigger {\n  display: none;\n}\n@media (max-width: 767px) {\n  .Header4StndUseVcc .homePageLinkOnLogoImgWrapper {\n/* Flex-box spcf */\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n  .Header4StndUseVcc .homePageLinkOnLogoImg {\n/* Flex-child spcf */\n    -webkit-align-self: flex-start;\n    align-self: flex-start;\n    -ms-flex-item-align: start;\n  }\n  .Header4StndUseVcc .navChoices {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: justify;\n    -moz-box-pack: justify;\n    -o-box-pack: justify;\n    -ms-flex-pack: justify;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n/* Style */\n    width: 100%;\n    height: auto;\n    z-index: 1;\n    margin: 0;\n    margin-right: -35px;\n    border__: solid 1px #ffa500;\n    -webkit-box-shadow: AppVcc_stndOneUpBottomBorderShadow;\n    box-shadow: AppVcc_stndOneUpBottomBorderShadow;\n  }\n  .Header4StndUseVcc .navChoiceWrapper {\n/* Flex-box spcf */\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: justify;\n    -moz-box-pack: justify;\n    -o-box-pack: justify;\n    -ms-flex-pack: justify;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    -webkit-box-align: end;\n    -moz-box-align: end;\n    -o-box-align: end;\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n    align-items: flex-end;\n    position: absolute;\n    width: calc(100% + 20px);\n/* Style */\n    background-color: #2b91d6;\n    padding-right: 20px;\n    margin-left: -20px;\n    border__: solid 1px #0ff;\n    -webkit-box-shadow: 0 3px 6px #444;\n    box-shadow: 0 3px 6px #444;\n  }\n  .Header4StndUseVcc .navChoice {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n    -webkit-align-self: auto;\n    align-self: auto;\n    -ms-flex-item-align: auto;\n/* Layout */\n    margin-left: 0;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding-right: 0;\n/* Style */\n    border__: solid 1px #00f;\n    text-align: left;\n    line-height: normal;\n  }\n  .Header4StndUseVcc .navChoice:first-child {\n/* Style */\n    margin-top__: 10px;\n  }\n  .Header4StndUseVcc .navChoiceLink:last-of-type {\n/* Layout */\n    padding-right: 0;\n    margin-right: 0;\n/* Style */\n    border-right: none;\n  }\n  .Header4StndUseVcc .navTrigger {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n  }\n  .Header4StndUseVcc .navTrigger,\n  .Header4StndUseVcc .navTrigger + .navTriggerLabel {\n    display: block;\n  }\n  .Header4StndUseVcc .navTriggerLabel {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 30;\n    -moz-box-ordinal-group: 30;\n    -o-box-ordinal-group: 30;\n    -ms-flex-order: 30;\n    -webkit-order: 30;\n    order: 30;\n/* Layout */\n/*\n\t\t\tposition: fixed;\n\t\t\ttop: 0px;\n\t\t\tright: 6px;\n\t\t\t*/\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n/* Style */\n    font-size: 190%;\n    cursor: pointer;\n    z-index: 2;\n  }\n  .Header4StndUseVcc .navTrigger:checked ~ .navChoices .navChoiceWrapper {\n/* Layout */\n    max-height: 300px;\n    overflow: hidden;\n    -webkit-transition: max-height ease-out 0.8s;\n    -moz-transition: max-height ease-out 0.8s;\n    -o-transition: max-height ease-out 0.8s;\n    -ms-transition: max-height ease-out 0.8s;\n    transition: max-height ease-out 0.8s;\n  }\n  .Header4StndUseVcc .navTrigger:not(checked) ~ .navChoices .navChoiceWrapper {\n/* Layout */\n    max-height: 0;\n    overflow: hidden;\n/* Style */\n    -webkit-transition: max-height ease-in 0.8s;\n    -moz-transition: max-height ease-in 0.8s;\n    -o-transition: max-height ease-in 0.8s;\n    -ms-transition: max-height ease-in 0.8s;\n    transition: max-height ease-in 0.8s;\n  }\n  .Header4StndUseVcc .navTrigger:checked + .navTriggerLabel:before {\n/* Layout */\n    line-height: 200%;\n    margin-left: 5px;\n/* Style */\n    content: \"\\0058\"; /* X mark */\n    color: #d00;\n    font-size: 100%;\n    -webkit-transition-duration: 0.8s;\n    -moz-transition-duration: 0.8s;\n    -o-transition-duration: 0.8s;\n    -ms-transition-duration: 0.8s;\n    transition-duration: 0.8s;\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  .Header4StndUseVcc .navTrigger:not(checked) + .navTriggerLabel:before {\n/* Style */\n    content: \"\\2261\"; /* hamburger */\n    color: #0d0;\n    font-size: 140%;\n    -webkit-transition-duration: 0.8s;\n    -moz-transition-duration: 0.8s;\n    -o-transition-duration: 0.8s;\n    -ms-transition-duration: 0.8s;\n    transition-duration: 0.8s;\n  }\n  .Header4StndUseVcc .navTrigger:checked ~ .__navChoices {\n/* Layout */\n    background: -webkit-linear-gradient(top, #000, #000, #ccc);\n    background: -moz-linear-gradient(top, #000, #000, #ccc);\n    background: -o-linear-gradient(top, #000, #000, #ccc);\n    background: -ms-linear-gradient(top, #000, #000, #ccc);\n    background: linear-gradient(to bottom, #000, #000, #ccc);\n  }\n}\n", ""]);

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Header4StndUseVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the {{datas.view.info.myname}} Tmplt. </div>\n<div  class=\"Header4StndUseVcc vcBox\">\n\t\n\t<!-- burger -->\n\t<input class=\"navTrigger\" id=\"navTrigger\"  type=\"checkbox\" >\n\t<label class=\"navTriggerLabel\" for=\"navTrigger\"><span></span></label>\n\n\t<nav class=\"navChoices\">\n\t\n\t\t<div class=\"homePageLinkOnLogoImgWrapper\">\n\t\t\t<a class=\"homePageLinkOnLogoImg\"  href=\"home\" title=\"Home\">\n\t\t\t\t<!-- <img class=\"logoImg\" src=\"%2FAssets/Media/ImgGraphics/Liumei_Logo.png\" alt=\"Logo image for header\"> -->\n\t\t\t</a>\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t{{loc.responseMssg}}\n\t\t</div>\n\t\t\n\t\t<div class=\"navChoiceWrapper\">\n\t\t\t\n\t\t\t<a class=\"navChoice navChoiceLink\" href=\"http://www.liumei365.com/\" target=\"_blank\">benefits</a>\n\t\t\t<a class=\"navChoice navChoiceLink\" href=\"http://www.liumei365.com/features/\" target=\"_blank\">features</a>\n\t\t\t<a class=\"navChoice navChoiceLink\" href=\"http://www.liumei365.com/download/ \" target=\"_blank\">download</a>\n\t\t\t\n\n\t\t\t<button class=\"navChoice navChoiceMemberStuff navChoiceLogin\"\n\t\t\t\tng-if=\"!loc.isLoggedInUser\"\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\"noticeName\": \"LoginButton_clicked\",\n\t\t\t\t\t\t\"vc\": \"Header4StndUseVcc\",\n\t\t\t\t\t\t\"context\": \"\"\n\t\t\t\t\t}\n\t\t\t\t}'\n\t\t\t>\n\t\t\t\tlogin\n\t\t\t</button>\t\n\t\t\t\n\n\t\t\t<button class=\"navChoice navChoiceMemberStuff navChoiceLogout\"\n\t\t\t\tng-if=\"loc.isLoggedInUser\"\n\t\t\t\t\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\"noticeName\": \"LogoutButton_clicked\",\n\t\t\t\t\t\t\"vc\": \"Header4StndUseVcc\",\n\t\t\t\t\t\t\"context\": \"\"\n\t\t\t\t\t}\n\t\t\t\t}'\n\t\t\t>\n\t\t\t\tlogout\n\t\t\t</button>\n\t\t\t\n\t\t\t<button class=\"navChoice navChoiceMemberStuff navChoiceSignup\"\n\t\t\t\tng-if=\"!loc.isLoggedInUser\"\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\"noticeName\": \"SignupButton_clicked\",\n\t\t\t\t\t\t\"vc\": \"Header4StndUseVcc\",\n\t\t\t\t\t\t\"context\": \"\"\n\t\t\t\t\t}\n\t\t\t\t}'\n\t\t\t>\n\t\t\t\tsign up now\n\t\t\t</button>\n\t\t\n\t\t</div> <!-- navChoiceWrapper end -->\n\t\n\t</nav>\n\t\n</div>\n";

/***/ },
/* 127 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Header4StndUseVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 128 */
/***/ function(module, exports) {

	
	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Header4StndUseVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Header4StndUseVcc";
		aa.myClassName = "Header4StndUseVccCtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> Header4StndUseVccCtrlClass held as MyClass - args: ", arguments);
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.mediator = mediator;
				that.sessionService = sessionService;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{
		p.refresh = p._refresh = function () {
			var that = this;
			var vv = {};
			///alert(">>> Header4StndUseVccCtrlClass.refresh begin");
			that._setup();
			///alert(">>> Header4StndUseVccCtrlClass.refresh mid");
			that.scopeNg.$apply();
			///alert(">>> Header4StndUseVccCtrlClass.refresh done");
		};

		p.closeTheMenuIfOpen = p.closeTheMenuIfOpen = function () {
			// get elment and just uncheck
			$(".Header4StndUseVcc .navTrigger").attr("checked", false);
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function setup() {
			var that = this;
			that._setupStndDatas();
			that._setupSpcfDatas();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.fromLf = {};
			that.scopeNg.toLf = {};
			that.scopeNg.inLf = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
		};

		p._setupSpcfDatas = function () {
			var that = this;
			var vv = {};
			that.scopeNg.loc.menuCheckboxIsChecked = false;
			that._updateIsLoggedInUser();
		};

		p._updateIsLoggedInUser = function () {
			var that = this;
			that.scopeNg.loc.sessionId = that.sessionService.getSessionIdForRemote();
			that.scopeNg.loc.isLoggedInUser = that.scopeNg.loc.sessionId ? true : false;
		};

		return aa.MyClass;
	})();

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rTwitterShareVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(130);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(132);
	aa.LinkFncClass = __webpack_require__(133);
	aa.CtrlClass = __webpack_require__(134);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Button4rTwitterShareVcc";
	aa.thisMod = aa.Button4rTwitterShareVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctButton4rTwitterShareVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rTwitterShareVcc/styles/Button4rTwitterShareVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rTwitterShareVcc/styles/Button4rTwitterShareVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Button4rTwitterShareVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-button-4r-twitter-share-vcc {\n  display: block;\n}\n", ""]);

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Button4rTwitterShareVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t<button\n\t\tng-click = \"thisc.shareIt()\"\n\t>\n\t\t[-Twt-It-]\n\t</button>\n\t\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rTwitterShareVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rTwitterShareVcc";
		aa.myClassName = "Button4rTwitterShareVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Button4rTwitterShareVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rTwitterShareVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rTwitterShareVcc";
		aa.myClassName = "Button4rTwitterShareVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rTwitterShareVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> Button4rTwitterShareVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> Button4rTwitterShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.FB = FB;
						that.scopeNg.loc.purposing = that.scopeNg.purposing;

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("purposing", function () {
							that.scopeNg.loc.purposing = that.scopeNg.purposing;
						});
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		p.shareIt = p._shareIt = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = angular.fromJson(that.scopeNg.loc.purposing);

						if (vv.purposing.doManually) {
							context$2$0.next = 8;
							break;
						}

						vv.delegateMethodName = "_share" + vv.purposing.itemType;
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that[vv.delegateMethodName](vv.purposing));

					case 7:
						vv.voidd = context$2$0.sent;

					case 8:

						vv.url;

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._shareStation = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(purposing.stationId));

					case 5:
						vv.itemInfo = context$2$0.sent;

						vv.tweetUrl = that.toolbox.bgetStndUrl4rStation(vv.itemInfo.id, vv.itemInfo.title, "", true);
						vv.tweetText = "Visit our Station: " + vv.itemInfo.title + ".   vv.itemInfo.description";

						console.dog(">>> Button4rTwitterShareVcc_CtrlClass._shareStation - vv, stateNg: ", vv, that.stateNg);

						that.openWindow(vv.tweetText, vv.tweetUrl);

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._sharePlaylist = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(purposing.stationId));

					case 5:
						vv.stationInfoPromise = context$2$0.sent;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId));

					case 8:
						vv.playlistInfoPromise = context$2$0.sent;
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(vv.stationInfoPromise);

					case 11:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 14;
						return _regeneratorRuntime.awrap(vv.playlistInfoPromise);

					case 14:
						vv.itemInfo = context$2$0.sent;

						vv.tweetUrl = that.toolbox.bgetStndUrl4rPlaylist(vv.stationInfo.id, vv.stationInfo.title, "", vv.itemInfo.id, vv.itemInfo.name, "", true);

						vv.tweetText = "Listen to our Playlist: " + vv.itemInfo.name;+".   vv.itemInfo.description";

						console.dog(">>> Button4rTwitterShareVcc_CtrlClass._sharePlaylist - vv, stateNg: ", vv, that.stateNg);

						that.openWindow(vv.tweetText, vv.tweetUrl);

					case 20:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.openWindow = function (tweetText, tweetUrl, tweetVia) {
			var that = this;
			var vv = {};

			tweetVia = tweetVia || "LiuMei";

			vv.encodedTweetVia = encodeURIComponent(tweetVia);
			vv.encodedTweetText = encodeURIComponent(tweetText + " | Listen now at: " + tweetUrl);
			vv.encodedTweetUrl = encodeURIComponent(tweetUrl);

			vv.tweetString = "?text=" + vv.encodedTweetText + "&original_referrer=" + vv.encodedTweetUrl + "&via=" + vv.encodedTweetVia;

			vv.apiUrl = "http://twitter.com/intent/tweet" + vv.tweetString;

			window.open(vv.apiUrl, "_blank");
		};

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rFacebookShareVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(136);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(138);
	aa.LinkFncClass = __webpack_require__(139);
	aa.CtrlClass = __webpack_require__(140);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Button4rFacebookShareVcc";
	aa.thisMod = aa.Button4rFacebookShareVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctButton4rFacebookShareVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rFacebookShareVcc/styles/Button4rFacebookShareVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rFacebookShareVcc/styles/Button4rFacebookShareVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Button4rFacebookShareVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-button-4r-facebook-share-vcc {\n  display: block;\n}\n.Button4rFacebookShareVcc .shareTrigger {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background-position: -352px -187px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.Button4rFacebookShareVcc .shareTrigger:hover {\n  background-color: #db9;\n  -webkit-box-shadow: 0 0 10px #db9;\n  box-shadow: 0 0 10px #db9;\n}\n.Button4rFacebookShareVcc .shareTrigger:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.Button4rFacebookShareVcc .shareTrigger:focus {\n  outline: none;\n}\n", ""]);

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Button4rFacebookShareVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t<!---\n\t<button\n\t\tng-click = \"thisc.shareIt()\"\n\t>\n\t\t[-FB-It-]\n\t</button>\n\t---->\n\t\n\n\t<button\n\t\tclass = \"shareTrigger\"\n\t\tdata-drct_click_to_mediator_adc = '{ \n\t\t\t\"notice\": {\n\t\t\t\t\"noticeName\": \"FacebookShareButton_clicked\",\n\t\t\t\t\"purposing\": \"\",\n\t\t\t\t\"triggerTagToUse\": \"\"\n\t\t\t}\n\t\t}'\n\n\t>\n\t</button>\n\t\n</div>\n";

/***/ },
/* 139 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rFacebookShareVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rFacebookShareVcc";
		aa.myClassName = "Button4rFacebookShareVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Button4rFacebookShareVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rFacebookShareVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rFacebookShareVcc";
		aa.myClassName = "Button4rFacebookShareVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rFacebookShareVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> Button4rFacebookShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";

						that.scopeNg.loc.stationSynUpCase = "SCHOOL";
						that.scopeNg.loc.playlistSynUpCase = "PROJECT";
						that.scopeNg.loc.trackSynUpCase = "EPISODE";
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.purposing = that.scopeNg.purposing;

						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("purposing", function () {
							that.scopeNg.loc.purposing = that.scopeNg.purposing;
						});
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		p.shareIt = p._shareIt = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						if (typeof that.scopeNg.loc.FB === "undefined") {
							that.scopeNg.loc.FB = FB;
						}

						vv.purposing = angular.fromJson(that.scopeNg.loc.purposing);
						vv.purposing.itemType = vv.purposing.itemType || vv.purposing.type;

						if (vv.purposing.doManually) {
							context$2$0.next = 10;
							break;
						}

						vv.delegateMethodName = "_share" + vv.purposing.itemType;
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that[vv.delegateMethodName](vv.purposing));

					case 9:
						vv.voidd = context$2$0.sent;

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.directlyHandleClick = p._directlyHandleClick = function () {
			/* Using this instead of click-to-mediator directive because ng-click is needed to close mask */
			var that = this;
			var vv = {};

			vv.pkg = {
				notice: {
					noticeName: "FacebookShareButton_clicked",
					purposing: "",
					triggerTagToUse: ""
				}

			};
			that.mediatorService.receiveNotice("", vv.pkg);
		};

		p.doNothing = p._doNothing = function callee$1$0() {
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._shareStation = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.purposing = purposing;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(purposing.stationId));

					case 5:
						vv.itemInfo = context$2$0.sent;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareStation - itemInfo, stateNg: ", vv.itemInfo, that.stateNg);

						vv.feedObj = {};
						vv.feedObj.method = "feed";
						vv.feedObj.link = that.toolbox.bgetShortUrl4rStation(vv.itemInfo.id, "", true);
						vv.feedObj.picture = vv.itemInfo.stationLogoUrl;
						vv.feedObj.name = that.scopeNg.loc.stationSynUpCase + ": " + vv.itemInfo.title;
						vv.feedObj.caption = "Visit our " + that.scopeNg.loc.stationSyn + ".";
						vv.feedObj.description = vv.itemInfo.description;
						vv.feedObj.properties = undefined;
						vv.feedObj.actions = undefined;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareStation - feedObj: ", vv.feedObj);

						that.scopeNg.loc.FB.ui(vv.feedObj);

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._sharePlaylist = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationInfoPromise = that.stationsService.getStation(purposing.stationId);
						vv.playlistInfoPromise = that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId);

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(vv.stationInfoPromise);

					case 6:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(vv.playlistInfoPromise);

					case 9:
						vv.itemInfo = context$2$0.sent;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - itemInfo, stationInfo, stateNg: ", vv.itemInfo, vv.stationInfo, that.stateNg);

						vv.feedObj = {};
						vv.feedObj.method = "feed";
						vv.feedObj.link = that.toolbox.bgetShortUrl4rPlaylist(vv.stationInfo.id, "", vv.itemInfo.id, "", true);
						vv.feedObj.picture = vv.itemInfo.coverArtUrl;
						vv.feedObj.name = that.scopeNg.loc.playlistSynUpCase + ": " + vv.itemInfo.name;
						vv.feedObj.caption = "Listen to our " + that.scopeNg.loc.playlistSyn + ".";
						vv.feedObj.description = vv.itemInfo.description;
						vv.feedObj.properties = undefined;
						vv.feedObj.actions = undefined;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - feedObj: ", vv.feedObj);

						that.scopeNg.loc.FB.ui(vv.feedObj);

					case 22:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._shareTrack = function callee$1$0(purposing) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationInfoPromise = that.stationsService.getStation(purposing.stationId);
						vv.playlistInfoPromise = that.stationsService.getPlaylist(purposing.stationId, purposing.playlistId);
						vv.tracknfoPromise = that.stationsService.getTrack(purposing.stationId, purposing.trackId);

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.stationInfoPromise);

					case 7:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 10;
						return _regeneratorRuntime.awrap(vv.playlistInfoPromise);

					case 10:
						vv.playlistInfo = context$2$0.sent;
						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(vv.tracknfoPromise);

					case 13:
						vv.itemInfo = context$2$0.sent;

						vv.trackUid = purposing.trackUid;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._shareTrack- itemInfo, playlistInfo, stationInfo, stateNg: ", vv.itemInfo, vv.playlistInfo, vv.stationInfo, that.stateNg);

						vv.feedObj = {};
						vv.feedObj.method = "feed";
						vv.feedObj.link = that.toolbox.bgetShortUrl4rTrack(vv.stationInfo.id, "", vv.playlistInfo.id, "", vv.trackUid, "", true);
						vv.feedObj.picture = vv.itemInfo.imageURL;
						vv.feedObj.name = that.scopeNg.loc.trackSynUpCase + ": " + vv.itemInfo.title;
						vv.feedObj.caption = "Listen to our " + that.scopeNg.loc.trackSyn + ".";
						vv.feedObj.description = vv.itemInfo.description;
						vv.feedObj.properties = undefined;
						vv.feedObj.actions = undefined;

						console.dog(">>> Button4rFacebookShareVcc_CtrlClass._sharePlaylist - feedObj: ", vv.feedObj);

						that.scopeNg.loc.FB.ui(vv.feedObj);

					case 27:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();
	//}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailShareVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(142);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(144);
	aa.LinkFncClass = __webpack_require__(145);
	aa.CtrlClass = __webpack_require__(146);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Button4rEmailShareVcc";
	aa.thisMod = aa.Button4rEmailShareVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctButton4rEmailShareVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rEmailShareVcc/styles/Button4rEmailShareVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rEmailShareVcc/styles/Button4rEmailShareVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Button4rEmailShareVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-button-4r-email-share-vcc {\n  display: block;\n}\n.Button4rEmailShareVcc .shareTrigger {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background-position: -352px -141px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.Button4rEmailShareVcc .shareTrigger:hover {\n  background-color: #db9;\n  -webkit-box-shadow: 0 0 10px #db9;\n  box-shadow: 0 0 10px #db9;\n}\n.Button4rEmailShareVcc .shareTrigger:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.Button4rEmailShareVcc .shareTrigger:focus {\n  outline: none;\n}\n", ""]);

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Button4rEmailShareVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t\n\t<button\n\t\tclass = \"shareTrigger\"\n\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\"notice\": {\n\t\t\t\t\"noticeName\": \"EmailShareButton_clicked\",\n\t\t\t\t\"purposing\": {{loc.purposing}}\n\t\t\t}\n\t\t}'\n\t>\n\t</button>\n\n</div>\n";

/***/ },
/* 145 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailShareVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rEmailShareVcc";
		aa.myClassName = "Button4rEmailShareVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Button4rEmailShareVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailShareVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rEmailShareVcc";
		aa.myClassName = "Button4rEmailShareVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rEmailShareVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> Button4rEmailShareVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> Button4rEmailShareVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.purposing = that.scopeNg.purposing;

						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("purposing", function () {
							that.scopeNg.loc.purposing = that.scopeNg.purposing;
						});
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailReportVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(148);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(150);
	aa.LinkFncClass = __webpack_require__(151);
	aa.CtrlClass = __webpack_require__(152);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Button4rEmailReportVcc";
	aa.thisMod = aa.Button4rEmailReportVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctButton4rEmailReportVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(149);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rEmailReportVcc/styles/Button4rEmailReportVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Button4rEmailReportVcc/styles/Button4rEmailReportVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Button4rEmailShareVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-button-4r-email-report-vcc {\n  display: block;\n}\n.Button4rEmailReportVcc .reportTrigger {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background-position: -348px -5px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.Button4rEmailReportVcc .reportTrigger:hover {\n  background-color: #db9;\n  -webkit-box-shadow: 0 0 10px #db9;\n  box-shadow: 0 0 10px #db9;\n}\n.Button4rEmailReportVcc .reportTrigger:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.Button4rEmailReportVcc .reportTrigger:focus {\n  outline: none;\n}\n", ""]);

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Button4rEmailShareVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t\n\t<button\n\t\tclass = \"reportTrigger\"\n\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\"notice\": {\n\t\t\t\t\"noticeName\": \"EmailReportButton_clicked\",\n\t\t\t\t\"purposing\": {{loc.purposing}}\n\t\t\t}\n\t\t}'\n\t>\n\t</button>\n\n</div>\n";

/***/ },
/* 151 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailReportVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rEmailReportVcc";
		aa.myClassName = "Button4rEmailReportVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Button4rEmailReportVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Button4rEmailReportVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Button4rEmailReportVcc";
		aa.myClassName = "Button4rEmailReportVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> Button4rEmailReportVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> Button4rEmailReportVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> Button4rEmailReportVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.purposing = that.scopeNg.purposing;

						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("purposing", function () {
							that.scopeNg.loc.purposing = that.scopeNg.purposing;
						});
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	ITYPE PRIVATE METHODS:
		//{	
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookLoginButtonVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(154);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(156);
	aa.LinkFncClass = __webpack_require__(157);
	aa.CtrlClass = __webpack_require__(158);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "FacebookLoginButtonVcc";
	aa.thisMod = aa.FacebookLoginButtonVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFacebookLoginButtonVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "accessService", "sessionService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbHandoffSpecId: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(155);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FacebookLoginButtonVcc/styles/FacebookLoginButtonVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FacebookLoginButtonVcc/styles/FacebookLoginButtonVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: FacebookLoginButtonVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-facebook-login-button-vcc {\n  display: block;\n}\n.FacebookLoginButtonVcc {\n/* Layout */\n  width: 100%;\n  height: 34px;\n/* Style */\n}\n.FacebookLoginButtonVcc .FacebookLoginButton {\n/* Layout */\n  height: 34px;\n  width: 100%;\n/* Style */\n  background-color: #00a;\n  border: solid 1px #00a;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n}\n.FacebookLoginButtonVcc .buttonCopy {\n/* Layout */\n  display: block;\n  margin: 0 auto;\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 151px;\n  height: 17px;\n  background-position: -5px -65px;\n}\ndrct-facebook-login-button-vcc.SignupMode .buttonCopy {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 167px;\n  height: 17px;\n  background-position: -166px -65px;\n}\n", ""]);

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: FacebookLoginButtonVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\n\t\t<button type=\"submit\" \n\t\t\t\tclass=\"FacebookLoginButton\"\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\"noticeName\": \"FacebookAuthButton_clicked\",\n\t\t\t\t\t\t\"handoffSpecId\":\"{{loc.handoffSpecId}}\"\n\t\t\t\t\t}\n\t\t\t\t}'\n\t\t>\n\t\t\t<span class=\"buttonCopy\"></span>\n\t\t</button>\n\n</div>";

/***/ },
/* 157 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookLoginButtonVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FacebookLoginButtonVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "FacebookLoginButtonVcc";
		aa.myClassName = "FacebookLoginButtonVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, accessService, sessionService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that.accessService = accessService;
				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p._handleFacebookButtonClick = function () {
			var that = this;
			that._handleFacebookButtonClick();
		};
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.fromLf = {};
						that.scopeNg.toLf = {};
						that.scopeNg.inLf = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.loc.remoteSessionId = "";
						that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
						console.dog(">>> FacebookLoginButtonVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function () {};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("atrbHandoffSpecId", function () {
							that.scopeNg.loc.handoffSpecId = that.scopeNg.atrbHandoffSpecId;
						});
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._handleFacebookButtonClick = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.callbackForAuthSuccess = function (authResponse) {
							vv.voidd = that._handleFacebookAuthSuccessAync(authResponse);
						};

						console.dog(">>> FROM _handleFacebookButtonClick - RUNNING:  ");
						FB.login(function (clickResponse) {
							vv.clickResponse = clickResponse;
							console.dog(">>> _handleFacebookButtonClick - vv.clickResponse: ", vv.clickResponse);

							if (vv.clickResponse.authResponse) {

								console.dog(">>> _handleFacebookButtonClick - vv.clickResponse.authResponse: ", vv.clickResponse.authResponse);

								vv.callbackForAuthSuccess(vv.clickResponse.authResponse);
							} else {
								console.dog(">>> _handleFacebookButtonClick - User cancelled login or did not authorize.");
							}
						}, { scope: "public_profile,email" });

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._handleFacebookAuthSuccessAync = function callee$1$0(facebookAuthResponse) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.fbAccessToken = facebookAuthResponse.accessToken;
						///alert(">>> vv.fbAccessToken: " + that.scopeNg.loc.handoffSpecId );
						console.dog(">>> FROM _handleFacebookAuthSuccess - RUNNING - fbAccessToken:  ", vv.fbAccessToken);
						context$2$0.prev = 4;

						vv.promise1 = that.accessService.connectWithToken(vv.fbAccessToken, "facebook");
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 8:
						vv.sessionId = context$2$0.sent;
						// No need to retain returned result.

						console.dog(">>> FROM _handleFacebookAuthSuccess - SUCCESS ", vv.sessionId);
						that._notifyMediatorOfLoginSuccess(vv.sessionId);
						return context$2$0.abrupt("return", "done");

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0["catch"](4);

						console.dog(">>> FROM _handleEmailLoginFormSubmitAsync - FAILED - e:", context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 14]]);
		};

		//}

		return aa.MyClass;
	})();

	///alert(">>> FacebookLoginButtonVcc - boooooo");

	/* Stub */
	//}

	///return vv.result; // No Return. End of this async road.

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MastheadPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	aa.style = __webpack_require__(160);
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(162);
	aa.LinkFncClass = __webpack_require__(163);
	aa.CtrlClass = __webpack_require__(164);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "MastheadPanelVcc";
	aa.thisMod = aa.MastheadPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctMastheadPanelVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction($compile) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/MastheadPanelVcc/styles/MastheadPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/MastheadPanelVcc/styles/MastheadPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: MastheadPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-masthead-panel-vcc {\n  display: block;\n}\n.MastheadPanelVcc .mastheadImg {\n/* Layout */\n  width: 100%;\n  height: 25vw;\n  min-height: 100px;\n/* Style */\n  border__: solid 1px #f00;\n  border-bottom: solid 5px #eee;\n  background: url(\"%2FAssets%2FMedia%2FImgPictures%2Fschoolcover_website_default_lowres.jpg\");\n  -webkit-background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\ndrct-station-info-panel-vcc {\n  display: block;\n}\n", ""]);

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: MastheadPanelVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the {{datas.view.info.myname}} Tmplt. </div>\n\n<div class=\"{{datas.view.info.myname}} vcBox\"  >\n\n\t<div class=\"mastheadImg\"></div>\n\n</div>\n\n";

/***/ },
/* 163 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MastheadPanelVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 164 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MastheadPanelVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function CtrlClass(scopeNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.setup();
		}

		var p = CtrlClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setupDatas();
		};

		p.setupDatas = function setupDatas() {
			var that = this;
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none'
					},
					info: {
						myname: 'MastheadPanelVcc'
					}
				}
			};
		};

		return CtrlClass;
	})();

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Footer4StndUseVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	aa.style = __webpack_require__(166);
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(168);
	aa.LinkFncClass = __webpack_require__(169);
	aa.CtrlClass = __webpack_require__(170);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "Footer4StndUseVcc";
	aa.thisMod = aa.Footer4StndUseVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFooter4StndUseVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction($compile) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "E",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Footer4StndUseVcc/styles/Footer4StndUseVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Footer4StndUseVcc/styles/Footer4StndUseVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * ***********************************\n * ***********************************\n * ***********************************\n * File: Footer4StndUseVcc_style.styl\n * ***********************************\n * ***********************************\n */\ndrct-footer-4-stnd-use-vcc {\n  display: block;\n}\n.Footer4StndUseVcc {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  min-height: 55px;\n/* Style */\n  background-color: #1c75bc;\n}\n.Footer4StndUseVcc .statement_in_footer {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n/* Style */\n  font-size: 11px;\n  color: #fff;\n}\n.Footer4StndUseVcc .linksList_in_footer {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Style */\n  text-align: center;\n  margin-bottom: 5px;\n  color: #fff;\n}\n.Footer4StndUseVcc .link_in_statement {\n/* Style */\n  text-decoration: underline;\n  color: #fff;\n}\n.Footer4StndUseVcc .link_in_linksList {\n/* Layout */\n  padding: 0 10px 2px 10px;\n/* Style */\n  font-size: 11px;\n  text-decoration: underline;\n  color: #fff;\n  border-right: solid 1px rgba(255,255,255,0.3);\n}\n.Footer4StndUseVcc .link_in_linksList:last-child {\n/* Layout */\n/* Style */\n  border-right: none;\n}\n", ""]);

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Footer4StndUseVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"Footer4StndUseVcc vcBox\">\n\t<div class=\"usAndCopyright\">\n\t\t<div class=\"statement_in_footer\">\n\t\t\t© 1999-2015 <a class=\"link_in_statement\" href=\"http://www.live365.com/web/components/content/info/index.live?ads=none\" target=\"_blank\">Live365 Inc.</a> All rights reserved.\n\t\t</div>\n\t\t<div class=\"linksList_in_footer\">\n\t\t\t<a class=\"link_in_linksList\" href=\"PrivacyPolicy.pdf\" target=\"_blank\">Privacy Policy</a><a class=\"link_in_linksList\" href=\"TermsOfService.pdf\" target=\"_blank\">Terms of Service</a></a><a class=\"link_in_linksList\" href=\"http://www.liumei365.com/support/\" target=\"_blank\">Support</a>\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>\n\n \n";

/***/ },
/* 169 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Footer4StndUseVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 170 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Footer4StndUseVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function CtrlClass(scopeNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.setup();
		}

		var p = CtrlClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setupDatas();
		};

		p.setupDatas = function setupDatas() {
			var that = this;
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none'
					},
					info: {
						myname: 'Footer4StndUseVcc'
					}
				}
			};
		};

		return CtrlClass;
	})();

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MenuItemsHolderWithTriggerVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(172);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(174);
	aa.LinkFncClass = __webpack_require__(175);
	aa.CtrlClass = __webpack_require__(176);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "MenuItemsHolderWithTriggerVcc";
	aa.thisMod = aa.MenuItemsHolderWithTriggerVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctMenuItemsHolderWithTriggerVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            ariaLabeling: "@",
	            instanceIdfier: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/MenuItemsHolderWithTriggerVcc/styles/MenuItemsHolderWithTriggerVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/MenuItemsHolderWithTriggerVcc/styles/MenuItemsHolderWithTriggerVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: MenuItemsHolderWithTriggerVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-menu-items-holder-with-trigger-vcc {\n  display: block;\n}\n.StationInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 30px;\n  height: 50px;\n  background-position: -178px -196px;\n}\n.StationInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:hover {\n  background-color: #b97;\n  -webkit-box-shadow: 0 0 10px #b97;\n  box-shadow: 0 0 10px #b97;\n}\n.StationInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.StationInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:focus {\n  outline: none;\n}\n.PlaylistInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 9px;\n  height: 30px;\n  background-position: -140px -196px;\n}\n.PlaylistInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:hover {\n  background-color: #db9;\n  -webkit-box-shadow: 0 0 10px #db9;\n  box-shadow: 0 0 10px #db9;\n}\n.PlaylistInfoPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.TracksPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 9px;\n  height: 30px;\n  background-position: -140px -196px;\n}\n.TracksPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:hover {\n  background-color: #db9;\n  -webkit-box-shadow: 0 0 10px #db9;\n  box-shadow: 0 0 10px #db9;\n}\n.TracksPanelVcc .MenuItemsHolderWithTriggerVcc .myMdIconButton:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.MenuItemsHolderWithTriggerVcc .myMdIconButton {\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.md-open-menu-container {\n  border: solid 1px #bbb;\n  -webkit-box-shadow: $AppVcc_stndOneUpBoxShadow;\n  box-shadow: $AppVcc_stndOneUpBoxShadow;\n  -webkit-border-radius: 10px;\n  border-radius: 10px;\n}\nmd-menu-content {\n  min-width: 1px !important;\n  padding: 10px 15px !important;\n  text-align: center !important;\n}\nmd-menu-item>* {\n  padding: 0 !important;\n}\n", ""]);

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: MenuItemsHolderWithTriggerVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n>\n\n\n\t<md-menu \n\t\tmd-offset=\"-45 0\"\n\t\tmd-position-mode=\"target-right target\"\n\t>\n\t\t<md-button \n\t\t\tclass=\"md-icon-button myMdIconButton\"\n\t\t\taria-label=\"{{loc.ariaLabeling}}\"  \n\t\t\tdata-instance_idfier = '{{loc.instanceIdfier}}'\n\t\t\tng-click=\"thisc.openMenu($mdOpenMenu, $event)\"\n\t\t>\n\t\t</md-button>\n\t\t<md-menu-content class=\"MenuContent4r{{loc.instanceIdfier}}\">\n\t\t\t<div ng-transclude></div>\n\t\t</md-menu-content>\n\t</md-menu>\n\n\t\n</div>\n\n";

/***/ },
/* 175 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MenuItemsHolderWithTriggerVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "MenuItemsHolderWithTriggerVcc";
		aa.myClassName = "MenuItemsHolderWithTriggerVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> MenuItemsHolderWithTriggerVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MenuItemsHolderWithTriggerVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "MenuItemsHolderWithTriggerVcc";
		aa.myClassName = "MenuItemsHolderWithTriggerVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> MenuItemsHolderWithTriggerVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								console.dog(">>> Ok to setup holder and trigger: ", that.scopeNg.instance_idfier, that.scopeNg);
								///alert(">>> Ok to setup holder and trigger: " +  that.scopeNg.instanceIdfier)
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> MenuItemsHolderWithTriggerVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> MenuItemsHolderWithTriggerVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("ariaLabeling", function () {
							that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						});
						that.scopeNg.$watch("instanceIdfier", function () {
							that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						});

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	SIMILAR TYPE PUBLIC/PRIVATE METHODS:
		//{
		p.openMenu = function ($mdOpenMenu, ev) {
			var that = this;
			var vv = {};
			$mdOpenMenu(ev);

			vv.resizerFunction = function () {
				document.getElementsByClassName("md-menu-backdrop")[0].style.height = document.getElementsByClassName("StateContainerVcc")[0].offsetHeight + "px";
				$(".md-open-menu-container").addClass(that.scopeNg.loc.purposing.role);
			};
			vv.voidd = setTimeout(vv.resizerFunction, 1);
		};
		//}	

		//	================================================================
		//	SIMILAR TYPE PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rHomeVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(178);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(180);
	aa.LinkFncClass = __webpack_require__(181);
	aa.CtrlClass = __webpack_require__(182);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Page4rHomeVcc";
	aa.thisMod = aa.Page4rHomeVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPage4rHomeVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rHomeVcc/styles/Page4rHomeVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rHomeVcc/styles/Page4rHomeVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Page4rHomeVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-page-4r-home-vcc {\n  display: block;\n}\n", ""]);

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Page4rHomeVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t\n\t<drct-stations-panel-vcc\n\t\tdata-stations_filter = '{{loc.stationsFilter}}'\n\t\tdata-displayed_panel_title = '{{loc.displayedPanelTitle}}'\n\t\tdata-go_dude = '{{loc.goDude}}'\n\t>\n\t<drct-stations-panel-vcc>\n\t\n</div>\n\n";

/***/ },
/* 181 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rHomeVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rHomeVcc";
		aa.myClassName = "Page4rHomeVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Page4rHomeVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rHomeVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rHomeVcc";
		aa.myClassName = "Page4rHomeVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService) {
			console.dog(">>> Page4rHomeVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.booo_greeting = "hola";
				that._runSetup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._refresh());

					case 3:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._runSetup = function () {
			var that = this;
			that._setup();
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that._notifyChangedPageState(that.stateParamsNg));

					case 11:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function () {
			var that = this;

			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			console.dog(">>> Page4rHomeVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationsFilter = "active";
						that.scopeNg.loc.displayedPanelTitle = "schools";
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 5:
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._notifyChangedPageState = function _notifyChangedPageState() {
			var that, pkg, asyncNotify;
			return _regeneratorRuntime.async(function _notifyChangedPageState$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);

						pkg = {
							notice: {
								noticeName: "Changed_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						asyncNotify = function asyncNotify() {

							console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);

							that.mediatorService.receiveNotice(that.scopeNg, pkg);
						};

						that.timeoutNg(asyncNotify);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._openMenu = function ($mdOpenMenu, ev) {
			var that = this;
			var originatorEv = ev;
			$mdOpenMenu(ev);
		};

		//}

		return aa.MyClass;
	})();

	///alert(">>> Page4rHomeVcc - boooooo");

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rEmailValidationVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(184);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(186);
	aa.LinkFncClass = __webpack_require__(187);
	aa.CtrlClass = __webpack_require__(188);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Page4rEmailValidationVcc";
	aa.thisMod = aa.Page4rEmailValidationVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPage4rEmailValidationVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$location", "$state", "$stateParams", "$timeout", "mediatorService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rEmailValidationVcc/styles/Page4rEmailValidationVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rEmailValidationVcc/styles/Page4rEmailValidationVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Page4rEmailValidationVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-page-4r-email-validation-vcc {\n  display: block;\n}\n.Page4rEmailValidationVcc .contentInPage {\n/* Layout */\n  margin: 30px 10vw 30px 10vw;\n}\n.Page4rEmailValidationVcc .articleParag_in_page {\n/* Layout */\n  margin-bottom: 10px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\n.Page4rEmailValidationVcc .articleParag_in_page:last-child {\n/* Layout */\n  margin-bottom: 0px;\n}\n", ""]);

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Page4rEmailValidationVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"contentInPage\">\n\t\t<p class=\"articleParag_in_page\">{{loc.paragraph01Copy}}</p>\n\t\t<p class=\"articleParag_in_page\">{{loc.paragraph02Copy}}</p>\n\t\t<p class=\"articleParag_in_page\">{{loc.paragraph03Copy}}</p>\n\t\t<p class=\"articleParag_in_page\">{{loc.paragraph04Copy}}</p>\n\t</div>\n\t\n</div>\n\n";

/***/ },
/* 187 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rEmailValidationVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rEmailValidationVcc";
		aa.myClassName = "Page4rEmailValidationVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Page4rEmailValidationVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rEmailValidationVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rEmailValidationVcc";
		aa.myClassName = "Page4rEmailValidationVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, locationNg, stateNg, stateParamsNg, timeoutNg, mediatorService) {
			console.dog(">>> Page4rEmailValidationVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.locationNg = locationNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.booo_greeting = "hola";
				that._runSetup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._refresh());

					case 3:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.setTextCopy = p._setTextCopy = function callee$1$0(p1Copy, p2Copy, p3Copy, p4Copy) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.paragraph01Copy = p1Copy || "";
						that.scopeNg.loc.paragraph02Copy = p2Copy || "";
						that.scopeNg.loc.paragraph03Copy = p3Copy || "";
						that.scopeNg.loc.paragraph04Copy = p4Copy || "";

						that.scopeNg.$apply();

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._runSetup = function () {
			var that = this;
			that._setup();
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that._notifyChangedPageState(that.stateParamsNg));

					case 11:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function () {
			var that = this;

			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			console.dog(">>> Page4rEmailValidationVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.paragraph01Copy = "Account Activation Page";

						that.scopeNg.loc.paragraph02Copy = "If for some reason you get stuck on this page, please try reloading it, or click on the logo above to go to the home page.";

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 5:
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._notifyChangedPageState = function _notifyChangedPageState() {
			var that, pkg, asyncNotify;
			return _regeneratorRuntime.async(function _notifyChangedPageState$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);

						pkg = {
							notice: {
								noticeName: "Changed_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						asyncNotify = function asyncNotify() {

							console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);

							that.mediatorService.receiveNotice(that.scopeNg, pkg);
						};

						that.timeoutNg(asyncNotify);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{

		p.handleMaybeReturnToState = function () {
			var that = this;
			var vv = {};
			console.dog(">>> _handleMaybeReturnToState - that.stateNg: ", that.stateNg);
			///alert(">>> BOOOOOOOOOOOO");
			if (localStorage.resumeUponReturnUrl) {
				if (that.locationNg.url().indexOf("emailvalidation") > -1) {
					vv.pkg = {
						notice: {
							noticeName: "EmailValidation_requested"
						}
					};
					vv.DontCarePromise = that.mediator.receiveNotice("", vv.pkg);
				}
			}
		};
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(">>> Page4rEmailValidationVcc - boooooo");

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPasswordResetVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(190);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(192);
	aa.LinkFncClass = __webpack_require__(193);
	aa.CtrlClass = __webpack_require__(194);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Page4rPasswordResetVcc";
	aa.thisMod = aa.PasswordResetPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPage4rPasswordResetVcc";
	aa.drctFunc = createDrct;
	aa.thisMod.directive(aa.drctName, ["$compile", aa.drctFunc]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "membersService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            atrbPurposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};

	//}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rPasswordResetVcc/styles/Page4rPasswordResetVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rPasswordResetVcc/styles/Page4rPasswordResetVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Page4rPasswordResetVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-page-4r-password-reset-vcc {\n  display: block;\n}\n.Page4rPasswordResetVcc {\n/* Layout */\n  margin: 30px auto 30px auto;\n  max-width: 350px;\n  min-width: 210px;\n  min-height: 250px;\n  width: 99vw;\n/* Style */\n  background: -webkit-linear-gradient(#fff, #666);\n  background: -moz-linear-gradient(#fff, #666);\n  background: -o-linear-gradient(#fff, #666);\n  background: -ms-linear-gradient(#fff, #666);\n  background: linear-gradient(#fff, #666);\n}\n.Page4rPasswordResetVcc .form-container {\n  padding: 30px;\n}\n.Page4rPasswordResetVcc .ButtonContainer {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -o-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n/* Layout */\n  margin-top: 50px;\n  border__: solid 1px #f00;\n}\n.Page4rPasswordResetVcc .StatusMessage {\n/* Layout */\n  font-weight: 6 oo;\n/* Style */\n  padding: 20px 10px 0 10px;\n}\n.Page4rPasswordResetVcc .md-button.md-primary {\n/* Layout */\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #f5841f;\n  border: solid 1px #555;\n}\n.Page4rPasswordResetVcc .md-button.md-primary:disabled {\n/* Layout */\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  text-transform: uppercase;\n  color: #999;\n  background-color: #db9;\n  border: solid 1px #555;\n}\n.Page4rPasswordResetVcc .articleHeading_in_page {\n/* Layout */\n  margin-bottom: 20px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 19px;\n  color: #444;\n  text-transform: uppercase;\n}\n", ""]);

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Page4rPasswordResetVcc_tmplt.html -->\n<!-- =============================================================== -->\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  ng-if=\"loc.okToShow\">\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\t\n\t<div class = \"StatusMessage\">{{loc.passwordResetReturn}}</div>\n\t\n\t<div class=\"form-container\">\n\t<ng-form class=\"StndPasswordResetForm\" name=\"StndPasswordResetForm\" validate>\n\t\t<div class=\"articleHeading_in_page\">password reset</div>\n\t\t\n\t\t<fieldset>\n\t\t\t\n\t\t\t<div class=\"InnerFieldset\">\n\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t\n\t\t\t\t\t<label for=\"MyPassword\" class=\"sr-only\">\n\t\t\t\t\t\tPassword\n\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t<input\ttype=\"password\" \n\t\t\t\t\t\t\tid=\"MyPassword\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"MyPassword\" \n\t\t\t\t\t\t\tng-model=\"loc.password\" \n\t\t\t\t\t\t\tminlength=\"8\"\n\t\t\t\t\t\t\tmaxlength=\"30\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"PASSWORD\"\n\t\t\t\t\t\t\tdata-drct_validate_password_adc\n\t\t\t\t\t\t\tzz-data-drct_validate_confirm_password_adc='MyPassword1'\n\t\t\t\t\t\t\tzz-validate-password-characters \t\t\n\t\t\t\t\t>\n\t\t\t\t\t\n\t\t\t\t\t<!--data-drct_validate_password_adc-->\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPassword.$error.passwordChars\">Your 8+ characters password must contain uppercase, lowercase, numeric and special characters.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPassword.$error.minlength\">Input too short.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPassword.$error.maxlength\">Input too long.</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"FieldSetItem\">\n\t\t\t\t\t<label for=\"MyPasswordConfirm\" class=\"sr-only\">\n\t\t\t\t\t\tConfirm Password\n\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t<input\ttype=\"password\" \n\t\t\t\t\t\t\tid=\"MyPasswordConfirm\" \n\t\t\t\t\t\t\tclass=\"form-input\"\n\t\t\t\t\t\t\tname=\"MyPasswordConfirm\" \n\t\t\t\t\t\t\tminlength=\"8\"\n\t\t\t\t\t\t\tmaxlength=\"30\"\n\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\tplaceholder=\"CONFIRMED PASSWORD\"\n\t\t\t\t\t\t\tdata-drct_validate_password_adc\n\t\t\t\t\t\t\tdata-drct_validate_confirm_password_adc=\"MyPassword\"\n\t\t\t\t\t\t\tng-model=\"loc.confirmPassword\" zz-validate-password-characters \t\t\n\t\t\t\t\t>\n\t\t\t\t\t\n\t\t\t\t\t<!--data-drct_validate_password_adc-->\n\n\t\t\t\t\t<div class=\"form_error\">\n\t\t\t\t\t\t <div  class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPasswordConfirm.$error.passwordChars\">Your 8+ characters password must contain uppercase, lowercase, numeric and special characters.</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPasswordConfirm.$error.minlength\">\n\t\t\t\t\t\t\t Input too short.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPasswordConfirm.$error.maxlength\">\n\t\t\t\t\t\t\t Input too long.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div class=\"form_error_item\" ng-if=\"StndPasswordResetForm.MyPasswordConfirm.$error.doPasswordsMatch\">Passwords don't match.</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ButtonContainer\">\n\t\t\t\t\t\t<md-button  \n\t\t\t\t\t\t\tclass=\"md-primary\"  \n\t\t\t\t\t\t\tng-disabled=\"StndPasswordResetForm.$invalid\"  \n\t\t\t\t\t\t\tonclick=\"return false;\" data-drct_click_to_mediator_adc='{\n\t\t\t\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\t\t\t\"noticeName\" : \"PasswordResetButton_clicked\",\n\t\t\t\t\t\t\t\t\t\"vc\" : \"AppVcc_MediatorServiceExtnClass\",  \t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\"context\" : \"\",  \t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\"handoffSpecId\" : \"\"\n\t\t\t\t\t\t\t\t\t}    \t\t\t\t\n\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t>  \n\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t</md-button>  \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t</fieldset>\n\n\t</ng-form>\n\t</div>\n</div>\n</div>\n";

/***/ },
/* 193 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPasswordResetVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rPasswordResetVcc";
		aa.myClassName = "Page4rPasswordResetVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Page4rPasswordResetVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPasswordResetVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rPasswordResetVcc";
		aa.myClassName = "Page4rPasswordResetVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, membersService) {
			console.dog(">>> Page4rPasswordResetVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.membersService = membersService;
				that.booo_greeting = "PasswordReset";
				that._runSetup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		//	================================================================
		//	PUBLIC/PRIVATE METHODS METHODS:
		//{
		p.submitPasswordResetForm = function callee$1$0(notice) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.password = that.scopeNg.loc.password;
						vv.confirnPassword = that.scopeNg.loc.confirmPassword;
						vv.vcode = that.stateParamsNg.vcode;

						context$2$0.prev = 5;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that.membersService.forgotPasswordResetItem(vv.password, vv.vcode));

					case 8:
						vv.remotePasswordReset = context$2$0.sent;

						//vv.postProcessedPasswordReset = await that._postProcessPasswordReset(vv.remotePasswordReset);
						console.dog("-------------------call controllor when submit password reset----------------------------");
						console.dir(vv.remotePasswordReset);

						vv.results = vv.remotePasswordReset.results.invalidResults;

						if (vv.results.length > 0) {
							//error
							vv.viewPasswordResetMsg = { status: "failed", idfier: "pwr_e1", errorr: vv.remotePasswordReset.results.invalidResults, messageForDisplay: vv.remotePasswordReset.results.resultsMessage };
						} else {
							//success
							vv.remotePasswordReset.results.resultsMessage = vv.remotePasswordReset.results.resultsMessage || "Password Successfully Reset";
							vv.viewPasswordResetMsg = { status: "succeeded", idfier: "pwr_e2", sessionId: vv.sessionId, messageForDisplay: vv.remotePasswordReset.results.resultsMessage };
						}

						console.dog(">>> passwordReset - vv.viewPasswordResetMsg: ", vv.viewPasswordResetMsg);
						console.dog(">>> passwordReset - vv.remotePasswordReset: ", vv.remotePasswordReset);
						context$2$0.next = 22;
						break;

					case 17:
						context$2$0.prev = 17;
						context$2$0.t0 = context$2$0["catch"](5);

						vv.viewPasswordResetMsg = { status: "failed", idfier: "pwr_e3", sessionId: vv.sessionId, messageForDisplay: context$2$0.t0.statusText };
						console.dog(">>> passwordReset - error: ", context$2$0.t0);
						console.dog(">>> passwordReset - vv.viewPasswordResetMsg: ", vv.viewPasswordResetMsg);

					case 22:
						context$2$0.prev = 22;

						console.dog(">>>------------- passwordReset - finally00: ");
						vv.pkg = {
							notice: {
								noticeName: "PasswordResetReturnAction",
								passwordResetAPIServerReturn: vv.viewPasswordResetMsg
							}
						};
						context$2$0.next = 27;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that, vv.pkg));

					case 27:
						vv.processAPIReturn = context$2$0.sent;

						console.dog(">>>------------- passwordReset - finally111: ", vv.processAPIReturn);
						return context$2$0.abrupt("return", vv.processAPIReturn);

					case 31:
						return context$2$0.abrupt("return", "done");

					case 32:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[5, 17, 22, 31]]);
		};

		p.passwordResetReturnAction = function callee$1$0(passwordResetReturn) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.passwordResetReturn = passwordResetReturn;

						console.dog(">>>------------------- passwordResetReturnAction ");
						that.scopeNg.loc.passwordResetReturn = passwordResetReturn.passwordResetAPIServerReturn.messageForDisplay || "Your password was reset.  Please click on the logo above to go to the home page";
						that.scopeNg.$apply();
						console.dog(">>>------------------- passwordResetReturnAction - vv.passwordResetReturnMsg: ", that.scopeNg.loc.passwordResetReturn);
						return context$2$0.abrupt("return", vv.passwordResetReturn);

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._runSetup = function () {
			var that = this;
			that._setup();
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that._notifyChangedPageState(that.stateParamsNg));

					case 11:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.loc.remoteSessionId = "";

						console.dog(">>> Page4rPasswordResetVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.password = "";
						that.scopeNg.loc.confirmPassword = "";
						that.scopeNg.loc.vcode = "";
						that.scopeNg.loc.passwordResetReturn = "";

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 5:
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._notifyChangedPageState = function _notifyChangedPageState() {
			var that, pkg, asyncNotify;
			return _regeneratorRuntime.async(function _notifyChangedPageState$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);

						pkg = {
							notice: {
								noticeName: "Changed_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						asyncNotify = function asyncNotify() {

							console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);

							that.mediatorService.receiveNotice(that.scopeNg, pkg);
						};

						that.timeoutNg(asyncNotify);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._openMenu = function ($mdOpenMenu, ev) {
			var that = this;
			var originatorEv = ev;
			$mdOpenMenu(ev);
		};

		//}

		return aa.MyClass;
	})();

	///alert(">>> PasswordResetPanelVcc - boooooo");

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rStationDtlVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(196);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(198);
	aa.LinkFncClass = __webpack_require__(199);
	aa.CtrlClass = __webpack_require__(200);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Page4rStationDtlVcc";
	aa.thisMod = aa.Page4rStationDtlVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPage4rStationDtlVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr, $compile);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "sessionService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rStationDtlVcc/styles/Page4rStationDtlVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rStationDtlVcc/styles/Page4rStationDtlVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Page4rStationDtlVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-page-4r-station-dtl-vcc {\n  display: block;\n}\n.Page4rStationDtlVcc drct-station-info-panel-vcc {\n  margin-bottom: 20px;\n}\n", ""]);

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Page4rStationDtlVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<article class=\"pageTypeArticle\"\n\t\trole=\"region\"\n\t\taria-labeledby=\"information about {{loc.stationSyn}}\"\n\t>\n\t\t<drct-station-info-panel-vcc\n\t\t\tdata-displayed_panel_title = '{{loc.displayedInfoPanelTitle}}'\n\t\t\tdata-playlists_filter = '{{loc.playlistsFilter}}'\n\t\t\tdata-station_id = '{{loc.stationId}}'\n\t\t\tdata-station_name = '{{loc.stationName}}'\n\t\t\tdata-go_dude = '{{loc.goDude}}'\n\t\t>\n\t\t</drct-station-info-panel-vcc>\n\n\n\t\t<drct-playlists-panel-vcc\n\t\t\tname = 'tc_listings1'\n\t\t\tdata-displayed_panel_title = '{{loc.displayedPlaylistsPanelTitle}}'\n\t\t\tdata-playlists_filter = '{{loc.playlistsFilter}}'\n\t\t\tdata-station_id = '{{loc.stationId}}'\n\t\t\tdata-station_name = '{{loc.stationName}}'\n\t\t\tdata-go_dude = '{{loc.goDude}}'\n\t\t>\n\t\t</drct-playlists-panel-vcc>\n\n\t</article>\n\n\n</div>\n";

/***/ },
/* 199 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rStationDtlVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rStationDtlVcc";
		aa.myClassName = "Page4rStationDtlVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Page4rStationDtlVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rStationDtlVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rStationDtlVcc";
		aa.myClassName = "Page4rStationDtlVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, sessionService, stationsService) {
			console.dog(">>> Page4rStationDtlVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.sessionService = sessionService;
				that.stationsService = stationsService;
				that._setup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._refresh());

					case 3:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setup = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.isOkToSetup = true;

						if (!(typeof that._testIfOkToSetup === "function")) {
							context$2$0.next = 8;
							break;
						}

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._testIfOkToSetup());

					case 6:
						vv.isOkToSetupObj = context$2$0.sent;

						vv.isOkToSetup = vv.isOkToSetupObj.isOk;

					case 8:
						if (!vv.isOkToSetup) {
							context$2$0.next = 26;
							break;
						}

						console.dog(">>> Page4rStationDtlVcc_CtrlClass - that.scopeNg / that.stateNg: ", that.scopeNg, that.stateNg);

						context$2$0.next = 12;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 12:
						context$2$0.next = 14;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 14:
						context$2$0.next = 16;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 16:
						context$2$0.next = 18;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 18:
						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 20:
						context$2$0.next = 22;
						return _regeneratorRuntime.awrap(that._notifyChangedPageState(that.stateParamsNg));

					case 22:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						console.dog(">>> Page4rStationDtlVcc setup - setup complete");
						context$2$0.next = 29;
						break;

					case 26:
						context$2$0.next = 28;
						return _regeneratorRuntime.awrap(that._handleNotOkToSetup(vv.isOkToSetupObj));

					case 28:
						vv.voidd = context$2$0.sent;

					case 29:
						return context$2$0.abrupt("return", "done");

					case 30:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function () {
			var that = this;

			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			console.dog(">>> Page4rStationDtlVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.displayedInfoPanelTitle = "About " + that.stateParamsNg.stationName;
						that.scopeNg.loc.displayedPlaylistsPanelTitle = "Projects for " + that.stateParamsNg.stationName;
						that.scopeNg.loc.playlistsFilter = "active";
						that.scopeNg.loc.stationId = that.stateParamsNg.stationId;

						if (!that.stateParamsNg.stationName) {
							context$2$0.next = 10;
							break;
						}

						that.scopeNg.loc.stationName = that.stateParamsNg.stationName;
						context$2$0.next = 15;
						break;

					case 10:
						//{ Pipe in info from remote source.	
						vv.stationDetailsPromise = that._getStationDetails();
						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(vv.stationDetailsPromise);

					case 13:
						that.scopeNg.loc.details = context$2$0.sent;

						//}
						that.scopeNg.loc.stationName = that.scopeNg.loc.details.name;

					case 15:
						return context$2$0.abrupt("return", "done");

					case 16:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that._setup();

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that._setup();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		p.testIfOkToSetup = p._testIfOkToSetup = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.isOkObj = {
							isOk: false,
							reason: undefined
						};

						//{ User not auth test
						vv.sessionId = that.sessionService.getSessionIdForRemote();

						if (vv.sessionId) {
							vv.isOkObj = {
								isOk: true,
								reason: undefined
							};
						} else {
							if (!that.stateNg.current.isAuthRequired === true) {
								vv.isOkObj = {
									isOk: true,
									reason: undefined
								};
							} else {
								vv.isOkObj = {
									isOk: false,
									reason: "UserNotAuthed"
								};
							}
						}
						return context$2$0.abrupt("return", vv.isOkObj);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, vv, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 6:
						vv.voidd = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._notifyChangedPageState = function callee$1$0() {
			var that, pkg, asyncNotify;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);

						pkg = {
							notice: {
								noticeName: "Changed_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						asyncNotify = function asyncNotify() {

							console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);

							that.mediatorService.receiveNotice(that.scopeNg, pkg);
						};

						that.timeoutNg(asyncNotify);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._handleNotOkToSetup = function callee$1$0(isOkToSetupObj) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						if (isOkToSetupObj.reason === "UserNotAuthed") {
							that._setupStndDatas();
							//{ Notifiy mediator reason why can't setup.
							vv.pkg = {
								notice: {
									noticeName: "Page_cannotSetupBecauseUserNotAuthed",
									vcc: aa.myVcName
								}
							};
							that.mediatorService.receiveNotice("", vv.pkg);
							//}
						}

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		p._getStationDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.stationId));

					case 5:
						vv.remoteDetails = context$2$0.sent;

						vv.details = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.stationLogoUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title
						};
						console.dog(">>> Page4rStationDtlVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);

						return context$2$0.abrupt("return", vv.details);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();
	//}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPlaylistDtlVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(202);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(204);
	aa.LinkFncClass = __webpack_require__(205);
	aa.CtrlClass = __webpack_require__(206);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "Page4rPlaylistDtlVcc";
	aa.thisMod = aa.Page4rPlaylistDtlVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPage4rPlaylistDtlVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr, $compile);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "sessionService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rPlaylistDtlVcc/styles/Page4rPlaylistDtlVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/Page4rPlaylistDtlVcc/styles/Page4rPlaylistDtlVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: Page4rPlaylistDtlVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-page-4r-playlist-dtl-vcc {\n  display: block;\n}\n", ""]);

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: Page4rPlaylistDtlVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\n\n\t<article class=\"pageTypeArticle\"\n\t\trole=\"region\"\n\t\taria-labeledby=\"information about {{loc.playlistSyn}}\"\n\t>\n\t\t<drct-playlist-info-panel-vcc\n\t\t\tdata-displayed_panel_title = '{{loc.displayedInfoPanelTitle}}'\n\t\t\tdata-playlist_id = '{{loc.playlistId}}'\n\t\t\tdata-playlist_name = '{{loc.playlistName}}'\n\t\t\tdata-station_id = '{{loc.stationId}}'\n\t\t\tdata-station_name = '{{loc.stationName}}'\n\t\t\tdata-tracks_filter = '{{loc.tracksFilter}}'\t\n\t\t\tdata-go_dude = '{{loc.goDude}}'\n\t\t>\n\t\t</drct-playlist-info-panel-vcc>\n\n\t\t<drct-tracks-panel-vcc\n\t\t\tdata-displayed_panel_title = '{{loc.displayedPlaylistsPanelTitle}}'\n\t\t\tdata-playlist_id = '{{loc.playlistId}}'\n\t\t\tdata-playlist_name = '{{loc.playlistName}}'\n\t\t\tdata-station_id = '{{loc.stationId}}'\n\t\t\tdata-station_name = '{{loc.stationName}}'\n\t\t\tdata-tracks_filter = '{{loc.tracksFilter}}'\t\n\t\t\tdata-go_dude = '{{loc.goDude}}'\n\t\t>\n\t\t</drct-tracks-panel-vcc>\n\t</article>\n</div>\n";

/***/ },
/* 205 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPlaylistDtlVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rPlaylistDtlVcc";
		aa.myClassName = "Page4rPlaylistDtlVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> Page4rPlaylistDtlVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: Page4rPlaylistDtlVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "Page4rPlaylistDtlVcc";
		aa.myClassName = "Page4rPlaylistDtlVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, sessionService, stationsService) {
			console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.sessionService = sessionService;
				that.stationsService = stationsService;
				that._setup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		p.renderOnLoggedInChange = p._renderOnLoggedInChange = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._refresh());

					case 3:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setup = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.isOkToSetup = true;

						if (!(typeof that._testIfOkToSetup === "function")) {
							context$2$0.next = 8;
							break;
						}

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._testIfOkToSetup());

					case 6:
						vv.isOkToSetupObj = context$2$0.sent;

						vv.isOkToSetup = vv.isOkToSetupObj.isOk;

					case 8:
						if (!vv.isOkToSetup) {
							context$2$0.next = 25;
							break;
						}

						console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass - that.scopeNg / that.stateNg: ", that.scopeNg, that.stateNg);

						context$2$0.next = 12;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 12:
						context$2$0.next = 14;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 14:
						context$2$0.next = 16;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 16:
						context$2$0.next = 18;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 18:
						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 20:
						context$2$0.next = 22;
						return _regeneratorRuntime.awrap(that._notifyChangedPageState(that.stateParamsNg));

					case 22:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						context$2$0.next = 28;
						break;

					case 25:
						context$2$0.next = 27;
						return _regeneratorRuntime.awrap(that._handleNotOkToSetup(vv.isOkToSetupObj));

					case 27:
						vv.voidd = context$2$0.sent;

					case 28:
						return context$2$0.abrupt("return", "done");

					case 29:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function () {
			var that = this;

			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.displayedInfoPanelTitle = "About " + that.stateParamsNg.stationName;
						that.scopeNg.loc.displayedPlaylistsPanelTitle = "Playlists for " + that.stateParamsNg.stationName;
						that.scopeNg.loc.stationId = that.stateParamsNg.stationId;
						that.scopeNg.loc.playlistId = that.stateParamsNg.playlistId;
						that.scopeNg.loc.playlistName = that.stateParamsNg.playlistName;

						if (!(that.stateParamsNg.stationName && that.stateParamsNg.playlistName)) {
							context$2$0.next = 12;
							break;
						}

						that.scopeNg.loc.stationName = that.stateParamsNg.stationName;
						that.scopeNg.loc.playlistName = that.stateParamsNg.playlistName;
						context$2$0.next = 24;
						break;

					case 12:
						//{ Pipe in info from remote source.	
						vv.stationDetailsPromise = that._getStationDetails();
						vv.playlistDetailsPromise = that._getPlaylistDetails();

						context$2$0.next = 16;
						return _regeneratorRuntime.awrap(vv.stationDetailsPromise);

					case 16:
						that.scopeNg.loc.stationDetails = context$2$0.sent;
						context$2$0.next = 19;
						return _regeneratorRuntime.awrap(vv.playlistDetailsPromise);

					case 19:
						that.scopeNg.loc.playlistDetails = context$2$0.sent;

						//}
						that.scopeNg.loc.stationName = that.scopeNg.loc.stationDetails.name;
						context$2$0.next = 23;
						return _regeneratorRuntime.awrap(vv.playlistDetailsPromise);

					case 23:
						that.scopeNg.loc.playlistName = context$2$0.sent;

					case 24:

						that.scopeNg.loc.tracksFilter = "active";

						return context$2$0.abrupt("return", "done");

					case 26:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		p.testIfOkToSetup = p._testIfOkToSetup = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.isOkObj = {
							isOk: false,
							reason: undefined
						};

						//{ User not auth test
						vv.sessionId = that.sessionService.getSessionIdForRemote();

						if (vv.sessionId) {
							vv.isOkObj = {
								isOk: true,
								reason: undefined
							};
						} else {
							if (!that.stateNg.current.isAuthRequired === true) {
								vv.isOkObj = {
									isOk: true,
									reason: undefined
								};
							} else {
								vv.isOkObj = {
									isOk: false,
									reason: "UserNotAuthed"
								};
							}
						}
						return context$2$0.abrupt("return", vv.isOkObj);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 5:
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._notifyChangedPageState = function _notifyChangedPageState() {
			var that, pkg, asyncNotify;
			return _regeneratorRuntime.async(function _notifyChangedPageState$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that: ", that);

						pkg = {
							notice: {
								noticeName: "Changed_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						asyncNotify = function asyncNotify() {

							console.dog(">>> " + aa.myClassName + " - _notifyChangedPageState - that, pkg: ", that, pkg);

							that.mediatorService.receiveNotice(that.scopeNg, pkg);
						};

						that.timeoutNg(asyncNotify);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._handleNotOkToSetup = function callee$1$0(isOkToSetupObj) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						if (isOkToSetupObj.reason === "UserNotAuthed") {
							that._setupStndDatas();
							//{ Notifiy mediator reason why can't setup.
							vv.pkg = {
								notice: {
									noticeName: "Page_cannotSetupBecauseUserNotAuthed",
									vcc: aa.myVcName
								}
							};
							that.mediatorService.receiveNotice("", vv.pkg);
							//}
						}

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		p._getPlaylistDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.playlistId = that.scopeNg.loc.playlistId;
						vv.stationId = that.scopeNg.loc.stationId;

						console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass - vv.stationId, vv.playlistId: ", vv.stationId, vv.playlistId);

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylist(vv.stationId, vv.playlistId));

					case 7:
						vv.remoteDetails = context$2$0.sent;

						vv.details = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.stationLogoUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title,
							duration: vv.remoteDetails.length
						};
						console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass._getPlaylistDetails : ", vv.stationId, vv.playlistId, vv.remoteDetails, vv.details);

						return context$2$0.abrupt("return", vv.details);

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._getStationDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.stationId));

					case 5:
						vv.remoteDetails = context$2$0.sent;

						vv.details = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.stationLogoUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title
						};
						console.dog(">>> Page4rPlaylistDtlVcc_CtrlClass._getStationDetails : ", vv.stationId, vv.remoteDetails, vv.details);

						return context$2$0.abrupt("return", vv.details);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();
	//}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayButtonVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(208);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(210);
	aa.LinkFncClass = __webpack_require__(211);
	aa.CtrlClass = __webpack_require__(212);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "PlayButtonVcc";
	aa.thisMod = aa.PlayButtonVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPlayButtonVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            ariaLabeling: "@",
	            instanceIdfier: "@",
	            playlistId: "@",
	            stationId: "@",
	            trackId: "@",
	            trackUid: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlayButtonVcc/styles/PlayButtonVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlayButtonVcc/styles/PlayButtonVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: PlayButtonVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-play-button-panel-vcc {\n  display: block;\n}\n.PlayButtonVcc .PlayButtonVccTrigger {\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-position: -218px -241px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.PlayButtonVcc .PlayButtonVccTrigger:hover {\n  background-color: #b97;\n  -webkit-box-shadow: 0 0 10px #b97;\n  box-shadow: 0 0 10px #b97;\n}\n.PlayButtonVcc .PlayButtonVccTrigger:active {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n.PlayButtonVcc .PlayButtonVccTrigger:focus {\n  outline: none;\n}\n.TracksPanelVcc .listingItem:hover .PlayButtonVcc .PlayButtonVccTrigger {\n  background-color: #b97;\n  -webkit-box-shadow: 0 0 10px #b97;\n  box-shadow: 0 0 10px #b97;\n}\n.TracksPanelVcc .listingItem:active .PlayButtonVcc .PlayButtonVccTrigger {\n  background-color: #f5841f;\n  -webkit-box-shadow: 0 0 10px #f5841f;\n  box-shadow: 0 0 10px #f5841f;\n}\n", ""]);

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: PlayButtonVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<button class=\"{{loc.myVcName}}Trigger  {{loc.myVcName}}Trigger_{{loc.instanceIdfier}}\"\n\t\taria-label=\"{{ariaLabeling}}\"\n\t\tonclick=\"return false;\"\n\t\tdata-pkg = '{\n\t\t\t\"notice\": {\n\t\t\t\t\"noticeName\": \"{{loc.myVcName}}_clicked\",\n\t\t\t\t\"vc\": \"{{loc.myVcName}}\",\n\t\t\t\t\"context\": \"\",\n\t\t\t\t\"playlistId\": \"{{loc.playlistId}}\",\n\t\t\t\t\"stationId\": \"{{loc.stationId}}\",\n\t\t\t\t\"trackId\": \"{{loc.trackId}}\",\n\t\t\t\t\"trackUid\": \"{{loc.trackUid}}\",\n\t\t\t\t\"triggerTagToUse\": \"{{loc.myVcName}}_{{loc.instanceIdfier}}\"\n\t\t\t}\n\t\t}'\n\t>\n\t</button>\n\t\n</div>\n\n<!--- EXAMPLE ---\n\t<drct-play-button-vcc\n\t\tdata-aria_labeling = 'a'\n\t\tdata-instance_idfier = 'a'\n\t\tdata-playlist_id = 'a'\n\t\tdata-station_id = 'a'\n\t\tdata-track_id = 'a'\n\t>\n\t</drct-play-button-vcc>\n-->\n";

/***/ },
/* 211 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayButtonVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlayButtonVcc";
		aa.myClassName = "PlayButtonVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> PlayButtonVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlayButtonVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlayButtonVcc";
		aa.myClassName = "PlayButtonVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> PlayButtonVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> PlayButtonVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> PlayButtonVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						that.scopeNg.loc.stationId = that.scopeNg.stationId;
						that.scopeNg.loc.trackId = that.scopeNg.trackId;
						that.scopeNg.loc.trackUid = that.scopeNg.trackUid;
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("ariaLabeling", function () {
							that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						});
						that.scopeNg.$watch("instanceIdfier", function () {
							that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						});
						that.scopeNg.$watch("playlistId", function () {
							that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						});
						that.scopeNg.$watch("stationId", function () {
							that.scopeNg.loc.stationId = that.scopeNg.stationId;
						});
						that.scopeNg.$watch("trackId", function () {
							that.scopeNg.loc.trackId = that.scopeNg.trackId;
						});
						that.scopeNg.$watch("trackUid", function () {
							that.scopeNg.loc.trackUid = that.scopeNg.trackUid;
						});
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	PLAY BUTTON TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	PLAY BUTTON TYPE PRIVATE METHODS:
		//{	

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PurposedPage4rStandalonesVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(214);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(216);
	aa.LinkFncClass = __webpack_require__(217);
	aa.CtrlClass = __webpack_require__(218);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "PurposedPage4rStandalonesVcc";
	aa.thisMod = aa.PurposedPage4rStandalonesVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPurposedPage4rStandalonesVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr, $compile);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "mediatorService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            purposing: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(215);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PurposedPage4rStandalonesVcc/styles/PurposedPage4rStandalonesVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PurposedPage4rStandalonesVcc/styles/PurposedPage4rStandalonesVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: PurposedPage4rStandalonesVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-purposed-page-4r-standalones-vcc {\n  display: block;\n}\n.PurposedPage4rStandalonesVcc .articleInPage {\n/* Layout */\n  margin: 30px 10vw 30px 10vw;\n}\n.PurposedPage4rStandalonesVcc .contentInPage {\n/* Layout */\n  margin: 30px 10vw 30px 10vw;\n}\n.PurposedPage4rStandalonesVcc .articleHeader_in_page {\n/* Layout */\n  margin-bottom: 20px;\n}\n.PurposedPage4rStandalonesVcc .articleHeading_in_page {\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n}\n.PurposedPage4rStandalonesVcc .articleBody_in_page {\n/* Layout */\n  margin-bottom: 0;\n}\n.PurposedPage4rStandalonesVcc .articleSection_in_page {\n/* Layout */\n  margin-bottom: 20px;\n}\n.PurposedPage4rStandalonesVcc .articleSection_in_page:last-child {\n/* Layout */\n  margin-bottom: 0px;\n}\n.PurposedPage4rStandalonesVcc .articleSectionHeader_in_page {\n/* Layout */\n  margin-bottom: 15px;\n}\n.PurposedPage4rStandalonesVcc .articleSectionHeading_in_page {\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  color: #f5841f;\n  text-transform: capitalize;\n}\n.PurposedPage4rStandalonesVcc .articleSectionBody_in_page {\n/* Layout */\n  margin: 0;\n}\n.PurposedPage4rStandalonesVcc .articleParag_in_page {\n/* Layout */\n  margin-bottom: 10px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\n.PurposedPage4rStandalonesVcc .articleParag_in_page:last-child {\n/* Layout */\n  margin-bottom: 0px;\n}\n", ""]);

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: PurposedPage4rStandalonesVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t\n\t<article class=\"standaloneContent\" ng-switch on=\"loc.purposing.type\">\n\t\t\n\t\t<div ng-switch-when=\"TOC\" >\n\t\t\t<!---\n\t\t\t<ng-include src=\"'SymLinks/path-to-html-file-under-*deploy*-folder'\"></ng-include>\n\t\t\t--->\n\t\t</div>\n\t\t\n\t\t<div ng-switch-when=\"EmailValidation\">\n\t\t\t<div class=\"contentInPage\">\n\t\t\t<p class=\"articleParag_in_page\">Waystation Page for Email Address Confirmation.</p>\n\t\t\t<p class=\"articleParag_in_page\">If you are not redirected to another page, please again try clicking on the link in your inbox.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</article>\n\n\n</div>\n";

/***/ },
/* 217 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PurposedPage4rStandalonesVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PurposedPage4rStandalonesVcc";
		aa.myClassName = "PurposedPage4rStandalonesVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> PurposedPage4rStandalonesVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PurposedPage4rStandalonesVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PurposedPage4rStandalonesVcc";
		aa.myClassName = "PurposedPage4rStandalonesVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, mediatorService) {
			console.dog(">>> PurposedPage4rStandalonesVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.mediatorService = mediatorService;
				that.stateParamsNg = stateParamsNg;
				that._runSetup();
				return "done";
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._runSetup = function () {
			var that = this;
			that._setup();
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._notifyEnteringPageState(that.stateParamsNg));

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						that.scopeNg.loc.goDude = that.scopeNg.goDude || "truee";
						that.scopeNg.$apply();
						return context$2$0.abrupt("return", "done");

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function () {
			var that = this;

			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.methods = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";
			console.dog(">>> PurposedPage4rStandalonesVcc_CtrlClass - that.scopeNg: ", that.scopeNg);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						///alert(">>> that.scopeNg.purposing: " + that.scopeNg.purposing)
						that.scopeNg.loc.purposing = angular.fromJson(that.scopeNg.purposing);
						return context$2$0.abrupt("return", "done");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._refresh = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//	================================================================
		//	PAGE TYPE PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	PAGE TYPE PRIVATE METHODS:
		//{
		p._notifyEnteringPageState = function callee$1$0() {
			var that, pkg;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						pkg = {
							notice: {
								noticeName: "Entering_PageState",
								pageStateName: that.stateNg.current.name
							}
						};

						console.dog(">>> " + aa.myClassName + " - _notifyEnteringPageState - that, pkg: ", that, pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.mediatorService.receiveNotice(that.scopeNg, pkg));

					case 5:
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(">>> PurposedPage4rStandalonesVcc - boooooo");

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationInfoPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(220);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(222);
	aa.LinkFncClass = __webpack_require__(223);
	aa.CtrlClass = __webpack_require__(224);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "StationInfoPanelVcc";
	aa.thisMod = aa.StationInfoPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctStationInfoPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "sessionService", "stationsService", "bannerService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            displayedPanelTitle: "@",
	            playlistsFilter: "@",
	            stationId: "@",
	            stationName: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(221);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/StationInfoPanelVcc/styles/StationInfoPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/StationInfoPanelVcc/styles/StationInfoPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: StationInfoPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-station-info-panel-vcc {\n  display: block;\n}\n.StationInfoPanelVcc .header_in_detail {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -o-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n/* Layout */\n  height: 25vw;\n  min-height: 100px;\n  margin-top: -20px;\n  margin-bottom: 40px;\n  padding: 10vw 0 2vw 10px;\n/* Style */\n  border__: solid 1px #f00;\n  border-bottom: solid 5px #eee;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .header_in_detail {\n/* Layout */\n    padding: 10vw 10vw 2vw 10vw;\n  }\n}\n.StationInfoPanelVcc .logo_in_header_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  margin-top: -3vw;\n  width: 20vw;\n  height: 20vw;\n  min-width: 115px;\n  min-height: 115px;\n/* Style */\n  border: solid 1px #bbb;\n  -webkit-box-shadow: $AppVcc_stndOneUpBoxShadow;\n  box-shadow: $AppVcc_stndOneUpBoxShadow;\n}\n.StationInfoPanelVcc .primaryZone_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  width: 100%;\n  height: 15vw;\n  min-height__: 100px;\n  padding: 20px 10px 5px 15px;\n/* Style */\n  border__: solid 1px #00f;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .primaryZone_in_detail {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: end;\n    -moz-box-pack: end;\n    -o-box-pack: end;\n    -ms-flex-pack: end;\n    -webkit-justify-content: flex-end;\n    justify-content: flex-end;\n/* Layout */\n    padding: 20px 10px 20px 20px;\n  }\n}\n.StationInfoPanelVcc .heading_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n/* Layout */\n  width__: 100%;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n  color: #fff;\n  text-shadow: 2px 2px 5px #000;\n  text-transform: uppercase;\n  border_: solid 1px #ff0;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .heading_in_detail {\n    font-family: Verdana, Geneva, sans-serif;\n    font-size: 23px;\n    color__: #444;\n  }\n}\n.StationInfoPanelVcc .verticalDashboardRight_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -o-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n/* Layout */\n  padding: 20px 0 25px 0px;\n  height: 15vw;\n  min-height__: 100px;\n/* Style */\n  border__: solid 1px #f00;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .verticalDashboardRight_in_detail {\n/* Layout */\n    padding: 20px 10px 25px 10px;\n  }\n}\n.StationInfoPanelVcc .menuTrigger_in_detail {\n/* Layout */\n  margin-bottom: -14px;\n  margin-right: -10px;\n/* Style */\n  border__: solid 1px #f00;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .menuTrigger_in_detail {\n/* Layout */\n    margin-left: 0;\n  }\n}\n.StationInfoPanelVcc .stats_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  padding: 4vw 15px 0 15px;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .stats_in_detail {\n/* Layout */\n    padding: 4vw 10vw 0 10vw;\n  }\n}\n.StationInfoPanelVcc .statsRow_in_detail {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n.StationInfoPanelVcc .statsItem_in_detail {\n/* Layout */\n  padding: 0 0 20px 0;\n  width: 200px;\n}\n.StationInfoPanelVcc .statsItemLabel_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  color: #f5841f;\n  text-transform: capitalize;\n}\n.StationInfoPanelVcc .statsItemValue_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\n.StationInfoPanelVcc .description_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  padding: 0 15px 20px 15px;\n}\n@media only screen and (min-width: 480px) {\n  .StationInfoPanelVcc .description_in_detail {\n/* Layout */\n    padding: 0 10vw 20px 10vw;\n  }\n}\n.StationInfoPanelVcc .descriptionLabel_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  color: #f5841f;\n  text-transform: capitalize;\n}\n.StationInfoPanelVcc .descriptionCopy_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n/* Layout addition for ellipses */\n/* ...Ref: http://joelsaupe.com/programming/multiple-line-ellipsis-css/ */\n/* NOT USED NOW ...\n\t\t\tdisplay: block;\n\t\t\theight: 34px\n\t\t\twidth: 100%\n\t\t\t\n\t\t\tdisplay: -webkit-box;\n\t\t\t-webkit-line-clamp: 2;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\t*/\n}\ndrct-station-info-panel-vcc {\n  display: block;\n}\n@media (max-width: 767px) {\n  .StationInfoPanelVcc .statsRow_in_detail {\n/* Flex-box spcf */\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n}\n", ""]);

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: StationInfoPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t<section class=\"detailSection\"\n\t\trole=\"region\"\n\t\taria-labeledby=\"Information about {{loc.stationSyn}}\"\n\t>\n\t\t\n\t\t<header class=\"header_in_detail\"\n\t\t\tstyle = 'background: url({{loc.banners.banner.imageUrls[0]}}); background-size: 100% 100%; background-repeat: no-repeat;'\n\t\t>\n\t\t\t<img class=\"logo_in_header_detail\" \n\t\t\t\tsrc=\"{{loc.details.logoUrl}}\"\n\t\t\t\talt=\"Logo for {{loc.stationSyn}} named {{loc.details.title}}\"\n\t\t\t>\n\t\t\t\n\t\t\t<div class=\"primaryZone_in_detail\"> \n\t\t\t\t<h1 class=\"heading_in_detail\">\n\t\t\t\t\t\t{{loc.details.title}}\n\t\t\t\t</h1>\n\t\t\t</div>\n\n\t\t\t<div class=\"verticalDashboardRight_in_detail\"\n\t\t\t\tng-if=\"loc.hasSession\"\n\t\t\t>\n\t\t\t\t<drct-menu-items-holder-with-trigger-vcc\n\t\t\t\t\tclass=\"menuTrigger_in_detail\"\n\t\t\t\t\tdata-aria_labeling = 'Options menu for this {{loc.stationSyn}}.'\n\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}'\n\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\n\t\t\t\t>\n\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t<drct-button-4r-facebook-share-vcc\n\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\"itemType\": \"Station\",\n\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t></drct-button-4r-facebook-share-vcc>\n\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\n\n\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t<drct-button-4r-email-share-vcc\n\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\"itemType\": \"Station\",\n\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t></drct-button-4r-email-share-vcc>\n\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\n\t\t\t\t</drct-menu-items-holder-with-trigger-vcc>\n\t\t\t</div>\n\n\t\t</header>\n\t\t<div class=\"stats_in_detail\">\n\n\t\t\t<div class=\"statsRow_in_detail\">\n\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">Address: </p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\">{{loc.details.address}} {{loc.details.city}} {{loc.details.state}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">School Website:</p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\"><a href=\"{{loc.details.websiteUrl}}\" target=\"_blank\">{{loc.details.websiteUrl}}</a></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">Grades Offered:</p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\">{{loc.details.enrollmentGrades}}</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"statsRow_in_detail\">\n\t\t\t\t\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">Total Enrollment:</p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\">{{loc.details.enrollmentStudents}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">Gender:</p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\">{{loc.details.enrollmentGender}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"statsItem_in_detail\">\n\t\t\t\t\t<p class=\"statsItemLabel_in_detail\">Type of School:</p>\n\t\t\t\t\t<p class=\"statsItemValue_in_detail\">{{loc.details.enrollmentType}}</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"description_in_detail\">\n\t\t\t<p class=\"descriptionLabel_in_detail\">Description:</p>\n\t\t\t<p class=\"descriptionCopy_in_detail\">{{loc.details.description}}</p>\n\t\t</div>\n\n\n\t\t</div>\n\n\t</section>\n</div>\n";

/***/ },
/* 223 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationInfoPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "StationInfoPanelVcc";
		aa.myClassName = "StationInfoPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> StationInfoPanelVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationInfoPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "StationInfoPanelVcc";
		aa.myClassName = "StationInfoPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, sessionService, stationsService, bannerService) {
			console.dog(">>> StationInfoPanelVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.sessionService = sessionService;
				that.stationsService = stationsService;
				that.bannerService = bannerService;
				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						console.dog(">>> StationInfoPanelVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> StationInfoPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.hasSession = that.sessionService.getSessionIdForRemote() ? true : false;
						that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
						that.scopeNg.loc.stationId = that.scopeNg.stationId;
						that.scopeNg.loc.stationName = that.scopeNg.stationName;

						//{ Pipe in listing from remote source.	
						//that.scopeNg.loc.details = await that._getViewDetails();
						vv.detailsPr = that._getViewDetails();
						vv.bannersPr = that._getBanners();

						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(vv.detailsPr);

					case 11:
						that.scopeNg.loc.details = context$2$0.sent;
						context$2$0.next = 14;
						return _regeneratorRuntime.awrap(vv.bannersPr);

					case 14:
						that.scopeNg.loc.banners = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 16:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("displayedPanelTitle", function () {
							that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						});
						that.scopeNg.$watch("playlistsFilter", function () {
							that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
						});
						that.scopeNg.$watch("stationId", function () {
							that.scopeNg.loc.stationId = that.scopeNg.stationId;
						});
						that.scopeNg.$watch("stationName", function () {
							that.scopeNg.loc.stationName = that.scopeNg.stationName;
						});
						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	INFO PANEL TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	INFO PANEL TYPE PRIVATE METHODS:
		//{
		p._getBanners = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.bannerService.getStationBanners(vv.stationId));

					case 5:
						vv.remoteBanners = context$2$0.sent;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that._postProcessStationBanners(vv.remoteBanners));

					case 8:
						vv.postProcessedBanner = context$2$0.sent;

						vv.viewBanners = {
							banner: vv.postProcessedBanner
						};
						return context$2$0.abrupt("return", vv.viewBanners);

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._postProcessStationBanners = function callee$1$0(banners) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.defaultBanners = banners.defaultBanner;
						vv.liumeiBanners = banners.liumei365;
						vv.stationBanners = banners.station;

						if (vv.stationBanners.length) {
							vv.viewBanners = vv.stationBanners[Math.floor(Math.random() * vv.stationBanners.length)];;
						} else if (vv.defaultBanners.length) {
							vv.viewBanners = vv.defaultBanners[Math.floor(Math.random() * vv.defaultBanners.length)];
						} else if (vv.liumeiBanners.length) {
							vv.viewBanners = vv.liumeiBanners[Math.floor(Math.random() * vv.liumeiBanners.length)];;
						}
						return context$2$0.abrupt("return", vv.viewBanners);

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._getViewDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.stationId));

					case 5:
						vv.remoteDetails = context$2$0.sent;

						vv.viewDetails = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.stationLogoUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title,
							address: vv.remoteDetails.address,
							city: vv.remoteDetails.city,
							state: vv.remoteDetails.state,
							websiteUrl: vv.remoteDetails.websiteUrl,
							enrollmentGender: vv.remoteDetails.extraData.enrollmentGender,
							enrollmentGrades: vv.remoteDetails.extraData.enrollmentGrades,
							enrollmentType: vv.remoteDetails.extraData.enrollmentType,
							enrollmentStudents: vv.remoteDetails.extraData.enrollmentStudents
						};
						console.dog(">>> StationInfoPanelVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);

						return context$2$0.abrupt("return", vv.viewDetails);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);

	//}
	//}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationsPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(226);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(228);
	aa.LinkFncClass = __webpack_require__(229);
	aa.CtrlClass = __webpack_require__(230);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "StationsPanelVcc";
	aa.thisMod = aa.StationsPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctStationsPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            stationsFilter: "@",
	            displayedPanelTitle: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/StationsPanelVcc/styles/StationsPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/StationsPanelVcc/styles/StationsPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: StationsPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-stations-panel-vcc {\n  display: block;\n}\n.StationsPanelVcc {\n/* Layout */\n  padding-top: 20px;\n  padding-bottom: 40px;\n}\n.StationsPanelVcc .listingsBox {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -o-box-lines: multiple;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n/* Style */\n  border__: solid 1px #008000;\n}\n.StationsPanelVcc .listingItem {\n/* Flex-child spcf */\n/* Layout */\n  height: 185px;\n  width: 450px;\n  margin: 15px;\n/* Style */\n  background-color: #fff;\n  border: solid 1px #999;\n  -webkit-border-radius: 10px;\n  border-radius: 10px;\n}\n.StationsPanelVcc .listingItem:hover {\n  border-color: #00f;\n}\n.StationsPanelVcc .listingItem:active {\n  border-color: #08f;\n}\n.StationsPanelVcc .link_on_listingContent {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Style */\n  color: #000;\n  text-decoration: none;\n}\n.StationsPanelVcc .header_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n/* Layout */\n  width: 100%;\n  overflow: hidden;\n/* Style */\n  border__: solid 1px #f00;\n}\n.StationsPanelVcc .imageAndButtonHolder_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  position: relative;\n  height: 115px;\n  width: 115px;\n  margin: 5px 0 0 5px;\n}\n.StationsPanelVcc .image_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  height: 115px;\n  width: 115px;\n/* Style */\n  border: solid 1px #ddd;\n}\n.StationsPanelVcc .playbuttonBox_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: block;\n/* Layout */\n  position: absolute;\n  top: 70px;\n  left: 70px;\n/* Style */\n  border__: solid 1px #f00;\n}\n.StationsPanelVcc .primaryZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 20px 10px 20px 20px;\n/* Style */\n  border__: solid 1px #00f;\n}\n.StationsPanelVcc .heading_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n/* Layout */\n  padding: 0 0 5px 0;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n}\n.StationsPanelVcc .headingCopy_in_listing__ {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n/* Style */\n  font-size: 15px;\n  font-weight: 600;\n}\n.StationsPanelVcc .dashboard_in_listing__ {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n/* Layout */\n  padding: 5px 0 0 0;\n/* Style */\n  border__: solid 1px #008000;\n}\n.StationsPanelVcc .trackLength_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n}\n.StationsPanelVcc .verticalDashboardRight_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -o-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n/* Layout */\n  padding: 20px 10px 13px 10px;\n/* Style */\n  background-color__: #eee;\n  border__: solid 1px #00f;\n}\n.StationsPanelVcc .ontoPageArrowHolder_in_listing {\n/* Layout */\n  margin-top: 2px;\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 14px;\n  height: 22px;\n  background-position: -260px -5px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.StationsPanelVcc .listingItem:hover .ontoPageArrowHolder_in_listing {\n  background-color: #ddf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.StationsPanelVcc .listingItem:active .ontoPageArrowHolder_in_listing {\n  background-color: #aaf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.StationsPanelVcc .descriptionZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 15px 10px 15px 10px;\n/* Style */\n  border__: solid 1px #ffa500;\n}\n@media only screen and (min-width: 480px) {\n  .StationsPanelVcc .descriptionZone_in_listing {\n/* Layout */\n    padding: 15px 20px 15px 20px;\n  }\n}\n.StationsPanelVcc .descriptionCopy_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  height: 34px;\n/* Style */\n  font-size: 13px;\n  border__: solid 1px #008000;\n/* Layout addition for ellipses */\n/* Ref: http://joelsaupe.com/programming/multiple-line-ellipsis-css/ */\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n", ""]);

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: StationsPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<nav class=\"listingsNav\">\n\t\t<ul class=\"listingsBox\"\t\n\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\"pkgTags\": [\".PlayButtonVccTrigger\"],\n\t\t\t\t\"doBubble\": \"true\"\n\t\t\t}'\n\t\t>\n\t\t\t\n\t\t\t<li class=\"listingItem\" \n\t\t\t\tng-repeat=\"Listing_ in loc.listings\"   \n\t\t\t\tng-class=\"{ 'focsed' : Listing_.id == vv.FocsedItem.id}\"\n\t\t\t\tid=\"listing_{{Listing_.id}}\"\n\t\t\t>\n\n\t\t\t\t<a class=\"link_on_listingContent\" \n\t\t\t\t\thref=\"{{loc.stationSyn}}/{{Listing_.title | spacesToDashes }}/{{Listing_.id}}\"\n\t\t\t\t\ttitle=\"{{Listing_.title}}\" \n\t\t\t\t>\n\n\t\t\t\t\t<header class=\"header_in_listing\">\n\n\t\t\t\t\t\t<div class=\"imageAndButtonHolder_in_listing\">\n\t\t\t\t\t\t\t<img class=\"image_in_listing\" \n\t\t\t\t\t\t\t\tsrc=\"{{Listing_.stationLogoUrl}}\"\n\t\t\t\t\t\t\t\talt=\"Listing image for {loc.stationSyn}} named {{Listing_.title}}\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<aside class=\"playbuttonBox_in_listing transcludeSlot\"\n\t\t\t\t\t\t\t\trole=\"complementary\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<drct-play-button-vcc\n\t\t\t\t\t\t\t\t\tdata-aria_labeling = 'Button to play tracks for primary {{loc.playlistSyn}} for this {{loc.stationSyn}}'\n\t\t\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}_{{$index}}'\n\t\t\t\t\t\t\t\t\tdata-playlist_id = ''\n\t\t\t\t\t\t\t\t\tdata-station_id = '{{Listing_.id}}'\n\t\t\t\t\t\t\t\t\tdata-track_id = ''\n\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</drct-play-button-vcc>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"primaryZone_in_listing\"> \n\t\t\t\t\t\t\t<h1 class=\"heading_in_listing\">\n\t\t\t\t\t\t\t\t\t{{Listing_.title }} \n\t\t\t\t\t\t\t</h1>\n\n\t\t\t\t\t\t\t<div class=\"dashboard_in_listing\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"verticalDashboardRight_in_listing\">\n\t\t\t\t\t\t\t<div class=\"ontoPageArrowHolder_in_listing\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\n\t\t\t\t\t<div class=\"descriptionZone_in_listing\">\n\t\t\t\t\t\t<p class=\"descriptionCopy_in_listing\">\n\t\t\t\t\t\t\t{{Listing_.description}}\n\t\t\t\t\t\t<p>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t\t\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n</div>\n";

/***/ },
/* 229 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationsPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "StationsPanelVcc";
		aa.myClassName = "StationsPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> StationsPanelVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationsPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "StationsPanelVcc";
		aa.myClassName = "StationsPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> StationsPanelVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> StationsPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationsFilter = that.scopeNg.stationsFilter;
						that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._getListingsForView());

					case 5:
						that.scopeNg.loc.listings = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						return context$2$0.abrupt("return", "done");

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	LISTINGS PANEL TYPE PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	LISTINGS PANEL TYPE PRIVATE METHODS:
		//{

		p._getListingsForView = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationsFilter = that.scopeNg.loc.stationsFilter;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStations(vv.stationsFilter));

					case 5:
						vv.listings = context$2$0.sent;

						console.dog(">>> StationsPanelVcc_CtrlClass._getListingsForView : ", vv.listings);

						return context$2$0.abrupt("return", vv.listings);

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();
	//{ Pipe in listing from remote source.	

	//}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistInfoPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(232);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(234);
	aa.LinkFncClass = __webpack_require__(235);
	aa.CtrlClass = __webpack_require__(236);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "PlaylistInfoPanelVcc";
	aa.thisMod = aa.PlaylistInfoPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPlaylistInfoPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", "toolboxService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            displayedPanelTitle: "@",
	            playlistId: "@",
	            playlistName: "@",
	            stationId: "@",
	            stationName: "@",
	            tracksFilter: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(233);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlaylistInfoPanelVcc/styles/PlaylistInfoPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlaylistInfoPanelVcc/styles/PlaylistInfoPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: PlaylistInfoPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-playlist-info-panel-vcc {\n  display: block;\n}\n.PlaylistInfoPanelVcc .detailSection {\n/* Layout */\n  margin-top: -20px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n/* Style */\n  background-color: #eee;\n}\n.PlaylistInfoPanelVcc .primayZone_in_detail {\n/* Layout */\n  width: 100%;\n  margin-bottom: 0;\n}\n.PlaylistInfoPanelVcc .parentLink_in_detail {\n/* Layout */\n  margin-bottom: 5px;\n  padding: 1px;\n/* Style */\n  color: #00d;\n  text-decoration: none;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n}\n.PlaylistInfoPanelVcc .parentLink_in_detail:hover {\n  color: #00f;\n}\n.PlaylistInfoPanelVcc .parentLink_in_detail:active {\n  color: #08f;\n}\n.PlaylistInfoPanelVcc .header_in_detail {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  border__: solid 1px #ffa500;\n}\n.PlaylistInfoPanelVcc .billboardImg_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  width: 100%;\n  height: 20vw;\n/* Style */\n  border-bottom: solid 2px #000;\n}\n.PlaylistInfoPanelVcc .logo_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  width: 14vw;\n  height: 14vw;\n  min-width: 115px;\n  min-height: 115px;\n/* Style */\n  border: solid 1px #bbb;\n  -webkit-box-shadow: $AppVcc_stndOneUpBoxShadow;\n  box-shadow: $AppVcc_stndOneUpBoxShadow;\n}\n.PlaylistInfoPanelVcc .headerContent_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 0;\n/* Style */\n  border__: solid 1px #ffa500;\n}\n@media only screen and (min-width: 480px) {\n  .PlaylistInfoPanelVcc .headerContent_in_detail {\n/* Layout */\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n}\n.PlaylistInfoPanelVcc .primaryZone_in_headerContent_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  padding: 1vw 10px 1vw 15px;\n/* Style */\n  border_: solid 2px #f00;\n}\n@media only screen and (min-width: 480px) {\n  .PlaylistInfoPanelVcc .primaryZone_in_headerContent_in_detail {\n/* Layout */\n    padding: 1vw 20px 1vw 20px;\n  }\n}\n.PlaylistInfoPanelVcc .heading_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  margin-bottom: 15px;\n  width: 100%;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n}\n@media only screen and (min-width: 480px) {\n  .PlaylistInfoPanelVcc .heading_in_detail {\n    font-family: Verdana, Geneva, sans-serif;\n    font-size: 23px;\n    color__: #444;\n  }\n}\n.PlaylistInfoPanelVcc .horizontalDashboard_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n/* Style */\n  border__: solid 1px #00f;\n}\n.PlaylistInfoPanelVcc .episodeMeta_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  margin-right: 10px;\n  padding-right: 10px;\n  border-right: solid 1px #bbb;\n}\n.PlaylistInfoPanelVcc .episodeMetaLabel_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #f5841f;\n  text-transform: capitalize;\n}\n.PlaylistInfoPanelVcc .episodeMetaCopy_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  margin-bottom: 3px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\n.PlaylistInfoPanelVcc .durationMeta_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.PlaylistInfoPanelVcc .durationMetaLabel_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #f5841f;\n  text-transform: capitalize;\n}\n.PlaylistInfoPanelVcc .durationMetaCopy_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  margin-bottom: 3px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n}\n.PlaylistInfoPanelVcc .verticalDashboardRight_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 30px 0px 5px 10px;\n/* Style */\n  border__: solid 1px #00f;\n}\n@media $verticalDashboardRight_in_detail {\n  .PlaylistInfoPanelVcc .primaryZone_in_headerContent_in_detail {\n/* Layout */\n    padding: 30px 10px 5px 10px;\n  }\n}\n.PlaylistInfoPanelVcc .descriptionZone_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  padding: 20px 10px 0 10px;\n  max-height: 270px;\n/* Style */\n  border__: solid 1px #00f;\n}\n@media only screen and (min-width: 480px) {\n  .PlaylistInfoPanelVcc .descriptionZone_in_detail {\n/* Layout */\n    padding: 20px 10vw 0 10vw;\n  }\n}\n.PlaylistInfoPanelVcc .descriptionCopy_in_detail {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n/* Layout addition for ellipses */\n/* ...Ref: http://joelsaupe.com/programming/multiple-line-ellipsis-css/ */\n/* NOT USED NOW ...\n\t\t\tdisplay: block;\n\t\t\theight: 34px\n\t\t\twidth: 100%\n\t\t\t\n\t\t\tdisplay: -webkit-box;\n\t\t\t-webkit-line-clamp: 2;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\t*/\n}\n.PlaylistInfoPanelVcc .listings_in_detail {\n  border__: solid 1px #008000;\n}\n", ""]);

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: PlaylistInfoPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<section class=\"detailSection\"\n\t\trole=\"region\"\n\t\taria-labeledby=\"Information about {{loc.playlistSyn}} \"\n\t>\n\t\t\n\t\t<div class=\"primayZone_in_detail\">\n\t\t\t<header class=\"header_in_detail\">\n\t\t\t\t<div class=\"headerContent_in_detail\">\n\t\t\t\t\t<div class=\"primaryZone_in_headerContent_in_detail\"> \n\t\t\t\t\t\t<a class=\"parentLink_in_detail\" href=\"{{loc.parentLinkData.linkHref}}\" title=\"Link to {{loc.stationSyn}}\">{{loc.parentLinkData.linkCopy}}</a>\n\t\t\t\t\t\t<h1 class=\"heading_in_detail\">\n\t\t\t\t\t\t\t{{loc.details.name}}\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<div class=\"horizontalDashboard_in_detail\">\n\t\t\t\t\t\t\t<div class=\"episodeMeta_in_detail\">\n\t\t\t\t\t\t\t\t<span class=\"episodeMetaCopy_in_detail\">\n\t\t\t\t\t\t\t\t\t{{loc.tracksCount}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"episodeMetaLabel_in_detail\">\n\t\t\t\t\t\t\t\t\t{{loc.trackSyn}}{{ 's' | ifThis : loc.tracksCount : 'gte' : 2}}\n\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"durationMeta_in_detail\">\n\t\t\t\t\t\t\t\t<span class=\"durationMetaLabel_in_detail\">\n\t\t\t\t\t\t\t\t\tduration\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"durationMetaCopy_in_detail\">\n\t\t\t\t\t\t\t\t\t{{loc.details.duration  | millisToHhMmSs}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"verticalDashboardRight_in_detail\">\n\t\t\t\t\t\t<drct-menu-items-holder-with-trigger-vcc\n\t\t\t\t\t\t\tdata-aria_labeling = 'Options menu for this {{loc.playlistSyn}} .'\n\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}'\n\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t<drct-button-4r-facebook-share-vcc\n\t\t\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\t\t\"itemType\": \"Playlist\",\n\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{loc.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t></drct-button-4r-facebook-share-vcc>\n\t\t\t\t\t\t\t</md-menu-item>\n\n\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t<drct-button-4r-email-share-vcc\n\t\t\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\t\t\"itemType\": \"Playlist\",\n\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{loc.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t></drct-button-4r-email-share-vcc>\n\t\t\t\t\t\t\t</md-menu-item>\n\n\n\n\t\t\t\t\t\t</drct-menu-items-holder-with-trigger-vcc>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img class=\"logo_in_detail\" \n\t\t\t\t\t\tsrc=\"{{loc.details.logoUrl}}\"\n\t\t\t\t\t\talt=\"Logo for {{loc.playlistSyn}} named {{loc.details.name}}\"\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<p class=\"descriptionZone_in_detail\">\n\t\t\t\t\t<script>\n\t\t\t\t\t\tfunction triggerClick() {\n\t\t\t\t\t\t\t///alert(\"going to trigger\")\n\t\t\t\t\t\t\t///$(\"#target2\").click()\n\t\t\t\t\t\t\t///console.dog(\">>> angular.element('#target2'). is : \", angular.element('#target2'))\n\n\t\t\t\t\t\t\t///angular.element('#target2').trigger('click');\n\t\t\t\t\t\t\t///$(\"#target2\").click()\n\t\t\t\t\t\t\t$(\"#target2 .md-icon-button \").click()\n\t\t\t\t\t\t}\n\t\t\t\t\t</script>\n\n\n\t\t\t\t<span class=\"descriptionCopy_in_detail\">\n\t\t\t\t\t{{loc.details.description}}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t</section>\n\n</div>\n\n";

/***/ },
/* 235 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistInfoPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlaylistInfoPanelVcc";
		aa.myClassName = "PlaylistInfoPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> PlaylistInfoPanelVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistInfoPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlaylistInfoPanelVcc";
		aa.myClassName = "PlaylistInfoPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService, toolbox) {
			console.dog(">>> PlaylistInfoPanelVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;
				that.toolbox = toolbox;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
						that.scopeNg.loc.stationId = that.scopeNg.stationId;
						that.scopeNg.loc.stationName = that.scopeNg.stationName;
						that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;

						//{ Pipe in detail from remote source.	
						vv.detailsPromise = that._getViewDetails();
						//}

						//{ Pipe in listing from remote source.	
						vv.listingsPromise = that._getListingsForView();
						//}

						//{ Pipe in detail from remote source.
						vv.parentDetailsPromise = that._getParentDetails();
						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(vv.detailsPromise);

					case 13:
						that.scopeNg.loc.details = context$2$0.sent;
						context$2$0.next = 16;
						return _regeneratorRuntime.awrap(vv.listingsPromise);

					case 16:
						that.scopeNg.loc.listings = context$2$0.sent;
						context$2$0.next = 19;
						return _regeneratorRuntime.awrap(vv.parentDetailsPromise);

					case 19:
						that.scopeNg.loc.parentDetails = context$2$0.sent;

						if (that.scopeNg.loc.stationName) {
							that.scopeNg.loc.stationName = that.scopeNg.loc.parentDetails.title;
						}

						that.scopeNg.loc.parentLinkData = that._bgetParentLinkData();

						that.scopeNg.loc.tracksCount = that.scopeNg.loc.listings.length;
						return context$2$0.abrupt("return", "done");

					case 24:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("displayedPanelTitle", function () {
							that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						});
						that.scopeNg.$watch("playlistId", function () {
							that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						});
						that.scopeNg.$watch("playlistName", function () {
							that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
						});
						that.scopeNg.$watch("stationId", function () {
							that.scopeNg.loc.stationId = that.scopeNg.stationId;
						});
						that.scopeNg.$watch("stationName", function () {
							that.scopeNg.loc.stationName = that.scopeNg.stationName;
						});
						that.scopeNg.$watch("tracksFilter", function () {
							that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;
						});
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	INFO PANEL TYPE PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	INFO PANEL TYPE PRIVATE METHODS:
		//{	
		p._getViewDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.playlistId = that.scopeNg.loc.playlistId;
						vv.stationId = that.scopeNg.loc.stationId;

						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass - vv.stationId, vv.playlistId: ", vv.stationId, vv.playlistId);

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylist(vv.stationId, vv.playlistId));

					case 7:
						vv.remoteDetails = context$2$0.sent;

						vv.viewDetails = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.coverArtUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title,
							duration: vv.remoteDetails.length
						};
						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getViewDetails : ", vv.stationId, vv.playlistId, vv.remoteDetails, vv.viewDetails);

						return context$2$0.abrupt("return", vv.viewDetails);

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._getParentDetails = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.stationsService.getStation(vv.stationId));

					case 5:
						vv.remoteDetails = context$2$0.sent;

						vv.viewDetails = {
							description: vv.remoteDetails.description,
							logoUrl: vv.remoteDetails.stationLogoUrl,
							name: vv.remoteDetails.name,
							title: vv.remoteDetails.title,
							address: vv.remoteDetails.address,
							city: vv.remoteDetails.city,
							state: vv.remoteDetails.state,
							websiteUrl: vv.remoteDetails.websiteUrl,
							enrollmentGender: vv.remoteDetails.extraData.enrollmentGender,
							enrollmentGrades: vv.remoteDetails.extraData.enrollmentGrades,
							enrollmentType: vv.remoteDetails.extraData.enrollmentType,
							enrollmentStudents: vv.remoteDetails.extraData.enrollmentStudents
						};
						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getParentDetails : ", vv.stationId, vv.remoteDetails, vv.viewDetails);

						return context$2$0.abrupt("return", vv.viewDetails);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	
		p._getListingsForView = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.playlistsFilter = that.scopeNg.loc.tracksFilter;
						vv.playlistId = that.scopeNg.loc.playlistId;
						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylistTracks(vv.stationId, vv.playlistId));

					case 7:
						vv.listings = context$2$0.sent;

						console.dog(">>> PlaylistInfoPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.playlistId, vv.listings);

						return context$2$0.abrupt("return", vv.listings);

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._bgetParentLinkData = function () {
			var that = this;
			var vv = {};

			vv.url = that.toolbox._bgetStndUrl4rStation(that.scopeNg.loc.stationId, that.scopeNg.loc.stationName, "", false);

			vv.linksData = {
				linkHref: vv.url,
				linkCopy: that.scopeNg.loc.stationName
			};

			return vv.linksData;
		};

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

	//}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistsPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(238);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(240);
	aa.LinkFncClass = __webpack_require__(241);
	aa.CtrlClass = __webpack_require__(242);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "PlaylistsPanelVcc";
	aa.thisMod = aa.PlaylistsPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctPlaylistsPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            displayedPanelTitle: "@",
	            playlistsFilter: "@",
	            stationId: "@",
	            stationName: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(239);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlaylistsPanelVcc/styles/PlaylistsPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/PlaylistsPanelVcc/styles/PlaylistsPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: PlaylistsPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-playlists-panel-vcc {\n  display: block;\n}\n.PlaylistsPanelVcc {\n/* Layout */\n  padding-top: 20px;\n  padding-bottom: 40px;\n/* Style */\n  background-color: #eee;\n}\n.PlaylistsPanelVcc .listingsBox {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -o-box-lines: multiple;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n/* Style */\n  border__: solid 1px #008000;\n}\n.PlaylistsPanelVcc .listingItem {\n/* Flex-child spcf */\n/* Layout */\n  height: 185px;\n  width: 450px;\n  margin: 15px;\n/* Style */\n  background-color: #fff;\n  border: solid 1px #999;\n  -webkit-border-radius: 10px;\n  border-radius: 10px;\n}\n.PlaylistsPanelVcc .listingItem:hover {\n  border-color: #00f;\n}\n.PlaylistsPanelVcc .listingItem:active {\n  border-color: #08f;\n}\n.PlaylistsPanelVcc .link_on_listingContent {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Style */\n  color: #000;\n  text-decoration: none;\n}\n.PlaylistsPanelVcc .header_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n/* Layout */\n  width: 100%;\n  overflow: hidden;\n/* Style */\n  border__: solid 1px #f00;\n}\n.PlaylistsPanelVcc .imageAndButtonHolder_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  position: relative;\n  height: 115px;\n  width: 115px;\n  margin: 5px 0 0 5px;\n}\n.PlaylistsPanelVcc .image_in_listing {\n/* Layout */\n  height: 115px;\n  width: 115px;\n/* Style */\n  border: solid 1px #ddd;\n}\n.PlaylistsPanelVcc .playbuttonBox_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: block;\n/* Layout */\n  position: absolute;\n  top: 70px;\n  left: 70px;\n/* Style */\n  border__: solid 1px #f00;\n}\n.PlaylistsPanelVcc .primaryZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  padding: 20px 10px 17px 10px;\n/* Style */\n  background-color__: #eee;\n  border__: solid 1px #00f;\n}\n@media only screen and (min-width: 480px) {\n  .PlaylistsPanelVcc .primaryZone_in_listing {\n/* Layout */\n    padding: 20px 10px 17px 20px;\n  }\n}\n.PlaylistsPanelVcc .heading_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n/* Layout */\n  padding: 0 0 5px 0;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n}\n.PlaylistsPanelVcc .headingCopy_in_listing__ {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n/* Style */\n  font-size: 15px;\n  font-weight: 600;\n}\n.PlaylistsPanelVcc .dashboard_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n/* Layout */\n  padding: 5px 0 0 0;\n/* Style */\n  border__: solid 1px #008000;\n}\n.PlaylistsPanelVcc .trackLength_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n}\n.PlaylistsPanelVcc .verticalDashboardRight_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -o-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n/* Layout */\n  padding: 20px 10px 13px 10px;\n/* Style */\n  background-color__: #eee;\n  border__: solid 1px #00f;\n}\n.PlaylistsPanelVcc .ontoPageArrowHolder_in_listing {\n/* Layout */\n  margin-top: 2px;\n/* Style */\n  background-image: url(\"%2FAssets%2FMedia%2FImgSprites%2Fspritesheet.png\");\n  background-repeat: no-repeat;\n  display: block;\n  width: 14px;\n  height: 22px;\n  background-position: -260px -5px;\n  border: none;\n  background-color: transparent;\n  -webkit-border-radius: 50px;\n  border-radius: 50px;\n}\n.PlaylistsPanelVcc .listingItem:hover .ontoPageArrowHolder_in_listing {\n  background-color: #ddf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.PlaylistsPanelVcc .listingItem:active .ontoPageArrowHolder_in_listing {\n  background-color: #aaf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.PlaylistsPanelVcc .descriptionZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 15px 20px 15px 20px;\n/* Style */\n  border__: solid 1px #ffa500;\n}\n.PlaylistsPanelVcc .descriptionCopy_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  height: 34px;\n/* Style */\n  font-size: 13px;\n  border__: solid 1px #008000;\n/* Layout addition for ellipses */\n/* Ref: http://joelsaupe.com/programming/multiple-line-ellipsis-css/ */\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n", ""]);

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: PlaylistsPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<section class=\"listingsSection transcludeSlot\"\n\t\trole=\"region\"\n\t\taria-label=\"{{loc.stationSyn}}listings for this {{loc.stationSyn}}\"\n\t> \n\n\t\t<nav class=\"listingsNav\">\n\t\t\t<ul class=\"listingsBox\"\t\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"pkgTags\": [\".PlayButtonVccTrigger\"],\n\t\t\t\t\t\"doBubble\": \"true\"\n\t\t\t\t}'\n\t\t\t>\n\t\t\t\t\n\t\t\t\t<li class=\"listingItem\" \n\t\t\t\t\tng-repeat=\"Listing_ in loc.listings\"   \n\t\t\t\t\tng-class=\"{ 'focsed' : Listing_.id == vv.FocsedItem.id}\"\n\t\t\t\t\tid=\"listing_{{Listing_.id}}\"\n\t\t\t\t>\n\n\t\t\t\t\t<a class=\"link_on_listingContent\" \n\t\t\t\t\t\thref=\"{{loc.stationSyn}}/{{loc.stationName}}/{{loc.stationId}}/{{loc.playlistSyn}}/{{Listing_.name | spacesToDashes }}/{{Listing_.id}}\"\n\t\t\t\t\t\ttitle=\"{{Listing_.name}}\" \n\t\t\t\t\t>\n\n\t\t\t\t\t\t<header class=\"header_in_listing\">\n\n\t\t\t\t\t\t\t<div class=\"imageAndButtonHolder_in_listing\">\n\t\t\t\t\t\t\t\t<img class=\"image_in_listing\" \n\t\t\t\t\t\t\t\t\tsrc=\"{{Listing_.coverArtUrl}}\" \n\t\t\t\t\t\t\t\t\talt=\"Listing image for {{loc.playlistSyn}} named {{Listing_.name}}\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<aside class=\"playbuttonBox_in_listing transcludeSlot\"\n\t\t\t\t\t\t\t\t\trole=\"complementary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<drct-play-button-vcc\n\t\t\t\t\t\t\t\t\t\tdata-aria_labeling = 'Button to play {{loc.trackSyn}} for this {{loc.playlistSyn}}'\n\t\t\t\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}_{{$index}}'\n\t\t\t\t\t\t\t\t\t\tdata-playlist_id = '{{Listing_.id}}'\n\t\t\t\t\t\t\t\t\t\tdata-station_id = '{{Listing_.stationId}}'\n\t\t\t\t\t\t\t\t\t\tdata-track_id = ''\n\t\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</drct-play-button-vcc>\n\t\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"primaryZone_in_listing\"> \n\t\t\t\t\t\t\t\t<h1 class=\"heading_in_listing\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t{{Listing_.name}} \n\t\t\t\t\t\t\t\t</h1>\n\n\t\t\t\t\t\t\t\t<div class=\"dashboard_in_listing\">\n\t\t\t\t\t\t\t\t\t<p class=\"trackLength_in_listing\">\n\t\t\t\t\t\t\t\t\t\t{{Listing_.length | millisToHhMmSs}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"verticalDashboardRight_in_listing\">\n\t\t\t\t\t\t\t\t<div class=\"ontoPageArrowHolder_in_listing\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</header>\n\n\t\t\t\t\t\t<div class=\"descriptionZone_in_listing\">\n\t\t\t\t\t\t\t<p class=\"descriptionCopy_in_listing\">\n\t\t\t\t\t\t\t\t{{Listing_.description}}\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\n\t</section>\n\t\n</div>\n";

/***/ },
/* 241 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistsPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlaylistsPanelVcc";
		aa.myClassName = "PlaylistsPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> PlaylistsPanelVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PlaylistsPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "PlaylistsPanelVcc";
		aa.myClassName = "PlaylistsPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> PlaylistsPanelVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> PlaylistsPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
						that.scopeNg.loc.stationId = that.scopeNg.stationId;
						that.scopeNg.loc.stationName = that.scopeNg.stationName;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._getListingsForView());

					case 7:
						that.scopeNg.loc.listings = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("displayedPanelTitle", function () {
							that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						});
						that.scopeNg.$watch("playlistsFilter", function () {
							that.scopeNg.loc.playlistsFilter = that.scopeNg.playlistsFilter;
						});
						that.scopeNg.$watch("stationId", function () {
							that.scopeNg.loc.stationId = that.scopeNg.stationId;
						});
						that.scopeNg.$watch("stationName", function () {
							that.scopeNg.loc.stationName = that.scopeNg.stationName;
						});

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	LISTINGS PANEL TYPE PUBLIC/PRIVATE METHODS:
		//{

		p._getListingsForView = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.playlistsFilter = that.scopeNg.loc.playlistsFilter;
						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylists(vv.stationId, vv.playlistsFilter));

					case 6:
						vv.listings = context$2$0.sent;

						console.dog(">>> PlaylistsPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.filter, vv.listings);

						return context$2$0.abrupt("return", vv.listings);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	LISTINGS PANEL TYPE PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();
	//{ Pipe in listing from remote source.	

	//}

	//}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TracksPanelVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(244);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(246);
	aa.LinkFncClass = __webpack_require__(247);
	aa.CtrlClass = __webpack_require__(248);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "TracksPanelVcc";
	aa.thisMod = aa.TracksPanelVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctTracksPanelVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$state", "$stateParams", "$timeout", "mediatorService", "stationsService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        scope: {
	            displayedPanelTitle: "@",
	            playlistId: "@",
	            playlistName: "@",
	            stationId: "@",
	            stationName: "@",
	            tracksFilter: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(245);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/TracksPanelVcc/styles/TracksPanelVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/TracksPanelVcc/styles/TracksPanelVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: TracksPanelVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-tracks-panel-vcc {\n  display: block;\n}\n.TracksPanelVcc {\n/* Layout */\n  padding-top: 10px;\n  padding-bottom: 40px;\n}\n.TracksPanelVcc .listingsBox {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -o-box-lines: multiple;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -o-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n/* Style */\n  border__: solid 1px #008000;\n}\n.TracksPanelVcc .listingItem {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  width: 100%;\n  padding: 0 0;\n  margin: 0;\n/* Style */\n}\n@media only screen and (min-width: 480px) {\n  .TracksPanelVcc .listingItem {\n/* Layout */\n    padding: 0 10vw;\n  }\n}\n.TracksPanelVcc .listingItem:hover .drctPlayButtonVcc {\n  background-color: #ddf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.TracksPanelVcc .listingItem:active .drctPlayButtonVcc {\n  background-color: #aaf;\n  -webkit-box-shadow: 0 0 10px #aaf;\n  box-shadow: 0 0 10px #aaf;\n}\n.TracksPanelVcc .listingContent {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  padding: 20px 0;\n/* Style */\n  border-bottom: solid 1px #bbb;\n}\n.TracksPanelVcc .listingItem:last-child > .listingContent {\n/* Style */\n  border-bottom: none;\n}\n.TracksPanelVcc .verticalDashboardLeft_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n  padding: 5px 20px 5px 10px;\n/* Style */\n  background-color__: #eee;\n  border__: solid 1px #00f;\n}\n.TracksPanelVcc .imageAndButtonHolder_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  position: relative;\n  height: 115px;\n  width: 115px;\n  margin: 0 0 0 10px;\n}\n@media only screen and (min-width: 480px) {\n  .TracksPanelVcc .imageAndButtonHolder_in_listing {\n/* Layout */\n    margin: 0 0 0 20px;\n  }\n}\n.TracksPanelVcc .logo_in_listing {\n/* Layout */\n  height: 115px;\n  width: 115px;\n/* Style */\n  border: solid 1px #ddd;\n}\n.TracksPanelVcc .playbuttonBox_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: block;\n/* Layout */\n  position: absolute;\n  top: 70px;\n  left: 70px;\n/* Style */\n  border__: solid 1px #f00;\n}\n.TracksPanelVcc .primaryZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 5px 10px 5px 10px;\n/* Style */\n  cursor: pointer;\n  background-color__: #eee;\n  border__: solid 1px #f00;\n}\n@media only screen and (min-width: 480px) {\n  .TracksPanelVcc .primaryZone_in_listing {\n/* Layout */\n    padding: 5px 10px 5px 20px;\n  }\n}\n.TracksPanelVcc .header_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  margin-bottom: 10px;\n}\n.TracksPanelVcc .heading_in_listing {\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 17px;\n  color: #444;\n  text-transform__: capitalize;\n}\n.TracksPanelVcc .dashboard_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  margin-bottom: 10px;\n/* Style */\n  border__: solid 1px #00f;\n}\n.TracksPanelVcc .artistMeta_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  margin-right: 10px;\n  padding-right: 10px;\n/* Style */\n  border-right: solid 1px #bbb;\n}\n.TracksPanelVcc .zz_artistMetaLabel_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Layout */\n  margin-bottom: 5px;\n}\n.TracksPanelVcc .artistMetaCopy_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n}\n.TracksPanelVcc .durationMeta_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n}\n.TracksPanelVcc .zz_durationMetaLabel_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  margin-bottom: 5px;\n}\n.TracksPanelVcc .durationMetaCopy_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n}\n.TracksPanelVcc .descriptionZone_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n/* Layout */\n/* Style */\n  border__: solid 1px #00f;\n}\n.TracksPanelVcc .descriptionCopy_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n  border__: solid 5px #f00;\n/* Layout */\n  display: block;\n  max-height: 51px;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 13px;\n  color: #282828;\n  border__: solid 1px #008000;\n/* Layout addition for ellipses */\n/* Ref: http://joelsaupe.com/programming/multiple-line-ellipsis-css/ */\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n.TracksPanelVcc .verticalDashboardRight_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 40;\n  -moz-box-ordinal-group: 40;\n  -o-box-ordinal-group: 40;\n  -ms-flex-order: 40;\n  -webkit-order: 40;\n  order: 40;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -o-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n/* Layout */\n  padding: 10px 0px 5px 10px;\n/* Style */\n  background-color__: #eee;\n  border__: solid 1px #00f;\n}\n@media only screen and (min-width: 480px) {\n  .TracksPanelVcc .verticalDashboardRight_in_listing {\n/* Layout */\n    padding: 10px 10px 5px 10px;\n  }\n}\n.TracksPanelVcc .utilsTrigger_in_listing {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: block;\n/* Layout */\n/* Style */\n  border__: solid 1px #f00;\n}\n.TracksPanelVcc .actveListing {\n/* Style */\n  background-color: #eee;\n}\n.TracksPanelVcc .listings_in_listing {\n  border__: solid 1px #008000;\n}\n", ""]);

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: TracksPanelVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\t<style>\n\t\t.listingContent_4r_loadedTrack {\n\t\t\tbackground-color: #eee;\n\t\t}\n\t</style>\n\n\t<section class=\"listings_in_detail\"\n\t\trole=\"region\"\n\t\taria-label=\"{{loc.trackSyn}} listings for this {{loc.playlistSyn}}\"\n\t>\n\n\t\t<nav class=\"listingsNav\">\n\t\t\t<ul class=\"listingsBox\"\t\n\t\t\t\tdata-drct_click_to_mediator_adc = '{\n\t\t\t\t\t\"pkgTags\": [\".primaryZone_in_listing, .PlayButtonVccTrigger, .logo_in_listing\"],\n\t\t\t\t\t\"doBubble\": \"true\"\n\t\t\t\t}'\n\t\t\t>\n\t\t\t\t\n\t\t\t\t<li class=\"listingItem\" \n\t\t\t\t\tng-repeat=\"Listing_ in loc.listings\"   \n\t\t\t\t\tid=\"listing_{{Listing_.id}}\"\n\t\t\t\t>\n\n\t\t\t\t\t<div  class=\" listingContent  trackFocusKey__{{Listing_.id}} {{ 'listingContent_4r_loadedTrack' | ifThis : Listing_.id : 'eq' : loc.loadedTrackUid}}\">\n\n\t\t\t\t\t\t<div class=\"primaryZone_in_listing\"\n\t\t\t\t\t\t\tid=\"primaryZone_in_listing_{{Listing_.id}}\"\n\n\t\t\t\t\t\t\tdata-pkg = '{\n\t\t\t\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\t\t\t\"noticeName\": \"PlayTriggerZone_clicked\",\n\t\t\t\t\t\t\t\t\t\"context\": \"\",\n\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{Listing_.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\"stationId\": \"{{Listing_.stationId}}\",\n\t\t\t\t\t\t\t\t\t\"trackId\": \"{{Listing_.trackId}}\",\n\t\t\t\t\t\t\t\t\t\"trackUid\": \"{{Listing_.id}}\",\n\t\t\t\t\t\t\t\t\t\"triggerTagToUse\": \"listingContent_{{Listing_.id}}\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}'\n\n\t\t\t\t\t\t> \n\n\t\t\t\t\t\t\t<header class=\"header_in_listing\">\n\t\t\t\t\t\t\t\t<h1 class=\"heading_in_listing\">\n\t\t\t\t\t\t\t\t\t{{Listing_.title}} \n\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t</header>\n\n\t\t\t\t\t\t\t<div class=\"dashboard_in_listing\">\n\t\t\t\t\t\t\t\t<div class=\"artistMeta_in_listing\">\n\t\t\t\t\t\t\t\t\t<span class=\"artistMetaCopy_in_listing\">\n\t\t\t\t\t\t\t\t\t\t{{Listing_.artist}}\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"durationMeta_in_listing\">\n\t\t\t\t\t\t\t\t\t<span class=\"durationMetaCopy_in_listing\">\n\t\t\t\t\t\t\t\t\t\t{{Listing_.playTimeMSec |  millisToHhMmSs}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"descriptionZone_in_listing\">\n\t\t\t\t\t\t\t\t<p class=\"descriptionCopy_in_listing\">\n\t\t\t\t\t\t\t\t\t{{Listing_.description}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!---\n\t\t\t\t\t\t<div class=\"verticalDashboardLeft_in_listing\">\n\t\t\t\t\t\t\t<aside class=\"playbuttonBox_in_listing transcludeSlot\"\n\t\t\t\t\t\t\t\trole=\"complementary\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<drct-play-button-vcc\n\t\t\t\t\t\t\t\t\tdata-aria_labeling = 'Button to play tracks for this project'\n\t\t\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}_{{$index}}'\n\t\t\t\t\t\t\t\t\tdata-playlist_id = '{{Listing_.playlistId}}'\n\t\t\t\t\t\t\t\t\tdata-station_id = '{{Listing_.stationId}}'\n\t\t\t\t\t\t\t\t\tdata-track_id = '{{Listing_.trackId}}'\n\t\t\t\t\t\t\t\t\tdata-track_uid = '{{Listing_.id}}'\n\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</drct-play-button-vcc>\n\t\t\t\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t---->\n\t\t\t\t\t\t<div class=\"verticalDashboardRight_in_listing\">\n\t\t\t\t\t\t\t<drct-menu-items-holder-with-trigger-vcc\n\t\t\t\t\t\t\t\tdata-aria_labeling = 'Options menu for this {{loc.trackSyn}}.'\n\t\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}'\n\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<drct-button-4r-facebook-share-vcc\n\t\t\t\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\t\t\t\"itemType\": \"Track\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackUid\": \"{{Listing_.id}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackId\": \"{{Listing_.trackId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{Listing_.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{Listing_.stationId}}\"\n\t\t\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t\t></drct-button-4r-facebook-share-vcc>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<drct-button-4r-email-share-vcc\n\t\t\t\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\t\t\t\"itemType\": \"Track\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackUid\": \"{{Listing_.id}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackId\": \"{{Listing_.trackId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{loc.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t\t></drct-button-4r-email-share-vcc>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\n\t\t\t\t\t\t\t\t<md-menu-item>\n\t\t\t\t\t\t\t\t\t<drct-button-4r-email-report-vcc\n\t\t\t\t\t\t\t\t\t\tdata-purposing = '{\n\t\t\t\t\t\t\t\t\t\t\t\"itemType\": \"Track\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackUid\": \"{{Listing_.id}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"trackId\": \"{{Listing_.trackId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{loc.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{loc.stationId}}\"\n\t\t\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t\t></drct-button-4r-email-report-vcc>\n\t\t\t\t\t\t\t\t</md-menu-item>\n\t\t\t\t\t\t\t</drct-menu-items-holder-with-trigger-vcc>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"imageAndButtonHolder_in_listing\">\n\t\t\t\t\t\t\t<img class=\"logo_in_listing\" \n\t\t\t\t\t\t\t\tsrc=\"{{Listing_.imageThumbURL}}\"\n\t\t\t\t\t\t\t\talt=\"Logo for {{loc.trackSyn}} named {{Listing_.title}}\"\n\n\t\t\t\t\t\t\t\tid=\"logo_in_listing_{{Listing_.id}}\"\n\n\t\t\t\t\t\t\t\tdata-pkg = '{\n\t\t\t\t\t\t\t\t\t\"notice\": {\n\t\t\t\t\t\t\t\t\t\t\"noticeName\": \"PlayTriggerZone_clicked\",\n\t\t\t\t\t\t\t\t\t\t\"context\": \"\",\n\t\t\t\t\t\t\t\t\t\t\"playlistId\": \"{{Listing_.playlistId}}\",\n\t\t\t\t\t\t\t\t\t\t\"stationId\": \"{{Listing_.stationId}}\",\n\t\t\t\t\t\t\t\t\t\t\"trackId\": \"{{Listing_.trackId}}\",\n\t\t\t\t\t\t\t\t\t\t\"trackUid\": \"{{Listing_.id}}\",\n\t\t\t\t\t\t\t\t\t\t\"triggerTagToUse\": \"listingContent_{{Listing_.id}}\"\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}'\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<aside class=\"playbuttonBox_in_listing transcludeSlot\"\n\t\t\t\t\t\t\t\trole=\"complementary\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<drct-play-button-vcc\n\t\t\t\t\t\t\t\t\tclass = 'drctPlayButtonVcc'\n\t\t\t\t\t\t\t\t\tdata-aria_labeling = 'Button to play tracks for this project'\n\t\t\t\t\t\t\t\t\tdata-instance_idfier = '{{loc.myVcName}}_{{$index}}'\n\t\t\t\t\t\t\t\t\tdata-playlist_id = '{{Listing_.playlistId}}'\n\t\t\t\t\t\t\t\t\tdata-station_id = '{{Listing_.stationId}}'\n\t\t\t\t\t\t\t\t\tdata-track_id = '{{Listing_.trackId}}'\n\t\t\t\t\t\t\t\t\tdata-track_uid = '{{Listing_.id}}'\n\t\t\t\t\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</drct-play-button-vcc>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t</section>\n\t\n</div>\n";

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TracksPanelVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "TracksPanelVcc";
		aa.myClassName = "TracksPanelVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> TracksPanelVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				///that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	SETUP METHODS
		//{
		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function _setup() {
			var that;
			return _regeneratorRuntime.async(function _setup$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._thiscifyMethods());

					case 3:
						that.scopeNg.thisc.thislf = that;

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._thiscifyMethods = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.thisc.zzdecorateLoadedTrackListing = that.decorateLoadedTrackListing;

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{	
		p.zzdecorateLoadedTrackListing = function callee$1$0(trackUid) {
			var that, vv, thatlf;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog(">>> highlightPlayingListing  - trackUid: ", trackUid);
						that = this;
						vv = {};
						thatlf = that.scopeNg.thisc.thislf;
						// Call  that.methods with this scope.

						vv.voidd = that._undecoratePriorLoadedTrackListing.call("thatlf");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	
		p._undecoratePriorLoadedTrackListing = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						//  Just fell swoop remove loadedTrackListing class.
						that.elm.find(".listingContent").removeClass("loadedTrackListing");

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();

	/*
	 * Aliasing method into the thisc scope makes them available to ctrl and outside.
	 */

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TracksPanelVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "TracksPanelVcc";
		aa.myClassName = "TracksPanelVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> TracksPanelVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{
		p.decorateLoadedTrackListing = function callee$1$0(trackUid) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog(">>> highlightPlayingListing  - trackUid: ", trackUid);
						that = this;
						vv = {};

						that.scopeNg.loc.loadedTrackUid = trackUid;
						that.scopeNg.$apply();
						console.dog(">>> highlightPlayingListing end  - that.scopeNg.loc.loadedTrackUid: ", that.scopeNg.loc.loadedTrackUid);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setSyns());

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 9:
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						///that.scopeNg.loc.loadedTrackUid = '0286d0a5-1f25-4fce-992c-617a0466944b'
						console.dog(">>> TracksPanelVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
						that.scopeNg.loc.stationId = that.scopeNg.stationId;
						that.scopeNg.loc.stationName = that.scopeNg.stationName;
						that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;

						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._getListingsForView());

					case 9:
						that.scopeNg.loc.listings = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setSyns = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.stationSyn = "school";
						that.scopeNg.loc.playlistSyn = "project";
						that.scopeNg.loc.trackSyn = "episode";
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("displayedPanelTitle", function () {
							that.scopeNg.loc.displayedPanelTitle = that.scopeNg.displayedPanelTitle;
						});

						that.scopeNg.$watch("playlistId", function () {
							that.scopeNg.loc.playlistId = that.scopeNg.playlistId;
						});
						that.scopeNg.$watch("playlistName", function () {
							that.scopeNg.loc.playlistName = that.scopeNg.playlistName;
						});
						that.scopeNg.$watch("stationId", function () {
							that.scopeNg.loc.stationId = that.scopeNg.stationId;
						});
						that.scopeNg.$watch("stationName", function () {
							that.scopeNg.loc.stationName = that.scopeNg.stationName;
						});
						that.scopeNg.$watch("tracksFilter", function () {
							that.scopeNg.loc.tracksFilter = that.scopeNg.tracksFilter;
						});
						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	LISTINGS PANEL TYPE PUBLIC/PRIVATE METHODS:
		//{

		p._getListingsForView = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.playlistsFilter = that.scopeNg.loc.playlistsFilter;
						vv.playlistId = that.scopeNg.loc.playlistId;
						vv.stationId = that.scopeNg.loc.stationId;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.stationsService.getPlaylistTracks(vv.stationId, vv.playlistId));

					case 7:
						vv.listings = context$2$0.sent;

						console.dog(">>> TracksPanelVcc_CtrlClass._getListingsForView : ", vv.stationId, vv.playlistId, vv.listings);

						return context$2$0.abrupt("return", vv.listings);

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	LISTINGS PANEL TYPE PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();
	//{ Pipe in listing from remote source.	

	//}

	//}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SlideDownVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(250);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(252);
	aa.LinkFncClass = __webpack_require__(253);
	aa.CtrlClass = __webpack_require__(254);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "SlideDownVcc";
	aa.thisMod = aa.SlideDownVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctSlideDownVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "mediatorService", "sessionService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(251);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/SlideDownVcc/styles/SlideDownVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/SlideDownVcc/styles/SlideDownVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: SlideDownVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-slide-down-vcc {\n  display: block;\n}\n.SlideDownVcc .SlideDownPanel {\n/* Layout */\n  width: 100%;\n  overflow: hidden;\n/* Style */\n  background-color: #aaa;\n  color: #fff;\n  transition__: max-height 3s ease;\n}\n.SlideDownVcc .PanelClose {\n/* Layout */\n  max-height: 0px;\n/* Style */\n  border: solid 0px #008000;\n  -webkit-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -moz-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -o-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -ms-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  transition: max-height 1s ease-in-out, border 0.9s step-end;\n}\n.SlideDownVcc .PanelOpen {\n/* Layout */\n  max-height: 500px;\n/* Style */\n  border: solid 1px #008000;\n  -webkit-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -moz-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -o-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -ms-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  transition: max-height 1s ease-in-out, border 0.1s step-start;\n}\n", ""]);

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: SlideDownVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\t<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\n\t<div class=\"SlideDownPanel {{loc.panelActionClassName}}\">\n\t\t<div class=\"SlideDownContents\" ng-switch on=\"loc.drctName\">\n\t\t\t\n\t\t\t<drct-facebook-login-button-vcc\n\t\t\t\tng-switch-when=\"LoginCorePanelVcc\"\n\t\t\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\t\t></drct-facebook-login-button-vcc>\n\t\t\t\n\t\t\t<drct-login-core-panel-vcc \n\t\t\t\tng-switch-when=\"LoginCorePanelVcc\"\n\t\t\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\t\t>\n\t\t\t</drct-login-core-panel-vcc>\n\t\t\t\n\t\t\t<drct-signup-panel-vcc \n\t\t\t\tng-switch-when=\"SignupPanelVcc\"\n\t\t\t\tatrb-handoff-spec-id=\"{{loc.handoffSpecId}}\"\n\t\t\t>\n\t\t\t</drct-signup-panel-vcc>\n\t\t\t\n\t\t\t<div \n\t\t\t\tng-switch-when=\"\"\n\t\t\t>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div \n\t\t\t\tng-switch-default\n\t\t\t>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SlideDownVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	var _Promise = __webpack_require__(44)["default"];

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, compileNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elmo = elm;
			that.attr = attr;
			that.compileNg = compileNg;
			that._setup();
		};

		var p = LinkFncClass.prototype;

		//	================================================================
		//	THISC PUBLIC METHODS:
		//{
		p.loadAndOpenPanel = function callee$1$0(drctName, handoffSpecId) {
			var that, vv, thatlf;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog(">>> loadAndOpenPanel - handoffSpecId: ", handoffSpecId);
						that = this;
						vv = {};
						thatlf = that.scopeNg.thisc.thislf;
						context$2$0.prev = 4;

						//{ Open panel (async wait)
						vv.promiseA1 = that._loadAndOpenPanel.call(thatlf, drctName, handoffSpecId);
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promiseA1);

					case 8:
						vv.panelState = context$2$0.sent;
						return context$2$0.abrupt("return", vv.panelState);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0["catch"](4);

						context$2$0.t0.panelState = undefined;
						context$2$0.t0.panelState = vv.panelState;
						context$2$0.t0.returnPoint = "loadAndOpenPanel-A";
						return context$2$0.abrupt("return", context$2$0.t0);

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 12]]);
		};

		p.unloadAndClosePanel = function callee$1$0() {
			var that, vv, thatlf;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog(">>> unloadAndClosePanel");
						that = this;
						vv = {};
						thatlf = that.scopeNg.thisc.thislf;
						context$2$0.prev = 4;

						//{ Open panel (async wait)
						vv.promiseA1 = that._unloadAndClosePanel.call(thatlf);
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promiseA1);

					case 8:
						vv.panelState = context$2$0.sent;
						return context$2$0.abrupt("return", vv.panelState);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0["catch"](4);

						context$2$0.t0.panelState = undefined;
						context$2$0.t0.panelState = vv.panelState;
						context$2$0.t0.returnPoint = "unloadAndClosePanel-A";
						return context$2$0.abrupt("return", context$2$0.t0);

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 12]]);
		};
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function _setup() {
			var that = this;
			that._thiscifyMethods();
			that._setClickHandler();
			that._setTransitionendHandlers();
			that.scopeNg.thisc.thislf = that;
			///that._setScopeWatchers();
		};

		p._thiscifyMethods = function () {
			/*
	   * Aliasing method into the thisc scope makes them available to ctrl and outside.
	   */
			var that = this;
			that.scopeNg.thisc.loadAndOpenPanel = that.loadAndOpenPanel;
			that.scopeNg.thisc._loadAndOpenPanel = that._loadAndOpenPanel;

			that.scopeNg.thisc.unloadAndClosePanel = that.unloadAndClosePanel;
			that.scopeNg.thisc._unloadAndClosePanel = that._unloadAndClosePanel;

			///that.scopeNg.thisc._closePanelAsync = that._closePanelAsync;
			///that.scopeNg.thisc._closePanelAsync = that._closePanelAsync;
		};

		p._setClickHandler = function _setClickHandler() {
			var that = this;
			that.elmo.on({
				"click": function handleClick_fnc(ev) {}
			});
		};

		p._setTransitionendHandlers = function () {
			var that = this;
			var vv = {};

			vv.callbackWrap = function (ev) {
				that.handle_Transition_end.call(that, ev);
			};

			that.elmo.on({
				"transitionend": vv.callbackWrap
			});
		};

		p.handle_Transition_end = function (ev) {
			/* NOTE: Might be useful in future to test for property transiton occurred against. */

			var that = this;
			var vv = {};

			vv.isPanelOpen = that._testIsPanelOpen();

			console.dog(">>> SlideDownVcc_LF - handle_Transition_end - Pt-A1 - vv.isPanelOpen, ev: ", vv.isPanelOpen, ev);

			if (vv.isPanelOpen) {
				that.scopeNg.inLf.isPanelOpen = true;
			} else {
				that.scopeNg.inLf.isPanelOpen = false;
			}
			console.dog(">>> SlideDownVcc_LF - handle_Transition_end - Pt-A2 - that.scopeNg.inLf.isPanelOpen, ev: ", that.scopeNg.inLf.isPanelOpen, ev);

			that.scopeNg.$apply();
		};

		p._setScopeWatchers = function _setScopeWatchers() {
			var that = this;

			//{	Watch toLf.panelParams.action.
			that.scopeNg.$watch("toLf.panelParams.action", function (newVal, oldVal) {
				if (newVal === "open") {
					that._loadAndOpenPanel(that.scopeNg.toLf.panelParams.drct);
				}
				if (newVal === "close") {
					that._fullyClosePanelAsync(that.scopeNg.toLf.panelParams.drct);
				}
			}, true);
			//}
		};

		p._unloadAndClosePanel = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert(">>> SlideDownVcc_LF - _loadAndOpenPanel");
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-A - that: ", that);
						context$2$0.prev = 3;

						//{	Close panel  (async wait).
						vv.promiseA1 = that._closePanelAsync();
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-B - vv.promiseA1: ", vv.promiseA1);
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promiseA1);

					case 8:
						vv.panelState = context$2$0.sent;

						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-C - vv.panelState: ", vv.panelState);

						if (!(vv.panelState === "closed")) {
							context$2$0.next = 16;
							break;
						}

						//{ Empty contents of panel.
						that._emptyContentFromPanel();
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-D - vv: ", vv);
						return context$2$0.abrupt("return", vv.panelState);

					case 16:
						vv.err = {
							errorType: "UnexpectedPanelState",
							panelState: vv.panelState,
							returnPoint: "_unloadAndClosePanel_Pt-B"
						};
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-I - vv, err: ", vv, err);
						return context$2$0.abrupt("return", vv.err);

					case 19:
						context$2$0.next = 28;
						break;

					case 21:
						context$2$0.prev = 21;
						context$2$0.t0 = context$2$0["catch"](3);

						vv.panelState = undefined;
						context$2$0.t0.panelState = vv.panelState;
						context$2$0.t0.returnPoint = "unloadAndClosePanel-A";
						console.dog(">>> SlideDownVcc_LF - unloadAndClosePanel - Pt-J - vv, err: ", vv, context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 28:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[3, 21]]);
		};

		p._loadAndOpenPanel = function callee$1$0(drctName, handoffSpecId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert(">>> SlideDownVcc_LF - _loadAndOpenPanel");
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-A - that: ", that);
						context$2$0.prev = 3;

						//{	Close panel  (async wait).
						vv.promiseA1 = that._closePanelAsync();
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-B - vv.promiseA1: ", vv.promiseA1);
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promiseA1);

					case 8:
						vv.panelState = context$2$0.sent;

						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-C - vv.panelState: ", vv.panelState);

						if (!(vv.panelState === "closed")) {
							context$2$0.next = 34;
							break;
						}

						//{ Empty contents of panel.
						that._emptyContentFromPanel();
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-D - vv: ", vv);
						//}
						//{ Add contents (directive) to panel.
						that._addDrctToPanel(drctName, handoffSpecId);
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-E - vv: ", vv);

						context$2$0.prev = 15;

						//{ Open panel (async wait)
						vv.promiseB1 = that._openPanelAsync();
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-F - vv.promiseB1: ", vv.promiseB1);
						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(vv.promiseB1);

					case 20:
						vv.panelState = context$2$0.sent;

						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-G - vv.panelState: ", vv.panelState);
						return context$2$0.abrupt("return", vv.panelState);

					case 25:
						context$2$0.prev = 25;
						context$2$0.t0 = context$2$0["catch"](15);

						context$2$0.t0.panelState = undefined;
						context$2$0.t0.panelState = vv.panelState;
						context$2$0.t0.returnPoint = "_loadAndOpenPanel_Pt-C";
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-H - vv, err: ", vv, context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 32:
						context$2$0.next = 37;
						break;

					case 34:
						vv.err = {
							errorType: "UnexpectedPanelState",
							panelState: vv.panelState,
							returnPoint: "_loadAndOpenPanel_Pt-B"
						};
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-I - vv, err: ", vv, err);
						return context$2$0.abrupt("return", vv.err);

					case 37:
						context$2$0.next = 46;
						break;

					case 39:
						context$2$0.prev = 39;
						context$2$0.t1 = context$2$0["catch"](3);

						vv.panelState = undefined;
						context$2$0.t1.panelState = vv.panelState;
						context$2$0.t1.returnPoint = "_loadAndOpenPanel_Pt-A";
						console.dog(">>> SlideDownVcc_LF - _loadAndOpenPanel - Pt-J - vv, err: ", vv, context$2$0.t1);
						return context$2$0.abrupt("return", context$2$0.t1);

					case 46:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[3, 39], [15, 25]]);
		};

		p._testIsPanelOpen = function () {
			var that = this;
			var vv = {};
			vv.isOpen = that.elmo.find(".SlideDownPanel").hasClass("PanelOpen");
			console.dog(">>> SlideDownVcc_LF - _testIsPanelOpen - vv.isOpen: ", vv.isOpen);
			return vv.isOpen;
		};

		p._closePanelAsync = function () {
			var that = this;
			var vv = {};
			///alert(">>> SlideDownVcc_LF - _closePanelAsync");

			//{ Setup promise that informs that panel is not opened.
			vv.myPromise = new _Promise(function (resolve, reject) {

				//	IF *true*: Path to promise resolution is based on $watching inLf.isPanelOpen.
				if (that._testIsPanelOpen()) {
					/* Panel is open */
					vv.unregisterWatchFnc = that.scopeNg.$watch("inLf.isPanelOpen", function (newVal, oldVal) {
						console.dog(">>> SlideDownVcc_LF - _closePanelAsync - Pt-B1 - newVal, oldVal, vv: ", newVal, oldVal, vv);

						///alert("boooooo " + newVal)

						if (newVal === false) {
							vv.unregisterWatchFnc();
							resolve("closed");
						}
					}, true); // End $watch args.
				}
				// ELSE: resolve promise manually
				else {
					/* Panel is NOT open */
					resolve("closed");
				}
			});
			//}	

			if (that._testIsPanelOpen()) {
				// Panel is open so close it.
				//	--
				//	Set class name var for template.
				//	This should eventually trigger handle_Transition_end(),
				//	which will then set $watched scope prop inLf.isPanelOpen.
				//{
				that.scopeNg.loc.panelActionClassName = "PanelClose";
				//}

				//{ Now apply scope so template picks-up css class name.
				that.scopeNg.$apply();
				//}
			}

			//	Return the promise.
			return vv.myPromise
			//}		
			;
		};

		p._openPanelAsync = function () {
			var that = this;
			var vv = {};

			//{ Setup promise that informs that panel is not opened.
			vv.myPromise = new _Promise(function (resolve, reject) {

				//	IF *! true*: Path to promise resolution is based on $watching inLf.isPanelOpen.
				if (!that._testIsPanelOpen()) {
					/* Panel is NOT open */
					console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-A - vv: ", vv);
					vv.unregisterWatchFnc = that.scopeNg.$watch("inLf.isPanelOpen", function (newVal, oldVal) {

						console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-B1 - that.scopeNg.inLf.isPanelOpen, newVal, oldVal, vv: ", that.scopeNg.inLf.isPanelOpen, newVal, oldVal, vv);

						if (newVal === true) {
							vv.unregisterWatchFnc();
							console.dog(">>> SlideDownVcc_LF - _openPanelAsync - Pt-B2 - vv: ", vv);
							resolve("opened");
						}
					}, true); // End $watch args.
				}
				// ELSE: resolve promise manually
				else {
					/* Panel is open */
					resolve("opened");
				}
			});
			//}	

			if (!that._testIsPanelOpen()) {
				// Panel is NOT open so open it.
				//	--
				//	Set class name var for template.
				//	This should eventually trigger handle_Transition_end(),
				//	which will then set $watched scope prop inLf.isPanelOpen.
				//{
				that.scopeNg.loc.panelActionClassName = "PanelOpen";
				//}
				//{ Now apply scope so template picks-up css class name.
				that.scopeNg.$apply();
				//}
			}

			//	Return the promise.
			return vv.myPromise
			//}		
			;
		};

		p._emptyContentFromPanel = function () {
			var that = this;
			var vv = {};

			///that.elmo.find('.SlideDownContents').empty();

			that.scopeNg.loc.drctName = "";
			that.scopeNg.$apply();
		};

		p._addDrctToPanel = function (drctName, handoffSpecId) {
			console.dog(">>> _addDrctToPanel - handoffSpecId: ", handoffSpecId);
			var that = this;
			var vv = {};

			///vv.newDrct = that.compileNg( "<"+drctName+"></"+drctName+">" );
			///that.elmo.find('.SlideDownContents').append( vv.newDrct );

			that.scopeNg.loc.drctName = drctName;
			that.scopeNg.loc.handoffSpecId = handoffSpecId;
			that.scopeNg.$apply();
		};

		//}

		return LinkFncClass;
	})();

	//}	

	//}	

	///console.dog(">>> SlideDownVcc_LF -");
	//	-- STEPS --
	//	1. Close panel  (async wait).
	//	2. Empty contents of panel.

	//}

	//}
	//	-- STEPS --
	//	1. Close panel  (async wait).
	//	2. Empty contents of panel.
	//	3. Add contents to panel.
	//	4. Open panel (async wait)
	//	5. Notify done through scope: fromLf.isPanelFullyOpened = true
	//	6. Run $apply to push scope.

	//}
	//}	

	//}

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SlideDownVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _Promise = __webpack_require__(44)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "SlideDownVcc";
		aa.myClassName = "SlideDownVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mediator, sessionService) {
			console.dog(">>> StationListingsP1_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.mediator = mediator;
				that.sessionService = sessionService;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function setup() {
			var that = this;
			///alert(">>> SlideDownVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.ext = {};
			that.scopeNg.fromLf = {};
			that.scopeNg.toLf = {};
			that.scopeNg.inLf = {};

			that.scopeNg.loc.myVcName = aa.myVcName;
			that.scopeNg.loc.okToShow = true;
			that.scopeNg.loc.remoteSessionId = "";

			that.scopeNg.loc.panelActionClassName = "PanelClose";
		};

		p._setupSpcfDatas = function () {
			var that = this;
			/* STUB */
		};

		p._openPanelWithDrct = function _openPanelWithDrct(drctName) {
			var that = this;
			var vv = {};
			//	-- DELEGATE TO LINK FUNCTION (Lf) --

			//{ Setup promise that informs that panel is fully (w/drct) opened.
			vv.myPromise = new _Promise(function (resolve, reject) {

				vv.unregisterWatchFnc = that.scopeNg.$watch("fromLf.isPanelFullyOpened", function (newVal, oldVal) {

					if (newVal === true) {
						vv.unregisterWatchFnc();
						resolve("opened");
					}
				}, true);
			});
			//}	
			//{ Inform Lf, via scope var, of the params for displaying the panel
			that.scope.toLf.panelParams = {
				action: open,
				drctName: drctName
			};
			//}
			//{ Now inform by applying changes to scope .
			that.scope.$apply();
			//}

			//	Return the promise.
			return vv.myPromise
			//}
			;
		};

		//}

		return aa.MyClass;
	})();

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FloatingOptionsMenuVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(256);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(258);
	aa.LinkFncClass = __webpack_require__(259);
	aa.CtrlClass = __webpack_require__(260);
	//}
	///alert(">>> aa.CtrlClass " + aa.CtrlClass )

	//    Create module and its directive:
	//{
	aa.thisModsName = "FloatingOptionsMenuVcc";
	aa.thisMod = aa.FloatingOptionsMenuVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctFloatingOptionsMenuVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {

	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        transclude: true,
	        scope: {
	            purposing: "@",
	            purposingForShare: "@",
	            goDude: "@"
	        },
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(257);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/FloatingOptionsMenuVcc/styles/FloatingOptionsMenuVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/FloatingOptionsMenuVcc/styles/FloatingOptionsMenuVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: FloatingOptionsMenuVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-floating-options-menu-vcc {\n  display: block;\n}\n.FloatingOptionsMenuVcc {\n  height: 0;\n  line-height: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nmd-backdrop.md-menu-backdrop {\n/* Style */\n  border___: solid 1px #f00;\n  background-color: #333;\n  opacity: 0.5;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  filter: alpha(opacity=50);\n}\n.zPlayerOptionsMenu.md-open-menu-container {\n  border: solid 1px #f00;\n}\n", ""]);

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: FloatingOptionsMenuVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"whoAmI\">This is the inside of {{loc.myVcName}}.</div>\n\t\n\t\n<!-- This is the {{view.myName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} {{loc.purposing.role}} vcBox\"  \n\tng-if=\"loc.okToShow\"\n>\n\n\n\t<md-menu\n\t\t\n\t>\n\t\t<md-button \n\t\t\tclass=\"md-icon-button\"\n\t\t\taria-label=\"{{loc.ariaLabeling}}\"  \n\t\t\tdata-role= '{{loc.purposing.role}}'\n\t\t\tng-click=\"thisc.openMenu($mdOpenMenu, $event)\"\n\t\t\tstyle=\"color: red;\"\n\t\t>\n\t\t</md-button>\n\n\t\t<md-menu-content>\n\t\t\t<md-menu-item>\n\t\t\t\t<drct-button-4r-facebook-share-vcc\n\t\t\t\t\tdata-purposing = {{loc.purposingForShare}}\n\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t></drct-button-4r-facebook-share-vcc>\n\t\t\t</md-menu-item>\n\t\t\t\n\t\t\t<md-menu-item>\n\t\t\t\t<drct-button-4r-email-share-vcc\n\t\t\t\t\tdata-purposing = {{loc.purposingForShare}}\n\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t></drct-button-4r-email-share-vcc>\n\t\t\t</md-menu-item>\n\n\t\t\t<md-menu-item>\n\t\t\t\t<drct-button-4r-email-report-vcc\n\t\t\t\t\tdata-purposing = {{loc.purposingForShare}}\n\t\t\t\t\tdata-go_dude = 'truee'\n\t\t\t\t></drct-button-4r-email-report-vcc>\n\t\t\t</md-menu-item>\n\t\t</md-menu-content>\n\t</md-menu>\n\n\t\n</div>\n\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FloatingOptionsMenuVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "FloatingOptionsMenuVcc";
		aa.myClassName = "FloatingOptionsMenuVcc_LinkFncClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, elm, attr) {
			console.dog(">>> FloatingOptionsMenuVcc_LinkFncClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thislf = this;
				var that = this;
				that.scopeNg = scopeNg;

				that.elm = elm;
				that.attr = attr;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
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

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: FloatingOptionsMenuVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "FloatingOptionsMenuVcc";
		aa.myClassName = "FloatingOptionsMenuVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, stateNg, stateParamsNg, timeoutNg, mediatorService, stationsService) {
			console.dog(">>> FloatingOptionsMenuVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.stateNg = stateNg;
				that.stateParamsNg = stateParamsNg;
				that.timeoutNg = timeoutNg;
				that.mediatorService = mediatorService;
				that.stationsService = stationsService;

				that._setupOnGo();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	APPISH PUBLIC/PRIVATE METHODS:
		//{

		//}	

		//	================================================================
		//	APPISH PRIVATE METHODS:
		//{	

		p._setupOnGo = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						that.scopeNg.$watch("goDude", function () {
							if (that.scopeNg.goDude === "truee") {
								///alert(that.scopeNg.stationsFilter);
								var dc = that._setup();
							}
						});
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setup = function callee$1$0(goDude) {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						context$2$0.next = 3;
						return _regeneratorRuntime.awrap(that._setupStndDatas());

					case 3:
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._setupSpcfDatas());

					case 5:
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._setScopeWatchers());

					case 7:
						console.dog(">>> FloatingOptionsMenuVcc_CtrlClass._setup - scopeNg ", that.scopeNg);
						that.scopeNg.loc.goDude = that.scopeNg.goDude;
						that.scopeNg.$apply();

						return context$2$0.abrupt("return", "done");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupStndDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc = {};
						that.scopeNg.ext = {};
						that.scopeNg.methods = {};

						that.scopeNg.loc.myVcName = aa.myVcName;
						that.scopeNg.loc.okToShow = true;
						console.dog(">>> FloatingOptionsMenuVcc_CtrlClass - that.scopeNg: ", that.scopeNg);

						return context$2$0.abrupt("return", "done");

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setupSpcfDatas = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setScopeWatchers = function callee$1$0() {
			var that;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						//{ Watch attributes.
						that.scopeNg.$watch("purposing", function () {
							that.scopeNg.loc.ariaLabeling = that.scopeNg.ariaLabeling;
						});
						that.scopeNg.$watch("instanceIdfier", function () {
							that.scopeNg.loc.instanceIdfier = that.scopeNg.instanceIdfier;
						});

						return context$2$0.abrupt("return", "done");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	OPTION MENU PUBLIC/PRIVATE METHODS:
		//{
		p.showMenu = p._showMenu = function callee$1$0(purposing, purposingForShare) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert("booooooo1")
						that.scopeNg.loc.okToShow = false;
						that.scopeNg.$apply();
						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._utilizePurposing(purposing, purposingForShare));

					case 6:
						vv.voidd = context$2$0.sent;

						that.scopeNg.$apply();
						that.scopeNg.loc.okToShow = true;
						that.scopeNg.$apply();
						///alert("booooooo1")
						$(".FloatingOptionsMenuVcc .md-icon-button ").click();

						return context$2$0.abrupt("return", "done");

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.openMenu = function ($mdOpenMenu, ev) {
			var that = this;
			var vv = {};
			var that = this;
			///vv.heightForMask = document.getElementsByClassName('StateContainerVcc')[0].offsetHeight;
			$mdOpenMenu(ev);

			vv.resizerFunction = function () {
				document.getElementsByClassName("md-menu-backdrop")[0].style.height = document.getElementsByClassName("StateContainerVcc")[0].offsetHeight + "px";
				$(".md-open-menu-container").addClass(that.scopeNg.loc.purposing.role);
			};
			vv.voidd = setTimeout(vv.resizerFunction, 1);
		};
		//}	

		//	================================================================
		//	OPTION MENU TYPE PRIVATE METHODS:
		//{
		p._utilizePurposing = function callee$1$0(purposing, purposingForShare) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert("booooooo2")
						that.scopeNg.loc.purposing = purposing;
						that.scopeNg.loc.purposingForShare = purposingForShare;

						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		//	================================================================
		//	SPECIFIC PUBLIC/PRIVATE METHODS:
		//{
		//}	

		//	================================================================
		//	SPECIFIC PRIVATE METHODS:
		//{	

		//}

		return aa.MyClass;
	})();

	///alert(that.scopeNg.goDude);
	//}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MdDialogMngrVcc.js 
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	__webpack_require__(262);
	//}

	//    Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(264);
	aa.LinkFncClass = __webpack_require__(265);
	aa.CtrlClass = __webpack_require__(266);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = "MdDialogMngrVcc";
	aa.thisMod = aa.MdDialogMngrVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctMdDialogMngrVcc";
	aa.thisMod.directive(aa.drctName, ["$compile", createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile) {
	    var vv = {};

	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNgg, elm, attr) {
	        new aa.LinkFncClass(scopeNgg, elm, attr);
	    };
	    //    Define injection into the Ctrl class.
	    vv.controller = ["$scope", "$mdDialog", "mediatorService", aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: "E",
	        template: aa.tmplt,
	        link: vv.linkFnc,
	        controller: vv.controller
	    };
	};
	//}

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(263);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/MdDialogMngrVcc/styles/MdDialogMngrVcc_style.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/0_gizmos/MdDialogMngrVcc/styles/MdDialogMngrVcc_style.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: MdDialogMngrVcc_style.styl\n * *********************************************************************\n * *********************************************************************\n */\ndrct-slide-down-vcc {\n  display: block;\n}\n/* make dialog box to be on the top */\n.md-dialog-container {\n  z-index: 1000;\n}\n.MdDialogMngrVc_ {\n/* Layout */\n  padding: 0 20px 0 20px;\n  width: 90vw;\n  max-width: 350px;\n  min-width: 210px;\n  max-height: 85vh;\n  overflow-y: auto;\n/* Style */\n  background: -webkit-linear-gradient(#fff, #666);\n  background: -moz-linear-gradient(#fff, #666);\n  background: -o-linear-gradient(#fff, #666);\n  background: -ms-linear-gradient(#fff, #666);\n  background: linear-gradient(#fff, #666);\n}\n.MdDialogMngrVc_ .noticeType_success {\n  margin-bottom: 20px;\n/* Style */\n  color: #6c3;\n  text-transform: capitalize;\n}\n.MdDialogMngrVc_ .noticeType_error {\n/* Layout */\n  margin-bottom: 20px;\n/* Style */\n  color: #c00;\n  text-transform: capitalize;\n}\n.MdDialogMngrVc_ .InfoCopy {\n/* Layout */\n  margin-bottom: 20px;\n}\n.MdDialogMngrVc_ .Modal {\n/* Layout */\n  width: 100%;\n  overflow: hidden;\n/* Style */\n  background-color: #aaa;\n  color: #fff;\n  transition__: max-height 3s ease;\n}\n.MdDialogMngrVc_ .ModalClose {\n/* Layout */\n  max-height: 0px;\n/* Style */\n  border: solid 0px #008000;\n  -webkit-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -moz-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -o-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  -ms-transition: max-height 1s ease-in-out, border 0.9s step-end;\n  transition: max-height 1s ease-in-out, border 0.9s step-end;\n}\n.MdDialogMngrVc_ .ModalOpen {\n/* Layout */\n  max-height: 500px;\n/* Style */\n  border: solid 1px #008000;\n  -webkit-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -moz-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -o-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  -ms-transition: max-height 1s ease-in-out, border 0.1s step-start;\n  transition: max-height 1s ease-in-out, border 0.1s step-start;\n}\n.MdDialogMngrVc_ .md-title {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 19px;\n  color: #444;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  padding-right: 15px;\n}\n.MdDialogMngrVc_ .md-secondary.md-button {\n/* Layout */\n  position: absolute;\n  margin: 0;\n  top: 2px;\n  right: 1px;\n  min-width: 16px;\n  min-height: 16px;\n/* Style */\n  font-size: 20px;\n  background-color: transparent;\n}\n.MdDialogMngrVc_ .md-actions {\n/* Layout */\n  margin: 0;\n  padding: 0 0 10px 0;\n  margin-bottom: 10px;\n}\n.MdDialogMngrVc_ .md-button.md-primary {\n/* Layout */\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #f5841f;\n  border: solid 1px #555;\n}\n.MdDialogMngrVc_ .md-button.md-primary:disabled {\n/* Layout */\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 15px;\n  color: #282828;\n  text-transform: uppercase;\n  color: #999;\n  background-color: #db9;\n  border: solid 1px #555;\n}\n.MdDialogMngrVc_ .md-button.md-alternative {\n/* Layout */\n  margin: 0 8px;\n  padding: 0;\n  word-wrap: break-word;\n/* Style */\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  color: #282828;\n  color: #00d;\n  background-color: transparent;\n  text-transform: capitalize;\n}\n.MdDialogMngrVc_ .md-button.md-alternative.DialogButtonLink {\n/* Layout */\n/* Style */\n  white-space: normal;\n  line-height: initial;\n}\n@media only screen and (min-width: 768px) {\n  .MdDialogMngrVc_ {\n/* Layout */\n    max-height: 95vh;\n  }\n  .MdDialogMngrVc_ .md-actions {\n/* Layout */\n    padding: 0px 10px;\n  }\n  .MdDialogMngrVc_ .md-button.md-alternative {\n/* Layout */\n    padding: 0 6px;\n/* Style */\n  }\n}\n", ""]);

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: MdDialogMngrVcc_tmplt.html -->\n<!-- =============================================================== -->\n\n\n<!-- This is the {{loc.myVcName}} Tmplt. -->\n<div class=\"{{loc.myVcName}} vcBox\">\n</div>\n\n";

/***/ },
/* 265 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MdDialogMngrVcc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {};

		var p = LinkFncClass.prototype;

		//	================================================================
		//	THISC PUBLIC METHODS:
		//{
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	
		//}

		return LinkFncClass;
	})();

/***/ },
/* 266 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MdDialogMngrVcc_CtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		var aa = {};

		//	Class properties.
		// {
		aa.myVcName = "MdDialogMngrVcc";
		aa.myClassName = "MdDialogMngrVcc_CtrlClass";
		aa.parentClassName = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, mdDialogNg, mediator) {
			console.dog(">>> MdDialogMngrVcc_CtrlClass held as MyClass");
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.mdDialogNg = mdDialogNg;

				that.mediator = mediator;

				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		//	================================================================
		//	PUBLIC/PRIVATE METHODS METHODS:
		//{
		p.displayNotice = p._displayNotice = function (msg, type) {
			var that = this;
			var vv = {};

			vv.noticeCopy = msg;
			vv.noticeType = type; // accepted type: success, error

			vv.dialogScopeNg = angular.element(document.querySelector(".mdDialog4rStnd")).scope();

			vv.dialogScopeNg.noticeCopy = vv.noticeCopy;
			vv.dialogScopeNg.noticeType = vv.noticeType;

			vv.dialogScopeNg.$apply();

			return "done";
		};

		p.hideDialog = p._hideDialog = function () {
			var that = this;
			var vv = {};

			vv.promise1 = that.mdDialogNg.hide();

			return vv.promise1;
		};

		p.openLoginDialog = function (handoffSpecId, infoCopy) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "Login";

			vv.paramsOut.customs.target = ".navChoiceLogin";
			vv.paramsOut.customs.myCssNamespace = "LoginDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rLogin";

			if (infoCopy) {
				vv.paramsOut.customs.myMainContent = "<p class=\"InfoCopy\">" + infoCopy + "</p><drct-login-panel-vcc atrb-handoff-spec-id=\"" + handoffSpecId + "\"></drct-login-panel-vcc>";
			} else {
				vv.paramsOut.customs.myMainContent = "<drct-login-panel-vcc atrb-handoff-spec-id=\"" + handoffSpecId + "\"></drct-login-panel-vcc>";
			}

			vv.paramsOut.customs.myAlt01ButtonText = "New? SIGN UP NOW.";
			vv.paramsOut.customs.myAlt01ExtraClassNames = "DialogButtonLink";
			vv.paramsOut.customs.myAlt01NoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"SignupRequestButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.cancelButtonText = "CANCEL";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"LoginCancelButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "LOG IN";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"LoginSubmitButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openForgotPasswordDialog = function (handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "FORGOT PASSWORD";

			vv.paramsOut.customs.target = ".navChoiceSignup";
			vv.paramsOut.customs.myCssNamespace = "ForgotPasswordDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rForgotPassword";
			vv.paramsOut.customs.myMainContent = "<drct-forgot-password-panel-vcc atrb-handoff-spec-id=\"" + handoffSpecId + "\"></drct-forgot-password-panel-vcc>";

			vv.paramsOut.cancelButtonText = "CANCEL";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"StndDialogCancelButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "SUBMIT";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"ForgotPasswordSubmitButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openForgotPasswordDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openSignupDialog = function (handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "Free sign up!";

			vv.paramsOut.customs.target = ".navChoiceSignup";
			vv.paramsOut.customs.myCssNamespace = "SignupDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rSignup";
			vv.paramsOut.customs.myMainContent = "<drct-signup-panel-vcc atrb-handoff-spec-id=\"" + handoffSpecId + "\"></drct-signup-panel-vcc>";

			vv.paramsOut.customs.myAlt01ButtonText = "Already have an account? LOG IN.";
			vv.paramsOut.customs.myAlt01ExtraClassNames = "DialogButtonLink";
			vv.paramsOut.customs.myAlt01NoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"LoginRequestButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.cancelButtonText = "CANCEL";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"SignupCancelButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "SIGNUP";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"SignupSubmitButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openStndConfirmDialog = function (handoffSpecId, doHandoffFirst, confirmQuestion, startEndTarget, mainContent) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = confirmQuestion;

			vv.paramsOut.customs.target = startEndTarget;
			vv.paramsOut.customs.myCssNamespace = "StndConfirmDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rConfirm";
			vv.paramsOut.customs.myMainContent = mainContent || "";

			vv.paramsOut.customs.myAlt01ButtonText = "";
			vv.paramsOut.customs.myAlt01NoticeJSON = "";

			vv.paramsOut.cancelButtonText = "NO";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"CancelButtonOfStndConfirmInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\",  " + "\t\t\t\t\t\t\"doHandoffFirst\": \"" + doHandoffFirst + "\",  " + "\t\t\t\t\t\t\"action\": \"cancel\" " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "YES";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"ProceedButtonOfStndConfirmInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\",  " + "\t\t\t\t\t\t\"doHandoffFirst\": \"" + doHandoffFirst + "\",  " + "\t\t\t\t\t\t\"action\": \"proceed\" " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openDoNothingNoticeDialog = function (noticeTitle, noticeCopy, proceedButtonText, startEndTarget, mainContent) {
			var that = this;
			var vv = {};

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = noticeTitle || "";

			vv.paramsOut.customs.target = startEndTarget;
			vv.paramsOut.customs.myCssNamespace = "StndConfirmDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rConfirm";
			vv.paramsOut.customs.myMainContent = noticeCopy || "";

			vv.paramsOut.proceedButtonText = proceedButtonText || "OK";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - openStndNoticeDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openEmailShareDialog = function (purposing, handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);

			vv.purposingString = JSON.stringify(purposing);
			///console.dog('===> vv.purposingString: ', vv.purposingString, purposing)

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "Share by Email";

			vv.paramsOut.customs.target = ".navChoiceLogin";
			vv.paramsOut.customs.myCssNamespace = "EmailShareDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailShare";
			vv.paramsOut.customs.myMainContent = "<drct-email-share-panel-vcc atrb-purposing='" + vv.purposingString + "' data-go_dude=\"truee\"></drct-email-share-panel-vcc>";

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = "CANCEL";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"StndDialogCancelButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "SEND";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"EmailShareSubmitButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openEmailReportDialog = function (purposing, handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";
			//purposing = 'mytest'

			///alert(handoffSpecId);

			vv.purposingString = JSON.stringify(purposing);
			///console.dog('===> vv.purposingString: ', vv.purposingString, purposing)

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "Report";

			vv.paramsOut.customs.target = ".navChoiceLogin";
			vv.paramsOut.customs.myCssNamespace = "EmailReportDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport";
			vv.paramsOut.customs.myMainContent = "<drct-email-report-panel-vcc purposing='" + vv.purposingString + "' data-go_dude=\"truee\"></drct-email-report-panel-vcc>";

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = "CANCEL";
			vv.paramsOut.customs.myCancelNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"StndDialogCancelButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.paramsOut.proceedButtonText = "SEND";
			vv.paramsOut.customs.myProceedNoticeJSON = "" + "\t\t\t\t\t\"notice\": {  " + "\t\t\t\t\t\t\"noticeName\": \"EmailReportSubmitButtonInDialog_clicked\",  " + "\t\t\t\t\t\t\"vc\": \"MdDialogMngrVcc\",  " + "\t\t\t\t\t\t\"context\": \"\",  " + "\t\t\t\t\t\t\"handoffSpecId\": \"" + handoffSpecId + "\"  " + "\t\t\t\t\t}  ";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openIOSPlayDialog = function (handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "";

			vv.paramsOut.customs.target = ".navChoiceLogin";
			vv.paramsOut.customs.myCssNamespace = "IOSPlayDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport";

			vv.paramsOut.customs.myMainContent = "To play, <a id=\"OutLinkInDiaglog\" href=\"http://itunes.com/apps/appname\" target=\"_blank\" onclick=\"angular.element( document.querySelector( '.MdDialogMngrVcc' ) ).scope().thisc.hideDialog();\" title=\"Link to App Store.\">please install our app from the App Store</a>.";

			///document.getElementById("myBtn").addEventListener("click", displayDate);

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = "";
			vv.paramsOut.customs.myCancelNoticeJSON = "";

			vv.paramsOut.proceedButtonText = "";
			vv.paramsOut.customs.myProceedNoticeJSON = "";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		p.openAndroidPlayDialog = function (handoffSpecId) {
			var that = this;
			var vv = {};
			handoffSpecId = handoffSpecId || "";
			//purposing = 'mytest'

			//alert(typeof purposing + ' ' + purposing);
			///alert(handoffSpecId);

			vv.paramsOut = {};
			vv.paramsOut.customs = {};

			vv.paramsOut.eventt = {};
			vv.paramsOut.title = "";

			vv.paramsOut.customs.target = ".navChoiceLogin";
			vv.paramsOut.customs.myCssNamespace = "AndroidPlayDialog MdDialogMngrVc_ mdDialog4rStnd mdDialog4rEmailReport";

			vv.paramsOut.customs.myMainContent = "Our apologies.  We are currently working on play for Android.";

			///document.getElementById("myBtn").addEventListener("click", displayDate);

			///alert('===>' + vv.paramsOut.customs.myMainContent)

			vv.paramsOut.cancelButtonText = "";
			vv.paramsOut.customs.myCancelNoticeJSON = "";

			vv.paramsOut.proceedButtonText = "";
			vv.paramsOut.customs.myProceedNoticeJSON = "";

			vv.promise1 = that._setupAndShowStndDialog(vv.paramsOut);

			console.dog(">>> openLoginDialog - vv.promise1: ", vv.promise1);

			return vv.promise1;
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		//{ TYPICAL
		p._setup = function setup() {
			var that = this;
			///alert(">>> MdDialogMngrVcc - boooooo");
			that._setupStndDatas();
			that._setupSpcfDatas();
		};

		p._setupStndDatas = function () {
			var that = this;
			that.scopeNg.loc = {};
			that.scopeNg.loc.myVcName = aa.myVcName;
		};

		p._setupSpcfDatas = function () {
			var that = this;
			// STUB.				
		};
		//}

		//--------------------------------------------------------------
		//{ RE DIALOG IN GENERAL.

		p._getCoreObj = function () {
			var that = this;
			return that.coreObj;
		};

		p._bgetExtendedConfig = function (config, extensions) {
			var that = this;
			var vv = {};

			//{ Additions to config._options.
			config._options.myCssNamespace = extensions.myCssNamespace;
			config._options.myAlt01ButtonText = extensions.myAlt01ButtonText;
			config._options.targetEvent.target = $(extensions.target);
			//}

			//{ Extend template.
			if (extensions.template === "stndTemplate") {
				vv.template = that._bgetTemplate4rStnd(extensions);
			} else {
				vv.template = that._bgetTemplate4rStnd(extensions);
			}
			config._options.template = vv.template;
			//}

			return config;
		};

		p._showDialog = function (config) {
			var that = this;
			var vv = {};
			console.dog(">>> mdDialogNg2: ", that.mdDialogNg);
			vv.promise1 = that.mdDialogNg.show(config);

			return vv.promise1;
		};

		//}

		//--------------------------------------------------------------
		//{ RE STANDARD DIALOG SETUP FLOW.

		p._setupAndShowStndDialog = function (params) {

			var that = this;
			var vv = {};
			vv.paramsOut = params;

			//{ Bget configuration.
			vv.paramsOut = params;
			vv.config = that._bgetConfig4rStnd(vv.paramsOut);
			//}

			//{ Now show the dialog box.
			vv.promise1 = that._showDialog(vv.config);
			//}	

			return vv.promise1;
		};
		//}		

		//--------------------------------------------------------------
		//{ RE STANDARD DIALOG HELPERS.

		p._bgetConfig4rStnd = function (params) {

			var that = this;
			var vv = {};

			console.dog(">>> dialogMngr: ", that.mdDialogNg);

			// 	Appending dialog to document.body to cover sidenav in docs app
			//	...Note, Chaining functions that define the config.
			vv.config = that.mdDialogNg.confirm().parent(angular.element(document.body)).title(params.title).content("").ariaLabel("Lucky day").ok(params.proceedButtonText)
			///.cancel( params.cancelButtonText )
			.cancel("X").targetEvent(params.eventt);

			console.dog(">>> _setupSpcfDatas - config1: ", vv.config._options);

			vv.extension4rConfig = {
				template: "stndTemplate",
				myCssNamespace: params.customs.myCssNamespace,
				target: params.customs.target,
				myAlt01ExtraClassNames: params.customs.myAlt01ExtraClassNames,
				myAlt01ButtonText: params.customs.myAlt01ButtonText,
				myAlt01NoticeJSON: params.customs.myAlt01NoticeJSON,
				myProceedNoticeJSON: params.customs.myProceedNoticeJSON,
				myCancelNoticeJSON: params.customs.myCancelNoticeJSON,
				myMainContent: params.customs.myMainContent
			};

			vv.config = that._bgetExtendedConfig(vv.config, vv.extension4rConfig);

			console.dog(">>> _setupSpcfDatas - config2: ", vv.config._options);

			return vv.config;
		};

		p._bgetTemplate4rStnd = function (extensions) {
			/* Used extensions props for SLOTs  (^ = optional) :
	   * .myMainContent  ( "drct-name" if any to put in the content area in the tmplt)
	   */

			var that = this;
			var vv = {};

			//{ Define template.
			vv.tmplt = "" + " <md-dialog  " + "     class=\"{{ dialog.myCssNamespace }}\"  " + "\t\tmd-theme=\"{{ dialog.theme }}\"  " + "\t\taria-label=\"{{ dialog.ariaLabel }}\"  " + "\t>  " + "     <ng-form class=\"mdDialogForm\" name=\"mdDialogForm\">  " + "\t\t\t<md-button  " + "\t\t\t\tng-if=\"dialog.$type == 'confirm'\"  " + "\t\t\t\tclass=\"md-secondary\"  " + "\t\t\t\t[[-SLOT-myCancelAction-]]  " + "\t\t\t>  " + "\t\t\t\t{{ dialog.cancel }}  " + "\t\t\t</md-button>  " + "\t\t<md-dialog-content  " + "\t\t\trole=\"document\"  " + "\t\t\ttabIndex=\"-1\"  " + "\t\t>  " + "\t\t\t<h2 class=\"md-title\">  " + "\t\t\t\t{{ dialog.title }} " + "\t\t\t</h2>  " + "\t\t\t<section ng-if=\"noticeType\" class=\"noticeInDialog noticeType_{{noticeType}}\"> " + "\t\t\t\t{{ noticeCopy }} " + "\t\t\t</section>  " + "\t\t\t[[-SLOT-myMainContent-]]  " + "\t\t</md-dialog-content>  " + "\t\t<div class=\"md-actions\">  " + "\t\t\t<md-button  " + "\t\t\t\tng-if=\"dialog.myAlt01ButtonText\"  " + "\t\t\t\tclass=\"md-alternative [[-SLOT-myAlt01ExtraClassNames-]]\"  " + "\t\t\t\t[[-SLOT-myAlt01Action-]]  " + "\t\t\t>  " + "\t\t\t\t{{ dialog.myAlt01ButtonText }}  " + "\t\t\t</md-button>  " + "\t\t\t<md-button  " + "\t\t\t\tng-if=\"dialog.ok\"  " + "\t\t\t\tclass=\"md-primary\"  " + "\t\t\t\tng-disabled=\"mdDialogForm.$invalid\"  " + "\t\t\t\t[[-SLOT-myProceedAction-]] " + "\t\t\t>  " + "\t\t\t\t{{ dialog.ok }} " + "\t\t\t</md-button>  " + "\t\t</div>  " + "     </ng-form>  " + "\t</md-dialog>  ";
			//}

			//{ Apply Main Content.
			if (extensions.myMainContent) {
				if (extensions.myMainContent.search("drct") === 0) {
					vv.replacement = "<" + extensions.myMainContent + "></" + extensions.myMainContent + ">";
					vv.tmplt = vv.tmplt.replace("[[-SLOT-myMainContent-]]", vv.replacement);
				} else {
					vv.replacement = extensions.myMainContent;
					vv.tmplt = vv.tmplt.replace("[[-SLOT-myMainContent-]]", vv.replacement);
				}
			} else {
				vv.replacement = "";
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myMainContent-]]", vv.replacement);
			}
			//}

			//{ Apply Alt01 Action.
			if (extensions.myAlt01NoticeJSON) {
				vv.subtmplt = "" + "\t\t\t\tonclick=\"return false;\"  " + "\t\t\t\tdata-drct_click_to_mediator_adc = '{  " + "\t\t\t\t\t[[-SLOT-noticeJSON-]]  " + "\t\t\t\t}'  ";

				vv.replacement = extensions.myAlt01NoticeJSON;
				vv.subtmplt = vv.subtmplt.replace("[[-SLOT-noticeJSON-]]", vv.replacement);

				vv.replacement = vv.subtmplt;
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myAlt01Action-]]", vv.replacement);
			} else {
				vv.replacement = "ng-click=\"dialog.hide()\"";
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myAlt01Action-]]", vv.replacement);
			}

			//}

			//{ Apply Cancel Action.
			if (extensions.myCancelNoticeJSON) {
				vv.subtmplt = "" + "\t\t\t\tonclick=\"return false;\"  " + "\t\t\t\tdata-drct_click_to_mediator_adc = '{  " + "\t\t\t\t\t[[-SLOT-noticeJSON-]]  " + "\t\t\t\t}'  ";

				vv.replacement = extensions.myCancelNoticeJSON;
				vv.subtmplt = vv.subtmplt.replace("[[-SLOT-noticeJSON-]]", vv.replacement);
				vv.replacement = vv.subtmplt;
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myCancelAction-]]", vv.replacement);

				vv.replacement = extensions.myAlt01ExtraClassNames;
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myAlt01ExtraClassNames-]]", vv.replacement);
			} else {
				vv.replacement = "ng-click=\"dialog.abort()\"";
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myCancelAction-]]", vv.replacement);
			}

			//}

			//{ Apply Proceed (Go) Action.
			if (extensions.myProceedNoticeJSON) {
				vv.subtmplt = "" + "\t\t\t\tonclick=\"return false;\"  " + "\t\t\t\tdata-drct_click_to_mediator_adc = '{  " + "\t\t\t\t\t[[-SLOT-noticeJSON-]]  " + "\t\t\t\t}'  ";

				vv.replacement = extensions.myProceedNoticeJSON;
				vv.subtmplt = vv.subtmplt.replace("[[-SLOT-noticeJSON-]]", vv.replacement);

				vv.replacement = vv.subtmplt;
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myProceedAction-]]", vv.replacement);
			} else {
				vv.replacement = "ng-click=\"dialog.hide()\"";
				vv.tmplt = vv.tmplt.replace("[[-SLOT-myProceedAction-]]", vv.replacement);
			}

			//}

			return vv.tmplt;
		};
		//}
		//}

		return aa.MyClass;
	})();

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TestItVcc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.s
	//{
	__webpack_require__(268);
	///require("../StationListings4rTopVcc/StationListings4rTopVcc.js");
	///require("../StationListings4rRecentVcc/StationListings4rRecentVcc.js");
	//}

	//	Equated dependencies.
	//{
	aa.tmplt = __webpack_require__(270);
	aa.LinkFncClass = __webpack_require__(271);
	aa.CtrlClass = __webpack_require__(272);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "TestItVcc";
	aa.thisMod = aa.TestItVcc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctTestItVcc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["$compile", drctFunction]);
	}

	function drctFunction($compile) {
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr);
		};
		//	Define injection into the Ctrl class.
		vv.controller = ["$scope", vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {
				atrbPanelDisplayedTitle: "@",
				atrbUse: "@"
			},
			restrict: "EC",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}	

	///'StationListings4rTopVcc',
	///'StationListings4rRecentVcc'

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/TestItVcc/TestItVccLinkStyle.css", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/TestItVcc/TestItVccLinkStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: TestItVccLinkStyle.css\n * *********************************************************************\n * *********************************************************************\n */\n \ndrct-test-it-vcc {\n\tdisplay: block;\n}\n\n\n\n/***********************************************************************\n * for Common *\n **********************************************************************/\n\ndrct-test-it-vcc .panelDisplayedTitle {\n\t/** Layout **/\n\tmargin-left: calc( 10px );\n\t/** Style **/\n    font-family: Verdana, Geneva, sans-serif;\n    font-size: 16px;\n}\n\n\n", ""]);

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "<!-- =============================================================== -->\n<!-- =============================================================== -->\n<!-- File: TestItVccLinkTmplt.html -->\n<!-- =============================================================== -->\n\n<div class=\"TestItVcc vcBox\">\n\t<div class=\"whoAmI\">This is the inside of {{datas.view.info.myname}}.</div>\n\n\t[**TestItVccLinkTmplt**]\n\n\t<h2 class=\"panelDisplayedTitle\">{{atrbPanelDisplayedTitle}}</h2>\n\n\t\n\n\t<drct-station-listings-4r-recent-vcc \n\t\tng-if=\"atrbUse == 'RecentStations'\" \n\t></drct-station-listings-4r-recent-vcc>\n\n\t<drct-station-listings-4r-top-vcc \n\t\tng-if=\"atrbUse == 'AllStations'\" \n\t></drct-station-listings-4r-top-vcc>\n</div>\n\n\n";

/***/ },
/* 271 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TestItVccLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.setup();
		};

		var p = LinkFncClass.prototype;

		p.setup = function setup() {
			var that = this;
			that.setClickHandler();
		};

		p.setClickHandler = function setClickHandler() {
			var that = this;
			that.elm.on({
				'click': function handleClick_fnc(Event) {}
			});
		};

		return LinkFncClass;
	})();

	///alert("BOOOOOOOO to " + that.scopeNg.datas.view.info.name);

/***/ },
/* 272 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: TestItVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function CtrlClass(scopeNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.setup();
		}

		var p = CtrlClass.prototype;

		p.setup = function setup() {
			var that = this;
			alert('testit setup');
			that.setupDatas();
		};

		p.setupDatas = function setupDatas() {
			var that = this;
			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: 'none',
						atrbListingsType: that.scopeNg.atrbListingsType
					},
					info: {
						myname: 'TestItVcc',
						listingsTitle: that.scopeNg.atrbListingsType
					}
				}
			};
		};

		return CtrlClass;
	})();

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ClickToMediatorAdc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports;
	console.dog("boooooo");

	//	INLINE:
	//{
	var aa = {};

	//	Non-equated dependencies.
	//{
	//}

	//	Equated dependencies.
	//{
	aa.LinkFncClass = __webpack_require__(274);
	//}

	//	Create module and its directive:
	//{
	aa.thisModsName = "ClickToMediatorAdc";
	aa.thisMod = aa.ClickToMediatorAdc = angular.module(aa.thisModsName, []);

	aa.drctName = "drctClickToMediatorAdc";
	createDrct(aa.thisMod, aa.drctName);
	//}
	//}

	//	HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct(module, drctName) {
		module.directive(drctName, ["mediatorService", drctFunction]);
	}

	function drctFunction(mediatorService) {
		console.dog("boooooo2");
		var vv = {};

		// Get parts.
		//{
		vv.tmplt = aa.tmplt;
		vv.LinkFncClass = aa.LinkFncClass;
		vv.CtrlClass = aa.CtrlClass;
		//}

		//	Setup the linkFnc.
		vv.linkFnc = function (scopeNgg, elm, attr) {
			new vv.LinkFncClass(scopeNgg, elm, attr, mediatorService);
		};
		//	Define injection into the Ctrl class.
		///vv.controller = ['$scope', 'mediatorService', vv.CtrlClass];

		//	Return the directive's definition.
		return {
			scope: {},
			restrict: "A",
			template: vv.tmplt,
			link: vv.linkFnc,
			controller: vv.controller
		};
	};
	//}

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ClickToMediatorAdcLinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _getIterator = __webpack_require__(275)['default'];

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, mediatorService) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.mediatorService = mediatorService;
			that._setup();
			console.dog('boooooo3: ');
		};

		var p = LinkFncClass.prototype;

		p._setup = function _setup() {
			var that = this;
			that._setClickHandler();
		};

		p._setClickHandler = function _setClickHandler() {
			var that = this;

			that.elm.on({
				'click': function handleClick_fnc(evnt) {
					var vv = {};
					vv.param = angular.fromJson(that.attr.drctClickToMediatorAdc);
					vv.doBubble = vv.param.doBubble;

					if (vv.param.pkgTags) {
						vv.pkgTags = vv.param.pkgTags;
						vv.mode = 'getPkg';
						// Ideally order of tags, when nested, is inner to outer.

						for (var _iterator = vv.pkgTags, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
							var _ref;

							if (_isArray) {
								if (_i >= _iterator.length) break;
								_ref = _iterator[_i++];
							} else {
								_i = _iterator.next();
								if (_i.done) break;
								_ref = _i.value;
							}

							var pkgTagIdfier = _ref;

							//{	Check if target tag is - or has an ancestor - idfied by pkgTagIdfier
							vv.pkgTagToUse = $(evnt.target).closest(pkgTagIdfier);
							//}

							//{	IF pkgTagToUse is had, then get its pkg (it should have one, but don't assume)
							if (vv.pkgTagToUse) {
								vv.maybePkg = vv.pkgTagToUse.data('pkg');
								if (vv.maybePkg) {
									// Got pkg for mediator, so break.
									vv.pkgForMediator = vv.maybePkg;
									break;
								}
							}
							//}
						}
					} else {
						vv.mode = 'sendPkg';
						vv.pkgForMediator = vv.param;
					}

					if (vv.pkgForMediator) {
						vv.pkgForMediator.evnt = evnt;

						if (vv.doBubble === 'true') {} else {
							evnt.stopPropagation();
						}
					}

					//	Send package to mediator
					//{	
					console.dog('>>> handleClick_fnc - vv.pkgForMediator: ', vv.pkgForMediator, that);
					that.mediatorService.receiveNotice('', vv.pkgForMediator);
					//}
				}
			});
		};

		return LinkFncClass;
	})();

	//	Do nothing.  Let event propogate.

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(276), __esModule: true };

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	__webpack_require__(35);
	__webpack_require__(277);
	module.exports = __webpack_require__(21).core.getIterator;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(21).core
	  , $iter = __webpack_require__(37);
	core.isIterable  = $iter.is;
	core.getIterator = $iter.get;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ValidatePasswordAdc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	//}

	//    Equated dependencies.
	//{
	aa.LinkFncClass = __webpack_require__(279);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = 'ValidatePasswordAdc';
	aa.thisMod = angular.module(aa.thisModsName, []);

	aa.drctName = 'drctValidatePasswordAdc';
	aa.thisMod.directive(aa.drctName, ['$compile', 'mediatorService', createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile, mediatorService) {
	    var vv = {};
	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNg, elm, attr, ngModel) {
	        console.dog('>>> ValidatePasswordAdc - ', mediatorService);
	        new aa.LinkFncClass(scopeNg, elm, attr, mediatorService, ngModel);
	    };
	    //    Define injection into the Ctrl class.
	    ///vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: 'A',
	        ///template: aa.tmplt,
	        require: 'ngModel',
	        link: vv.linkFnc
	        ///controller: vv.controller
	    };
	};
	//}

/***/ },
/* 279 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ValidatePasswordAdc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, mediatorService, ngModel) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.ngModel = ngModel;
			that.mediatorService = mediatorService;
			console.dog(">>> ValidatePasswordAdc_LinkFncClass: ", that);
			that._setup();
		};

		var p = LinkFncClass.prototype;

		p._setup = function _setup() {
			var that = this;
			that._bsetRequiredPattern();
			that._bsetValidator();
		};

		p._bsetRequiredPattern = function () {
			var that = this;

			that.REQUIRED_PATTERNS = [/\d+/, //	numeric values.
			/[a-z]+/, //	lowercase values.
			/[A-Z]+/, //	uppercase values.
			/[\W_]+/, //	special characters including underscore.
			/^\S+/ //	no whitespace allowed.
			];
			that.test_REQUIRED_PATTERNS = [/^test$/];
		};

		p._bsetValidator = function () {
			var that = this;

			that.ngModel.$validators.passwordChars = function (value) {
				var status = true;
				angular.forEach(that.REQUIRED_PATTERNS, function (pattern) {
					console.dog(">>> MATCHING", pattern, value);
					status = status && pattern.test(value);
					console.dog(">>> MATCHING", pattern, value, status);
				});
				return status;
			};
		};

		return LinkFncClass;
	})();
	//	pw should be 'test'

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ValidateConfirmPasswordAdc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports;

	//    INLINE:
	//{
	var aa = {};

	//    Non-equated dependencies.
	//{
	//}

	//    Equated dependencies.
	//{
	aa.LinkFncClass = __webpack_require__(281);
	//}

	//    Create module and its directive:
	//{
	aa.thisModsName = 'ValidateConfirmPasswordAdc';
	aa.thisMod = angular.module(aa.thisModsName, []);

	aa.drctName = 'drctValidateConfirmPasswordAdc';
	aa.thisMod.directive(aa.drctName, ['$compile', createDrct]);
	//}
	//}

	//    HELPERS TO BUILD MODULE'S DIRECTIVE:
	//{

	function createDrct($compile, mediatorService) {
	    var vv = {};
	    //    Setup the linkFnc.
	    vv.linkFnc = function (scopeNg, elm, attr, ngModel) {
	        console.dog('>>> ValidateConfirmPasswordAdc being built - ngModel: ', ngModel);
	        new aa.LinkFncClass(scopeNg, elm, attr, ngModel);
	    };
	    //    Define injection into the Ctrl class.
	    ///vv.controller = ['$scope', 'mediatorService', 'sessionService', aa.CtrlClass];

	    //    Return the directive's definition.
	    return {
	        restrict: 'A',
	        scope: {
	            compareToValue: '=compareTo'
	        },
	        require: 'ngModel',
	        link: vv.linkFnc
	        ///controller: vv.controller
	    };
	};
	//}

/***/ },
/* 281 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ValidateConfirmPasswordAdc_LinkFncClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function LinkFncClass(scopeNg, elm, attr, modelNg) {
			var that = this;
			that.scopeNg = scopeNg;
			that.elm = elm;
			that.attr = attr;
			that.modelNg = modelNg;
			console.dog(">>> ValidateConfirmPasswordAdc_LinkFncClass: ", that);
			that._setup();
		};

		var p = LinkFncClass.prototype;

		p._setup = function _setup() {
			var that = this;
			that.parentScopeNg = that.scopeNg.$parent;
			that._bsetValidator();
		};

		p.__bsetValidator = function () {
			var that = this;
			var vv = {};
			vv.matchToTagId = that.attr.drctValidateConfirmPasswordAdc;
			///alert(vv.matchToTagId)
			console.dog(">>> Validate password - modelNg: ", that.modelNg, MyPassword, that.parentScopeNg.loc);

			that.modelNg.$validators.doPasswordFieldsMatch = function (value) {
				var status = false;
				var passwordField = document.getElementById("MyPassword");
				///var field02 = document.getElementById("MyPasswordConfirm")
				angular.forEach("a", function (dontCare) {
					status = passwordField.value === that.modelNg.$$rawModelValue;
					console.dog(">>> field vals: ", status, passwordField.value, that.modelNg.$$rawModelValue);
				});
				return status;
			};
		};

		p.___bsetValidator = function () {
			var that = this;
			var vv = {};

			that.modelNg.$validators.testForMatch = function (thisValue) {
				vv.isMatch = thisValue == that.scopeNg.compareToValue ? true : false;
				console.dog(">>> _bsetValidator - vv.isMatch, thisValue, compareToValue: ", vv.isMatch, thisValue, that.scopeNg.compareToValue, that.scopeNg);
				return vv.isMatch;
			};

			that.scopeNg.$watch("compareToValue", function () {
				that.modelNg.$validate();
			});
		};

		p._bsetValidator = function () {
			var that = this;
			var vv = {};

			var firstPassword = "#" + that.attr.drctValidateConfirmPasswordAdc;
			that.elm.add(firstPassword).on("keyup", function () {
				that.scopeNg.$apply(function () {
					var v = that.elm.val() === $(firstPassword).val();
					that.modelNg.$setValidity("doPasswordsMatch", v);
				});
			});
		};

		return LinkFncClass;
	})();
	///console.dog(">>> MATCHING",  that.parentScopeNg, that.parentScopeNg.loc.confirmPassword, that.modelNg.$$rawModelValue, that.modelNg)
	///that.parentScopeNg.doPasswordsMatch = status
	///console.dog(">>> MATCHING", pattern, value, status)

/***/ },
/* 282 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVccConfigFnc.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {
		function configFnc(LocationProvider, ResourceProvider, SceDelegateProvider, StateProvider, UrlRouterProvider, RouterProvider) {
			var cc = {};

			LocationProvider.html5Mode(false).hashPrefix('!');

			// use the HTML5 History API
			LocationProvider.html5Mode(true);

			cc.Router = RouterProvider.getRouter(StateProvider, UrlRouterProvider);

			// Don't strip trailing slashes from calculated URLs
			ResourceProvider.defaults.stripTrailingSlashes = false;

			// Execute settting of routes.
			cc.Router.setRoutes();

			//	Whitelist/permit access to certain sites.
			SceDelegateProvider.resourceUrlWhitelist(['self', 'http://pi-web01.nanocosm.com**', 'http://lm-www.nanocosm.com**']);
		}

		return configFnc;
	})();

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVccCtrlClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};
		aa.globalScope = aaGlobalee;

		//	Class properties.
		// {
		aa.myVcName = "AppVcc";
		aa.refNameSelf = "AppVccCtrlClass";
		aa.refNameParent = undefined;
		aa.ParentClass = undefined;

		aa.myConstructor = function (scopeNg, locationNg, stateNg, stateParamsNg, mediator) {
			if (typeof scopeNg === "object") {
				/* OO-scaffolder will not pass $scope */
				scopeNg.thisc = this;
				var that = this;
				that.scopeNg = scopeNg;
				that.locationNg = locationNg;
				aa.globalScope.locationNg = locationNg; // Helpful for debugging.
				that.stateNg = stateNg;
				aa.globalScope.stateNg = stateNg; // Helpful for debugging.
				that.stateParamsNg = stateParamsNg;
				aa.globalScope.stateParamsNg = stateParamsNg; // Helpful for debugging.
				that.mediator = mediator;
				that._setup();
			}
		};
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.myClassName, aa.myConstructor, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;

		console.dog(">>> AppVccCtrlClass - aa.MyClass ", aa.MyClass);

		//	================================================================
		//	PUBLIC METHODS:
		//{
		p.initiatePageRebuild = function () {
			var that = this;
			console.dog(">>> Start AppVccCtrlClass.initiatePageRebuild()");
			that._reloadCurrentUiState();
			console.dog(">>> End AppVccCtrlClass.initiatePageRebuild()");
		};

		p.handoffToMediator = function callee$1$0(pkg) {
			var that, scope;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						scope = undefined;

						console.dog(">>> AppVccCtrlClass.handoffToMediator(pkg) - start - pkg: ", pkg);
						that.mediator.receiveNotice(scope, pkg);
						return context$2$0.abrupt("return", "done");

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}	

		//	================================================================
		//	PRIVATE METHODS:
		//{	
		p._setup = function setup() {
			var that = this;
			that._setupDatas();
		};

		p._setupDatas = function setupDatas() {
			var that = this;
			var vv = {};
			that.scopeNg.loc = {};
			that.scopeNg.loc.pleaseWaitDisplayStyle = "none";

			that.scopeNg.datas = {
				control: {},
				external: {},
				view: {
					mech: {
						pleaseWaitDisplayStyle: "none"
					},
					info: {
						name: ""
					}
				}
			};
		};

		p._reloadCurrentUiState = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stateParamsNg = that.stateParamsNg;
						vv.skipState = that.stateNg.current.parent.name + "_emptyUSC";
						vv.goToState = that.stateNg.current;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.stateNg.go(vv.skipState, {}, { reload: false,
							inherit: false,
							notify: true
						}));

					case 7:
						vv.skippedState = context$2$0.sent;
						context$2$0.next = 10;
						return _regeneratorRuntime.awrap(that.stateNg.go(vv.goToState, vv.stateParamsNg, { reload: false,
							inherit: true,
							notify: true
						}));

					case 10:
						vv.goneToState = context$2$0.sent;

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		return aa.MyClass;
	})();

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVccRouterPrvdrClass.js  mk002
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function RouterPrvdrClass() {
			return this;
		};
		//	Prototype its methods.
		//{	
		var p = RouterPrvdrClass.prototype;

		p.getRouter = function getRouterFnc(StateProvider, UrlRouterProvider) {
			//	Inits:
			//{
			//	Scope for this script.
			var vv = {};
			vv.methods = {};
			//}

			//	Define methods.
			//{	
			//{ ON-ENTER Methods:
			vv.methods.onEnterAddTechParams = function (stateParamsNg) {
				/*
	   //{ Supplement stateParams with tech named versions of biz named params.
	   	stateParamsNg.stationId = stateParamsNg.stationId
	   	stateParamsNg.playlistId = stateParamsNg.playlistId
	   	stateParamsNg.trackId = stateParamsNg.episodeId
	   	stateParamsNg.trackUid = stateParamsNg.trackUid
	   //}
	   */
				console.dog('>>> vv.methods.onEnterAddTechParams - done - stateParamsNg: ', stateParamsNg);
			};
			//}

			vv.methods.setRoutes = function setRoutes_fnc() {
				var myParent = undefined;
				var myName = undefined;

				// For any unmatched url, redirect to /state1
				UrlRouterProvider.otherwise('/home');

				//==================================================
				//	ABSTRACT UI STATE DEFINITIONS:
				//{

				//----------------------------------------------
				//	Add: OuterHolderVcc
				//----------------------------------------------
				myName = 'OuterHolderUSAI';
				myParent = 'NONE';
				var OuterHolderUSAI = {
					name: myName,
					abstract: true,
					views: {
						'HtmlSlot': {
							template: '' + '<drct-facebook-sdk-vcc></drct-facebook-sdk-vcc>' + '<drct-facebook-auth-machine-vcc data-go_dude="truee"></drct-facebook-auth-machine-vcc>' + '<drct-md-dialog-mngr-vcc></drct-md-dialog-mngr-vcc>' + '<drct-outer-holder-vcc></drct-outer-holder-vcc>'
						}
					},
					usedSlots: ['HtmlSlot'],
					holderVcNames: ['OuterHolderVcc'],
					addedCssNames: ['outerHolderCss1', 'outerHolderCss2']
				};

				//----------------------------------------------
				//	Add: FlexiHolderVcc
				//----------------------------------------------
				myName = 'FlexiHolderUSAI';
				myParent = OuterHolderUSAI;
				var FlexiHolderUSAI = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'OuterHolder_DnN1Slot@OuterHolderUSAI': {
							template: '<drct-flexi-holder-vcc></drct-flexi-holder-vcc>'
						}
					},
					usedSlots: ['OuterHolder_DnN1Slot'],
					holderVcNames: ['FlexiHolderVcc'],
					addedCssNames: ['FlexiStndLayout']
				};
				__webpack_require__(285);
				///require("../OuterHolderVcc/ui_states/FlexiHolderUSAI/FlexiHolderUSAI_baseStyle.styl");	

				//----------------------------------------------
				myName = 'StndStandAloneTypePgUSAM';
				myParent = FlexiHolderUSAI;
				var StndStandAloneTypePgUSAM = {
					///onEnter: [function(){ alert('Hellow from StndStandAloneTypePgUSAM'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'TheTopFixedPosArea_UpN2Slot@FlexiHolderUSAI': {
							template: '' + '<drct-header-4-stnd-use-vcc></drct-header-4-stnd-use-vcc>'
						},

						'TheFooterArea_DnN2Slot@FlexiHolderUSAI': {
							template: '<drct-footer-4-stnd-use-vcc></drct-footer-4-stnd-use-vcc>'
						}

					},
					usedSlots: ['TheTopFixedPosArea_UpN2Slot', 'TheFooterArea_DnN2Slot']
				};
				///require("../FlexiHolderVcc/ui_states/StndChromeUSAM/StndChromeUSAM_baseStyle.styl");	

				//----------------------------------------------
				myName = 'ViewportWithPlayerUSAM';
				myParent = FlexiHolderUSAI;
				var ViewportWithPlayerUSAM = {
					///onEnter: [function(){ alert('Hellow from ViewportWithPlayerUSAM'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'OuterHolder_DnN2Slot@OuterHolderUSAI': {
							template: '<drct-player-panel-vcc></drct-player-panel-vcc>'
						}
					},
					usedSlots: ['OuterHolder_DnN2Slot']
				};
				///require("../OuterHolderVcc/ui_states/ViewportWithPlayerUSAM/ViewportWithPlayerUSAM_baseStyle.styl");				

				//----------------------------------------------
				myName = 'StndChromeUSAM';
				myParent = ViewportWithPlayerUSAM;
				var StndChromeUSAM = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'TheTopFixedPosArea_UpN2Slot@FlexiHolderUSAI': {
							template: '' + '<drct-header-4-stnd-use-vcc></drct-header-4-stnd-use-vcc>'
						},
						'TheTopFixedPosArea_UpN1Slot@FlexiHolderUSAI': {
							template: '' + '<drct-slide-down-vcc></drct-slide-down-vcc>'
						},

						'TheFooterArea_DnN2Slot@FlexiHolderUSAI': {
							template: '<drct-footer-4-stnd-use-vcc></drct-footer-4-stnd-use-vcc>'
						}

					},
					usedSlots: ['TheTopFixedPosArea_UpN2Slot', 'TheTopFixedPosArea_UpN1Slot', 'TheFooterArea_DnN2Slot']
				};
				///require("../FlexiHolderVcc/ui_states/StndChromeUSAM/StndChromeUSAM_baseStyle.styl");	

				//----------------------------------------------
				myName = 'HomeTypePgUSAM';
				myParent = StndChromeUSAM;
				var HomeTypePgUSAM = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'FlexiArea_UpN2Slot@FlexiHolderUSAI': {
							template: '<drct-masthead-panel-vcc></drct-masthead-panel-vcc>'
						}
					},
					usedSlots: ['FlexiArea_UpN2Slot'],
					addedCssNames: ['FlexHomeTypePgSpacing']
				};
				///require("../FlexiHolderVcc/styles/FlexHomeTypePgSpacing/FlexHomeTypePgSpacing.styl");

				//----------------------------------------------
				myName = 'StndInsideTypePgUSAM';
				myParent = StndChromeUSAM;
				var StndInsideTypePgUSAM = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {},
					usedSlots: [],
					addedCssNames: []
				};
				///require("../FlexiHolderVcc/styles/FlexInsidePgSpacing/FlexInsidePgSpacing.styl");

				//----------------------------------------------
				myName = 'StndDetailTypePgUSAM';
				myParent = StndInsideTypePgUSAM;
				var StndDetailTypePgUSAM = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {},
					usedSlots: []
				};

				//----------------------------------------------
				myName = 'StndDetailTypePgFlexiTestUSAM';
				myParent = StndInsideTypePgUSAM;
				var StndDetailTypePgFlexiTestUSAM = {
					///onEnter: [function(){ alert('Hellow from FlexiHolderUSAI'); }],
					parent: myParent,
					name: myName,
					abstract: true,
					views: {
						'WellPrmStrata_MainSpc_UpN2Slot@FlexiHolderUSAI': {
							template: '>> StndInside TypePgUSAM - WellPrmStrata_ MainSpc_ UpN2Slot <<'
						},
						'WellPrmStrata_MainSpc_UpN1Slot@FlexiHolderUSAI': {
							template: '>> StndInside TypePgUSAM - WellPrmStrata_ MainSpc_ UpN1Slot <<'
						},
						'FlexiArea_UpN1Slot@FlexiHolderUSAI': {
							template: '<drct-hierarchy-nav-strip-vcc></drct-hierarchy-nav-strip-vcc>'
						},
						'Well_UpN1Slot@FlexiHolderUSAI': {
							template: '>>> Well_UpN1Slot (P4sdft) <<<'
						},
						'FlexiAreaPrmStrata_LfN1Spc_DnN1Slot@FlexiHolderUSAI': {
							template: '>>> FlexiArea PrmStrata_ LfN1Spc_ DnN1Slot (P4sdft) <<<'
						},
						'FlexiAreaPrmStrata_RtN1Spc_DnN1Slot@FlexiHolderUSAI': {
							template: '>>> FlexiArea<br>PrmStrata_<br>RtN1Spc_<br>DnN1Slo<br>(P4sdft) <<<'
						},
						'WellPrmStrata_LfN1Spc_DnN1Slot@FlexiHolderUSAI': {
							template: '>>>WellPrm Strata_ LfN1Spc_ DnN1Slot (P4sdft) <<<'
						},
						'WellPrmStrata_RtN1Spc_DnN1Slot@FlexiHolderUSAI': {
							template: '>>>WellPrm Strata_RtN1Spc_ DnN1Slot (P4sdft) <<<'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_UpN2Slot', 'WellPrmStrata_MainSpc_UpN1Slot', 'Well_UpN1Slot', 'FlexiAreaPrmStrata_LfN1Spc_DnN1Slot', 'FlexiAreaPrmStrata_RtN1Spc_DnN1Slot', 'WellPrmStrata_LfN1Spc_DnN1Slot', 'WellPrmStrata_RtN1Spc_DnN1Slot']
				};
				//} END: ABSTRACT UI STATE DEFINITIONS

				//==================================================
				//	CONCRETE UI STATE DEFINITIONS:
				//{
				//----------------------------------------------
				myName = 'HomeTypePgUSAM_emptyUSC';
				myParent = HomeTypePgUSAM;
				var HomeTypePgUSAM_emptyUSC = {
					///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
					parent: myParent,
					name: myName,
					url: '/HomeTypePgUSAM_emptyUSC',
					uscPageTitle: '',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: ''
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: ''
				};

				//----------------------------------------------
				myName = 'Page4rHomeUSC';
				myParent = HomeTypePgUSAM;
				var Page4rHomeUSC = {
					///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
					parent: myParent,
					name: myName,
					uscPageTitle: 'Home Page',
					url: '/home{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-home-vcc></drct-page-4r-home-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4HomeVcc'

				};

				//----------Page for Password Reset------------------------------------
				myName = 'Page4rPasswordResetUSC';
				myParent = StndStandAloneTypePgUSAM;
				var Page4rPasswordResetUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Password Reset',
					url: '/passwordreset?vcode',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-password-reset-vcc></drct-page-4r-password-reset-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPasswordResetVcc'

				};

				//----------STATE for Email Validation ------------------------------------
				myName = 'Page4rEmailValidationUSC';
				myParent = StndStandAloneTypePgUSAM;
				var Page4rEmailValidationUSC = {
					///onEnter: [function(){ alert("yada") }],
					parent: myParent,
					name: myName,
					uscPageTitle: 'Waystation Page for Email Address Validation',
					url: '/emailvalidation?vcode',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-email-validation-vcc></drct-page-4r-email-validation-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rEmailValidationVcc'
				};

				//----------------------------------------------
				myName = 'TOCPgUSC';
				myParent = StndStandAloneTypePgUSAM;
				var TOCPgUSC = {
					///onEnter: [function(){ alert('Hellow from TOCPgUSC'); }],
					parent: myParent,
					name: myName,
					uscPageTitle: 'Terms and Conditions',
					url: '/TermsAndConditions{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-purposed-page-4r-standalones-vcc purposing=\'{"type":"TOC"}\'></drct-purposed-page-4r-standalones-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'standAlonePageVariantsVcc'

				};

				//----------------------------------------------
				myName = 'StndDetailTypePgUSAM_emptyUSC';
				myParent = HomeTypePgUSAM;
				var StndDetailTypePgUSAM_emptyUSC = {
					///onEnter: [function(){ alert('Hellow from Page4rHomeUSC'); }],
					parent: myParent,
					name: myName,
					url: '/StndDetailTypePgUSAM_emptyUSC{zyEndslash:[/]*}',
					uscPageTitle: '',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: ''
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: ''
				};

				//----------------------------------------------
				myName = 'Page4rStationDtlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rStationDtlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Station Detail',
					url: '/station/{stationName:[^/]*}/{stationId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rStationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rStationDtlShortUrlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rStationDtlShortUrlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Station Detail',
					url: '/station/{stationId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rStationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rStationDtlFlexiTestUSC';
				myParent = StndDetailTypePgFlexiTestUSAM;
				var Page4rStationDtlFlexiTestUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Station Detail Flexi',
					url: '/stationflexi{slash1:[/]?}{stationName:[^/]*}{slash2:[/]?}{stationId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4-station-dtl-vcc></drct-page-4-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4StationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rPlaylistDtlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rPlaylistDtlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail',
					url: '/station/{stationName:[^/]*}/{stationId:[^/]*}/playlist/{playlistName:[^/]*}/{playlistId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};

				//----------------------------------------------
				myName = 'Page4rPlaylistDtlShortUrlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rPlaylistDtlShortUrlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail',
					url: '/station/{stationId:[^/]*}/playlist/{playlistId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};

				//----------------------------------------------
				myName = 'Page4rPlaylistDtlForTrackUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rPlaylistDtlForTrackUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail for Track',
					url: '/station/{stationId:[^/]*}/playlist/{playlistId:[^/]*}/track/{trackUid:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};

				//{ WITH BIZ SYNONYMS:

				//----------------------------------------------
				myName = 'Page4rSchoolDtlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rSchoolDtlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'School Detail',
					url: '/school/{stationName:[^/]*}/{stationId:[^/]+}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rStationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rSchoolDtlShortUrlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rSchoolDtlShortUrlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'School Detail',
					url: '/school/{stationId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-station-dtl-vcc></drct-page-4r-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rStationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rSchoolDtlFlexiTestUSC';
				myParent = StndDetailTypePgFlexiTestUSAM;
				var Page4rSchoolDtlFlexiTestUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'School Detail Flexi',
					url: '/schoolflexi{slash1:[/]?}{stationName:[^/]*}{slash2:[/]?}{stationId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4-station-dtl-vcc></drct-page-4-station-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rStationDtlVcc'
				};

				//----------------------------------------------
				myName = 'Page4rProjectDtlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rProjectDtlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail',
					url: '/school/{stationName:[^/]*}/{stationId:[^/]*}/project/{playlistName:[^/]*}/{playlistId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};

				//----------------------------------------------
				myName = 'Page4rProjectDtlShortUrlUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rProjectDtlShortUrlUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail',
					url: '/school/{stationId:[^/]*}/project/{playlistId:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};

				//----------------------------------------------
				myName = 'Page4rProjectDtlForEpisodeUSC';
				myParent = StndDetailTypePgUSAM;
				var Page4rProjectDtlForEpisodeUSC = {
					parent: myParent,
					name: myName,
					uscPageTitle: 'Project Detail for Episode',
					url: '/school/{stationId:[^/]*}/project/{playlistId:[^/]*}/episode/{trackUid:[^/]*}{zyEndslash:[/]*}',
					views: {
						'WellPrmStrata_MainSpc_MainSlot@FlexiHolderUSAI': {
							template: '<drct-page-4r-playlist-dtl-vcc></drct-page-4r-playlist-dtl-vcc>'
						}
					},
					usedSlots: ['WellPrmStrata_MainSpc_MainSlot'],
					pageVcc: 'Page4rPlaylistDtlVcc',
					isAuthRequired: true,
					logoutGotoState: 'Page4rHomeUSC'
				};
				//}
				//} END: CONCRETE UI STATE DEFINITIONS

				//==================================================
				//	APPLY STATE DEFINITIONS (with nesting shown):
				//{
				StateProvider.state(OuterHolderUSAI);
				StateProvider.state(FlexiHolderUSAI);
				StateProvider.state(StndStandAloneTypePgUSAM);
				StateProvider.state(Page4rPasswordResetUSC);
				StateProvider.state(Page4rEmailValidationUSC);
				StateProvider.state(TOCPgUSC);
				StateProvider.state(ViewportWithPlayerUSAM);
				StateProvider.state(StndChromeUSAM);
				StateProvider.state(HomeTypePgUSAM);
				StateProvider.state(HomeTypePgUSAM_emptyUSC);
				StateProvider.state(Page4rHomeUSC);
				StateProvider.state(StndInsideTypePgUSAM);
				StateProvider.state(StndDetailTypePgUSAM);
				StateProvider.state(StndDetailTypePgUSAM_emptyUSC);
				StateProvider.state(Page4rStationDtlUSC);
				StateProvider.state(Page4rStationDtlShortUrlUSC);
				StateProvider.state(Page4rPlaylistDtlUSC);
				StateProvider.state(Page4rPlaylistDtlShortUrlUSC);
				StateProvider.state(Page4rPlaylistDtlForTrackUSC);

				StateProvider.state(Page4rSchoolDtlUSC);
				StateProvider.state(Page4rSchoolDtlShortUrlUSC);
				StateProvider.state(Page4rProjectDtlUSC);
				StateProvider.state(Page4rProjectDtlShortUrlUSC);
				StateProvider.state(Page4rProjectDtlForEpisodeUSC);

				StateProvider.state(StndDetailTypePgFlexiTestUSAM);
				StateProvider.state(Page4rStationDtlFlexiTestUSC);

				//} END: APPLY STATE DEFINITIONS
			};

			/*
	   					StateProvider.state(OuterHolderUSAI);
	  						StateProvider.state(FlexiViewUSAI);
	  						StateProvider.state(FlexiViewAndPlayerUSAM);
	  							StateProvider.state(StndChromeUSAM);
	  								StateProvider.state(HomeTypePgUSAM);
	  									StateProvider.state(Page4rHomeUSC);
	  								StateProvider.state(StndInsideTypePgUSAM);
	  									StateProvider.state(StndDetailTypePgUSAM);
	  										StateProvider.state(Page4rStationDtlUSC);
	  														
	   
	   
	  */

			//}

			return vv.methods;
		};

		p.$get = ['mediatorService', function getFnc(mediatorService) {
			alert(mediatorService);this.mediatorService = mediatorService;
		}]; // Not needed for usage, but needed by Angular.
		//}

		return RouterPrvdrClass;
	})();

	/*
	'FlexiArea_UpN1Slot@FlexiHolderUSAI': {
		template: '<drct-hierarchy-nav-strip-vcc></drct-hierarchy-nav-strip-vcc>'
	},
	*/

	/*'FlexiArea_UpN1Slot'*/
	/*'FlexInsidePgSpacing'*/

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(286);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FlexiHolderVcc/styles/FlexiStndLayout/FlexiStndLayout.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/FlexiHolderVcc/styles/FlexiStndLayout/FlexiStndLayout.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: FlexiStndLayout.styl\n * *********************************************************************\n * *********************************************************************\n */\n/**********************************************************************/\n/**********************************************************************/\n/**********************************************************************/\n.FlexiStndLayout .FlexiHolderVcc {\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -o-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n/* Layout */\n  width: 100%;\n  min-height: calc(100vh);\n/* Test */\n  background-color__: #e0e6e6;\n}\n.FlexiStndLayout .FlexiArea {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  width: 100%;\n  min-height: calc(100vh - 55px);\n}\n.FlexiStndLayout .FlexiAreaPrmStrata {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n/* Layout */\n  width: 100%;\n}\n.FlexiStndLayout .Well {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 0;\n  -moz-box-ordinal-group: 0;\n  -o-box-ordinal-group: 0;\n  -ms-flex-order: 0;\n  -webkit-order: 0;\n  order: 0;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 0;\n  -moz-box-ordinal-group: 0;\n  -o-box-ordinal-group: 0;\n  -ms-flex-order: 0;\n  -webkit-order: 0;\n  order: 0;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -moz-box-orient: horizontal;\n  -o-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: stretch;\n  -moz-box-align: stretch;\n  -o-box-align: stretch;\n  -ms-flex-align: stretch;\n  -webkit-align-items: stretch;\n  align-items: stretch;\n/* Layout */\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 0;\n  -moz-box-ordinal-group: 0;\n  -o-box-ordinal-group: 0;\n  -ms-flex-order: 0;\n  -webkit-order: 0;\n  order: 0;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_MainSlot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 0;\n  -moz-box-ordinal-group: 0;\n  -o-box-ordinal-group: 0;\n  -ms-flex-order: 0;\n  -webkit-order: 0;\n  order: 0;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_UpN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -30;\n  -moz-box-ordinal-group: -30;\n  -o-box-ordinal-group: -30;\n  -ms-flex-order: -30;\n  -webkit-order: -30;\n  order: -30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_UpN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -20;\n  -moz-box-ordinal-group: -20;\n  -o-box-ordinal-group: -20;\n  -ms-flex-order: -20;\n  -webkit-order: -20;\n  order: -20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_UpN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -10;\n  -moz-box-ordinal-group: -10;\n  -o-box-ordinal-group: -10;\n  -ms-flex-order: -10;\n  -webkit-order: -10;\n  order: -10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_DnN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_DnN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_MainSpc_DnN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .WellPrmStrata_LfN2Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN2Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN2Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN2Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN1Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN1Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN2Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .Well_UpN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -30;\n  -moz-box-ordinal-group: -30;\n  -o-box-ordinal-group: -30;\n  -ms-flex-order: -30;\n  -webkit-order: -30;\n  order: -30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .Well_UpN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -20;\n  -moz-box-ordinal-group: -20;\n  -o-box-ordinal-group: -20;\n  -ms-flex-order: -20;\n  -webkit-order: -20;\n  order: -20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .Well_UpN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -10;\n  -moz-box-ordinal-group: -10;\n  -o-box-ordinal-group: -10;\n  -ms-flex-order: -10;\n  -webkit-order: -10;\n  order: -10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .Well_DnN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .Well_DnN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .Well_DnN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN1Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN2Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN3Slot {\n/* Layout */\n  display: none;\n}\n.FlexiStndLayout .FlexiArea_UpN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -30;\n  -moz-box-ordinal-group: -30;\n  -o-box-ordinal-group: -30;\n  -ms-flex-order: -30;\n  -webkit-order: -30;\n  order: -30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiArea_UpN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -20;\n  -moz-box-ordinal-group: -20;\n  -o-box-ordinal-group: -20;\n  -ms-flex-order: -20;\n  -webkit-order: -20;\n  order: -20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiArea_UpN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -10;\n  -moz-box-ordinal-group: -10;\n  -o-box-ordinal-group: -10;\n  -ms-flex-order: -10;\n  -webkit-order: -10;\n  order: -10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiArea_DnN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiArea_DnN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .FlexiArea_DnN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheTopFixedPosArea {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  width: 100%;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n}\n.FlexiStndLayout .TheTopFixedPosArea_UpN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -30;\n  -moz-box-ordinal-group: -30;\n  -o-box-ordinal-group: -30;\n  -ms-flex-order: -30;\n  -webkit-order: -30;\n  order: -30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheTopFixedPosArea_UpN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -20;\n  -moz-box-ordinal-group: -20;\n  -o-box-ordinal-group: -20;\n  -ms-flex-order: -20;\n  -webkit-order: -20;\n  order: -20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheTopFixedPosArea_UpN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: -10;\n  -moz-box-ordinal-group: -10;\n  -o-box-ordinal-group: -10;\n  -ms-flex-order: -10;\n  -webkit-order: -10;\n  order: -10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheFooterArea {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Flex-box spcf */\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n/* Layout */\n  width: 100%;\n}\n.FlexiStndLayout .TheFooterArea_DnN1Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 10;\n  -moz-box-ordinal-group: 10;\n  -o-box-ordinal-group: 10;\n  -ms-flex-order: 10;\n  -webkit-order: 10;\n  order: 10;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheFooterArea_DnN2Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 20;\n  -moz-box-ordinal-group: 20;\n  -o-box-ordinal-group: 20;\n  -ms-flex-order: 20;\n  -webkit-order: 20;\n  order: 20;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout .TheFooterArea_DnN3Slot {\n/* Flex-child spcf */\n  -webkit-box-ordinal-group: 30;\n  -moz-box-ordinal-group: 30;\n  -o-box-ordinal-group: 30;\n  -ms-flex-order: 30;\n  -webkit-order: 30;\n  order: 30;\n/* Layout */\n  display: block;\n  width: 100%;\n}\n.FlexiStndLayout.StndDetailTypePgUSAM .WellPrmStrata {\n  padding-top: 20px;\n}\n@media only screen and (min-width: 992px) {\n  .FlexiStndLayout .WellPrmStrata_MainSpc_UpN3Slot {\n/* Test */\n    background-color__: #ddd;\n  }\n  .FlexiStndLayout .WellPrmStrata_LfN1Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: -10;\n    -moz-box-ordinal-group: -10;\n    -o-box-ordinal-group: -10;\n    -ms-flex-order: -10;\n    -webkit-order: -10;\n    order: -10;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #dfd;\n  }\n  .FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_LfN1Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 30;\n    -moz-box-ordinal-group: 30;\n    -o-box-ordinal-group: 30;\n    -ms-flex-order: 30;\n    -webkit-order: 30;\n    order: 30;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN1Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #ddf;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN1Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 30;\n    -moz-box-ordinal-group: 30;\n    -o-box-ordinal-group: 30;\n    -ms-flex-order: 30;\n    -webkit-order: 30;\n    order: 30;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN2Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #bbf;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .WellPrmStrata_RtN2Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 30;\n    -moz-box-ordinal-group: 30;\n    -o-box-ordinal-group: 30;\n    -ms-flex-order: 30;\n    -webkit-order: 30;\n    order: 30;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .Well_UpN1Slot {\n/* Test */\n    background-color__: #aaa;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: -20;\n    -moz-box-ordinal-group: -20;\n    -o-box-ordinal-group: -20;\n    -ms-flex-order: -20;\n    -webkit-order: -20;\n    order: -20;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #cea;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN2Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: -10;\n    -moz-box-ordinal-group: -10;\n    -o-box-ordinal-group: -10;\n    -ms-flex-order: -10;\n    -webkit-order: -10;\n    order: -10;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #eec;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_LfN1Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 10;\n    -moz-box-ordinal-group: 10;\n    -o-box-ordinal-group: 10;\n    -ms-flex-order: 10;\n    -webkit-order: 10;\n    order: 10;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #ece;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN1Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Flex-box spcf */\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -o-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n/* Layout */\n/* Test */\n    background-color__: #cae;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN1Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN2Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiAreaPrmStrata_RtN2Spc_DnN3Slot {\n/* Flex-child spcf */\n    -webkit-box-ordinal-group: 20;\n    -moz-box-ordinal-group: 20;\n    -o-box-ordinal-group: 20;\n    -ms-flex-order: 20;\n    -webkit-order: 20;\n    order: 20;\n/* Layout */\n    display: block;\n    width: 100%;\n  }\n  .FlexiStndLayout .FlexiArea_UpN1Slot {\n/* Test */\n    background-color__: #888;\n  }\n}\n.StndChromeUSAM .FlexiArea {\n/* Layout */\n  padding-top: calc(64px - 4px);\n}\n.StndStandAloneTypePgUSAM .FlexiArea {\n/* Layout */\n  padding-top: calc(64px - 4px);\n}\n", ""]);

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: ToolboxServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	var _Promise = __webpack_require__(44)['default'];

	module.exports = (function () {

		function ClassConstructor(timeoutNg) {
			var that = this;
			that._setup();
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC /PRIVATE METHODS:
		//{	
		/* work in progress
	 p.sleep = async function ( timeDelay ) {
	 	var that = this;
	 	var vv = {}
	 		///alert('delay closing');
	 	vv.p = new PromiseThingy();
	 	    setTimeout(function() {
	 	        p.resolve();
	 	    }, 3000);
	 		    return vv.p.promise; 
	 }
	 */

		p.getHolderVcNamesPerUiStates = function (currentState, doStartFromBase) {
			var that = this;
			var vv = {};

			vv.propName = 'holderVcNames';
			vv.parentObjKeyName = 'parent';
			vv.doConcatLists = true;
			vv.doStartFromBase = doStartFromBase || true;

			vv.propVals = that._getLineagePropVals(vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists, vv.doStartFromBase);

			return vv.propVals;
		};

		p.getUsedSlotsPerUiStates = function (currentState, doStartFromBase) {
			var that = this;
			var vv = {};

			vv.propName = 'usedSlots';
			vv.parentObjKeyName = 'parent';
			vv.doConcatLists = true;
			vv.doStartFromBase = doStartFromBase || true;

			vv.propVals = that._getLineagePropVals(vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists, vv.doStartFromBase);

			return vv.propVals;
		};

		p.getCssNamespacePerUiStates = function (currentState, doStartFromBase) {
			var that = this;
			var vv = {};

			vv.propName = 'name';
			vv.propName2 = 'addedCssNames';
			vv.parentObjKeyName = 'parent';
			vv.doConcatLists = false;
			vv.doConcatLists2 = true;
			vv.doStartFromBase = doStartFromBase || true;
			vv.doReversePropVal2 = true;

			vv.propVals = that._getLineagePropVals(vv.propName, currentState, vv.parentObjKeyName, vv.doConcatLists, vv.doStartFromBase);

			vv.propVals2 = that._getLineagePropVals(vv.propName2, currentState, vv.parentObjKeyName, vv.doConcatLists2, vv.doStartFromBase, vv.doReversePropVal2);

			vv.namespaceArr = vv.propVals2.concat(vv.propVals);

			vv.namespace = vv.namespaceArr.toString().replace(/,/g, ' ');

			return vv.namespace;
		};

		p.cloneMap = function (map1) {
			var that = this;
			var map2 = that._cloneMap(map1);
			return map2;
		};

		p.bgetStndUrl4rStation = p._bgetStndUrl4rStation = function (stationId, stationTitle, stationSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {};
			vv.stationSyn = stationSyn || that.stationSyn || 'station';

			vv.partialUrl = vv.stationSyn + '/' + stationTitle + '/' + stationId;
			vv.fullUrl = 'http://' + document.domain + aaGlobalee.baseHref + vv.partialUrl;

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl;

			return vv.returnUrl;
		};

		p.bgetStndUrl4rPlaylist = p._bgetStndUrl4rPlaylist = function (stationId, stationTitle, stationSyn, playlistId, playlistTitle, playlistSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {};
			vv.stationSyn = stationSyn || that.stationSyn || 'station';
			vv.playlistSyn = playlistSyn || that.playlistSyn || 'playlist';

			vv.partialUrl = vv.stationSyn + '/' + stationTitle + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistTitle + '/' + playlistId;
			vv.fullUrl = 'http://' + document.domain + aaGlobalee.baseHref + vv.partialUrl;

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl;

			return vv.returnUrl;
		};

		p.bgetShortUrl4rStation = p._bgetShortUrl4rStation = function (stationId, stationSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {};
			vv.stationSyn = stationSyn || that.stationSyn || 'station';

			vv.partialUrl = vv.stationSyn + '/' + stationId;
			vv.fullUrl = 'http://' + document.domain + aaGlobalee.baseHref + vv.partialUrl;

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl;

			return vv.returnUrl;
		};

		p.bgetShortUrl4rPlaylist = p._bgetShortUrl4rPlaylist = function (stationId, stationSyn, playlistId, playlistSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {};
			vv.stationSyn = stationSyn || that.stationSyn || 'station';
			vv.playlistSyn = playlistSyn || that.playlistSyn || 'playlist';

			vv.partialUrl = vv.stationSyn + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistId;
			vv.fullUrl = 'http://' + document.domain + aaGlobalee.baseHref + vv.partialUrl;

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl;

			return vv.returnUrl;
		};

		p.bgetShortUrl4rTrack = p._bgetShortUrl4rPlTrack = function (stationId, stationSyn, playlistId, playlistSyn, trackId, trackSyn, doReturnFulllUrl) {
			var that = this;
			var vv = {};
			vv.stationSyn = stationSyn || that.stationSyn || 'station';
			vv.playlistSyn = playlistSyn || that.playlistSyn || 'playlist';
			vv.trackSyn = trackSyn || that.trackSyn || 'track';

			vv.partialUrl = vv.stationSyn + '/' + stationId + '/' + vv.playlistSyn + '/' + playlistId + '/' + vv.trackSyn + '/' + trackId;
			vv.fullUrl = 'http://' + document.domain + aaGlobalee.baseHref + vv.partialUrl;

			vv.returnUrl = doReturnFulllUrl ? vv.fullUrl : vv.partialUrl;

			return vv.returnUrl;
		};

		p.msToHhMmSs = p._msToHhMmSs = function (duration) {
			var milliseconds = parseInt(duration % 1000 / 100),
			    seconds = parseInt(duration / 1000 % 60),
			    minutes = parseInt(duration / (1000 * 60) % 60),
			    hours = parseInt(duration / (1000 * 60 * 60) % 24),
			    HhMmSs = undefined;

			hours = hours < 10 ? '0' + hours : hours;
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;

			HhMmSs = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

			return HhMmSs;
		};

		p.isSafari = p._isSafari = function () {
			var isSafari = false;
			if (navigator.userAgent.indexOf('Safari') > -1 && (navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('CriOS') == -1)) {
				///alert(" >>> Saying it's safari(?) - " + navigator.userAgent)
				var isSafari = true;
			}
			return isSafari;
		};

		p.isIOS = p._isIOS = function () {
			var isTested4rCase = /iPad|iPhone|iPod/.test(navigator.platform);
			return isTested4rCase;
		};

		p.isAndroid = p._isAndroid = function () {
			var isTested4rCase = /Android/i.test(navigator.userAgent);
			return isTested4rCase;
		};

		p.getIndexOfFirstMatchingObject = p._getIndexOfFirstMatchingObject = function (array, objPropName, objPropVal) {

			for (var i = 0; i < array.length; i += 1) {
				if (array[i][objPropName] === objPropVal) {
					return i;
				}
			}
			return -1;
		};

		p.bsetBirthYear = function () {
			var that = this;
			var vv = {};

			vv.y;

			vv.startYear = 1915;

			vv.r = [];

			// must be 13 years old
			vv.thisYear = new Date().getFullYear() - 12;

			vv.mid = Math.floor((vv.thisYear - vv.startYear) / 2) + vv.startYear;

			for (vv.y = vv.startYear; vv.y < vv.thisYear; vv.y++) {
				if (vv.y === vv.mid) {
					vv.r.push({ 'value': '', 'text': 'Year Of Birth' });
				}
				vv.r.push({ 'value': vv.y, 'text': vv.y });
			}

			return vv.r;
		};

		p.pause = p._pause = function callee$1$0(pauseInMillis) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.myPromise = new _Promise(function (resolve, reject) {
							var timeoutRef = setTimeout(function () {
								resolve('done');
							}, pauseInMillis);
						});

						return context$2$0.abrupt('return', vv.myPromise);

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		p._setup = function () {
			var that = this;
			that.stationSyn = 'school';
			that.playlistSyn = 'project';
			that.trackSyn = 'episode';
		};

		p._getLineagePropVals = function (propName, currentObj, ParentObjKeyName, doConcatLists, doStartFromBase, doReversePropVal) {
			var that = this;
			var vv = {};

			vv.propVals = [];
			vv.loopCnt = 0;

			while (currentObj && vv.loopCnt < 100) {
				vv.loopCnt = vv.loopCnt + 1;
				if (currentObj[propName]) {
					vv.propVal = currentObj[propName];
					if (doConcatLists) {
						if (doReversePropVal) {
							vv.propVal.reverse();
						}
						vv.propVals = vv.propVals.concat(vv.propVal);
					} else {
						vv.propVals.push(vv.propVal);
					}
				}
				currentObj = currentObj[ParentObjKeyName];
			}
			if (doStartFromBase) {
				vv.propVals = vv.propVals.reverse();
			}

			return vv.propVals;
		};

		p._cloneMap = function (map1) {
			var map2 = {};
			for (var prop in map1) {
				if (map1.hasOwnProperty(prop)) {
					map2[prop] = map1[prop];
				}
			}
			return map2;
		};

		p._getUiStateLineage = function (currentState, doStartFromBase, lineage) {
			var that = this;
			var lineage = lineage || [];
			var stateName = currentState.name || undefined;
			lineage.push(stateName);
			if (currentState.parent) {
				that._getUiStateLineage(currentState.parent, doStartFromBase, lineage);
			}
			if (doStartFromBase) {
				lineage = lineage.reverse();
			}
			return lineage;
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVcc_MediatorServiceExtnClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {
		var aa = {};

		//	Equated dependencies.
		//{
		aa.routines = __webpack_require__(289);
		//}

		//	Class properties.
		// {
		aa.myVcName = "AppVcc";
		aa.refNameSelf = "AppVcc_MediatorServiceExtnClass";
		aa.refNameParent = "MediatorServiceClass";
		aa.ParentClass = __webpack_require__(290);

		function AppVcc_MediatorServiceExtnClass(cacheFactoryNg, locationNg, stateNg, stateParamsNg, timeoutNg, membersService, sessionService, stationsService, toolbox) {
			var that = this;
			that.cacheFactoryNg = cacheFactoryNg;
			that.locationNg = locationNg;
			that.stateNg = stateNg;
			that.stateParamsNg = stateParamsNg;
			that.timeoutNg = timeoutNg;
			that.membersService = membersService;
			that.sessionService = sessionService;
			that.stationsService = stationsService;
			that.toolbox = toolbox;
			that._setup();
			var breakpoint = "a";
		}
		//}

		//	Scaffold class.
		// {
		aa.MyClass = aaGlobalee.ooUtils.scaffoldClass(aa.refNameSelf, AppVcc_MediatorServiceExtnClass, aa.ParentClass);
		//}

		var p = aa.MyClass.prototype;
		var pp = aa.ParentClass.prototype;

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = _setup;
		function _setup() {
			var that = this;

			that._config();
		}

		p._config = function () {
			var that = this;
			var vv = {};

			vv.cfg = pp._config();
			vv.cfg.refNameSelf = aa.refNameSelf;

			vv.cfg.return_playerPgMediator = function () {
				var vvv = {};
				try {
					vvv.playerPgMediator = document.getElementsByClassName("PlayerIframe")[0].contentWindow.LIVE365PLAYER.pgMediator;

					return vvv.playerPgMediator;
				} catch (errorr) {
					console.dog(">>> ERROR return_playerPgMediator can't return player app - errorr: ", errorr);
					return "failed";
				}
			};

			vv.cfg.return_playerPgMediator_receiveNotice = function () {
				var vvv = {};
				try {
					vvv.playerPgMediator_receiveNoticeMethod = document.getElementsByClassName("PlayerIframe")[0].contentWindow.LIVE365PLAYER.pgMediator.receiveNotice;

					return vvv.playerPgMediator_receiveNoticeMethod;
				} catch (errorr) {
					console.dog(">>> ERROR return_playerPgMediator_receiveNotice can't return player-app's receiveNotice method - errorr: ", errorr);
					return "failed";
				}
			};

			that.cfg = vv.cfg;

			return vv.cfg;
		};

		p._notifyPlayerPg = function callee$1$0(pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.prev = 2;

						//	Try to get player's mediator.
						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - First try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator();

						if (!(vv.mediator === "failed")) {
							context$2$0.next = 30;
							break;
						}

						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that.toolbox.pause(1000));

					case 8:
						vv.dontCare = context$2$0.sent;

						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Second try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator();

						if (!(vv.mediator === "failed")) {
							context$2$0.next = 30;
							break;
						}

						context$2$0.next = 14;
						return _regeneratorRuntime.awrap(that.toolbox.pause(1500));

					case 14:
						vv.dontCare = context$2$0.sent;

						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator();

						if (!(vv.mediator === "failed")) {
							context$2$0.next = 30;
							break;
						}

						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(that.toolbox.pause(1500));

					case 20:
						vv.dontCare = context$2$0.sent;

						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator();

						if (!(vv.mediator === "failed")) {
							context$2$0.next = 30;
							break;
						}

						context$2$0.next = 26;
						return _regeneratorRuntime.awrap(that.toolbox.pause(1500));

					case 26:
						vv.dontCare = context$2$0.sent;

						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - Third and last try to get player's mediator: ", pkg);
						vv.mediator = that.cfg.return_playerPgMediator();
						if (vv.mediator === "failed") {
							// Create an error - a hack way to throw an error.
							vv.couldNotGetPlayerMediator_VAR = vv.noObject.vv.couldNotGetPlayerMediator_VAR;
						}

					case 30:

						vv.mediator_receiveNotice = that.cfg.return_playerPgMediator_receiveNotice();
						console.dog(">>> !!! NOTIFY PLAYER !!! " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - MSSG TO PLAYER PAGE: ", pkg);
						///alert(">>>> about to notify player")
						vv.methodReturn = vv.mediator_receiveNotice.call(vv.mediator, pkg);
						context$2$0.next = 39;
						break;

					case 35:
						context$2$0.prev = 35;
						context$2$0.t0 = context$2$0["catch"](2);

						console.dog(">>> !!! ERROR " + aa.refNameSelf + " / " + that.cfg.refNameSelf + ": ", context$2$0.t0);
						vv.methodReturn = context$2$0.t0;

					case 39:
						return context$2$0.abrupt("return", vv.methodReturn);

					case 40:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[2, 35]]);
		};

		//	================================================================
		//	ROUTINES: (Rtn)  
		//	...These are basically "partial transactions", and/or
		//	...simple transactions around executing just one method.
		//{

		p = aaGlobalee.ooUtils.mergeObjects(p, aa.routines);
		//}

		//	================================================================
		//	E(X)TERNAL Notice Transactions: (Xnt) 
		//	...These are for notices that originate *outide* of mediator.
		//{

		p._run__Changed_PageState__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Changed_PageState__Xnt");

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						//{	Needed params:
						vv.pageStateName = pkg.notice.pageStateName;
						//}

						//	Set display on Hierarchy nav strip.
						that._setDisplayOfHierarchyNavStrip__Rtn();

						//	Notify what page changed to in order to delegate to
						//	... the transaction per that specific page type.
						pkg.notice.noticeName = "ChangedTo_" + pkg.notice.pageStateName;
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that.receiveNotice(senderScope, pkg));

					case 9:
						vv.handleNoticeReturn = context$2$0.sent;

						//	Manager Footer Spacing
						that._autoManagePlayerAndFooterDisplay__Rtn();

						if (that.locationNg.search().doResume) {
							// Set in EmailValidationRoutine_requested, and true only if coming from there.
							vv.doResume = true;
						}

						if (that.stateNg.current.name !== "Page4rEmailValidationUSC") {
							//{ Resume action if one is pending and user is logged in.
							//{ Determine if user is logged in.
							vv.sessionId = that._getSessionId__Rtn();
							vv.isUserLoggedIn = typeof vv.sessionId === "string" ? true : false;
							//}
							if (localStorage.resumeUponReturnPkgJSON && vv.isUserLoggedIn) {
								vv.resumeUponReturnPkgJSON = localStorage.resumeUponReturnPkgJSON;
								vv.resumeUponReturnPkg = JSON.parse(vv.resumeUponReturnPkgJSON);
								localStorage.removeItem("resumeUponReturnPkgJSON");
								that.receiveNotice("", vv.resumeUponReturnPkg);
							}
							//}
						}

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Changed_PageState__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 15:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__Entering_PageState__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Entering_PageState__Xnt");

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						//{	Needed params:
						vv.pageStateName = pkg.notice.pageStateName;
						//}

						//	Build layout in holders.
						that._buildLayoutInHolders_Rtn();

						//	Apply Css Namespacing to holders.
						that._applyCssNamespacingToHolders__Rtn();

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Entering_PageState__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__FacebookShareButton_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__FacebookShareButton_clicked__Xnt");

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						//{	Needed params:
						//}

						vv.isSafari = that.toolbox.isSafari();

						if (vv.isSafari) {
							context$2$0.next = 11;
							break;
						}

						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".Button4rFacebookShareVcc", "shareIt", []]));

					case 8:
						vv.voidd = context$2$0.sent;
						context$2$0.next = 27;
						break;

					case 11:
						vv.doRunShare = false;
						///alert(">>> _run__FacebookShareButton_clicked__Xnt - Safari case.")

						/*
	     vv.loginStatus = await that._executeNgAsync.apply(that, 
	     	[ '.FacebookAuthMachineVcc', 'getFacebookLoginStatus', [] ]
	     );
	     	console.dog(">>> _run__FacebookShareButton_clicked__Xnt - loginStatus: ", vv.loginStatus)
	     	///alert(">>> _run__FacebookShareButton_clicked__Xnt - vv.loginStatus.isLoggedIn: " + vv.loginStatus.isLoggedIn)
	     vv.isLoggedIn = vv.loginStatus.isLoggedIn  //  Generalize scope for easier tinkering.
	     */

						vv.isLoggedIn = null;

						if (!(vv.isLoggedIn === true)) {
							context$2$0.next = 17;
							break;
						}

						vv.doRunShare = true;
						context$2$0.next = 22;
						break;

					case 17:
						context$2$0.next = 19;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".FacebookAuthMachineVcc", "loginToFacebook", []]));

					case 19:
						vv.result = context$2$0.sent;

						console.dog(">>> _run__FacebookShareButton_clicked__Xnt - vv.result.status (and vv.result): ", vv.result.status, vv.result);
						///alert(">>> _run__FacebookShareButton_clicked__Xnt - vv.result.status: " + vv.result.status)

						if (vv.result.status === "succeeded") {
							vv.doRunShare = true;
						}

					case 22:

						console.dog(">>> _run__FacebookShareButton_clicked__Xnt - vv.doRunShare  ", vv.doRunShare);

						if (!(vv.doRunShare === true)) {
							context$2$0.next = 27;
							break;
						}

						context$2$0.next = 26;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".Button4rFacebookShareVcc", "shareIt", []]));

					case 26:
						vv.voidd = context$2$0.sent;

					case 27:

						// Expediency - Manually clear the backdrop.
						$(".md-menu-backdrop").click();

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__FacebookShareButton_clicked__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 30:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__FacebookAuthButton_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__FacebookAuthButton_clicked__Xnt: ", pkg);

						if (!(pkg.notice.noticeName === "FacebookAuthButton_clicked")) {
							context$2$0.next = 12;
							break;
						}

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuthButton");

						vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId);
						pkg.callerHandoffSpecId = pkg.notice.handoffSpecId;

						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".FacebookAuthMachineVcc", "handleFacebookButtonClick", [vv.handoffSpecId]]));

					case 9:
						vv.voidd = context$2$0.sent;
						context$2$0.next = 88;
						break;

					case 12:
						if (!(pkg.notice.noticeName === "FacebookBasedAuth_succeeded")) {
							context$2$0.next = 30;
							break;
						}

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuth_succeeded");
						context$2$0.next = 16;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]));

					case 16:
						vv.voidd = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;
						context$2$0.next = 23;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "renderOnLoggedInChange", []]));

					case 23:
						vv.exeReturn = context$2$0.sent;

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB1 - near done - pkg   ", pkg);
						vv.callerPkg = that._getHandoffPkg(pkg.handedToMePkg.pkg.callerHandoffSpecId).pkg;
						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB2 - vv.callerPkg   ", vv.callerPkg);

						that.receiveNotice(undefined, vv.callerPkg);

						context$2$0.next = 88;
						break;

					case 30:
						if (!(pkg.notice.noticeName === "FacebookBasedAuth_failed")) {
							context$2$0.next = 43;
							break;
						}

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is FacebookAuth_failed");
						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);

						vv.confirmQuestion = "Do you agree to the Terms of Service?";
						vv.startEndTarget = ".navChoiceLogout";
						vv.mainContent = "<a href=\"TermsOfService.pdf\" target=\"_blank\">(View Terms of Service)</a>";

						vv.handoffSpecId = vv.handoffSpecId;
						vv.doHandoffFirst = true;

						context$2$0.next = 40;
						return _regeneratorRuntime.awrap(that._executeNg.apply(that, [".MdDialogMngrVcc", "openStndConfirmDialog", [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget, vv.mainContent]]));

					case 40:
						vv.voidd = context$2$0.sent;
						context$2$0.next = 88;
						break;

					case 43:
						if (!(pkg.notice.noticeName === "ProceedButtonOfStndConfirmInDialog_clicked")) {
							context$2$0.next = 67;
							break;
						}

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - case is ProceedButtonOfStndConfirmInDialog_clicked. ", pkg);
						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);

						context$2$0.next = 48;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".FacebookAuthMachineVcc", "tryRegisterAndAuth", [vv.handoffSpecId]]));

					case 48:
						vv.resultObj = context$2$0.sent;

						if (!(vv.resultObj.status === "succeeded")) {
							context$2$0.next = 65;
							break;
						}

						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

						context$2$0.next = 53;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 53:
						vv.result = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;
						context$2$0.next = 60;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "renderOnLoggedInChange", []]));

					case 60:
						vv.exeReturn = context$2$0.sent;

						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB3 - near done - pkg   ", pkg);
						vv.callerPkg = that._getHandoffPkg(pkg.handedToMePkg.pkg.callerHandoffSpecId).pkg;
						console.dog(">>> _run__FacebookAuthButton_clicked__Xnt - mkFB4 - vv.callerPkg   ", vv.callerPkg);

						that.receiveNotice(undefined, vv.callerPkg);

					case 65:
						context$2$0.next = 88;
						break;

					case 67:
						if (!(pkg.notice.noticeName === "CancelButtonOfStndConfirmInDialog_clicked")) {
							context$2$0.next = 88;
							break;
						}

						vv.voidd = that.sessionService.logOutOfRemoteSession();
						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);
						context$2$0.next = 72;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 72:
						vv.result = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-1");

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-2");

						that._removePlayer__Rtn();

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-3");

						if (!that.stateNg.current.logoutGotoState) {
							context$2$0.next = 84;
							break;
						}

						that.stateNg.go(that.stateNg.current.logoutGotoState);
						context$2$0.next = 88;
						break;

					case 84:
						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;
						context$2$0.next = 87;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "renderOnLoggedInChange", []]));

					case 87:
						vv.exeReturn = context$2$0.sent;

					case 88:

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__FacebookAuthButton_clicked__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 90:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//{ RE: Button/link clicked for goal to start player, but may need to present login form first.
		p._run__PlayButtonVcc_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-1");
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__PlayButtonVcc_clicked__Xnt  - that: ", that);

						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);

						if (!that.toolbox.isIOS()) {
							context$2$0.next = 10;
							break;
						}

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openIOSPlayDialog", [vv.handoffSpecId]]);

						vv.promise1 = "";

						return context$2$0.abrupt("return", "done");

					case 10:
						if (!that.toolbox.isAndroid()) {
							context$2$0.next = 14;
							break;
						}

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openAndroidPlayDialog", [vv.handoffSpecId]]);

						vv.promise1 = "";

						return context$2$0.abrupt("return", "done");

					case 14:

						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-2");
						//{	Needed params:
						vv.stationId = pkg.notice.stationId || "";
						vv.playlistId = pkg.notice.playlistId || "";
						vv.trackId = pkg.notice.trackId || "";
						vv.trackUid = pkg.notice.trackUid || "";
						vv.doPlayFlag = pkg.notice.doPlayFlag || 1; //  Values are 1 & 0.
						vv.transId = pkg.transId || that._genUniqueToken();
						//}

						//{	========================================================
						/*
	     END GOAL -
	     	Inform player page of desire to have select station played.
	     
	     PATH WAYS -
	     
	     	IF user logged in {
	     		1. 	Transaction process to inform player
	     	}
	     	IF user NOT logged in {
	     		1. 	Bring up UI for user to log-in OR sign-up
	     		IF user selects log-in {
	     			1. 	User enters log-in info and clicks submit.
	     			2.	Log-in transaction proceeds.
	     			3.  At end of log-in transaction success, the log-in transaction.
	     				handsoff (back) to this transaction in logged in state.
	     		}
	     		IF user selects create account {
	     			1. User enters create account info and clicks submit.
	     			2. Create account transaction proceeds.
	     			3. At end transaction success, view present new account receipt,
	     				and a 'continue to ...' link, which in this scenario is setup 
	     				with hand-off info so user comes back to this transaction.
	     			4. The users click on 'continue to ...' link.
	     			5. App takes user back to this transaction.
	     			
	     	}
	     }
	     */
						//}
						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-3");
						//{	Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === "string" ? true : false;
						//}
						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-4");
						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-4 - vv.isUserLoggedIn:  ", vv.isUserLoggedIn);

						if (!vv.isUserLoggedIn) {
							context$2$0.next = 46;
							break;
						}

						///alert("BOOOO PLAY LOGGED IN");
						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-4b - b4 ready player");
						//{	Set station on player per station for this page.
						vv.promise1 = that._readyPanelForPlay__RtnAsyc(vv.stationId);
						//}
						///alert("_run__PlayButtonVcc_clicked__Xnt - mk-5a");
						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-5a - after call (b4 await) ready player");
						context$2$0.next = 29;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 29:
						vv.exeReturn = context$2$0.sent;

						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-5b - after call (b4 await) ready player");
						context$2$0.prev = 31;

						if (vv.stationId && vv.playlistId && vv.trackUid) {
							vv.noticeName = "TrackPlay_requested";
						} else if (vv.stationId && vv.playlistId) {
							vv.noticeName = "PlaylistPlay_requested";
						} else if (vv.stationId) {
							vv.noticeName = "StationPlay_requested";
						}

						vv.newPkg = {
							notice: {
								noticeName: vv.noticeName,
								stationId: vv.stationId,
								playlistId: vv.playlistId,
								trackId: vv.trackId,
								trackUid: vv.trackUid,
								autoplay: vv.doPlayFlag,
								transId: vv.transId,
								sessionId: vv.sessionId
							}
						};

						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - mk-6 - newPkg: ", vv.newPkg);
						context$2$0.next = 37;
						return _regeneratorRuntime.awrap(that._notifyPlayerPg(vv.newPkg));

					case 37:
						vv.dontCare = context$2$0.sent;

						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - SUCCESS - result: ", vv.exeReturn);
						///	return vv.exeReturn 	//	No return.  The end of an async XNT is the end of the asyn path.
						context$2$0.next = 44;
						break;

					case 41:
						context$2$0.prev = 41;
						context$2$0.t0 = context$2$0["catch"](31);

						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - FAILED - e:", context$2$0.t0);
						///return e;   //	No return.  The end of an async XNT is the end of the asyn path.

					case 44:
						context$2$0.next = 57;
						break;

					case 46:
						if (vv.isUserLoggedIn) {
							context$2$0.next = 57;
							break;
						}

						///alert("booooo");
						///alert("BOOOO PLAY NOT LOGGED IN");
						//{	Set station on player per station for this page.
						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openLoginDialog", [vv.handoffSpecId]]);
						context$2$0.prev = 48;
						context$2$0.next = 51;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 51:
						vv.exeReturn = context$2$0.sent;
						context$2$0.next = 57;
						break;

					case 54:
						context$2$0.prev = 54;
						context$2$0.t1 = context$2$0["catch"](48);

						console.dog(">>> _run__PlayButtonVcc_clicked__Xnt - FAILED - e:", context$2$0.t1);
						///return e;   //	No return.  The end of an async XNT is the end of the asyn path.

					case 57:
						//}

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__PlayButtonVcc_clicked__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 59:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[31, 41], [48, 54]]);
		};
		p._run__TrackPlay_requested__Xnt = p._run__PlayButtonVcc_clicked__Xnt;
		p._run__PlayTriggerZone_clicked__Xnt = p._run__PlayButtonVcc_clicked__Xnt;

		//}

		//{ RE: Player changed state.
		p._run__Player_changeState__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Player_changeState_Xnt  - pkg: ", pkg);

						vv.playerState = pkg.notice.state;

						if (vv.playerState === "play") {
							console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Player_changeState_Xnt  - state is 'play': ");
						}

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//{ RE: Current track's play started.
		p._run__CurrentTrack_playStarted__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__CurrentTrack_playStarted__Xnt  - pkg: ", pkg);

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".TracksPanelVcc", "decorateLoadedTrackListing", [pkg.notice.uID]]));

					case 5:
						vv.result = context$2$0.sent;
						return context$2$0.abrupt("return", "done");

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		//{ RE: Share view request from player (basically bring up the options menu)
		p._run__ShareView_requestedFromPlayer__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ShareView_requestedFromPlayer__Xnt  - pkg: ", pkg);

						//{	Params:
						vv.purposing = {
							role: "PlayerOptionsMenu"

						};
						/*
	     vv.purposingForShare = {
	     	type: 'Track',
	     	stationId: pkg.notice.stationId || '829',
	     	playlistId: pkg.notice.playlistId || '878',
	     	trackId: pkg.notice.trackId || '2180'
	     	trackUid: pkg.notice.uID || 'erdf-2180'
	     }
	     */
						vv.purposingForShare = {
							itemType: "Track",
							stationId: pkg.notice.stationID,
							playlistId: pkg.notice.playlistID,
							trackId: pkg.notice.trackID || "", /* Need trackID to be in pkg sent from player. */
							trackUid: pkg.notice.uID
						};
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".FloatingOptionsMenuVcc", "showMenu", [vv.purposing, vv.purposingForShare]]));

					case 7:
						vv.result = context$2$0.sent;
						return context$2$0.abrupt("return", vv.result);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}	

		p._run__TracksView_requestedFromPlayer__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__TracksView_requestedFromPlayer__Xnt - pkg", pkg);

						/* Example notice:
	     	noticeName: "TracksView_requestedFromPlayer"
	     	playlistID: 1352
	     	state: true
	     	stationID: "1070"
	     */

						// { Go to playlist page (state), if notice's stationId and playlistId are
						//   ...different than the respective current page's params, or if either don't exist.
						vv.currentPageStationId = that.stateParamsNg.stationId;
						vv.currentPagePlaylistId = that.stateParamsNg.playlistId;

						vv.tracksviewStationId = pkg.notice.stationID;
						vv.tracksviewPlaylistId = pkg.notice.playlistID;

						if (vv.tracksviewStationId === vv.currentPageStationId && vv.tracksviewPlaylistId === vv.currentPagePlaylistId) {
							context$2$0.next = 17;
							break;
						}

						vv.stationInfoPromise = that.stationsService.getStation(vv.tracksviewStationId);
						vv.playlistInfoPromise = that.stationsService.getPlaylist(vv.tracksviewStationId, vv.tracksviewPlaylistId);

						context$2$0.next = 12;
						return _regeneratorRuntime.awrap(vv.stationInfoPromise);

					case 12:
						vv.stationInfo = context$2$0.sent;
						context$2$0.next = 15;
						return _regeneratorRuntime.awrap(vv.playlistInfoPromise);

					case 15:
						vv.playlistInfo = context$2$0.sent;

						that.stateNg.go("Page4rProjectDtlUSC", { stationId: vv.tracksviewStationId, stationName: vv.stationInfo.title, playlistId: vv.tracksviewPlaylistId, playlistName: vv.playlistInfo.name });

					case 17:
						return context$2$0.abrupt("return", "done");

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//{ RE: Button/link clicked on to present LOGIN form.
		p._run__LoginButton_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openLoginDialog", [vv.handoffSpecId]]);

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt;

		//}

		//{ RE: Login form's submit button clicked on (from within modal)
		p._run__LoginSubmitButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LoginSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						context$2$0.prev = 4;

						vv.promise1 = that._executeNgAsync.apply(that, [".LoginCorePanelVcc", "handleEmailLoginFormSubmitAsync", [vv.handoffSpecId]]);

						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 8:
						vv.result = context$2$0.sent;

						if (!(vv.result.status === "succeeded")) {
							context$2$0.next = 26;
							break;
						}

						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 13:
						vv.result = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;
						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "renderOnLoggedInChange", []]));

					case 20:
						vv.exeReturn = context$2$0.sent;

						vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, "success");
						console.dog(">>> Login succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
						if (vv.handoffPkg) {
							vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
						}
						context$2$0.next = 27;
						break;

					case 26:
						vv.promiseDontCare = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "error"]]);

					case 27:
						context$2$0.next = 31;
						break;

					case 29:
						context$2$0.prev = 29;
						context$2$0.t0 = context$2$0["catch"](4);

					case 31:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 29]]);
		};
		//}

		//{ RE: Login form's cancel button clicked on (from within modal)
		p._run__LoginCancelButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 5:
						vv.result = context$2$0.sent;

						//{ add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						if (that.stateNg.current.isAuthRequired === true && that.stateNg.current.logoutGotoState) {
							that.stateNg.go(that.stateNg.current.logoutGotoState);
						} else {}

						//}			

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//{ RE: Signup form's cancel button clicked on (from within modal)
		p._run__SignupCancelButtonInDialog_clicked__Xnt = p._run__LoginCancelButtonInDialog_clicked__Xnt;
		//}

		//{ RE: Email Share form's cancel button clicked on (from within modal)
		p._run__StndDialogCancelButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//{ RE: Button/link clicked on to present SIGNUP form.
		p._run__SignupRequestButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupRequestButtonInDialog_clicked__Xnt  - that: ", that);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openSignupDialog", [vv.handoffSpecId]]);

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__SignupButton_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupButton_clicked__Xnt  - that: ", that);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openSignupDialog", [vv.handoffSpecId]]);

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//{ RE: Button/link clicked on to present FORGOTPASSWORD form.
		p._run__LoginForgotPasswordButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LoginForgotPasswordButtonInDialog_clicked__Xnt  - that: ", that);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openForgotPasswordDialog", [vv.handoffSpecId]]);

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__ForgotPasswordSubmitButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_ForgotPasswordSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						context$2$0.prev = 4;
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".ForgotPasswordPanelVcc", "handleForgotPasswordFormSubmitAsync", [vv.handoffSpecId]]));

					case 7:
						vv.result = context$2$0.sent;

						// {Check if result has valid sessionId, if so, then good.}
						if (vv.result.status === "succeeded") {

							/* may not needed
	      vv.promise2 = that._executeNgAsync.apply(that, 
	      	[ '.MdDialogMngrVcc', 'hideDialog', [] ]);
	      
	      	vv.result = await vv.promise2;
	      
	      vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
	      
	      // add step to uncheck checkbox programtically to close menu
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
	      );
	      
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'refresh', [ ] ]
	      );
	      
	      vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
	      vv.exeReturn = await that._executeNgAsync.apply(that, 
	      	[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
	      );
	      */
							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "success"]]);

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

							vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, "success");
							console.dog(">>> ForgotPassword succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
							if (vv.handoffPkg) {
								vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
							}
						} else {
							//crearte method to md_dialog to display to messag area
							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "error"]]);
						}
						context$2$0.next = 13;
						break;

					case 11:
						context$2$0.prev = 11;
						context$2$0.t0 = context$2$0["catch"](4);

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 11]]);
		};
		//}

		//{ RE: Signup form's submit button clicked on (from within modal)
		p._run__SignupSubmitButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__SignupSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						context$2$0.prev = 4;

						vv.promise1 = that._executeNgAsync.apply(that, [".SignupCorePanelVcc", "handleEmailSignupFormSubmitAsync", []]);

						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 8:
						vv.result = context$2$0.sent;

						if (!(vv.result.status === "succeeded")) {
							context$2$0.next = 24;
							break;
						}

						context$2$0.next = 12;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]));

					case 12:
						vv.result = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						vv.resumeUponReturnUrl = that.locationNg.url();
						if (vv.handoffSpecId) {
							vv.handOffNotice = that._getHandoffPkg(vv.handoffSpecId).notice;
							vv.resumeUponReturnPkg = { notice: vv.handOffNotice };
							vv.resumeUponReturnPkgJSON = JSON.stringify(vv.resumeUponReturnPkg);
						} else {
							vv.resumeUponReturnPkgJSON = "";
						}
						localStorage.resumeUponReturnUrl = vv.resumeUponReturnUrl;
						localStorage.resumeUponReturnPkgJSON = vv.resumeUponReturnPkgJSON;

						vv.noticeTitle = "Next...";
						vv.noticeCopy = "Please check your email and click the link to activate your account.";
						vv.startEndTarget = ".navChoiceSignup";

						vv.dontCarePromise = that._executeNg.apply(that, [".MdDialogMngrVcc", "openDoNothingNoticeDialog", [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget]]);

						/*
	     	// add step to uncheck checkbox programtically to close menu
	     vv.exeReturn = that._executeNg.apply(that, 
	     	[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
	     );
	     
	     vv.exeReturn = that._executeNg.apply(that, 
	     	[ '.Header4StndUseVcc', 'refresh', [ ] ]
	     );
	     
	     vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
	     vv.exeReturn = await that._executeNgAsync.apply(that, 
	     	[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
	     );
	     
	     vv.handoffPkg = that._getHandoffPkg(vv.handoffSpecId , 'success');
	     console.dog(">>> Signup succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
	     
	     if (vv.handoffPkg) {
	     	///alert("boooo2");
	     	vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
	     }
	     */
						context$2$0.next = 25;
						break;

					case 24:
						vv.promiseDontCare = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "error"]]);

					case 25:
						context$2$0.next = 29;
						break;

					case 27:
						context$2$0.prev = 27;
						context$2$0.t0 = context$2$0["catch"](4);

					case 29:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 27]]);
		};
		//}

		//{ RE: Shared Email Button clicked from Shared Menu.
		p._run__EmailShareButton_clicked__Xnt = function (senderScope, pkg) {
			var that = this;
			var vv = {};
			//vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
			vv.purposing = pkg.notice.purposing;
			///alert(typeof vv.purposing);

			vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openEmailShareDialog", [vv.purposing]]);
		};
		///p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt

		//}

		//{ RE: Email Share form's submit button clicked on (from within modal)
		p._run__EmailShareSubmitButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_EmailShareSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						context$2$0.prev = 4;
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".EmailSharePanelVcc", "handleEmailShareFormSubmitAsync", [vv.handoffSpecId]]));

					case 7:
						vv.result = context$2$0.sent;

						// {Check if result has valid sessionId, if so, then good.}
						if (vv.result.status === "succeeded") {

							/* may not needed
	      vv.result = await vv.promise2;
	      
	      vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
	      
	      // add step to uncheck checkbox programtically to close menu
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
	      );
	      
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'refresh', [ ] ]
	      );
	      
	      vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
	      vv.exeReturn = await that._executeNgAsync.apply(that, 
	      	[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
	      );
	      */

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "success"]]);

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

							vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, "success");
							console.dog(">>> EmailShare succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
							if (vv.handoffPkg) {
								vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
							}
						} else {
							//crearte method to md_dialog to display to messag area
							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "error"]]);
						}
						context$2$0.next = 13;
						break;

					case 11:
						context$2$0.prev = 11;
						context$2$0.t0 = context$2$0["catch"](4);

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 11]]);
		};
		//}

		//{ RE: Report Email Button clicked from Shared Menu.
		p._run__EmailReportButton_clicked__Xnt = function (senderScope, pkg) {
			var that = this;
			var vv = {};
			//vv.handoffSpecId = pkg.notice.handoffSpecId  || undefined
			vv.purposing = pkg.notice.purposing;

			vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openEmailReportDialog", [vv.purposing]]);
		};
		///p._run__LoginRequestButtonInDialog_clicked__Xnt = p._run__LoginButton_clicked__Xnt

		//}

		//{ RE: Email Report form's submit button clicked on (from within modal)
		p._run__EmailReportSubmitButtonInDialog_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run_EmailReportSubmitButtonInDialog_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.handoffSpecId = pkg.notice.handoffSpecId || undefined;

						context$2$0.prev = 4;
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".EmailReportPanelVcc", "handleEmailReportFormSubmitAsync", [vv.handoffSpecId]]));

					case 7:
						vv.result = context$2$0.sent;

						// {Check if result has valid sessionId, if so, then good.}
						if (vv.result.status === "succeeded") {

							/// vv.voidd = await that.toolbox.sleep(2000)

							/* may not needed
	      vv.result = await vv.promise2;
	      
	      vv.voidd = that.cacheFactoryNg.get('$http').removeAll()
	      
	      
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'closeTheMenuIfOpen', [ ] ]
	      );
	      
	      vv.exeReturn = that._executeNg.apply(that, 
	      	[ '.Header4StndUseVcc', 'refresh', [ ] ]
	      );
	      
	      vv.pageVccSelector = "."+that.stateNg.current.pageVcc;
	      vv.exeReturn = await that._executeNgAsync.apply(that, 
	      	[ vv.pageVccSelector, 'renderOnLoggedInChange', [ ] ]
	      );
	      */

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "success"]]);

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

							vv.handoffPkg = that._getHandoffPkg(pkg.notice.handoffSpecId, "success");
							console.dog(">>> EmailReport succeeded (v1) - vv.handoffPkg: ", vv.handoffPkg);
							if (vv.handoffPkg) {
								vv.handleNoticeReturn = that.receiveNotice(senderScope, vv.handoffPkg);
							}
						} else if (vv.result.status === "failed") {
							//crearte method to md_dialog to display to messag area

							vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "displayNotice", [vv.result.messageForDisplay, "error"]]);
						}
						context$2$0.next = 13;
						break;

					case 11:
						context$2$0.prev = 11;
						context$2$0.t0 = context$2$0["catch"](4);

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[4, 11]]);
		};
		//}

		//{ RE: Password Reset from link in Email for forgot password. Handle button on password reset page clicked event
		p._run__PasswordResetButton_clicked__Xnt = function (senderScope, pkg) {
			console.dog("-------------------call mediator when submit password reset----------------------------");
			var that = this;
			var vv = {};

			vv.notice = pkg.notice;

			// find angular element/directive, call function in the controller
			vv.promise1 = that._executeNg.apply(that, [".Page4rPasswordResetVcc", "submitPasswordResetForm", [vv.notice]]);
		};
		//}

		//{ RE: Password Reset from link in Email for forgot password. Handle button on password reset page clicked event
		p._run__PasswordResetReturnAction__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog("-------------------call mediator deal with server API returns in password reset----------------------------");
						that = this;
						vv = {};

						vv.notice = pkg.notice;

						// find angular element/directive, call function in the controller
						vv.promise1 = that._executeNg.apply(that, [".Page4rPasswordResetVcc", "passwordResetReturnAction", [vv.notice]]);

						return context$2$0.abrupt("return", "done");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//{ RE: LOGOUT button clicked.
		p._run__LogoutButton_clicked__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__LogoutButton_clicked__Xnt  - that, pkg: ", that, pkg);

						vv.isHandoff = pkg.notice.handoffSpecId && pkg.notice.doHandoffFirst ? true : false;

						if (vv.isHandoff) {
							context$2$0.next = 12;
							break;
						}

						vv.confirmQuestion = "confirm logout?";
						vv.startEndTarget = ".navChoiceLogout";

						vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId);
						vv.doHandoffFirst = true;

						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openStndConfirmDialog", [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget]]);
						context$2$0.next = 43;
						break;

					case 12:
						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - pkg ", pkg);

						if (!(pkg.notice.action === "proceed")) {
							context$2$0.next = 36;
							break;
						}

						vv.voidd = that.sessionService.logOutOfRemoteSession();
						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);
						context$2$0.next = 18;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 18:
						vv.result = context$2$0.sent;

						vv.voidd = that.cacheFactoryNg.get("$http").removeAll();

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-1");

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-2");

						that._removePlayer__Rtn();

						console.dog(">>> _run__LogoutButton_clicked__Xnt (else) - TP-3");

						if (!that.stateNg.current.logoutGotoState) {
							context$2$0.next = 30;
							break;
						}

						that.stateNg.go(that.stateNg.current.logoutGotoState);
						context$2$0.next = 34;
						break;

					case 30:
						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;
						context$2$0.next = 33;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "renderOnLoggedInChange", []]));

					case 33:
						vv.exeReturn = context$2$0.sent;

					case 34:
						context$2$0.next = 43;
						break;

					case 36:
						if (!(pkg.notice.action === "cancel")) {
							context$2$0.next = 43;
							break;
						}

						vv.promise2 = that._executeNgAsync.apply(that, [".MdDialogMngrVcc", "hideDialog", []]);

						context$2$0.next = 40;
						return _regeneratorRuntime.awrap(vv.promise2);

					case 40:
						vv.result = context$2$0.sent;

						// add step to uncheck checkbox programtically to close menu
						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "closeTheMenuIfOpen", []]);

						vv.exeReturn = that._executeNg.apply(that, [".Header4StndUseVcc", "refresh", []]);

					case 43:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}

		//{ RE: Page cannot setup

		//{ RE: Page cannot setup because user not authed.	
		p._run__Page_cannotSetupBecauseUserNotAuthed__Xnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__Page_cannotSetupBecauseUserNotAuthed__Xnt  - that: ", that);

						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);

						//{	Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === "string" ? true : false;

						if (!vv.isUserLoggedIn) {
							context$2$0.next = 14;
							break;
						}

						vv.pageVccSelector = "." + that.stateNg.current.pageVcc;

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  USER IS LOGGED IN: vv, that: ", vv, that);

						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [vv.pageVccSelector, "_setup", []]));

					case 11:
						vv.exeReturn = context$2$0.sent;
						context$2$0.next = 26;
						break;

					case 14:
						if (vv.isUserLoggedIn) {
							context$2$0.next = 26;
							break;
						}

						///alert("booooo");
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  USER IS *NOT* LOGGED IN: vv, that: ", vv, that);
						//{	Set station on player per station for this page.
						vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openLoginDialog", [vv.handoffSpecId]]);
						context$2$0.prev = 17;
						context$2$0.next = 20;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 20:
						vv.exeReturn = context$2$0.sent;
						context$2$0.next = 26;
						break;

					case 23:
						context$2$0.prev = 23;
						context$2$0.t0 = context$2$0["catch"](17);

						console.dog(">>> _run__Page_cannotSetupBecauseUserNotAuthed__Xnt - FAILED - e:", context$2$0.t0);
						///return e;   //	No return.  The end of an async XNT is the end of the asyn path.

					case 26:
						//}

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__Page_cannotSetupBecauseUserNotAuthed__Xnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 28:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[17, 23]]);
		};

		//}	

		//}

		//}

		//	================================================================
		//	I(N)TERNAL Notice Transactions: (Nnt) 
		//	...These are for notices that originate *inside* of mediator.
		//{

		p._run__EmailValidation_requested__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidation_requested__Nnt");

						vv.validationCode = that.locationNg.search().vcode;
						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that.membersService.verifyMemberWithCode(vv.validationCode));

					case 6:
						vv.result = context$2$0.sent;

						if (true) {
							vv.resumeUponReturnUrl = localStorage.resumeUponReturnUrl;
							///localStorage.removeItem('resumeUponReturnUrl')
							window.location.href = vv.resumeUponReturnUrl.substring(1)
							///that.locationNg.url(vv.resumeUponReturnUrl).replace();
							;
						}

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidation_requested__Nnt");
						return context$2$0.abrupt("return", vv.rtnReturn);

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__EmailValidationRoutine_requested__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidationRoutine_requested__Nnt");

						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);
						vv.proceedTo = "";

						//{ Clear resume info helper function.
						vv.clearResumeInfo = function () {
							localStorage.removeItem("resumeUponReturnUrl");
							localStorage.removeItem("resumeUponReturnPkgJSON");
						};
						//}

						//{ Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === "string" ? true : false;
						//}
						//{ Indentify steps to proceed to if user is logged in, or is not.
						if (vv.isUserLoggedIn === true) {
							vv.proceedTo = "mainStep02_redirectToResumePg";
						} else {
							vv.proceedTo = "mainStep01_validateConfirmation_thenAskForLogin";
						}

						if (!(vv.proceedTo === "mainStep01_validateConfirmation_thenAskForLogin")) {
							context$2$0.next = 53;
							break;
						}

						//{ Clear resume info in 5 minutes no matter what.  We're giving the user 5 minutes to complete validation/login/resume transaction.
						vv.clearResumeInfoTimeout = that.timeoutNg(vv.clearResumeInfo, 1000 * 60 * 5);
						//}

						//{ Parse out, and then submit validation code if hasn't already succuessfully been done.
						vv.validationCode = that.locationNg.search().vcode;

						if (!(localStorage["vcodeBeenValidated_" + vv.validationCode] === "true")) {
							context$2$0.next = 16;
							break;
						}

						vv.verificationResult = {
							status: "succeededPreviously"
						};
						context$2$0.next = 19;
						break;

					case 16:
						context$2$0.next = 18;
						return _regeneratorRuntime.awrap(that.membersService.verifyMemberWithCode(vv.validationCode));

					case 18:
						vv.verificationResult = context$2$0.sent;

					case 19:
						if (!(vv.verificationResult.status === "failed")) {
							context$2$0.next = 37;
							break;
						}

						// We likely have a user who is repeating validations after success, or waited too long.

						//{ Clear resume info immediately.
						vv.clearResumeInfo();
						//}

						//{	"Don't-care/OK" notify user that validation failed, and instruct what to do.
						vv.startEndTarget = "";
						vv.noticeTitle = "error";
						vv.noticeCopy = "Email address confirmation failed.  <br><br>Please ignore this message and click on the logo above to go to the home page if your account has already been activated.  <br><br>Else, please try again.";

						vv.dontCarePromise = that._executeNg.apply(that, [".MdDialogMngrVcc", "openDoNothingNoticeDialog", [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget]]);

						context$2$0.next = 27;
						return _regeneratorRuntime.awrap(that.toolbox.pause(100));

					case 27:
						vv.dontCare = context$2$0.sent;

						vv.p1Copy = "ERROR";
						vv.p2Copy = "Accout activation failed";
						vv.p3Copy = "Please ignore this message and click on the logo above to go to the home page if your account has already been activated.";
						vv.p4Copy = "Else, please try again.";

						context$2$0.next = 34;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".Page4rEmailValidationVcc", "setTextCopy", [vv.p1Copy, vv.p2Copy, vv.p3Copy, vv.p4Copy]]));

					case 34:
						vv.exeReturn = context$2$0.sent;
						context$2$0.next = 51;
						break;

					case 37:
						if (!(vv.verificationResult.status === "succeeded" || vv.verificationResult.status === "succeededPreviously")) {
							context$2$0.next = 51;
							break;
						}

						//{ Record in localstorage fact of valiation of vcode.
						localStorage["vcodeBeenValidated_" + vv.validationCode] = true;
						//}
						//{ Bring up login dialog.  If upon successful login (determined in other transaction), mediator should handoff backto this transaction - be logged in - and go to mainStep02_redirectToResumePg.

						vv.infoCopy = "<b>Your account has been activated</b>.  <br><br>If you are a <b>mobile app user</b>, you may return to the app.  <br><br>If you are <b>web browser user</b>, upon successful login from *this* form, you will be returned to where you left off or to the home page.";

						vv.dontCarePromise = that._executeNg.apply(that, [".MdDialogMngrVcc", "openLoginDialog", [vv.handoffSpecId, vv.infoCopy]]);

						context$2$0.next = 43;
						return _regeneratorRuntime.awrap(that.toolbox.pause(100));

					case 43:
						vv.dontCare = context$2$0.sent;

						vv.p1Copy = "Your account has been activated";
						vv.p2Copy = "If you are a mobile app user, you may return to the app.";
						vv.p3Copy = "If you are web browser user, please login.";
						vv.p4Copy = "";

						context$2$0.next = 50;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".Page4rEmailValidationVcc", "setTextCopy", [vv.p1Copy, vv.p2Copy, vv.p3Copy, vv.p4Copy]]));

					case 50:
						vv.exeReturn = context$2$0.sent;

					case 51:
						context$2$0.next = 54;
						break;

					case 53:
						if (vv.proceedTo === "mainStep02_redirectToResumePg") {
							////YO vv.isHandoff = ( pkg.notice.handoffSpecId && pkg.notice.doHandoffFirst ) ? true : false;
							if (false) {
								// { (TODO - NOT RUNNING) Inform user about where they go next.  To proceed requires message acknowlegement.
								vv.confirmQuestion = "confirm logout?";
								vv.startEndTarget = ".navChoiceLogout";

								vv.handoffSpecId = that._bsetHandoffSpec(pkg.entryId);
								vv.doHandoffFirst = true;

								vv.promise1 = that._executeNg.apply(that, [".MdDialogMngrVcc", "openStndConfirmDialog", [vv.handoffSpecId, vv.doHandoffFirst, vv.confirmQuestion, vv.startEndTarget]]);
								//}
							} else {
								//{ Now Clear resume info in 40 seconds no matter what, since user doesn't have to do anything else to complete the validation/login/resume transaction.
								vv.clearResumeInfoTimeout = that.timeoutNg(vv.clearResumeInfo, 1000 * 40);
								//}
								// { Take user to resume page if there is one, else go to home page.
								vv.resumeUrlPath = localStorage.resumeUponReturnUrl || "/home";
								localStorage.removeItem("resumeUponReturnUrl");
								window.location.href = vv.resumeUrlPath.substring(1)
								//}
								;
							}
						}

					case 54:
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidationRoutine_requested__Nnt");

					case 55:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__EmailValidationRoutineDetermination_requested__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__EmailValidationRoutineDetermination_requested__Xnt");

						vv.handoffSpecId = pkg.notice.handoffSpecId || that._bsetHandoffSpec(pkg.entryId);

						//{	Determine if user is logged in.
						vv.sessionId = that._getSessionId__Rtn();
						vv.isUserLoggedIn = typeof vv.sessionId === "string" ? true : false;

						if (!vv.isUserLoggedIn) {
							context$2$0.next = 22;
							break;
						}

						//{	"Don't-care/OK" notify user he/she is already logged in, and instruct what to do.		
						vv.startEndTarget = "";
						vv.noticeTitle = "attention";
						vv.noticeCopy = "You are already logged into an existing account.  <br><br>In order to activate your new account, please log out and then reload this page.";

						vv.dontCarePromise = that._executeNg.apply(that, [".MdDialogMngrVcc", "openDoNothingNoticeDialog", [vv.noticeTitle, vv.noticeCopy, "", vv.startEndTarget]]);

						context$2$0.next = 13;
						return _regeneratorRuntime.awrap(that.toolbox.pause(100));

					case 13:
						vv.dontCare = context$2$0.sent;

						vv.p1Copy = "ATTENTION";
						vv.p2Copy = "You are currently logged into an existing account.";
						vv.p3Copy = "In order to activate your new account, please log out and then reload this page.";
						context$2$0.next = 19;
						return _regeneratorRuntime.awrap(that._executeNgAsync.apply(that, [".Page4rEmailValidationVcc", "setTextCopy", [vv.p1Copy, vv.p2Copy, vv.p3Copy]]));

					case 19:
						vv.exeReturn = context$2$0.sent;
						context$2$0.next = 24;
						break;

					case 22:
						//{ Proceed to email valiation routine.
						vv.pkg = {
							notice: {
								noticeName: "EmailValidationRoutine_requested"
							}
						};
						that.receiveNotice("", vv.pkg);

					case 24:

						//	LOGIC TBD.
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__EmailValidationRoutineDetermination_requested__Nnt");

					case 25:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__ChangedTo_SomeSimplePage__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_SomeSimplePage__Nnt");

						//	LOGIC TBD.
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_SomeSimplePage__Nnt");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		p._run__ChangedTo_Page4rPasswordResetUSC__Nnt = p._run__ChangedTo_SomeSimplePage__Nnt;

		p._run__ChangedTo_Page4rHomeUSC__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rHomeUSC__Nnt");

						//	LOGIC TBD.
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rHomeUSC__Nnt");

					case 4:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._run__ChangedTo_Page4rStationDtlUSC__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rStationDtlUSC__Nnt");

						//{	Needed params:
						vv.stationId = pkg.notice.stationId;
						vv.stationName = pkg.notice.stationName;
						//}

						//	Set station on player per station for this page.
						///vv.rtnReturn = that._readyPanelForPlay__Rtn(vv.stationId)

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rStationDtlUSC__Nnt");
						///return vv.rtnReturn;

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		p._run__ChangedTo_Page4rStationDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt;
		p._run__ChangedTo_Page4rSchoolDtlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt;
		p._run__ChangedTo_Page4rSchoolDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt;
		p._run__ChangedTo_Page4rStationDtlFlexiTestUSC__Nnt = p._run__ChangedTo_Page4rStationDtlUSC__Nnt;

		p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rPlaylistDtlUSC__Nnt");

						//{	Needed params:
						//}

						vv.newPkg = {
							notice: {
								noticeName: "CurrentlyPlayingTrackInfo_wanted"
							}
						};
						console.dog(">>> !!! vv.newPkg ", vv.newPkg);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that._notifyPlayerPg(vv.newPkg));

					case 7:
						vv.dontCare = context$2$0.sent;

						//	Set station on player per station for this page.
						///vv.rtnReturn = that._readyPanelForPlay__Rtn(vv.stationId)

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rPlaylistDtlUSC__Nnt");
						///return vv.rtnReturn;

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		p._run__ChangedTo_Page4rPlaylistDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt;
		p._run__ChangedTo_Page4rProjectDtlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt;
		p._run__ChangedTo_Page4rProjectDtlShortUrlUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlUSC__Nnt;

		p._run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt");

						/*
	     vv.asynchWrap = function() {
	     	vv.dontCarePromise = that._executeNg.apply(that, 
	     		[ '.TracksPanelVcc', 'decorateLoadedTrackListing', [ that.stateParamsNg.trackUid ] ]
	     	);	
	     }
	     vv.voidd = that.timeoutNg(vv.asynchWrap, 2500);
	     */

						vv.pkg = {
							notice: {
								noticeName: "TrackPlay_requested",
								stationId: that.stateParamsNg.stationId,
								playlistId: that.stateParamsNg.playlistId,
								trackId: that.stateParamsNg.trackId,
								trackUid: that.stateParamsNg.trackUid
							}
						};

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that.receiveNotice("", vv.pkg));

					case 6:
						vv.voidd = context$2$0.sent;

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt");
						///return vv.rtnReturn;

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};
		p._run__ChangedTo_Page4rProjectDtlForEpisodeUSC__Nnt = p._run__ChangedTo_Page4rPlaylistDtlForTrackUSC__Nnt;

		p._run__ChangedTo_Page4rEmailValidationUSC__Nnt = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _run__ChangedTo_Page4rEmailValidationUSC__Nnt");

						vv.pkg = {
							notice: {
								noticeName: "EmailValidationRoutineDetermination_requested"
							}
						};

						vv.dontCare = that.receiveNotice("", vv.pkg);

						//	LOGIC TBD.
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  END: _run__ChangedTo_Page4rEmailValidationUSC__Nnt");

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return aa.MyClass;
	})();

	//	Try again in 1 sec.

	//	Try again in 1.5 secs. 

	//	Try again in 1.5 secs. 

	//	Try again one last time in 1.5 secs. 

	///vv.methodReturn = vv['mediator'].receiveNotice(pkg);

	///alert( ">>> vv.isSafari: " + vv.isSafari )

	///alert(">>> _run__FacebookShareButton_clicked__Xnt - Non Safari case.")
	///alert(">>> _run__FacebookShareButton_clicked__Xnt -vv.doRunShare s: " + vv.doRunShare )

	//{	Pathway 4r logged in user.
	//{	Upon resolution of promise, try to notify Player page.
	///alert("_run__PlayButtonVcc_clicked__Xnt - mk-5b");
	///alert("_run__PlayButtonVcc_clicked__Xnt - mk-6");

	//}
	//}
	//{	Pathway 4r non-logged in user.
	//}

	//{	Upon resolution of promise, try to notify Player page.

	//	Do nothing.  New view to handoff transactions.

	//}
	//}

	///alert(">>> _run__ShareView_requestedFromPlayer__Xnt before showMenu");

	///alert(">>> _run__ShareView_requestedFromPlayer__Xnt after showMenu");

	//{	

	// {Check if result has valid sessionId, if so, then good.}

	//}

	//}			
	//{	

	//}	

	//{	

	// {Check if result has valid sessionId, if so, then good.}

	//}			
	//{	

	//}			
	//{	

	//}			
	//}

	//{	Pathway 4r logged in user.

	///alert(">>> BOOOO3 ");

	//}
	//{	Pathway 4r non-logged in user.
	//}

	//{	Upon resolution of promise, try to notify Player page.

	//	Do nothing.  New view to handoff transactions.

	//}
	///alert(">>> BOOOO 4");
	//}	

	//}

	//}

	//}
	//}

	//}
	//}
	///alert(">>> BOOOO 2 " + JSON.stringify(vv.pkg));

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AppVcc_MediatorService_routines.js
	 * *********************************************************************
	 * *********************************************************************
	 */

	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {
		var aa = {};
		var p = {};

		aa.refNameSelf = "AppVcc_MediatorService_routines";

		//	================================================================
		//	ROUTINES: (Rtn)  
		//	...These are basically "partial transactions", and/or
		//	...simple transactions around executing just one method.
		//{

		p._applyCssNamespacingToHolders__Rtn = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _applyCssNamespacingToHolders__Rtn");

			vv.cssNamespacePerUiStates = that.toolbox.getCssNamespacePerUiStates(that.stateNg.current);

			vv.exeReturn = that._executeNg.apply(that, [".StateContainerVcc", "setAbstractStatesCssNamesVar", [vv.cssNamespacePerUiStates]]);

			return vv.exeReturn;
		};

		p._autoManagePlayerAndFooterDisplay__Rtn = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _autoManagePlayerAndFooterDisplay__Rtn");

			//	Query player panel controller to see if display switch is on or off.
			vv.doesPlayerHaveStation = that._executeNg.apply(that, [".PlayerPanelVcc", "getStationId", []]);

			//	If player display switch is on, then instruct for gap under footer.
			//OuterHolderWithPlayerVcc
			if (vv.doesPlayerHaveStation) {
				vv.exeReturn = that._executeNg.apply(that, [".FlexiHolderVcc", "positionFooterAbovePlayer", []]);
				vv.exeReturn = that._executeNg.apply(that, [".OuterHolderVcc", "switchOnOffPlayer", [true]]);
			}
			//	Else no gap under footer (default state)
			else {
				vv.exeReturn = that._executeNg.apply(that, [".FlexiHolderVcc", "positionFooterNormally", []]);
				vv.exeReturn = that._executeNg.apply(that, [".OuterHolderVcc", "switchOnOffPlayer", [false]]);
			}
		};

		p._buildLayoutInHolders_Rtn = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _buildLayoutInHolders_Rtn");

			vv.allHolderVcNames = that.toolbox.getHolderVcNamesPerUiStates(that.stateNg.current);
			vv.allUsedSlots = that.toolbox.getUsedSlotsPerUiStates(that.stateNg.current);

			// Aside: Put allHolderVcNames & allUsedSlots  in current state for later/tbd easy access
			//{
			that.stateNg.current.allHolderVcNames = vv.allHolderVcNames;
			that.stateNg.current.allUsedSlots = vv.allUsedSlots;
			//}

			vv.allHolderVcNamesLen = vv.allHolderVcNames.length;
			for (vv.idx = 0; vv.idx < vv.allHolderVcNamesLen; vv.idx++) {
				vv.holderVcName = vv.allHolderVcNames[vv.idx];
				vv.exeReturn = that._executeNg.apply(that, ["." + vv.holderVcName, "buildLayout", [vv.allUsedSlots]]);
			}
			return undefined;
		};

		p._getSessionId__Rtn = function () {
			var that = this;
			return that.sessionService.getSessionIdForRemote();
		};

		p._readyPanelForPlay__RtnAsyc = function callee$1$0(stationId, doPlayFlag) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _readyPanelForPlay__Rtn: ", stationId);

						vv.exeReturn = that._executeNg.apply(that, [".OuterHolderVcc", "switchOnOffPlayer", [true]]);
						vv.exeReturn = that._executeNg.apply(that, [".FlexiHolderVcc", "positionFooterAbovePlayer", []]);
						vv.promise1 = that._executeNgAsync.apply(that, [".PlayerPanelVcc", "readyPanelForPlay", [stationId, doPlayFlag]]);

						context$2$0.prev = 6;
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 9:
						vv.exeReturn = context$2$0.sent;

						console.dog(">>> _readyPanelForPlay__RtnAsyc - SUCCESS - result: ", vv.exeReturn);
						return context$2$0.abrupt("return", vv.exeReturn);

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0["catch"](6);

						console.dog(">>> _readyPanelForPlay__RtnAsyc - FAILED - e:", context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[6, 14]]);
		};

		p._removePlayer__Rtn = function callee$1$0() {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _removePlayer__RtnAsyc ");

						vv.exeReturn = that._executeNg.apply(that, [".OuterHolderVcc", "switchOnOffPlayer", [false]]);

						vv.exeReturn = that._executeNg.apply(that, [".FlexiHolderVcc", "positionFooterNormally", []]);

					case 5:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._setDisplayOfHierarchyNavStrip__Rtn = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _setDisplayOfHierarchyNavStrip__Rtn");

			vv.exeReturn = that._executeNg.apply(that, [".HierarchyNavStripVcc", "setDisplay", []]);

			return vv.exeReturn;
		};

		//}

		return p;
	})();

	/* DRAWER
	 
	 
			p.ZZ_presentMainSignupForm_RtnAsync = async function(handoffSpecId) {
				var that = this;
				var vv = {}
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _presentMainSignupForm_RtnAsync: ")	
				
				
				vv.promise1 = that._executeNgAsync.apply(that, 
					[ '.SlideDownVcc', 'loadAndOpenPanel', ["SignupPanelVcc", handoffSpecId] ]);

				try {
					vv.exeReturn = await vv.promise1;
					///vv.name = 'boooo'
					console.dog(">>> vv", vv);
					console.dog(">>> _presentMainSignupForm_RtnAsync - SUCCESS - result: ", vv);
					return vv.exeReturn
				}
				catch(e) {
					console.dog('>>> _presentMainSignupForm_RtnAsync - FAILED - e:', e);
					return e;
				}
				
			}
			
			
			
			p.ZZ_removeMainLogInForm_RtnAsync = async function() {
				var that = this;
				var vv = {}
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _removeMainLogInForm_RtnAsync: ")	
				
				
				vv.promise1 = that._executeNgAsync.apply(that, 
					[ '.SlideDownVcc', 'unloadAndClosePanel', [] ]);

				try {
					vv.exeReturn = await vv.promise1;
					///vv.name = 'boooo'
					console.dog(">>> vv", vv);
					console.dog(">>> _removeMainLogInForm_RtnAsync - SUCCESS - result: ", vv);
					return vv.exeReturn
				}
				catch(e) {
					console.dog('>>> _removeMainLogInForm_RtnAsync - FAILED - e:', e);
					return e;
				}
				
			}


			
			p._presentMainLogInFormOLD_RtnAsync = async function(handoffSpecId) {
				var that = this;
				var vv = {}
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  START: _presentMainLogInFormAsync_Rtn: ")	
				
				
				//{ Define helper.
					vv.showDialog = async function(config) {
						console.dog(">>> mdDialogMngr2: ", that.mdDialogMngr);
						vv.promise1 = that.mdDialogMngr.coreObj.show(config);

						try {
							vv.result = await vv.promise1;
							
							///that.scopeNg.loc.responseMssg = 'You decided to get rid of your debt.';
							///that.scopeNg.$apply();

						}
						catch(e) {
							///that.scopeNg.loc.responseMssg = 'You decided to keep your debt.';
							///that.scopeNg.$apply();
						}
					}	
				//}
				
				
				//{ Config modal.
					  
					///vv.eventt = {}   //  Note, this works.
					vv.eventt = {};
					
					console.dog(">>> dialogMngr: ", that.mdDialogMngr );
					  
					// 	Appending dialog to document.body to cover sidenav in docs app
					//	...Note, Chaining functions that define the config.
					var config = that.mdDialogMngr.coreObj.confirm()
						  .parent( angular.element(document.body) )
						  .title( 'Would you like to delete your debt?' )
						  .content( '' )
						  .ariaLabel( 'Lucky day' )
						  .ok( 'Please do it!' )
						  .cancel( 'Sounds like a scam' )
						  .targetEvent( vv.eventt );
						  

					that.mdDialogMngr.bgetExtendedConfig( config,
						{
							template: 'stndTemplate',
							target: '.navChoiceSignup',
							furtherContent: '<drct-login-core-panel-vcc atrb-handoff-spec-id="'+handoffSpecId+'"><drct-login-core-panel-vcc>'
						}
					)
				//}

					console.dog(">>> mdDialogMngr1: ", that.mdDialogMngr);
					console.dog(">>> _setupSpcfDatas - config1: ",config._options);				

				//{ Now show the dialog box.
					vv.showDialog(config);
				//}
					
					

			};
			
	 
	 
	*/

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MediatorServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};
		aa.refNameSelf = "MediatorServiceClass";
		aa.global = aaGlobalee;
		aa.buildTs = Date.now();

		function ClassConstructor() {
			var that = this;
			that._setup();
			var breakpoint = "a";
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{	
		p.receiveNotice = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " - ****receiveNotice***: ", pkg);

						if (!pkg) {
							context$2$0.next = 10;
							break;
						}

						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._handleNotice(senderScope, pkg));

					case 6:
						vv.handleNoticeReturn = context$2$0.sent;
						return context$2$0.abrupt("return", vv.handleNoticeReturn);

					case 10:
						return context$2$0.abrupt("return", "ERROR: NO PKG");

					case 11:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.bsetHandoffSpec = function (currentTransPkgEntryId, handoffOnSuccess, handoffOnFailure, namedHandoffsMap) {
			var that = this;
			return that._bsetHandoffSpec(currentTransPkgEntryId, handoffOnSuccess, handoffOnFailure, namedHandoffsMap);
		};
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = function () {
			var that = this;
			console.dog(">>> " + aa.refNameSelf + " ---  - _setup. ");

			that._config();
			that.pkgs = {};
			that.pkgEntriesMap = {};
			aa.global.pkgEntriesMap = that.pkgEntriesMap;
			that.pkgEntriesList = [];
			aa.global.pkgEntriesList = that.pkgEntriesList;
			that.handoffSpecs = {};
			aa.global.handoffSpecs = that.handoffSpecs;
		};

		p._config = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " ---  - _config. ");

			vv.cfg = {};
			vv.cfg.refNameSelf = aa.refNameSelf;
			that.cfg = vv.cfg;

			return vv.cfg;
		};

		p._handleNotice = function callee$1$0(senderScope, pkg) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - start: ", senderScope, pkg);

						///vv.pkg = that._bgetClonedObj(pkg)
						vv.pkg = pkg;
						that.createPkgEntry(vv.pkg);

						//{ If incoming pkg has handoffSpec, append handoff pkg to incoming pkg, else use incoming pkg )
						if (pkg.notice.handoffSpecId && pkg.notice.doHandoffFirst === "true") {
							vv.pkg.handedToMePkg = that._getHandoffPkg(pkg.notice.handoffSpecId, "success");
							vv.pkg.handedToMePkg.pkgHandedTo = vv.pkg.entryId;
							vv.incomingPkgNoticeName = vv.pkg.notice.noticeName;
							vv.noticeNameToUse = vv.pkg.handedToMePkg.notice.noticeName;
						} else {
							vv.incomingPkgNoticeName = vv.pkg.notice.noticeName;
							vv.noticeNameToUse = vv.pkg.notice.noticeName;
						}
						//}

						console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (senderScope): ", senderScope);

						console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (vv.noticeNameToUse): ", vv.noticeNameToUse);

						console.dog("###->>>-###->>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - ****_handleNotice*** - about to handle (vv.pkg): ", vv.pkg);

						if (that["_run__" + vv.noticeNameToUse + "__Xnt"]) {
							vv.noticeTransactionName = "_run__" + vv.noticeNameToUse + "__Xnt";
						} else if (that["_run__" + vv.noticeNameToUse + "__Nnt"]) {
							vv.noticeTransactionName = "_run__" + vv.noticeNameToUse + "__Nnt";
						}

						context$2$0.next = 12;
						return _regeneratorRuntime.awrap(that[vv.noticeTransactionName](senderScope, vv.pkg));

					case 12:
						vv.transReturn = context$2$0.sent;
						return context$2$0.abrupt("return", vv.transReturn);

					case 14:
					case "end":
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._bsetHandoffSpec = function (handoffOnSuccess, handoffOnFailure, namedHandoffsMap, currentTransPkgEntryId) {
			var that = this;
			var vv = {};

			vv.handoffSpecId = "HSId" + that._genUniqueToken();
			that.handoffSpecs[vv.handoffSpecId] = {
				currentTransPkgEntryId: currentTransPkgEntryId,
				success: handoffOnSuccess,
				failure: handoffOnFailure,
				namedHandoffsMap: namedHandoffsMap
			};
			//{ Also, stringify handoffSpecs then store in LocalStorage with handoffSpecId as key.
			//TODO...
			//}
			return vv.handoffSpecId;
		};

		p._getHandoffPkg = function (handoffSpecId, need) {
			var that = this;
			var vv = {};

			need = need || "success";

			vv.handoffSpec = that.handoffSpecs[handoffSpecId];

			//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
			//TODO...
			//}

			if (typeof vv.handoffSpec.success === "object") {
				vv.handoffPkgOnSuccess = vv.handoffSpec.success;
				//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
				//TODO...
				//}
			} else if (typeof vv.handoffSpec.success === "string") {
				vv.handoffPkgOnSuccess = that.pkgEntriesMap[vv.handoffSpec.success]
				//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
				//TODO...
				//}
				;
			}

			if (typeof vv.handoffSpec.failure === "object") {
				vv.handoffPkgOnFailure = vv.handoffSpec.failure;
				//{ If not successful in getting handoffSpec from THAT scope, then try to get from LocalStorage.
				//TODO...
				//}
			} else if (typeof vv.handoffSpec.failure === "string") {
				vv.handoffPkgOnFailure = that.pkgEntriesMap[vv.handoffSpec.failure]
				//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
				//TODO...
				//}
				;
			}

			if (need === "all") {
				vv.returnn = {
					success: vv.handoffPkgOnSuccess,
					failure: vv.handoffPkgOnFailure
				};
			} else if (need === "success") {
				vv.returnn = vv.handoffPkgOnSuccess;
			} else if (need === "failure") {
				vv.returnn = vv.handoffPkgOnSuccess;
			} else {
				vv.namedFo = vv.handoffSpec[need];
				if (typeof vv.namedFo === "object") {
					vv.returnn = vv.namedFo;
				} else if (typeof vv.namedFo === "string") {
					vv.returnn = that.pkgEntriesMap[vv.namedFo]
					//{ If not successful in getting pkgEntriesMap from THAT scope, then try to get from LocalStorage.
					//TODO...
					//}
					;
				}
			}

			return vv.returnn;
		};

		p.createPkgEntry = function (pkg) {
			var that = this;
			var vv = {};
			vv.pkg = pkg;

			vv.pkgEntryId = "PEId" + that._genUniqueToken();
			vv.notice = that._bgetClonedObj(vv.pkg.notice);

			vv.entryTs = Date.now() - aa.buildTs;

			vv.entryChainItem = vv.pkgEntryId + " - " + vv.notice.noticeName;

			if (!vv.pkg.entryCntForPkg) {
				vv.pkg.entryCntForPkg = 1;
				vv.entryCntForPkg = vv.pkg.entryCntForPkg;
				vv.pkg.entryId_first = vv.pkgEntryId;
				vv.pkg.noticeName_first = vv.notice.noticeName;
				vv.pkg.entriesChain = [vv.entryChainItem];
			} else {
				vv.pkg.entryCntForPkg = vv.pkg.entryCntForPkg + 1;
				vv.entryCntForPkg = vv.pkg.entryCntForPkg;
				vv.pkg.entriesChain.push(vv.entryChainItem);
			}

			vv.entriesChain = that._bgetClonedObj(vv.pkg.entriesChain);

			vv.pkgEntry = {
				noticeName: vv.notice.noticeName,
				noticeName_first: vv.pkg.noticeName_first,
				entryId: vv.pkgEntryId,
				entryIdInPkg_first: vv.pkg.entryId_first,
				entryCntForPkg: vv.entryCntForPkg,
				entriesChain: vv.entriesChain,
				ts: vv.entryTs,
				notice: vv.notice,
				pkg: vv.pkg
			};

			vv.pkg.entryId = vv.pkgEntryId;
			vv.pkg.noticeName = vv.notice.noticeName;
			vv.pkg.entriesChain = vv.entriesChain;
			that.pkgEntriesMap[vv.pkgEntryId] = vv.pkgEntry;

			//{ Also, stringify pkgEntriesMap then store in LocalStorage with pkgEntryId as key.
			//TODO...
			//}

			vv.entriesChain_string = "";
			if (vv.pkgEntry.entryIdInPkg_first !== vv.pkgEntry.entryId) {
				vv.entriesChain_string = " | " + JSON.stringify(vv.pkg.entriesChain);
			}

			that.pkgEntriesList.push(vv.pkgEntry.entryId + " | " + vv.entryCntForPkg + " | " + vv.pkgEntry.noticeName + " | " + vv.entryTs + vv.entriesChain_string);

			//{ Also, stringify pkgEntriesList then store in LocalStorage with 'pkgEntriesList' as name.
			//TODO...
			//}
		};

		p._executeTarget = function (targetMethod, methodArgs, parentObj) {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-TARGET: ", targetMethod, methodArgs);

			if (targetMethod) {
				if (parentObj) {
					vv.parentObj = parentObj;
					vv.method = targetMethod;
					vv.methodReturn = vv.method.apply(vv.parentObj, methodArgs);
				} else {
					vv.method = targetMethod;
					vv.methodReturn = vv.method(methodArgs);
				}
			} else {
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-TARGET.");
			}
			return vv.methodReturn;
		};

		p._executeNg = function (targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG: ", targetSelector, targetMethodName, methodArgs);

			if (angular.element(document.querySelector(targetSelector)).scope()) {
				vv.thisc = angular.element(document.querySelector(targetSelector)).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.methodReturn = vv.method.apply(vv.thisc, methodArgs);
			} else {
				console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG.");
			}
			return vv.methodReturn;
		};

		p._executeNgAsync = function callee$1$0(targetSelector, targetMethodName, methodArgs) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG-ASYNC: ", targetSelector, targetMethodName, methodArgs);

						context$2$0.prev = 3;

						vv.thisc = angular.element(document.querySelector(targetSelector)).scope().thisc;
						vv.method = vv.thisc[targetMethodName];
						vv.promise1 = vv.method.apply(vv.thisc, methodArgs);
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 9:
						vv.methodReturn = context$2$0.sent;
						context$2$0.prev = 10;

						console.dog(">>> _executeNgAsync - SUCCESS - methodReturn: ", vv.methodReturn);
						return context$2$0.abrupt("return", vv.methodReturn);

					case 15:
						context$2$0.prev = 15;
						context$2$0.t0 = context$2$0["catch"](10);

						console.dog(">>> ERROR - _executeNgAsync - FAILED - errorr: ", context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 19:
						context$2$0.next = 25;
						break;

					case 21:
						context$2$0.prev = 21;
						context$2$0.t1 = context$2$0["catch"](3);

						console.dog(">>> ERROR - " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG-ASYNC. - errorr: ", context$2$0.t1);
						return context$2$0.abrupt("return", undefined);

					case 25:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[3, 21], [10, 15]]);
		};

		p._genUniqueToken = function () {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - _genUniqueToken. ");

			/***Temporal ordinal prefix part */
			vv.milliesSince1970 = Date.now || function () {
				return +new Date();
			};
			vv.milliPart = vv.milliesSince1970();

			/***Random suffix part */
			vv.minNum = 100000000;
			vv.maxNum = 999999999;
			vv.randomPart = Math.round(vv.minNum + Math.random() * (vv.maxNum - vv.minNum));

			/***Combine the prefix parts and suffix parts into the final string */
			vv.uTkn = "_" + vv.milliPart + "_" + vv.randomPart;

			/***Return the unique token */
			return vv.uTkn;
		};

		p._bgetClonedObj = function (obj) {
			var vv = {};
			console.dog(">>> _bgetClonedObj - obj: ", obj);
			vv.objAsString = JSON.stringify(obj);
			vv.clonedObj = JSON.parse(vv.objAsString);
			return vv.clonedObj;
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: SessionServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

		function ClassConstructor(cookiesNg, httpNg, qNg, resourceNg) {
			var that = this;
			that.cookiesNg = cookiesNg;
			that.httpNg = httpNg;
			that.qNg = qNg;
			that.resourceNg = resourceNg;
			that._setup();
			var breakpoint = 'a';
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = function () {
			var that = this;
			that.doSetOnClient = false;
			that._defineModel();
			that._startLocalSession();
		};

		p._defineModel = function () {
			var that = this;
			that.model = {
				app: { //	Model aspect defined by app.
					localId: undefined,
					localStartedTs: undefined,
					remoteStatus: undefined,
					remoteStartedTs: undefined,
					remoteEndedTs: undefined,
					remoteEndedReason: undefined, //	[logout, timeout, close].
					sessionIdForRemote: undefined, //	Pass this to our remote resources.
					authServiceUserId: undefined, //	ie: user's facebook id.
					authServiceIdfier: undefined, //	ie: facebook, twitter.
					currentRemoteSessionId: undefined
				},
				ext: undefined //	Model aspect defined externally.
			};
		};

		p._bgetOurAx2Resource = function (accessToken, accessTokenType) {
			var that = this;
			var vv = {};

			if (true) {
				// Force the TRUE on purpose,!  The resource holding state is not desired!

				if (accessTokenType === 'facebook') {
					var accessTokenHeaderParamName = 'FacebookAccessToken';
					var headersObj = {};
					headersObj[accessTokenHeaderParamName] = accessToken;
				}

				that.OurAx2Resource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype', {
					modelType: '@modelType',
					modelSubtype: '@modelSubtype'
				}, {
					logInToRemoteSession: {
						email: '@email',
						password: '@password',
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelType: 'auth', modelSubtype: '' }
					},
					startRemoteSessionWithAccessToken: {
						headers: headersObj,
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelType: 'auth', modelSubtype: accessTokenType }
					}
				});
			}

			return that.OurAx2Resource;
		};

		p._startLocalSession = function () {
			var that = this;
			var vv = {};
			vv.data = {};
			return vv.data;
		};

		p._logInToRemoteSession = function (loginIdfier, password) {
			var that = this;
			var vv = {};

			vv.Resource = that._bgetOurAx2Resource();
			vv.datas = vv.Resource.logInToRemoteSession({ email: loginIdfier, password: password });
			///console.dog('>>> FROM _logInToRemoteSession - vv.datas: ', vv.datas);
			return vv.datas.$promise;
		};

		p._logOutOfRemoteSession = function () {
			var that = this;
			var vv = {};

			that.model.app.sessionIdForRemote = undefined;

			return that.model.app.sessionIdForRemote;
		};

		p._startRemoteSessionWithAccessToken = function (accessToken, accessTokenType) {
			var that = this;
			var vv = {};

			vv.Resource = that._bgetOurAx2Resource(accessToken, accessTokenType);
			vv.datas = vv.Resource.startRemoteSessionWithAccessToken({ FacebookAccessToken: accessToken });

			console.dog('>>> FROM _startRemoteSessionWithAccessToken - vv.datas: ', vv.datas);
			return vv.datas.$promise;
		};

		p._updateModelAfterLogin = function (loginData) {
			var that = this;
			var vv = {};

			that.model.ext = loginData;

			vv.sessionIdForRemote = loginData.sessionId;

			///console.dog(">>> _updateModelAfterLogin - sessionId: ", vv.sessionIdForRemote);

			that.model.app.sessionIdForRemote = vv.sessionIdForRemote;
		};

		p._setAuthHeader = function (doClear) {
			var that = this;
			var vv = {};
			vv.sessionId = that._getSessionIdForRemote();
			vv.headerValString = doClear === true ? '' : 'Live365 ' + vv.sessionId;
			that.httpNg.defaults.headers.common.Authorization = vv.headerValString;
			///alert('_setAuthHeader')
		};

		p._getSessionIdForRemote = function () {
			var that = this;
			var vv = {};

			vv.loginDataFromCookie = that._getLoginDataFromCookie();

			if (typeof that.model.app.sessionIdForRemote === 'undefined' && vv.loginDataFromCookie && vv.loginDataFromCookie.sessionId) {
				that._updateModelAfterLogin(vv.loginDataFromCookie);
				that._setAuthHeader();
			}

			vv.sessionIdForRemote = that.model.app.sessionIdForRemote;

			console.dog('>>> In getSessionIdForRemote - sessionIdForRemote: ', vv.sessionIdForRemote);

			return vv.sessionIdForRemote;
		};

		p._putLoginDataIntoCookie = function (loginData) {
			var that = this;
			var vv = {};

			vv.d1 = new Date();
			vv.expireDateTime = new Date(vv.d1);
			vv.expireDateTime.setHours(vv.d1.getHours() + 4);
			console.dog('>>> _putLoginDataIntoCookie -  vv.expireDateTime: ', vv.expireDateTime);

			that.cookiesNg.putObject('loginData', loginData, { 'expires': vv.expireDateTime });
		};

		p._getLoginDataFromCookie = function () {
			var that = this;
			var vv = {};

			vv.loginData = that.cookiesNg.getObject('loginData');

			return vv.loginData;
		};

		//}

		//	================================================================
		//	PUBLIC METHODS:
		//{

		p.getSessionIdForRemote = function () {
			var that = this;
			return that._getSessionIdForRemote();
		};

		p.getModel = function () {
			var that = this;
			var vv = {};

			return that.model;
		};

		p.logInToRemoteSessionAsync = function callee$1$0(loginIdfier, password) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						///alert('logInToRemoteSessionAsync')
						console.dog('>>> FROM logInToRemoteSessionAsync - RUNNING');
						context$2$0.prev = 3;

						vv.promise1 = that._logInToRemoteSession(loginIdfier, password);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;

						that._updateModelAfterLogin(vv.result);
						that._putLoginDataIntoCookie(vv.result);
						that._setAuthHeader();
						console.dog('>>> FROM logInToRemoteSessionAsync - SUCCESS ', vv.result, that.model);

						vv.sessionId = that._getSessionIdForRemote();
						return context$2$0.abrupt('return', vv.sessionId);

					case 16:
						context$2$0.prev = 16;
						context$2$0.t0 = context$2$0['catch'](3);

						console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', context$2$0.t0);
						return context$2$0.abrupt('return', context$2$0.t0);

					case 20:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[3, 16]]);
		};

		p.logOutOfRemoteSession = p._logOutOfRemoteSession = function () {
			var that = this;
			var vv = {};

			that.cookiesNg.remove('loginData');
			that._updateModelAfterLogin({});
			that._setAuthHeader(true);

			///that.model.app.sessionIdForRemote = undefined

			return that.model.app.sessionIdForRemote;
		};

		p.startRemoteSessionWithAccessTokenAsync = function callee$1$0(accessToken, accessTokenType) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.prev = 2;

						///alert('startRemoteSessionWithAccessTokenAsync')
						console.dog('>>> FROM startRemoteSessionWithAccessTokenAsync - RUNNING: ', accessToken, accessTokenType);

						vv.promise1 = that._startRemoteSessionWithAccessToken(accessToken, accessTokenType);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;

						that._updateModelAfterLogin(vv.result);
						that._putLoginDataIntoCookie(vv.result);
						that._setAuthHeader();

						vv.sessionId = that._getSessionIdForRemote();
						return context$2$0.abrupt('return', vv.sessionId);

					case 15:
						context$2$0.prev = 15;
						context$2$0.t0 = context$2$0['catch'](2);

						console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', context$2$0.t0);
						return context$2$0.abrupt('return', context$2$0.t0);

					case 19:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[2, 15]]);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: NoticeByEmailServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

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

		p._setup = function () {
			var that = this;
			that.MainResource = that._bgetMainResource();
			that.ReportResource = that._bgetReportResource();
		};

		p._bgetMainResource = function () {
			var that = this;
			var vv = {};

			if (!that.MainResource) {

				that.MainResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype', {
					modelType: 'emails',
					modelSubtype: '@modelSubtype'
				}, {
					shareIt: {
						stationId: '@stationId',
						playlistId: '@playlistId',
						resourceId: '@resourceId',
						type: '@type',
						recipients: '@recipients',
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelSubtype: 'sharing' }
					}
				});
			}

			return that.MainResource;
		};

		p._bgetReportResource = function () {
			var that = this;
			var vv = {};

			if (!that.ReportResource) {

				that.ReportResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype/:modelSubtype2/:modelSubtype3', {
					modelType: 'emails',
					modelSubtype: '@modelSubtype',
					modelSubtype2: '@modelSubtype2',
					modelSubtype3: '@modelSubtype3'
				}, {
					reportIt: {
						stationId: '@stationId',
						trackId: '@trackId',
						comments: '@comments',
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelSubtype: 'report', modelSubtype2: 'track', modelSubtype3: 'issues' }
					}
				});
			}

			return that.ReportResource;
		};

		//}

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{

		p.shareItem = function callee$1$0(recipients, stationId, playlistId, resourceId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.recipients = recipients;
						vv.stationId = stationId;
						vv.playlistId = playlistId || '';
						vv.resourceId = resourceId || '';

						if (resourceId && playlistId && stationId) {
							vv.type = 'PlaylistTrack';
						} else if (playlistId && stationId) {
							vv.type = 'Playlist';
						} else if (stationId) {
							vv.type = 'Station';
						}

						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(that.MainResource.shareIt({ type: vv.type, recipients: vv.recipients, stationId: vv.stationId, playlistId: vv.playlistId, resourceId: vv.resourceId }));

					case 9:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 11:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.reportItem = function callee$1$0(stationId, trackId, comments) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = stationId;
						vv.trackId = trackId;
						vv.comments = comments;

						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.ReportResource.reportIt({ stationId: vv.stationId, trackId: vv.trackId, comments: vv.comments }));

					case 7:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MembersServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

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

		p._setup = function () {
			var that = this;
			that.ForgotPasswordResource = that._bgetForgotPasswordResource();
			that.ForgotPasswordResetResource = that._bgetForgotPasswordResetResource();
			that.VerifyMemberByCodeResource = that._bgetVerifyMemberByCodeResource();
		};

		p._bgetForgotPasswordResource = function () {
			var that = this;
			var vv = {};

			if (!that.ForgotPasswordResource) {

				that.ForgotPasswordResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype/:modelSubtype2/:modelSubtype3', {
					modelType: 'members',
					modelSubtype: '@modelSubtype',
					modelSubtype2: '@modelSubtype2',
					modelSubtype3: '@modelSubtype3'
				}, {
					forgotPasswordItem: {
						email: '@email',
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelSubtype: 'password', modelSubtype2: 'reset', modelSubtype3: 'email' }
					}
				});
			}

			return that.ForgotPasswordResource;
		};

		p._bgetForgotPasswordResetResource = function () {
			var that = this;
			var vv = {};

			if (!that.ForgotPasswordResetResource) {

				that.ForgotPasswordResetResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype/:modelSubtype2', {
					modelType: 'members',
					modelSubtype: '@modelSubtype',
					modelSubtype2: '@modelSubtype2'
				}, {
					forgotPasswordResetItem: {
						password: '@password',
						verification_code: '@verification_code',
						cache: false,
						method: 'put',
						isArray: false,
						params: { modelSubtype: 'password', modelSubtype2: 'reset' }
					}
				});
			}

			return that.ForgotPasswordResetResource;
		};

		p._bgetVerifyMemberByCodeResource = function () {
			var that = this;
			var vv = {};

			if (!that.VerifyMemberByCodeResource) {

				that.VerifyMemberByCodeResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:verificationCode', {
					modelType: 'members',
					verificationCode: '@verificationCode'
				}, {
					verifyMemberByCode: {
						cache: false,
						method: 'put',
						isArray: false,
						params: {}
					}
				});
			}

			return that.VerifyMemberByCodeResource;
		};

		//}

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{

		p.forgotPasswordItem = function callee$1$0(email) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.email = email;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.ForgotPasswordResource.forgotPasswordItem({ email: vv.email }));

					case 5:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 7:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.forgotPasswordResetItem = function callee$1$0(password, verification_code) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.password = password;
						vv.verification_code = verification_code;

						context$2$0.prev = 4;
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.ForgotPasswordResetResource.forgotPasswordResetItem({ password: vv.password, verification_code: vv.verification_code }));

					case 7:
						vv.data = context$2$0.sent;
						context$2$0.next = 13;
						break;

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](4);

						console.dog('>>> passwordReset - vv.remotePasswordReset error: ', context$2$0.t0);

					case 13:
						context$2$0.prev = 13;

						if (!(typeof vv.data !== 'undefined' && vv.data && typeof vv.data.$promise !== 'undefined' && vv.data.$promise)) {
							context$2$0.next = 18;
							break;
						}

						return context$2$0.abrupt('return', vv.data.$promise);

					case 18:
						return context$2$0.abrupt('return', 'done');

					case 19:
						return context$2$0.finish(13);

					case 20:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[4, 10, 13, 20]]);
		};

		p.verifyMemberWithCode = p._verifyMemberWithCode = function callee$1$0(verificationCode) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.prev = 2;
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.VerifyMemberByCodeResource.verifyMemberByCode({ verificationCode: verificationCode }));

					case 5:
						vv.resultPromise = context$2$0.sent;
						context$2$0.next = 8;
						return _regeneratorRuntime.awrap(vv.resultPromise);

					case 8:
						vv.resultP = context$2$0.sent;
						context$2$0.next = 11;
						return _regeneratorRuntime.awrap(vv.resultP.$promise);

					case 11:
						vv.result = context$2$0.sent;

						console.dog('>>> verifyMemberWithCode - vv.result: ', vv.result);
						vv.resultObj = { status: 'succeeded' };
						context$2$0.next = 20;
						break;

					case 16:
						context$2$0.prev = 16;
						context$2$0.t0 = context$2$0['catch'](2);

						console.dog('>>> verifyMemberWithCode - errorr: ', context$2$0.t0);
						vv.resultObj = { status: 'failed', errorr: context$2$0.t0 };

					case 20:
						return context$2$0.abrupt('return', vv.resultObj);

					case 21:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[2, 16]]);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 294 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: RemoteDatasServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function ClassConstructor(resourceNg) {
			var that = this;
			that.resourceNg = resourceNg;
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._bgetResourceClass = _bgetResourceClass;
		function _bgetResourceClass(resourceIdfier) {
			var that = this;
			var vv = {};
			vv.resourceIdfier = resourceIdfier || 'live365Default';
			if (vv.resourceIdfier === 'live365' || vv.resourceIdfier === 'live365Default') {

				vv.endpointPattern = 'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:_modelType/:_id';

				vv.ResourceClass = that.resourceNg(vv.endpointPattern, {
					_modelType: '@_modelType',
					_id: '@_id'
				}, {
					getItemsJSONP: {
						method: 'JSONP',
						callback: 'JSON_CALLBACK',
						isArray: true
						/* 	^ The callback is auto added on to url like this
	      * 	...?callback=JSON_CALLBACK .
	      * 	...Could also do it like this: params{ callback: 'JSON_CALLBACK' } .
	      */
					}
				});
			}
			return vv.ResourceClass;
		}

		//}

		//	====================================================================
		//	PUBLIC METHODS :
		//{

		p.bgetResourceClass = bgetResourceClass;
		function bgetResourceClass(resourceIdfier) {
			var that = this;
			var ResourceClass = that._bgetResourceClass(resourceIdfier);
			return ResourceClass;
		};
		//}

		return ClassConstructor;
	})();

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StationsServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

		function ClassConstructor(qNg, resourceNg, sessionService, toolbox) {
			var that = this;
			that.qNg = qNg;
			that.resourceNg = resourceNg;
			that.sessionService = sessionService;
			that.toolbox = toolbox;
			that._setup();
			var breakpoint = 'a';
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = function () {
			var that = this;
			that.MainResource = that._bgetMainResource();
			that.MainResourceAlt = that._bgetMainResourceAlt();
			that.SubResource = that._bgetSubResource();
			that.Sub2Resource = that._bgetSub2Resource();
		};

		p._bgetMainResource = function () {
			var that = this;

			if (!that.MainResource) {
				that.MainResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype/:id?:q1Name:q1Val', {
					modelType: 'stations',
					modelSubtype: '@modelSubtype',
					id: '@id',
					q1Name: '@q1Name',
					q1Val: '@q1Val'
				}, {
					getActiveStations: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { modelSubtype: 'active' }
					},
					getStation: {
						cache: true,
						method: 'get',
						isArray: false
					}
				});
			}

			return that.MainResource;
		};

		p._bgetMainResourceAlt = function () {
			var that = this;

			if (!that.MainResourceAlt) {
				that.MainResourceAlt = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:id/:modelSubtype?:q1Name:q1Val', {
					modelType: 'stations',
					modelSubtype: '@modelSubtype',
					id: '@id',
					q1Name: '@q1Name',
					q1Val: '@q1Val'
				}, {
					getActiveStations: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { modelSubtype: 'active' }
					},
					getActiveStation: {
						cache: true,
						method: 'get',
						isArray: false,
						params: { modelSubtype: 'active' }
					}
				});
			}

			return that.MainResourceAlt;
		};

		p._bgetSubResource = function () {
			var that = this;

			if (!that.SubResource) {
				that.SubResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:id/:modelSubtype/:modelSubtype2/:subId?:q1Name:q1Val', {
					modelType: 'stations',
					modelSubtype: '@modelSubtype',
					modelSubtype2: '@modelSubtype2',
					id: '@id',
					subId: '@subId',
					q1Name: '@q1Name',
					q1Val: '@q1Val'
				}, {
					getActivePlaylists: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { modelSubtype: 'playlists', modelSubtype2: 'active' }
					},
					getPlaylist: {
						cache: true,
						method: 'get',
						isArray: false,
						params: { modelSubtype: 'playlists' }
					},
					getTrack: {
						cache: true,
						method: 'get',
						isArray: false,
						params: { modelSubtype: 'tracks' }
					}
				});
			}

			return that.SubResource;
		};

		p._bgetSub2Resource = function () {
			var that = this;

			if (!that.Sub2Resource) {
				that.Sub2Resource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:id/:modelSubtype/:subId/:modelSubtype2/:modelSubtype3/:sub2Id?:q1Name:q1Val', {
					modelType: 'stations',
					modelSubtype: '@modelSubtype',
					modelSubtype2: '@modelSubtype2',
					modelSubtype3: '@modelSubtype3',
					id: '@id',
					subId: '@subId',
					sub2Id: '@sub2Id',
					q1Name: '@q1Name',
					q1Val: '@q1Val'
				}, {
					getTracks: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { modelSubtype2: 'tracks' }
					}
				});
			}

			return that.Sub2Resource;
		};

		p.capFirstLetter = function (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		};

		p.orderPlaylistWithDefaultFirst = function (playlistArr) {
			var that = this;
			var vv = {};

			vv.arr = playlistArr;
			vv.propName = 'status';
			vv.propVal = 'P';

			vv.ndx = that.toolbox.getIndexOfFirstMatchingObject(vv.arr, vv.propName, vv.propVal);

			if (vv.ndx > 0) {
				vv.uprootedElm = vv.arr[vv.ndx];
				vv.voidd = vv.arr.splice(vv.ndx, 1);
				vv.voidd = vv.arr.splice(0, 0, vv.uprootedElm);
			}
			return vv.arr;
		};
		//}

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{

		p.getStations = function callee$1$0(filter) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getStations');
						that = this;
						vv = {};

						vv.filter = that.capFirstLetter(filter);
						vv.method = 'get' + vv.filter + 'Stations';
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.MainResource[vv.method]());

					case 7:
						vv.datas = context$2$0.sent;
						return context$2$0.abrupt('return', vv.datas.$promise);

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getStation = function callee$1$0(id) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getStation');
						that = this;
						vv = {};
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.MainResourceAlt.getActiveStation({ id: id }));

					case 5:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 7:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getPlaylists = function callee$1$0(id, filter) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getPlaylists');
						that = this;
						vv = {};

						vv.filter = that.capFirstLetter(filter);
						vv.method = 'get' + vv.filter + 'Playlists';
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.SubResource[vv.method]({ id: id }));

					case 7:
						vv.datas = context$2$0.sent;
						context$2$0.next = 10;
						return _regeneratorRuntime.awrap(vv.datas.$promise);

					case 10:
						vv.playlist = context$2$0.sent;

						vv.playlist = that.orderPlaylistWithDefaultFirst(vv.playlist);

						return context$2$0.abrupt('return', vv.playlist);

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getPlaylist = function callee$1$0(id, subId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getPlaylist - id, subId: ', id, subId);
						that = this;
						vv = {};
						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.SubResource.getPlaylist({ id: id, subId: subId }));

					case 5:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 7:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getPlaylistTracks = function callee$1$0(id, subId, filter) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getPlaylistTracks');
						that = this;
						vv = {};

						vv.filter = vv.filter ? that.capFirstLetter(filter) : '';
						vv.method = 'get' + vv.filter + 'Tracks';
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.Sub2Resource[vv.method]({ modelSubtype: 'playlists', id: id, subId: subId }));

					case 7:
						vv.datas = context$2$0.sent;
						return context$2$0.abrupt('return', vv.datas.$promise);

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p.getTrack = function callee$1$0(id, subId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.dog('>>> In StationsServiceClass.getPlaylistTracks - id (stationId) / subId (trackId): ', id, subId);

						that = this;
						vv = {};

						vv.method = 'getTrack';
						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that.SubResource[vv.method]({ id: id, subId: subId }));

					case 6:
						vv.datas = context$2$0.sent;
						return context$2$0.abrupt('return', vv.datas.$promise);

					case 8:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: BannerServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

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

		p._setup = function () {
			var that = this;
			that.StationBannerResource = that._bgetStationBannerResource();
		};

		p._bgetStationBannerResource = function () {
			var that = this;
			var vv = {};

			if (!that.StationBannerResource) {

				that.StationBannerResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/adapis/:modelType/:stationId/banners/active?device=web', {
					modelType: 'stations'

				}, {
					getBanners: {
						stationId: '@stationId',
						cache: true,
						method: 'get',
						isArray: false
					}
				});
			}

			return that.StationBannerResource;
		};

		//}

		//	================================================================
		//	PUBLIC/PRIVATE METHODS:
		//{

		p.getStationBanners = function callee$1$0(stationId) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.stationId = stationId;

						context$2$0.next = 5;
						return _regeneratorRuntime.awrap(that.StationBannerResource.getBanners({ stationId: vv.stationId }));

					case 5:
						vv.data = context$2$0.sent;
						return context$2$0.abrupt('return', vv.data.$promise);

					case 7:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 297 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: GenresServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

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

			if (!that.MainResource) {
				that.MainResource = that.resourceNg(
				/// ALT: 'http://pi-node.nanocosm.com:3000/metadata/:modelType/:id',
				'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:modelType/:id', {
					modelType: 'genres',
					id: '@id'
				}, {
					getListings: {
						cache: true,
						method: 'get',
						isArray: true
					}
				});
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
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getListings();

			return vv.datas;
		}
		//}

		return ClassConstructor;
	})();

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: UsersServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

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
		function _bgetMainResource(accessToken, accessTokenType) {
			var that = this;

			if (!that.MainResource) {
				that.MainResource = that.resourceNg(
				/// ALT: 'http://pi-node.nanocosm.com:3000/metadata/:modelType/:id',
				'http://jco--datas--test.jerryls.com/(chopps-dynm)/data/:modelType/:id/?:q1Name:q1Val', {
					modelType: 'users',
					id: '@id',
					q1Name: '@q1Name',
					q1Val: '@q1Val'
				}, {
					getListings: {
						cache: true,
						method: 'get',
						isArray: true
					},
					getItem: {
						cache: true,
						method: 'get',
						isArray: false
					},
					getFavoriteStations: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { q1Name: 'filter=', q1Val: 'favoriteStations' }
					},
					getRecentStations: {
						cache: true,
						method: 'get',
						isArray: true,
						params: { q1Name: 'filter=', q1Val: 'recentStations' },
						headers: { 'Authorization': 'Live365 123456789' }
					},
					startRemoteSessionWithAccessToken: {
						headers: { 'FacebookAccessToken': accessToken },
						cache: false,
						method: 'post',
						isArray: false

					}
				});
			}

			return that.MainResource;
		}

		p._bgetMemberResource = function (accessToken, accessTokenType) {
			var that = this;

			if (!that.MemberResource) {

				if (accessTokenType === 'facebook') {
					var accessTokenHeaderParamName = 'facebookaccesstoken';
					var headersObj = {};
					headersObj[accessTokenHeaderParamName] = accessToken;
				}

				that.MemberResource = that.resourceNg(aaGlobalee.ourServicesProtocalHost + ':443/apis/:modelType/:modelSubtype', {
					modelType: 'members',
					modelSubtype: '@modelSubtype'
				}, {
					registerWithToken: {
						headers: headersObj,
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelSubtype: accessTokenType }
					},
					registerWithIdfier: {
						email: '@email',
						password: '@password',
						firstName: '@firstName',
						lastName: '@lastName',
						yearOfBirth: '@yearOfBirth',
						gender: '@gender',
						name: '@name',
						cache: false,
						method: 'post',
						isArray: false,
						params: { modelSubtype: '' }
					}
				});
			}

			return that.MemberResource;
		};

		p._getRecentStations = function (id) {
			var that = this;
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getRecentStations({ id: id });
			console.dog('>>> FROM _getRecentStations - vv.datas: ', vv.datas);
			return vv.datas.$promise;
		};

		p._registerWithToken = function callee$1$0(accessToken, accessTokenType) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.Resource = that._bgetMemberResource(accessToken, accessTokenType);
						vv.datas = vv.Resource.registerWithToken({ foo: 'bar' });

						console.dog('>>> FROM _registerWithToken - vv.datas: ', vv.datas);
						return context$2$0.abrupt('return', vv.datas.$promise);

					case 6:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		p._registerWithIdfier = function callee$1$0(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						vv.name = firstName + ' ' + lastName;

						console.dog('>>> FROM _registerWithIdfier - RUNNING');

						vv.Resource = that._bgetMemberResource();
						vv.datas = vv.Resource.registerWithIdfier({ email: loginIdfier, password: password, firstName: firstName, lastName: lastName, yearOfBirth: yearOfBirth, gender: gender, name: vv.name });

						console.dog('>>> FROM _registerWithIdfier - vv.datas: ', vv.datas);
						return context$2$0.abrupt('return', vv.datas.$promise);

					case 8:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};
		//}(loginIdfier, password, firstName)

		//	================================================================
		//	PUBLIC METHODS:
		//{

		p.getListings = getListings;
		function getListings() {
			var that = this;
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getListings();
			return vv.datas;
		}

		p.getMainItem = getMainItem;
		function getMainItem(id) {
			var that = this;
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getItem({ id: id });
			return vv.datas;
		}

		p.getFavoriteStations = getFavoriteStations;
		function getFavoriteStations(id) {
			var that = this;
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getFavoriteStations({ id: id });
			return vv.datas;
		}

		p.zz_getRecentStations = function (id) {
			var that = this;
			var vv = {};
			vv.MainResource = that._bgetMainResource();
			vv.datas = vv.MainResource.getRecentStations({ id: id });
			return vv.datas;
		};

		p.getMultiRecentStations = function callee$1$0(id) {
			var that, promise1, promise2, result;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;

						console.dog('>>> FROM getRecentStationsFnc - RUNNING');
						context$2$0.prev = 2;
						promise1 = that._getRecentStations(id);
						promise2 = that._getRecentStations(id);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(that.qNg.all([promise1, promise2]));

					case 7:
						result = context$2$0.sent;

						console.dog('>>> FROM getRecentStationsFnc - SUCCESS ', result);
						return context$2$0.abrupt('return', result);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0['catch'](2);

						console.dog('>>> FROM getRecentStationsFnc - FAILED - e:', context$2$0.t0);
						return context$2$0.abrupt('return', context$2$0.t0);

					case 16:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[2, 12]]);
		};

		p.getRecentStations = function callee$1$0(id) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog('>>> FROM getRecentStationsFnc - RUNNING');
						context$2$0.prev = 3;

						vv.promise1 = that._getRecentStations(id);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM getRecentStationsFnc - SUCCESS ', vv.result);
						return context$2$0.abrupt('return', vv.result);

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0['catch'](3);

						console.dog('>>> FROM getRecentStationsFnc - FAILED - e:', context$2$0.t0);
						return context$2$0.abrupt('return', context$2$0.t0);

					case 16:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[3, 12]]);
		};

		p.registerWithToken = function callee$1$0(accessToken, accessTokenType) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog('>>> FROM registerWithToken - RUNNING');

						context$2$0.prev = 3;
						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(that._registerWithToken(accessToken, accessTokenType));

					case 6:
						vv.result = context$2$0.sent;
						return context$2$0.abrupt('return', { status: 'succeeded' });

					case 10:
						context$2$0.prev = 10;
						context$2$0.t0 = context$2$0['catch'](3);
						return context$2$0.abrupt('return', { status: 'failed', error: context$2$0.t0 });

					case 13:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[3, 10]]);
		};

		p.registerWithIdfierAsync = function callee$1$0(loginIdfier, password, firstName, lastName, yearOfBirth, gender) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};
						context$2$0.prev = 2;

						console.dog('>>> FROM registerWithIdfierAsync - RUNNING');

						vv.promise1 = that._registerWithIdfier(loginIdfier, password, firstName, lastName, yearOfBirth, gender);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM registerWithIdfierAsync - SUCCESS ', vv.result);
						vv.returnn = { status: 'succeeded', result: vv.result };
						context$2$0.next = 16;
						break;

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0['catch'](2);

						console.dog('>>> FROM registerWithIdfierAsync - FAILED - errorr:', context$2$0.t0);
						vv.returnn = { status: 'failed', errorr: context$2$0.t0 };

					case 16:
						return context$2$0.abrupt('return', vv.returnn);

					case 17:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[2, 12]]);
		};

		//}

		return ClassConstructor;
	})();

	///console.dog('>>> FROM logInToRemoteSessionAsync - FAILED - e:', e);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: AccessServiceClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	var _regeneratorRuntime = __webpack_require__(15)['default'];

	module.exports = (function () {

		function ClassConstructor(sessionService, usersService) {
			var that = this;
			that.sessionService = sessionService;
			that.usersService = usersService;
			that._setup();
			var breakpoint = 'a';
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = function () {
			var that = this;
		};

		//}

		//	================================================================
		//	PUBLIC METHODS:
		//{

		p.connectWithToken = function callee$1$0(accessToken, accessTokenType) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog('>>> FROM connectWithToken - START / RUNNING');
						context$2$0.prev = 3;

						vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType);
						context$2$0.next = 7;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 7:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM connectWithToken - PNT-A - result: ', vv.result);
						vv.sessionId = that.sessionService.getSessionIdForRemote();
						console.dog('>>> FROM connectWithToken - PNT-A2 - vv.sessionId : ', vv.sessionId);
						return context$2$0.abrupt('return', vv.sessionId);

					case 14:
						context$2$0.prev = 14;
						context$2$0.t0 = context$2$0['catch'](3);
						context$2$0.prev = 16;

						console.dog('>>> FROM connectWithToken - PNT-B-0 - usersService | error: ', that.usersService, context$2$0.t0);
						vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType);
						context$2$0.next = 21;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 21:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM connectWithToken - PNT-B - result: ', vv.result);

						context$2$0.prev = 23;

						vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType);
						context$2$0.next = 27;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 27:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM connectWithToken - PNT-C - result: ', vv.result);
						vv.sessionId = that.sessionService.getSessionIdForRemote();
						console.dog('>>> FROM connectWithToken - PNT-C2 - vv.sessionId : ', vv.sessionId);
						return context$2$0.abrupt('return', vv.sessionId);

					case 34:
						context$2$0.prev = 34;
						context$2$0.t1 = context$2$0['catch'](23);

						console.dog('>>> FROM connectWithToken - Pnt 2nd auth fail - error:', context$2$0.t1);
						return context$2$0.abrupt('return', context$2$0.t1);

					case 38:
						context$2$0.next = 44;
						break;

					case 40:
						context$2$0.prev = 40;
						context$2$0.t2 = context$2$0['catch'](16);

						console.dog('>>> FROM connectWithToken - Pnt register fail - error:', context$2$0.t2);
						return context$2$0.abrupt('return', context$2$0.t2);

					case 44:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[3, 14], [16, 40], [23, 34]]);
		};

		p.connectWithToken__ = function callee$1$0(accessToken, accessTokenType) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog('>>> FROM connectWithToken - RUNNING');

						vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType);
						context$2$0.next = 6;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 6:
						vv.result = context$2$0.sent;

						console.dog('>>> FROM connectWithToken - PNT-A - result: ', result);
						vv.sessionId = that.sessionService.getSessionIdForRemote();

						/*
	     			if ( ! vv.sessionId ) {
	     				console.dog('>>> FROM connectWithToken - PNT-B-0 - usersService: ', that.usersService);
	     				vv.promise1 = that.usersService.registerWithToken(accessToken, accessTokenType)
	     				vv.result = await vv.promise1;
	     				
	     				console.dog('>>> FROM connectWithToken - PNT-B - result: ', vv.result);
	     				
	     
	     				console.dog('>>> FROM connectWithToken - PNT-C-0');
	     				vv.promise1 = that.sessionService.startRemoteSessionWithAccessTokenAsync(accessToken, accessTokenType)
	     				vv.voidd = await vv.promise1;
	     				
	     				console.dog('>>> FROM connectWithToken - PNT-C');
	     				
	     				vv.sessionId = that.sessionService.getSessionIdForRemote();
	     			}
	     */

					case 9:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		};

		//}

		return ClassConstructor;
	})();

/***/ },
/* 300 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: DateTimeFiltersClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function ClassConstructor() {
			var that = this;
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC /PRIVATE METHODS:
		//{	

		// Time Format Method	
		p.millisToHhMmSs = p._msToHhMmSs = function (duration) {
			var milliseconds = parseInt(duration % 1000 / 100),
			    seconds = parseInt(duration / 1000 % 60),
			    minutes = parseInt(duration / (1000 * 60) % 60),
			    hours = parseInt(duration / (1000 * 60 * 60) % 24),
			    HhMmSs = undefined;

			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			HhMmSs = hours + ":" + minutes + ":" + seconds;

			return HhMmSs;
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		//}

		return ClassConstructor;
	})();

/***/ },
/* 301 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: MiscFiltersClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	'use strict';

	module.exports = (function () {

		function ClassConstructor() {
			var that = this;
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC /PRIVATE METHODS:
		//{	

		// Output if equal method
		p.ifThis = p._msToHhMmSs = function (ifTrueReturnThis, val1, test, val2, elseReturnThis) {
			elseReturnThis = elseReturnThis || '';
			if (test === 'eq') {
				return val1 === val2 ? ifTrueReturnThis : elseReturnThis;
			} else if (test === 'gt') {
				return val1 > val2 ? ifTrueReturnThis : elseReturnThis;
			} else if (test === 'gte') {
				return val1 >= val2 ? ifTrueReturnThis : elseReturnThis;
			} else if (test === 'lt') {
				return val1 < val2 ? ifTrueReturnThis : elseReturnThis;
			} else if (test === 'lte') {
				return val1 <= val2 ? ifTrueReturnThis : elseReturnThis;
			} else {
				return elseReturnThis;
			}
		};

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		//}

		return ClassConstructor;
	})();

/***/ },
/* 302 */
/***/ function(module, exports) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: StringFiltersClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	module.exports = (function () {

		function ClassConstructor() {
			var that = this;
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC /PRIVATE METHODS:
		//{	

		//{	Date-Time format filters.
		p.millisToHhMmSs = p._msToHhMmSs = function (duration) {
			var milliseconds = parseInt(duration % 1000 / 100),
			    seconds = parseInt(duration / 1000 % 60),
			    minutes = parseInt(duration / (1000 * 60) % 60),
			    hours = parseInt(duration / (1000 * 60 * 60) % 24),
			    HhMmSs = undefined;

			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			HhMmSs = hours + ":" + minutes + ":" + seconds;

			return HhMmSs;
		};
		//}

		//{	String Filters.
		p.spacesToDashes = p._spacesToDashes = function (stringg) {
			stringg = stringg.replace(/\s+/g, "-");
			return stringg;
		};
		//}

		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{	

		//}

		return ClassConstructor;
	})();

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * *********************************************************************
	 * *********************************************************************
	 * *********************************************************************
	 * File: PgMediatorClass.js
	 * *********************************************************************
	 * *********************************************************************
	 */
	"use strict";

	var _regeneratorRuntime = __webpack_require__(15)["default"];

	module.exports = (function () {

		var aa = {};
		aa.refNameSelf = "PgMediatorClass__for_SPA_Pg";

		function ClassConstructor() {
			var that = this;
			that._setup();
			var breakpoint = "a";
		}

		var p = ClassConstructor.prototype;

		//	================================================================
		//	PUBLIC METHODS:
		//{	
		p.receiveNotice = function (pkg) {
			var that = this;
			var vv = {};
			console.dog(">>> !!! >>> !!! >>> -- THIS IS " + aa.refNameSelf + " - ***receiveNotice START *** with pkg: ", pkg);

			vv.handleNoticeReturn = that._handleNotice(pkg);

			console.dog(">>> !!! >>> !!! >>> -- THIS IS " + aa.refNameSelf + " - ***receiveNotice END *** with pkg: ", pkg);

			return vv.handleNoticeReturn;
		};
		//}

		//	================================================================
		//	PRIVATE METHODS:
		//{

		p._setup = function (myName, cfg) {
			var that = this;
			console.dog(">>> " + aa.refNameSelf + " - _setup. ");

			that._config();
		};

		p._config = function () {
			var that = this;
			console.dog(">>> " + aa.refNameSelf + " - _config. ");

			that.cfg = {};
			that.cfg.return_PlayerPgMediator_receiveNotice = function () {
				return document.getElementsByClassName("PlayerIframe")[0].contentWindow.aaGlobalee.pgMediator;
			};
		};

		p._handleNotice = function (pkg) {
			var that = this;
			var vv = {};
			try {
				console.dog(">>> " + aa.refNameSelf + " -  _handleNotice: ", pkg.notice.noticeName, pkg);
				vv.noticeName = pkg.notice.noticeName;
				if (that["_run__" + vv.noticeName + "__Xnt"]) {
					vv.noticeTransactionName = "_run__" + vv.noticeName + "__Xnt";
				} else if (that["_run__" + vv.noticeName + "__Nnt"]) {
					vv.noticeTransactionName = "_run__" + vv.noticeName + "__Nnt";
				}

				vv.transReturn = that[vv.noticeTransactionName](pkg);

				return vv.transReturn;
			} catch (errorr) {
				console.dog(">>> " + aa.refNameSelf + " -  _handleNotice - ERRORR: ", errorr, pkg.notice.noticeName, pkg);

				return "Failed";
			}
		};

		p._executeTarget = function (targetMethod, methodArgs) {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " - EXECUTE TARGET: ", targetMethod, methodArgs);
			if (targetMethod) {
				vv.method = targetMethod;
				vv.methodReturn = vv.method(methodArgs);
			} else {
				console.dog(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE TARGET.");
			}
			return vv.methodReturn;
		};

		p._executeNg = function (targetSelector, targetMethodName, methodArgs) {
			var that = this;
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " - EXECUTE NG: ", targetSelector, targetMethodName, methodArgs);
			if (angular.element(document.querySelector(targetSelector)).scope()) {
				vv.thisc = angular.element(document.querySelector(targetSelector)).scope().thisc;
				vv.method = vv.thisc[targetMethodName];
				vv.methodReturn = vv.method.apply(vv.thisc, methodArgs);
			} else {
				console.dog(">>> " + aa.refNameSelf + " -  COULD NOT EXECUTE NG.");
			}
			return vv.methodReturn;
		};

		p._executeNgAsync = function callee$1$0(targetSelector, targetMethodName, methodArgs) {
			var that, vv;
			return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						that = this;
						vv = {};

						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " - EXECUTE-NG: ", targetSelector, targetMethodName, methodArgs);

						if (!angular.element(document.querySelector(targetSelector)).scope()) {
							context$2$0.next = 21;
							break;
						}

						vv.thisc = angular.element(document.querySelector(targetSelector)).scope().thisc;
						vv.method = vv.thisc[targetMethodName];
						vv.promise1 = vv.method.apply(vv.thisc, methodArgs);
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(vv.promise1);

					case 9:
						vv.methodReturn = context$2$0.sent;
						context$2$0.prev = 10;

						console.dog(">>> " + aa.refNameSelf + " _executeNgAsync - SUCCESS - methodReturn: ", vv.methodReturn);
						return context$2$0.abrupt("return", vv.methodReturn);

					case 15:
						context$2$0.prev = 15;
						context$2$0.t0 = context$2$0["catch"](10);

						console.dog(">>> " + aa.refNameSelf + " - FAILED - e:", context$2$0.t0);
						return context$2$0.abrupt("return", context$2$0.t0);

					case 19:
						context$2$0.next = 23;
						break;

					case 21:
						console.dog(">>> " + aa.refNameSelf + " / " + that.cfg.refNameSelf + " -  COULD NOT EXECUTE-NG.");
						return context$2$0.abrupt("return", undefined);

					case 23:
					case "end":
						return context$2$0.stop();
				}
			}, null, this, [[10, 15]]);
		};

		p._genUniqueToken = function () {
			var vv = {};
			console.dog(">>> " + aa.refNameSelf + " -  _genUniqueToken.");
			/***Temporal ordinal prefix part */
			vv.milliesSince1970 = Date.now || function () {
				return +new Date();
			};
			vv.milliPart = vv.milliesSince1970();

			/***Random suffix part */
			vv.minNum = 100000000;
			vv.maxNum = 999999999;
			vv.randomPart = Math.round(vv.minNum + Math.random() * (vv.maxNum - vv.minNum));

			/***Combine the prefix parts and suffix parts into the final string */
			vv.uTkn = "_" + vv.milliPart + "_" + vv.randomPart;

			/***Return the unique token */
			return vv.uTkn;
		};
		//}

		//	================================================================
		//	E(X)TERNAL Notice Transactions: (Xnt) 
		//	...These are for notices that originate *outide* of mediator.
		//{
		p._run__Player_changeState__Xnt = function (pkg) {
			var that = this;
			var vv = {};

			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__Player_changeState__Xnt - pkg", pkg);

			vv.exeReturn = that._executeNgAsync.apply(that, [".AppVcc", "handoffToMediator", [pkg]]);
			return vv.rtnReturn;
		};

		p._run__CurrentTrack_playStarted__Xnt = function (pkg) {
			var that = this;
			var vv = {};

			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__CurrentTrack_playStarted__Xnt - pkg", pkg);

			vv.exeReturn = that._executeNgAsync.apply(that, [".AppVcc", "handoffToMediator", [pkg]]);
			return vv.rtnReturn;
		};

		p._run__ShareView_requestedFromPlayer__Xnt = function (pkg) {
			var that = this;
			var vv = {};

			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__ShareView_requestedFromPlayer__Xnt - pkg", pkg);

			vv.exeReturn = that._executeNgAsync.apply(that, [".AppVcc", "handoffToMediator", [pkg]]);
			return vv.rtnReturn;
		};

		p._run__TracksView_requestedFromPlayer__Xnt = function (pkg) {
			var that = this;
			var vv = {};

			console.dog(">>> " + aa.refNameSelf + " -  - !! START: _run__TracksView_requestedFromPlayer__Xnt - pkg", pkg);

			vv.exeReturn = that._executeNgAsync.apply(that, [".AppVcc", "handoffToMediator", [pkg]]);
			return vv.rtnReturn;
		};
		//}

		//	================================================================
		//	I(N)TERNAL Notice Transactions: (Nnt) 
		//	...These are for notices that originate *inside* of mediator.
		//{
		p._run__zClicked_PsuedoPlayStationBtn__Nnt = function (pkg) {};
		//}

		//	================================================================
		//	ROUTINES: (Rtn)  
		//	...These are basically "partial transactions", and/or
		//	...simple transactions around executing just one method.
		//{

		p._applyCssNamespacingToHolders__Rtn = function () {
			var that = this;
			var vv = {};

			vv.exeReturn = that._executeNg.apply(that, [".StateContainerVcc", "setAbstractStatesCssNamesVar", [vv.cssNamespacePerUiStates]]);
		};
		//}

		return ClassConstructor;
	})();

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(305);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/OuterHolderVcc/ui_states/ViewportWithPlayerUSAM/ViewportWithPlayerUSAM_baseStyle.styl", function() {
			var newContent = require("!!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/css-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Ops/NodeModules/node_modules/stylus-loader/index.js!/users/webjerry/MyWebsites/Live05/ForClientSide/Source/Specific/vcomps/OuterHolderVcc/ui_states/ViewportWithPlayerUSAM/ViewportWithPlayerUSAM_baseStyle.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*\n * *********************************************************************\n * *********************************************************************\n * *********************************************************************\n * File: ViewportWithPlayerUSAM_baseStyle.styl\n * *********************************************************************\n * *********************************************************************\n */\n.ViewportWithPlayerUSAM .OuterHolder_DnN2Slot {\n/* Layout */\n  display: block;\n/* Style */\n  -webkit-box-shadow: 0 -3px 6px #fff;\n  box-shadow: 0 -3px 6px #fff;\n}\n", ""]);

/***/ }
/******/ ]);