/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    const vow = { "a": "Vowel", "A": "Vowel", "e": "Vowel", "E": "Vowel", "i": "Vowel", "I": "Vowel", "o": "Vowel", "O": "Vowel", "u": "Vowel", "U": "Vowel" };

    let start = 0
    let end = s.length - 1
    let arr = s.split("")

    while (start < end) {
        if (vow[arr[start]] === undefined && vow[arr[end]] === undefined) {

            start++
            end--



        } else if (vow[arr[start]] !== undefined && vow[arr[end]] === undefined) {
            end--
        } else if (vow[arr[start]] === undefined && vow[arr[end]] !== undefined) {

            start++
        }

        else {

            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--

        }
    }




    return arr.join("")






};

console.log(reverseVowels("promise"));
