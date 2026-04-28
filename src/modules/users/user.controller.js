import express from "express";

import { userLogin, userProfile, userRegister } from "./user.service.js";
import { auth } from "../../middleware/auth.js";

const router = express.Router();

//user registeration

router.post("/register", userRegister);

router.post("/login", userLogin);
router.get("/profile", auth, userProfile);

// router.get("/profile", async (req, res) => {});
export default router;
