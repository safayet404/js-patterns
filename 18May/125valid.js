/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    // console.log(s.match(/[a-zA-z]/g).join("").toLowerCase());

    let str = (s.match(/[a-z0-9]/gi) || []).join("").toLowerCase();
    let rev = str.split("").reverse().join("")

    return str === rev

};


console.log(isPalindrome(".,"));

