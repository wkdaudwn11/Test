import { log } from "../commons/logger";

module.exports = {
  test: async (req, res) => {
    await log("test1");
    res.status(200).json({
      test1: "test1",
    });
  },
  test2: async (req, res) => {
    await log("test2");
    res.status(200).json({
      test2: "test2",
    });
  },
  test3: async (req, res) => {
    await log("test3");
    res.status(200).json({
      test3: "test3",
    });
  },
};
