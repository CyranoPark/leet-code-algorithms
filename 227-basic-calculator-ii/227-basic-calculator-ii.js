/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    
    let lastOperator = '+';
    let currentNumber = '';
    
    for (let i = 0; i < s.length; i++) {
        const integer = s[i];
        
        if (!isNaN(integer)) {
            currentNumber = currentNumber + integer;
            
            if (i !== s.length - 1) continue;
        }

        if (lastOperator === '*') {
            const lastInteger = stack.pop();
            stack.push(lastInteger * Number(currentNumber));
            currentNumber = '';
        }
        
        if (lastOperator === '/') {
            const lastInteger = stack.pop();
            const divided = lastInteger / Number(currentNumber);
            
            stack.push(divided < 0 ? Math.ceil(divided) : Math.floor(divided));
            currentNumber = '';
        }

        if (lastOperator === '+') {
            stack.push(Number(currentNumber));
            currentNumber = '';
        }
        if (lastOperator === '-') {
            stack.push(Number(currentNumber) * -1);
            currentNumber = '';
        }
        
        lastOperator = integer;
    }

    return stack.reduce((acc, num) => acc + num, 0);
};