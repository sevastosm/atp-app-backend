import express from "express";
import { createUpdateDiet, getUserDiet } from "../controllers/diet.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.post("/new/:id", verifyToken, createUpdateDiet);

router.get("/:id", verifyToken, getUserDiet);
// /* UPDATE */
router.patch("/:id/:dietId", createUpdateDiet);

// /* DELETE */
// router.delete("/:id", deleteUser);

export default router;
