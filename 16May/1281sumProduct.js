/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {

    let sum = 0
    let product = 1
    while (n > 0) {
        cur = Math.floor(n % 10)
        sum += cur
        product *= cur
        n = Math.floor(n / 10)
    }
    return product - sum
};

console.log(subtractProductAndSum(234));
