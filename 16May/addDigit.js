/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {

    if (num === 0) return 0
    if (num > 9) return num

    while (num > 9) {
        let first = Math.floor(num / 10)
        let last = Math.floor(num % 10)


        num = first + last

        if (num < 10) return num
    }

};

console.log(addDigits(38));
