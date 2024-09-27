const yup = require('../userSchema');

const listQueryParamSchema = yup
    .object({
        route_name: yup.string().min(3).max(100).required()
}).required();

module.exports = listQueryParamSchema;

