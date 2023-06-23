import express from "express";
import rootRouter from "./routers/rootRouter.js";

const app = express();

app.listen(8080);

app.use(express.json()); // middleware chuyển đổi data JSON xuống cho BE

app.use("/api", rootRouter)

