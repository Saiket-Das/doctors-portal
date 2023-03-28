const { getServicessService } = require("../services/service.services");

exports.getServices = async (req, res) => {
  try {
    const User = await getServicessService();
    res.status(200).json({
      success: true,
      data: User,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "What the issue wrong",
      error: error.message,
    });
  }
};
