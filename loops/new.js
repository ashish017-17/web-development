let words1 = ["JavaScript", "is", "fun"];
words1.forEach(word => {
  console.log(`${word} -> ${word.length}`);
});

let words6 = ["js", "react", "frontend", "developer"];
let longestWord = "";
words6.forEach(word => {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
});
console.log(longestWord);