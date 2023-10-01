const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('./test.txt.gz').pipe(zlib.createUnzip()).pipe(fs.createWriteStream('./test1.txt'));

console.log("Successfully created zip file")