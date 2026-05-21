/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    let start = 0
    let end = s.length - 1

    let mid = Math.floor((start + end) / 2)
    while (mid !== end) {
        let temp = s[end]
        s[end] = s[start]
        s[start] = temp
        start++
        end--
        console.log("str", s);

    }

    return s

    // console.log(s.sort((a, b) => a - b));

};

console.log(reverseString(["h", "e", "l", "l", "o"]));
