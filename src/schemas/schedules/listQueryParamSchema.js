const yup = require('../userSchema');

const listQueryParamSchema = yup
    .object({
        itinerario: yup.string().min(3).max(255),
        semanal: yup.boolean(),
        sabado: yup.boolean(),
        domingo: yup.boolean()
});

module.exports = listQueryParamSchema;