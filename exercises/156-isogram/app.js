function isIsogram(text) {
  if (text == "") return true

  let letters = text.toLowerCase().split("");

  let isogram = {};
  let isogramEvaluator = true;
  letters.forEach(letter => {
    if (isogram[letter] === undefined) {
      isogram[letter] = 1;
    } else {
      isogramEvaluator = false;
      return 
    }
  });

  return isogramEvaluator
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false