function secondsToString(seconds) {
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	return numminutes.toFixed(0)+ ":" + ( numseconds < 10 ? "0" : "") + numseconds.toFixed(0);
};
function makeAjaxCall (method, p_url, p_data, success_callback, error_callback) {
	$.ajaxSetup({
      beforeSend: function(xhr, settings) {
           if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
               xhr.setRequestHeader("X-CSRFToken", $("meta[name='csrf-token']").attr("content"));
               }
           }
    });

	var ajaxRequestPromise = Promise.resolve($.ajax({url: p_url,type: method,data: p_data}));
    return ajaxRequestPromise.then(function(response) {
    	if (success_callback != undefined) {
    		return success_callback(response);
    	};
        return response;
    }, function(error) {
    	if (error_callback != undefined) {
    		return error_callback(error);
    	};
        return error;
    });
};
function getUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : "";
	success_callback = typeof success_callback !== 'undefined' ? success_callback : undefined;
	error_callback = typeof error_callback !== 'undefined' ? error_callback : undefined;
    return makeAjaxCall('GET', url, data, success_callback, error_callback);
};
function postUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : "";
	success_callback = typeof success_callback !== 'undefined' ? success_callback : undefined;
	error_callback = typeof error_callback !== 'undefined' ? error_callback : undefined;
    return makeAjaxCall('POST', url, data, success_callback, error_callback);
};
function putUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : "";
	success_callback = typeof success_callback !== 'undefined' ? success_callback : undefined;
	error_callback = typeof error_callback !== 'undefined' ? error_callback : undefined;
    return makeAjaxCall('PUT', url, data, success_callback, error_callback);
};
function deleteUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : "";
	success_callback = typeof success_callback !== 'undefined' ? success_callback : undefined;
	error_callback = typeof error_callback !== 'undefined' ? error_callback : undefined;
    return makeAjaxCall('DELETE', url, data, success_callback, error_callback);
};
function makeNotification (message, sclass) {
	$("#notifications").html("<div class='alert alert-dismissable alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + message + "</div>");
};
function dataActionable() {
	//listens for elements that perform dataActional actions.
	$("[data-actionable]").on("click", function (e) {
		var element = $(e.target);
		var action = $(e.target).data("action").toLowerCase();
		switch(action){
			case "postable":
				dataPostable($(element));
				break
			case "getable":
				dataGetable($(element));
				break
			case "collectible":
				dataCollectible($(element));
				break
			default:
				console.log("Called action: ", action);
		};
	});
};
function dataPostable (element) {
	// elements that perform post requests.
	var url = $(element).data("url");
	var data = $(element).data("value");
	var action = $(element).data("postable");
	var success_msg = $(element).data("success");
	var error_msg = $(element).data("error");
	switch(action){
		case "post":
			postUsingAjax(url, {"data": data}).then(
		      function(response) {
		        dataAfterEffect($(element), response);
		        makeNotification(success_msg, "success");
		      },
		      function(error) {
		     	makeNotification(error_msg + error, "danger");
		    });
			break
		case "put":
			putUsingAjax(url, {"data": data}).then(
		      function(response) {
		        dataAfterEffect($(element), response);
		        makeNotification(success_msg, "success");
		      },
		      function(error) {
		     	makeNotification(error_msg + error, "danger");
		    });
			break
		case "delete":
			deleteUsingAjax(url, {"data": data}).then(
		      function(response) {
		        dataAfterEffect($(element), response);
		        makeNotification(success_msg, "success");
		      },
		      function(error) {
		     	makeNotification(error_msg + error, "danger");
		    });
			break
		default:
			makeNotification("Called unknwon postable action: " + action);
	};
};

function dataGetable (element) {
	// elements that perform get requests to populate 
	var url = $(element).data("url");
	var data = $(element).data("value");
	var action = $(element).data("getable").toLowerCase();
	var success_msg = $(element).data("success");
	var error_msg = $(element).data("error");
	switch(action){
		case "get":
			getUsingAjax(url, {"data": data}).then(
		      function(response) {
		        dataAfterEffect($(element), response);
		        makeNotification(success_msg, "success");
		      },
		      function(error) {
		     	makeNotification(error_msg + error, "danger");
		    });
			break
		default:
			makeNotification("called unknwon getable action: " + action);
	};
};
function dataCollectible (element) {
	// elements that append values to another dataActionable for bulk actions
	//keep a data collected attribute to keep track of collection and removal
	var elemName = $(element).data("actionable");
	var elemValue = $(element).data("value");
	var collected = $(element).data("collected").toLowerCase();
	var parents = (function() {
		var finptvalues = [];
		var ptvalues = $(element).data("collectors").split(",");
		for (var i = ptvalues.length - 1; i >= 0; i--) {
			finptvalues.append.push( $("[data-actionable='"+ptvalues[i]+"']") ); 
		};
		return finptvalues;
	})(); //evaluates the collectors attribute and returns the collector (parent) elements.
	if (collected=="true") {
		for (var i = parents.length - 1; i >= 0; i--) {
			dataElemEffect(parents[i], "clear", null);
		};
		$(element).data("collected", "false");
	} else {
		for (var i = parents.length - 1; i >= 0; i--) {
			//update the parent's collectibles -- parent aka collector
			var currCollectibles = parents[i].data("collectibles").split(",");
			parents[i].data("collectibles", currCollectibles.push(elemName).toString() );
			//update the parent's values -- parent aka collector
			var currValues = parents[i].data("value").split(",");
			parents[i].data("collectibles", currValues.push(elemValue).toString() );
		};
		$(element).data("collected", "true");
	};
};

function dataAfterEffect (element, value) {
	// checks for element after-effects to perform
	// element is the element to check and or perform effects for
	// res is for an ajax response
	var valuedata = null;
	if (typeof variable === 'undefined' || variable === null) {
    	valuedata = null;
	} else {
		valuedata = value;
	};

	if (typeof $(element).data("after-effect") != 'undefined' || $(element).data("after-effect") != null) {
    	var effects = $(element).data("after-effect").toLowerCase().split(",");
		for (var i = effects.length - 1; i >= 0; i--) {
			dataElemEffect($(element), effects[i], valuedata);
		};
	};

};
function dataElemEffect (element, effect, value) {
	// performs action on ellement and it's collectibles if any
	switch(effect){
		case "hide":
			$(element).hide();
			break
		case "hideCollectibles":
			var collectibles = $(element).data("collectibles").split(",");
			for (var i = collectibles.length - 1; i >= 0; i--) {
				$("[data-actionable='"+collectibles[i]+"']").hide();
			};
			break
		case "show":
			element.show();
			break
		case "showCollectibles":
			var collectibles = $(element).data("collectibles").split(",");
			for (var i = collectibles.length - 1; i >= 0; i--) {
				$("[data-actionable='"+collectibles[i]+"']").show();
			};
			break
		case "populate":
			$(element).html(value);
			break
		case "populateText":
			$(element).text(value);
			break
		case "append":
			$(element).append(value);
			break
		case "clear":
			$(element).data("value","");
			$(element).data("collectibles","");
			break
		case "empty":
			$(element).empty();
			break
		case "remove":
			$(element).remove();
			break
		case "removeCollectibles":
			var collectibles = $(element).data("collectibles").split(",");
			for (var i = collectibles.length - 1; i >= 0; i--) {
				$("[data-actionable='"+collectibles[i]+"']").remove();
			};
			break
		default:
			console.log("Unable to perform effect: ", effect, " on element");
	}; 
};

dataActionable();