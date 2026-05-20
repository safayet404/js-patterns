/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {

    if (n < 4) return true

    if (n % 4 === 0) return false

    return true

};

console.log(canWinNim(20));
