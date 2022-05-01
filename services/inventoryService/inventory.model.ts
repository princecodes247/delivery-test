const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema(
  {
    InventoryID: {
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

// InventorySchema.plugin(uniqueValidator);
// InventorySchema.plugin(AutoIncrement, {inc_field: 'id'});

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
