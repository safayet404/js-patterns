/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    if (n < 4) return n
    const st = []
    st[0] = 1
    st[1] = 2



    for (let i = 2; i < n; i++) {
        st[i] = st[i - 1] + st[i - 2]

    }

    return st.at(-1)

};

console.log(climbStairs(3));
