

const nums = [1, 2, 2, 1, 1]

const hashed = new Map()

for (let i = 0; i < nums.length; i++) {
    if (hashed.has(nums[i])) {
        hashed.set(nums[i], hashed.get(nums[i]) + 1)
    } else {
        hashed.set(nums[i], 1)
    }



}

for (let [key, value] of hashed) {
    if (value > Math.floor(nums.length / 2)) {
        console.log(`${key}`);

    }
}


console.log(hashed);
