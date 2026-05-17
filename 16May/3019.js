/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    let count = 0

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i].toLowerCase() !== s[i + 1].toLowerCase()) {
            count++
        }
        // console.log("s1", s[i].toLowerCase());
        // console.log("s", s[i + 1].toLowerCase());

    }

    return count

};

console.log(countKeyChanges("aAbBcC"));
