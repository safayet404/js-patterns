/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {



    let result = new Array(nums.length);

    // First pass: prefix products
    result[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Second pass: multiply with suffix products
    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        if (result[i] === -0) result[i] = 0
        suffix *= nums[i];
    }

    return result;

};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
