import express from "express";

import userRouter from "./userRouter.js";

const rootRouter = express.Router();

// Quản lý tên đối tượng của end-point
rootRouter.use("/user", userRouter);

export default rootRouter;