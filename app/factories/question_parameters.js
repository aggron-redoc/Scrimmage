angular.module('questionParameters',[])
.factory('getQuestionParameters',function(){
	parameters=function(howManyQuestions){
		singlejson={
			'tags':'',
			'difficulty':[]
		};
		allQuestionData=[];
		for(var i=1;i<=howManyQuestions;i++)
			allQuestionData.push(singlejson);
		return allQuestionData;
	};
	return {parameters};
});
