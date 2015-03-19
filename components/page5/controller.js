myApp.controller('page5Controller', function($scope, $timeout) {
			
	$scope.init = function(){
		$timeout(function(){
			$('body').scrollTop(0);
			$('#content').removeClass('hidden');
		}, 250);
	};			
	
	////////////////////
	// ENTER CODE HERE 
	
	$scope.name = "Flannery";
	
	$scope.array = ["Flannery", "test"];
	
	$scope.obj = {name: "Flannery", age: 26, hair: "brown"};
	
	$scope.arrayObj = [
						{name: "Tula", breed: "Lakeland Terrier", age: 15},
						{name: "Romeo", breed: "Pug", age: 14},
						{name: "Jonesey", breed: "Black Lab", age: 12},
						{name: "Crowley", breed: "Great Dane", age: 9},
						{name: "Katz", breed: "Boxer", age: 10}
					];
	
	$scope.deleteEntry = function(index) {
		$scope.arrayObj.splice(index, 1);
	}
	
	$scope.captureEntry = {name: "", breed: "", age: null};
	
	$scope.addEntry = function() {
		$scope.arrayObj.push($scope.captureEntry);
	}
	
	
	$scope.newObj = {
		color1: "fabulousss", 
		color2: "drab",
		isColored: false
	};
	
	$scope.newArrayObj = [
		{ state: "alpha" },
		{ state: "bravo"}
	]
	
	//
	////////////////////
	
});


            