import express from "express";


import { processLike, processRate } from "../controllers/userController.js";

const userRouter = express.Router();

// API xử lý like/unlike
userRouter.get("/get-like", processLike);
// API xử lý đánh giá
userRouter.get("/get-rate", processRate);

export default userRouter;
