import User from "../models/User.js";
import bcrypt from "bcrypt";

import send from "../mail.js";

/* READ */

export const getAllUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, mobile, role, gender } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(mobile, salt);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      password: passwordHash,
      role: role || "user",
      metrics: [],
      notes: [],
      nutrition: [],
      gender: gender,
    });

    const user = await User.findById(id);
    if (user) {
      // Define the filter to find the document to update
      const filter = { _id: id };
      // Define the update operation
      const user = await User.findOneAndUpdate(filter, req.body);
      await user.save();
      const updatedUser = await User.findOne(filter);
      const users = await User.find().sort({ createdAt: -1 });
      res
        .status(201)
        .json({ user: updatedUser, users: users, msg: "Επιτυχημένη ανανέωση" });
    } else {
      await newUser.save();
      // const users = await getUsers;
      const user = await User.findOne({ email: email });
      const users = await User.find()
        .select("-password")
        .sort({ createdAt: -1 });
      delete user.password;
      res
        .status(201)
        .json({ user: user, users: users, msg: "Επιτυχημένη εγγραφη" });
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.method === "DELETE") {
      await User.findByIdAndDelete(id);
      const users = await User.find()
        .select("-password")
        .sort({ createdAt: -1 });
      res.status(200).json({ users: users, msg: "Επιτυχημένη διαγραφή" });
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// export const getUserFriends = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );
//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// /* UPDATE */
// export const addRemoveFriend = async (req, res) => {
//   try {
//     const { id, friendId } = req.params;
//     const user = await User.findById(id);
//     const friend = await User.findById(friendId);

//     if (user.friends.includes(friendId)) {
//       user.friends = user.friends.filter((id) => id !== friendId);
//       friend.friends = friend.friends.filter((id) => id !== id);
//     } else {
//       user.friends.push(friendId);
//       friend.friends.push(id);
//     }
//     await user.save();
//     await friend.save();

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );

//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
