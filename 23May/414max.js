/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let first = null;
    let second = null;
    let third = null;

    for (let num of nums) {
        // Skip duplicates
        if (num === first || num === second || num === third) continue;

        // num এর জন্য সঠিক position খুঁজো
        if (first === null || num > first) {
            third = second;
            second = first;
            first = num;
        } else if (second === null || num > second) {
            third = second;
            second = num;
        } else if (third === null || num > third) {
            third = num;
        }
    }

    // যদি third max না থাকে, maximum return করো
    return third !== null ? third : first;
};




console.log(thirdMax([1, 2, 3]));
