/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

    if (n == 1 || n === 3) return true

    if (Math.floor(n % 3) !== 0 && n < 0) return false

    // for (let i = 0; i < Math.floor(n / 3); i++) {
    //     if (3 ** i == n) return true
    // }

    while (n > 1) {
        if (n % 3 !== 0) return false
        n = n / 3
    }

    return true

};

console.log(isPowerOfThree(0));
