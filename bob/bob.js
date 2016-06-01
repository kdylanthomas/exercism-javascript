var Bob = function() {};

Bob.prototype.hey = function(input) {

	var response;
	var lastChar = input.slice(-1);
	var isSilence = input.trim() === '';
	var isShouting = input.toUpperCase() === input && !isSilence;
	var isNumbersOnly = input.search(/(\d+,?\s?)+[\.!\?]*/) != -1;

	if (isShouting && !isNumbersOnly) {
		response = "Whoa, chill out!";
	} else if (lastChar === "?") {
		response = "Sure.";
	} else if (isNumbersOnly) {
		if (lastChar === "!") {
			response = "Whoa, chill out!";
		} else {
			response = "Whatever.";
		}
	} else if (isSilence) {
			response = "Fine. Be that way!";
	} else {
		response = "Whatever.";
	}
	return response;

};

module.exports = Bob;
