function memorize(fn) {


    const cache = {}  // closure - ei cache persist thakbe

    return function (...args) {
        const key = JSON.stringify(args)

        if (cache[key] !== undefined) {
            console.log("From cache");
            return cache[key]
        }

        console.log("Calculating ...");
        const result = fn.apply(this, args)
        cache[key] = result
        return result

    }

}

const expensiveSquare = memorize((n) => {
    return n * n
})

console.log(expensiveSquare(4));
console.log(expensiveSquare(4));
console.log(expensiveSquare(5));
