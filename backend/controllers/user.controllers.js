const {
  getUsersService,
  createUserService,
  getAdminService,
  createAdminService,
} = require("../services/user.services");

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

exports.createUser = async (req, res, next) => {
  try {
    const User = await createUserService(req.params.email, req.body);
    if (!User.upsertedCount) {
      res.status(400).send({
        success: false,
        message: "Can not update",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data inserted",
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

exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await getAdminService(req.params.email);
    res.status(200).json({
      success: true,
      admin: admin,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.createAdmin = async (req, res, next) => {
  try {
    const admin = await createAdminService(req.params.email);

    if (!User.upsertedCount) {
      res.status(400).send({
        success: false,
        message: "Can not update",
      });
    }

    res.status(200).json({
      success: true,
      admin: admin,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
