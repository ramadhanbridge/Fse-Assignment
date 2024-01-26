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
    // DROP TABLE IF EXISTS users CASCADE;
     let conn = this.connection;
     await conn.connect()
     await conn.query(`     
     CREATE TABLE IF NOT EXISTS users ( id SERIAL, user_name TEXT NOT NULL, user_password TEXT NOT NULL, PRIMARY KEY (id));
    `);
    // await conn.query(`INSERT INTO users(firstName,lastname,expertise,email,occupation,role,password,address,Bio) VALUES(
    //       'admin',
    //       'lastname',
    //       'programmer',
    //       '$admin@gmail.com',
    //       'swimming',
    //       'admin',
    //       '${process.env.FAKE_PASS_WORD}',
    //       'kigali',
    //       'i like animals'
    //     ) 
    //   `);
    await conn.end();

   } catch(err) {

     console.log(`DB ERROR : ${err}`)

   }
  }

}
export default new Db_queries();