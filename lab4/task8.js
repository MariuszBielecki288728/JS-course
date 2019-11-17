var fs = require('fs');
const util = require('util');


// pierwszy punkt w zad 6


function fspromise(path, enc) {
    return new Promise((res, rej) => {
        fs.readFile(path, enc, (err, data) => {
            if (err)
                rej(err);
            res(data);
        });
    });
}

// fspromise('www.log', 'utf-8')
//     .then(data => {
//         console.log(`data: ${data}`);
//     })
//     .catch(err => {
//         console.log(`err: ${err}`);
//     })

(async function new_syntax() {
    try {
        var a = await fspromise('www.log', 'utf-8');
        var b = await util.promisify(fs.readFile)('www.log', 'utf-8');
        var c = await fs.promises.readFile('www.log', 'utf-8')
        console.log(a);
        console.log("----------------------")
        console.log(b)
        console.log("----------------------")
        console.log(c)
    }
    catch (e) {
        console.log(e);
    }
})()

