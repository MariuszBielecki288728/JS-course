var fs = require('fs');
fs.readFile('www.log', handler)

function handler(err, data) {
    err ? console.log(err) : console.log(data.toString("utf8"));
};