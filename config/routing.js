    
    myApp.config(function($stateProvider, $urlRouterProvider){
    
		// default
		$urlRouterProvider.otherwise("/home");
	  	
	    // states
	    $stateProvider
	        .state('home', {
	            url: "/home",
	            views: {
	                "component_1": {
	                	templateUrl: "components/home/view.html"                    
	                },
	            }
	        })
	        .state('core', {
	            url: "/core",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page1/view.html"                     
	                },
	            }
	        })
	        .state('controller', {
	            url: "/controller",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page2/view.html"                    
	                },
	            }
	        })
	        .state('loops', {
	            url: "/loops",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page3/view.html"           
	                },
	            }
	        })
	        .state('attributes', {
	            url: "/attributes",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page4/view.html"               
	                },
	            }
	        })
	        .state('sandbox', {
	            url: "/sandbox",
	            views: {
	                "component_1": {
	                	templateUrl: "components/page5/view.html"               
	                },
	            }
	        });          
	              
        
        
    });



