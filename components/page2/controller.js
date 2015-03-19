myApp.controller('page2Controller', function($scope, $timeout) {
		
		$scope.init = function(){
			$timeout(function(){
				$('body').scrollTop(0);
				$('#content').removeClass('hidden');
			}, 250);
		};	

});


