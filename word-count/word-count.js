'use strict';

function Words () {};

Words.prototype.count = function (str) {
	var wordArr = str.trim().split(/[\n\t\s ]/).sort();
	var returnObj = Object.create(null);
	wordArr.forEach(function (el, i) {
		el = el.toLowerCase().trim();
		if (el.length > 0) {
			if (!returnObj[el]) {
				returnObj[el] = 1;
			} else {
				returnObj[el] += 1;
			}
		}
	});
	return returnObj;
};

module.exports = Words;
