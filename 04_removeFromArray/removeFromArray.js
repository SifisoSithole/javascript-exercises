const removeFromArray = function(myArray, ...args) {
    args.forEach(num => {
        let index;
        do {
            index = myArray.indexOf(num);
            if (index !== -1) myArray.splice(index, 1);
        } while (index !== -1)
    })
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
