const User = require("../models/user.model");

exports.getUsersService = async () => {
  const users = await User.find({});
  return users;
};
