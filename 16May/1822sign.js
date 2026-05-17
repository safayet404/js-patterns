/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let negativeCount = 0
    for (let num of nums) {
        if (num === 0) return 0

        if (num < 0) negativeCount++

    }

    return negativeCount % 2 === 1 ? -1 : 1


};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
