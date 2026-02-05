import db from '../Db/db.js';

const table ="authusers";

class authUserModel {
    
  static async UserLoginModel(email) { //find user by email
    const sql = `SELECT * FROM ${table} WHERE email = ?`;
    const [rows] = await db.execute(sql, [email]);
    return rows[0];
  }

static async UserSignUpModel({ name, email, password, role}) {
    const sql = `INSERT INTO ${table} (name, email, password,role) VALUES (?, ?, ?)`;
    const [result] = await db.execute(sql, [name, email, password, role]);
    return result.insertId;
  }
}




export default authUserModel;


  