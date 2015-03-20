myApp.controller('page3Controller', function($scope, $timeout) {
		
		$scope.init = function(){
			$timeout(function(){
				$('body').scrollTop(0);
				$('#content').removeClass('hidden');
			}, 250);
		};	
		
		
		$scope.arrayDisplay_ul 	 = "<ul>\n<li ng-repeat='entry in basicArray'>{{entry}}</li>\n</ul>";					
		$scope.arrayDisplay_div  = "<div>\n<p ng-repeat='entry in basicArray'>{{entry}}</p>\n</div>";					
		
		$scope.arrayDisplay_ul2  = "<ul>\n<li ng-repeat='entry in arrayObject'>\n{{entry.name}}, {{entry.age}}, {{entry.cell}}\n</li>\n</ul>";					
		$scope.arrayDisplay_div2  = "<div ng-repeat='entry in arrayObject'>\n<p>{{entry.name}}, {{entry.age}}, {{entry.cell}}\n</p>\n</div>";					
		
		$scope.arrayDisplay_ul3  = "<li ng-repeat='entry in arrayObject_withImage'>\n<img style='width: 15px; height: 15px'\nng-src='media/images/{{entry.image}}'>\n{{entry.name}}, {{entry.age}}, {{entry.cell}}\n</li>";			
		$scope.arrayDisplay_div3 = "<div ng-repeat='entry in arrayObject_withImage' class='col-xs-3'>\n<img ng-src='media/images/{{entry.image}}' class='img-responsive'>\n<p>{{entry.name}}, {{entry.age}}</p>\n</div>";					
		
		$scope.arrayDisplay_ul4  = "<li ng-if='entry.age > 35'\nng-repeat='entry in arrayObject_withImage'>\n<img style='width: 15px; height: 15px'\nng-src='media/images/{{entry.image}}'>\n{{entry.name}}, {{entry.age}}, {{entry.cell}}\n</li>";
		$scope.arrayDisplay_div4 = "<div ng-if='entry.name == \"Mark\"\n'ng-repeat='entry in arrayObject_withImage' class='col-xs-3'>\n<img ng-src='media/images/{{entry.image}}' class='img-responsive'>\n<p>{{entry.name}}, {{entry.age}}</p>\n</div>";					
		
		
		$scope.arrayDisplay_ul5 = "<ul>\n<li ng-repeat='entry in arrayObject_nested'>{{entry.name}}\n<ul>\n<li ng-repeat='pet in entry.pets'>{{pet.type}}\n</li>\n</ul>\n</li>\n</ul>";
		$scope.arrayDisplay_div5 = "<div ng-repeat='entry in arrayObject_nested'>\n- {{entry.name}} has a \n<span ng-repeat='pet in entry.pets'>[{{pet.type}}]</span>\n</div>";

		// listExample 
		$scope.basicArray = ["Mark", "Henry", "Steve", "Jimmy"];
		

		// arrayObject
		$scope.arrayObject = [
		  {name: "Mark", age: 32, cell: "iPhone"},
		  {name: "Henry", age: 20, cell: "Android"},
		  {name: "Steve", age: 45, cell: "Windows"},
		  {name: "Jimmy", age: 60, cell: "BlackBerry"}
		];		


		// complex object
		$scope.arrayObject_withImage = [
		  {name: "Mark", age: 32, cell: "iPhone", image: 'profileIcon.png'},
		  {name: "Henry", age: 20, cell: "Android", image: 'profileIcon.png'},
		  {name: "Steve", age: 45, cell: "Windows", image: 'profileIcon.png'},
		  {name: "Jimmy", age: 60, cell: "BlackBerry", image: 'profileIcon.png'}
		];	
		
		// nested
		$scope.arrayObject_nested = [
		 {name: "Mark", pets: [{type:"dog"}, {type:"cat"}, {type:"bird"}]},
		 {name: "Henry", pets: [{type:"fish"}]},
		 {name: "Steve", pets: [{type:"hamster"}, {type:"bird"}]},
		 {name: "Jimmy", pets: [{type:"dog"}, {type:"pig"}, {type:"ferret"}]},
		];		

		

});


