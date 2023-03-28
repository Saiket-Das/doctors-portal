const Service = require("../models/service.model");

exports.getServicessService = async () => {
  const users = await Service.find({});
  return users;
};
