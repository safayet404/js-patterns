/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // return strs.map(st => st.map((s => s)))

    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix
            }
        }
        prefix += char
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", 'flow', 'flight']));
