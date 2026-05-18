/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let left = 0
    let right = nums.length - 1
    let mid = Math.floor(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
            mid = Math.floor((left + right) / 2)
        } else {
            left = mid + 1
            mid = Math.floor((left + right) / 2)
        }
    }



};

console.log(searchInsert([1, 3, 5, 6], 6));
