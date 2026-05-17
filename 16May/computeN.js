/**
 * BINARY EXPONENTIATION - Computing x^n Efficiently
 * 
 * PROBLEM:
 * Compute x raised to power n (x^n)
 * Naive approach: multiply x by itself n times → O(n) time complexity
 * 
 * SOLUTION: Binary Exponentiation (Exponentiation by Squaring)
 * Uses the binary representation of n to reduce time to O(log n)
 * 
 * KEY INSIGHT:
 * - If n is even: x^n = (x^2)^(n/2)
 * - If n is odd:  x^n = x * x^(n-1)
 * 
 * EXAMPLE: x^13 where 13 = 1101 in binary
 * 13 = 8 + 4 + 1 = 2^3 + 2^2 + 2^0
 * x^13 = x^8 * x^4 * x^1
 * 
 * We compute powers by repeated squaring:
 * x^1, x^2, x^4, x^8, x^16, ...
 * Then multiply the powers where bit is 1
 */

// ============================================================
// ITERATIVE APPROACH (Most efficient)
// ============================================================
function computeNIterative(x, n) {
    // Handle negative exponents
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Handle base case
    if (n === 0) return 1;

    let result = 1;
    let base = x;

    // Process each bit of n from right to left
    while (n > 0) {
        // If current bit is 1, multiply result by current power
        if (n % 2 === 1) {
            result *= base;
        }

        // Square the base for next bit position
        base *= base;

        // Move to next bit
        n = Math.floor(n / 2);
    }

    return result;
}

// ============================================================
// RECURSIVE APPROACH (Cleaner but uses call stack)
// ============================================================
function computeNRecursive(x, n) {
    // Handle negative exponents
    if (n < 0) {
        return computeNRecursive(1 / x, -n);
    }

    // Base case
    if (n === 0) return 1;

    // Base case: if n is 1
    if (n === 1) return x;

    // If n is even: x^n = (x^2)^(n/2)
    if (n % 2 === 0) {
        const half = computeNRecursive(x, n / 2);
        return half * half;
    }

    // If n is odd: x^n = x * x^(n-1)
    return x * computeNRecursive(x, n - 1);
}

// ============================================================
// OPTIMIZED RECURSIVE (Using bit shift for performance)
// ============================================================
function computeNOptimized(x, n) {
    if (n < 0) {
        return computeNOptimized(1 / x, -n);
    }

    if (n === 0) return 1;
    if (n === 1) return x;

    // Use bitwise operation to check if n is even
    if ((n & 1) === 0) {
        const half = computeNOptimized(x, n >> 1); // n >> 1 is same as n / 2
        return half * half;
    }

    return x * computeNOptimized(x, n - 1);
}

// ============================================================
// TIME & SPACE COMPLEXITY ANALYSIS
// ============================================================
/*
NAIVE APPROACH (multiply x, n times):
- Time: O(n)
- Space: O(1)
- Example: 2^10 requires 10 multiplications

BINARY EXPONENTIATION:
- Time: O(log n)  ← KEY IMPROVEMENT!
- Space: O(1) for iterative, O(log n) for recursive (call stack)
- Example: 2^10 requires only 4 multiplications (log2(10) ≈ 3.32)

REASON FOR O(log n):
- We process each bit of n
- n has at most log2(n) bits
- Each bit position requires one multiplication
- Total: O(log n) multiplications

EXAMPLE BREAKDOWN:
x^13 where 13 = 1101₂ (binary)

Bit Position | Power Being Computed | Bit Value | Include in Result?
     0       |      x^1 = x        |     1     |      YES
     1       |      x^2            |     0     |      NO
     2       |      x^4            |     1     |      YES
     3       |      x^8            |     1     |      YES

Result = x^1 * x^4 * x^8 = x^13
*/

// ============================================================
// TEST CASES
// ============================================================
console.log("=== BINARY EXPONENTIATION TESTS ===\n");

// Test 1: Positive exponents
console.log("Test 1: Positive exponents");
console.log(`2^10 (Iterative): ${computeNIterative(2, 10)}`);           // 1024
console.log(`2^10 (Recursive): ${computeNRecursive(2, 10)}`);           // 1024
console.log(`2^10 (Optimized): ${computeNOptimized(2, 10)}`);           // 1024

