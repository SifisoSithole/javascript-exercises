function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

const sumAll = function(num1, num2) {
    let sum = 0;
    let start, end;

    if (!isInteger(num1) || !isInteger(num2)) return 'ERROR';
    
    if (num1 > num2){
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    if (start < 0) return 'ERROR';

    for (let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
