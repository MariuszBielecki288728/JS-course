function createGenerator(n) {
    var _state = 0;
    return {
        next: function () {
            return {
                value: _state,
                done: _state++ >= n
            }
        }
    }
}
function iterable(n) {
    return {
        [Symbol.iterator]: function () { return createGenerator(n) }
    };
}

let foo1 = iterable(5);
let foo2 = iterable(10);
for (var f of foo1)
    console.log(f);

for (var f of foo2)
    console.log(f);