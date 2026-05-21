/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    const count = {}
    const result = []

    for (let num of nums1) {
        count[num] = (count[num] || 0) + 1
    }
    console.log("object", count);


    for (let num of nums2) {
        if (count[num] > 0) {
            result.push(num)
            count[num]--
            console.log("test", count);

        }
    }
    return result

};

console.log(intersection([1, 2, 2, 1], [1, 2]));
