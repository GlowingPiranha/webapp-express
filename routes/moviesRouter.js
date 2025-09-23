import express from "express";
import { createReview, index, show } from "../controllers/moviesController.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.post("/reviews", createReview);

export default router;