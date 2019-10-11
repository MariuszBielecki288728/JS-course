const {
    performance,
    PerformanceObserver
  } = require('perf_hooks');

function fib(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
function fib_it(n) {
    return [...Array(n).keys()].reduce(([a, b], _) => [a + b, a], [1, 0])[1]
}

function* resGenerate(start = 10, end = 15, fun) {
    for (i = start; i < end; i++) {
        var t0 = performance.now();
        fun(i);
        var t1 = performance.now();
        yield t1-t0
    }
}

function* rowGenerate(start = 10, end = 15) {
    for (i = start; i < end; i++) {
        yield `n = ${i}`
    }
}

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

arr_rec = [...resGenerate(10, 42, fib)]
arr_it = [...resGenerate(10, 42, fib_it)]
rows = [...rowGenerate(10, 42)]
console.table(zip([rows, arr_rec, arr_it]))
