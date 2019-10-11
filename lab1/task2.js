function* myGenerator(start = 1, end = 100000, step = 1) {
    for (let i = start; i < end; i += step) {
        if (isDivisibleByDigits(i) && isDivisibleBySum(i)){
            yield i;
        } 
    }
}

function isDivisibleByDigits(i) {
    for (let digit of i.toString().split('').map(Number)) {
        if (i % digit !== 0) {
            return false
        }
    }
    return true
}

function isDivisibleBySum(i) {
    return !Boolean(i % i.toString().split('')
        .map(Number).reduce((a, b) => a + b, 0));
}

console.log([...myGenerator()]);
