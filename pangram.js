/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {

    const mySet = new Set()
    for (let i = 0; i < sentence.length; i++) {
        mySet.add(sentence[i])
    }

    console.log(mySet.size);

    if (mySet.size === 26) {
        return true
    }
    return false

};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
