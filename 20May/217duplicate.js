/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    // let count = 0

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) return true
    //         console.log("test", nums[i], nums[j]);

    //     }
    // }

    // return false

    // const set = new Set()

    // for (let num of nums) {
    //     set.add(num)
    // }

    // return nums.length !== set.size

    let sorted = nums.sort((a, b) => a - b)

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) return true
    }
    return false



};

console.log(containsDuplicate([1, 2, 3]));
