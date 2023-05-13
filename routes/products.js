import express from "express";
import {
  deleteProduct,
  getProducts,
  createProduct,
} from "../controllers/products.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getProducts);
//router.get("/", verifyToken, getProducts);

// router.get("/:userId/posts", verifyToken, getUserPosts);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);

router.post("/new", verifyToken, createProduct);

/**DELETE */
router.delete("/:id", verifyToken, deleteProduct);
router.patch("/:id", createProduct);

export default router;
