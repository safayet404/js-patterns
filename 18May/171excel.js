/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {

    let column = 0
    for (let i = 0; i < columnTitle.length; i++) {
        column = column * 26 + (columnTitle.charCodeAt(i) - 64)
    }
    return column

};

console.log(titleToNumber("AB"));
