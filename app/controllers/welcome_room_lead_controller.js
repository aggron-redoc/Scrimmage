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
	$scope.questionData={};
	$scope.noq='';
	$scope.time='';
	$scope.selectedTag='';
	$scope.totalTags=getCodeforcesTags.tags;
	$scope.readyState=false;
	$scope.addToSelected=function(x,y)
	{
		console.log(y);
		if(x.length!=0 && !y.includes(x))
		{
				y.push(x);
				//console.log(y);
		}
	};
	$scope.removeFromQuestionData=function(x,y)
	{
		// console.log(x);
		// console.log(y);
		y.splice(y.indexOf(x),1);
		// console.log(y);
		//console.log($scope.questionData);
	}
	$scope.startContest=function(){};
	$scope.setQuestionData=function(){
		if($scope.time!='' && $scope.time!=0 && $scope.noq!='' && $scope.noq!=0)
		{
			$scope.set=true;
			$scope.questionData=getQuestionParameters.parameters($scope.noq);
			//console.log($scope.questionData[0]==$scope.questionData[1]);
		}
	}
});
