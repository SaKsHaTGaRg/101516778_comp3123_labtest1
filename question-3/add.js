
// Q3/add.js
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn’t exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created.");
}

// Change working directory to Logs
process.chdir(logsDir);

// Create 10 log files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`Created file: ${fileName}`);
}
