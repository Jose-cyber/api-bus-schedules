const yup = require('./userSchema');

const createItinerariesSchema = yup
    .object({
        name: yup.string().min(3).max(255).required(),
        alias: yup.string().min(3).max(255).required()
}).required();

module.exports = createItinerariesSchema;