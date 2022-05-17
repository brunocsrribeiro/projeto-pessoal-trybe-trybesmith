import Joi from 'joi';

export default Joi.object().keys({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().strict().min(1).required(),
  password: Joi.string().min(8).required(),
});
