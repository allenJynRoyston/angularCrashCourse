myApp.controller('homeController', function($scope, $timeout) {
		
		$scope.init = function(){
			console.log("here");
			$scope.snippetChange('html');	
			$timeout(function(){
				$('body').scrollTop(0);
				$('#content').removeClass('hidden');
			}, 250);
		};	
		
		$scope.varibleId = "I wet my plants!";
		
		

		$scope.dataSet = [
				{name: "Goku", powerLevel: "Over 9000!"},
				{name: "Vegeta", powerLevel: "2000"},
				{name: "Gohan", powerLevel: "2500"},
				{name: "Krillin", powerLevel: "200"}
		];			
		
		$scope.listOfNames = [
			{name: "Allen", 	gender: "male", 	born: "NV"},
			{name: "Flannery", 	gender: "female", 	born: "WA"},
			{name: "Ryan",	 	gender: "male", 	born: "SC"},
			{name: "Tara", 		gender: "female", 	born: "TN"},
			{name: "Sarah", 	gender: "female", 	born: "TX"},
		];			


		
		
		// snippet changes
		$scope.snippetChange = function(to){			
			if (to == "html"){
				$scope.exampleSnippet0_JQ  = "<p id='elementId'></p>\n<input id='inputId'>\n<textarea id='textareaId'></textarea>";
				$scope.exampleSnippet0_ANG = "<p>{{variableId}}</p>\n<input ng-model='varibleId'>\n<textarea ng-model='varibleId'></textarea>";				


				$scope.exampleSnippet_JQ = "<input type='text' onkeyup='updateText(this)'>\nResults: <p id='dbExample'></p>";
				$scope.exampleSnippet_ANG = "<input type='text' ng-model='variableName'>\nResults:  <p>{{variableName}}</p>\n";				
			
				 
				$scope.exampleSnippet2_JQ = "<div id='listId'>\n<ul>\n</ul>\n</div>\n\n<input type='text' id='newName'>\n<input type='number' id='newPower' >\n<button onclick='addToList()'>Add to List</button>  ";
				$scope.exampleSnippet2_ANG = "<ul>\n<li ng-repeat='data in dataSets'>\n<button ng-click='dataSet.splice($index, 1)'>Remove</button>\nName: {{data.name}} | Power Level: {{data.powerLevel}}</li>\n</ul>\n\n\n<input type='text' ng-model='newName' >\n<input type='number' ng-model='newPower'>\n<button \nng-click='dataSet.push({name: newName, powerLevel: newPower})'\n>Add to List</button>";						

				$scope.exampleSnippet3_JQ = "Filter: <input id='searchText' onchange='filterSearch()'>\n\n<table id='myTable' class='table table-hover '>\n<tbody class='table-striped'>\n<th>Name</th>\n<th>Gender</th>\n<th>Born</th>\n</tbody>\n</table>";
				$scope.exampleSnippet3_ANG ='Filter: <input ng-model="searchText">\n\n<table class="table table-hover">\n<tbody class="table-striped">\n<th>Name</th>\n<th>Gender</th>\n<th>Born</th>\n<tr ng-repeat="entry in listOfNames | filter: searchText">\n<td>{{ entry.name }}</td>\n<td>{{ entry.gender }}</td>\n<td>{{ entry.born }}</td>\n</tr>\n</tbody>\n</table>\n';						
			
						
			
				
			}
			if (to == "js"){
				$scope.exampleSnippet0_JQ  = "$('#elementId').text('I wet my plants...')\n$('#inputId').val('I wet my plants...')\n$('#textareaId).val('I wet my plants...')";
				$scope.exampleSnippet0_ANG = "$scope.variableId = 'I wet my plants...'";					
				
				$scope.exampleSnippet_JQ = "function updateText(element){\nvar theString = $(element).val();\n$('#dbExample').text(theString);\n};";
				$scope.exampleSnippet_ANG = "No Javascript code needed!";	

				$scope.exampleSnippet2_JQ = 'dataSet = [\n{name: "Goku", powerLevel: "Over 90000!"},\n{name: "Vegeta", powerLevel: "2000"},\n{name: "Gohan", powerLevel: "2500"},\n{name: "Krillin", powerLevel: "200"}\n];  \n\nfunction createList(){\nfor(var e=$("#listId ul"),t=0;t<dataSet.length;t++){\nvar a=dataSet[t].name;\npower=dataSet[t].powerLevel,\nstring="<button onclick="deleteMe(a)">Delete</button><li>Name: "+a+"  Power Level: "+power,\ne.append(string)\n}}\n\nfunction addToList(){\nvar list = $("#listId ul");\nvar name = $("#newName").val();\nvar power = $("#newPower").val();\nstring = "<li>Name: " + name + "  | Power Level: " + power;\nlist.append(string);\n}\n\nfunction deleteMe(index){\ndataSet.splice(index, 1)\n}';
				$scope.exampleSnippet2_ANG = '$scope.dataSet = [\n{name: "Goku", powerLevel: "Over 90000!"},\n{name: "Vegeta", powerLevel: "2000"},\n{name: "Gohan", powerLevel: "2500"},\n{name: "Krillin", powerLevel: "200"}\n];  ';	
				
				$scope.exampleSnippet3_JQ = '(function($){\n var jversion=$.fn.jquery.split("."), jmajor=parseFloat(jversion[0]), jminor=parseFloat(jversion[1]);\n if (jmajor<2 && jminor<8){\n $.expr[":"].filterTableFind=function(a, i, m){\n return $(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;\n};\n}else{\n $.expr[":"].filterTableFind=jQuery.expr.createPseudo(function(arg){\n return function(el){\n return $(el).text().toUpperCase().indexOf(arg.toUpperCase())>=0;\n};\n});\n}\n $.fn.filterTable=function(options){\n var defaults={\n autofocus: false, \n callback: null, \n containerClass: "filter-table", \n containerTag: "p", \n hideTFootOnFilter: false, \n highlightClass: "alt", \n inputSelector: null, \n inputName: "", \n inputType: "search", \n label: "Filter:", \n minRows: 8, \n placeholder: "search this table", \n preventReturnKey: true, \n quickList: [], \n quickListClass: "quick", \n quickListGroupTag: "", \n quickListTag: "a", \n visibleClass: "visible" \n}, \n hsc=function(text){\n return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");\n},\n settings=$.extend({}, defaults, options); \n \n var doFiltering=function(table, q){\n var tbody=table.find("tbody"); \n if (q===""){\n tbody.find("tr").show().addClass(settings.visibleClass); \n tbody.find("td").removeClass(settings.highlightClass); \n if (settings.hideTFootOnFilter){\n table.find("tfoot").show(); \n}\n}else{\n tbody.find("tr").hide().removeClass(settings.visibleClass); \n if (settings.hideTFootOnFilter){\n table.find("tfoot").hide(); \n}\n tbody.find("td").removeClass(settings.highlightClass).filter(":filterTableFind(""+q.replace(/([""])/g,"\\$1")+"")").addClass(settings.highlightClass).closest("tr").show().addClass(settings.visibleClass); \n}\n if (settings.callback){\n settings.callback(q, table); \n}\n}; \n \n return this.each(function(){\n var t=$(this), \n tbody=t.find("tbody"), \n container=null, \n quicks=null, \n filter=null, \n created_filter=true; \n if (t[0].nodeName==="TABLE" && tbody.length>0 && (settings.minRows===0 || \n (settings.minRows>0 && tbody.find("tr").length>settings.minRows)) && \n !t.prev().hasClass(settings.containerClass)){\n if (settings.inputSelector && $(settings.inputSelector).length===1){\n filter=$(settings.inputSelector); \n container=filter.parent(); \n created_filter=false; \n}else{\n container=$("<"+settings.containerTag+"/>"); \n if (settings.containerClass!==""){\n container.addClass(settings.containerClass); \n}\n container.prepend(settings.label+" "); \n filter=$("<input type=""+settings.inputType+"" placeholder=""+settings.placeholder+"" name=""+settings.inputName+""/>"); \n if (settings.preventReturnKey){\n filter.on("keydown", function(ev){\n if ((ev.keyCode || ev.which)===13){\n ev.preventDefault(); \n return false; \n}\n}); \n}\n}\n if (settings.autofocus){\n filter.attr("autofocus", true); \n}\n if ($.fn.bindWithDelay){\n filter.bindWithDelay("keyup", function(){\n doFiltering(t, $(this).val()); \n}, 200); \n}else{\n filter.bind("keyup", function(){\n doFiltering(t, $(this).val()); \n}); \n}\n filter.bind("click search", function(){\n doFiltering(t, $(this).val()); \n}); \n if (created_filter){\n container.append(filter); \n}\n if (settings.quickList.length>0){\n quicks=settings.quickListGroupTag ? $("<"+settings.quickListGroupTag+"/>") : container; \n $.each(settings.quickList, function(index, value){\n var q=$("<"+settings.quickListTag+" class=""+settings.quickListClass+""/>"); \n q.text(hsc(value)); \n if (q[0].nodeName==="A"){\n q.attr("href", "#"); \n}\n q.bind("click", function(e){\n e.preventDefault(); \n filter.val(value).focus().trigger("click"); \n}); \n quicks.append(q); \n}); \n if (quicks!==container){\n container.append(quicks); \n}\n}\n if (created_filter){\n t.before(container); \n}\n}\n}); \n}; \n})(jQuery); \n;$("myTable").filterTable(); function createTable(){\nvar listOfNames=[\n{name: "Allen", gender: "male", born: "NV"},\n{name: "Flannery", gender: "female", born: "WA"},\n{name: "Ryan", gender: "male", born: "SC"},\n{name: "Tara", gender: "female", born: "TX"},\n{name: "Sarah", gender: "female", born: "TN"},\n];\n\nvar tableRow=$("#myTable tbody");\nfor (var i=0; i < listOfNames.length; i++){\nentry=listOfNames[i]; \nvar buildString="<tr><td>" + entry.name + "</td>" + "<td>" + entry.gender + "</td>" + "<td>" + entry.born + "</td></tr>";\ntableRow.append(buildString);\n}\n}';
				$scope.exampleSnippet3_ANG = '$scope.listOfNames = [\n\{name: "Allen", 	gender: "male", 	born: "NV"},\n{name: "Flannery", 	gender: "female", 	born: "WA"},\n{name: "Ryan",	 	gender: "male", 	born: "SC"},\n{name: "Tara", 		gender: "female", 	born: "TN"},\n{name: "Sarah", 	gender: "female", 	born: "TX"},\n];';							
			}	
			
		};



	
});



		


	
