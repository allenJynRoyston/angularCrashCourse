myApp.controller('page4Controller', function($scope, $timeout) {
		
	$scope.init = function(){
		$timeout(function(){
			$('body').scrollTop(0);
			$('#content').removeClass('hidden');
		}, 250);
	};			
	
		
	$scope.ngInitExample = "<div ng-init=\'initFunction(); myInit = {name: 'Wolverine', power: 'Rapid healing' }'>\n<p>{{myInit.name}}, {{myInit.power}}</p></div>";		
	$scope.onClickExample = "<button ng-click='clickMe()'>\nRun Function\n</button>\n<button ng-click='counter = counter + 1'>\nAdd to Counter\n</button>\n<hr>\nCounter: {{counter}}";
	$scope.ngModelExample = "<input ng-model='answers.name'>\n<input ng-model='answers.age'>\n<input ng-model='answers.from'>\n<hr>\n\n{{answers}}";
	$scope.onChangeExample = "<label>How many kids do you have?</label>\n<input style='width: 100px' type='number' min='0' max='9'  ng-model='myAnswer' ng-change='runOnChange(myAnswer)'>";
	$scope.ngSelectExample = "<select ng-model='ngOptionsAnswer'\nng-options='entry.id as entry.title for entry in ngSelectList' ng-init='ngOptionsAnswer = 2'></select>\n<hr>\nSelected: {{ngOptionsAnswer}}";
	$scope.ngImageExample = "<img ng-src='{{ngSelectObj}}'>\n\n<img ng-src='media/images/{{ngSelectObj2}}'>";
	$scope.ngClassExample = "<style>\n.outline{\n  border: 1px solid orange\n}\n</style>\n\n<div class='col-xs-6'\n  ng-class='simpleClass'\n  style='background: white' >\n<p>{{simpleClass}} Class Added</p>\n</div>\n";
	$scope.ngClassConditional = "<style>\n.blueOutline{\n  border: 1px solid blue\n}\n\n.redOutline{\n  border: 1px solid red\n}\n</style>\n\n<div class='col-xs-6'\n ng-class=\"{true: 'blueOutline', false: 'redOutline'}[myVariable]\">\n  Condition: {{myVariable}}\n<hr>\n<i class='fa fa-2x' \nng-class='{true: \"fa-thumbs-o-up\", false: \"fa-thumbs-o-down\" }[myVariable]'></i>\n<br>\n</div>";
	$scope.ngShowExample = "isShowing: <button  ng-click='isShowing = !isShowing'>{{isShowing}}</button>\n\n<div class='col-xs-12' ng-show='isShowing' >\n<center>\nShould appear on true:\n<img class='img-responsive' src='http://lorempixel.com/400/200/'>\n</center>\n</div>	\n\n<div class='col-xs-12' ng-hide='isShowing' >\n<center>\nShould appear on false:\n<img class='img-responsive' src='http://lorempixel.com/400/200/sports'>\n</center>\n</div>\n";
	$scope.ngIfExample = "isShowing: <button  ng-click='isShowing = !isShowing'>{{isShowing}}</button>\n\n<div class='col-xs-12' ng-if='isShowing' >\n<center>\nOnly rendered if set to TRUE:\n<img class='img-responsive' src='http://lorempixel.com/400/200/'>\n</center>\n</div>";

	
	// ng-click
	$scope.counter = 0;		
	$scope.clickMe = function(){
	  alert("I've been clicked!");	
	};	



	// ng-model
	$scope.answers = {
		name: "Allen",
		age: 32,
		from: "NV"
	};


	// on change
	$scope.myAnswer = '';
	$scope.runOnChange = function(number){
		if (number != null || number != undefined){
			if (number > 10){
				trace("Whoa slow down Champ.  That's way too many kids.");
			}
			else{
				trace("You have " + number + " kids.");
			}
		}
	};
	
	
	
	// ng select
	$scope.ngSelectList = [
	   {id: 1, title: 'Wizard'},
	   {id: 2, title: 'Ninja'},
	   {id: 3, title: 'Ranger'},
	];	
	
	// ng src
	$scope.ngSelectObj = 'http://lorempixel.com/400/200/';	
	$scope.ngSelectObj2 = "profileIcon.png";
	
	
	// ng-show/hide
	$scope.isShowing = true;
	
});


