/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    for (let word of words) {
        let pali = word.split("").reverse().join("")
        if (pali === word) return word
    }

    return ""
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
