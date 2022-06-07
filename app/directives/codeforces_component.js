angular.module('codeforcesComponent',[])
.component('codeforcesLink',{
	template:`<div class="powby">
		<h3>Powered by</h3>
		<a class="codeforces" onclick="window.open(this.href,'_blank');return false;" href="https://codeforces.com/" target="_blank"><img class="cflink" src="./Resources/images/code-forces.svg"></a>
	</div>`
});
