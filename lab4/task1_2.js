function Tree(left, rigth, value) {
    this.left = left;
    this.rigth = rigth;
    this.value = value;
}

Tree.prototype[Symbol.iterator] = function () {
    return gen(this)
};

function* gen(t) {

    if (t !== null) {
        console.log(t.value);
        yield* gen(t.left);
        yield* gen(t.rigth);
    }
}
let t =
    new Tree(
        new Tree(
            new Tree(null, null, 0),
            new Tree(null, null, 0),
            1),
        new Tree(null, null, 1),
        2);

// enumeracja wartości z węzłów
for (var e of t) {
    console.log(e);
}