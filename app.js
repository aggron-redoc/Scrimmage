app=angular.module('navigator',['ngRoute']);
app.config(function($routeProvider)
{
	$routeProvider
	.when("/",{
		templateUrl : "./Resources/pcp_home.htm"
	})
	.when("/:roomLead",{
		templateUrl : "./Resources/participant_gateway.html"
	})
	.when("/:roomLead/:participant",{
		templateUrl: "./Resources/welcome.html"
	})
	.when("/:roomLead")
})
