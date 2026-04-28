import express from "express";
import { addBook } from "./book.service.js";
import { bookAdminApproval } from "../../middleware/auth.js";

const router = express.Router();

router.post("/", auth, bookAdminApproval, addBook);
export default router;
