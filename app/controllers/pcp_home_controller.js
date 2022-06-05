angular.module('pcpHome',['dataRetrieval'])
.controller('pcpHomeController',['customHttpService',function($scope, $window,customHttpService){
	$scope.isOpen=false;
	$scope.cfid='';
	$scope.dialogVisibility=false;
	$scope.dialogVisibilityToggler=function(){
		$scope.dialogVisibility=!$scope.dialogVisibility;
	}
	$scope.handleCheck=function(){
		let result=customHttpService.handleCheck(cfid);
		if(result!="OK")
			$scope.dialogVisibilityToggler();
	}
	$scope.closeBox=function(event){
		$scope.isOpen=!$scope.isOpen;
		$scope.$apply();
	};
	$scope.openBox=function(){
		$scope.isOpen=!$scope.isOpen;
	}
}]);
