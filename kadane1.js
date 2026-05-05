

const nums = [-3, -2, -3]

let maxNum = -Infinity;
let maxSum = -Infinity

for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i]) {
        maxNum = nums[i]
        maxSum = nums[i]
    } else if (maxNum === nums[i]) {
        maxSum += nums[i]
    }
}

console.log(maxSum);
