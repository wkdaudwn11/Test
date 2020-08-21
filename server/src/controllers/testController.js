module.exports = {
  test: async (req, res) => {
    res.status(200).json({
      test1: "test1",
    });
  },
  test2: async (req, res) => {
    res.status(200).json({
      test2: "test2",
    });
  },
  test3: async (req, res) => {
    res.status(200).json({
      test3: "test3",
    });
  },
};
