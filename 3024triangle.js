/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {

    let count = 0
    console.log(nums);

    for (let i = 0; i < nums.length - 1; i++) {
        console.log(i);
        console.log(i + 1);

        // if (nums[i] === nums[i + 1]) count++
    }

    // if (count === 3) {
    //     return "equilateral"
    // } else if (count === 2) {
    //     return "isosceles"
    // } else {
    //     return "scalene"
    // }

};

console.log(triangleType[3, 4, 5]);
