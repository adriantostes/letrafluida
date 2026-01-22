const { exec } = require('child_process');

exec('node temp-check.mjs', (error, stdout, stderr) => {
    if (error) {
        console.log('--- ERROR STACK ---');
        console.log(error.stack || stderr);
        // Try to extract line/col
        // Format: file:///C:/.../temp-check.mjs:22
        //         ... code ...
        //         ^^^^
    } else {
        console.log('No error found.');
    }
});
