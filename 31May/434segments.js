/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    console.log(s.length);


    if (s.length === 0) return 0
    const segments = s.split(" ").filter(seg => seg.length > 0)
    return segments.length



    // console.log(s.split(" ").length);

};

console.log(countSegments(""));
