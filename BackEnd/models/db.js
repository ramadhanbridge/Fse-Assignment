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
     CREATE TABLE IF NOT EXISTS users ( id SERIAL, user_name TEXT NOT NULL, user_password TEXT NOT NULL, PRIMARY KEY (id));
     CREATE TABLE IF NOT EXISTS messages ( id SERIAL, user_id INT,user_name TEXT NOT NULL, message_body TEXT NOT NULL,date NOW ,PRIMARY KEY (id));
    `);
    await conn.end();

   } catch(err) {

     console.log(`DB ERROR : ${err}`)

   }
  }


}
export default new Db_queries();