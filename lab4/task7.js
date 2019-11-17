var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('www.log')
});

let dict = {}
myInterface.on('line', function (line) {
  ip = line.split(" ")[1];
  dict[ip] = (dict[ip] || 0) + 1;
}).on('close', function() {
    for (let key of Object.keys(dict)) {
        console.log(key, dict[key])
    }
});

