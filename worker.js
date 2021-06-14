const { isMainThread, parentPort } = require("worker_threads");

if (!isMainThread) {
  console.log("In worker thread!!");
  //send a message from worker to main thread
  parentPort.postMessage(
    "This is a message from worker thread to main thread!!"
  );

  //Throw some error from worker to main thread
  throw new Error("This error is from worker to main thread!!");

  //By default, after all activity, the worker thread gets exit . ALso can invoke exit using
  process.exit();

  //This way can receive data from main thread to worker thread
  parentPort.on("message", (data) => {
    console.log(`On worker thread message : ${data}`);
  });
}
