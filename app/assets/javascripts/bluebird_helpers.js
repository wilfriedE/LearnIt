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
function handleUsingAjax(action, url, data, success_callback, error_callback){
	switch (action.toUpperCase()) {
		case 'POST':
		  return postUsingAjax(url, data, success_callback, error_callback);
			break;
		case 'PUT':
			return putUsingAjax(url, data, success_callback, error_callback);
			break;
		case 'GET':
			return getUsingAjax(url, data, success_callback, error_callback);
			break;
		case 'DELETE':
			return deleteUsingAjax(url, data, success_callback, error_callback);
			break;
		default:
			return false;
	}
};
