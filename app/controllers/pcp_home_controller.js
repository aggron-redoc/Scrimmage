angular.module('pcpHome',[])
.controller('pcpHomeController',function($scope, $window){
	$scope.isOpen=false;
	$scope.closeBox=function(event){
		$scope.isOpen=!$scope.isOpen;
		$scope.$apply();
	};
	$scope.openBox=function(){
		$scope.isOpen=!$scope.isOpen;
	}
});
