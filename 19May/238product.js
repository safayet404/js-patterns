/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    // let product = []
    // let prod = 1

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         console.log("i", i);
    //         console.log("j", j);

    //         if (i === j) continue
    //         else {
    //             console.log("iteration", i, j);
    //             prod *= nums[j]
    //             if (prod === -0) prod = 0
    //             console.log("product", prod);
    //         }
    //     }
    //     product.push(prod)
    //     prod = 1
    // }
    // return product

    // let leftProd = [1]
    // let rightProd = []
    // let result = []

    // for (let i = 0; i < nums.length - 1; i++) {
    //     // if (i === 0) leftProd.push(1)
    //     // else {
    //     //     console.log("test", leftProd[i - 1], nums[i]);

    //     // }
    //     console.log("test", leftProd[i], nums[i]);

    //     leftProd.push(leftProd[i] * nums[i])

    // }
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     result[i] = leftProd[i] * rightProd;
    //     rightProd *= nums[i];
    // }
    // return result

    let prefix = [1]
    let suffix = []
    let result = []
    suffix[nums.length - 1] = 1

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
        // if (prefix[i] === -0) prefix[i] = 0
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]
        // if (suffix[i] === -0) suffix[i] = 0
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i]
        if (result[i] === -0) result[i] = 0
    }
    console.log(prefix);
    console.log(suffix);
    return result

};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
