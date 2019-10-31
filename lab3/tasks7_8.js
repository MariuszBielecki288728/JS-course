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

function fib1() {
    var _nextIndex = 0;
    var f = memofib2()
    return {
        next: function () {
            return {
                value: f(_nextIndex++),
                done: false
            }
        }
    }
}
function* fib2() {
    var f = memofib2()
    for (let i = 0; ; i++) {
        yield f(i)
    }
}

// var _it = fib2();
// for (var _result; _result = _it.next(), !_result.done;) {
//     console.log(_result.value);
// }


// for (let elem of fib2()) {
//     console.log(elem);
// }


function* take(it, top) {
    for (let i = 0; i < top; i++){
        yield it.next().value;
    }
}
// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take(fib1(), 10)) {
    console.log(num);
}