const User = require("../models/user.model");

exports.getUsersService = async () => {
  const users = await User.find({});
  return users;
};

exports.createUserService = async (paramEmail, userDetails) => {
  const filter = { email: paramEmail };
  const updateDoc = {
    $set: userDetails,
  };
  const options = { upsert: true };

  const result = await User.updateOne(filter, updateDoc, options);
  // var token = jwt.sign({ email: email },
  //     process.env.SECRET_TOKEN,
  //     { expiresIn: '1d' }
  // );

  return result;
};

exports.getAdminService = async (paramEmail) => {
  const filter = { email: paramEmail };
  const user = await User.findOne(filter);
  const isAdmin = user.role === "admin";
  return { isAdmin, user };
};
