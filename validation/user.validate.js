
const Joi = require('joi');
const userValidation = {
    UserSchema : Joi.object({
        name: Joi.string().required().alphanum().min(3).max(30).required().trim(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required(),
        mobileNumber: Joi.number(),
        role: Joi.string().valid('user', 'admin').default('user')
    })
}

module.exports = userValidation;
