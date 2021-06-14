const { exec } = require("child_process");

//exec is a child process of node mail process, through which can execute directly any binary or execute any resource in the child process
exec("type sample.js", (err, stdout, stderr) => {
  console.log(stdout);
});
