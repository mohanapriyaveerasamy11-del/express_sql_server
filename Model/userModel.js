import db from '../Db/db.js';

const table ="user";

class UserModel {
 static async createUserModel({name, email, password}) {
    const sql = `INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)` //place holders
    
    const [result] = await db.execute(sql, [name, email, password]);
    //it returns inserted id,rows affected
    
    return result.insertId;
}
}

export default UserModel;
