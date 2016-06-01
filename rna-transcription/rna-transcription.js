var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (dna) {
  var dnaMap = {
 	  "G": "C",
 	  "C": "G",
 	  "T": "A",
 	  "A": "U"
  }

  dna = dna.split('');
  var rna = "";

  for (var i = 0; i < dna.length; i++) {
  	var currChar = dna[i];
		rna += dnaMap[currChar];
	}

  return rna;
}

module.exports = DnaTranscriber;