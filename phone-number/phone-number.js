var PhoneNumber = function (num) {
	this.num = num;
};

PhoneNumber.prototype.number = function () {
	var cleanNumber = this.num.replace(/\D/g, '');
	if (cleanNumber.length === 11 && cleanNumber.charAt(0) == 1) {
		return cleanNumber.slice(1);
	} else if (cleanNumber.length !== 10) {
		return "0000000000";
	}
	return cleanNumber;
};

PhoneNumber.prototype.areaCode = function () {
	var num = this.number();
	if (num !== "0000000000") {
		return num.slice(0, 3);
	}
};

PhoneNumber.prototype.toString = function () {
	var num = this.number();
	if (num !== "0000000000") {
		return "(" + num.slice(0, 3) + ") " + num.slice(4, 7) + "-" + num.slice(7, num.length);
	}
}
module.exports = PhoneNumber;