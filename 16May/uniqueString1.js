
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (string) {


    let obj = {}

    for (let s of string) {
        obj[s] = (obj[s] || 0) + 1
    }

    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] === 1) {
            return i
        }

    }
    return -1


};

console.log(firstUniqChar("loveleetcode"));
