import express from "express";

import { processLike, processRate } from "../controllers/userController.js";

const userRouter = express.Router();

// API Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và user)
userRouter.get("/like/:user_id", processLike);

// API Xử lý đánh giá nhà hàng (thêm đánh giá, lấy danh sách đánh theo nhà hàng và user)
userRouter.get("/rate/:user_id", processRate);

export default userRouter;
