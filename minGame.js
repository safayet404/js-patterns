/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {

    let arr = []
    // let firstMin = nums[0]
    // let secondMin = 0

    // let minNum = nums[0]

    // for (let i = 0; i < nums.length; i++) {
    //     if (minNum > nums[i]) {
    //         minNum = nums[i]

    //     }
    // }

    while (nums.length > 0) {
        let aliceIndex = nums.indexOf(Math.min(...nums))
        let aliceValue = nums.splice(aliceIndex, 1)[0]
        console.log(aliceValue);

        let bobIndex = nums.indexOf(Math.min(...nums))
        let bobValue = nums.splice(bobIndex, 1)[0]

        console.log(bobValue);

        arr.push(bobValue)
        arr.push(aliceValue)

        console.log(arr);



    }

    return arr

};

console.log(numberGame([5, 4, 2, 3]));
