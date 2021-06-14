const { isMainThread, Worker, parentPort } = require("worker_threads");

if (isMainThread) {
  console.log("This is a main thread!!");
  const worker = new Worker("./worker.js");

  worker.on("message", (data) => {
    console.log(`On message event : ${data}`);
  });

  worker.on("error", (data) => {
    console.log(`On error event : ${data}`);
  });

  worker.on("exit", (data) => {
    console.log(`On exit event :  ${data}`);
  });

  //Sending message from main thread to worker thread
  worker.postMessage("This is from main thread to worker thread");
}
