import express from "express";
import { index, show } from "../controllers/moviesController.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);

export default router;