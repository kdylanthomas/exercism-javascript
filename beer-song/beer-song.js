var BeerSong = function () {};

BeerSong.prototype.verse = function(n) {
	var verse = "";
	if (n == 0) {
		verse = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	} else if (n == 1) {
		verse = "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
	} else if (n == 2) {
		verse = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
	} else {
		verse = n + " bottles of beer on the wall, " + n + " bottles of beer.\nTake one down and pass it around, " + (n - 1) + " bottles of beer on the wall.\n";
	};
	return verse;
};

BeerSong.prototype.sing = function (start, end) {
	var song = "";
	if (!end) end = 0;
	for (var i = start; i >= end; i--) {
		song += this.verse(i);
		if (i !== end) song += '\n';
	}
	return song;
}

module.exports = BeerSong;