// Test 2: Negative exponents
console.log("\nTest 2: Negative exponents");
console.log(`2^-3 (Iterative): ${computeNIterative(2, -3)}`);           // 0.125
console.log(`2^-3 (Recursive): ${computeNRecursive(2, -3)}`);           // 0.125
console.log(`2^-3 (Optimized): ${computeNOptimized(2, -3)}`);           // 0.125

// Test 3: Base case (n=0)
console.log("\nTest 3: Base case (n=0)");
console.log(`5^0 (Iterative): ${computeNIterative(5, 0)}`);             // 1
console.log(`5^0 (Recursive): ${computeNRecursive(5, 0)}`);             // 1
console.log(`5^0 (Optimized): ${computeNOptimized(5, 0)}`);             // 1

// Test 4: Base case (n=1)
console.log("\nTest 4: Base case (n=1)");
console.log(`7^1 (Iterative): ${computeNIterative(7, 1)}`);             // 7
console.log(`7^1 (Recursive): ${computeNRecursive(7, 1)}`);             // 7
console.log(`7^1 (Optimized): ${computeNOptimized(7, 1)}`);             // 7

// Test 5: Odd exponents
console.log("\nTest 5: Odd exponents");
console.log(`3^7 (Iterative): ${computeNIterative(3, 7)}`);             // 2187
console.log(`3^7 (Recursive): ${computeNRecursive(3, 7)}`);             // 2187
console.log(`3^7 (Optimized): ${computeNOptimized(3, 7)}`);             // 2187

// Test 6: Even exponents
console.log("\nTest 6: Even exponents");
console.log(`2^8 (Iterative): ${computeNIterative(2, 8)}`);             // 256
console.log(`2^8 (Recursive): ${computeNRecursive(2, 8)}`);             // 256
console.log(`2^8 (Optimized): ${computeNOptimized(2, 8)}`);             // 256

// Test 7: Fractional base
console.log("\nTest 7: Fractional base");
console.log(`0.5^4 (Iterative): ${computeNIterative(0.5, 4)}`);         // 0.0625
console.log(`0.5^4 (Recursive): ${computeNRecursive(0.5, 4)}`);         // 0.0625
console.log(`0.5^4 (Optimized): ${computeNOptimized(0.5, 4)}`);         // 0.0625

// ============================================================
// STEP-BY-STEP WALKTHROUGH
// ============================================================
console.log("\n=== STEP-BY-STEP WALKTHROUGH (2^13) ===\n");

function computeNWithSteps(x, n) {
    console.log(`Computing ${x}^${n} where ${n} in binary is ${n.toString(2)}\n`);

    let result = 1;
    let base = x;
    let step = 0;

    while (n > 0) {
        console.log(`Step ${step}:`);
        console.log(`  n = ${n} (binary: ${n.toString(2).padStart(4, '0')})`);
        console.log(`  base = ${base}`);
        console.log(`  result = ${result}`);

        if (n % 2 === 1) {
            result *= base;
            console.log(`  → Bit is 1: multiply result by ${base}`);
            console.log(`  → result = ${result}`);
        } else {
            console.log(`  → Bit is 0: skip`);
        }

        base *= base;
        console.log(`  → Square base: ${base}\n`);

        n = Math.floor(n / 2);
        step++;
    }

    console.log(`Final result: ${result}\n`);
    return result;
}

computeNWithSteps(2, 13);

// ============================================================
// FULL SIMULATION FOR 2^7
// ============================================================
console.log("\n" + "=".repeat(60));
console.log("=== DETAILED SIMULATION: 2^7 ===");
console.log("=".repeat(60) + "\n");

