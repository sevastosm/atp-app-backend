import Diet from "../models/Diet.js";
import User from "../models/User.js";
import { ObjectId } from "mongodb";

export const createUpdateDiet = async (req, res) => {
  const { id, dietId } = req.params;
  try {
    const { duration, boxes, caloriesLimit } = req.body;

    const newDiet = new Diet({
      duration: duration,
      boxes: boxes,
      caloriesLimit: caloriesLimit,
    });
    const user = await User.findById(id);

    console.log("req.params", req.params);

    let updatedDiet;
    if (dietId) {
      updatedDiet = user.nutrition.map((data, i) => {
        const dataID = typeof ObjectId(data._id)
          ? data._id.toString()
          : data._id;

        console.log("dataID", dataID);

        if (dataID === dietId) {
          return {
            ...data,
            boxes: boxes,
            duration: duration,
            caloriesLimit: caloriesLimit,
          };
        } else {
          return data;
        }
      });
      user.nutrition = updatedDiet;
      await user.save();
      const theUser = await User.findById(id);

      const users = await User.find()
        .select("-password")
        .sort({ createdAt: -1 });

      res.status(201).json({
        users: users,
        user: theUser,
        msg: "Επιτυχημένη ανανέωση διατροφής",
      });
    } else {
      user.nutrition.push(await newDiet.save());
      await user.save();
      const users = await User.find()
        .select("-password")
        .sort({ createdAt: -1 });
      const theUser = await User.findById(id);

      res.status(201).json({
        users: users,
        user: theUser,
        msg: "Επιτυχημένη εγγραφη διατροφής",
      });
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getAllDiets = async (req, res) => {
  try {
    // const { id } = req.params;
    const diets = await Diet.find()
      .select(["-createdAt", "-updatedAt"])
      .sort({ createdAt: -1 });
    res.status(200).json(diets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* READ */
export const getUserDiet = async (req, res) => {
  try {
    const { id } = req.params;
    const diets = await Diet.find()
      .select(["-createdAt", "-updatedAt"])
      .sort({ createdAt: -1 });
    const diet = diets.find((d) => {
      return d.userId.includes(id);
    });
    res.status(200).json(diet);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteDiet = async (req, res) => {
  try {
    const { id } = req.params;
    await Diet.findByIdAndDelete(id);
    const diets = await Diet.find()
      .select(["-createdAt", "-updatedAt"])
      .sort({ createdAt: -1 });
    res.status(200).json(diets);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
