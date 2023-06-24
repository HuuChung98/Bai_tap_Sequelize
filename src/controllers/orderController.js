import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

let models = initModels(sequelize);

const processOrder = (req, res) => {
  try {
    let { user_id, food_id, amount } = req.body;
    models.order.create({ user_id, food_id, amount });
    res.send("them mon thanh cong");
  } catch {
    res.send("them mon that bai");
  }
};

export default processOrder;
