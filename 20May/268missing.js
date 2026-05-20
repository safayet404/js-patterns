/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // if (!nums.includes(nums.length)) return nums.length
    // nums.sort((a, b) => a - b)

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== i) return i
    // }
    let expectedSum = nums.length * (nums.length + 1) / 2
    let actualSum = nums.reduce((acc, cur) => acc + cur, 0)


    return expectedSum - actualSum


};

console.log(missingNumber([3, 0, 2]));
