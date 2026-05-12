/**
 * BEST TIME TO BUY AND SELL STOCK
 * 
 * Problem: Find the maximum profit from buying and selling a stock once
 * Given: Array of prices for each day
 * Constraint: Must buy before sell
 * 
 * Strategy: Track minimum price seen so far, calculate profit at each price
 * Time: O(n), Space: O(1)
 */

const stock = [7, 1, 5, 3, 6, 4];
// Answer: 5 (buy at 1, sell at 6)

let maxProfit = 0;
let minPrice = stock[0];

for (let i = 0; i < stock.length; i++) {
    // Calculate profit if we sell at current price
    const profit = stock[i] - minPrice;

    // Update max profit
    maxProfit = Math.max(maxProfit, profit);

    // Update minimum price seen so far
    minPrice = Math.min(minPrice, stock[i]);
}

console.log("Maximum Profit:", maxProfit);

// ============================================================
// STEP-BY-STEP TRACE
// ============================================================
console.log("\n=== STEP-BY-STEP WALKTHROUGH ===\n");

const prices = [7, 1, 5, 3, 6, 4];
let profit = 0;
let lowest = prices[0];

console.log("Stock prices: [7, 1, 5, 3, 6, 4]");
console.log("Goal: Find max profit by buying and selling once\n");

for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - lowest;

    console.log(`Day ${i}: Price = ${currentPrice}`);
    console.log(`  Minimum price so far: ${lowest}`);
    console.log(`  Profit if sell today: ${currentPrice} - ${lowest} = ${potentialProfit}`);

    if (potentialProfit > profit) {
        profit = potentialProfit;
        console.log(`  ✓ New max profit: ${profit}`);
    } else {
        console.log(`  No improvement`);
    }

    if (currentPrice < lowest) {
        console.log(`  ✓ New minimum price found: ${currentPrice}`);
        lowest = currentPrice;
    }
    console.log();
}

console.log(`\nFinal Answer: Maximum Profit = ${profit}`);
console.log(`Strategy: Buy at price 1 (day 1), Sell at price 6 (day 4)`);

// ============================================================
// COMPARISON: NAIVE vs OPTIMAL
// ============================================================
console.log("\n=== ALGORITHM COMPARISON ===\n");

// NAIVE: Check all pairs
function naiveMaxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}

// OPTIMAL: Single pass
function optimalMaxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}

const testPrices = [7, 1, 5, 3, 6, 4];
console.log("Test Array: [7, 1, 5, 3, 6, 4]");
console.log(`Naive Approach (Brute Force): ${naiveMaxProfit(testPrices)} - O(n²) - checks all pairs`);
console.log(`Optimal Approach (Single Pass): ${optimalMaxProfit(testPrices)} - O(n) - one pass only`);
