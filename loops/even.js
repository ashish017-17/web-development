let nums = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
nums.forEach(num => {
  if (num % 2 === 0) {
    evenCount++;
  }
});
console.log("Number of even numbers:", evenCount);