angular.module('routeMaker',['ngRoute','pcpHome','participantGateway','welcomeRoomLead'])
.config(function($routeProvider)
{
	$routeProvider
	.when("/",{
		templateUrl : "./Resources/pcp_home.htm",
		controller  : "pcpHomeController"
	})
	.when("/:roomLead",{
		templateUrl : "./Resources/participant_gateway.html",
		controller : "participantGatewayController"
	})
	.when("/:roomLead/:participant",{
		templateUrl: "./Resources/welcome_room_lead.html",
		controller: "welcomeRoomLeadController"
	})
	.when("/:roomLead/:participant/pmode",{
		templateUrl: "./Resources/welcome_participant.html",
		controller: "welcomeRoomLeadController"
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
