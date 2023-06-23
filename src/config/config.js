// thêm biến môi trường 
import dotevn from "dotenv";

dotevn.config();

let config = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER, 
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
}
export default config;