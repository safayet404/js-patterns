/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    // for (let i = 1; i < x; i++) {

    //     if (i * i === x) return i
    //     else if (i * i < x && (i + 1) * (i + 1) !== x && (i + 1) * (i + 1) > x) return i

    // }

    if (x < 2) return x

    let left = 2
    let right = Math.floor(x / 2)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let num = mid * mid

        if (num === x) return mid
        else if (num > x) right = mid - 1
        else left = mid + 1
    }

    return right

};

console.log(mySqrt(10));
