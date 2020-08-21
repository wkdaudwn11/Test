import AWS from "aws-sdk";
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");

// Create the CloudWatchLogs service object
var cwl = new AWS.CloudWatchLogs({ apiVersion: "2014-03-28" });

var params = {
  logGroupName: "test",
  limit: 5,
};

module.exports = {
  test: async (req, res) => {
    cwl.describeSubscriptionFilters(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.subscriptionFilters);
      }
    });

    res.status(200).json({
      test1: "test1",
    });
  },
  test2: async (req, res) => {
    cwl.describeSubscriptionFilters(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.subscriptionFilters);
      }
    });
    res.status(200).json({
      test2: "test2",
    });
  },
  test3: async (req, res) => {
    cwl.describeSubscriptionFilters(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.subscriptionFilters);
      }
    });
    res.status(200).json({
      test3: "test3",
    });
  },
};
