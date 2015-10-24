function secondsToString(seconds) {
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	return numminutes.toFixed(0)+ ":" + ( numseconds < 10 ? "0" : "") + numseconds.toFixed(0);
};
function makeAjaxCall (method, p_url, p_data, success_callback, error_callback) {
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