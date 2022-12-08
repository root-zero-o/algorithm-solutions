//https://leetcode.com/problems/palindrome-number/

// my answer
let isPalindrome = function (x) {
  const arr = x.toString().split("");
  const halfLength = arr.length / 2;
  const first = arr.slice(0, halfLength).join("");
  let last = "";
  if (arr.length % 2 === 0) {
    last = arr.slice(halfLength).reverse().join("");
  } else {
    last = arr
      .slice(halfLength + 1)
      .reverse()
      .join("");
  }
  if (first === last) {
    return true;
  }
  return false;
};

// another answer
const isPalindrome = (x) => {
  const y = x.toString();
  const arr = [];
  for (let i = y.length - 1; i >= 0; i--) {
    arr.push(y[i]);
  }
  const reversed = arr.join("").toString();
  return reversed == y;
};
