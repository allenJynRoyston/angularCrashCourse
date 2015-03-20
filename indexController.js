var myApp = angular.module('myApp', ["ui.router", "ngSanitize"]);


	// MAIN CONTROLLER
	myApp.controller('indexController', function($timeout, $scope) {
		

		  /////////////////////////////////////
		  // SET VARIABLES
		  $scope.links = [
		  	{title: "Why Use Angular?",	href: "home"},
		  	{title: "Core Concepts",	href: "core"},
		  	{title: "Controller", 		href: "controller"},
		  	{title: "Loops",	 		href: "loops"},
		  	{title: "Attributes",		href: "attributes"},
		  	{title: "Sandbox",			href: "sandbox"},
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
	
	


