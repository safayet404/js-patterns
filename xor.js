// /**
//  * @param {number} n
//  * @param {number} start
//  * @return {number}
//  */
// var xorOperation = function (n, start) {

//     let xor = 0
//     // লুপ 0 থেকে n-1 পর্যন্ত
//     for (let i = 0; i < n; i++) {
//         const num = start + 2 * i;  // Array element: start + 2*i
//         console.log("inside loop", num);
//         xor = xor ^ num;
//         console.log("inside loop", xor, i);
//     }
//     console.log("xor op", xor);

//     return xor

// };

// console.log(xorOperation(5, 0));
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {

    let xor = 0
    for (let i = 0; i < n; i++) {


        let num = start + 2 * i

        xor = xor ^ num


    }


    return xor
};

console.log(xorOperation(1, 7));