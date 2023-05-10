import mongoose from "mongoose";

// To add my user scema ...
const DietSchema = new mongoose.Schema({});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    gender: String,
    age: String,
    phone: String,
    mobile: {
      type: String,
      required: true,
      min: 5,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    metrics: {
      type: Array,
      default: [],
    },
    appointments: {
      type: Array,
      default: [],
    },
    nextApoitment: {
      type: String,
      default: "",
    },
    notes: {
      type: Array,
      default: [],
    },
    nutrition: {
      type: Array,
      default: [DietSchema],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
