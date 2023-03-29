const { getServicessService } = require("../services/service.services");

exports.getServices = async (req, res) => {
  try {
    const service = await getServicessService();
    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
