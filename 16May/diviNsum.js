/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    // let arr = Array.from({ length: 10 }, (_, i) => i + 1)
    let sum1 = 0
    let sum2 = 0

    let i = 1
    while (i <= n) {
        if (i % m !== 0) {
            sum1 += i
        } else if (i % m === 0) {
            sum2 += i
        }

        i++


    }

    return sum1 - sum2
};

console.log(differenceOfSums(10, 3));
