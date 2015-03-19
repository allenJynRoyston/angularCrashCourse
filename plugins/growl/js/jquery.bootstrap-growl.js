(function() {
  var $;

  $ = jQuery;

  $.bootstrapGrowl = function(message, options) {
    var $alert, css, offsetAmount;

    options = $.extend({}, $.bootstrapGrowl.default_options, options);
    $alert = $("<div>");
    $alert.attr("class", "bootstrap-growl alert");
	
    if (options.type) {
      $alert.addClass("alert-" + options.type);
    }
    if (options.allow_dismiss) {
      $alert.append("<a class=\"close\" data-dismiss=\"alert\" href=\"#\"> &nbsp &times;</a>");
    }
    $alert.append(message);
    if (options.top_offset) {
      options.offset = {
        from: "top",
        amount: options.top_offset
      };
    }
    offsetAmount = options.offset.amount;
    $(".bootstrap-growl").each(function() {
      return offsetAmount = Math.max(offsetAmount, parseInt($(this).css(options.offset.from)) + $(this).outerHeight() + options.stackup_spacing);
    });
	
	var bgColor  = ""
	var txtColor = ""
	var brdColor = ""

	if (options.type == "default"){
		bgColor	 	= '#00ccff'
		txtColor	= 'white'
		brdColor	= 'none'
	}	

	if (options.type == "success"){
		bgColor	 	= '#01a05f'
		txtColor	= 'white'
		brdColor	= 'none'
	}
	
	if (options.type == "error"){
		bgColor	 	= '#ff6b4f'
		txtColor	= 'white'
		brdColor	= 'none'
	}
	
	if (options.type == "info"){
		bgColor	 	= '#fff5a2'
		txtColor	= 'black'
		brdColor	= 'none'
	}	
	
	if (options.type == "trace"){
		bgColor	 	= '#3d3d3d'
		txtColor	= 'white'
		brdColor	= 'none'
	}		
	
    css = {
      "position": (options.ele === "body" ? "fixed" : "absolute"),
      "margin": 0,
      "z-index": "9999",
      "display": "none",
	  "background-color": bgColor,
	  "color": txtColor,
	  "border": brdColor
    };
	
	
		
    css[options.offset.from] = offsetAmount + "px";
    $alert.css(css);
    if (options.width !== "auto") {
      $alert.css("width", options.width + "px");
    }
    $(options.ele).append($alert);
    switch (options.align) {
      case "center":
        $alert.css({
          "left": "50%",
          "margin-left": "-" + ($alert.outerWidth() / 2) + "px"
        });
        break;
      case "left":
        $alert.css("left", "20px");
        break;
      default:
        $alert.css("right", "20px");
    }
    $alert.fadeIn();
    if (options.delay > 0) {
      $alert.delay(options.delay).fadeOut(function() {
        return $(this).alert("close");
      });
    }
    return $alert;
  };

  $.bootstrapGrowl.default_options = {
    ele: "body",
    type: "info",
    offset: {
      from: "top",
      amount: 20
    },
    align: "right",
    width: 250,
    delay: 4000,
    allow_dismiss: true,
    stackup_spacing: 10
  };

}).call(this)