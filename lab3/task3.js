function forEach(a, f) {
    for (elem of a) {
        f(elem)
    }
}

function map(a, f) {
    function* aux_map() {
        for (elem of a) {
            yield f(elem)
        }
    }

    return [...aux_map()]
}

function filter(a, f) {
    function* aux_filter() {
        for (elem of a) {
            if (f(elem)) {
                yield elem
            }
        }
    }

    return [...aux_filter()]
}

var a = [1, 2, 3, 4];
forEach(a, _ => { console.log(_); });
// [1,2,3,4]
console.log(filter(a, x => x < 3));
// [1,2]
console.log(map(a, x => x * 2));
// [2,4,6,8]