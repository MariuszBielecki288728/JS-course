function sum(...rest_args) {
    return rest_args.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3));
// 6
console.log(sum(1, 2, 3, 4, 5));
// 15