import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import { successCode, failCode, errorCode } from "../config/response.js";

let models = initModels(sequelize);

const processOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount } = req.body;
     await models.order.create({ user_id, food_id, amount });
     successCode(res, "them mon thanh cong");
  } catch {
    failCode(res, "them mon that bai");
  }
};

export default processOrder;
