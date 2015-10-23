function nofunc(){};
function secondsToString(seconds) {
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	return numminutes.toFixed(0)+ ":" + ( numseconds < 10 ? "0" : "") + numseconds.toFixed(0);
};
function makeAjaxCall (method, p_url, p_data, success_callback, error_callback) {
    $.ajax({
      url: p_url,
      type: method,
      data: p_data,
      error: error_callback,
      success: success_callback,
    });
}
function getUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : {};
	error_callback = typeof error_callback !== 'undefined' ? error_callback : nofunc;
	success_callback = typeof success_callback !== 'undefined' ? success_callback : nofunc;
    makeAjaxCall('GET', url, data, success_callback, error_callback);
};
function postUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : {};
	error_callback = typeof error_callback !== 'undefined' ? error_callback : nofunc;
	success_callback = typeof success_callback !== 'undefined' ? success_callback : nofunc;
    makeAjaxCall('POST', url, data, success_callback, error_callback);
};
function putUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : {};
	error_callback = typeof error_callback !== 'undefined' ? error_callback : nofunc;
	success_callback = typeof success_callback !== 'undefined' ? success_callback : nofunc;
    makeAjaxCall('PUT', url, data, success_callback, error_callback);
};
function deleteUsingAjax(url, data, success_callback, error_callback) {
	data = typeof data !== 'undefined' ? data : {};
	error_callback = typeof error_callback !== 'undefined' ? error_callback : nofunc;
	success_callback = typeof success_callback !== 'undefined' ? success_callback : nofunc;
    makeAjaxCall('DELETE', url, data, success_callback, error_callback);
};