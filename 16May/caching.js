function memorize(fn) {


    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)

        if (cache[key] !== undefined) {
            console.log("from cache");
            return cache[key]

        }
        console.log("calculating...");
        const result = fn.apply(this, args)
        cache[key] = result
        return result

    }
}

const expensiveSquare = memorize((n) => {
    return n * n

})

console.log(expensiveSquare(5));
console.log(expensiveSquare(5));
console.log(expensiveSquare(4));
console.log(expensiveSquare(4));
console.log(expensiveSquare(2));
