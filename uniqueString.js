
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // console.log(s.length);
    for (let i = 0; i < s.length; i++) {

        for (let j = i + 1; j < s.length; j++) {
            if (s[i] !== s[j]) {
                return i
            }
        }
    }

};

console.log(firstUniqChar("loveleetcode"));
