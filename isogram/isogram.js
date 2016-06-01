var Isogram = function (word) {
	this.word = word;
}

Isogram.prototype.isIsogram = function () {
	var wordToTest = this.word.toLowerCase().replace(/-| /g, '').split('').sort();
	for (var i = 0; i < wordToTest.length; i++) {
		if (wordToTest[i] === wordToTest[i+1]) {
			return false;
		} else if (wordToTest[i] !== wordToTest[i+1] && i === wordToTest.length - 1) {
			return true;
		}
	}
}

module.exports = Isogram;