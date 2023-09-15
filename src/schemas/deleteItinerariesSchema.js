const yup = require('./userSchema');

const deleteItinerariesSchema = yup
    .object({
        id: yup.number().required(),
        name: yup.string().min(3).max(255).required(),
        alias: yup.string().min(3).max(255).required()
}).required();

module.exports = deleteItinerariesSchema;