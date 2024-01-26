import  conn  from '../config/db'
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
     DROP TABLE IF EXISTS users CASCADE;
     
     CREATE TABLE IF NOT EXISTS users ( id SERIAL, user_name TEXT NOT NULL, password TEXT NOT NULL, PRIMARY KEY (id));

     CREATE TABLE IF NOT EXISTS sessions ( session_id SERIAL, user_id INTEGER  references users(id), user_name  TEXT NOT NULL,PRIMARY KEY (session_id));
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