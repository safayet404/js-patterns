var wordPattern = function (pattern, s) {
    const words = s.split(" ")

    if (pattern.length !== words.length) return false

    const charToWord = Object.create(null);
    const wordToChar = Object.create(null);

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]

        // Check if char already mapped to different word
        if (charToWord[char] && charToWord[char] !== word) return false

        // Check if word already mapped to different char
        if (wordToChar[word] && wordToChar[word] !== char) return false

        charToWord[char] = word
        wordToChar[word] = char
    }

    return true
}

console.log(wordPattern("abba", "dog constructor constructor dog")); // true
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("aaaa", "dog cat cat dog")); // false