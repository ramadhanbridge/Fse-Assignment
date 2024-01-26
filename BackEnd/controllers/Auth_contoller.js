import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../models/user_modal";
import validate from "../helpers/Auth_validation";
import jwtValidation from "../helpers/jwt";
import message from "../helpers/message";
dotenv.config();
class Auth {
  signup = async (req, res) => {
    const data = {
      user_name: req.body.name,
      user_password: await validate.password_encryption(req.body.password),
    };

    const user_info = await db.signup(data);
    const token = jwtValidation.jwt_signin(user_info);

    return message.success(res, 201, "Account successfully created ", token);
  };

  signin = async (req, res) => {
    const user_info = await db.information(req.body.email);
    const token = jwtValidation.jwt_signin(user_info);
    return message.success(res, 200, "successfully logged in", token);
  };
}
export default new Auth();
