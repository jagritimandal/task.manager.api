
const Joi = require('joi');
const taskValidation ={
    TaskSchema: Joi.object({
        title: Joi.string().required().trim(),
        description: Joi.string(),
        status: Joi.string().valid('To Do', 'In Progress', 'Done').default('To Do'),
        priority: Joi.boolean().valid('Low', 'Medium', 'High').default('Medium'),
        duedate:Joi.date().optional(),
        owner: Joi.string()
    })
}

module.exports =taskValidation;
