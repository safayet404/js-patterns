/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let str = ""
    while (columnNumber > 0) {
        columnNumber--;

        let char = String.fromCharCode(65 + (columnNumber % 26));
        str = char + str;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return str
};

console.log(convertToTitle(52));
