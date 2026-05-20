/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

    if (n == 1 || n === 3) return true

    for (let i = 0; i < Math.floor(n / 3); i++) {
        if (3 ** i == n) return true
    }

    return false



};

console.log(isPowerOfThree(387420488));
