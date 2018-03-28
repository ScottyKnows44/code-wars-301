function high(x) {
  let words = x.split(" ");
  let highestScore = "";
  let scoreForWord = 0;

  words.map(function(word) {
    let score = wordScore(word);
    if (score > scoreForWord) {
      scoreForWord = score;
      highestScore = word;
    }
  });

  return highestScore;
}

function wordScore(word) {
  const allLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let score = 0;
  word.split("").map(function(letter) {
    score += allLetters.indexOf(letter.toUpperCase()) + 1;
  });
  return score;
}