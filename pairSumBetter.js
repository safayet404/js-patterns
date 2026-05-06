
function findPairSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    let ps = 0
    while (i < j) {
        ps = nums[i] + nums[j]

        if (ps > target) {
            j--
        } else if (ps < target) {
            i++
        } else {
            return [i, j]

        }

    }

}
const nums = [2, 7, 11, 15]
console.log(findPairSum(nums, 26));
