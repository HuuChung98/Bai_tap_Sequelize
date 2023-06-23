import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

let models = initModels(sequelize);

const processLike = async (req, res) => {
  try {
    let listFood = await models.order.findAll({
      include: ["food"],
    });
    res.send(listFood);
  } catch {
    res.send("lấy data fail");
  }
};

const processRate = (req, res) => {
  res.send("lay data thanh cong");
};

export { processLike, processRate };
