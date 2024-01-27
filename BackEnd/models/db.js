import  conn  from '../config/db.js'
import { config } from 'dotenv';
config();

class Db_queries{

  constructor() {
    this.connection = conn.dbConnection();
   }

     
  create_tables= async () =>
 {   
   try {

     let conn = this.connection;
     await conn.connect()
     await conn.query(`     
     CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY, 
       user_name TEXT NOT NULL, 
       user_password TEXT NOT NULL);
     CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      user_id INT,
      user_name TEXT NOT NULL,
      message_body TEXT NOT NULL,
      date DATE DEFAULT current_date,
      time TIME DEFAULT current_time
    );
    
    `);
    await conn.end();

   } catch(err) {

     console.log(`DB ERROR : ${err}`)

   }
  }


}
export default new Db_queries();