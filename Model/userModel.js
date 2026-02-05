import db from '../Db/db.js';

const table ="user";

class UserModel {
 static async createUserModel({name, email, password}) {
    const sql = `INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)` //place holders
    
    const [result] = await db.execute(sql, [name, email, password]);
    //it returns inserted id,rows affected
    
    return result.insertId;
}
static async getAllUsersModel() {
    const sql = `SELECT * FROM ${table}`;
    const [rows] =await db.execute(sql);
    return rows;
 }

 static async updateUserPasswordModel(id,{password}){
    const sql = `UPDATE ${table} SET password=? WHERE id=?`
    const[update] = await db.execute(sql, [password, id])
    return update.affectedRows;
 }
 static async deleteUserModel(id){
    const sql =`DELETE FROM ${table} WHERE id=?`;
      const [delte] = await db.execute(sql, [id]);
      return delte.affectedRows;
}
}

export default UserModel;
