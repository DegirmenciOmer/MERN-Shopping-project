import express from "express";
import { authUser } from "../controllers/userController.js";
import { getProducts } from "../controllers/productController.js";

const router = express.Router();

router.post("/login", authUser);

export default router;
