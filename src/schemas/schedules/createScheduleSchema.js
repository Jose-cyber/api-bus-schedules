const yup = require('../userSchema');

const createScheduleSchema = yup
    .object({
        saida: yup.string().min(3).max(255).required(),
        chegada: yup.string().min(3).max(255).required(),
        semanal: yup.boolean().required(),
        sabado: yup.boolean().required(),
        domingo: yup.boolean().required(),
        itinerario: yup.string().min(3).max(255).required(),
}).required();

module.exports = createScheduleSchema;