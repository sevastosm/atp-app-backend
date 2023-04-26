import express from "express";
import {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getAllUsers);

router.post("/new", createUser);

//router.get("/:id", verifyToken, getUser);

// router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id", createUser);
/* DELETE */
router.delete("/:id", deleteUser);

export default router;
