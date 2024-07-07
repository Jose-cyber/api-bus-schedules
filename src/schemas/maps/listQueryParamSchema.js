const yup = require('../userSchema');

const listQueryParamSchema = yup
    .object({
        maps_name: yup.string().min(3).max(255),
});

module.exports = listQueryParamSchema;