const yup = require('../userSchema');

const editItinerariesSchema = yup
    .object({
        id: yup.number().required(),
        name: yup.string().min(3).max(255).required(),
        alias: yup.string().min(3).max(255).required(),
        update: yup.object().shape({
            name: yup.string().required(),
            alias: yup.string().required(),
        }),
}).required();

module.exports = editItinerariesSchema;