const { spawn } = require("child_process");

if (process.argv[2] == "child") {
  console.log("This is from spawned child process");
} else {
  let child = spawn(process.execPath, [__filename, "child"]);
  console.log("This is from main process");
  child.stdout.pipe(process.stdout);
}
