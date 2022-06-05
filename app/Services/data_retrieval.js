angular.module('dataRetrieval',[])
.service('customHttpService',['$http',function($http){
	this.handleCheck=function(handle,callBack){
		let url = 'https://codeforces.com/api/user.info?handles='+handle;
		$http.get(url)
		.then(function (response){
			if(response.status==200)
			{
				callBack(response.data["status"]);
			}
		}, function (response){
			if(response.status==400)
			{
					callBack("");
			}
		});
	};
}]);
