angular.module('routeMaker',['ngRoute','pcpHome'])
.config(function($routeProvider)
{
	$routeProvider
	.when("/",{
		templateUrl : "./Resources/pcp_home.htm",
		controller  : "pcpHomeController"
	})
	.when("/:roomLead",{
		templateUrl : "./Resources/participant_gateway.html"
	})
	.when("/:roomLead/:participant",{
		templateUrl: "./Resources/welcome.html"
	})
	.when("/:roomLead/:participant/contest",{
		templateUrl: "./Resources/start_contest.html"
	})
	.when("/:roomLead/:participant/contest/leaderboard",{
		templateUrl: "./Resources/leaderboard.html"
	})
	.otherwise({
        redirectTo: '/'
    });
});
