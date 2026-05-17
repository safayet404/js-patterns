/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let j = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            j++
            nums[j] = nums[i]
        }
    }

    return j + 1

};

console.log(removeDuplicates([1, 1, 2]));
