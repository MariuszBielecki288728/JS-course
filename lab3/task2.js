// function fib(n) {
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1
//     } else {
//         return fib(n - 1) + fib(n - 2)
//     }
// }

// function memoize(fn) {
//     var cache = {};

//     return function(n) {
//         if (n in cache) {
//             return cache[n]
//         } else {
//             var result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

function memofib2() {
    var cache = {};

    var f = function (n) {
        if (n === 0) {
            return 0
        } else if (n === 1) {
            return 1
        } else if (n in cache) {
            return cache[n]
        } else {
            return cache[n] = f(n - 1) + f(n - 2)
        }
    }
    return f
}
// var memofib = memoize(fib);

// console.time()
// console.log(memofib(42))
// console.timeEnd()
// console.time()
// console.log(memofib(42))
// console.timeEnd()

var mf2 = memofib2()

console.time()
console.log(mf2(42))
console.timeEnd()
console.time()
console.log(mf2(42))
console.timeEnd()