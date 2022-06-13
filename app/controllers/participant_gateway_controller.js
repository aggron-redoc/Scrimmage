angular.module('participantGateway',['dataRetrieval'])
.controller('participantGatewayController',function($scope, $window, $location,$q,$routeParams,customHttpService){
	$scope.isOpen=false;
	$scope.cfid='';
	$scope.resultToggler=function(){
		$scope.result='OK';
	};
	$scope.result='OK';
	resultGiver=function(result){
		$scope.result=result;
		console.log($scope.result);
	};
	$scope.closeBox=function(event){
		$scope.isOpen=!$scope.isOpen;
		$scope.$apply();
	};
	$scope.openBox=function(){
		$scope.isOpen=!$scope.isOpen;
	};
	$scope.username='';
	$scope.usernameResult='';
	usernameFind=function(result){
		$scope.usernameResult=result;
	};
	$scope.authenticate=function(){
		let promise1=customHttpService.handleCheck($scope.cfid,resultGiver);
		let promise2=customHttpService.dataGather('http://127.0.0.1:3000/'+$scope.username,usernameFind);
		$q.all([promise1,promise2]).then(function(){
			if($scope.usernameResult=='' && $scope.result=='OK')
				 $location.path('/' + $routeParams.roomLead + '/' + $scope.username + '/' + 'pmode');
		});
	};
});
