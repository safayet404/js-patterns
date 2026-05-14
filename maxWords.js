/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {

    // console.log(sentences.length);
    // console.log(sentences[0]);
    // console.log(sentences[0].length);
    // console.log(sentences[1].split(" ").length);
    // const count = {}

    // for (let i = 0; i < sentences.length; i++) {
    //     count[i] = sentences[i].split(" ").length
    // }

    // return Math.max(...Object.values(count))

    return sentences.reduce((max, sentence) => {
        const wordCount = sentence.split(" ").length
        return Math.max(max, wordCount)
    }, 0)


};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
