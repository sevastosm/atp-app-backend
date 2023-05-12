import mongoose from "mongoose";

// To add my user scema ...

const DietSchema = new mongoose.Schema(
  {
    duration: {
      type: Object,
      required: true,
    },
    boxes: {
      type: Array,
      required: true,
      default: [],
    },
    caloriesLimit: String,
  },
  { timestamps: true }
);

const Diet = mongoose.model("Diet", DietSchema);
export default Diet;
