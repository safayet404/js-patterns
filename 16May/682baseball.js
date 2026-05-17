/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let result = [];
    let sum = 0;

    for (let op of operations) {
        if (op === "+") {
            const newScore = result.at(-2) + result.at(-1);
            result.push(newScore);
            sum += newScore;
        } else if (op === "D") {
            const newScore = result.at(-1) * 2;
            result.push(newScore);
            sum += newScore;
        } else if (op === "C") {
            sum -= result.pop();
        } else {
            const score = Number(op);
            result.push(score);
            sum += score;
        }
    }

    return sum;
};





console.log(calPoints(["5", "2", "C", "D", "+"]));
