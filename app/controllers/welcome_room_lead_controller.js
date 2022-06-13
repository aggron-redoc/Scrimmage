angular.module('welcomeRoomLead',['ngAnimate','codeforcesTags','questionParameters'])
.controller('welcomeRoomLeadController',function($scope,$location, $routeParams,getCodeforcesTags,getQuestionParameters){
	var t=function(){
		l=$location.absUrl();
		l=l.slice(0,l.lastIndexOf($routeParams.participant)-1);
		return l;
	}
	$scope.isOpen=false;
	$scope.closeBox=function(event){
		$scope.isOpen=!$scope.isOpen;
		$scope.$apply();
	};
	$scope.closeBox2=function(event){
		$scope.isOpen2=!$scope.isOpen2;
		$scope.$apply();
	};
	$scope.openBox=function(){
		$scope.isOpen=!$scope.isOpen;
	};
	$scope.openBox2=function(){
		$scope.isOpen2=!$scope.isOpen2;
	};
	$scope.url=t();
	$scope.set=false;
	$scope.questionData='';
	$scope.noq='';
	$scope.time='';
	$scope.selectedTags=[];
	$scope.selectedTag='';
	$scope.totalTags=getCodeforcesTags.tags;
	$scope.readyState=false;
	$scope.addToSelected=function(){};
	$scope.startContest=function(){};
	$scope.setQuestionData=function(){
		$scope.set=true;
		$scope.questionData=getQuestionParameters.parameters($scope.noq);
	}
});
