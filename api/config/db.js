import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_USER_PASSWORD,
  password: "pi04320416",

  database: process.env.MYSQL_DATABASE,
  // port: 3306,
});
