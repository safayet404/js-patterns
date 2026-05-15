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
 * অপ্টিমাইজড সমাধান - O(1)
 * Inclusion-Exclusion Principle ব্যবহার করে
 * 
 * ধারণা:
 * sum(3) + sum(5) + sum(7)     // তিনটি যোগ করি
 * - sum(15) - sum(21) - sum(35) // যা দুইবার গণনা হয়েছে বাদ দিই
 * + sum(105)                    // যা তিনবার বাদ দেওয়া হয়েছে একবার যোগ করি
 * 
 * @param {number} n - আপার লিমিট
 * @return {number} যোগফল
 */
var sumOfMultiplesOptimized = function (n) {
    /**
     * সাহায্যকারী ফাংশন: d দ্বারা বিভাজ্য সংখ্যাগুলোর যোগফল
     * 
     * উদাহরণ: n=10, d=3
     * বিভাজ্য: 3, 6, 9 = 3×1, 3×2, 3×3
     * যোগফল = 3×(1+2+3) = 3 × (3×4/2) = 18
     * 
     * সূত্র: d × count × (count + 1) / 2
     * যেখানে count = floor(n/d)
     */
    const sumDivisible = (d, num) => {
        const count = Math.floor(num / d);
        return d * count * (count + 1) / 2;
    };

    // Inclusion-Exclusion Principle প্রয়োগ করি
    return (
        sumDivisible(3, n) +          // 3 এর গুণিতক যোগ করি
        sumDivisible(5, n) +          // 5 এর গুণিতক যোগ করি
        sumDivisible(7, n) -          // 7 এর গুণিতক যোগ করি
        sumDivisible(15, n) -         // 15 (3×5) বাদ দিই (দুইবার গণনা)
        sumDivisible(21, n) -         // 21 (3×7) বাদ দিই (দুইবার গণনা)
        sumDivisible(35, n) +         // 35 (5×7) বাদ দিই (দুইবার গণনা)
        sumDivisible(105, n)          // 105 (3×5×7) যোগ করি (তিনবার বাদ দেওয়া)
    );
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
    const optimized = sumOfMultiplesOptimized(n);
    const status = brute === optimized && brute === expected ? "✓" : "✗";

    console.log(`${status} n=${n}:`);
    console.log(`   ব্রুট ফোর্স: ${brute}`);
    console.log(`   অপ্টিমাইজড: ${optimized}`);
    console.log(`   প্রত্যাশিত: ${expected}\n`);
});

// বড় সংখ্যার জন্য স্পিড টেস্ট
console.log("=== স্পিড কম্পেয়ার ===\n");

const largeN = 1000000;

console.time("ব্রুট ফোর্স (O(n))");
const bruteLarge = sumOfMultiples(largeN);
console.timeEnd("ব্রুট ফোর্স (O(n))");

console.time("অপ্টিমাইজড (O(1))");
const optimizedLarge = sumOfMultiplesOptimized(largeN);
console.timeEnd("অপ্টিমাইজড (O(1))");

console.log(`\nফলাফল মিলেছে: ${bruteLarge === optimizedLarge ? "হ্যাঁ" : "না"}\n`);
