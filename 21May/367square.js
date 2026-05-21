/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {

    let left = 1
    let right = Math.floor(num / 2)
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        // 1. Recalculate mid inside the loop on every single step
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) {
            return true; // Found it!
        } else if (square > num) {
            right = mid - 1; // Too big! Cut off the entire right half
        } else {
            left = mid + 1;  // Too small! Cut off the entire left half
        }
    }

    return false
};


console.log(isPerfectSquare(9));
