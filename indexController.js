var myApp = angular.module('myApp', ["ui.router", "ngSanitize"]);


	// MAIN CONTROLLER
	myApp.controller('indexController', function($timeout, $scope) {
		

		  /////////////////////////////////////
		  // SET VARIABLES
		  $scope.links = [
		  	{title: "Why Use Angular?",	href: "examples"},
		  	{title: "Arrays/Objects",	href: "route1"},
		  	{title: "Controller", 		href: "route2"},
		  	{title: "Loops",	 		href: "route3"},
		  	{title: "Attributes",		href: "route4"},
		  	{title: "Sandbox",			href: "route5"},
		  ];
		  //
		  /////////////////////////////////////
			    
		  ///////////////////////////////////
		  // AFTER NEW VIEW IS LOADED
		  // THIS IS FIRED	    	
			$scope.$on('$stateChangeSuccess', function (event, toState) {
				$scope.changeLayout('full');
				
		  		// SET SCROLL TO TOP
				$scope.setScrollToTop();				
			});	
		  //
		  /////////////////////////////////////			
		  
		  ///////////////////////////////////
		  //  SET SCROLL TO TOP *requires slight delay*
			$scope.setScrollToTop = function(){
					$timeout(function(){$('#layoutContainer').scrollTop(0);}, 10);		  			  	
			};		  
		  //
		  /////////////////////////////////////
		  	  
		  /////////////////////////////////////
		  // CHANGE LAYOUT
			$scope.changeLayout = function(type){
		  

				// SELECT LAYOUT TYPE
				switch(type)
				{
					case "shrink":
						$scope.layoutComponent_1 = "col-xs-10 col-xs-offset-1";
						break;
					case "full":		
						$scope.layoutComponent_1 = "col-xs-12";
						break;																									
				}
		  
		  	
		  };
		  //
		  /////////////////////////////////////
		  

		  
				
	});
	
	