function detailedSimulation(x, n) {
    console.log(`PROBLEM: Calculate ${x}^${n}\n`);

    // Convert to binary
    const binary = n.toString(2);
    console.log(`Step 1: Convert exponent to binary`);
    console.log(`  ${n} (decimal) = ${binary} (binary)\n`);

    // Show binary breakdown
    console.log(`Step 2: Break down by bit positions (right to left):`);
    const bits = binary.split('').reverse();
    let powerSum = '';
    bits.forEach((bit, index) => {
        if (bit === '1') {
            powerSum += (powerSum ? ' + ' : '') + `${x}^${Math.pow(2, index)}`;
        }
    });
    console.log(`  ${binary} (binary)`);
    bits.forEach((bit, index) => {
        const power = Math.pow(2, index);
        console.log(`  Position ${index}: bit = ${bit}, represents ${x}^${power}`);
    });
    console.log(`\n  Therefore: ${x}^${n} = ${powerSum}\n`);

    // Simulate the algorithm
    console.log(`Step 3: Binary Exponentiation Algorithm\n`);

    let result = 1;
    let base = x;
    let exponent = n;
    let step = 0;

    console.log(`Initial state:`);
    console.log(`  result = ${result}`);
    console.log(`  base = ${base}`);
    console.log(`  exponent = ${exponent} (binary: ${exponent.toString(2)})\n`);

    const states = [];

    while (exponent > 0) {
        const bitValue = exponent % 2;
        const binaryRep = exponent.toString(2).padStart(binary.length, '0');

        console.log(`Iteration ${step + 1}:`);
        console.log(`  exponent = ${exponent} (binary: ${binaryRep})`);
        console.log(`  base = ${base}`);
        console.log(`  result = ${result}`);
        console.log(`  rightmost bit = ${bitValue}`);

        if (bitValue === 1) {
            result *= base;
            console.log(`  ✓ Bit is 1: multiply result by base`);
            console.log(`    result = ${result / base} × ${base} = ${result}`);
        } else {
            console.log(`  ✗ Bit is 0: skip multiplication`);
        }

        const oldBase = base;
        base *= base;
        console.log(`  Square the base: ${oldBase}² = ${base}`);
        console.log(`  Shift right: exponent = ${exponent} >> 1 = ${Math.floor(exponent / 2)}\n`);

        exponent = Math.floor(exponent / 2);
        states.push({ step: step + 1, result, base, exponent });
        step++;
    }

    console.log(`Final Answer: ${x}^7 = ${result}\n`);

    // Create a summary table
    console.log(`Summary Table:`);
    console.log(`┌──────────┬────────┬──────────┬──────────┬────────────┐`);
    console.log(`│ Iteration│ Bit    │ Base     │ Result   │ Exponent   │`);
    console.log(`├──────────┼────────┼──────────┼──────────┼────────────┤`);

    exponent = n;
    result = 1;
    base = x;
    let iter = 0;

    while (exponent > 0) {
        const bit = exponent % 2;
        console.log(`│ ${iter.toString().padEnd(8)}│ ${bit.toString().padEnd(6)}│ ${base.toString().padEnd(8)}│ ${result.toString().padEnd(8)}│ ${exponent.toString().padEnd(10)}│`);

        if (bit === 1) {
            result *= base;
        }
        base *= base;
        exponent = Math.floor(exponent / 2);
        iter++;
    }

    console.log(`└──────────┴────────┴──────────┴──────────┴────────────┘\n`);
}

detailedSimulation(2, 9);

// ============================================================
// PERFORMANCE COMPARISON
// ============================================================
console.log("=== PERFORMANCE COMPARISON ===\n");

function naiveApproach(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

const testX = 2;
const testN = 20;

console.log(`Computing ${testX}^${testN}:`);
console.log(`Naive approach iterations: ${testN}`);
console.log(`Binary exponentiation multiplications: ${Math.ceil(Math.log2(testN)) + 1}`);
console.log(`Speed improvement: ${(testN / (Math.ceil(Math.log2(testN)) + 1)).toFixed(2)}x faster\n`);

for (let exp = 10; exp <= 30; exp += 5) {
    const naiveOps = exp;
    const binaryOps = Math.ceil(Math.log2(exp)) + 1;
    console.log(`2^${exp.toString().padEnd(2)}: Naive=${naiveOps} ops, Binary=${binaryOps} ops, Speedup=${(naiveOps / binaryOps).toFixed(1)}x`);
}

