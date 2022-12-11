//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let answer = 0;
  // * Roman numerals are usually written largest to smallest from left to right *
  for (let i = 0; i < s.length; i++) {
    value[s[i]] < value[s[i + 1]]
      ? (answer -= value[s[i]])
      : (answer += value[s[i]]);
  }
  return answer;
};
