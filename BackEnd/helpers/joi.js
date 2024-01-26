import Joi from '@hapi/joi';

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
  });
  return schema.validate(data);
};

const signupValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
  });
  return schema.validate(data);
};

export { loginValidation, signupValidation };
