const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: [true, "Email must be unique"],
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// --------> Query
const User = mongoose.model("users", userSchema);

module.exports = User;
