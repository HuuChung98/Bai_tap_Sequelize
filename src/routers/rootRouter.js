import express from "express";

import userRouter from "./userRouter.js";
import orderRouter from "./orderRouter.js"

const rootRouter = express.Router();

// Quản lý tên đối tượng của end-point
rootRouter.use("/user", userRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;