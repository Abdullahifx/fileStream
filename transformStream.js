const {Transform} = require('stream');
const createUpperCaseStream = () =>{
    return new Transform({
        transform(chunk, enc, callback) {
            const uppercase = chunk.toString().toUpperCase();
            callback(null, uppercase);
        }
    })
}

const upperCase = createUpperCaseStream();
process.stdin.pipe(upperCase).pipe(process.stdout);
