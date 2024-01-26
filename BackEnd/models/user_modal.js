import  conn  from '../config/db.js'

class User_modal
{
  constructor() {
      this.connection = conn.dbConnection();
     }


   verify_username = async ( user_name ) =>
  {   
    try{
     let conn = this.connection;
     await conn.connect()
     const result = await conn.query(`SELECT * FROM users WHERE user_name = '${user_name}'`);
     return result.rows[0];
    } catch (error)
    {
      console.log(error)
    }

  } 

  information = async ( user_name ) =>
  {   
    try{
     let conn = this.connection;
     await conn.connect()
     const result = await conn.query(`SELECT * FROM users WHERE user_name = '${user_name}'`);
     console.log(result.rows[0])
     return result.rows[0];
    } catch (error)
    {
      console.log(error)
    }

  }

 

   signup = async ( data ) =>
  {   
  
     let conn = this.connection;
     await conn.connect()
     const result = await conn.query(`INSERT INTO users(user_name,user_password) VALUES(
      '${data.user_name}',
      '${data.user_password}'
          ) returning *;
  `);

    return result.rows[0];
  }


}
export default new User_modal();