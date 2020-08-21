import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import testRouter from "./routes/testRouter";
import AWS from "aws-sdk";
AWS.config.loadFromPath(__dirname + "/config/awsconfig.json");

// Create CloudWatchEvents service object
var cwevents = new AWS.CloudWatchEvents({ apiVersion: "2015-10-07" });

var params = {
  Name: "DEMO_EVENT",
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

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", testRouter);

const PORT = 4000;
app.listen(PORT, "0.0.0.0");
console.log(`Webserver listening to port ${PORT}...`);
