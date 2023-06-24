import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

let models = initModels(sequelize);

const processLike = async (req, res) => {
  try {
    let { user_id } = req.params;
    let listLikeRes = await models.like_res.findAll({
      include: ["re"],
    },{
      where: { user_id }  
    });
    res.send(listLikeRes);
  } catch {
    res.send("lấy data fail");
  }
};

const processRate = async (req, res) => {
  try {
    // let { user_id, like_res } = req.params;

    let listRateRes = await models.rate_res.findAll({
      include: ["re"],
    });
    res.send(listRateRes);
  } catch {
    res.send("lấy data fail");
  }
};

export { processLike, processRate };
