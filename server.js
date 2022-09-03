const http = require('http');
//const execSync = require('child_process').execSync; // get the command to execute shell command in javascript.
const { exec } = require('child_process');

function callBashFile(filename, req) {
  console.log(req.url);
  console.log(filename, ' is being called here.');
  exec(`sh ${filename}`, (error, stdout, stderr) => {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
}

//
//
//

// execSyn is used for executing shell command
//   const output = execSync('ls', { encoding: 'utf-8' }); // the default is 'buffer' if utf-8 isn't specified.

// console.log('Output was:\n', output);

// Let's try to execute a bash script.
// Exec command: short definition: Spawns a shell then executes the command within that shell.
// sh command spawns a shell with its own environment context.
// exec('sh hello_world.sh', (error, stdout, stderr) => {
//   console.log(stdout);
//   console.log(stderr);
//   if (error !== null) {
//     console.log(`exec error: ${error}`);
//   }
// });

// exec() is being called twice because browser sends two requests. One is our request and the other is a favicon request. Let's see what the request url looks like.

//
//
//

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      console.log(
        'Starting NEW REQUEST *****************************************'
      );
      callBashFile('cleanHouse.sh', req);
      callBashFile('add3Commits.sh', req);
      callBashFile('show_log.sh', req);
    }
    res.end('Nothing to output');
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
