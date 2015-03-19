// GLOBAL FUNCTIONS


		
	////////////////////////  CHANGE SCENES USING HASHTAGS	
	function changeHash(newHash){	
			
				location.hash = "#" + newHash.toLowerCase(); // get the clicked link id
	}
	////////////////////////	
	
	////////////////////////
	function endPageTransistion(){
		
		
		$('#contentPage' + priorScreen).empty();
		
	
	}
	////////////////////////
	
	//////////////////////
	//  truncateText
	 function truncateText( text, limit ){
		var myText = text.toString()
		len = myText.length
		if(len>limit)
		{
			return myText.substr(0,limit)+'...'
		}	
		else{
		
			return myText
		}
		
	}
	//		
	///////////////////////	

	//////////////////////
	//  truncateText
	// changeBGLayer('colorSchemeWhite', 100)
	function changeBGLayer(newClass, speed){
		var oldClass = $( '#bgLayer' ).attr('class');
	
		
		 $( '#bgLayer' ).switchClass( oldClass, newClass, speed, "easeInOutQuad" );

	}
	//		
	///////////////////////	
	
	//////////////////////
	//  GO TO TOP	
	function setScrollTop(where, speed){
			menu = $( '#bt-menu' )
			if (menu !== undefined){
				$(menu).animate(	{ top: where }, speed, function(){	})
			}
			$('html,body').animate(	{ scrollTop: where }, speed, function(){	})
			
			
	}
	//		
	///////////////////////	
	
	
	//////////////////////
	//  GO TO TOP	
	function changeDivColor(type, speed){
			$('html,body').animate(	{ scrollTop: where }, speed, function(){	})
	}
	//		
	///////////////////////		
	
	

	//////////////////////
	//
	function get_random_color() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.round(Math.random() * 15)];
	    }
	    return color;
	}
	//
	/////////////////////
	


	
	
	//////////////////////
	//  
	function saveVar(varName, content, callback ) {
		
	 	globalStorage.set( varName, content )
	 	var msg = "(SAVE) " + varName + " = " + content + ""; 
	 	trace(msg, "success")
	 	
	 	if (callback != undefined){
	 		callback()	 		
	 	}
	}
	// saveVar("myName", "Callback", function(){	})  // CALLBACK 
	// saveVar("myName", "NoCallback")					// NO CALLBACK
	/////////////////////	
	
	//////////////////////
	//
	function loadVar(varName, callback) {						
	
		
	 	var data = globalStorage.get( varName ) 
		
	 	
	 	if (data == undefined){
	 		var msg = varName + " does not exist.";
	 		trace(msg, "error");
	 	}
	 	else{
	 		var msg = "(LOAD) " + varName + " = " + data;
	 		trace(msg, "info");
	 	}	

	 	if (callback != undefined){
	 		callback(data)	 		
	 	}
	 	else{
	 		return(data)
	 	}
	 	
	}
	// 	loadVar("myName", function(returnData){	})		// WITH CALLBACK
	//  loadVar("myName")								// NO CALLBACK
	/////////////////////		
	
	//////////////////////
	//  
	function deleteVar(varName, callback) {
		globalStorage.remove(varName);
	 	var msg = varName + " deleted.";
	 	trace(msg, "info");		
		
	 	if (callback != undefined){
	 		callback()	 		
	 	}			

	}
	// 	deleteVar("myName");
	/////////////////////	
	
	
	
	//////////////////////
	//  GET INFO ON STORAGE TYPE/SIZE  
	function storageInfo(){
		
		// build alert message
		var info = [
		  'Backend: ',
		  Persist.type || 'none',
		  ', ',
		  'Approximate Size Limit: ',
		  (Persist.size < 0) ? 'unknown' : Persist.size 
		].join('');
		
		// prompt user with information
		trace(info);		
		
	}
	
	//////////////////////	
	
	//////////////////////
	// TRACE MESSAGES	
	function trace(msg, type){
		
		
		if (type == undefined){ type = "trace"}
		
		if (rootSettings.debugMode){
			$.bootstrapGrowl(truncateText(msg, 150), {
			  ele: 'body', // which element to append to
			  type: type, // (null, 'info', 'error', 'success')
			  offset: {from: 'bottom', amount: 20}, // 'top', or 'bottom'
			  align: 'right', // ('left', 'right', or 'center')
			  width: 'auto', // (integer, or 'auto')
			  delay: 10000,
			  allow_dismiss: true,
			  stackup_spacing: 30 // spacing between consecutively stacked growls.
			});	
		}
			
	}
	//
	/////////////////////	



	//////////////////////
	// TRACE MESSAGES	
	function trace(msg, type){
		
		if (type == undefined){ type = "trace"}
		

			$.bootstrapGrowl(truncateText(msg, 150), {
			  ele: 'body', // which element to append to
			  type: type, // (null, 'info', 'error', 'success')
			  offset: {from: 'bottom', amount: 20}, // 'top', or 'bottom'
			  align: 'right', // ('left', 'right', or 'center')
			  width: 'auto', // (integer, or 'auto')
			  delay: 10000,
			  allow_dismiss: true,
			  stackup_spacing: 30 // spacing between consecutively stacked growls.
			});	
	
	}
	//
	/////////////////////	
	
	



