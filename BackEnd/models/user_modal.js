import  conn  from '../config/db'

class User_modal
{
  constructor() {
      this.connection = conn.dbConnection();
     }


   verify_email = async ( email ) =>
  {   
    try{
     let conn = this.connection;
     await conn.connect()
     const result = await conn.query(`SELECT * FROM users WHERE email = '${email}'`);
     return result.rows[0];
    } catch (error)
    {
      console.log(error)
    }

  } 

  information = async ( email ) =>
  {   
    try{
     let conn = this.connection;
     await conn.connect()
     const result = await conn.query(`SELECT * FROM users WHERE email = '${email}'`);
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
     const result = await conn.query(`INSERT INTO users(user_name,password) VALUES(
      '${data.firstName}',
      '${data.password}'
          ) returning *;
  `);

    return result.rows[0];
  }


}
export default new User_modal();