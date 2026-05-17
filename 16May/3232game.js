/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {

    let single = 0
    let double = 0

    // for (let num of nums) {
    //     if (num < 10) {
    //         single += num
    //         console.log(num);

    //     } else {
    //         double += num
    //     }
    // }


    // if (single > double) {
    //     return true
    // } else if (double > single) {
    //     return true
    // } else {
    //     return false
    // }

    for (let num of nums) {
        if (num < 10) single += num
        else double += num
    }

    return single !== double


};

console.log(canAliceWin([5, 5, 5, 25]));
