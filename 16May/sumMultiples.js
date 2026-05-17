/**
 * ব্রুট ফোর্স সমাধান - O(n)
 * প্রতিটি সংখ্যা চেক করে যে 3, 5 বা 7 দ্বারা বিভাজ্য কিনা
 * @param {number} n - আপার লিমিট
 * @return {number} যোগফল
 */
var sumOfMultiples = function (n) {
    let sum = 0;

    // 1 থেকে n পর্যন্ত লুপ করি
    for (let i = 1; i <= n; i++) {
        // যদি 3, 5 বা 7 দ্বারা বিভাজ্য হয়
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }

    return sum;
};

/**
 * অপ্টিমাইজড সমাধান - আরো সহজভাবে
 * 
 * মূল ধারণা: একটি সূত্র ব্যবহার করে সরাসরি উত্তর বের করি
 * লুপ করার দরকার নেই!
 */
var sumOfMultiplesSimple = function (n) {

    // ধাপ ১: সাহায্যকারী ফাংশন - "কোন সংখ্যা দ্বারা কতটি গুণিতক আছে এবং তাদের যোগফল কত?"
    function getSum(divisor, limit) {
        // উদাহরণ: getSum(3, 10)
        // 3 এর গুণিতক: 3, 6, 9
        // কতটি আছে: 10 ÷ 3 = 3 টি

        const count = Math.floor(limit / divisor);  // কতটি সংখ্যা আছে

        // যোগফল = divisor × (1 + 2 + 3 + ... + count)
        //        = divisor × count × (count + 1) / 2
        // উদাহরণ: 3 × (1+2+3) = 3 × 3 × 4 / 2 = 18

        const sum = divisor * count * (count + 1) / 2;

        return sum;
    }

    // ধাপ ২: তিনটি সংখ্যার গুণিতক যোগ করি
    let result = getSum(3, n) + getSum(5, n) + getSum(7, n);

    // ধাপ ৩: কিছু সংখ্যা দুইবার গণনা হয়েছে, তাদের বাদ দিই
    //        15 = 3 এবং 5 উভয়ের গুণিতক
    //        21 = 3 এবং 7 উভয়ের গুণিতক
    //        35 = 5 এবং 7 উভয়ের গুণিতক
    result = result - getSum(15, n) - getSum(21, n) - getSum(35, n);

    // ধাপ ৪: 105 = 3, 5, 7 এর গুণিতক
    //        এটি তিনবার বাদ দেওয়া হয়েছে, একবার যোগ করতে হবে
    result = result + getSum(105, n);

    return result;
};

// ============== টেস্ট কেস ==============

// সাধারণ টেস্ট
const testCases = [
    { n: 7, expected: 21 },      // 3+5+6+7 = 21
    { n: 10, expected: 40 },     // 3+5+6+7+9+10 = 40
    { n: 9, expected: 30 },      // 3+5+6+7+9 = 30
    { n: 15, expected: 81 }      // 3+5+6+7+9+10+12+14+15 = 81
];

console.log("=== টেস্ট রেজাল্ট ===\n");

testCases.forEach(({ n, expected }) => {
    const brute = sumOfMultiples(n);
    const simple = sumOfMultiplesSimple(n);
    const status = brute === simple && brute === expected ? "✓" : "✗";

    console.log(`${status} n=${n}:`);
    console.log(`   ব্রুট ফোর্স: ${brute}`);
    console.log(`   সহজ অপ্টিমাইজড: ${simple}`);
    console.log(`   প্রত্যাশিত: ${expected}\n`);
});

// বড় সংখ্যার জন্য স্পিড টেস্ট
console.log("=== স্পিড কম্পেয়ার ===\n");

const largeN = 1000000;

console.time("ব্রুট ফোর্স (O(n))");
const bruteLarge = sumOfMultiples(largeN);
console.timeEnd("ব্রুট ফোর্স (O(n))");

console.time("সহজ অপ্টিমাইজড (O(1))");
const simpleLarge = sumOfMultiplesSimple(largeN);
console.timeEnd("সহজ অপ্টিমাইজড (O(1))");

console.log(`\nফলাফল মিলেছে: ${bruteLarge === simpleLarge ? "হ্যাঁ" : "না"}\n`);
