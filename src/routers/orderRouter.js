import express from "express";
import processOrder from "../controllers/orderController.js";

const orderRouter = express();

orderRouter.post("/processOrder", processOrder);

export default orderRouter;
