angular.module('questionParameters',[])
.factory('getQuestionParameters',function(){
	singlejson=function(){
		this.tags=[];
		this.difficulty=[];
	};
	parameters=function(howManyQuestions){
		allQuestionData=[];
		for(var i=1;i<=howManyQuestions;i++)
			allQuestionData.push(new singlejson);
		return allQuestionData;
	};
	return {parameters};
});
