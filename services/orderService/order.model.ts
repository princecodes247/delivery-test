const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    orderID: {
      type: String,
      required: true,
      unique: true,
    },
    details: {
      type: Array,
      default: [
        {
          name: { type: String, default: "" },
          price: { type: Number, default: 0 },
          quantity: { type: Number, default: 0 },
          total: { type: Number, default: 0 },
        },
      ],
    },
    delivered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// OrderSchema.plugin(uniqueValidator);
// OrderSchema.plugin(AutoIncrement, {inc_field: 'orderID'});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
