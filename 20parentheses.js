/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    if (typeOfBracket(s[0]) === "closing") return false


    function typeOfBracket(char) {
        if (char === '(' || char === '{' || char === '[') {
            return "opening"
        } else if (char === ')' || char === '}' || char === ']') {
            return "closing"
        }
    }

    function typeOfClosing(char) {
        if (char === ')') {
            return "fClosing"
        } else if (char === '}') {
            return "sClosing"
        } else {
            return "tClosing"
        }
    }

    function typeOfTest(char) {
        if (char === '(') {
            return "fClosing"
        } else if (char === '{') {
            return "sClosing"
        } else {
            return "tClosing"
        }
    }

    let arr = []

    for (let bra of s) {
        if (typeOfBracket(bra) === "opening") {
            console.log(typeOfBracket(bra));

            arr.push(bra)
            console.log("push", bra);
            console.log("push", arr);


        } else {
            console.log(typeOfBracket(bra));
            console.log("bra", bra);

            console.log("list", arr);

            console.log(typeOfClosing(arr.at(-1)));


            if (typeOfClosing(bra) === typeOfTest(arr.at(-1))) {

                arr.pop()
                console.log("pop", arr);

            } else {

                return false
            }
        }
    }

    if (arr.length === 0) {
        return true
    } else {
        return false
    }

};

console.log(isValid("]()"));
