/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    const sorted = nums.sort((a, b) => a - b)
    console.log(sorted);

    const dupli = [...new Set(sorted)]
    console.log("dupli", dupli);
    let min = dupli[0]
    let max = dupli[dupli.length - 1]

    const missing = []

    for (let i = min; i <= max; i++) {
        if (dupli[i] !== i) {
            missing.push(i)
        }
    }

    console.log("d", missing);




}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8]));
