angular.module('dataRetrieval',[])
.service('customHttpService',['$http',function($http){
	this.handleCheck=function(handle){
		let url = 'https://codeforces.com/api/user.info?handles='+handle;
		let resjson={};
		let retval='';
		$http.get(url)
		.then(function found(response){
			resjson=response.data;
			retval=resjson["status"];
		}, function notFound(response){
			retval='FAILED';
		});
		return retval;
	};
}]);
