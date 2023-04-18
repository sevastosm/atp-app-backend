import express from "express";
import { getProducts } from "../controllers/products.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getProducts);
//router.get("/", verifyToken, getProducts);

// router.get("/:userId/posts", verifyToken, getUserPosts);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);

export default router;
