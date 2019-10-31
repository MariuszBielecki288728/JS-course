var obj = {
    h: "Hello, world!",

    foo: function () {
        return this.h
    },

    _a: 5,
    get a() {
        return this._a
    },
    set a(x) {
        this._a = x
    }
}

console.log(obj.foo())
obj.a = 11
console.log(obj.a)

obj.bar = function () {
    return this.a
}
obj._b = 0
Object.defineProperty(obj, 'b', {
  get: function() { return this._b; },
  set: function(y) { this._b = y; }
});

console.log(obj.bar())
obj.b = 22
console.log(obj.b)

