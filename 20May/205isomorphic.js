/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    if (s.length !== t.length) return false

    const mapS = {}
    const mapT = {}

    for (let i = 0; i < s.length; i++) {
        let charS = s[i]
        let charT = t[i]

        if (mapS[charS] !== undefined && mapS[charS] !== charT) return false
        if (mapT[charT] !== undefined && mapT[charT] !== charS) return false

        mapS[charS] = charT
        mapT[charT] = charS
    }
    return true

};

console.log(isIsomorphic("egg", "add"));
