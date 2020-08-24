const {
  cloudWatchPutLogEvents,
  cloudWatchDescribeLogStreams,
} = require("./aws");
// const { getConfig } = require("../config");
let nextSequenceToken = null; // need this for sending log to AWS. Will update after each request.
let eventsQueue = [];
let interval = null;
// use a queue to send log to couldWatch one at a time to avoid throttling

const GROUP_NAME = "api",
  STREAM_NAME = "prod";

async function startLogQueueToCloudWatch() {
  if (interval == null) {
    interval = setInterval(async () => {
      if (eventsQueue.length == 0) {
        clearInterval(interval);
        interval = null;
        return;
      }
      let event = eventsQueue.shift();
      try {
        console.log(event);
        let res = await cloudWatchPutLogEvents(
          [event],
          GROUP_NAME,
          STREAM_NAME,
          nextSequenceToken
        );
        nextSequenceToken = res.nextSequenceToken; // store the new sequence token
      } catch (error) {
        // to allow retry
        console.log(error);
      }
    }, 1000);
  }
}
async function log(message) {
  if (nextSequenceToken == null) {
    // just ran server, get the token from AWS
    let res = await cloudWatchDescribeLogStreams(GROUP_NAME);
    nextSequenceToken = res.logStreams[0].uploadSequenceToken;
  }
  eventsQueue.push({
    message: message,
    timestamp: new Date().getTime(),
  });
  await startLogQueueToCloudWatch();
}
exports.log = log;
