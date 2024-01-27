import  jwt from 'jsonwebtoken';
class JwtValidation
{
jwt_signin = (user_info) =>
 { 
   let sign_info = jwt.sign({user_info}, process.env.PASS_KEY)
     
   return sign_info;
 }

}
export default new JwtValidation();