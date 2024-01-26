import dotenv from "dotenv";
import db from "../models/user_modal.js";
import validate from "../helpers/Auth_validation.js";
import jwtValidation from "../helpers/jwt.js";
import message from "../helpers/message.js";
dotenv.config();
class Auth {
  signup = async (req, res) => {
    const data = {
      user_name: req.body.username,
      user_password: await validate.password_encryption(req.body.password),
    };

    const user_info = await db.signup(data);
    const token = jwtValidation.jwt_signin(user_info);

    return message.success(res, 201, "Account successfully created ", {user_info,token});
  };

  signin = async (req, res) => {
    const user_info = await db.information(req.body.username);
    const token = jwtValidation.jwt_signin(user_info);
    return message.success(res, 200, "successfully logged in", {user_info,token});
  };
}
export default new Auth();
