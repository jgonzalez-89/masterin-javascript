function countCharacter(str, char) {
    // your code here
    var indices = [];
    for(var i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === char) indices.push(i);
    }
      return indices.length;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);