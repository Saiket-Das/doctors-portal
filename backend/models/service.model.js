const { default: mongoose } = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: [true, "Email must be unique"],
    },

    price: {
      type: Number,
      required: [true, "Please provide product's price"],
      min: [0, "Price can't be negative"],
    },

    slots: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// --------> Query
const Service = mongoose.model("services", serviceSchema);

module.exports = Service;
