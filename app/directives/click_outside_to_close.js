angular.module('clickOutsideToClose',[])
.directive('onOutsideClick',function($document){
	return{
		restrict: 'A',
		scope: {
			callback: '=onOutsideClick'
		},
		link: function(scope,element,attr,ctrl){
			var handler = function(event) {
                if (angular.element(element[0]).css('visibility')=='visible' && !element[0].contains(event.target)) {
                    scope.callback(event);
                 }
            };

            $document.on('click', handler);
            scope.$on('$destroy', function() {
                $document.off('click', handler);
            });
		}
	};
});
