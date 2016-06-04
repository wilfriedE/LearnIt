function secondsToString(seconds) {
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	return numminutes.toFixed(0)+ ":" + ( numseconds < 10 ? "0" : "") + numseconds.toFixed(0);
};
