var Anagram = function (word) {
	this.wordToSearch = word;
};

Anagram.prototype.matches = function (possMatches) {
	// deal with any possible type/num of args
  if (typeof possMatches === 'string'){
    possMatches = Array.prototype.slice.call(arguments);
  }
	// core logic
	var anagrams = [];
	var originalWord = this.wordToSearch.toLowerCase();
	var sortedOriginalWord = originalWord.split('').sort().join('');
	// look at each word in possMatches array & determine if that word is an anagram
	possMatches.forEach(function (word, i) {
		if (word.toLowerCase() !== originalWord) {
			var sortedWord = word.toLowerCase().split('').sort().join('');
			if (sortedWord === sortedOriginalWord) {
				anagrams.push(word); // if so, push that word to a new array
			}
		}
	});
	return anagrams;
}

module.exports = Anagram;