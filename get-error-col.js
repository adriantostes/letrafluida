const { exec } = require('child_process');
const fs = require('fs');

exec('node temp-check.mjs', (error, stdout, stderr) => {
    if (error) {
        console.log('--- FULL ERROR OUTPUT ---');
        console.log(stderr);

        // Find the line with the code and the caret ^
        const lines = stderr.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('^')) {
                const caretPos = lines[i].indexOf('^');
                const codeLine = lines[i - 1];
                console.log('--- ERROR CONTEXT ---');
                console.log('Code around error:');
                console.log(codeLine.substring(Math.max(0, caretPos - 100), Math.min(codeLine.length, caretPos + 100)));
                console.log(' '.repeat(Math.min(100, caretPos)) + '^');
            }
        }
    }
});
