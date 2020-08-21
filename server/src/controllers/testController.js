import AWS from "aws-sdk";
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");

// Create CloudWatchEvents service object
var cwevents = new AWS.CloudWatchEvents({ apiVersion: "2015-10-07" });

module.exports = {
  test: async (req, res) => {
    var params = {
      Name: "DEMO_EVENT1",
      RoleArn: "IAM_ROLE_ARN",
      ScheduleExpression: "rate(5 minutes)",
      State: "ENABLED",
    };

    cwevents.putRule(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.RuleArn);
      }
    });

    res.status(200).json({
      test1: "test1",
    });
  },
  test2: async (req, res) => {
    var params = {
      Name: "DEMO_EVENT2",
      RoleArn: "IAM_ROLE_ARN",
      ScheduleExpression: "rate(5 minutes)",
      State: "ENABLED",
    };

    cwevents.putRule(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.RuleArn);
      }
    });
    res.status(200).json({
      test2: "test2",
    });
  },
  test3: async (req, res) => {
    var params = {
      Name: "DEMO_EVENT3",
      RoleArn: "IAM_ROLE_ARN",
      ScheduleExpression: "rate(5 minutes)",
      State: "ENABLED",
    };

    cwevents.putRule(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.RuleArn);
      }
    });
    res.status(200).json({
      test3: "test3",
    });
  },
};
