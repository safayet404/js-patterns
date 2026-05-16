/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    return Math.max(...accounts.map(acc => acc.reduce((a, b) => a + b, 0)))

}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
