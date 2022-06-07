angular.module('welcomeRoomLead',['ngAnimate'])
.controller('welcomeRoomLeadController',function($scope,$location, $routeParams){
	var t=function(){
		l=$location.absUrl();
		l=l.slice(0,l.lastIndexOf($routeParams.participant)-1);
		return l;
	}
	$scope.url=t();
	$scope.set=false;
});
