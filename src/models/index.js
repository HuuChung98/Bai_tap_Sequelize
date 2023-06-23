// Nơi lưu cấu trúc kết nối CSDL
import { Sequelize } from "sequelize";
import config from "../config/config.js";

let sequelize = new Sequelize(
    config.database, 
    config.user, 
    config.pass, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
});

// Thử kết nối với server xem đã thành công hay chưa?
// try {
//     await sequelize.authenticate();
//     console.log("thanh cong");
// } catch {
//     console.log("that bai");
// }

// node src/models/index.jsx

// yarn add sequelize-auto
// yarn sequelize-auto -h localhost -d db_food -u root -x 1234 -p 3306 --dialect mysql -o src/models -l esm
export default sequelize;