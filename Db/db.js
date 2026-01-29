// connectivity code server ---->db
import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

const db=mysql.createPool({
  host: process.env.SQL_HOST,//HELP TO MAINTAIN MULTIPLE CONNECTIONS AND DEFINEING THE CONNECTIVITY STRING
  database: process.env.SQL_DB,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB,
  PORT: process.env.SQL_PORT,
  waitForConnection: true,
  connectionlimit: 10,
  queueLimit: 0
})

export const connectDb = async () =>{
  try{
    const connection = await db.getConnection();//important line , CONNECTING EXPRESS AND MYSQL
    console.log("db connected successfully")
    connection.release();
  } catch (err){
    console.error("connection is not establishes",err);
    process.exit(1);
  }
  } 

  export default db;