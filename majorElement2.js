

var majorityElement = function (nums) {

    const count = {}
    const half = Math.floor(nums.length / 2)

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1
        console.log(count);
        if (count[num] > half) {
            return num
        }
    }


}

console.log(majorityElement([1, 2, 2, 1, 1]));
