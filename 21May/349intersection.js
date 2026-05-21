/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    const setA = new Set(nums1)
    const setB = new Set(nums2)

    const matched = setA.intersection(setB)
    console.log(matched);

    const matchedArray = Array.from(matched)
    console.log(matchedArray);

    return matchedArray




};

console.log(intersection([1, 2, 2, 1], [2, 2]));
