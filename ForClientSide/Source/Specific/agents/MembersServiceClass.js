/*
 * *********************************************************************
 * *********************************************************************
 * *********************************************************************
 * File: MembersServiceClass.js
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
			that.ForgotPasswordResource = that._bgetForgotPasswordResource();
			that.ForgotPasswordResetResource = that._bgetForgotPasswordResetResource();
			that.VerifyMemberByCodeResource = that._bgetVerifyMemberByCodeResource();
		}

		p._bgetForgotPasswordResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.ForgotPasswordResource ) { 
				
				that.ForgotPasswordResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype/:modelSubtype2/:modelSubtype3',
					{
						modelType:'members',
						modelSubtype:'@modelSubtype',
						modelSubtype2:'@modelSubtype2',
						modelSubtype3:'@modelSubtype3'
					},
					{
						forgotPasswordItem: { 
							email: '@email',
							cache: false, 
							method: 'post', 
							isArray: false,
							params: {modelSubtype: 'password', modelSubtype2: 'reset', modelSubtype3: 'email'}
						}
					}
				);
			}

			return that.ForgotPasswordResource;
		}

		p._bgetForgotPasswordResetResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.ForgotPasswordResetResource ) { 
				
				that.ForgotPasswordResetResource = that.resourceNg(
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:modelSubtype/:modelSubtype2',
					{
						modelType:'members',
						modelSubtype:'@modelSubtype',
						modelSubtype2:'@modelSubtype2'
					},
					{
						forgotPasswordResetItem: { 
							password: '@password',
							verification_code: '@verification_code',
							cache: false, 
							method: 'put', 
							isArray: false,
							params: {modelSubtype: 'password', modelSubtype2: 'reset'}
						}
					}
				);
			}

			return that.ForgotPasswordResetResource;
		}

		
		p._bgetVerifyMemberByCodeResource = function() {
			var that = this;
			var vv = {}

			if ( ! that.VerifyMemberByCodeResource ) { 
				
				that.VerifyMemberByCodeResource = that.resourceNg (
					aaGlobalee.ourServicesProtocalHost+':443/apis/:modelType/:verificationCode',
					{
						modelType:'members',
						verificationCode:'@verificationCode'
					},
					{
						verifyMemberByCode: { 
							cache: false, 
							method: 'put', 
							isArray: false,
							params: {}
						}
					}
				);
			}

			return that.VerifyMemberByCodeResource;
		}		
		
		
		
	//}

	
	//	================================================================
	//	PUBLIC/PRIVATE METHODS:
	//{

		p.forgotPasswordItem = async function(email) {

			var that = this;
			var vv = {}

			vv.email = email;

			vv.data = await that.ForgotPasswordResource.forgotPasswordItem({email: vv.email});

			return vv.data.$promise
		}


		p.forgotPasswordResetItem = async function(password, verification_code) {
			
			var that = this;
			var vv = {}

			vv.password = password;
			vv.verification_code = verification_code;

			try{
				vv.data = await that.ForgotPasswordResetResource.forgotPasswordResetItem({password: vv.password, verification_code: vv.verification_code});
			}
			catch(err){
				console.dog(">>> passwordReset - vv.remotePasswordReset error: ", err);
			}
			finally{
				if (typeof vv.data !== 'undefined' && vv.data && typeof vv.data.$promise !== 'undefined' && vv.data.$promise){
					return vv.data.$promise;
				}else{
					return 'done';
				}
			}
		}
		
		
		p.verifyMemberWithCode = p._verifyMemberWithCode = async function(verificationCode){
			var that = this;
			var vv = {}

			try{
				vv.resultPromise = await that.VerifyMemberByCodeResource.verifyMemberByCode(
					{verificationCode: verificationCode }
				);
				
				vv.resultP = await vv.resultPromise
				vv.result = await vv.resultP.$promise
				
				console.dog(">>> verifyMemberWithCode - vv.result: ", vv.result)
				vv.resultObj = { status: "succeeded" }
			}
			catch(errorr){
				console.dog(">>> verifyMemberWithCode - errorr: ", errorr)
				vv.resultObj = { status: "failed", errorr: errorr }
			}
			
			return vv.resultObj

		}
		

	//}

	return ClassConstructor;
})();
