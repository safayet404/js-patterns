/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {


    if (x < 0) return false
    if (x === 0 || x < 10) return true
    let value = 0
    let original = 121

    while (original > 0) {
        let lastDigit = Math.floor(original % 10)
        console.log("original", original);

        original = Math.floor(original / 10)
        value = (value * 10) + lastDigit
        console.log("original", original);

    }

    return value === x

};

console.log(isPalindrome(12));
