/* 
Leetcode 557. Reverse Words in a String III

Given a string s, reverse the order of characters in each word within 
a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/

/**
 * @param {string} s
 * @return {string}
 */

const reverse = (words) =>
  words.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reverse("Let's take LeetCode contest"));

const reverseIt = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseIt("Let's take LeetCode contest"));

const reverseWords = (str) => {
  let w = str.split("");

  for (let l = 0, r = w.length - 1; l < r; l++, r--) {
    const temp = w[l];
    w[l] = w[r];
    w[r] = temp;
  }
  w = w.join("").split(" ");

  for (let l = 0, r = w.length - 1; l < r; l++, r--) {
    const temp = w[l];
    w[l] = w[r];
    w[r] = temp;
  }

  return w.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
