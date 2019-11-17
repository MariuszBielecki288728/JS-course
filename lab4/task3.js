function Foo() {}
Foo.prototype.Bar = function() {
    let Qux = function() {
        console.log("I am Qux!")
    }
    return function() {
        Qux();
    }
}()

f = new Foo()
f.Bar()

function Foo2() {
    let Qux = function() {
        console.log("I am Qux!")
    }
    return {
        Bar: function() {
            Qux()
        }
    }
}


f2 = new Foo2()
f2.Bar()