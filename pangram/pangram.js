var Pangram = function (sentence) {
	this.sentence = sentence;
};

Pangram.prototype.isPangram = function () {
	var lettersInSentence = this.sentence.toLowerCase().split('');
	var lettersRepresented = [];
	lettersInSentence.forEach(function (el, i) {
		if (el.match(/[a-z]/) && lettersRepresented.indexOf(el) === -1) {
			lettersRepresented.push(el);
		}
	});
	if (lettersRepresented.length === 26) return true;
	else return false;
}

module.exports = Pangram;
