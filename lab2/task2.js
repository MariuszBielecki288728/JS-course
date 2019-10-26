obj = {
    attribute: 1,
}

console.log(`${obj.attribute} | ${obj["attribute"]}`)

// When working with dot notation, property identifies can only be alphanumeric (and _ and $).
// Properties can’t start with a number.

// When working with bracket notation, property identifiers only have to be a String.
// They can include any characters, including spaces.
// Variables may also be used as long as the variable resolves to a String.

other_obj = { a: "a" };
function foo(b) { b + 1 };
obj = {};

obj[1] = 1;
obj[other_obj] = 2;
obj[foo] = 3;
obj[(a) => a + 1] = 4;

console.log(obj)


arr = [];
console.log(arr["a"])
console.log(arr[0])
arr[0] = 0
arr["a"] = 1
arr[{a: 1}] = 2

console.log(arr)

arr.length = 2
console.log(arr)

arr.length = 0
console.log(arr)