const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// Create the directory if it doesn't exist
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Create 5 text files
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(path.join(dirPath, `hello${i}.txt`), "a simple text file");
}

// Read and list files in the directory
fs.readdir(dirPath, (err, files) => {
    if (err) {
        return console.error('Unable to read directory:', err);
    }
    files.forEach((item) => {
        console.log(item);
    });
});
