const fs = require('fs');
const path = require('path');
const fileLocation = path.join(process.cwd());
const watcher = fs.watch(fileLocation);

watcher.on('change', (eventType, filename) => {
  console.log(`File ${filename} changed. Event type: ${eventType}`);
});

watcher.on('error', (error) => {
  console.error('Error:', error);
});