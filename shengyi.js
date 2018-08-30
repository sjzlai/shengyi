var childProcess = require('child_process');
console.log(123);

childProcess.exec('npm run build && npm run  start', function(err, stdout, stderr) {
    if (err) {
        console.log('exex ');
    }
})

