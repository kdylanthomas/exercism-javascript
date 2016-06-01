var Gigasecond = function (date) {
	this.startingDate = date;
};

Gigasecond.prototype.date = function () {
	var startingMilliseconds = this.startingDate.getTime();
	var endingMilliseconds = startingMilliseconds + 1000000000000;
	return new Date(endingMilliseconds);
}

module.exports = Gigasecond;