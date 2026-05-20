/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        console.log(obj[nums[i]]);
        console.log("abs", Math.abs(obj[nums[i]] + i) <= k);

        if (obj[nums[i]] !== undefined && Math.abs(i - obj[nums[i]]) <= k) return true
        obj[nums[i]] = i
        console.log(obj);

    }
    return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
