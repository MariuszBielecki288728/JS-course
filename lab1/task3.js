function* myGenerator(start = 2, end = 100000, step = 1) {
    for (let i = start; i < end; i += step) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

function isPrime(num) {
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

console.log([...myGenerator()]);
