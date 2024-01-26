import { string, validate } from '@hapi/joi';

const loginValidation = (data) => {
  const schema = {
    email: string().min(4).required().email(),
    password: string().min(4).required(),
  };
  return validate(data, schema);
};

const signupValidation = (data) => {
  const schema = {
    user_name: string().min(4).required(),
    user_password: string().min(4).required(),
  };
  return validate(data, schema);
};

export {loginValidation, signupValidation};