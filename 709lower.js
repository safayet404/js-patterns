/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {

    let lower = ""

    for (let word of s) {
        if (word.charCodeAt() >= 65 && word.charCodeAt() <= 90) {
            lower = lower + String.fromCharCode(word.charCodeAt() + 32)
            console.log("if", lower);
            console.log("if", word.charCodeAt());

        } else {
            lower = lower + String.fromCharCode(word.charCodeAt())
            console.log("else", lower);

        }


    }

    return lower

};

console.log(toLowerCase("Hello"));

console.log("H".charCodeAt());

