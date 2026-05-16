/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    if (moves[0] === "R" && moves[1] === "L" || moves[0] === "L" && moves[1] === "R") {
        return true
    } else if (moves[0] === "U" && moves[1] === "D" || moves[0] === "D" && moves[1] === "U") {
        return true
    } else {
        return false
    }

};

console.log(judgeCircle("UL"));
