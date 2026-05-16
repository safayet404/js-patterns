/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    // const obj = {}
    // for (let move of moves) {
    //     obj[move] = (obj[move] || 0) + 1
    // }
    // console.log(obj);


    // if (obj["U"] === obj["D"] && obj["R"] === obj["L"]) {
    //     return true
    // } else {
    //     return false
    // }

    let r = 0, l = 0, u = 0, d = 0;

    for (let move of moves) {
        if (move === 'R') r++;
        else if (move === "L") l++
        else if (move === 'U') u++
        else d++
    }
    return r === l && u === d;





};

console.log(judgeCircle("UDRLR"));
