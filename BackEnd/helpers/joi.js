import { string, validate } from '@hapi/joi';

const loginValidation = (data) => {
  const schema = {
    name: string().min(4).required().email(),
    password: string().min(4).required(),
  };
  return validate(data, schema);
};

const signupValidation = (data) => {
  const schema = {
    name: string().min(4).required(),
    password: string().min(4).required(),
  };
  return validate(data, schema);
};

export {loginValidation, signupValidation};