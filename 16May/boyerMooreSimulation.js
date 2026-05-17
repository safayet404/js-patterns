// Boyer-Moore Majority Vote Algorithm Simulation
const nums = [1, 2, 2, 1, 1];

console.log("=== Boyer-Moore Majority Vote Algorithm ===");
console.log(`Input: [${nums}]\n`);

let candidate = nums[0];
let count = 1;

console.log(`Initial: candidate = ${candidate}, count = ${count}\n`);

for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    console.log(`Step ${i}: nums[${i}] = ${num}`);

    if (count === 0) {
        candidate = num;
        console.log(`  → count was 0, set candidate = ${candidate}`);
    }

    const isMatch = num === candidate;
    const change = isMatch ? 1 : -1;
    count += change;

    console.log(`  → ${num} ${isMatch ? "===" : "!=="} ${candidate}, count ${isMatch ? "+" : "-"}= 1`);
    console.log(`  → count = ${count}\n`);
}

console.log(`Result: ${candidate}`);
console.log(`\nWhy it works:`);
console.log(`- When we see the candidate, we increment count`);
console.log(`- When we see a different number, we decrement count`);
console.log(`- If count reaches 0, we switch to a new candidate`);
console.log(`- The majority element will survive with count > 0`);
