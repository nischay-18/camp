const Joi = require('joi');
const {number} = require('joi')
module.exports.campgroundSchema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        description: Joi.string().required()
});


module.exports.ReviewSchema = Joi.object({
    body:Joi.string().required(),
    rating:Joi.number().required().min(1).max(5)
})