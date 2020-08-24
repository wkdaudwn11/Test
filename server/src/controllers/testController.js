import { log } from "../commons/logger";

module.exports = {
  test: async (req, res) => {
    const { ip, country_name, country_capital } = req.body.browserInfo;
    await log(`api2 - test1: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test1: "api2 - test1",
    });
  },
  test2: async (req, res) => {
    const { ip, country_name, country_capital } = req.body.browserInfo;
    await log(`api2 - test2: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test2: "api2 - test2",
    });
  },
  test3: async (req, res) => {
    const { ip, country_name, country_capital } = req.body.browserInfo;
    await log(`api2 - test3: ${ip} / ${country_name} / ${country_capital}`);
    res.status(200).json({
      test3: "api2 - test3",
    });
  },
};
