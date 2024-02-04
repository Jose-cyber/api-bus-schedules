const yup = require('../userSchema');

const listQueryParamSchema = yup
    .object({
        itineraries_name: yup.string().min(3).max(255),
        weekly: yup.boolean(),
        saturday: yup.boolean(),
        sunday: yup.boolean(),
        come_from_sfx: yup.boolean(),
});

module.exports = listQueryParamSchema;