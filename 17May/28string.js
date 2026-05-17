/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {


    // for (let i = 0; i < haystack.length - needle.length; i++) {
    //     console.log(haystack.substring(i, needle.length));

    //     if (haystack.substring(i, i + needle.length) === needle) return i
    // }

    // return -1

    return haystack.indexOf(needle)

    // let i = 0
    // while (i !== haystack.length) {
    //     console.log(haystack.substring(i, needle.length));
    //     console.log(i);

    //     if (haystack.substring(i, i + needle.length) === needle) return i

    //     i += needle.length
    // }

    // return -1


};

console.log(strStr("mississippi", "issi"));
