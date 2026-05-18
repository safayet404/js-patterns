/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let dig = 0n
    for (let digit of digits) {
        dig = dig * 10n + BigInt(digit);
    }
    dig = dig + 1n;
    let str = dig.toString()
    let arr = []
    for (let s of str) {
        arr.push(Number(s))
    }
    return arr
};

console.log(plusOne([9, 9]));
