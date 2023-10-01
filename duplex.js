const { createReadStream, createWriteStream } = require('fs');

// Create a readable stream
const readableStream = createReadStream('input.txt');

// Create a writable stream
const writableStream = createWriteStream('output.txt');

// Create a duplex stream
const duplexStream = {
  // Readable side of the duplex stream
  readable: readableStream,

  // Writable side of the duplex stream
  writable: writableStream,
};

// Pipe the data from readable to writable stream
readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});

// Close the writable stream when reading is finished
readableStream.on('end', () => {
  writableStream.end();
});

// Handle errors
readableStream.on('error', (error) => {
  console.error('Error reading input file:', error);
});

writableStream.on('error', (error) => {
  console.error('Error writing to output file:', error);
});