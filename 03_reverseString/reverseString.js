const reverseString = function(text) {
    let left = 0;
    let right = text.length - 1;
    textArray = text.split('');

    while (right > left){
        temp = textArray[left];
        textArray[left] = textArray[right];
        textArray[right] = temp;
        left++;
        right--;
    }
    return textArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
