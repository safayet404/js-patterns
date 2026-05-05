

const nums = [5, 2, 4, 5, 4, 5]

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
