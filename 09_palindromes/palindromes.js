function removePunctuation(text) {
    let punctuation = /[\.,?! ]/g;
    let newText = text.replace(punctuation, "");
    return newText;
}

const palindromes = function (str) {
    let newStr = str.toLowerCase();
    newStr = removePunctuation(newStr);
    let leftIndex = newStr.length - 1;

    for (let rightIndex = 0; rightIndex < leftIndex; rightIndex++, leftIndex--){
        if (newStr[rightIndex] !== newStr[leftIndex])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
