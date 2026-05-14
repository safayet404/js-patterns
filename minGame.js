/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = []

    while (nums.length > 0) {
        let aliceIndex = nums.indexOf(Math.min(...nums))
        let aliceValue = nums.splice(aliceIndex, 1)[0]
        let bobIndex = nums.indexOf(Math.min(...nums))
        let bobValue = nums.splice(bobIndex, 1)[0]

        arr.push(bobValue)
        arr.push(aliceValue)
    }

    return arr
}
    ;