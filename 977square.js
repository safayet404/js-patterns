/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let n = nums.length
    let result = new Array(n)
    let left = 0
    let right = n - 1

    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2
            left++
        } else {
            result[i] = nums[right] ** 2
            right--
        }
    }

    return result

};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
