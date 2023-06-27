import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import { successCode, failCode, errorCode } from "../config/response.js";

let models = initModels(sequelize);

// const processLike = async (req, res) => {
//   try {
//     let { user_id } = req.params;
//     let listLikeRes = await models.like_res.findOne({
//       include: ["re"],
//     },{
//       where: { user_id }
//     });
//     successCode(res, listLikeRes, "lấy data thành công");
//   } catch {
//     failCode(res ,"lấy data thất bại");
//   }
// };

const processLike = async (req, res) => {
  try {
    let { user_id  } = req.params;
    let listRes = await models.like_res.findAll( {
      where: {user_id}
    });
    successCode(res, listRes, "lấy data thành công");
  } catch {
    failCode(res, "lấy data thất bại");
  }
};

const processRate = async (req, res) => {
  try {
    let { user_id } = req.params;

    let listRateRes = await models.rate_res.findAll({
      where: {user_id}
    });
    successCode(res, listRateRes, "lấy data thất thành công");
  } catch {
    failCode(res, "lấy data thất bại");
  }
};

export { processLike, processRate };
