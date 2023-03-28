const { getUsersService } = require("../services/user.services");

exports.getUsers = async (req, res) => {
  try {
    const User = await getUsersService();
    res.status(200).json({
      success: true,
      data: User,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
