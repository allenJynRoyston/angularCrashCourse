    
    myApp.config(function($stateProvider, $urlRouterProvider){
    
		// default
		$urlRouterProvider.otherwise("/examples");
	  	
	    // states
	    $stateProvider
	        .state('examples', {
	            url: "/examples",
	            views: {
	                "component_1": {
	                	templateUrl: "components/home/view.html"                    
	                },
	            }
	        })
	        .state('route1', {
	            url: "/route1",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page1/view.html"                     
	                },
	            }
	        })
	        .state('route2', {
	            url: "/route2",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page2/view.html"                    
	                },
	            }
	        })
	        .state('route3', {
	            url: "/route3",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page3/view.html"           
	                },
	            }
	        })
	        .state('route4', {
	            url: "/route4",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page4/view.html"               
	                },
	            }
	        })
	        .state('route5', {
	            url: "/route5",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page5/view.html"               
	                },
	            }
	        });          
	              
        
        
    });



