/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let dig = 0n
    console.log("initial", dig);


    for (let digit of digits) {
        dig = dig * 10n + BigInt(digit);

        console.log("inside loop", dig);
    }

    dig = dig + 1n;
    console.log("outside loop", dig);

    let str = dig.toString()
    console.log("after the covert", str);

    let arr = []
    for (let s of str) {
        arr.push(Number(s))
    }

    return arr

    // if (digits.length === 1 && digits.at(-1) === 9) return digits = [1, 0]

    // let last = digits.at(-1) + 1
    // if (last < 10) {
    //     digits[digits.length - 1] = last
    // } else {
    //     digits[digits.length - 1] = 0
    //     digits[digits.length - 2] = digits[digits.length - 2]
    // }

    // return digits



};

console.log(plusOne([9, 9]));
